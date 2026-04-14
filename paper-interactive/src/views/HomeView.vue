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
import { paperWorkspace } from '@/data/paperWorkspace'

const paperSections = [
  {
    path: '/paper',
    kicker: 'Overview',
    title: '论文总览',
    summary: '从研究对象、四个缺口、四项贡献和整体闭环把全文主线固定下来。',
  },
  {
    path: '/paper/method',
    kicker: 'Method',
    title: '方法与公式',
    summary: '集中展示 TSFB、TSHM 与 SECR 的公式入口、结构特征与动作解释。',
  },
  {
    path: '/paper/theory',
    kicker: 'Theory',
    title: '理论解释',
    summary: '集中说明 Hodge 分解、局部旋度、命题 1 到命题 3 和推断边界。',
  },
  {
    path: '/paper/experiment',
    kicker: 'Protocol',
    title: '实验设计',
    summary: '集中整理三层证据、标签构造、校准指标、失败判据与写作模板。',
  },
]

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
</script>

<template>
  <div class="grid">
    <section class="hero-grid">
      <article class="panel panel-tight story-card">
        <span class="kicker">Overview</span>
        <h2>论文呈递区已经拆成多页面，综述与参考文献继续作为证据底座运行。</h2>
        <p>
          当前首页负责把论文主线、综述主线和参考文献库连到一起。论文部分不再停留在单页摘要，而是拆成总览、方法与公式、理论解释、实验设计四个入口。
        </p>
        <div class="action-row" style="margin-top: 18px">
          <router-link to="/paper" class="action-link">进入论文总览</router-link>
          <router-link to="/paper/method" class="action-link action-link-secondary">查看方法页</router-link>
          <router-link to="/library" class="action-link action-link-secondary">进入文献库</router-link>
        </div>
      </article>

      <aside class="panel panel-tight info-card">
        <span class="kicker">Paper Pages</span>
        <h3>论文展示区的四个入口</h3>
        <div class="list-stack">
          <router-link v-for="section in paperSections" :key="section.path" :to="section.path" class="outline-button">
            <div class="metric-label">{{ section.kicker }}</div>
            <h3>{{ section.title }}</h3>
            <p>{{ section.summary }}</p>
          </router-link>
        </div>
      </aside>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Paper Brief</span>
          <h2>{{ paperWorkspace.shortTitle }}</h2>
        </div>
        <p>论文主线已经拆到四个页面，结果图表与正式数值仍保留接入位，不在这一轮提前写死。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="anchor in paperWorkspace.anchors" :key="anchor" class="paper-card">
          <h3>论文口径</h3>
          <p>{{ anchor }}</p>
        </article>
      </div>
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
