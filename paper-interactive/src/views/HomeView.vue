<script setup lang="ts">
import { computed } from 'vue'

import {
  buildReferenceLabel,
  formatAuthors,
  humanizeDownloadStatus,
  humanizeVerificationStatus,
  reviewDataset,
  streamDescriptions,
} from '@/data/reviewAccess'

const metrics = computed(() => [
  {
    label: '综述章节',
    value: reviewDataset.meta.sectionCount,
    sub: '按章节与子节重组阅读路径，替代旧论文讲述式页面。',
  },
  {
    label: '附录文献',
    value: reviewDataset.meta.referenceCount,
    sub: '全部来自最新综述附录。',
  },
  {
    label: '已核验',
    value: reviewDataset.meta.verifiedCount,
    sub: '来源与状态已写入核验清单。',
  },
  {
    label: '本地 PDF',
    value: reviewDataset.meta.downloadedCount,
    sub: '开放获取文献已入库，文献库页面可直接静态跳转。',
  },
])

const curatedReferences = computed(() => reviewDataset.curatedReferences.slice(0, 6))
const recentReferences = computed(() => reviewDataset.references.filter((reference) => reference.year >= 2023).length)
</script>

<template>
  <div class="grid">
    <section class="hero-grid">
      <article class="panel panel-tight story-card">
        <span class="kicker">Overview</span>
        <h2>站点已切换到综述与参考文献主线。</h2>
        <p>当前内容只保留综述正文、附录参考文献和论文工作区。旧图表、旧仿真和旧稿叙述已经移除。</p>
        <div class="action-row" style="margin-top: 18px">
          <router-link to="/review" class="action-link">查看综述骨架</router-link>
          <router-link to="/library" class="action-link action-link-secondary">进入文献库</router-link>
          <router-link to="/paper" class="action-link action-link-secondary">预留论文页面</router-link>
        </div>
      </article>

      <aside class="panel panel-tight info-card">
        <span class="kicker">Reading Path</span>
        <h3>当前站点的阅读顺序</h3>
        <div class="list-stack">
          <div v-for="(step, index) in reviewDataset.readingPath" :key="step" class="note-box">
            <strong>步骤 {{ index + 1 }}</strong>
            <div class="muted">{{ step }}</div>
          </div>
        </div>
        <div class="meta-row" style="margin-top: 18px">
          <span class="status-pill status-good">静态站单应用</span>
          <span class="status-pill status-warn">GitHub Pages 友好</span>
          <span class="status-pill status-muted">{{ recentReferences }} 篇近年文献</span>
        </div>
      </aside>
    </section>

    <section class="grid grid-2">
      <article v-for="metric in metrics" :key="metric.label" class="metric-card">
        <div class="metric-label">{{ metric.label }}</div>
        <div class="metric-value">{{ metric.value }}</div>
        <p class="metric-sub">{{ metric.sub }}</p>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Streams</span>
          <h2>五条主线接管文献展示框架</h2>
        </div>
        <p>五条主线直接对应综述正文里的核心文献脉络。</p>
      </div>

      <div class="grid grid-3">
        <article
          v-for="stream in reviewDataset.streams"
          :key="stream.key"
          class="paper-card stream-card"
          :style="{ '--stream-accent': stream.accent }"
        >
          <div class="metric-label">{{ stream.label }}</div>
          <div class="metric-value">{{ stream.count }}</div>
          <p>{{ streamDescriptions[stream.key] }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Curated References</span>
          <h2>当前综述中的关键论文入口</h2>
        </div>
        <p>这些论文构成当前综述的核心入口。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="reference in curatedReferences" :key="reference.id" class="paper-card">
          <div class="pill-row" style="margin-bottom: 12px">
            <span class="pill">{{ reference.streamLabel }}</span>
            <span class="status-pill" :class="`status-${reference.verificationStatus === 'verified' ? 'good' : 'muted'}`">
              {{ humanizeVerificationStatus(reference.verificationStatus) }}
            </span>
            <span class="status-pill" :class="`status-${reference.localPdf ? 'good' : 'warn'}`">
              {{ humanizeDownloadStatus(reference.downloadStatus) }}
            </span>
          </div>
          <h3>{{ reference.title }}</h3>
          <p>{{ formatAuthors(reference.authors) }}</p>
          <p class="muted">{{ buildReferenceLabel(reference) }}</p>
          <div class="action-row" style="margin-top: 16px">
            <router-link class="action-link action-link-secondary" to="/compare">加入对读</router-link>
            <a v-if="reference.localPdf" class="action-link" :href="reference.localPdf" target="_blank" rel="noreferrer">打开 PDF</a>
            <a
              v-else-if="reference.externalUrl"
              class="action-link action-link-secondary"
              :href="reference.externalUrl"
              target="_blank"
              rel="noreferrer"
            >
              外部页面
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
