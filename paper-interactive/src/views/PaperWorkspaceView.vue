<script setup lang="ts">
import { useMathJax } from '@/composables/useMathJax'
import { paperWorkspace } from '@/data/paperWorkspace'

useMathJax()

const paperSections = [
  {
    path: '/paper',
    kicker: 'Overview',
    title: '论文总览',
    summary: '固定研究对象、四个缺口、四项贡献和整体结构。',
  },
  {
    path: '/paper/method',
    kicker: 'Method',
    title: '方法与公式',
    summary: '解释 TSFB、TSHM、SECR 的公式、变量和动作含义。',
  },
  {
    path: '/paper/theory',
    kicker: 'Theory',
    title: '理论解释',
    summary: '解释 Hodge 分解、局部旋度、命题边界与能做什么。',
  },
  {
    path: '/paper/experiment',
    kicker: 'Protocol',
    title: '实验设计',
    summary: '解释三层证据、标签定义、校准指标和失败判据。',
  },
]
</script>

<template>
  <div class="grid">
    <section class="paper-hero panel panel-tight">
      <div class="paper-hero-copy">
        <span class="kicker">Manuscript Brief</span>
        <h2>{{ paperWorkspace.title }}</h2>
        <p>{{ paperWorkspace.abstract }}</p>
        <div class="pill-row" style="margin-top: 18px">
          <span v-for="keyword in paperWorkspace.keywords" :key="keyword" class="pill">{{ keyword }}</span>
        </div>
      </div>

      <aside class="paper-hero-side">
        <div class="note-box">
          <strong>{{ paperWorkspace.shortTitle }}</strong>
          <div class="muted" style="margin-top: 8px">{{ paperWorkspace.statusLine }}</div>
        </div>
        <div class="list-stack" style="margin-top: 16px">
          <div v-for="anchor in paperWorkspace.anchors" :key="anchor" class="anchor-card">
            {{ anchor }}
          </div>
        </div>
      </aside>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Paper Sections</span>
          <h2>论文呈递区的页面结构</h2>
        </div>
        <p>这一轮先把理论、方法和实验设计讲清，图表与结果等实验完成后按同一结构接入。</p>
      </div>

      <div class="section-grid">
        <router-link v-for="section in paperSections" :key="section.path" :to="section.path" class="section-link-card">
          <div class="metric-label">{{ section.kicker }}</div>
          <h3>{{ section.title }}</h3>
          <p>{{ section.summary }}</p>
        </router-link>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Object Stack</span>
          <h2>论文把推荐问题拆成三个对象层次</h2>
        </div>
        <p>行动对象、审计对象和诊断对象被显式分离，后续方法与结论都围绕这条边界展开。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="layer in paperWorkspace.layers" :key="layer.title" class="paper-card layer-card">
          <div class="metric-label">{{ layer.title }}</div>
          <h3>{{ layer.object }}</h3>
          <p>{{ layer.summary }}</p>
          <div class="muted layer-controller">{{ layer.controller }}</div>
        </article>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Research Gaps</span>
            <h2>四个缺口</h2>
          </div>
          <p>新版论文不再围绕旧图表组织，而是围绕对象、诊断、动作和评估四条约束写法展开。</p>
        </div>

        <div class="list-stack">
          <article v-for="gap in paperWorkspace.gaps" :key="gap.title" class="paper-card">
            <h3>{{ gap.title }}</h3>
            <p>{{ gap.summary }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Contributions</span>
            <h2>四项贡献</h2>
          </div>
          <p>贡献结构与论文引言保持一致，便于后续直接插入图表和实验结果。</p>
        </div>

        <div class="list-stack">
          <article v-for="item in paperWorkspace.contributions" :key="item.title" class="paper-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </article>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Framework Flow</span>
          <h2>TSFB → TSHM → SECR 的机制闭环</h2>
        </div>
        <p>论文的核心不在单个指标，而在“特征提取、风险校准、列表级干预”三段链条被顺序打通。</p>
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

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Core Signals</span>
          <h2>四个机制对齐特征</h2>
        </div>
        <p>核心层覆盖方向性循环、跨群体隔离、时间持续性与放大集中，控制层负责吸收活跃度与体量效应。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="feature in paperWorkspace.features" :key="feature.symbol" class="feature-card">
          <div class="feature-symbol">{{ feature.symbol }}</div>
          <div class="feature-body">
            <div class="metric-label">{{ feature.mechanism }}</div>
            <h3>{{ feature.title }}</h3>
            <div class="formula-inline">\( {{ feature.formula }} \)</div>
            <p>{{ feature.summary }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Theory</span>
            <h2>理论性质</h2>
          </div>
          <p>论文的理论部分服务于可信度与边界说明，而不是脱离应用场景的抽象堆砌。</p>
        </div>

        <div class="list-stack">
          <article v-for="item in paperWorkspace.propositions" :key="item.title" class="paper-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Protocol</span>
            <h2>评估协议</h2>
          </div>
          <p>日志评估、失配仿真和历史重放被写成三层证据，不同层回答不同类型的问题。</p>
        </div>

        <div class="list-stack">
          <article v-for="tier in paperWorkspace.tiers" :key="tier.title" class="paper-card">
            <h3>{{ tier.title }}</h3>
            <p>{{ tier.scope }}</p>
            <div class="muted" style="margin-top: 10px">可推断：{{ tier.inference }}</div>
            <div class="muted" style="margin-top: 6px">限制：{{ tier.limit }}</div>
          </article>
        </div>
      </article>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Failure Rules</span>
            <h2>失败判据</h2>
          </div>
          <p>新版手稿把负面结果前置写入协议，后续实验出来后可以直接对应这些阈值填表。</p>
        </div>

        <div class="list-stack">
          <div v-for="rule in paperWorkspace.failureCriteria" :key="rule" class="note-box">{{ rule }}</div>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Scope</span>
            <h2>解释边界</h2>
          </div>
          <p>这部分是论文可信度的核心，不允许把结构风险分数直接扩写成态度或福利结论。</p>
        </div>

        <table class="table">
          <tbody>
            <tr>
              <th>能做什么</th>
              <td>
                <div class="list-stack">
                  <div v-for="item in paperWorkspace.boundaries.canDo" :key="item">{{ item }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>不能做什么</th>
              <td>
                <div class="list-stack">
                  <div v-for="item in paperWorkspace.boundaries.cannotDo" :key="item">{{ item }}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Deferred Figures</span>
          <h2>结果与图形版位</h2>
        </div>
        <p>本页先固定论文结构与机制叙事，实验图表、数值和图形资产完成后将直接接入这一节奏中。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="item in paperWorkspace.deferredBlocks" :key="item.title" class="paper-card deferred-card">
          <div class="metric-label">待更新</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.paper-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 18px;
}

.paper-hero h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.1;
}

.paper-hero p {
  margin: 16px 0 0;
  color: var(--text-muted);
  line-height: 1.85;
}

.paper-hero-side {
  display: grid;
  gap: 14px;
}

.anchor-card {
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.68);
  color: var(--text-muted);
  line-height: 1.7;
}

