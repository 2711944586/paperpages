<script setup lang="ts">
import PaperSectionNav from '@/components/PaperSectionNav.vue'
import { useMathJax } from '@/composables/useMathJax'

useMathJax()

const foundationEquations = [
  {
    title: '列表动作到曝光量',
    tex: String.raw`e_{r,k}=\gamma^{k-1}\,q(a_{r,k},u_r)`,
    note: '每个位置都会生产一个带位置折扣的曝光量，这是整篇论文最底层的动作变量。',
  },
  {
    title: '时间窗口内的曝光图边权',
    tex: String.raw`f_t(i,j)=\sum_{\tau=t-w}^{t}\sum_{r\in\mathcal R_\tau:u_r=i}\sum_{k:c(a_{r,k})=j} e_{r,k}`,
    note: '把请求日志沿时间窗口聚合后，才得到真正被审计的图对象。',
  },
  {
    title: '方向感知边信号',
    tex: String.raw`f_t^{(q)}(e)=|f_t(e)|^q\cdot \mathrm{sgn}\!\big(f_t(e)-f_t(\bar e)\big)`,
    note: '幅度保留体量信息，符号编码互惠差异，使 Hodge 旋度读到方向性失衡而不是单纯体量差。',
  },
  {
    title: '三元组局部旋度',
    tex: String.raw`\kappa_{\sigma}^{(q)}(t)=\big(B_{2,t}f_t^{(q)}\big)_\sigma`,
    note: '三元组是最小的高阶单元，因为局部旋度只有在三角边界上才显形。',
  },
]

const signalCards = [
  {
    title: '方向性循环 𝒞',
    tex: String.raw`\mathcal C_\sigma(t)=\frac{\lvert \kappa_\sigma^{(q)}(t)\rvert}{\sum_{e\in\partial\sigma}\lvert f_t^{(q)}(e)\rvert+\epsilon}`,
    summary: '度量局部非势流闭合。它回答的不是“谁曝光更多”，而是“是否存在沿三角边界持续回流的方向性模式”。',
  },
  {
    title: '跨群体隔离 𝓘',
    tex: String.raw`\mathcal I_\sigma(t)=1-\frac{\lvert\{e\in\partial\sigma:g(\mathrm{src}(e))\neq g(\mathrm{tgt}(e))\}\rvert}{\lvert\partial\sigma\rvert}`,
    summary: '看三元组边界上的边是否主要在群体内部闭合。数值越高，代表跨群体接触越稀缺。',
  },
  {
    title: '时间持续性 𝒫',
    tex: String.raw`\mathcal P_\sigma(t)=\frac{1}{\lvert\partial\sigma\rvert}\sum_{e\in\partial\sigma}\cos\!\big(\mathbf f_t(e),\mathbf f_{t-1}(e)\big)`,
    summary: '把一次性波动和持续结构锁定区分开。若持续性高，说明结构不是偶然噪声。',
  },
  {
    title: '放大集中 𝒜',
    tex: String.raw`\mathcal A_\sigma(t)=\mathrm{HHI}_{\mathrm{norm}}\!\Big(\{f_t^{(q)}(e)\}_{e\in\partial\sigma}\Big)`,
    summary: '看曝光是否被压在三元组边界上的少数边上，用来识别单向主导和局部放大。',
  },
]

