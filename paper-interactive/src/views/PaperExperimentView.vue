<script setup lang="ts">
import PaperSectionNav from '@/components/PaperSectionNav.vue'
import { useMathJax } from '@/composables/useMathJax'
import { paperWorkspace } from '@/data/paperWorkspace'

useMathJax()

const labelEquations = [
  {
    title: '结构性负面事件',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{struct}}=\mathbf1\!\left[\mathrm{ExposureGini}(\sigma,t+1)-\mathrm{ExposureGini}(\sigma,t)>\delta_1\;\mathrm{or}\;\mathrm{CrossGroupDiv}(\sigma,t+1)<\tau_2\right]`,
    note: '第一类任务回答“局部结构条件是否恶化”，因此它看的是结构集中和跨群体多样性坍塌。',
  },
  {
    title: '分布性负面事件',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{alloc}}=\mathbf1\!\left[\Delta\mathrm{ProviderGap}>\delta_3\;\mathrm{or}\;\Delta\mathrm{UserQualityDisparity}>\delta_4\;\mathrm{or}\;\mathrm{TailStarvation}>\delta_5\right]`,
    note: '第二类任务回答“分配公平是否恶化”，所以它盯住的是提供者差距、用户质量差距和尾部饥饿。',
  },
  {
    title: '复合性事件与风险向量',
    tex: String.raw`Y_{\sigma,t+1}^{\mathrm{comp}}=Y_{\sigma,t+1}^{\mathrm{struct}}Y_{\sigma,t+1}^{\mathrm{alloc}},\qquad \hat{\mathbf p}_{\sigma,t}=(\hat p^{(1)},\hat p^{(2)},\hat p^{(3)})`,
    note: '复合任务只在前两类风险同时发生时触发，因此它天然对应“最值得干预的局部风险块”。',
  },
]

const metricEquations = [
  {
    title: 'ECE',
    tex: String.raw`\mathrm{ECE}=\sum_{b=1}^{B}\frac{|B_b|}{n}\left|\mathrm{acc}(B_b)-\mathrm{conf}(B_b)\right|`,
    note: '如果概率输出不能校准，TSHM 就不应被当作治理触发器使用。这里不是可选指标，而是资格线。',
  },
  {
    title: 'Brier 分数',
    tex: String.raw`\mathrm{Brier}^{(m)}=\frac{1}{n}\sum_{i=1}^{n}\big(\hat p_i^{(m)}-y_i^{(m)}\big)^2`,
    note: 'Brier 同时惩罚区分度和校准误差，因此比单纯 AUC 更贴近审计触发器的实际质量。',
  },
  {
    title: '策略距离',
    tex: String.raw`d_{\mathrm{strategy}}(\mathbf a_r^{\mathrm{SECR}},\mathbf a_r^{\mathrm{base}})=1-\tau_K(\mathbf a_r^{\mathrm{SECR}},\mathbf a_r^{\mathrm{base}})`,
    note: '结构风险下降必须和“离原排名有多远”一起报告，否则读者无法判断干预代价。',
  },
  {
    title: '跨群体曝光质量',
    tex: String.raw`\mathrm{CGEQ}(g_1,g_2,t)=\frac{1}{|\{e:g(\mathrm{src}(e))=g_1,g(\mathrm{tgt}(e))=g_2\}|}\sum_{e:g(\mathrm{src})=g_1,g(\mathrm{tgt})=g_2} q_t(e)`,
    note: '它让“不同群体之间看到的内容质量”被显式量化，避免只报告平均效用掩盖组间不平衡。',
  },
]

const datasetRoles = [
  {
    title: 'MIND',
    summary: '提供大规模新闻推荐日志，适合请求级诊断，但共印象依旧只是曝光代理，因此结论不能被写成真实部署级证据。',
  },
  {
    title: 'FINN.no Slates',
    summary: '少数带完整列表结构的公开数据，特别适合解释列表级动作空间和重排序约束。',
  },
  {
    title: 'KuaiRand',
    summary: '带随机曝光子集，可为离策略评估与倾向分数可信度提供更强锚点。',
  },
]

const baselineGroups = [
  {
    title: '诊断基线',
    items: ['ActivityCount', 'DyadicOnly', 'TSFB-FixedWeight', 'TSHM-CoreOnly', 'TSHM-ControlOnly'],
  },
  {
    title: '策略基线',
    items: ['UtilityOnly', 'FairnessReranker', 'DiversityReranker', 'MMR', 'SECR-NoStructural', 'DRO-Reranker'],
  },
]

const stressTests = [
  {
    title: '二元潜在空间失配',
    summary: '检验高阶方法是否在纯二元世界里虚构三元组优势。理论上，TSHM 不应显著优于 DyadicOnly。',
  },
  {
    title: 'Hawkes 突发过程失配',
    summary: '检验时间突发是否会把 𝒫 误导成“结构持续性”，以及其他特征能否保持稳定。',
  },
  {
    title: '噪声标签失配',
    summary: '检验 𝓘 在标签翻转下如何衰减，以及 TSHM 是否能在其他特征帮助下优雅退化。',
  },
  {
    title: '策略失配',
    summary: '检验一种策略下训练的 TSHM 能否迁移到另一种策略，否则诊断-干预链条会在部署时失真。',
  },
]

