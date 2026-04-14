# 推荐曝光分配中结构性外部性的审计：一种方向感知的三元组风险框架与约束重排序方法

## 摘要

推荐系统作为重复可见性分配机制运行，在每次请求中将注意力在生产者和消费者之间分配。这些重复分配诱导出动态曝光图，其局部高阶结构——方向性闭合、跨群体隔离、时间持续性和放大集中——产生影响三元组用户邻域的结构性外部性，作用范围超越任何单个推荐列表。现有审计工具主要在二元级别运行，依赖固定权重指数，面对简单活跃度计数基线时表现脆弱。本文提出一个三组件审计框架，显式分离行动对象（请求/推荐列表级分配）、审计对象（诱导的动态曝光图）和诊断对象（该图上的三元组结构条件）。三元组结构特征库（TSFB）构建包含四个核心机制对齐特征和背景控制层的受控特征系统，基于 Hodge 理论旋度分解和互补统计量。三元组结构风险模型（TSHM）将这些特征映射为多任务负面分配事件——结构性和分布性——的校准概率，预测目标在公式上独立于输入特征。结构性外部性约束重排序器（SECR）以位置贪心算法将干预操作化，采用局部增量风险近似和邻域截断，在列表级别平衡效用、公平性与结构性外部性约束。理论贡献包括 Hodge 旋度分离结果、受限条件下的贪心近似保证，以及界定框架推断范围的审计范围命题。本文为三个公开数据集和一个机制隔离仿真套件规定了执行就绪的评估协议，包含显式失败判据和负面结果报告承诺。

**关键词：** recommender system auditing; exposure allocation; structural externality; higher-order network analysis; calibrated risk model; constrained reranking; information ecology

---

## 1. 引言

### 1.1 推荐系统作为重复可见性分配

推荐系统不只是排序项目——它们反复将稀缺注意力在用户和生产者之间分配，决定哪些信息变得可见、哪些保持隐藏。Diaz (2024) 在信息检索分配框架内将这一观点形式化，将排序重新诠释为分布式资源分配。大规模平台实验在多个维度确认了这种分配的实质性影响：Gauthier et al. (2025) 展示了信息流算法对 X（前 Twitter）上政治表达的可测量效应；Piccardi et al. (2025) 发现重排序干预改变了某大型平台上的情感极化指标，尽管改善在策略调整后可能不持久；Guess et al. (2023) 和 González-Bailón et al. (2023) 报告了 Facebook 信息流中的不对称意识形态曝光，但观察到减少这种不对称性产生的态度效应微弱且不一致。

这些发现共同施加了一个关键约束：**增加异质曝光并不自动改善下游结果**（Bail et al., 2018; Levy, 2021）。任何以曝光结构为操作对象的方法都必须避免将"更多跨群体接触"默认等同于成功、将结构信号直接等同于态度改善。

### 1.2 对象澄清

围绕回音室和过滤气泡的研究经常混淆处于不同因果层次的现象。连接同质性、曝光隔离、局部放大和态度极化虽经常共存，但在因果链的不同环节运作（Bruns, 2019; Guess et al., 2023）。Lorenz-Spreen et al. (2023) 综述 496 项研究后指出，平台信息架构确实塑造行为，但将结构性曝光模式等同于下游社会后果构成概念上的过度推断。

本文的研究对象是**曝光结构本身**——而非态度变化。具体而言，本框架针对的是：在重复推荐分配周期中，于三元组级别出现的局部高阶曝光模式。这些模式构成一种可测量且可审计的**结构性外部性**——分配决策的副产品，不仅影响直接推荐的用户，还通过曝光图连接结构影响三元组邻域中的相关方。

### 1.3 四个研究缺口

**缺口 1：缺乏面向审计的结构性曝光诊断工具。** 现有推荐审计工具主要针对用户侧或提供者侧公平性（Singh & Joachims, 2018; Biega et al., 2018）或二元极化指标。二元度量无法检测方向性放大——信息在三元组闭合内的累积循环——这需要高阶网络分析工具。

**缺口 2：固定权重诊断指数在强基线面前的脆弱性。** 固定权重聚合公式（如早期 AECI 指标）可被简单的活跃度计数基线匹配甚至超越，表明手工设计的权重方案在诊断任务上不可靠。可信赖的诊断需要数据驱动的校准模型，且必须正面承认活跃度信号的存在。

**缺口 3：用户级代理与请求/列表级现实之间的脱节。** 推荐系统以请求-候选集-列表为基本工作单元，但多数结构分析在用户-用户二元边权重层面聚合，丢失了位置偏差、列表组成效应和请求上下文信息。

**缺口 4：自指的循环评估。** 如果重排序器直接最小化其自身诊断模型的输出，评估回路便是自指的。审计框架必须在诊断目标与干预评估之间维持可检验的分离。

### 1.4 贡献与范围边界

本文做出四项贡献：

1. **三元组结构特征库（TSFB）：** 受控特征系统，组织为核心结构层——四个机制对齐的拓扑与统计特征（$\mathcal{C}$、$\mathcal{I}$、$\mathcal{P}$、$\mathcal{A}$）——和背景控制层。设计遵循机制覆盖原则，将活跃度计数等强基线显式纳入控制而非回避。核心特征在最小高阶单元（三元组）上运行，其中 $\mathcal{C}$ 利用 Hodge 旋度提取可证明与二元势流分析正交的信号。

2. **三元组结构风险模型（TSHM）：** 单调约束、概率校准的多任务诊断模型，其预测目标是独立定义的负面分配事件族——结构性（$Y^{\text{struct}}$）、分布性（$Y^{\text{alloc}}$）和复合性（$Y^{\text{comp}}$）——而非 TSFB 特征的任何加权组合。TSHM 在公式上独立于输入特征，但与之共享底层分配过程；这种残余依赖被承认并经验量化。

3. **结构性外部性约束重排序器（SECR）：** 位置贪心约束重排序器，具有局部增量结构风险近似和邻域截断，在列表级别运行。SECR 联合优化效用保持、提供者公平约束和结构性外部性惩罚三项目标，使用 TSHM 输出作为约束信号之一。SECR 是可审计的干预原型，不声称产生福利最优分配。

4. **三层证据设计与负面结果承诺：** 三个公开数据集上的主要评估协议；四种生成器-方法失配压力测试的机制隔离仿真；遗留拓扑重放降级至附录。五项显式失败判据预先定义，负面结果——包括活跃度基线匹配结构特征的条件——承诺在正文报告。

**范围边界。** 本框架从不声称结构性曝光风险等于政治极化或态度变化。降低结构性外部性分数不构成福利改善的证据。该框架作为审计工具有价值——识别值得关注的分配结构条件——而非部署就绪的推荐系统优化方案。

---

## 2. 相关工作

### 2.1 曝光公平性与算法审计

推荐公平性研究沿两条线索展开：提供者侧关注项目和创作者如何获得曝光机会（Singh & Joachims, 2018; Biega et al., 2018），用户侧关注推荐质量是否在特定群体上系统性下降（Burke, 2017; Li et al., 2021）。近年来多方联合建模取得进展——Chen et al. (2024) 将多方公平性公式化为约束优化问题，Greenwood et al. (2024) 刻画了用户效用与项目公平性之间的紧致权衡前沿——但这些工作的公平性定义仍停留在单列表或成对层面。Diaz (2024) 将推荐重新诠释为信息分配，为超越单次排名的公平性推理提供了概念锚点，尽管其分析框架并未进入局部高阶结构。

审计方法论本身也在演进。从 Sandvig et al. (2014) 编目的五种策略到 Raji et al. (2020) 的端到端内部审计框架，再到 Hosseinmardi et al. (2024) 在 YouTube 上部署反事实机器人的因果曝光估计，审计已从外部观察走向更精确的因果设计。然而，几乎所有现有审计工具和公平指标在二元级别运行——用户-项目或用户-用户——无法检测方向性放大模式。本文 TSFB 提供的三元组结构特征在这一维度上补充现有二元审计流水线，而非替代它们。

### 2.2 信息系统中的高阶网络分析

单纯复形和超图模型已成为网络科学的重要研究前沿（Bick et al., 2023）。单纯复形上的 Hodge 分解将边信号唯一分解为梯度（势流）、调和（全局循环）和局部旋度三个正交分量，为量化"信息在三角边界处是否局部循环"提供精确工具（Schaub et al., 2020; Jiang et al., 2011）。Pérez-Martínez et al. (2025) 在通信网络中证实高阶结构携带成对分析不可见的信息。Neuhäuser et al. (2020) 表明高阶交互改变共识和极化的动力学轨迹。Benson et al. (2018) 将高阶模式分析应用于协同过滤。

这些工具的存在与推荐分配审计领域的空白形成鲜明对照：高阶网络理论成熟但尚未被系统引入推荐曝光图分析。本文将 Hodge 旋度应用于推荐曝光加权网络，提取方向性循环特征 $\mathcal{C}$；而互补的 $\mathcal{I}$、$\mathcal{P}$、$\mathcal{A}$ 是不依赖代数拓扑机制的统计描述符，确保特征库在数学深度和实用性之间保持平衡。

### 2.3 约束重排序与多目标推荐

