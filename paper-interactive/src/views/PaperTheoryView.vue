<script setup lang="ts">
import PaperSectionNav from '@/components/PaperSectionNav.vue'
import { useMathJax } from '@/composables/useMathJax'
import { paperWorkspace } from '@/data/paperWorkspace'

useMathJax()

const theoryEquations = [
  {
    title: 'Hodge 分解',
    tex: String.raw`f=B_1\phi+h+B_2^\top\psi`,
    note: '这一式子给出理论最底层的空间分解。论文真正需要的是证明：旋度分量不是势流分量的重复表达。',
  },
  {
    title: '局部旋度属于旋度子空间',
    tex: String.raw`\kappa_\sigma=(B_2f)_\sigma,\qquad \kappa_\sigma\perp \mathrm{im}(B_1)`,
    note: '命题 1 的核心不在“用了 Hodge”，而在“存在一个与二元势流正交的信息盲区”。',
  },
  {
    title: '受限条件下的效用界',
    tex: String.raw`U(\mathbf a_r^{\mathrm{greedy}})\geq (1-1/e)\cdot U(\mathbf a_r^\star)`,
    note: '这个界只对受限条件下的效用分量成立，不自动扩展到完整三项目标。',
  },
  {
    title: '审计范围边界',
    tex: String.raw`\text{分配决策}\to G_t\to \text{三元组结构条件}\to [\text{中介过程}]\to \text{态度/行为结果}`,
    note: '命题 3 不是附带免责声明，而是整篇论文的证据边界。框架停留在结构条件层，不越界到福利或态度因果。',
  },
  {
    title: '标签噪声衰减',
    tex: String.raw`\mathcal I_{\mathrm{obs}}\approx (1-2\eta)^2\mathcal I_{\mathrm{true}}`,
    note: '只有依赖群体标签的隔离特征会直接受标签噪声影响，其余核心特征主要在边权空间中工作。',
  },
]

const propositionPanels = [
  {
    title: '命题 1：为什么三元组层有独立价值',
    statement: '三元组局部旋度属于与梯度势流正交的子空间，因此它捕捉的是二元分析天然看不见的局部方向性结构。',
    buys: '它给 TSFB 的核心特征 𝒞 提供理论地基，解释为什么“高阶结构”不是把二元指标堆得更复杂。',
    limit: '它不说明所有重要信号都在三元组层，也不保证有限样本下噪声一定可控。',
  },
  {
    title: '命题 2：为什么贪心不是拍脑袋',
    statement: '在效用可分、结构项局部一阶近似、邻域截断为 L=1、公平项可写成基数约束时，位置贪心存在受限的合理性区间。',
    buys: '它说明 SECR 至少在一个清晰操作区间内不是任意拼接的启发式，而是有条件支撑的工程近似。',
    limit: '该界只覆盖受限情形，不覆盖精确全图重算、L>1 或完整三项目标的最优性。',
  },
  {
    title: '命题 3：为什么风险不能越界解释',
    statement: 'TSFB 和 TSHM 只在“曝光图 → 三元组结构条件”这段因果链上工作，因此输出只能解释为审计触发器。',
    buys: '它让论文能够在不做福利或态度识别的情况下，仍然给出完整且诚实的方法主张。',
    limit: '只要没有额外因果设计，任何“风险下降意味着态度改善”的语言都属于越界叙述。',
  },
]

const assumptionCards = [
  {
    title: '效用必须位置可分',
    summary: '命题 2 的近似界要求效用可以写成位置折扣的加和；一旦跨位置交互很强，证明结构会明显变弱。',
  },
  {
    title: '局部近似替代全图重算',
    summary: 'SECR 的结构风险项依赖梯度-扰动内积。它可执行，但也意味着理论支持停留在近似层，而不是全局精确层。',
  },
  {
    title: '邻域截断默认 L=1',
    summary: '这是为了把复杂度限制在候选局部邻域。理论边界跟着这一工程约束一起收缩。',
  },
  {
    title: '公平项按基数约束处理',
    summary: '只有在公平项保持可处理的约束形式时，贪心近似的可解释性才成立。',
  },
]

