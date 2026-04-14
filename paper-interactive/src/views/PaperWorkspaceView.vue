<script setup lang="ts">
import PaperSectionNav from '@/components/PaperSectionNav.vue'
import { useMathJax } from '@/composables/useMathJax'
import { paperWorkspace } from '@/data/paperWorkspace'

useMathJax()

const previewEquations = [
  {
    title: '请求级曝光',
    tex: String.raw`e_{r,k}=\gamma^{k-1}\,q(a_{r,k},u_r)`,
    note: '把一次排序决策变成位置加权曝光，是从“列表”走向“结构”的第一步。',
  },
  {
    title: '动态曝光图',
    tex: String.raw`G_t=(\mathcal U,E_t,f_t),\qquad f_t(i,j)=\sum_{\tau=t-w}^{t}\sum_{r:u_r=i}\sum_{k:c(a_{r,k})=j} e_{r,k}`,
    note: '真正被审计的不是列表本身，而是时间窗口内累积形成的曝光图。',
  },
  {
    title: '多任务风险向量',
    tex: String.raw`\hat{\mathbf p}_{\sigma,t}=\big(\hat p_{\sigma,t}^{(1)},\hat p_{\sigma,t}^{(2)},\hat p_{\sigma,t}^{(3)}\big)`,
    note: '论文不把风险压成一个手工总分，而是保留结构性、分布性和复合性三类事件。',
  },
]

const readingQuestions = [
  {
    title: '论文究竟在研究什么对象？',
    summary: '不是态度极化的结果层，而是平台重复分配注意力后，在曝光图上留下的结构条件。',
  },
  {
    title: '方法为什么必须分成三组件？',
    summary: '因为“看见结构”“判断风险”“决定动作”在对象层面是三种不同任务，混在一起就会失去可解释性。',
  },
  {
    title: '理论部分真正想证明什么？',
    summary: '不是证明框架万能，而是说明三元组层确实包含二元分析看不见的信息，并给出干预的受限合理区间。',
  },
  {
    title: '实验层为什么先写协议而不抢写结果？',
    summary: '因为先固定标签、指标和失败阈值，才能避免结果出来后再反向改口径。',
  },
]

const framingCards = [
  {
    kicker: 'Old Lens',
    title: '旧问题写法',
    summary: '把推荐系统当成一次性排序器，关注单次列表表现、单次公平比例或用户级代理指标。',
  },
  {
    kicker: 'New Lens',
    title: '新问题写法',
    summary: '把推荐系统写成重复可见性分配机制，关心这些分配在时间内累积成怎样的局部高阶结构。',
  },
  {
    kicker: 'Audit Unit',
    title: '最小诊断单元',
    summary: '选择三元组不是因为它最复杂，而是因为局部旋度只有在三角边界上才可见。',
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
        <div class="hero-note">
          <strong>{{ paperWorkspace.shortTitle }}</strong>
          <div class="muted" style="margin-top: 10px">{{ paperWorkspace.statusLine }}</div>
        </div>
        <div class="list-stack">
          <div v-for="anchor in paperWorkspace.anchors" :key="anchor" class="anchor-card">
            {{ anchor }}
          </div>
        </div>
      </aside>
    </section>

    <PaperSectionNav />

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Framing Shift</span>
          <h2>这篇论文首先重写了问题本身</h2>
        </div>
        <p>它把研究焦点从“单次排序做得好不好”转成“平台重复分配注意力后，会在局部结构上累积出什么条件”。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="item in framingCards" :key="item.title" class="paper-card framing-card">
          <div class="metric-label">{{ item.kicker }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Formal Entry</span>
          <h2>先把对象和公式固定下来</h2>
        </div>
        <p>这三条式子对应全文的三个入口：列表动作、审计对象和风险输出。后面的方法、理论和实验层都围绕它们展开。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="equation in previewEquations" :key="equation.title" class="paper-card formal-card">
          <div class="metric-label">{{ equation.title }}</div>
          <div class="formula-block">$$ {{ equation.tex }} $$</div>
          <p>{{ equation.note }}</p>
        </article>
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

    <section class="reading-band panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Reading Questions</span>
          <h2>读这篇论文时应该持续追问的四个问题</h2>
        </div>
        <p>如果这四个问题能在页面里被回答清楚，论文的主线就足够稳；如果回答不清，说明结构还需要继续收束。</p>
      </div>

      <div class="reading-grid">
        <article v-for="item in readingQuestions" :key="item.title" class="reading-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
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
          <p>理论部分服务于可信度与边界说明，而不是脱离应用场景的抽象堆砌。</p>
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
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
  gap: 18px;
}

.paper-hero h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', 'Songti SC', serif;
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.08;
}

.paper-hero p {
  margin: 16px 0 0;
  color: var(--text-muted);
  line-height: 1.88;
}

.paper-hero-side {
  display: grid;
  gap: 14px;
}

.hero-note {
  padding: 18px 20px;
  border-radius: 20px;
  border: 1px solid rgba(47, 93, 85, 0.14);
  background: linear-gradient(180deg, rgba(242, 248, 246, 0.94), rgba(233, 241, 238, 0.86));
}

.anchor-card {
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-muted);
  line-height: 1.72;
}

.framing-card {
  min-height: 182px;
}

.formal-card {
  display: grid;
  gap: 10px;
}

.layer-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.layer-controller {
  margin-top: auto;
  padding-top: 12px;
}

.reading-band {
  background:
    linear-gradient(180deg, rgba(255, 248, 239, 0.92), rgba(251, 244, 235, 0.92)),
    radial-gradient(circle at top left, rgba(157, 88, 50, 0.08), transparent 42%);
}

.reading-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.reading-card {
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(157, 88, 50, 0.12);
  background: rgba(255, 255, 255, 0.62);
}

.reading-card h3 {
  margin: 0 0 10px;
}

.reading-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.8;
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
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 248, 239, 0.88)),
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
  line-height: 1.78;
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
  grid-template-columns: 82px minmax(0, 1fr);
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
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(157, 88, 50, 0.92), rgba(112, 55, 24, 0.88));
  color: #fff8f1;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 700;
}

.feature-body {
  display: grid;
  gap: 2px;
}

.formula-inline {
  margin: 4px 0 10px;
}

.deferred-card {
  min-height: 182px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 248, 239, 0.74)),
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
  .reading-grid,
  .stage-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-symbol {
    width: 82px;
  }
}
</style>