约束重排序有成熟基础：MMR（Carbonell & Goldstein, 1998）、多样性约束（Adomavicius & Kwon, 2012）、公平约束排名（Singh & Joachims, 2018）和多利益方优化（Mehrotra et al., 2018; Patro et al., 2020）。ILP 在小候选集上可精确求解，贪心近似在规模上可行，DRO 重排序器可处理最坏情况子组公平性。

这些方法的约束目标——多样性、覆盖率、公平比例——均定义在单个列表或单个排名事件上。跨请求累积的结构性外部性需要根本不同的约束信号：信号来源不是当前列表的属性，而是当前分配决策对整个曝光图上三元组条件的增量影响。SECR 引入从三元组风险预测导出的结构性外部性惩罚作为额外约束维度，与效用和公平性项并列运行，实现了从列表级操作到图级审计的桥接。

### 2.4 因果与反事实评估

离策略评估为从日志数据估计新策略效果提供工具（Swaminathan & Joachims, 2015）。逆倾向加权、自归一化估计器和双重鲁棒估计器已应用于排名评估（Saito & Joachims, 2022）。Joachims et al. (2017) 通过倾向分数校正引入无偏学习排序——其位置偏差校正原则与本文位置加权曝光构造 $e_{r,k}$ 直接相关。Hosseinmardi et al. (2024) 展示了 YouTube 上的反事实机器人方法论。

离策略方法的有效性依赖于倾向分数质量，商业系统通常无法保证这一点。本文评估设计使用 KuaiRand 的随机曝光子集作为倾向可信度锚点，并明确报告权重截断和有效样本量，而非假定倾向估计的准确性。

### 2.5 回音室与过滤气泡测量

Bruns (2019) 和 Arguedas et al. (2022) 将连接同质性、曝光隔离和态度极化区分为不同现象。Garimella et al. (2018) 提出基于图分区的争议分数。Nyhan et al. (2023) 和 Guess et al. (2023) 证明减少同质来源并不自动降低极化指标。Tokita et al. (2021) 建模極化信息生态如何重组社会网络。

概念区分已明确，但精确工作在结构条件层——不将推断过度延伸至态度后果——的审计工具仍然稀缺。TSFB 和 TSHM 诊断的正是结构条件——三元组级别的局部曝光模式。框架拒绝将推断延伸至态度结果并非未声明的弱点，而是第 6.3 节以命题 3 形式化的设计选择。

---

## 3. 理论框架：重复可见性分配、三元组结构与结构性外部性

### 3.1 推荐作为重复可见性分配

推荐系统服务于持续的请求流。每个请求中，系统从候选集选择推荐列表，将可见性分配给某些生产者并从其他生产者收回。这不是一次性排序问题：同一用户反复返回，跨请求的累积分配诱导出动态曝光景观。

Diaz (2024) 将每次推荐事件概念化为分配决策，有限的注意力资源在信息生产者之间分配。与评估单个列表的经典排名评估不同，分配视角凸显跨多次请求展开的分布性后果。Guess et al. (2023) 和 Piccardi et al. (2025) 从不同方向提供了经验确认：顺序分配决策确实产生具有可测量结构特征的累积曝光模式。

由此得出的分析推论是：审计的相关对象不是任何单个列表，而是由时间窗口内列表序列诱导的**动态曝光图**。单个列表是推荐系统控制的行动对象；曝光图是审计者观察和诊断的涌现结构。

### 3.2 为什么选择三元组

二元分析——比较成对边权重、用户-用户相似度或双边曝光不对称——是推荐审计中的主导范式。然而二元组从根本上无法捕获方向性循环：信息从用户 $i$ 经 $j$ 到 $k$ 再返回 $i$ 的不对称累积，或在开放三角形上的系统性环流。这类循环模式意味着自我强化的曝光回路，能够放大初始偏差，而不被任何成对指标检测到。

三元组 $\sigma = [i, j, k]$ 是此类循环变得可见的最小结构单元。形式上，1-余链空间 $\ell^2(E_t)$ 上的 Hodge 分解产生三个相互正交的分量：梯度（势流）、调和（全局循环）和旋度（三角边界处的局部旋转）。旋度分量仅可通过作用于三角空间的余边算子 $B_2$ 获取，编码可证明与节点级势函数正交的信息，因此无法从纯二元分析中恢复（Jiang et al., 2011; Schaub et al., 2020）。

选择三元组作为 TSFB 的诊断单元基于这一理论保证：不是因为所有相关现象都是三元组级别的，而是因为三元组是新类信息（局部旋度）变得可用的最小单元。更高阶结构（$k > 3$ 的 $k$-团）可能携带额外信息，但计算成本显著更高。三元组在信息增量与计算开销之间提供最有利的比率。

### 3.3 结构性外部性与态度极化的范畴差异

本文使用的"结构性外部性"必须与"态度极化"仔细区分。区分沿三个轴展开。

**层次差异。** 结构性外部性是曝光图的属性——三元组级别信息分配的分布条件。态度极化是用户信念的属性——由复杂认知过程介导的心理或行为结果。两者处于因果链的不同层次，之间有多个混杂因素和中介变量（Lorenz-Spreen et al., 2023）。

**可测量性差异。** 曝光图上的结构条件可直接从平台分配日志计算，无需调查或态度量表。态度极化需要外部测量工具，其效度存在持续争议（Boxell et al., 2017）。

**可操作性差异。** 平台可以观察和修改自己的分配决策。它不能直接控制用户态度。针对结构条件的审计工具提供平台可以据之行动的信号；声称预测态度变化的审计工具则提出超出平台直接影响范围的主张。

TSFB、TSHM 和 SECR 共同诊断和响应曝光图上的结构条件。它们不预测、建模或声称改善态度极化。命题 3（第 6.3 节）将这一范围决策形式化为理论贡献。

---

## 4. 问题表述

### 4.1 分层对象声明

本框架跨三个显式分离的层次运作：

| 层次 | 对象 | 控制者 | 描述 |
|------|------|--------|------|
| **行动层** | 请求 $r$、候选集 $C_r$、推荐列表 $\mathbf{a}_r$ | 推荐系统 | 平台的直接分配决策 |
| **审计层** | 动态曝光图 $G_t = (\mathcal{U}, E_t, f_t)$ | 涌现的（非直接控制） | 时间窗口内累积分配诱导的图 |
| **诊断层** | $G_t$ 上的三元组结构条件 | TSFB + TSHM | 最小高阶单元上的可测量模式 |

层次结构贯穿全文：推荐系统控制行动（列表），审计者观察审计对象（曝光图），诊断层在该图上提取和评估三元组条件。SECR 将诊断输出作为约束之一反馈到行动层，闭合回路。

本文强调——所有三元组结构指标均定义在推荐列表诱导的曝光图上，而非直接在推荐列表空间中。这一区分避免了将列表组合性质与网络拓扑性质混淆。

**表 1：主要符号**

| 符号 | 含义 |
| ---- | ---- |
| $G_t = (\mathcal{U}, E_t, f_t)$ | 时间 $t$ 的曝光图 |
| $\mathcal{U}$, $\mathcal{V}_{\text{item}}$ | 用户集、项目集 |
| $r$, $C_r$, $\mathbf{a}_r$ | 请求、候选集、推荐列表 |
| $e_{r,k}$ | 请求 $r$ 中位置 $k$ 的位置加权曝光贡献 |
| $c(v)$ | 项目 $v$ 的创作者 |
| $\sigma = [i,j,k]$ | 三元组（有向三角形） |
| $B_1$, $B_2$ | 节点-边和边-三角形余边算子 |
| $\kappa_\sigma^{(q)}$ | 三元组 $\sigma$ 的局部方向性旋度 |
| $\mathcal{C}$, $\mathcal{I}$, $\mathcal{P}$, $\mathcal{A}$ | 核心结构特征：方向性循环、跨群体隔离、时间持续性、放大集中 |
| $g: \mathcal{U} \to \{1,\ldots,G\}$ | 群体标签函数 |
| $Y_{\sigma,t+1}^{(m)}$ | 任务 $m$ 的负面事件指示器 |
| $\hat{p}_{\sigma,t}^{(m)}$ | TSHM 对任务 $m$ 的校准风险输出 |
| $\hat{p}_{\sigma,t}^{\text{agg}}$ | 跨任务聚合风险 |
| $U$, $F$, $S$ | SECR 效用、公平性、结构性外部性分量 |
| $\lambda_u$, $\lambda_f$, $\lambda_s$ | SECR 权重参数 |
| $\mathcal{N}_L(u, v)$ | 曝光图中 $(u, v)$ 的 $L$-跳邻域 |

### 4.2 推荐作为重复分配

考虑在离散时间步 $t = 1, 2, \ldots, T$ 上运行的推荐平台。在每个时间步，平台服务请求集 $\mathcal{R}_t$。对每个请求 $r \in \mathcal{R}_t$：

- 用户 $u_r$ 发起内容请求。
- 候选生成模块产生 $C_r \subset \mathcal{V}_{\text{item}}$。
- 排序模块从 $C_r$ 中选择前 $K$ 个项目组成推荐列表 $\mathbf{a}_r = (a_{r,1}, \ldots, a_{r,K})$。
- 展示时，用户在每个位置 $k$ 处产生位置加权曝光 $e_{r,k} = \gamma^{k-1} \cdot q(a_{r,k}, u_r)$，其中 $\gamma \in (0,1)$ 是位置衰减因子，$q(\cdot)$ 是曝光质量函数。

