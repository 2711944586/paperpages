<script setup lang="ts">
import { computed, ref } from 'vue'

import EChartPanel from '@/components/EChartPanel.vue'
import { getStreamMeta, reviewDataset } from '@/data/reviewAccess'

const activeStream = ref('all')
const curatedOnly = ref(false)

const filteredReferences = computed(() =>
  reviewDataset.references.filter((reference) => {
    const matchesStream = activeStream.value === 'all' || reference.streamKeys.includes(activeStream.value)
    const matchesCurated = !curatedOnly.value || reference.isCurated
    return matchesStream && matchesCurated
  }),
)

const years = computed(() => {
  const set = new Set(filteredReferences.value.map((reference) => reference.year).filter((year) => year > 0))
  return Array.from(set).sort((left, right) => left - right)
})

const visibleStreamKeys = computed(() =>
  activeStream.value === 'all' ? reviewDataset.streams.map((stream) => stream.key) : [activeStream.value],
)

const yearlyTotals = computed(() =>
  years.value.map((year) => ({
    year,
    total: filteredReferences.value.filter((reference) => reference.year === year).length,
  })),
)

const peakYear = computed(() =>
  yearlyTotals.value.reduce(
    (best, entry) => (entry.total > best.total ? entry : best),
    { year: years.value[0] ?? 0, total: 0 },
  ),
)

const recentReferences = computed(() =>
  [...filteredReferences.value].sort((left, right) => right.year - left.year || right.mentionCount - left.mentionCount).slice(0, 8),
)

const chartOption = computed(() => ({
  color: visibleStreamKeys.value.map((key) => getStreamMeta(key).accent),
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
  legend: {
    top: 8,
    textStyle: { color: '#665d54' },
  },
  grid: {
    left: 24,
    right: 18,
    top: 56,
    bottom: 30,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: years.value,
    axisLabel: { color: '#665d54' },
    axisLine: { lineStyle: { color: 'rgba(82, 61, 42, 0.18)' } },
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#665d54' },
    splitLine: { lineStyle: { color: 'rgba(82, 61, 42, 0.08)' } },
  },
  series: visibleStreamKeys.value.map((streamKey) => ({
    name: getStreamMeta(streamKey).label,
    type: 'bar',
    stack: 'references',
    emphasis: { focus: 'series' },
    data: years.value.map(
      (year) =>
        filteredReferences.value.filter(
          (reference) => reference.year === year && reference.streamKeys.includes(streamKey),
        ).length,
    ),
  })),
}))
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight selector-card">
      <span class="kicker">Controls</span>
      <h2>按主线和是否为关键论文筛选</h2>
      <div class="grid grid-2" style="margin-top: 18px">
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
          <span class="field-label">显示范围</span>
          <span class="toggle">
            <input v-model="curatedOnly" type="checkbox" />
            仅显示关键论文
          </span>
        </label>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Chart</span>
          <h2>文献年份分布</h2>
        </div>
        <p>峰值年份：{{ peakYear.year || '无' }}，共 {{ peakYear.total }} 篇。</p>
      </div>

      <div class="chart-box">
        <EChartPanel :option="chartOption" :height="420" />
      </div>
    </section>

    <section class="grid grid-3">
      <article class="metric-card">
        <div class="metric-label">年份跨度</div>
        <div class="metric-value">{{ years[0] ?? '—' }} - {{ years[years.length - 1] ?? '—' }}</div>
        <p class="metric-sub">当前筛选覆盖的最早与最晚年份。</p>
      </article>
      <article class="metric-card">
        <div class="metric-label">筛选后文献数</div>
        <div class="metric-value">{{ filteredReferences.length }}</div>
        <p class="metric-sub">与时间线和列表保持同步。</p>
      </article>
      <article class="metric-card">
        <div class="metric-label">主线数</div>
        <div class="metric-value">{{ visibleStreamKeys.length }}</div>
        <p class="metric-sub">总览或单主线视图。</p>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Recent</span>
          <h2>按年份靠前的论文</h2>
        </div>
        <p>优先查看近两年的新增论文。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="reference in recentReferences" :key="reference.id" class="paper-card">
          <div class="metric-label">{{ reference.streamLabel }}</div>
          <h3>{{ reference.title }}</h3>
          <p>{{ reference.year }} · 提及 {{ reference.mentionCount }} 次</p>
        </article>
      </div>
    </section>
  </div>
</template>
