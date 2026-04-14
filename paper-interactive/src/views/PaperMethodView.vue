<script setup lang="ts">
import { paperWorkspace } from '@/data/paperWorkspace'
import { useMathJax } from '@/composables/useMathJax'

useMathJax()

const equations = [
  {
    title: '请求级曝光贡献',
    note: '位置折扣与内容质量一起决定单次展示对曝光图边权的贡献。',
    tex: String.raw`e_{r,k}=\gamma^{k-1}\,q(a_{r,k},u_r)`,
  },
  {
    title: '动态曝光图边权',
    note: '时间窗口内，把用户 \(i\) 对创作者 \(j\) 的累计曝光聚合为边权 \(f_t(i,j)\)。',
    tex: String.raw`f_t(i,j)=\sum_{\tau=t-w}^{t}\sum_{r\in\mathcal{R}_{\tau}:u_r=i}\sum_{k:c(a_{r,k})=j} e_{r,k}`,
  },
  {
    title: '聚合结构风险',
    note: 'TSHM 输出三类任务风险，聚合风险只作为默认操作化入口，不替代单任务解释。',
    tex: String.raw`\hat{p}_{\sigma,t}^{\mathrm{agg}}=1-\prod_{m=1}^{3}\left(1-\hat{p}_{\sigma,t}^{(m)}\right)`,
  },
  {
    title: 'SECR 列表级目标',
    note: '重排序同时平衡效用、分配公平和结构性外部性惩罚。',
    tex: String.raw`\pi_r^\star=\arg\max_{\pi_r}\;\lambda_u U(\pi_r)-\lambda_f F(\pi_r)-\lambda_s S(\pi_r)`,
  },
]

const riskTasks = [
  {
    title: '结构性负面事件',
    summary: '跟踪局部集中度飙升和跨群体多样性崩塌，回答结构条件是否恶化。',
  },
  {
    title: '分布性负面事件',
    summary: '跟踪提供者差距、用户质量差距和尾部饥饿，回答分配公平是否恶化。',
  },
  {
    title: '复合性负面事件',
    summary: '只有结构性和分布性风险同时出现时才触发，用来识别最值得审计的高风险区块。',
  },
]
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Method & Formula</span>
          <h2>方法链与核心公式</h2>
        </div>
        <p>这一页专门解释对象如何进入公式、公式如何进入模型、模型又如何进入列表级动作空间。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="equation in equations" :key="equation.title" class="paper-card formula-card">
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
            <span class="kicker">TSFB</span>
            <h2>从列表动作到三元组结构</h2>
          </div>
          <p>TSFB 先把请求级动作写成曝光图，再从曝光图中抽取核心结构层与背景控制层。</p>
        </div>

        <div class="list-stack">
          <article v-for="feature in paperWorkspace.features" :key="feature.symbol" class="paper-card">
            <div class="metric-label">{{ feature.symbol }} · {{ feature.title }}</div>
            <div class="formula-inline">\( {{ feature.formula }} \)</div>
            <p>{{ feature.summary }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">TSHM</span>
            <h2>风险标签与模型输出</h2>
          </div>
          <p>TSHM 不预测手工总分，而是预测三类制度化定义的负面分配事件。</p>
        </div>

        <div class="list-stack">
          <article v-for="task in riskTasks" :key="task.title" class="paper-card">
            <h3>{{ task.title }}</h3>
            <p>{{ task.summary }}</p>
          </article>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Operational Path</span>
          <h2>方法链的动作解释</h2>
        </div>
        <p>真正的解释重点不是模型名字，而是动作顺序与对象边界。TSFB 负责“看见结构”，TSHM 负责“校准风险”，SECR 负责“在约束内行动”。</p>
      </div>

      <div class="stage-grid">
        <article v-for="stage in paperWorkspace.stages" :key="stage.stage" class="stage-card">
          <div class="stage-badge">{{ stage.stage }}</div>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.summary }}</p>
          <div class="pill-row">
            <span v-for="output in stage.outputs" :key="output" class="pill">{{ output }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.formula-card {
  display: grid;
  gap: 10px;
}

.formula-inline {
  margin: 4px 0 2px;
  color: var(--accent-alt);
}

.stage-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.stage-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 248, 239, 0.86)),
    radial-gradient(circle at top right, rgba(157, 88, 50, 0.12), transparent 42%);
}

.stage-card h3 {
  margin: 8px 0 10px;
}

.stage-card p {
  margin: 0 0 16px;
  color: var(--text-muted);
  line-height: 1.75;
}

.stage-badge {
  display: inline-flex;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(47, 93, 85, 0.12);
  color: var(--accent-alt);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 1080px) {
  .stage-grid {
    grid-template-columns: 1fr;
  }
}
</style>