### 4.3 列表诱导的曝光图构造

定义用户集 $\mathcal{U}$ 和创作者集 $\mathcal{V}_{\text{creator}}$，每个项目 $v$ 关联创作者 $c(v)$。在时间窗口 $[t-w, t]$ 上，用户-用户有向曝光图 $G_t = (\mathcal{U}, E_t, f_t)$ 按如下方式构造。

对任意用户对 $(i, j)$，有向边 $e = (i, j)$ 的权重为：

$$f_t(e) = \sum_{\tau=t-w}^{t} \sum_{r \in \mathcal{R}_\tau: u_r = i} \sum_{k: c(a_{r,k}) = j} e_{r,k}$$

该权重聚合用户 $i$ 在窗口内对用户 $j$ 创建内容累积的总位置加权曝光。每条边携带质量标签向量 $\ell_t(e) \in \mathbb{R}^d$，编码跨群体/内群体指示器、内容主题分布和情感极性。

曝光图 $G_t$ 是审计者从分配日志构造的分析对象——不是社交网络或原始交互图。其边代表累积的可见性分配，而非社交关系。

### 4.4 三元组结构与结构性外部性定义

三元组 $\sigma = [i, j, k]$ 是 $G_t$ 中的有向三角形——三个由三条有向曝光边连接的用户。三元组是捕获局部信息循环的最小高阶结构单元（第 3.2 节的理论保证）。

**定义。** 三元组级别的结构性外部性是推荐分配的非预期副作用：当推荐系统为用户 $i$ 构造列表时，它通过 $G_t$ 的连接结构修改了 $i$ 的邻居及其邻居所经历的三元组条件。这些效应超出平台对任何单个列表的直接控制，构成分配过程的外部性。

### 4.5 群体标签及其语义

令 $g: \mathcal{U} \to \{1, 2, \ldots, G\}$ 为群体标签函数。理论框架适用于任意 $G$；实证协议在 $G = 2$ 下运行以保证可操作性。标签语义约束如下：标签必须在 TSFB 特征计算之前独立定义；标签噪声被正式建模——在独立对称噪声率 $\eta$ 下，特征 $\mathcal{I}$ 的衰减因子为 $(1 - 2\eta)^2$（附录 A.4），而 $\mathcal{C}$、$\mathcal{P}$、$\mathcal{A}$ 仅在边权重上运行，对标签噪声免疫。框架不要求标签是真实标注，仅要求一致应用且不确定性被报告。

### 4.6 多任务负面事件族

TSHM 的预测目标不是单一复合标签，而是**制度化定义的任务特定负面分配事件族**。这一设计将负面事件处理为审计制度中的风险家族：每类事件代表一种值得独立审计的分配级别异常。

**定义（负面事件族）。** 对每个三元组 $\sigma$ 在时间 $t$，定义以下二元指示器：

**任务 1——结构性负面事件** $Y_{\sigma,t+1}^{\text{struct}}$：局部结构条件恶化时触发：

$$Y_{\sigma,t+1}^{\text{struct}} = \mathbf{1}\Big[\text{ExposureGini}(\sigma, t+1) - \text{ExposureGini}(\sigma, t) > \delta_1 \;\;\text{OR}\;\; \text{CrossGroupDiv}(\sigma, t+1) < \tau_2\Big]$$

捕获三元组级别的集中度飙升和跨群体多样性崩溃。

**任务 2——分布性负面事件** $Y_{\sigma,t+1}^{\text{alloc}}$：分配公平性恶化时触发：

$$Y_{\sigma,t+1}^{\text{alloc}} = \mathbf{1}\Big[\Delta\text{ProviderGap}(\sigma, t+1) > \delta_3 \;\;\text{OR}\;\; \Delta\text{UserQualityDisparity}(\sigma, t+1) > \delta_4 \;\;\text{OR}\;\; \text{TailStarvation}(\sigma, t+1) > \delta_5\Big]$$

捕获提供者差距扩大、用户质量差距增长和尾部曝光饥饿。

**任务 3——复合负面事件** $Y_{\sigma,t+1}^{\text{comp}}$：

$$Y_{\sigma,t+1}^{\text{comp}} = Y_{\sigma,t+1}^{\text{struct}} \cdot Y_{\sigma,t+1}^{\text{alloc}}$$

**阈值设定原则。** 各阈值（$\delta_1, \tau_2, \delta_3, \delta_4, \delta_5$）遵循分位数锚定策略：以训练集中相应统计量的 90 百分位作为默认阈值起点，再由领域专家根据审计目标的严格程度调整。评估协议（第 7 节）规定灵敏度分析必须覆盖阈值从 85 百分位到 95 百分位的范围，以验证结论对阈值选择不过度敏感。当审计制度有外部政策标准（如监管阈值）时，固定阈值优先于分位数阈值。

多任务公式的三项优势：(i) 任务特定阈值允许校准到领域适当的严重级别；(ii) TSHM 可在每个任务上独立评估，揭示结构特征跨事件类型的差异化诊断价值；(iii) SECR 可根据审计目标差异化加权结构性与分布性风险。

**TSHM 输出向量：**

$$\hat{\mathbf{p}}_{\sigma,t} = \big(\hat{p}_{\sigma,t}^{(1)},\; \hat{p}_{\sigma,t}^{(2)},\; \hat{p}_{\sigma,t}^{(3)}\big)$$

**聚合风险：**

$$\hat{p}_{\sigma,t}^{\text{agg}} = 1 - \prod_{m=1}^{3}\big(1 - \hat{p}_{\sigma,t}^{(m)}\big)$$

聚合风险是为操作便利提供的默认约束信号——它不是理论上唯一正确的风险聚合方式。当审计目标指向特定事件类型时，SECR 可直接使用单任务风险 $\hat{p}^{(m)}$。

**独立性结构。** 负面事件标签使用 ExposureGini、CrossGroupDiv、ProviderGap、UserQualityDisparity 和 TailStarvation 定义——这些函数在公式上与 TSFB 的旋度比、标签比例、余弦相似度和 HHI 完全不同，确保**公式独立性**。然而，$Y$ 和 TSFB 特征均在同一分配过程产生的边权重数据上运算。这种**共享过程依赖**不可消除，对任何使用分配导出信号诊断分配结果的框架都是固有的。实际推论是 TSHM 的表观诊断性能包含可归因于共享数据方差的成分。评估协议要求报告互信息 $I(\mathbf{z}; Y^{(m)})$ 分解为核心和控制特征贡献，以量化信息泄漏程度并使其透明。

---

## 5. 方法

### 5.1 框架概览

三组件顺序连接：TSFB 为 $G_t$ 中每个三元组 $\sigma$ 提取特征向量 $\mathbf{z}_{\sigma,t} \in \mathbb{R}^p$；TSHM 将 $\mathbf{z}_{\sigma,t}$ 映射为校准的多任务风险 $\hat{\mathbf{p}}_{\sigma,t}$；SECR 使用 $\hat{p}^{\text{agg}}$ 或任务特定 $\hat{p}^{(m)}$ 作为列表级多目标重排序的约束。

### 5.2 三元组结构特征库（TSFB）：受控特征系统

TSFB 组织为两个显式层次：**核心结构层**包含四个机制对齐的特征，**背景控制层**包含吸收非结构性变异的协变量。设计目标是**机制覆盖**：核心层内的四个特征分别映射四种不同的结构机制。它们之间允许统计相关——结构机制在实际分配中相互共变是预期中的事。真正的操作性问题不是核心特征是否彼此独立，而是在背景控制层被纳入后，核心特征是否仍然提供稳健的增量诊断价值。

#### 5.2.1 核心结构层

令 $B_{1,t}$ 和 $B_{2,t}$ 表示 $G_t$ 上的节点-边和边-三角形余边算子。$B_{2,t} \in \mathbb{R}^{|\Sigma_t| \times |E_t|}$ 将边空间信号映射到三角空间：对三元组 $\sigma = [i,j,k]$，对应行在边 $(i,j)$ 和 $(j,k)$ 处取值 $+1$，在 $(i,k)$ 处取值 $-1$。

三元组 $\sigma$ 的局部方向性旋度为：

$$\kappa_\sigma^{(q)}(t) = \big(B_{2,t}\, f_t^{(q)}\big)_\sigma$$

**特征 $\mathcal{C}$——方向性循环**（机制：拓扑旋度 / 非势流闭合）：

$$\mathcal{C}_\sigma(t) = \frac{|\kappa_\sigma^{(q)}(t)|}{\sum_{e \in \partial\sigma} |f_t^{(q)}(e)| + \epsilon}$$

归一化旋度能量相对于总边界流。$\mathcal{C} \to 1$ 表示强方向性循环；$\mathcal{C} \to 0$ 表示势流主导的曝光。这是唯一需要 Hodge 理论机制的特征，也是三元组分析相较于二元分析的理论锚点（命题 1）。

**特征 $\mathcal{I}$——跨群体隔离**（机制：边界混合 / 隔离）：

$$\mathcal{I}_\sigma(t) = 1 - \frac{|\{e \in \partial\sigma : g(\text{src}(e)) \neq g(\text{tgt}(e))\}|}{|\partial\sigma|}$$

三元组边界上内群体边的比例。$\mathcal{I} = 1$ 表示完全同质三元组；$\mathcal{I} = 0$ 表示所有边跨越群体。

