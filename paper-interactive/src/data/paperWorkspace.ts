export interface PaperLayer {
  title: string
  object: string
  controller: string
  summary: string
}

export interface PaperCard {
  title: string
  summary: string
}

export interface PaperFeature {
  symbol: string
  title: string
  mechanism: string
  formula: string
  summary: string
}

export interface PaperStage {
  stage: string
  title: string
  summary: string
  outputs: string[]
}

export interface PaperTier {
  title: string
  scope: string
  inference: string
  limit: string
}

export const paperWorkspace = {
  title: '推荐曝光分配中结构性外部性的审计：一种方向感知的三元组风险框架与约束重排序方法',
  shortTitle: 'TSFB-TSHM-SECR 审计框架',
  abstract:
    '论文将推荐系统重新界定为重复可见性分配机制。平台每次请求都在生产者与消费者之间分配注意力，这些分配累积成动态曝光图，并在三元组邻域中诱导方向性闭合、跨群体隔离、时间持续性和放大集中等结构性外部性。框架以 TSFB 提取高阶结构特征，以 TSHM 把特征映射为多任务校准风险，再由 SECR 在列表级别平衡效用、公平与结构性外部性约束。',
  statusLine: '论文结构、机制与评估协议已同步；结果图表区暂保留为静态占位结构。',
  keywords: [
    'recommender system auditing',
    'exposure allocation',
    'structural externality',
    'higher-order network analysis',
    'calibrated risk model',
    'constrained reranking',
  ],
  anchors: [
    '研究对象是曝光结构，而不是态度极化结果。',
    '审计对象是动态曝光图，不是单个推荐列表。',
    '诊断对象是三元组结构条件，而不是手工固定权重指数。',
  ],
  layers: [
    {
      title: '行动层',
      object: '请求 r、候选集 C_r、推荐列表 a_r',
      controller: '推荐系统直接控制',
      summary: '平台真正操作的是列表级分配决策，位置折扣和候选集上下文都在这一层进入。',
    },
    {
      title: '审计层',
      object: '动态曝光图 G_t = (U, E_t, f_t)',
      controller: '由日志诱导的结构对象',
      summary: '时间窗口内的重复分配累积成曝光图，边权代表谁持续看见谁、被看见多少。',
    },
    {
      title: '诊断层',
      object: 'G_t 上的三元组结构条件',
      controller: 'TSFB + TSHM',
      summary: '三元组是可见局部环流、隔离、持续和集中四类机制的最小高阶单元。',
    },
  ] as PaperLayer[],
  gaps: [
    {
      title: '缺口 1：缺少结构性曝光诊断工具',
      summary: '现有审计大多停留在用户-项目或用户-用户的二元层，无法直接捕捉方向性放大和局部回流。',
    },
    {
      title: '缺口 2：固定权重指数容易被强基线击败',
      summary: '活跃度计数这类简单基线可以匹配甚至超过手工加权指数，说明诊断必须转向数据驱动和校准化。',
    },
    {
      title: '缺口 3：用户级代理与列表级现实脱节',
      summary: '真实系统以请求-候选集-列表为动作空间，仅在用户聚合层上分析会丢失位置偏差与列表组成效应。',
    },
    {
      title: '缺口 4：干预与评估容易陷入自指循环',
      summary: '如果重排序器只最小化自身输出，就很难证明结构信号有独立价值，必须把诊断目标和评估指标拆开。',
    },
  ] as PaperCard[],
  contributions: [
    {
      title: 'TSFB：受控特征系统',
      summary: '四个机制对齐的核心特征与背景控制层联合运行，把高阶结构信号与活跃度基线放在同一诊断框架内比较。',
    },
    {
      title: 'TSHM：多任务校准风险模型',
      summary: '预测目标是独立定义的结构性、分布性和复合性负面分配事件，而不是对输入特征的固定权重求和。',
    },
    {
      title: 'SECR：结构性外部性约束重排序',
      summary: '在列表级别平衡效用、提供者公平与结构性外部性惩罚，以位置贪心和局部增量风险近似实现可执行干预。',
    },
    {
      title: '三层证据与失败判据',
      summary: '论文在真实日志、机制隔离仿真和历史重放之间显式分层，并把负面结果与失败阈值写入主协议。',
    },
  ] as PaperCard[],
  stages: [
    {
      stage: 'Stage 1',
      title: 'TSFB 特征提取',
      summary: '从时间窗口内的曝光图中提取三元组结构条件，核心特征对应不同的局部机制。',
      outputs: ['方向性循环 C', '跨群体隔离 I', '时间持续性 P', '放大集中 A', '背景控制层'],
    },
    {
      stage: 'Stage 2',
      title: 'TSHM 风险校准',
      summary: '把核心结构层和控制层组合为多任务输入，输出结构性、分布性和复合负面事件的校准概率。',
      outputs: ['公式独立的任务标签', '单调约束', 'ECE 校准', '共享过程依赖透明报告'],
    },
    {
      stage: 'Stage 3',
      title: 'SECR 列表级干预',
      summary: '在请求到达时对候选列表进行位置贪心重排序，将结构风险信号转化为实际的分配约束。',
      outputs: ['效用项 U', '提供者公平项 F', '结构性外部性项 S', '局部邻域截断 L'],
    },
  ] as PaperStage[],
  features: [
    {
      symbol: 'C',
      title: '方向性循环',
      mechanism: '拓扑旋度 / 非势流闭合',
      formula: String.raw`\frac{\lvert \kappa_{\sigma}^{(q)}(t)\rvert}{\sum_{e\in\partial\sigma}\lvert f_t^{(q)}(e)\rvert+\varepsilon}`,
      summary: '衡量三元组边界上的局部环流强度，是二元势流分析无法恢复的独立信息分量。',
    },
    {
      symbol: 'I',
      title: '跨群体隔离',
      mechanism: '边界混合 / 隔离',
      formula: String.raw`1-\frac{\lvert \partial\sigma \cap E_{\mathrm{cross}}\rvert}{\lvert \partial\sigma \rvert}`,
      summary: '描述三元组边界上内群体边的比例，隔离越强，跨群体接触越少。',
    },
    {
      symbol: 'P',
      title: '时间持续性',
      mechanism: '跨窗口复现',
      formula: String.raw`\mathrm{mean}_{e\in\partial\sigma}\cos\!\big(f_t(e),f_{t-1}(e)\big)`,
      summary: '捕捉局部模式在相邻时间窗口中的稳定程度，用来区分瞬时扰动和持续锁定。',
    },
    {
      symbol: 'A',
      title: '放大集中',
      mechanism: '边权重集中 / 单向主导',
      formula: String.raw`\mathrm{HHI}_{\mathrm{norm}}\!\left(\{f_t(e)\}_{e\in\partial\sigma}\right)`,
      summary: '衡量曝光是否集中压在少数边上，避免只看总量却忽略放大结构。',
    },
  ] as PaperFeature[],
  propositions: [
    {
      title: '命题 1：旋度与势流可分',
      summary: 'Hodge 分解保证局部旋度与梯度势流正交，从理论上说明三元组层存在二元分析不可见的信号盲区。',
    },
    {
      title: '命题 2：受限条件下的贪心近似',
      summary: '当效用可分、L=1 且使用局部近似时，SECR 的位置贪心具备条件性的启发式合理性边界。',
    },
    {
      title: '命题 3：审计范围边界',
      summary: '框架把推断严格限制在结构条件层，不把风险分数扩展为态度变化或福利改善的因果证据。',
    },
  ] as PaperCard[],
  tiers: [
    {
      title: '第一层：公开日志评估',
      scope: 'MIND、FINN.no Slates、KuaiRand',
      inference: '请求级诊断、策略评估与多指标对照',
      limit: '共印象和日志策略仍是代理，不构成真实部署随机实验。',
    },
    {
      title: '第二层：机制隔离仿真',
      scope: '四类生成器-方法失配压力测试',
      inference: '检验高阶信号是否在不同世界里退化、失真或保持增量价值',
      limit: '仿真结论受生成器假设支配，不能替代外部效度。',
    },
    {
      title: '第三层：历史重放与方向一致性',
      scope: '遗留国会/Reddit 重放',
      inference: '提供外部边界上的方向性参考',
      limit: '只是一致性检查，不是平台级真实验证。',
    },
  ] as PaperTier[],
  failureCriteria: [
    'TSHM 若不能显著超过 ActivityCount，则核心动机被削弱。',
    '移除全部核心特征后性能若几乎不变，说明结构层没有增量价值。',
    'SECR 若以超过 15% 的 NDCG 损失换取风险下降，干预代价不可接受。',
    '任何任务校准后 ECE > 0.10，说明风险输出不足以作为审计触发器。',
  ],
  deferredBlocks: [
    {
      title: '图表与结果总览',
      summary: '用于接入正式实验图表、表格、显著性检验与结果解读。',
    },
    {
      title: '机制图与流程图',
      summary: '用于接入完成绘制后的 TSFB、TSHM、SECR 机制示意图。',
    },
    {
      title: '实验版位',
      summary: '保留结果章节的页面节奏与叙事结构，待正式图表完成后直接替换。',
    },
  ] as PaperCard[],
  boundaries: {
    canDo: [
      '诊断动态曝光图上的局部结构条件。',
      '把结构性外部性信号接入列表级重排序约束。',
      '在效用、公平和结构风险之间报告显式权衡。',
    ],
    cannotDo: [
      '不能直接推断态度极化或福利改善。',
      '不能替代真实 impression 日志和线上随机实验。',
      '不能把结构风险分数包装成现实平台的最终答案。',
    ],
  },
}
