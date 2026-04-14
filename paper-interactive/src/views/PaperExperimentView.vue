<script setup lang="ts">
import { useMathJax } from '@/composables/useMathJax'
import { paperWorkspace } from '@/data/paperWorkspace'

useMathJax()

const evaluationFormulas = [
  {
    title: '结构性负面事件',
    note: '用独立结果函数而不是 TSFB 的手工总分来定义结构性风险标签。',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{struct}}=\mathbf{1}\left[\Delta\mathrm{ExposureGini}_{\sigma,t+1}>\delta_1\;\;\mathrm{or}\;\;\mathrm{CrossGroupDiv}_{\sigma,t+1}<\tau_2\right]`,
  },
  {
    title: '分布性负面事件',
    note: '覆盖提供者差距、用户质量差距和尾部饥饿三类分配异常。',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{alloc}}=\mathbf{1}\left[\Delta\mathrm{ProviderGap}>\delta_3\;\;\mathrm{or}\;\;\Delta\mathrm{UserQualityDisparity}>\delta_4\;\;\mathrm{or}\;\;\mathrm{TailStarvation}>\delta_5\right]`,
  },
  {
    title: '校准误差',
    note: '实验报告必须同时给出 discrimination 与 calibration，ECE 是风险输出能否进入治理环节的关键指标。',
    tex: String.raw`\mathrm{ECE}=\sum_{b=1}^{B}\frac{|B_b|}{n}\left|\mathrm{acc}(B_b)-\mathrm{conf}(B_b)\right|`,
  },
]

const reportBlocks = [
  '先报告诊断模型是否超过 ActivityCount，再报告结构层消融后是否仍保有增量价值。',
  '再报告 SECR 与基线在 NDCG、提供者公平、用户公平和结构风险降幅上的多指标权衡。',
  '最后单列失败判据和边界结论，避免把 replay 或仿真结果包装成平台级证据。',
]
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Experiment Design</span>
          <h2>实验设计与报告模板</h2>
        </div>
        <p>这一页单独解释评估协议，回答“用什么数据、测什么指标、什么时候算失败、怎么写报告”四个问题。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="tier in paperWorkspace.tiers" :key="tier.title" class="paper-card">
          <h3>{{ tier.title }}</h3>
          <p>{{ tier.scope }}</p>
          <div class="muted" style="margin-top: 10px">可推断：{{ tier.inference }}</div>
          <div class="muted" style="margin-top: 6px">限制：{{ tier.limit }}</div>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Label & Metric</span>
          <h2>标签与指标的公式入口</h2>
        </div>
        <p>这一页把最需要解释的三类公式放在一起：结构性标签、分布性标签和校准误差。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="equation in evaluationFormulas" :key="equation.title" class="paper-card formula-card">
          <div class="metric-label">{{ equation.title }}</div>
          <div class="formula-block">$$ {{ equation.tex }} $$</div>
          <p>{{ equation.note }}</p>
        </article>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Failure Rules</span>
            <h2>失败判据</h2>
          </div>
          <p>这些规则写入主协议后，结果页出来时就可以逐项对照，不再事后改写口径。</p>
        </div>

        <div class="list-stack">
          <div v-for="rule in paperWorkspace.failureCriteria" :key="rule" class="note-box">{{ rule }}</div>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Reporting</span>
            <h2>实验结果如何写成论文语言</h2>
          </div>
          <p>论文结果页应该先讲证据层次，再讲结论强度，最后讲边界与负面结果。</p>
        </div>

        <div class="list-stack">
          <div v-for="item in reportBlocks" :key="item" class="note-box">{{ item }}</div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.formula-card {
  display: grid;
  gap: 10px;
}
</style>