**特征 $\mathcal{P}$——时间持续性**（机制：跨窗口复现）：

$$\mathcal{P}_\sigma(t) = \frac{1}{|\partial\sigma|} \sum_{e \in \partial\sigma} \cos\big(\mathbf{f}_t(e),\, \mathbf{f}_{t-1}(e)\big)$$

连续时间窗口间边权重向量的平均余弦相似度。$\mathcal{P} \to 1$ 表示抗扰动的稳定局部模式。

**特征 $\mathcal{A}$——放大集中**（机制：边权重集中 / 单向主导）：

$$\mathcal{A}_\sigma(t) = \text{HHI}_{\text{norm}}\Big(\big\{f_t^{(q)}(e)\big\}_{e \in \partial\sigma}\Big)$$

三元组边界上曝光权重的归一化赫芬达尔-赫希曼指数。$\mathcal{A} \to 1$ 表示极端集中于一条边；$\mathcal{A} \to 0$ 表示均匀分布。

**机制覆盖声明。** 四个核心特征跨越四种结构机制：旋度方向性流（$\mathcal{C}$）、组成性群体混合（$\mathcal{I}$）、时间惯性（$\mathcal{P}$）和集中放大（$\mathcal{A}$）。操作性标准是每个特征以剩余特征和背景控制层为条件后仍贡献增量诊断价值——这在消融实验中检验。

#### 5.2.2 背景控制层

以下协变量作为控制变量纳入，吸收可能混淆核心特征诊断信号的非结构性变异：

| 控制变量 | 目的 |
|----------|------|
| 活跃度计数（每用户活跃三元组数） | 吸收体量效应；作为主要朴素基线 |
| 局部边体量（$\sum_{e \in \partial\sigma} f_t(e)$） | 控制总曝光量级 |
| 曝光熵（$H(\{f_t(e)/\sum f_t\}_{e \in \partial\sigma})$） | 控制独立于群体结构的局部多样性 |
| 创作者受欢迎度 / 新鲜度 | 控制内容驱动的曝光变异 |
| 度不对称（三元组节点间入度/出度比） | 控制结构位置混淆 |
| 标签不确定性（跨三元组标签一致性） | 控制局部标签噪声严重程度 |
| 列表上下文（候选集大小、位置偏差系数） | 控制推荐流水线变异 |

将活跃度计数和局部体量显式纳入控制层直接回应了缺口 2 的动机：如果核心结构特征不能提供超出活跃度信号已解释部分的增量价值，消融实验将如实揭示这一负面结果——这是受控设计的特性而非缺陷。

#### 5.2.3 方向感知边信号 $f_t^{(q)}$ 的定义与动机

边信号函数 $f_t^{(q)}(e)$ 从边权重向量计算，参数 $q \geq 0$ 调制不对称性强调程度：

$$f_t^{(q)}(e) = |f_t(e)|^q \cdot \text{sgn}\big(f_t(e) - f_t(\bar{e})\big)$$

其中 $\bar{e}$ 表示反向边。

三个设计选择需要说明。

**为什么取反向边差异的符号。** 原始边权重 $f_t(e)$ 编码的是用户 $i$ 对 $j$ 的创建内容的累积曝光量，是非负值。但 Hodge 余边算子 $B_2$ 作用于有符号信号——它检测边界处的方向性失配。直接将非负权重输入 $B_2$ 会使旋度仅反映体量差异而非方向性不对称。$\text{sgn}(f_t(e) - f_t(\bar{e}))$ 将每条边的符号锚定在互惠程度上：当 $i \to j$ 的曝光超过 $j \to i$ 时为正，反之为负。这使旋度自然地编码互惠失衡而非纯体量信号。

**$q$ 的作用是不对称性的非线性强调。** 幂参数 $q$ 控制信号幅度对底层权重大小的敏感度。当 $q = 1$ 时，信号幅度与原始权重成正比；$q > 1$ 放大高权重边的贡献，使强不对称性更加突出；$q < 1$ 压缩幅度差异，使弱不对称性相对更可见。$q$ 不是简单的幂变换——它与符号函数联合工作，构成"幅度控制 × 方向标记"的编码方案。

**边界情况的含义。** 考虑两种情境：(i) 双向曝光都大但略有不平衡（$f_t(e) = 100, f_t(\bar{e}) = 95$）：$|f_t^{(q)}(e)|$ 大（高权重边），符号为正（微弱不对称），旋度贡献受边体量主导。(ii) 双向曝光都小但符号翻转（$f_t(e) = 2, f_t(\bar{e}) = 5$）：$|f_t^{(q)}(e)|$ 小，符号为负，贡献微弱。在核心特征 $\mathcal{C}$ 的归一化公式中，小权重边对旋度比的影响有限，避免稀疏区域的噪声主导。

**为什么适合作为 Hodge 旋度的输入。** Hodge 分解对任何 $\ell^2$ 边信号成立。$f_t^{(q)}$ 的设计使得分解后的旋度分量反映方向性失衡而非体量不平衡——这正是结构性外部性诊断所需要的语义。评估协议规定 $q \in \{0.5, 1.0, 1.5, 2.0\}$ 必须全范围报告，以防止参数挑选。

### 5.3 三元组结构风险模型（TSHM）：多任务校准诊断

TSHM 将组合特征向量 $\mathbf{z}_{\sigma,t} = [\text{核心}; \text{控制}]$ 映射为多任务校准风险。TSHM 的定位是**审计触发模型**——它产生的是平台可能选择监控和响应的条件信号，类似于金融监管中的异常检测触发器，而非下游福利预测。

#### 5.3.1 模型规约

对每个负面事件任务 $m \in \{1, 2, 3\}$：

$$\hat{p}_{\sigma,t}^{(m)} = h^{(m)}(\mathbf{z}_{\sigma,t};\, \theta^{(m)})$$

$h^{(m)}$ 须满足三项约束。

**约束 1——任务特定的单调性。** 对因果方向有理论动机的特征施加非递减或非递增约束，但约束设定按任务差异化而非一刀切。具体设定及其理由：

- $\mathcal{C}$：**任务 1 和 3 上非递减**（更高循环 → 更高结构风险），**任务 2 上放松**。理由：方向性循环是结构条件的核心，与结构性负面事件（任务 1）和复合事件（任务 3 = 任务 1 ∧ 任务 2）有稳定的正相关预期。但分布性负面事件（任务 2）的驱动机制主要是资源分配不均，高循环可能伴随也可能不伴随分配不公——强行施加单调性约束会限制模型在此任务上的表达能力。

- $\mathcal{I}$：**任务 1 和 3 上非递减**（更高隔离 → 更高风险），**任务 2 上放松**。理由类似——跨群体隔离对结构条件恶化有稳定的方向性预期，但它与提供者差距、用户质量差距等分布性指标的关系是高度语境依赖的。

- $\mathcal{A}$：**任务 1 和 2 上非递减**（更高集中 → 更高风险），**任务 3 上继承**（因任务 3 = 任务 1 ∧ 任务 2）。放大集中既强化结构失衡也恶化分配均等性，因此对两类任务均有理论动机。

- $\mathcal{P}$：**所有任务上方向由数据决定**。持续性的语义是双重的——它既可以表示"结构锁定"（持续的负面模式难以打破），也可以表示"稳定的良性状态"。在不同数据集和审计场景下，$\mathcal{P}$ 与负面事件的关系方向可能反转。强行施加单调性约束会在某些场景中引入系统性偏差。

**约束 2——概率校准。** 输出 $\hat{p}_{\sigma,t}^{(m)} \in [0,1]$ 经后验校准（Platt 缩放或保序回归），使留出数据上 $\text{ECE} \leq \tau_{\text{cal}}$。

**约束 3——可加性以保证可解释性。** 推荐实现使用形状约束梯度提升（LightGBM/XGBoost 的单调约束模式）或单调广义可加模型（GAM），保留逐特征边际效应检查能力。

#### 5.3.2 独立性刻画

TSHM 在**公式上独立**于 TSFB：预测目标 $Y^{(m)}$ 使用基尼系数、多样性评分、提供者差距等定义，函数形式与 TSFB 的旋度比、标签比例、余弦相似度和 HHI 完全不同。

TSHM 在**过程上不独立**于 TSFB：特征和标签都从同一分配过程产生的边权重数据计算。这种共享依赖对任何使用分配导出信号诊断分配结果的框架都是固有的。评估协议要求报告互信息 $I(\mathbf{z}; Y^{(m)})$ 分解为核心和控制特征贡献，使信息泄漏程度透明。

#### 5.3.3 训练协议

- **时间分割：** 在窗口 $[1, T_{\text{train}}]$ 上训练，$[T_{\text{train}}+1, T_{\text{val}}]$ 上验证，$[T_{\text{val}}+1, T]$ 上测试。无未来泄漏。
- **校准集：** 从验证窗口保留留出校准集用于后验校准。
- **超参数选择：** 在单调约束和 $\text{ECE} \leq \tau_{\text{cal}}$ 下最小化验证 Brier 分数。
- **多任务训练：** 任务可共享公共特征提取骨干或独立训练；评估协议测试两种配置。

### 5.4 结构性外部性约束重排序器（SECR）