const taskEquations = [
  {
    title: '结构性负面事件',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{struct}}=\mathbf1\!\left[\Delta\mathrm{ExposureGini}_{\sigma,t+1}>\delta_1\;\mathrm{or}\;\mathrm{CrossGroupDiv}_{\sigma,t+1}<\tau_2\right]`,
    note: '标签来自独立结果函数，不是把 TSFB 指标再算一遍。这一设计保证标签和输入在公式上分离。',
  },
  {
    title: '分布性负面事件',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{alloc}}=\mathbf1\!\left[\Delta\mathrm{ProviderGap}>\delta_3\;\mathrm{or}\;\Delta\mathrm{UserQualityDisparity}>\delta_4\;\mathrm{or}\;\mathrm{TailStarvation}>\delta_5\right]`,
    note: '第二类任务盯住的是分配后果，而不是三元组结构本身，因此它和结构性任务有不同的审计语义。',
  },
  {
    title: '复合性负面事件',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{comp}}=Y_{\sigma,t+1}^{\mathrm{struct}}\cdot Y_{\sigma,t+1}^{\mathrm{alloc}}`,
    note: '只有当结构性与分布性风险同时成立时才触发，用于锁定最值得审计的高风险局部块。',
  },
  {
    title: '聚合风险',
    tex: String.raw`\hat p_{\sigma,t}^{\mathrm{agg}}=1-\prod_{m=1}^{3}\big(1-\hat p_{\sigma,t}^{(m)}\big)`,
    note: '这是操作化入口，不是理论上唯一正确的聚合方式。审计目标更窄时，SECR 可以只读单任务风险。',
  },
]

const secrEquations = [
  {
    title: 'SECR 总目标',
    tex: String.raw`\mathbf a_r^\star=\arg\max_{\mathbf a_r\in\Pi_K(C_r)}\Big[\lambda_u U(\mathbf a_r,u_r)+\lambda_fF(\mathbf a_r)-\lambda_sS(\mathbf a_r,G_t)\Big]`,
    note: '这里真正重要的是三项目标的对象不同。效用、分配公平和结构性外部性分别属于不同层。',
  },
  {
    title: '效用项',
    tex: String.raw`U(\mathbf a_r,u_r)=\sum_{k=1}^{K}\gamma^{k-1}\hat u(a_{r,k},u_r)`,
    note: '效用项只是保底，不是文章的主角。它的作用是约束干预不能无代价地损害排序质量。',
  },
  {
    title: '提供者公平项',
    tex: String.raw`F_{\mathrm{provider}}(\mathbf a_r)=-\left|\frac{1}{K}\sum_{k=1}^{K}\mathbf1[c(a_{r,k})\in\mathcal G_{\mathrm{under}}]-\pi_{\mathrm{target}}\right|`,
    note: '论文把提供者公平放进目标函数，是因为结构外部性沿“谁被展示给谁”的分配轴传导。',
  },
  {
    title: '局部增量风险近似',
    tex: String.raw`\Delta\hat p_{\sigma,t}^{\mathrm{agg}}(v,k)\approx \nabla_{\mathbf z}\hat p^{\mathrm{agg}}\big|_{\mathbf z=\mathbf z_{\sigma,t}}\cdot \Delta\mathbf z_\sigma(v,k)`,
    note: '如果每个候选都完整重跑 TSFB+TSHM，重排序根本不可执行；这一近似是把理论模型变成动作原型的桥梁。',
  },
]

const methodWarnings = [
  'TSHM 与 TSFB 在公式上独立，但在过程上共享同一分配数据，因此必须显式报告共享过程依赖。',
  'SECR 使用的是局部风险近似而不是全图精确重计算，所以它是可审计干预原型，不是福利最优器。',
  '背景控制层不是“可有可无”的附属部分，它正是用来检验结构特征是否真的有增量价值的强基线框架。',
]

const notationGuide = [
  {
    symbol: String.raw`r, C_r, \mathbf a_r`,
    summary: '请求、候选集和输出列表，属于行动层对象。',
  },
  {
    symbol: String.raw`G_t=(\mathcal U,E_t,f_t)`,
    summary: '时间窗口内由日志诱导出的动态曝光图，属于审计层对象。',
  },
  {
    symbol: String.raw`\sigma=[i,j,k]`,
    summary: '三元组结构单元，是最小的高阶诊断对象。',
  },
  {
    symbol: String.raw`\mathbf z_{\sigma,t}, \hat{\mathbf p}_{\sigma,t}`,
    summary: '特征向量与风险向量，分别由 TSFB 和 TSHM 产出。',
  },
]
</script>

<template>
  <div class="grid">
    <PaperSectionNav />

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Method & Formula</span>
          <h2>方法页要回答的不是“有哪些模型”，而是“对象如何一步步进入动作”</h2>
        </div>
        <p>这一页按四个层次展开：列表动作如何变成曝光图，曝光图如何变成三元组特征，特征如何变成风险，风险又如何回到列表级重排序。</p>
      </div>

      <div class="grid grid-2">
        <article class="hero-method-card">
          <div class="metric-label">Method Chain</div>
          <h3>TSFB 负责“看见结构”，TSHM 负责“判断风险”，SECR 负责“在约束下行动”</h3>
          <p>如果这三层不分开，论文就会陷入两个问题：一是结构信号和标签定义纠缠在一起，二是干预动作只是在最小化自己的内部分数，无法形成外部可审计的证据链。</p>
        </article>

        <article class="hero-method-card hero-method-card-accent">
          <div class="metric-label">Notation</div>
          <div class="notation-grid">
            <div v-for="item in notationGuide" :key="item.symbol" class="notation-card">
              <div class="formula-inline">\( {{ item.symbol }} \)</div>
              <p>{{ item.summary }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Foundation</span>
          <h2>先把动作、图对象和三元组信号写成公式</h2>
        </div>
        <p>方法部分最容易被写得过于抽象。真正需要固定的是这四条公式，因为它们把论文的对象边界钉死了。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="equation in foundationEquations" :key="equation.title" class="paper-card formula-card">
          <div class="metric-label">{{ equation.title }}</div>
          <div class="formula-block">$$ {{ equation.tex }} $$</div>
          <p>{{ equation.note }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">TSFB</span>
          <h2>TSFB 的重点不是“指标多”，而是“每个指标对应一种不同机制”</h2>
        </div>
        <p>四个核心特征跨越旋度方向性流、群体混合、时间惯性和集中放大四条机制线。它们可以相关，但不能互相替代。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="signal in signalCards" :key="signal.title" class="paper-card formula-card signal-card">
          <div class="metric-label">{{ signal.title }}</div>
          <div class="formula-block">$$ {{ signal.tex }} $$</div>
          <p>{{ signal.summary }}</p>
        </article>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">TSHM</span>
            <h2>风险模型为什么必须是多任务</h2>
          </div>
          <p>如果只做一个总分，结构恶化和分配不公就会被提前揉在一起，既不利于解释，也不利于后续干预权重配置。</p>
        </div>

        <div class="list-stack">
          <article v-for="task in taskEquations" :key="task.title" class="paper-card formula-card">
            <div class="metric-label">{{ task.title }}</div>
            <div class="formula-block">$$ {{ task.tex }} $$</div>
            <p>{{ task.note }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Method Warnings</span>
            <h2>读方法时最容易忽略的三件事</h2>
          </div>
          <p>这三点如果不提前说清，读者会误以为论文在做一个更复杂但并不更严谨的打分器。</p>
        </div>

        <div class="list-stack">
          <div v-for="warning in methodWarnings" :key="warning" class="note-box">{{ warning }}</div>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">SECR</span>
          <h2>SECR 把结构风险接回动作空间的方式</h2>
        </div>
        <p>它不是在图上做抽象修补，而是逐位置评估候选项目的局部增量结构风险，用约束重排序的方式把风险信号重新送回推荐动作层。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="equation in secrEquations" :key="equation.title" class="paper-card formula-card">
          <div class="metric-label">{{ equation.title }}</div>
          <div class="formula-block">$$ {{ equation.tex }} $$</div>
          <p>{{ equation.note }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-method-card {
  padding: 26px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 248, 239, 0.88)),
    radial-gradient(circle at top right, rgba(157, 88, 50, 0.08), transparent 42%);
}

.hero-method-card-accent {
  background:
    linear-gradient(180deg, rgba(243, 248, 247, 0.94), rgba(234, 242, 239, 0.9)),
    radial-gradient(circle at top right, rgba(41, 91, 87, 0.12), transparent 42%);
}

.hero-method-card h3 {
  margin: 8px 0 10px;
  font-family: Georgia, 'Times New Roman', 'Songti SC', serif;
  font-size: 32px;
  line-height: 1.2;
}

.hero-method-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.82;
}

.notation-grid {
  display: grid;
  gap: 12px;
}

.notation-card {
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(41, 91, 87, 0.12);
  background: rgba(255, 255, 255, 0.68);
}

.notation-card p {
  margin: 8px 0 0;
  color: var(--text-muted);
  line-height: 1.72;
}

.formula-card {
  display: grid;
  gap: 10px;
}

.signal-card {
  min-height: 280px;
}

.formula-inline {
  margin: 0;
}

@media (max-width: 1080px) {
  .hero-method-card h3 {
    font-size: 28px;
  }
}
</style>
