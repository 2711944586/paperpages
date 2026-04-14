<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'

import { init } from '@/lib/echarts'
import type { EChartsCoreOption, EChartsType } from '@/lib/echarts'

const props = withDefaults(
  defineProps<{
    option: EChartsCoreOption
    height?: number | string
  }>(),
  {
    height: 420,
  },
)

const emit = defineEmits<{
  (event: 'chart-click', payload: unknown): void
}>()

const host = ref<HTMLDivElement | null>(null)
const chart = shallowRef<EChartsType | null>(null)
const chartHeight = computed(() => (typeof props.height === 'number' ? `${props.height}px` : props.height))

let resizeObserver: ResizeObserver | null = null

function renderChart() {
  if (!chart.value) {
    return
  }
  chart.value.setOption(props.option, true)
  chart.value.resize()
}

function handleResize() {
  chart.value?.resize()
}

onMounted(() => {
  if (!host.value) {
    return
  }

  chart.value = init(host.value)
  chart.value.on('click', (payload) => emit('chart-click', payload))
  renderChart()

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(host.value)
  }

  window.addEventListener('resize', handleResize)
})

watch(
  () => props.option,
  () => renderChart(),
  { deep: true },
)

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', handleResize)
  chart.value?.dispose()
})
</script>

<template>
  <div ref="host" class="chart-canvas" :style="{ height: chartHeight }"></div>
</template>