SECR 在列表级别运行：对每个传入请求 $r$，通过求解平衡效用保持、公平性和结构性外部性约束的多目标优化问题对候选集 $C_r$ 进行重排序。SECR 是**可审计的干预原型**——它展示结构性外部性信号可以被操作性地纳入分配决策，但不声称产生福利最优分配。

#### 5.4.1 目标函数

$$\mathbf{a}_r^* = \arg\max_{\mathbf{a}_r \in \Pi_K(C_r)} \Big[\lambda_u \cdot U(\mathbf{a}_r, u_r) + \lambda_f \cdot F(\mathbf{a}_r) - \lambda_s \cdot S(\mathbf{a}_r, G_t)\Big]$$

**效用项：**
$$U(\mathbf{a}_r, u_r) = \sum_{k=1}^{K} \gamma^{k-1} \cdot \hat{u}(a_{r,k}, u_r)$$

位置折扣的预测相关性。

**提供者公平项。** 主公平项定义为弱势群体提供者覆盖偏差：

$$F_{\text{provider}}(\mathbf{a}_r) = -\Big|\frac{1}{K}\sum_{k=1}^{K} \mathbf{1}[c(a_{r,k}) \in \mathcal{G}_{\text{under}}] - \pi_{\text{target}}\Big|$$

其中 $\pi_{\text{target}}$ 是弱势群体提供者的目标覆盖率，在列表级别评估。

选择提供者公平为主公平项是因为结构性外部性的传导路径天然经过创作者-消费者分配轴：曝光图的边权重由"哪些创作者的内容被展示给哪些用户"直接决定，因此提供者覆盖的均等性与图级结构条件之间的联系比用户侧质量均等性更为直接。

**用户公平**作为评估指标而非优化目标纳入：在策略评估结果中报告用户子组间推荐质量差距，但不将其编入目标函数。这一选择避免了因目标函数过多项而导致的优化景观碎片化。评估协议允许替换公平项定义：曝光与贡献成比例（Singh & Joachims, 2018）、最大最小用户质量等均可作为变体测试。

**结构性外部性项（局部增量风险）：**
$$S(\mathbf{a}_r, G_t) = \sum_{k=1}^{K} \gamma^{k-1} \cdot \widehat{\Delta S}(a_{r,k}, k \mid r, G_t)$$

其中每项目增量结构风险为：

$$\widehat{\Delta S}(v, k \mid r, G_t) = \sum_{\sigma \in \mathcal{N}_L(u_r, c(v))} w_\sigma \cdot \Delta\hat{p}_{\sigma,t}^{\text{agg}}(v, k)$$

$\mathcal{N}_L(u_r, c(v))$ 表示曝光图 $G_t$ 中边 $(u_r, c(v))$ 的 $L$-跳内三元组集合，$w_\sigma$ 是三元组重要性权重（默认：三元组度的倒数），$\Delta\hat{p}_{\sigma,t}^{\text{agg}}(v, k)$ 是将项目 $v$ 放置在位置 $k$ 时聚合风险的预测变化。

**结构项的定义层次。** 默认使用聚合风险 $\hat{p}^{\text{agg}}$。当审计目标范围较窄（如仅关注结构性事件）时，可切换为单任务模式使用 $\hat{p}^{(m)}$。

**单个候选如何改变三元组风险。** 当候选 $v$ 进入位置 $k$ 时：(i) 一条新曝光边 $(u_r, c(v))$ 被添加到 $G_t$，权重为 $e_{r,k} = \gamma^{k-1} \cdot q(v, u_r)$；(ii) 这条边影响所有包含 $u_r$ 或 $c(v)$ 的三元组的特征向量；(iii) 通过局部扰动近似——而非完整重新计算——估计风险变化 $\Delta\hat{p}$。

#### 5.4.2 局部增量风险近似

精确计算 $\Delta\hat{p}_{\sigma,t}^{\text{agg}}(v, k)$ 需要为每个候选-位置组合重新提取 TSFB 特征并运行 TSHM，计算上不可行。采用一阶增量近似：

$$\Delta\hat{p}_{\sigma,t}^{\text{agg}}(v, k) \approx \nabla_{\mathbf{z}} \hat{p}^{\text{agg}} \Big|_{\mathbf{z}=\mathbf{z}_{\sigma,t}} \cdot \Delta\mathbf{z}_{\sigma}(v, k)$$

$\Delta\mathbf{z}_{\sigma}(v, k)$ 是添加边 $(u_r, c(v))$ 所诱导的特征扰动。对可加模型，梯度是逐特征边际导数之和；对树模型，SHAP 边际贡献作为局部线性近似。特征扰动是稀疏的：仅包含边 $(u_r, c(v))$ 的三元组的特征受影响。

近似误差受 TSHM 的二阶余项限制。在低扰动条件下（向已建立图添加单条边），校准可加模型的余项较小。评估协议包含近似误差的经验验证：在采样请求子集上比较一阶近似与精确重计算的差异。

#### 5.4.3 邻域截断

$\mathcal{N}_L(u_r, c(v))$ 定义为包含至少一个在 $u_r$ 或 $c(v)$ 的 $L$-跳内节点的三元组集合。

- $L = 1$：仅直接关联 $u_r$ 或 $c(v)$ 的三元组。每候选成本：$O(d_{\max}^2)$。
- $L = 2$：两跳闭包。成本：$O(d_{\max}^4)$。

默认 $L = 1$。截断的必要性在于：不截断时每个候选需要遍历整个图的三元组，复杂度随三元组总数线性增长。截断的代价是对距离较远三元组的风险变化视而不见——但这与结构性外部性的局部性质一致：单条边的影响主要局限于其直接邻域。

#### 5.4.4 位置贪心重排序算法

---

**算法 1：SECR 位置贪心重排序**

**输入：** 请求 $r$、候选集 $C_r$、曝光图 $G_t$、TSHM 模型 $h$、参数 $(\lambda_u, \lambda_f, \lambda_s, L, \gamma)$

**输出：** 重排序列表 $\mathbf{a}_r^* = (a_{r,1}^*, \ldots, a_{r,K}^*)$

1. **预计算风险缓存：** 对 $\bigcup_{v \in C_r} \mathcal{N}_L(u_r, c(v))$ 中每个三元组 $\sigma$，存储 $\hat{p}_{\sigma,t}^{\text{agg}}$、$\mathbf{z}_{\sigma,t}$ 及梯度 $\nabla_{\mathbf{z}} \hat{p}^{\text{agg}}|_{\mathbf{z}_{\sigma,t}}$。

2. **初始化** $\mathbf{a}_r^* \leftarrow \emptyset$，$G_t' \leftarrow G_t$。

3. **对** $k = 1, \ldots, K$：

   a. 对每个剩余候选 $v \in C_r \setminus \{a_{r,1}^*, \ldots, a_{r,k-1}^*\}$：
   - $\text{util}(v,k) = \gamma^{k-1} \cdot \hat{u}(v, u_r)$
   - $\text{fair}(v,k)$：基于当前填充状态和 $\pi_{\text{target}}$ 计算
   - $\widehat{\Delta S}(v, k) = \sum_{\sigma \in \mathcal{N}_L(u_r, c(v))} w_\sigma \cdot \nabla_{\mathbf{z}} \hat{p}^{\text{agg}} \cdot \Delta\mathbf{z}_{\sigma}(v, k)$
   - $\text{score}(v,k) = \lambda_u \cdot \text{util} + \lambda_f \cdot \text{fair} - \lambda_s \cdot \widehat{\Delta S}$

   b. $a_{r,k}^* = \arg\max_{v} \text{score}(v, k)$

   c. 更新 $G_t'$：添加权重为 $e_{r,k}$ 的边 $(u_r, c(a_{r,k}^*))$。

   d. 为 $\mathcal{N}_L(u_r, c(a_{r,k}^*))$ 中受影响三元组更新 $\mathbf{z}_{\sigma,t}$、$\hat{p}_{\sigma,t}^{\text{agg}}$ 及梯度。

4. **返回** $\mathbf{a}_r^*$

---

**计算复杂度。** 总计 $O(K \cdot |C_r| \cdot d_{\max}^{2L} \cdot p)$。典型值（$K = 10$，$|C_r| = 100$，$d_{\max} = 50$，$L = 1$，$p = 20$）约 $5 \times 10^7$ 次操作/请求——离线审计可行，带缓存的准在线服务接近可行。局部近似（第 5.4.2 节）将每候选结构风险计算从完整 TSFB+TSHM 循环降低为梯度-扰动内积，加速约两个数量级。

#### 5.4.5 关于 SECR 的两项澄清

**SECR 在独立指标上评估。** SECR 使用 TSHM 输出作为约束输入，但其效果在独立指标上评估：NDCG@K、提供者/用户公平差距、覆盖率。即使 $\lambda_s = 0$，SECR 仍是有意义的效用-公平重排序器。干预后结构条件的最终评估使用新鲜计算的曝光图统计而非缓存预测，评估链不自指。

**福利最优性在范围之外。** 福利优化需要下游用户响应的因果模型，这超出审计框架的范围。SECR 提供的是"在给定效用和公平约束下降低结构风险的操作路径"，不是"在所有可能目标下的最优推荐列表"。

### 5.5 标签不确定性传播

