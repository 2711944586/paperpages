<script setup lang="ts">
import { paperWorkspace } from '@/data/paperWorkspace'
import { useMathJax } from '@/composables/useMathJax'

useMathJax()

const theoryEquations = [
  {
    title: 'Hodge 分解',
    note: '局部旋度、梯度势流与调和项被显式分离，命题 1 的意义就在于说明三元组层不是二元层的重复。',
    tex: String.raw`f_t^{(q)}=\nabla \phi_t + h_t + B_{2,t}^{\top}\omega_t`,
  },
  {
    title: '局部旋度',
    note: '旋度只在三角边界上显现，因此三元组是最小的高阶诊断单元。',
    tex: String.raw`\kappa_{\sigma}^{(q)}(t)=\left(B_{2,t}f_t^{(q)}\right)_{\sigma}`,
  },
  {
    title: '条件性贪心近似',
    note: '命题 2 只在可分效用、局部近似和有限邻域条件下成立，因此它描述的是操作区间，不是无条件最优。',
    tex: String.raw`\Delta S(\pi_r)\approx \sum_{\sigma\in\mathcal{N}_L(u,v)} \nabla_{\mathbf z}\hat p_{\sigma,t}^{\mathrm{agg}}\cdot \Delta \mathbf z_{\sigma,t}`,
  },
]
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Theory</span>
          <h2>理论命题与解释边界</h2>
        </div>
        <p>这一页把命题 1 到命题 3 放在同一叙事里：证明高阶层的必要性、限定 SECR 的操作区间，并把推断边界写清。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="item in paperWorkspace.propositions" :key="item.title" class="paper-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Formal Layer</span>
          <h2>理论层的公式入口</h2>
        </div>
        <p>这里不追求把全文定理写成黑板式推导，而是把理解命题所需的三个核心公式保留下来。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="equation in theoryEquations" :key="equation.title" class="paper-card formula-card">
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
            <span class="kicker">Can Infer</span>
            <h2>框架能解释什么</h2>
          </div>
          <p>理论部分允许论文对结构条件、局部结构风险和受约束动作给出正式解释。</p>
        </div>

        <div class="list-stack">
          <div v-for="item in paperWorkspace.boundaries.canDo" :key="item" class="note-box">{{ item }}</div>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Cannot Infer</span>
            <h2>框架不能越界到什么地方</h2>
          </div>
          <p>这部分不是保守修辞，而是命题 3 的真正约束条件。</p>
        </div>

        <div class="list-stack">
          <div v-for="item in paperWorkspace.boundaries.cannotDo" :key="item" class="note-box">{{ item }}</div>
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
