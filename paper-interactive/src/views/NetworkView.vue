<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import EChartPanel from '@/components/EChartPanel.vue'
import {
  formatAuthors,
  getStreamMeta,
  humanizeDownloadStatus,
  humanizeVerificationStatus,
  referenceMap,
  relationNeighbors,
  reviewDataset,
  statusTone,
} from '@/data/reviewAccess'

type GraphClickPayload = {
  dataType?: string
  data?: {
    id?: string
  }
}

const activeStream = ref('all')
const curatedOnly = ref(false)
const minMentions = ref('1')
const selectedId = ref('')

const nodePool = computed(() =>
  reviewDataset.references.filter((reference) => {
    const matchesStream = activeStream.value === 'all' || reference.streamKeys.includes(activeStream.value)
    const matchesCurated = !curatedOnly.value || reference.isCurated
    return matchesStream && matchesCurated && reference.mentionCount >= Number(minMentions.value)
  }),
)

const nodeIds = computed(() => new Set(nodePool.value.map((reference) => reference.id)))

const visibleEdges = computed(() =>
  reviewDataset.relationEdges.filter((edge) => nodeIds.value.has(edge.source) && nodeIds.value.has(edge.target)),
)

watch(
  nodePool,
  (references) => {
    if (!references.some((reference) => reference.id === selectedId.value)) {
      selectedId.value = references[0]?.id ?? ''
    }
  },
  { immediate: true },
)

const selectedReference = computed(() => referenceMap.get(selectedId.value) ?? nodePool.value[0] ?? null)

const networkOption = computed(() => {
  const categoryKeys = Array.from(new Set(nodePool.value.map((reference) => reference.streamKeys[0] ?? 'overview')))
  const categoryIndex = new Map(categoryKeys.map((key, index) => [key, index]))

  return {
    tooltip: {
      formatter: (payload: { dataType?: string; data?: { reference?: { title?: string; streamLabel?: string; mentionCount?: number } } }) => {
        if (payload.dataType !== 'node') {
          return '章节共现关系'
        }
        const reference = payload.data?.reference
        return `${reference?.title ?? '未命名文献'}<br/>${reference?.streamLabel ?? ''} · 提及 ${reference?.mentionCount ?? 0} 次`
      },
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        roam: true,
        draggable: false,
        symbol: 'circle',
        force: {
          repulsion: 180,
          gravity: 0.08,
          edgeLength: [60, 150],
        },
        label: {
          show: false,
        },
        emphasis: {
          focus: 'adjacency',
          label: {
            show: true,
            formatter: (payload: { data?: { shortLabel?: string } }) => payload.data?.shortLabel ?? '',
            color: '#261f18',
          },
        },
        lineStyle: {
          color: 'rgba(82, 61, 42, 0.18)',
          curveness: 0.08,
        },
        categories: categoryKeys.map((key) => ({
          name: getStreamMeta(key).label,
          itemStyle: { color: getStreamMeta(key).accent },
        })),
        data: nodePool.value.map((reference) => ({
          id: reference.id,
          name: reference.title,
          shortLabel: `${reference.title.slice(0, 16)}${reference.title.length > 16 ? '…' : ''}`,
          value: reference.mentionCount,
          category: categoryIndex.get(reference.streamKeys[0] ?? 'overview') ?? 0,
          symbolSize: 16 + reference.mentionCount * 3,
          itemStyle: {
            color: getStreamMeta(reference.streamKeys[0] ?? 'overview').accent,
          },
          reference,
        })),
        edges: visibleEdges.value.map((edge) => ({
          source: edge.source,
          target: edge.target,
          value: edge.weight,
          lineStyle: {
            width: 1 + edge.weight * 0.6,
            opacity: 0.38,
          },
        })),
      },
    ],
  }
})

const relatedReferences = computed(() => {
  if (!selectedReference.value) {
    return []
  }
  const allowedIds = nodeIds.value
  return relationNeighbors(selectedReference.value.id).filter((reference) => allowedIds.has(reference.id)).slice(0, 8)
})

function handleChartClick(payload: unknown) {
  const graphPayload = payload as GraphClickPayload
  if (graphPayload.dataType === 'node' && graphPayload.data?.id) {
    selectedId.value = graphPayload.data.id
  }
}
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight selector-card">
      <span class="kicker">Filters</span>
      <h2>关系图筛选</h2>
      <div class="grid grid-3" style="margin-top: 18px">
        <label class="field">
          <span class="field-label">主线</span>
          <select v-model="activeStream" class="select">
            <option value="all">全部主线</option>
            <option v-for="stream in reviewDataset.streams" :key="stream.key" :value="stream.key">
              {{ stream.label }}
            </option>
          </select>
        </label>

        <label class="field">
          <span class="field-label">最少提及次数</span>
          <select v-model="minMentions" class="select">
            <option value="1">1 次</option>
            <option value="2">2 次</option>
            <option value="3">3 次</option>
          </select>
        </label>

        <label class="field">
          <span class="field-label">范围</span>
          <span class="toggle">
            <input v-model="curatedOnly" type="checkbox" />
            仅显示关键论文
          </span>
        </label>
      </div>
    </section>

    <section class="library-shell">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Graph</span>
            <h2>章节共现网络</h2>
          </div>
          <p>{{ nodePool.length }} 个节点 / {{ visibleEdges.length }} 条边</p>
        </div>

        <div class="chart-box">
          <EChartPanel :option="networkOption" :height="520" @chart-click="handleChartClick" />
        </div>
      </article>

      <article v-if="selectedReference" class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Selected</span>
            <h2>{{ selectedReference.title }}</h2>
          </div>
          <p>{{ selectedReference.streamLabel }}</p>
        </div>

        <div class="pill-row" style="margin-bottom: 16px">
          <span class="status-pill" :class="`status-${statusTone(selectedReference.verificationStatus)}`">
            {{ humanizeVerificationStatus(selectedReference.verificationStatus) }}
          </span>
          <span class="status-pill" :class="`status-${statusTone(selectedReference.downloadStatus)}`">
            {{ humanizeDownloadStatus(selectedReference.downloadStatus) }}
          </span>
        </div>

        <div class="note-box">
          <strong>{{ selectedReference.year }}</strong>
          <div class="muted">{{ formatAuthors(selectedReference.authors) }}</div>
          <div class="muted">{{ selectedReference.venue || '未标注来源' }}</div>
        </div>

        <div class="action-row" style="margin-top: 18px">
          <a v-if="selectedReference.localPdf" class="action-link" :href="selectedReference.localPdf" target="_blank" rel="noreferrer">
            打开 PDF
          </a>
          <a
            v-else-if="selectedReference.externalUrl"
            class="action-link action-link-secondary"
            :href="selectedReference.externalUrl"
            target="_blank"
            rel="noreferrer"
          >
            外部页面
          </a>
        </div>

        <div style="margin-top: 18px" class="list-stack">
          <article v-for="reference in relatedReferences" :key="reference.id" class="paper-card">
            <h3>{{ reference.title }}</h3>
            <p>{{ reference.year }} · {{ reference.streamLabel }}</p>
          </article>
        </div>
      </article>
    </section>
  </div>
</template>