const reportSequence = [
  '先报诊断层：每任务 ROC AUC、PR AUC、Brier、ECE，以及相对 ActivityCount 的提升。',
  '再报消融层：核心特征去掉后是否还能保持性能，互信息分解是否显示结构层仍有增量价值。',
  '然后报策略层：NDCG@K、提供者公平差距、用户公平差距、覆盖率、结构风险降幅和策略距离。',
  '最后单列失败判据与边界说明，把负面结果和不能说的结论一起写清。',
]
</script>

<template>
  <div class="grid">
    <PaperSectionNav />

    <section class="panel panel-tight protocol-hero">
      <div class="section-header">
        <div>
          <span class="kicker">Experiment Design</span>
          <h2>实验页的任务不是提前展示结果，而是把未来结果能说到哪一步先写死</h2>
        </div>
        <p>这一页回答四个问题：用什么数据、怎么定义标签、怎么评价诊断与策略、什么时候必须承认主张被削弱。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="tier in paperWorkspace.tiers" :key="tier.title" class="paper-card tier-card">
          <div class="metric-label">{{ tier.title }}</div>
          <h3>{{ tier.scope }}</h3>
          <p>{{ tier.inference }}</p>
          <div class="muted" style="margin-top: 10px">限制：{{ tier.limit }}</div>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Labels</span>
          <h2>先把标签体系固定，才能避免结果出来后再反向定义风险</h2>
        </div>
        <p>这三条式子把结构恶化、分配不公和复合性高风险分开写清，也把 TSHM 的多任务定位固定下来。</p>
      </div>

      <div class="grid grid-3">
        <article v-for="item in labelEquations" :key="item.title" class="paper-card formula-card">
          <div class="metric-label">{{ item.title }}</div>
          <div class="formula-block">$$ {{ item.tex }} $$</div>
          <p>{{ item.note }}</p>
        </article>
      </div>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Metrics</span>
          <h2>诊断指标和策略指标必须同时出现</h2>
        </div>
        <p>如果只报模型内部风险分数，论文会退化成自证循环；如果只报策略效用，又无法知道风险触发器本身是否可靠。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="item in metricEquations" :key="item.title" class="paper-card formula-card">
          <div class="metric-label">{{ item.title }}</div>
          <div class="formula-block">$$ {{ item.tex }} $$</div>
          <p>{{ item.note }}</p>
        </article>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Datasets</span>
            <h2>三个数据集各自承担不同证据角色</h2>
          </div>
          <p>这不是简单地堆数量，而是让对象层、策略层和 OPE 可信度分别找到合适的公开载体。</p>
        </div>

        <div class="list-stack">
          <article v-for="dataset in datasetRoles" :key="dataset.title" class="paper-card">
            <h3>{{ dataset.title }}</h3>
            <p>{{ dataset.summary }}</p>
          </article>
        </div>
      </article>

      <article class="panel panel-tight">
        <div class="section-header">
          <div>
            <span class="kicker">Baselines</span>
            <h2>基线要覆盖诊断和策略两端</h2>
          </div>
          <p>如果只给 SECR 找策略基线、不让 TSHM 面对 ActivityCount 和 DyadicOnly，论文的关键主张就没被真正检验。</p>
        </div>

        <div class="list-stack">
          <article v-for="group in baselineGroups" :key="group.title" class="baseline-card">
            <h3>{{ group.title }}</h3>
            <div class="pill-row" style="margin-top: 12px">
              <span v-for="item in group.items" :key="item" class="pill">{{ item }}</span>
            </div>
          </article>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Stress Tests</span>
          <h2>仿真不是装饰，而是专门用来拆解失配模式</h2>
        </div>
        <p>真实日志回答“在现有世界里表现如何”，仿真回答“方法在不同世界假设下怎样退化”。两者不能互相替代。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="item in stressTests" :key="item.title" class="paper-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
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
            <h2>结果页应该按什么顺序写</h2>
          </div>
          <p>先讲证据层级，再讲指标，再讲负面结果和边界。这样才能保证结果语言不越界。</p>
        </div>

        <div class="list-stack">
          <div v-for="item in reportSequence" :key="item" class="note-box">{{ item }}</div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.protocol-hero {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 248, 239, 0.88)),
    radial-gradient(circle at top right, rgba(157, 88, 50, 0.08), transparent 42%);
}

.tier-card {
  min-height: 210px;
}

.formula-card {
  display: grid;
  gap: 10px;
}

.baseline-card {
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
}

.baseline-card h3 {
  margin: 0;
}
</style>
