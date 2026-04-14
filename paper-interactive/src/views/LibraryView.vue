<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import {
  formatAuthors,
  humanizeDownloadStatus,
  humanizeVerificationStatus,
  matchesKeyword,
  reviewDataset,
  statusTone,
} from '@/data/reviewAccess'

const keyword = ref('')
const activeStream = ref('all')
const verificationFilter = ref('all')
const sortMode = ref('year-desc')
const localOnly = ref(false)
const selectedId = ref(reviewDataset.references[0]?.id ?? '')

const filteredReferences = computed(() => {
  const list = reviewDataset.references.filter((reference) => {
    const matchesStream = activeStream.value === 'all' || reference.streamKeys.includes(activeStream.value)
    const matchesVerification =
      verificationFilter.value === 'all' || reference.verificationStatus === verificationFilter.value
    const matchesLocal = !localOnly.value || Boolean(reference.localPdf)
    return matchesStream && matchesVerification && matchesLocal && matchesKeyword(reference, keyword.value)
  })

  list.sort((left, right) => {
    if (sortMode.value === 'title') {
      return left.title.localeCompare(right.title)
    }
    if (sortMode.value === 'year-asc') {
      return left.year - right.year || left.title.localeCompare(right.title)
    }
    return right.year - left.year || left.title.localeCompare(right.title)
  })

  return list
})

watch(
  filteredReferences,
  (references) => {
    if (!references.some((reference) => reference.id === selectedId.value)) {
      selectedId.value = references[0]?.id ?? ''
    }
  },
  { immediate: true },
)

const selectedReference = computed(
  () => filteredReferences.value.find((reference) => reference.id === selectedId.value) ?? filteredReferences.value[0] ?? null,
)
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight selector-card">
      <span class="kicker">Filters</span>
      <h2>筛选文献库</h2>
      <div class="grid grid-3" style="margin-top: 18px">
        <label class="field">
          <span class="field-label">搜索</span>
          <input v-model="keyword" class="text-input" type="text" placeholder="标题、作者、来源、主线、ID" />
        </label>

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
          <span class="field-label">核验状态</span>
          <select v-model="verificationFilter" class="select">
            <option value="all">全部</option>
            <option value="verified">已核验</option>
            <option value="unverified">待核验</option>
          </select>
        </label>

        <label class="field">
          <span class="field-label">排序</span>
          <select v-model="sortMode" class="select">
            <option value="year-desc">年份从新到旧</option>
            <option value="year-asc">年份从旧到新</option>
            <option value="title">标题 A-Z</option>
          </select>
        </label>

        <label class="field">
          <span class="field-label">附加条件</span>
          <span class="toggle">
            <input v-model="localOnly" type="checkbox" />
            仅显示本地 PDF
          </span>
        </label>
      </div>
    </section>

    <section class="library-shell">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Shelf</span>
            <h2>参考文献列表</h2>
          </div>
          <p>{{ filteredReferences.length }} 篇符合当前筛选。</p>
        </div>

        <div v-if="filteredReferences.length" class="list-stack">
          <button
            v-for="reference in filteredReferences"
            :key="reference.id"
            type="button"
            class="outline-button"
            :class="{ active: selectedReference?.id === reference.id }"
            @click="selectedId = reference.id"
          >
            <div class="pill-row" style="margin-bottom: 10px">
              <span class="pill">{{ reference.streamLabel }}</span>
              <span class="status-pill" :class="`status-${statusTone(reference.verificationStatus)}`">
                {{ humanizeVerificationStatus(reference.verificationStatus) }}
              </span>
            </div>
            <h3>{{ reference.title }}</h3>
            <p class="muted">{{ reference.year }} · {{ formatAuthors(reference.authors, 2) }}</p>
          </button>
        </div>
        <div v-else class="empty-state">当前筛选没有匹配结果。</div>
      </article>

      <article v-if="selectedReference" class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Detail</span>
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
          <span class="pill">{{ selectedReference.id }}</span>
        </div>

        <div class="note-box">
          <strong>{{ formatAuthors(selectedReference.authors) }}</strong>
          <div class="muted">{{ selectedReference.year }} · {{ selectedReference.venue || '未标注来源' }}</div>
        </div>

        <p style="margin-top: 18px">{{ selectedReference.citation }}</p>

        <table class="table" style="margin-top: 18px">
          <tbody>
            <tr>
              <th>正文提及</th>
              <td>{{ selectedReference.mentionCount }} 次</td>
            </tr>
            <tr v-if="selectedReference.auditSection">
              <th>附录分组</th>
              <td>{{ selectedReference.auditSection }}</td>
            </tr>
            <tr v-if="selectedReference.doi">
              <th>DOI</th>
              <td>{{ selectedReference.doi }}</td>
            </tr>
            <tr v-if="selectedReference.arxivId">
              <th>ArXiv</th>
              <td>{{ selectedReference.arxivId }}</td>
            </tr>
            <tr v-if="selectedReference.pdfFilename">
              <th>文件名</th>
              <td>{{ selectedReference.pdfFilename }}</td>
            </tr>
          </tbody>
        </table>

        <div class="action-row" style="margin-top: 18px">
          <a v-if="selectedReference.localPdf" class="action-link" :href="selectedReference.localPdf" target="_blank" rel="noreferrer">
            打开本地 PDF
          </a>
          <a
            v-if="selectedReference.externalUrl"
            class="action-link action-link-secondary"
            :href="selectedReference.externalUrl"
            target="_blank"
            rel="noreferrer"
          >
            打开外部页面
          </a>
        </div>

        <div style="margin-top: 18px" class="list-stack">
          <article v-for="mention in selectedReference.mentions.slice(0, 6)" :key="`${mention.sectionId}-${mention.snippet}`" class="paper-card">
            <div class="metric-label">{{ mention.sectionTitle }}</div>
            <p>{{ mention.snippet }}</p>
          </article>
        </div>
      </article>
    </section>
  </div>
</template>
