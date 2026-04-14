<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { formatAuthors, reviewDataset, sectionStreams } from '@/data/reviewAccess'

const activeStream = ref('all')
const selectedSectionId = ref(reviewDataset.sections[0]?.id ?? '')

const filteredSections = computed(() =>
  reviewDataset.sections.filter((section) => activeStream.value === 'all' || section.streamKey === activeStream.value),
)

watch(
  filteredSections,
  (sections) => {
    if (!sections.some((section) => section.id === selectedSectionId.value)) {
      selectedSectionId.value = sections[0]?.id ?? ''
    }
  },
  { immediate: true },
)

const activeSection = computed(
  () => filteredSections.value.find((section) => section.id === selectedSectionId.value) ?? filteredSections.value[0] ?? null,
)

const relatedReferences = computed(() => {
  if (!activeSection.value) {
    return []
  }

  return reviewDataset.references
    .filter((reference) => reference.mentions.some((mention) => mention.sectionId === activeSection.value?.id))
    .sort((left, right) => right.mentionCount - left.mentionCount || right.year - left.year)
    .slice(0, 8)
})
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight info-card">
      <span class="kicker">Navigator</span>
      <h2>按章节读取综述。</h2>
      <div class="pill-row" style="margin-top: 16px">
        <button type="button" class="control-pill" :class="{ active: activeStream === 'all' }" @click="activeStream = 'all'">
          全部章节
        </button>
        <button
          v-for="stream in sectionStreams"
          :key="stream.key"
          type="button"
          class="control-pill"
          :class="{ active: activeStream === stream.key }"
          @click="activeStream = stream.key"
        >
          {{ stream.label }}
        </button>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Sections</span>
            <h2>章节选择</h2>
          </div>
          <p>{{ filteredSections.length }} 个章节已纳入当前筛选。</p>
        </div>

        <div class="list-stack">
          <button
            v-for="section in filteredSections"
            :key="section.id"
            type="button"
            class="outline-button"
            :class="{ active: activeSection?.id === section.id }"
            @click="selectedSectionId = section.id"
          >
            <div class="metric-label">第 {{ section.number }} 节</div>
            <h3>{{ section.title }}</h3>
            <p class="muted">{{ section.summary }}</p>
          </button>
        </div>
      </article>

      <article v-if="activeSection" class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Detail</span>
            <h2>{{ activeSection.title }}</h2>
          </div>
          <p>{{ activeSection.streamLabel }}</p>
        </div>

        <div class="note-box" style="margin-bottom: 18px">{{ activeSection.summary }}</div>

        <div class="grid">
          <article v-for="subsection in activeSection.subsections" :key="subsection.slug" class="paper-card">
            <div class="metric-label">{{ subsection.title }}</div>
            <p>{{ subsection.summary }}</p>
          </article>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Anchors</span>
          <h2>该章节可直接跳转的关键论文</h2>
        </div>
        <p>按正文提及次数和年份排序。</p>
      </div>

      <div v-if="relatedReferences.length" class="grid grid-2">
        <article v-for="reference in relatedReferences" :key="reference.id" class="paper-card">
          <h3>{{ reference.title }}</h3>
          <p>{{ formatAuthors(reference.authors) }}</p>
          <p class="muted">{{ reference.year }} · {{ reference.streamLabel }}</p>
        </article>
      </div>
      <div v-else class="empty-state">当前筛选下没有匹配到对应章节的论文。</div>
    </section>
  </div>
</template>