.layer-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.section-link-card {
  padding: 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.74);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.section-link-card:hover {
  transform: translateY(-2px);
  border-color: rgba(157, 88, 50, 0.24);
  background: rgba(255, 248, 239, 0.86);
}

.section-link-card h3 {
  margin: 8px 0 10px;
}

.section-link-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.75;
}

.layer-controller {
  margin-top: auto;
  padding-top: 12px;
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

.stage-card h3,
.feature-card h3 {
  margin: 8px 0 10px;
}

.stage-card p,
.feature-card p {
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

.feature-card {
  display: grid;
  grid-template-columns: 74px minmax(0, 1fr);
  gap: 18px;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.74);
}

.feature-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(157, 88, 50, 0.9), rgba(112, 55, 24, 0.86));
  color: #fff8f1;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 32px;
  font-weight: 700;
}

.feature-body {
  display: grid;
  gap: 2px;
}

.formula-inline {
  margin: 2px 0 10px;
}

.deferred-card {
  min-height: 182px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(255, 248, 239, 0.72)),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 12px,
      rgba(157, 88, 50, 0.04) 12px,
      rgba(157, 88, 50, 0.04) 24px
    );
}

@media (max-width: 1080px) {
  .paper-hero,
  .section-grid,
  .stage-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-symbol {
    width: 74px;
  }
}
</style>