const boundaryContrast = [
  {
    title: '框架能正式支持的句子',
    items: [
      '某类三元组结构条件在曝光图上被稳定检测到。',
      '某一重排序策略在效用-公平-结构风险之间形成了量化权衡。',
      '某个风险触发器经过校准后具有可报告的区分度和误差。',
    ],
  },
  {
    title: '框架不能直接说出的句子',
    items: [
      '结构风险下降等价于态度极化下降。',
      '重排序器已经给出真实平台最优治理答案。',
      '历史重放或仿真结果可以代替线上随机实验结论。',
    ],
  },
]
</script>

<template>
  <div class="grid">
    <PaperSectionNav />

    <section class="panel panel-tight theory-hero">
      <div class="section-header">
        <div>
          <span class="kicker">Theory</span>
          <h2>理论部分真正做的事，是给出“信息增量”“操作区间”“推断边界”三道护栏</h2>
        </div>
        <p>这不是一篇靠大定理取胜的论文。理论部分的价值，在于说明三元组层为什么必要、SECR 在什么条件下合理、以及论文绝不能越界到哪里。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="item in paperWorkspace.propositions" :key="item.title" class="paper-card theory-pill-card">
          <div class="metric-label">Proposition</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Formal Layer</span>
          <h2>理论层的五个关键公式</h2>
        </div>
        <p>这五条式子覆盖空间分解、局部旋度、受限近似界、范围边界和标签噪声。它们决定了整篇论文能说到哪一步。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="equation in theoryEquations" :key="equation.title" class="paper-card formula-card">
          <div class="metric-label">{{ equation.title }}</div>
          <div class="formula-block">$$ {{ equation.tex }} $$</div>
          <p>{{ equation.note }}</p>
        </article>
      </div>
    </section>

    <section class="grid">
      <article v-for="item in propositionPanels" :key="item.title" class="panel panel-tight theorem-panel">
        <div class="metric-label">Proposition Reading</div>
        <h2>{{ item.title }}</h2>
        <div class="theorem-grid">
          <div class="theorem-block">
            <h3>正式含义</h3>
            <p>{{ item.statement }}</p>
          </div>
          <div class="theorem-block">
            <h3>它真正买来的东西</h3>
            <p>{{ item.buys }}</p>
          </div>
          <div class="theorem-block theorem-block-warn">
            <h3>它并没有声称什么</h3>
            <p>{{ item.limit }}</p>
          </div>
        </div>
      </article>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Assumption Ladder</span>
            <h2>命题 2 依赖的四级假设梯度</h2>
          </div>
          <p>这部分直接告诉读者：SECR 的理论合理性是建立在工程约束上的，不是脱离条件的通用最优性宣告。</p>
        </div>

        <div class="list-stack">
          <article v-for="item in assumptionCards" :key="item.title" class="paper-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Scope Matrix</span>
            <h2>结论语言的边界矩阵</h2>
          </div>
          <p>这部分不是保守修辞，而是论文可信度的硬约束。写作时必须用这组边界过滤所有结论句。</p>
        </div>

        <div class="list-stack">
          <article v-for="group in boundaryContrast" :key="group.title" class="boundary-card">
            <h3>{{ group.title }}</h3>
            <div class="list-stack">
              <div v-for="item in group.items" :key="item" class="note-box">{{ item }}</div>
            </div>
          </article>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.theory-hero {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 248, 239, 0.9)),
    radial-gradient(circle at top right, rgba(41, 91, 87, 0.08), transparent 42%);
}

.theory-pill-card {
  min-height: 190px;
}

.formula-card {
  display: grid;
  gap: 10px;
}

.theorem-panel h2 {
  margin: 8px 0 14px;
  font-family: Georgia, 'Times New Roman', 'Songti SC', serif;
  font-size: 34px;
  line-height: 1.18;
}

.theorem-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.theorem-block {
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.68);
}

.theorem-block h3,
.boundary-card h3 {
  margin: 0 0 10px;
}

.theorem-block p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.82;
}

.theorem-block-warn {
  background: rgba(255, 248, 239, 0.78);
}

.boundary-card {
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
}

@media (max-width: 1080px) {
  .theorem-grid {
    grid-template-columns: 1fr;
  }
}
</style>