| 组件 | 标签依赖 | 噪声效应 |
|------|----------|----------|
| TSFB $\mathcal{C}$, $\mathcal{P}$, $\mathcal{A}$ | 无（仅边权重） | 免疫 |
| TSFB $\mathcal{I}$ | 直接依赖 $g$ | 衰减因子 $(1-2\eta)^2$ |
| TSHM | 间接经由 $\mathcal{I}$ | 被其他特征部分补偿 |
| SECR $U$, $F$ | $F$ 使用 $g$ 的提供者群体信息 | 灵敏度分析覆盖 |
| SECR $S$ | 间接经由 TSHM | 受限于 TSHM 退化幅度 |

失配压力测试（第 7.5.1 节）在 $\eta = \{0, 0.05, 0.1, 0.15, 0.2\}$ 下系统评估退化。

---

## 6. 理论性质

三个理论结果支持框架的方法论可信度。完整证明见附录 A。

### 6.1 命题 1：旋度-势流可分性

**命题 1。** 在配备边权重内积的内积空间 $\ell^2(E_t, f_t)$ 中，Hodge 分解保证边信号 $f \in \ell^2(E_t)$ 唯一分解为三个相互正交的分量：

$$f = \underbrace{B_1 \phi}_{\text{梯度（势流）}} + \underbrace{h}_{\text{调和}} + \underbrace{B_2^\top \psi}_{\text{旋度（局部旋转）}}$$

TSFB 特征 $\mathcal{C}$ 所测量的三元组局部旋度 $\kappa_\sigma = (B_2 f)_\sigma$ 属于旋度子空间，与梯度子空间正交。

**含义与限定。** 该结果为三元组分析的增量价值提供理论下界：存在一个可证明非平凡的信息分量，对纯二元势流分析不可见但在三元组级别可见。但这个保证是代数层面的，不声称所有实汇相关信息都是三元组级别的，也不声称二元方法整体失效——仅声称它们存在一个可量化的信息盲区。在有限噪声图中，分解对观测信号执行，正交性保证适用于观测信号而非潜在真实信号。$\mathcal{C}$ 在有限样本下的实际噪声鲁棒性需经验评估。

### 6.2 命题 2：受限条件下的贪心近似保证

**命题 2a（可行性）。** 当 $|C_r| \geq K$ 且 $G_t$ 非空时，SECR 优化问题的可行区域非空。

**命题 2b（条件性近似保证）。** 在以下**严格受限**条件下：(i) 效用函数是位置折扣的项目相关性之和（跨位置可分解），(ii) 结构性外部性项使用一阶局部近似且 $L = 1$，(iii) 公平性项是基数约束——位置贪心算法产生的解满足：

$$U(\mathbf{a}_r^{\text{greedy}}) \geq (1 - 1/e) \cdot U(\mathbf{a}_r^*)$$

其中 $\mathbf{a}_r^*$ 是约束可行集内的效用最优解。

这是一个**条件性的启发式合理性论证**，不是通用近似保证。具体而言：$(1 - 1/e)$ 界仅适用于所述条件下的效用分量，不延伸至组合三项目标；当使用精确 TSHM 重新评估而非一阶近似、或 $L > 1$ 时，子模性不被保证，界不成立。在这些更一般的配置下，算法仍是合理的重排启发式但没有正式近似保证。命题 2b 的价值在于表明存在一个明确界定的可操作区域，而非为所有 SECR 配置背书。

### 6.3 命题 3：审计范围边界

**命题 3。** 在从分配决策到下游结果的因果图中：

$$\text{分配决策} \to \text{曝光图 } G_t \to \text{三元组结构条件} \to [\text{中介过程}] \to \text{态度/行为结果}$$

TSFB 和 TSHM 在从 $G_t$ 到三元组结构条件的段内运行。其输出是关于曝光分配结构性质的诊断信号——而非态度预测、福利估计或因果效应估计量。从 TSHM 输出到态度或行为结果的推断需要超出本框架的因果识别策略。

命题 3 形式化的核心主张是：结构条件诊断构成独立且有价值的推断任务。审计触发器的实际价值不依赖于完成到下游结果的因果链——它取决于触发器在诊断层面的可靠性（灵敏度、特异度、校准度）和平台的行动能力。将结构条件诊断与福利估计混淆是本框架以理论手段排除的范畴错误。

这一边界不是需要辩护的局限，而是使框架推断主张与证据覆盖范围保持一致的核心设计支柱。缺乏这一边界的审计工具面临更高的推断风险：它们或者暗中假设结构条件等于福利后果（过度推断），或者对推断范围保持沉默（不透明）。命题 3 将这一通常隐含的假设提升为可检验的声明。

---

## 7. 评估协议与报告模板

经验结果尚不可用。本节规定执行就绪的评估协议——指标、标签语义、公平性定义、策略距离度量和失败判据均预先定义，精度足以在实验完成后直接落位结果。

### 7.1 三层证据架构

| 证据层 | 数据来源 | 推断能力 | 局限性 |
|--------|----------|----------|--------|
| **第一层** | MIND、FINN.no Slates、KuaiRand | 请求级诊断 + 策略评估 | 无真实部署倾向；共印象 ≠ 曝光 |
| **第二层** | 仿真（4 种失配压力测试） | 假设验证、退化分析 | 仿真器自身假设限制 |
| **第三层** | 遗留国会/Reddit 重放 | 方向一致性参考 | 拓扑压力测试，非外部验证 |

### 7.2 数据集

| 数据集 | 领域 | 列表完整性 | 随机子集 | 参考文献 |
|--------|------|-----------|----------|----------|
| MIND | 新闻推荐 | 部分（共印象） | 否 | Wu et al. (2020) |
| FINN.no Slates | 分类广告 | 完整（含未点击） | 否 | Eide et al. (2021) |
| KuaiRand | 短视频 | 部分 | 是 | Gao et al. (2022) |

MIND 提供大规模新闻推荐印象日志，用户-用户曝光边从共印象构造——共印象是真实曝光的代理，此局限性传播至所有基于 MIND 的结果。FINN.no Slates 记录完整推荐列表，是少数具有完整列表结构的公开数据集之一。KuaiRand 包含完全随机曝光子集，可作为倾向分数可信度锚点。每个数据集到曝光图的详细映射 pipeline——包括边定义、权重计算、群体标签操作化和三元组构造——见附录。

### 7.3 基线

| 基线 | 描述 | 类别 |
|------|------|------|
| ActivityCount | 每三元组的简单活跃度计数 | 诊断 |
| DyadicOnly | 仅二元结构特征（成对不平衡 + 曝光集中） | 诊断 |
| TSFB-FixedWeight | TSFB 特征的固定权重聚合 | 诊断消融 |
| TSHM-CoreOnly | 仅核心特征训练 | 诊断消融 |
| TSHM-ControlOnly | 仅控制特征训练 | 诊断消融 |
| UtilityOnly | 纯效用最大化排序 | 策略 |
| FairnessReranker | 提供者/用户公平约束 | 策略 |
| DiversityReranker | 曝光多样性最大化 | 策略 |
| MMR | 最大边际相关性 | 策略 |
| SECR-NoStructural | $\lambda_s = 0$ 的 SECR | 策略消融 |
| DRO-Reranker | 分布鲁棒优化重排序 | 策略 |

### 7.4 评估指标

#### 7.4.1 诊断指标

| 指标 | 目的 | 报告要求 |
|------|------|----------|
| ROC AUC（每任务） | 区分度 | 点估计 + 95% 自举 CI |
| PR AUC（每任务） | 不平衡下精确率-召回率 | 按数据集、任务 |
| Brier 分数（每任务） | 概率校准 | 越低越好 |
| ECE（每任务） | 预期校准误差 | 必须 $\leq \tau_{\text{cal}}$ |
| 特征消融 $\Delta$AUC | 控制后每核心特征增量 | 按特征、数据集 |
| 互信息 $I(\mathbf{z}; Y^{(m)})$ | 信息泄漏透明度 | 分解为核心 vs. 控制 |

#### 7.4.2 策略指标

