<script setup lang="ts">
import { computed, ref } from 'vue'

import {
  formatAuthors,
  humanizeDownloadStatus,
  humanizeVerificationStatus,
  matchesKeyword,
  reviewDataset,
} from '@/data/reviewAccess'

const keyword = ref('')
const leftId = ref(reviewDataset.curatedReferences[0]?.id ?? reviewDataset.references[0]?.id ?? '')
const rightId = ref(reviewDataset.curatedReferences[1]?.id ?? reviewDataset.references[1]?.id ?? '')

const referenceOptions = computed(() =>
  [...reviewDataset.references]
    .filter((reference) => matchesKeyword(reference, keyword.value))
    .sort((left, right) => right.year - left.year || left.title.localeCompare(right.title)),
)

const leftReference = computed(() => reviewDataset.references.find((reference) => reference.id === leftId.value) ?? null)
const rightReference = computed(() => reviewDataset.references.find((reference) => reference.id === rightId.value) ?? null)

const sharedStreams = computed(() => {
  if (!leftReference.value || !rightReference.value) {
    return []
  }
  return leftReference.value.streamKeys.filter((stream) => rightReference.value?.streamKeys.includes(stream))
})

const compareRows = computed(() => {
  if (!leftReference.value || !rightReference.value) {
    return []
  }

  return [
    ['作者', formatAuthors(leftReference.value.authors), formatAuthors(rightReference.value.authors)],
    ['年份', String(leftReference.value.year), String(rightReference.value.year)],
    ['来源', leftReference.value.venue || '未标注来源', rightReference.value.venue || '未标注来源'],
    ['主线', leftReference.value.streamLabel, rightReference.value.streamLabel],
    ['核验', humanizeVerificationStatus(leftReference.value.verificationStatus), humanizeVerificationStatus(rightReference.value.verificationStatus)],
    ['下载', humanizeDownloadStatus(leftReference.value.downloadStatus), humanizeDownloadStatus(rightReference.value.downloadStatus)],
    ['正文提及', `${leftReference.value.mentionCount} 次`, `${rightReference.value.mentionCount} 次`],
    ['标识', leftReference.value.id, rightReference.value.id],
  ]
})
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight selector-card">
      <span class="kicker">Compare Setup</span>
      <h2>从文献库中任意挑两篇对读</h2>
      <div class="grid grid-3" style="margin-top: 18px">
        <label class="field">
          <span class="field-label">筛选</span>
          <input v-model="keyword" class="text-input" type="text" placeholder="标题、作者、来源、主线" />
        </label>

        <label class="field">
          <span class="field-label">左侧论文</span>
          <select v-model="leftId" class="select">
            <option v-for="reference in referenceOptions" :key="reference.id" :value="reference.id">
              {{ reference.year }} · {{ reference.title }}
            </option>
          </select>
        </label>

        <label class="field">
          <span class="field-label">右侧论文</span>
          <select v-model="rightId" class="select">
            <option v-for="reference in referenceOptions" :key="reference.id" :value="reference.id">
              {{ reference.year }} · {{ reference.title }}
            </option>
          </select>
        </label>
      </div>
    </section>

    <section class="compare-grid">
      <article v-if="leftReference" class="panel panel-tight">
        <span class="kicker">Left</span>
        <h2>{{ leftReference.title }}</h2>
        <p>{{ leftReference.citation }}</p>
      </article>

      <article v-if="rightReference" class="panel panel-tight">
        <span class="kicker">Right</span>
        <h2>{{ rightReference.title }}</h2>
        <p>{{ rightReference.citation }}</p>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Table</span>
          <h2>逐项对照</h2>
        </div>
        <p>共享主线：{{ sharedStreams.length ? sharedStreams.join('、') : '无直接重合主线' }}</p>
      </div>

      <table class="table" v-if="compareRows.length">
        <tbody>
          <tr v-for="[label, leftValue, rightValue] in compareRows" :key="label">
            <th>{{ label }}</th>
            <td>{{ leftValue }}</td>
            <td>{{ rightValue }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