| 指标 | 目的 | 报告要求 |
|------|------|----------|
| NDCG@K | 排名效用 | 按数据集和 $\lambda$ 配置 |
| 提供者公平差距 | 创作者曝光公平 | 绝对差距和相对改善 |
| 用户公平差距 | 用户推荐质量均等 | 绝对差距和相对改善 |
| 覆盖率 / 多样性 | 信息丰富度 | 相对于现有策略 |
| $\hat{p}^{\text{agg}}$ 降幅 | 结构性外部性变化 | 在新鲜 $G_{t'}$ 上计算 |
| 策略距离 | 偏离现有排名程度 | Kendall $\tau$ 距离 |

#### 7.4.3 跨群体曝光质量

$$\text{CGEQ}(g_1, g_2, t) = \frac{1}{|\{e: g(\text{src}(e))=g_1, g(\text{tgt}(e))=g_2\}|} \sum_{e: g(\text{src})=g_1, g(\text{tgt})=g_2} q_t(e)$$

测量群体 $g_1$ 从群体 $g_2$ 接收的平均曝光质量。

#### 7.4.4 策略距离

$$d_{\text{strategy}}(\mathbf{a}_r^{\text{SECR}}, \mathbf{a}_r^{\text{base}}) = 1 - \tau_K(\mathbf{a}_r^{\text{SECR}}, \mathbf{a}_r^{\text{base}})$$

策略距离接近 0 表示偏离最小，接近 1 表示几乎完全重排。

### 7.5 仿真设计

动态列表曝光仿真器包含七个模块：用户偏好动力学、创作者/项目供给、候选生成、列表排序（可插拔策略）、位置加权曝光、曝光网络演化和可选意识形态潜在空间。默认配置为 $|\mathcal{U}| = 500$ 用户、$T = 100$ 时间步。在预期效果量 $d \approx 0.35$ 和 $\alpha = 0.05$ 下，每条件 $\geq 64$ 种子提供功效 $\geq 0.80$。完整规约和伪代码见附录 B。

#### 7.5.1 四种失配压力测试

| 失配类型 | 生成器假设 | 测试目的 | 预期结果 |
|----------|-----------|----------|----------|
| 二元潜在空间 | 仅成对相似度驱动曝光 | 高阶方法是否虚构三元组优势？ | TSHM 不应显著优于 DyadicOnly |
| Hawkes 突发过程 | 热点事件制造时间混杂突发 | $\mathcal{P}$ 是否被时间事件混淆？ | $\mathcal{P}$ 退化；$\mathcal{C}$、$\mathcal{A}$ 稳定 |
| 噪声标签 | 跨群体偏好重叠或标签翻转 | 标签灵敏度 | $\mathcal{I}$ 退化；TSHM 优雅退化 |
| 策略失配 | 训练/评估策略不同 | 诊断-干预可转移性 | 性能受分布偏移限制 |

### 7.6 统计分析

- **种子级推断：** 每实验 $\geq 64$ 个独立种子。预期效果量 $d \approx 0.35$；64 种子在 $\alpha = 0.05$ 下提供功效 $\geq 0.80$。
- **聚类自举：** 真实数据以用户或请求为聚类单元。
- **多重比较：** Holm-Bonferroni 族错误率控制。
- **OPE 可信度：** OPE 估计在有效样本量 $n_{\text{eff}} < 100$ 或倾向权重截断丢弃超过 50% 时标记为不可信。
- **推断边界声明：** 每层结论段明确说明该层能和不能推断的内容。

### 7.7 失败判据

以下判据预先定义。无论结果是否有利，均须检查和报告。

**失败判据 1（诊断不足）。** TSHM 在任何任务上的 ROC AUC 不显著超过 ActivityCount（Holm-Bonferroni 校正后 $p > 0.05$，或 AUC 差异 $< 0.02$）。若在所有三个任务上发生，核心动机被实质削弱。

**失败判据 2（核心特征冗余）。** 从 TSHM 移除全部四个核心特征不导致显著性能下降（AUC 下降 $< 0.01$），表明仅背景控制即足够。

**失败判据 3（效用成本不可接受）。** SECR 在最有效结构风险降低配置下导致 NDCG@K 损失超过 15%。

**失败判据 4（校准失败）。** 后验校准后任何任务 ECE $> 0.10$。

**失败判据 5（虚构三元组优势）。** 二元潜在空间失配测试中 TSHM 显著优于 DyadicOnly，暗示框架在纯二元现实中虚构高阶信号，需调查过拟合或数据窥探。

### 7.8 报告模板

实验完成后结果按以下结构报告。表格结构和指标已固定；数值单元格待协议执行后填入。

**表 5：诊断性能**

| 模型 | 数据集 | 任务 | ROC AUC [95% CI] | PR AUC | Brier | ECE | $\Delta$AUC vs. AC |
|------|--------|------|-------------------|--------|-------|-----|---------------------|
| | | | | | | | |

**表 6：策略性能**

| 策略 | 数据集 | NDCG@K | 提供者差距 | 用户差距 | 覆盖率 | $\hat{p}^{\text{agg}}$ 降幅 | 策略距离 |
|------|--------|--------|-----------|----------|--------|--------------------------|---------|
| | | | | | | | |

**表 7：特征消融**

| 配置 | 数据集 | 任务 1 AUC | 任务 2 AUC | 任务 3 AUC | $\Delta$ vs. 完整 |
|------|--------|-----------|-----------|-----------|-------------------|
| 完整 TSHM | | | | | — |
| 移除 $\mathcal{C}$ | | | | | |
| 移除 $\mathcal{I}$ | | | | | |
| 移除 $\mathcal{P}$ | | | | | |
| 移除 $\mathcal{A}$ | | | | | |
| 仅核心 | | | | | |
| 仅控制 | | | | | |

**表 8：失配压力测试**

| 失配类型 | TSHM AUC | DyadicOnly AUC | ActivityCount AUC | 诊断 |
|----------|----------|---------------|-------------------|------|
| | | | | |

---

## 8. 解释边界与预期失败模式

### 8.1 框架能做与不能做的事

框架能够：(i) 检测二元分析不可见的三元组结构条件（理论保证见命题 1，实际有效性需经验验证）；(ii) 产生三元组级别负面分配事件的校准多任务风险概率；(iii) 将结构性外部性信号操作性地纳入列表级重排序，具有可量化的效用-公平性-外部性权衡；(iv) 为平台监控提供审计触发器。

框架不能：(i) 预测态度变化或估计福利效应（命题 3 界定范围）；(ii) 保证降低分数改善任何下游结果；(iii) 在没有群体标签的情况下运行特征 $\mathcal{I}$ 和公平项 $F$；(iv) 在没有工程优化的情况下支持实时在线服务。

### 8.2 预期失败模式

**活跃度计数主导。** 如果数据集的负面事件主要由体量驱动，结构特征可能无增量价值。受控特征设计和失败判据 1 专门检测此场景。

**时间混杂。** 如果曝光突发主要由外生事件驱动，$\mathcal{P}$ 可能捕获伪迹。Hawkes 失配测试针对此模式。

**标签退化。** 高标签噪声下 $\mathcal{I}$ 信号衰减。噪声标签失配测试和消融联合评估灵敏度。

**策略不可转移性。** 一种策略下训练的 TSHM 可能无法转移至另一种策略。策略失配压力测试量化退化。

**SECR 帕累托低效。** 位置贪心是启发式，可能远离真实帕累托前沿。与小候选集 ILP 解的比较提供上界。

### 8.3 负面结果报告承诺

以下负面结果若被观察，在正文叙述中报告：ActivityCount 在任何任务-数据集组合匹配或超过 TSHM；核心特征不显示超出控制的显著增量；SECR 效用成本超过 15% 阈值；任何失配测试揭示虚构或意外行为。

---

## 9. 结论

本文提出 TSFB–TSHM–SECR 三组件框架，用于审计推荐曝光分配中的结构性外部性。框架显式分离行动对象、审计对象和诊断对象，在对象层面解决了先前工作中曝光结构分析的概念不一致问题。

TSFB 以受控特征系统的形式组织诊断信号，核心结构层的四个机制对齐特征与背景控制层联合运行，将活跃度基线纳入控制而非回避。TSHM 以多任务校准风险模型的形式将特征映射为独立定义的负面事件概率，具有公式独立性和对共享过程依赖的透明承认。SECR 以位置贪心算法操作化结构性外部性约束，提供从诊断到干预的具体路径。

理论上，Hodge 旋度分离结果保证三元组级别存在二元分析不可见的信号分量；受限条件下的贪心近似为 SECR 的操作区域提供有界保证；审计范围命题将框架推断严格限制在结构条件层，排除了向态度或福利的过度推断。

评估协议以预注册精度规定了指标、基线和失败判据。负面结果将在正文报告。

框架是审计工具——它使二元方法不可见的内容变得可见、校准固定权重方法不可靠的内容、操作化抽象许可不可直接实现的内容。其识别的结构条件是否值得干预，属于平台、监管者或受影响社区的判断。

---

## 伦理考量与局限性

### 伦理考量

本框架诊断结构性曝光模式，不对平台或用户归因意图。用于计算 $\mathcal{I}$ 和公平指标的群体标签若应用于受保护类别，需在适当的制度监督下运行。如果审计分数在无上下文的情况下公开，可能产生博弈激励。

### 局限性

1. **计算成本。** 完整 TSFB 提取规模为 $O(|\Sigma_t| \cdot |\partial\sigma| \cdot d)$。密集图中三元组数量可能庞大，需采样策略引入可控方差。
2. **二元群体分区。** 实证在 $G = 2$ 下运行；多群体扩展面临组合爆炸。
3. **曝光代理保真度。** 曝光图从日志数据构造——共印象和推断曝光是已知偏差的代理。
4. **无因果识别。** TSHM 识别结构风险而非因果效应。反事实主张需要额外识别策略。
5. **单时间尺度。** 当前分析单个滑动窗口；多尺度时间动态留待未来工作。

### AI 使用声明

生成式 AI 工具辅助了手稿起草、文献综合和数学格式化。所有智识内容——包括问题表述、方法设计、理论主张和评估协议——反映作者独立学术判断。AI 辅助成分经审阅、验证和修订。本声明遵循 Elsevier 关于科学写作中使用 AI 辅助技术的政策。

---

## 参考文献

Adomavicius, G., & Kwon, Y. (2012). Improving aggregate recommendation diversity using ranking-based techniques. *IEEE Transactions on Knowledge and Data Engineering*, 24(5), 896–911.

Arguedas, A. R., Robertson, C. T., Fletcher, R., & Nielsen, R. K. (2022). Echo chambers, filter bubbles, and polarisation: A literature review. *Reuters Institute for the Study of Journalism*.

Bail, C. A., Argyle, L. P., Brown, T. W., Bumpus, J. P., Chen, H., Hunzaker, M. B. F., Lee, J., Mann, M., Merhout, F., & Volfovsky, A. (2018). Exposure to opposing views on social media can increase political polarization. *Proceedings of the National Academy of Sciences*, 115(37), 9216–9221.

Barberá, P. (2015). Birds of the same feather tweet together: Bayesian ideal point estimation using Twitter data. *Political Analysis*, 23(1), 76–91.

Benson, A. R., Gleich, D. F., & Leskovec, J. (2018). Simplicial closure and higher-order link prediction. *Proceedings of the National Academy of Sciences*, 115(48), E11221–E11230.

Bick, C., Gross, E., Harrington, H. A., & Schaub, M. T. (2023). What are higher-order networks? *SIAM Review*, 65(3), 686–731.

Biega, A. J., Gummadi, K. P., & Weikum, G. (2018). Equity of attention: Amortizing individual fairness in rankings. *Proceedings of the 41st International ACM SIGIR Conference on Research and Development in Information Retrieval*, 405–414.

Boxell, L., Gentzkow, M., & Shapiro, J. M. (2017). Greater Internet use is not associated with faster growth in political polarization among US demographic groups. *Proceedings of the National Academy of Sciences*, 114(40), 10612–10617.

Bruns, A. (2019). Filter bubble. *Internet Policy Review*, 8(4).

Burke, R. (2017). Multistakeholder recommendation with utility matrices. *Proceedings of the 11th ACM Conference on Recommender Systems*, 258–262.

Carbonell, J., & Goldstein, J. (1998). The use of MMR, diversity-based reranking for reordering documents and producing summaries. *Proceedings of the 21st Annual International ACM SIGIR Conference*, 335–336.

Chen, Y., Hooker, S., Caton, S., & Crandall, D. (2024). Multi-sided fairness in recommendation via constrained optimization. *Advances in Neural Information Processing Systems*, 37.

Diaz, F. (2024). Recommendation as information allocation. *Foundations and Trends in Information Retrieval*, 18(1), 1–130.

Eide, S., Sæbø, A., & Gulla, J. A. (2021). FINN.no Slates Dataset: A new sequential dataset logging interactions and non-interactions. *Proceedings of the 15th ACM Conference on Recommender Systems*, 647–648.

Flaxman, S., Goel, S., & Rao, J. M. (2016). Filter bubbles, echo chambers, and online news consumption. *Public Opinion Quarterly*, 80(S1), 298–320.

Gao, C., Li, S., Lei, W., Chen, J., Li, B., Jiang, P., He, X., Mao, J., & Chua, T.-S. (2022). KuaiRand: An unbiased sequential recommendation dataset with randomly exposed videos. *Proceedings of the 31st ACM International Conference on Information and Knowledge Management*, 3953–3957.

Garimella, K., De Francisci Morales, G., Gionis, A., & Mathioudakis, M. (2018). Quantifying controversy on social media. *ACM Transactions on Social Computing*, 1(1), 1–27.

Gauthier, G. H., Li, Y., Bail, C. A., Nagler, J., & Tucker, J. A. (2025). Algorithmic amplification of politics on Twitter. *Nature*.

González-Bailón, S., Lazer, D., Barberá, P., Zhang, M., Allcott, H., Brown, T., Crespo-Tenorio, A., Freelon, D., Gentzkow, M., Guess, A. M., Iyengar, S., Kim, Y. M., Malhotra, N., Moehler, D., Nyhan, B., Pan, J., Rivera, C. V., Settle, J., Thorson, E., ... Tucker, J. A. (2023). Asymmetric ideological segregation in exposure to political news on Facebook. *Science*, 381(6656), 392–398.

Greenwood, S., Barnett, A., Cen, S., & Shah, D. (2024). User-item fairness tradeoffs in recommendations. *Advances in Neural Information Processing Systems*, 37.

Guess, A. M., Malhotra, N., Pan, J., Barberá, P., Allcott, H., Brown, T., Crespo-Tenorio, A., Dimmery, D., Freelon, D., Gentzkow, M., González-Bailón, S., Kennedy, E., Kim, Y. M., Lazer, D., Moehler, D., Nyhan, B., Rivera, C. V., Settle, J., Thomas, D. R., ... Tucker, J. A. (2023). How do social media feed algorithms affect attitudes and behavior in an election campaign? *Science*, 381(6656), 398–404.

Hosseinmardi, H., Ghasemian, A., Clauset, A., Mobius, M., Rothschild, D. M., & Watts, D. J. (2024). Examining the consumption of radical content on YouTube. *Proceedings of the National Academy of Sciences*, 121(1), e2313377121.

Jiang, X., Lim, L.-H., Yao, Y., & Ye, Y. (2011). Statistical ranking and combinatorial Hodge theory. *Mathematical Programming*, 127(1), 203–244.

Joachims, T., Swaminathan, A., & Schnabel, T. (2017). Unbiased learning-to-rank with biased feedback. *Proceedings of the 10th ACM International Conference on Web Search and Data Mining*, 781–789.

Levy, R. (2021). Social media, news consumption, and polarization: Evidence from a field experiment. *American Economic Review*, 111(3), 831–870.

Li, Y., Chen, H., Fu, Z., Ge, Y., & Zhang, Y. (2021). User-oriented fairness in recommendation. *Proceedings of the Web Conference 2021*, 624–632.

Lorenz-Spreen, P., Oswald, L., Lewandowsky, S., & Hertwig, R. (2023). A systematic review of worldwide causal and correlational evidence on digital media and democracy. *Nature Human Behaviour*, 7(1), 74–101.

Mehrotra, R., McInerney, J., Bouchard, H., Lalmas, M., & Diaz, F. (2018). Towards a fair marketplace: Counterfactual evaluation of the trade-off between relevance, fairness & satisfaction in recommendation systems. *Proceedings of the 27th ACM International Conference on Information and Knowledge Management*, 2243–2251.

Nemhauser, G. L., Wolsey, L. A., & Fisher, M. L. (1978). An analysis of approximations for maximizing submodular set functions. *Mathematical Programming*, 14, 265–294.

Neuhäuser, L., Mellor, A., & Lambiotte, R. (2020). Multibody interactions and nonlinear consensus dynamics on networked systems. *Physical Review E*, 101(3), 032310.

Nyhan, B., Settle, J., Thorson, E., Wojcieszak, M., Barberá, P., Chen, A. Y., Allcott, H., Brown, T., Crespo-Tenorio, A., Dimmery, D., Freelon, D., Gentzkow, M., González-Bailón, S., Guess, A. M., Kennedy, E., Kim, Y. M., Lazer, D., Malhotra, N., Moehler, D., ... Tucker, J. A. (2023). Like-minded sources on Facebook are prevalent but not polarizing. *Nature*, 620, 137–144.

Patro, G. K., Biswas, A., Ganguly, N., Gummadi, K. P., & Chakraborty, A. (2020). FairRec: Two-sided fairness for personalized recommendations in two-sided platforms. *Proceedings of The Web Conference 2020*, 1194–1204.

Pérez-Martínez, C., Ortiz, J. F., & Arenas, A. (2025). Information content of higher-order structures in complex networks. *Communications Physics*, 8, 42.

Piccardi, T., Saveski, M., Hancock, J. T., & Leskovec, J. (2025). Reranking social media feeds: A practical framework for reducing affective polarization. *Science*, 388(6744), 181–186.

Raji, I. D., Smart, A., White, R. N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D., & Barnes, P. (2020). Closing the AI accountability gap: Defining an end-to-end framework for internal algorithmic auditing. *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, 33–44.

Saito, Y., & Joachims, T. (2022). Off-policy evaluation for large action spaces via embeddings. *Proceedings of the 39th International Conference on Machine Learning*, 19089–19122.

Sandvig, C., Hamilton, K., Karahalios, K., & Langbort, C. (2014). Auditing algorithms: Research methods for detecting discrimination on Internet platforms. *Data and Discrimination: Converting Critical Concerns into Productive Inquiry*, 22.

Schaub, M. T., Benson, A. R., Horn, P., Lippner, G., & Jadbabaie, A. (2020). Random walks on simplicial complexes and the normalized Hodge 1-Laplacian. *SIAM Review*, 62(2), 353–391.

Singh, A., & Joachims, T. (2018). Fairness of exposure in rankings. *Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 2219–2228.

Swaminathan, A., & Joachims, T. (2015). Counterfactual risk minimization: Learning from logged bandit feedback. *Proceedings of the 32nd International Conference on Machine Learning*, 814–823.

Tokita, C. K., Guess, A. M., & Tarnita, C. E. (2021). Polarized information ecosystems can reorganize social networks via information cascades. *Proceedings of the National Academy of Sciences*, 118(50), e2102147118.

Wu, F., Qiao, Y., Chen, J.-H., Wu, C., Qi, T., Lian, J., Liu, D., Xie, X., Gao, J., Wu, W., & Zhou, M. (2020). MIND: A large-scale dataset for news recommendation. *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 3597–3606.

Zehlike, M., Bonchi, F., Castillo, C., Hajian, S., Megahed, M., & Baeza-Yates, R. (2017). FA*IR: A fair top-k ranking algorithm. *Proceedings of the 2017 ACM on Conference on Information and Knowledge Management*, 1569–1578.
