export const literatureReviewDataset = {
  "meta": {
    "sourcePath": "content-source/review/扩展文献综述.md",
    "generatedFrom": "build_literature_dataset.py",
    "referenceCount": 76,
    "sectionCount": 7,
    "yearRange": {
      "min": 1999,
      "max": 2026
    },
    "verifiedCount": 76,
    "downloadedCount": 29
  },
  "streams": [
    {
      "key": "constructs",
      "label": "回音室与过滤气泡",
      "accent": "#d4b27a",
      "count": 42
    },
    {
      "key": "platforms",
      "label": "平台实验与因果证据",
      "accent": "#c97052",
      "count": 10
    },
    {
      "key": "topology",
      "label": "高阶网络与方向算子",
      "accent": "#4ea48f",
      "count": 9
    },
    {
      "key": "fairness",
      "label": "曝光公平与多侧推荐",
      "accent": "#7a8df0",
      "count": 10
    },
    {
      "key": "evaluation",
      "label": "离策略评估与数据基础设施",
      "accent": "#5f8aa6",
      "count": 4
    }
  ],
  "sections": [
    {
      "id": "section_2",
      "slug": "section-2",
      "number": 2,
      "title": "回音室、过滤气泡与测量对象的澄清",
      "streamKey": "constructs",
      "streamLabel": "回音室与过滤气泡",
      "accent": "#d4b27a",
      "summary": "回音室与过滤气泡问题最早并不是以“算法评价”出现的，而是作为数字公共领域的一种规范性忧虑出现的。Sunstein 在 *Republic.com* 及其后续著作中讨论了定制化信息环境如何削弱共同议题空间、加剧群体极化；Pariser 则用“过滤气泡”一词将个性化算法带入公共辩论，强调用户在不自知的情况下被包裹在高度选择化的信息环境中。这一阶段的核心贡献不在于精细测量，而在于确立了一个至今仍然有效的判断：可见性分配不是中性的技术过程，而是公共生活的一部分。",
      "subsections": [
        {
          "title": "2.1 从规范性忧虑到经验测量",
          "slug": "2-1",
          "summary": "回音室与过滤气泡问题最早并不是以“算法评价”出现的，而是作为数字公共领域的一种规范性忧虑出现的。Sunstein 在 *Republic.com* 及其后续著作中讨论了定制化信息环境如何削弱共同议题空间、加剧群体极化；Pariser 则用“过滤气泡”一词将个性化算法带入公共辩论，强调用户在不自知的情况下被包裹在高度选择化的信息环境中。这一阶段的核心贡献不在于精细测量，而在于确立了一个至今仍然有效的判断：可见性分配不是中性的技术过程，而是公共生活的一部分。",
          "points": []
        },
        {
          "title": "2.2 观察性研究如何分解暴露与选择",
          "slug": "2-2",
          "summary": "Bakshy、Messing 与 Adamic（2015）是这一脉络中的关键转折点。该研究利用 Facebook 大规模日志，区分了朋友网络、算法排序和用户点击行为三者对意识形态异质暴露的影响。其真正重要之处并不只是“算法影响大小”的结论，而是它把“暴露到什么内容”从一般社交连接中剥离出来，证明暴露对象本身可以被分析。对后续研究而言，这一步具有方法论意义：研究者不必把用户的朋友关系或互动关系直接当作信息接触的替代变量。",
          "points": []
        },
        {
          "title": "2.3 重要论文细读（一）：Bakshy et al. (2015)",
          "slug": "2-3-bakshy-et-al-2015",
          "summary": "Bakshy 等的 *Science* 论文之所以至今仍是基准文献，不仅因为样本规模大，更因为它把算法排序从“平台黑箱”变成了可拆分的经验对象。研究者并未笼统地问“Facebook 是否造成了回音室”，而是更细地问：用户在面对不同意识形态来源时，朋友网络、算法排序和主动点击各自削减了多少异质暴露。",
          "points": []
        },
        {
          "title": "2.4 重要论文细读（二）：Cinelli et al. (2021)",
          "slug": "2-4-cinelli-et-al-2021",
          "summary": "Cinelli 等在 *PNAS* 上发表的跨平台比较研究，是回音室研究中另一个标志性节点。该研究比较了 Facebook、Twitter、Reddit 和 Gab 等平台的信息互动模式，发现平台结构差异会显著影响回音室程度。这一结果的重要性在于，它把问题从“回音室是否存在”推进到“在哪些制度和架构条件下更容易形成”。对推荐系统研究而言，这意味着任何关于结构风险的讨论都不能抽离平台机制背景。",
          "points": []
        },
        {
          "title": "2.5 推荐系统领域内的过滤气泡研究",
          "slug": "2-5",
          "summary": "与传播学和平台研究平行，推荐系统社区内部也出现了更直接讨论过滤气泡和偏差机制的工作。Bruns（2019）在 *Internet Policy Review* 中对\"过滤气泡\"概念本身提出了系统批评，指出该术语在学术使用中经常被过于宽泛地套用，掩盖了平台架构、用户能动性与信息生态之间的复杂关系；这一概念澄清对后续研究如何界定结构风险的边界具有警示意义。Areeb 等（2023）对过滤气泡型推荐研究做了系统回顾，强调该问题通常与曝光偏差、选择偏差、多样性不足和长期反馈回路纠缠在一起。Arguedas 等（2022）在路透研究所的报告中整合了回音室、过滤气泡和极化研究的多学科证据，强调在线与离线信息环境的相互作用常常被忽略，不同研究设计（调查、日志分析、实验）可能导致截然不同的结论。Aridor、Gonçalves 与 Sikdar（2020）则从用户决策模型出发，讨论即使没有推荐系统，用户本身的选择过程也可能推动内容收敛；推荐系统只是把这一过程进一步制度化。",
          "points": []
        },
        {
          "title": "2.6 本节小结：对象必须从社交连接转向曝光分配",
          "slug": "2-6",
          "summary": "回音室与过滤气泡研究最重要的遗产，不是提供了一套统一定义，而是迫使后续研究承认对象澄清的必要性。综上可以得到三个结论。",
          "points": []
        }
      ],
      "points": []
    },
    {
      "id": "section_3",
      "slug": "section-3",
      "number": 3,
      "title": "真实平台实验、重排序与因果证据",
      "streamKey": "platforms",
      "streamLabel": "平台实验与因果证据",
      "accent": "#c97052",
      "summary": "如果说回音室研究解决的是“研究对象是什么”，那么平台实验研究解决的就是“改变暴露结构后会发生什么”。近三年的重要变化在于，社交媒体研究不再只能依赖观察性推断，而是逐渐出现了大规模随机实验、反事实机器人和平台外部干预工具。这些研究极大提高了因果识别标准，也同时提高了方法论文的门槛。",
      "subsections": [
        {
          "title": "3.1 从观察相关性到平台实验",
          "slug": "3-1",
          "summary": "如果说回音室研究解决的是“研究对象是什么”，那么平台实验研究解决的就是“改变暴露结构后会发生什么”。近三年的重要变化在于，社交媒体研究不再只能依赖观察性推断，而是逐渐出现了大规模随机实验、反事实机器人和平台外部干预工具。这些研究极大提高了因果识别标准，也同时提高了方法论文的门槛。",
          "points": []
        },
        {
          "title": "3.2 Meta 2020 研究计划的意义",
          "slug": "3-2-meta-2020",
          "summary": "围绕 2020 年美国大选的 Facebook/Instagram 联合研究项目，是这一领域的分水岭。一方面，它第一次在平台级别大规模测量了同阵营暴露、意识形态隔离、转发机制以及时间序信息流替代算法信息流的影响；另一方面，它也迫使研究者接受一个并不讨喜的结果：暴露结构确实可以被显著改变，但态度和行为指标并不一定随之变化。",
          "points": []
        },
        {
          "title": "3.3 重要论文细读（三）：Nyhan et al. (2023)",
          "slug": "3-3-nyhan-et-al-2023",
          "summary": "Nyhan 等的 *Nature* 论文之所以值得细读，不仅因为它样本大、设计强，更因为它让“同阵营暴露是否天然有害”这一长期假设经受了最严格的经验检验。论文表明，美国成年 Facebook 用户看到的内容中，来自同阵营来源的比例确实较高；但把这部分暴露人为降低，并未导致研究者最关心的八项政治态度指标出现显著变化。",
          "points": []
        },
        {
          "title": "3.4 重要论文细读（四）：Hosseinmardi et al. (2024)",
          "slug": "3-4-hosseinmardi-et-al-2024",
          "summary": "Hosseinmardi 等（2024）在 *PNAS* 上发表的 YouTube 研究，为推荐系统因果识别提供了另一种路径。论文使用反事实机器人，将用户偏好与算法推荐效应区分开来，估计 YouTube 推荐系统对所观看视频党派性的因果作用。与直接观察真实用户的日志不同，这种设计试图通过控制偏好部分，单独识别算法推荐的边际影响。",
          "points": []
        },
        {
          "title": "3.5 平台外部干预工具的出现：Piccardi (2025) 与 Gauthier (2026)",
          "slug": "3-5-piccardi-2025-gauthier-2026",
          "summary": "较新的两项研究代表了这一领域的两个方向。Piccardi 等（2025）在 *Science* 上报告了一个无需平台合作的预注册实地实验：研究者通过浏览器扩展在 X 平台实时重排用户信息流，降低或提高对反民主态度与党派敌意内容的暴露。结果显示，这类内容暴露的减少或增加会使受试者对对立党派的情感温度计评分相应变暖或变冷，而传统参与指标变化不显著。这项研究的意义在于，它首次较为系统地展示了“平台外部、内容定向、实时重排”的可行性。",
          "points": []
        },
        {
          "title": "3.6 真实平台文献对重构论文的约束",
          "slug": "3-6",
          "summary": "综合上述文献，可以得出四个约束。",
          "points": []
        }
      ],
      "points": []
    },
    {
      "id": "section_4",
      "slug": "section-4",
      "number": 4,
      "title": "高阶网络、方向性感知算子与局部结构分析",
      "streamKey": "topology",
      "streamLabel": "高阶网络与方向算子",
      "accent": "#4ea48f",
      "summary": "许多推荐后果并不体现在单条边的平均强度上，而体现在局部结构中。A 比 B 更常被看见，是一个边级事实；但 A→B→C→A 是否形成局部回流，A 与 B 的双向失衡是否叠加跨群隔离，少数节点是否在若干三元结构中反复被放大，这些都超出了成对平均量能够表达的范围。要处理这些现象，仅用普通图上的节点度、边权不平衡或同质性系数往往不够。",
      "subsections": [
        {
          "title": "4.1 为什么成对平均量不够",
          "slug": "4-1",
          "summary": "许多推荐后果并不体现在单条边的平均强度上，而体现在局部结构中。A 比 B 更常被看见，是一个边级事实；但 A→B→C→A 是否形成局部回流，A 与 B 的双向失衡是否叠加跨群隔离，少数节点是否在若干三元结构中反复被放大，这些都超出了成对平均量能够表达的范围。要处理这些现象，仅用普通图上的节点度、边权不平衡或同质性系数往往不够。",
          "points": []
        },
        {
          "title": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "slug": "4-2-hodge",
          "summary": "在具体工具层面，Jiang、Lim、Yao 与 Ye（2011）的 HodgeRank 是离散 Hodge 理论进入应用研究的重要起点。该工作表明，排序数据中的全局一致性与局部循环不一致可以被系统分解；其中局部循环项恰恰对应了无法由简单全序解释的结构张力。这一思想后来被广泛推广到图信号、高阶流场和复杂系统分析中。",
          "points": []
        },
        {
          "title": "4.3 重要论文细读（五）：Jiang et al. (2011)",
          "slug": "4-3-jiang-et-al-2011",
          "summary": "Jiang 等（2011）虽然研究的是统计排名，而非推荐曝光，但它对本文最重要的启示在于“局部循环不一致可以被单独识别，而不必被平均掉”。在偏好排序情境中，这意味着 A 优于 B、B 优于 C、C 又优于 A 的循环结构具有独立解释价值；在推荐曝光情境中，这种思想可以自然迁移为“局部曝光闭环与方向性失衡是独立结构信号”。",
          "points": []
        },
        {
          "title": "4.4 重要论文细读（六）：Gong et al. (2024)",
          "slug": "4-4-gong-et-al-2024",
          "summary": "Gong 等（2024）的论文是当前技术路线中最接近目标问题的一篇基础工作。它的核心贡献并不在于某个具体应用，而在于把联络拉普拉斯从有向图推进到有向单纯复形，使方向性不再局限于边，而可以进入更高阶结构单元。",
          "points": []
        },
        {
          "title": "4.5 高阶工具在推荐研究中的位置",
          "slug": "4-5",
          "summary": "高阶与方向性感知文献对推荐曝光研究提供的是分析语言，而不是现成答案。它们说明三件事：第一，局部高阶结构包含成对平均量无法表达的信息；第二，方向性可以通过相位和联络结构稳定编码；第三，这些工具适合处理“局部回流”“局部挫折”“局部闭环”这样的对象。",
          "points": []
        }
      ],
      "points": []
    },
    {
      "id": "section_5",
      "slug": "section-5",
      "number": 5,
      "title": "曝光公平、多侧推荐与动态偏差控制",
      "streamKey": "fairness",
      "streamLabel": "曝光公平与多侧推荐",
      "accent": "#7a8df0",
      "summary": "推荐系统公平性研究最重要的转变之一，是将曝光理解为一种可分配资源，而不仅是排序结果的副产品。这一转变的理论基础近年来由 Diaz（2024）的\"推荐即信息分配\"框架进一步系统化，将排名和推荐系统明确定位为信息性资源的分配机制。在排名公平的技术层面，Zehlike 等（2017）提出的 FA*IR 算法首次为 top-$k$ 排名施加了受保护群体比例约束，用统计检验保障弱势群体在排序结果中获得最低比例的曝光位置，开创了公平性约束与排序质量共同优化的技术路线。Singh 与 Joachims（2018）在排名公平研究中进一步系统提出\"曝光公平\"的概念，强调若排名位置具有不同的注意力权重，那么不同项目获得的曝光份额就可以被视为资源分配。Biega、Gummadi 与 Weikum（2018）进一步提出\"注意力公平摊销\"，把注意力分配与个体公平联系起来。Diaz 等（2020）则将\"期望曝光\"方法引入随机排名评价，为推荐与检索场景下的曝光公平计算提供了更稳的技术基础。",
      "subsections": [
        {
          "title": "5.1 曝光作为可分配资源",
          "slug": "5-1",
          "summary": "推荐系统公平性研究最重要的转变之一，是将曝光理解为一种可分配资源，而不仅是排序结果的副产品。这一转变的理论基础近年来由 Diaz（2024）的\"推荐即信息分配\"框架进一步系统化，将排名和推荐系统明确定位为信息性资源的分配机制。在排名公平的技术层面，Zehlike 等（2017）提出的 FA*IR 算法首次为 top-$k$ 排名施加了受保护群体比例约束，用统计检验保障弱势群体在排序结果中获得最低比例的曝光位置，开创了公平性约束与排序质量共同优化的技术路线。Singh 与 Joachims（2018）在排名公平研究中进一步系统提出\"曝光公平\"的概念，强调若排名位置具有不同的注意力权重，那么不同项目获得的曝光份额就可以被视为资源分配。Biega、Gummadi 与 Weikum（2018）进一步提出\"注意力公平摊销\"，把注意力分配与个体公平联系起来。Diaz 等（2020）则将\"期望曝光\"方法引入随机排名评价，为推荐与检索场景下的曝光公平计算提供了更稳的技术基础。",
          "points": []
        },
        {
          "title": "5.2 多侧推荐与系统性暴露不平等",
          "slug": "5-2",
          "summary": "随着研究推进，公平性问题逐渐从单侧扩展到多侧和多利益相关者环境。Abdollahpouri、Burke 与 Mobasher 较早提出推荐系统应被视为多利益相关者环境，后续又将流行度偏差与校准、公平联系起来。Patro 等（2020）提出的 FairRec 算法明确在双边平台中同时建模消费者公平与生产者公平，通过贪心加扰动策略在保证用户效用最低损失的条件下，为每个生产者保障最低曝光份额——这是首批系统处理双侧公平约束的推荐算法之一。Wu 等（2022）在此基础上，把期望曝光扩展到同时从消费者与生产者视角建模的联合曝光公平框架，并明确指出系统性曝光不平等会造成分配性伤害与表征性伤害。",
          "points": []
        },
        {
          "title": "5.3 重要论文细读（七）：Diaz et al. (2020)",
          "slug": "5-3-diaz-et-al-2020",
          "summary": "Diaz 等（2020）的期望曝光方法之所以是核心文献，不只是因为它提出了一个排名评价指标，而是因为它改变了研究者对排序策略的理解。传统离线评估通常只看点击、NDCG 或精确率，而 Diaz 等表明，如果系统输出的是一个分布而非单一固定排序，那么曝光本身可以被建模、比较和优化。",
          "points": []
        },
        {
          "title": "5.4 重要论文细读（八）：Wu et al. (2022)",
          "slug": "5-4-wu-et-al-2022",
          "summary": "Wu 等（2022）的联合多侧曝光公平框架，为推荐研究提供了最直接的系统性暴露偏差视角。论文不再只问“单个项目是否被不公平对待”，而是问“不同用户群体与不同生产者群体之间是否存在系统性的过曝或欠曝”。这一点非常契合结构外部性研究的目标，因为结构风险本质上也是在讨论系统是否在某些局部位置持续地分配了不对称机会。",
          "points": []
        },
        {
          "title": "5.5 动态公平与长期反馈回路",
          "slug": "5-5",
          "summary": "静态公平框架还不足以处理推荐系统的长期反馈问题。Mansoury 与 Mobasher（2023）明确指出，许多只在单轮推荐上缓解曝光不平等的方法，放到动态环境中会失效，因为推荐结果会反过来改变未来训练数据与偏差结构。Yoo 等（2024）进一步把用户侧公平引入动态推荐，说明群体间的性能差异在持续微调过程中可能逐步扩大。Chen 等（2024）在多侧推荐情境下提出 FAIR 与 FORM 框架，强调平台、用户和项目之间的公平权衡需要在在线学习过程中同时处理。Shafiloo 等（2026）则把消费者公平、提供者公平和项目层公平明确拆分，强调提供者与项目不是一个可以随便合并的概念。",
          "points": []
        },
        {
          "title": "5.6 公平性综述文献的启示",
          "slug": "5-6",
          "summary": "近年来的综述文献使这一领域的结构更加清晰。Jin 等（2023）系统梳理了公平感知推荐系统，并将其纳入可信推荐系统讨论；Vassøy 与 Langseth（2024）聚焦消费者侧公平，强调“什么算公平”本身就依赖于不同的公平解释框架；Klimashevskaia、Jannach、Elahi 与 Trattner（2024）对流行度偏差进行了多维回顾，指出大多数论文仍然停留在静态离线实验，而且经常没有充分解释为什么某种偏差在某个应用领域中真正构成伤害。",
          "points": []
        },
        {
          "title": "5.7 本节小结：结构外部性研究需要与曝光公平接轨，但不能被其替代",
          "slug": "5-7",
          "summary": "曝光公平和多侧推荐文献为结构外部性研究提供了三个关键资源。第一，它们把“被看见”明确写成可分配资源。第二，它们把系统性暴露不平等与可识别的社会伤害联系起来。第三，它们迫使研究者将推荐系统视为多利益相关者环境，而不是只服务于用户单侧效用。",
          "points": []
        }
      ],
      "points": []
    },
    {
      "id": "section_6",
      "slug": "section-6",
      "number": 6,
      "title": "反事实评估、离策略学习与公开数据基础设施",
      "streamKey": "evaluation",
      "streamLabel": "离策略评估与数据基础设施",
      "accent": "#5f8aa6",
      "summary": "只要一篇论文提出新的重排序策略、曝光约束或治理动作，它就不可避免地要面对离策略评估问题。推荐系统不是一次性的分类任务，而是持续部署的决策系统。上线前想知道新策略会发生什么，单靠离线准确率通常不够，研究者必须利用带日志的决策反馈或其他反事实方法估计新策略的表现。",
      "subsections": [
        {
          "title": "6.1 为什么推荐研究必须面对离策略评估",
          "slug": "6-1",
          "summary": "只要一篇论文提出新的重排序策略、曝光约束或治理动作，它就不可避免地要面对离策略评估问题。推荐系统不是一次性的分类任务，而是持续部署的决策系统。上线前想知道新策略会发生什么，单靠离线准确率通常不够，研究者必须利用带日志的决策反馈或其他反事实方法估计新策略的表现。",
          "points": []
        },
        {
          "title": "6.2 公开数据基础设施的变化",
          "slug": "6-2",
          "summary": "推荐研究之所以长期停留在用户-项目交互表，一个重要原因是公开数据集严重缺乏真实暴露信息。MIND（Wu 等，2020）为新闻推荐提供了大规模展示日志和点击日志，是新闻推荐研究的重要里程碑。它虽然仍然主要服务于新闻推荐建模，但至少提供了比纯用户-项目交互表更接近曝光过程的数据结构。与此相邻，ContentWise Impressions（Pérez Maurera 等，2020）将工业视频平台中的展示记录显式开放出来，进一步证明“展示信息缺失”并非公开推荐研究无法克服的宿命。",
          "points": []
        },
        {
          "title": "6.3 重要论文细读（九）：FINN.no Slates Dataset",
          "slug": "6-3-finn-no-slates-dataset",
          "summary": "Eide 等（2021）的 FINN.no Slates 论文值得特别强调，因为它几乎用最直接的方式指出了现有推荐研究的一个结构性缺陷：多数公开数据集只保留点击，而不保留“用户实际看到了什么”。在没有真实展示记录的情况下，研究者很容易把未点击项当成“不感兴趣”，但实际上它可能只是从未被展示。",
          "points": []
        },
        {
          "title": "6.4 重要论文细读（十）：KuaiRand 与 Open Bandit",
          "slug": "6-4-kuairand-open-bandit",
          "summary": "KuaiRand 的重要性在于，它不是一般意义上的序列推荐数据，而是包含随机暴露干预的时序数据集。研究者因而可以更严肃地讨论曝光偏差与非随机缺失问题。对于长期受流行度偏差和反馈回路困扰的推荐研究来说，这是从“观察到的点击”走向“接近可识别暴露机制”的一步。",
          "points": []
        },
        {
          "title": "6.5 本节小结：没有动作层和日志层，结构治理就很难成立",
          "slug": "6-5",
          "summary": "反事实评估和公开数据文献最终指向一个简单但重要的判断：推荐系统研究若想从“描述结构”走向“评估治理”，就必须面对真实动作层。没有请求-展示列表层级数据、没有曝光日志、没有日志策略、没有离策略评估，就很难严肃讨论新策略在现实系统中的后果。用户聚合层级网络仍然可以用于机制诊断与原型建模，但不应冒充为部署级证据。",
          "points": []
        }
      ],
      "points": []
    },
    {
      "id": "section_7",
      "slug": "section-7",
      "number": 7,
      "title": "综合评述与研究空白",
      "streamKey": "gaps",
      "streamLabel": "综合评述与研究空白",
      "accent": "#9f7653",
      "summary": "经过前述梳理，可以更清楚地看到当前文献的共识与断裂。共识在于：推荐系统确实持续分配可见性（Diaz, 2024）；这种分配会形成偏差、反馈回路与社会性外部性；暴露、排名和平台设计都可以被实证研究。断裂则在于：研究对象长期混杂，结构与结果经常被越级连接，用户聚合层级代理与请求-展示列表层级动作经常被混用，而许多\"治理\"论文仍在用自己的内部分数证明自己的成功。Raji 等（2020）在 FAccT 上提出的端到端内部算法审计框架指出了一个关键问题：有效的算法审计需要在体制层面嵌入预部署评估、持续监控和外部问责机制，而不能停留于研究者自行设定标准、自行评估的封闭循环。",
      "subsections": [
        {
          "title": "7.1 对象层空白：从用户聚合层级代理到请求-展示列表层级对象",
          "slug": "7-1",
          "summary": "传播学和平台研究已经证明暴露是独立对象，推荐系统数据基础设施也逐渐开始提供展示-列表层级日志，但很多结构研究仍停留在用户-用户聚合代理上。对重构论文而言，最需要正面处理的不是如何把代理伪装成真实对象，而是如何明确写出二者之间的近似关系、信息损失和边界条件。",
          "points": []
        },
        {
          "title": "7.2 机制层空白：高阶结构分析与平台动作脱节",
          "slug": "7-2",
          "summary": "高阶网络与方向性感知方法可以刻画局部闭环、方向性失衡和高阶流场，但大多数工作停留在算子、谱性质或动力学展示上。推荐系统干预文献则常常直接从全局极化、多样性或公平目标出发，而缺少“哪些局部结构先被识别出来，为什么是它们”的诊断层。真正缺少的，不是更多高阶数学，也不是更多全局重排序，而是高阶诊断与受约束动作之间的中层连接。",
          "points": []
        },
        {
          "title": "7.3 评价层空白：结构信号与结果变量混写",
          "slug": "7-3",
          "summary": "Nyhan、Guess、González-Bailón 等文献已经足够清楚地表明，暴露结构变化不等于态度或福利变化。但大量研究仍然把结构偏差直接解释为下游伤害。对于重构论文来说，这意味着诊断模型必须以独立风险事件或独立评价目标为锚，而不能把手工加权结构分数当作最终因变量和最终成效指标。",
          "points": []
        },
        {
          "title": "7.4 动作层空白：从聚合边重加权到真正的重排序",
          "slug": "7-4",
          "summary": "公平性、期望曝光和多侧推荐文献已经把请求-展示列表层级排序看成基本动作空间；平台实验文献也越来越多地围绕信息流重排展开。与此相比，在用户聚合层级边上做权重微调的原型虽然仍有方法价值，但已经不足以作为最终治理动作的终点。未来论文若要达到更强的 IPM 方法稿标准，动作空间必须至少在叙述和实验设计上向请求-展示列表层级对齐。",
          "points": []
        },
        {
          "title": "7.5 证据层空白：从回放实验到独立评估",
          "slug": "7-5",
          "summary": "真实平台实验、反事实机器人、平台外部浏览器干预和离策略评估基础设施共同说明，结构研究要想提高说服力，必须引入独立评估。仿真可以承担机制隔离；回放实验可以承担边界说明；但主结论若仍只依赖与方法假设高度贴合的生成机制和内部指标，审稿人会自然质疑其中的循环论证风险。",
          "points": []
        },
        {
          "title": "7.6 研究重构的直接方向",
          "slug": "7-6",
          "summary": "综合上述文献，围绕推荐曝光结构外部性的论文若要具备更强的期刊竞争力，至少应满足以下条件。",
          "points": [
            "研究对象应明确锚定为曝光分配，而不是泛化的“回音室”。",
            "局部高阶结构应被写成审计信号和治理入口，而不是态度结果的替身。",
            "诊断层应从手工固定权重指数转向以独立不利结果为目标的校准模型。",
            "动作层应从聚合边扰动推进到请求-展示列表层级重排序，或至少与其兼容的表示。",
            "评价层应同时报告结构外部性、效用、公平、代价与不确定性，而不是只报告内部结构分数。",
            "证据链应采用“真实日志/真实展示列表主评估 + 仿真机制隔离 + 旧回放实验作为边界附证”的分层设计。"
          ]
        }
      ],
      "points": []
    },
    {
      "id": "section_8",
      "slug": "section-8",
      "number": 8,
      "title": "结论",
      "streamKey": "conclusion",
      "streamLabel": "结论与写作约束",
      "accent": "#6f7c89",
      "summary": "推荐系统研究正在经历一个明确的重心转移：从\"相关内容能否被准确找出\"转向\"平台如何持续分配可见性，以及这种分配是否会形成结构性外部性\"（Diaz, 2024）。回音室与过滤气泡研究推动了对象澄清，平台实验提高了因果标准——Bail（2018）与 Levy（2021）的实验更进一步表明，暴露改变与态度改变之间存在非单调衰减——高阶网络工具提供了局部结构语言，曝光公平与多侧推荐把可见性写成资源分配问题，离策略评估与公开数据基础设施则为更严格的评估奠定了条件。",
      "subsections": [],
      "points": []
    }
  ],
  "references": [
    {
      "id": "nardi1999",
      "index": 19,
      "title": "Information Ecologies: Using Technology with Heart",
      "authors": [
        "Bonnie A. Nardi",
        "Vicki L. O'Day"
      ],
      "year": 1999,
      "venue": "MIT Press",
      "citation": "Nardi, B. A., O'Day, V. L. *Information Ecologies: Using Technology with Heart*. MIT Press, 1999.",
      "doi": "10.5210/fm.v4i5.669",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.5210/fm.v4i5.669",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "sunstein2001",
      "index": 1,
      "title": "Republic.com",
      "authors": [
        "Cass R. Sunstein"
      ],
      "year": 2001,
      "venue": "Princeton University Press",
      "citation": "Sunstein, C. R. *Republic.com*. Princeton University Press, 2001.",
      "doi": "10.1515/9781400890521",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1515/9781400890521",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "garrett2009",
      "index": 4,
      "title": "Echo chambers online?: Politically motivated selective exposure among Internet news users",
      "authors": [
        "R. Garrett"
      ],
      "year": 2009,
      "venue": "Journal of Computer-Mediated Communication",
      "citation": "Garrett, R. K. Echo chambers online? Politically motivated selective exposure among Internet news users. *Journal of Computer-Mediated Communication*, 2009, 14(2): 265-285.",
      "doi": "10.1111/j.1083-6101.2009.01440.x",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1111/j.1083-6101.2009.01440.x",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "jiang2011",
      "index": 23,
      "title": "Statistical ranking and combinatorial Hodge theory",
      "authors": [
        "Xiaoye Jiang",
        "Lek‐Heng Lim",
        "Yuan Yao",
        "Yinyu Ye"
      ],
      "year": 2010,
      "venue": "Mathematical Programming",
      "citation": "Jiang, X., Lim, L.-H., Yao, Y., Ye, Y. Statistical ranking and combinatorial Hodge theory. *Mathematical Programming*, 2011, 127(1): 203-244.",
      "doi": "10.1007/s10107-010-0419-x",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.3 重要论文细读（五）：Jiang et al. (2011)",
          "streamKey": "topology",
          "snippet": "Jiang 等（2011）虽然研究的是统计排名，而非推荐曝光，但它对本文最重要的启示在于“局部循环不一致可以被单独识别，而不必被平均掉”。在偏好排序情境中，这意味着 A 优于 B、B 优于 C、C 又优于 A 的循环结构具有独立解释价值；在推荐曝光情境中，这种思想可以自然迁移为“局部曝光闭环与方向性失衡是"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1007/s10107-010-0419-x",
      "localPdf": "./references/pdfs/2010_jiang2011_statistical-ranking-and-combinatorial-hodge-theory.pdf",
      "pdfFilename": "2010_jiang2011_statistical-ranking-and-combinatorial-hodge-theory.pdf",
      "isCurated": true
    },
    {
      "id": "li2010",
      "index": 50,
      "title": "A contextual-bandit approach to personalized news article recommendation",
      "authors": [
        "Lihong Li",
        "Wei Chu",
        "John Langford",
        "Robert E. Schapire"
      ],
      "year": 2010,
      "venue": "arXiv (Cornell University)",
      "citation": "Li, L., Chu, W., Langford, J., Schapire, R. E. A contextual-bandit approach to personalized news article recommendation. In: *Proceedings of the Web Conference (WWW)*, 2010.",
      "doi": "10.1145/1772690.1772758",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/1003.0146",
      "localPdf": "./references/pdfs/2010_li2010_a-contextual-bandit-approach-to-personalized-news-articl.pdf",
      "pdfFilename": "2010_li2010_a-contextual-bandit-approach-to-personalized-news-articl.pdf",
      "isCurated": false
    },
    {
      "id": "pariser2011",
      "index": 3,
      "title": "The Filter Bubble: What the Internet Is Hiding from You",
      "authors": [
        "Eli Pariser"
      ],
      "year": 2011,
      "venue": "Penguin Press",
      "citation": "Pariser, E. *The Filter Bubble: What the Internet Is Hiding from You*. Penguin Press, 2011.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "singer2012",
      "index": 24,
      "title": "Vector diffusion maps and the connection Laplacian",
      "authors": [
        "Amit Singer",
        "Hau‐Tieng Wu"
      ],
      "year": 2012,
      "venue": "Communications on Pure and Applied Mathematics",
      "citation": "Singer, A., Wu, H.-T. Vector diffusion maps and the connection Laplacian. *Communications on Pure and Applied Mathematics*, 2012, 65(8): 1067-1144.",
      "doi": "10.1002/cpa.21395",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 404: Not Found",
      "externalUrl": "https://www.ncbi.nlm.nih.gov/pmc/articles/3886882",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "bandeira2013",
      "index": 25,
      "title": "A Cheeger Inequality for the Graph Connection Laplacian",
      "authors": [
        "Afonso S. Bandeira",
        "Amit Singer",
        "Daniel A. Spielman"
      ],
      "year": 2013,
      "venue": "SIAM Journal on Matrix Analysis and Applications",
      "citation": "Bandeira, A. S., Singer, A., Spielman, D. A. A Cheeger inequality for the graph connection Laplacian. *SIAM Journal on Matrix Analysis and Applications*, 2013, 34(4): 1611-1630.",
      "doi": "10.1137/120875338",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1137/120875338",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "sandvig2014",
      "index": 60,
      "title": "Auditing Algorithms: Research Methods for Detecting Discrimination on Internet Platforms",
      "authors": [
        "Christian Sandvig",
        "Kevin Hamilton",
        "Karrie Karahalios",
        "Cedric Langbort"
      ],
      "year": 2014,
      "venue": "International Communication Association",
      "citation": "Sandvig, C., Hamilton, K., Karahalios, K., Langbort, C. Auditing algorithms: Research methods for detecting discrimination on Internet platforms. In: *Data and Discrimination: Converting Critical Concerns into Productive Inquiry*, International Communication Association, 2014.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "barbera2015",
      "index": 65,
      "title": "Birds of the Same Feather Tweet Together: Bayesian Ideal Point Estimation Using Twitter Data",
      "authors": [
        "Pablo Barberá"
      ],
      "year": 2014,
      "venue": "Political Analysis",
      "citation": "Barberá, P. Birds of the same feather tweet together: Bayesian ideal point estimation using Twitter data. *Political Analysis*, 2015, 23(1): 76-91.",
      "doi": "10.1093/pan/mpu011",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_2",
          "sectionTitle": "2.1 从规范性忧虑到经验测量",
          "streamKey": "constructs",
          "snippet": "技术过程，而是公共生活的一部分。 但正是在这一点上，后续研究很快暴露出对象混淆的问题。Garrett 讨论的是选择性接触，重点在用户如何出于政治动机选择与自身立场一致的信息来源。Barberá（2015）开发了基于 Twitter 关注网络的贝叶斯理想点估计方法，使意识形态分布的测量从自我报告走向行为推断，为后续曝光隔离研究提供了关键的操作化工具。Flaxman、Goel 与 Rao 研究的是网络新闻消费路径，重点在搜索引擎与社交媒体使用是否扩大了意识形态距离。Bakshy 等研"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1093/pan/mpu011",
      "localPdf": "./references/pdfs/2014_barbera2015_birds-of-the-same-feather-tweet-together-bayesian-ideal.pdf",
      "pdfFilename": "2014_barbera2015_birds-of-the-same-feather-tweet-together-bayesian-ideal.pdf",
      "isCurated": false
    },
    {
      "id": "bakshy2015",
      "index": 5,
      "title": "Exposure to ideologically diverse news and opinion on Facebook",
      "authors": [
        "Eytan Bakshy",
        "Solomon Messing",
        "Lada A. Adamic"
      ],
      "year": 2015,
      "venue": "Science",
      "citation": "Bakshy, E., Messing, S., Adamic, L. A. Exposure to ideologically diverse news and opinion on Facebook. *Science*, 2015, 348(6239): 1130-1132.",
      "doi": "10.1126/science.aaa1160",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.aaa1160",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "swaminathan2015",
      "index": 51,
      "title": "Counterfactual Risk Minimization: Learning from Logged Bandit Feedback",
      "authors": [
        "Adith Swaminathan",
        "Thorsten Joachims"
      ],
      "year": 2015,
      "venue": "ICML",
      "citation": "Swaminathan, A., Joachims, T. Counterfactual risk minimization: Learning from logged bandit feedback. In: *Proceedings of the International Conference on Machine Learning (ICML)*, 2015.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://proceedings.mlr.press/v37/swaminathan15.html",
      "localPdf": "./references/pdfs/2015_swaminathan2015_counterfactual-risk-minimization-learning-from-logged-ba.pdf",
      "pdfFilename": "2015_swaminathan2015_counterfactual-risk-minimization-learning-from-logged-ba.pdf",
      "isCurated": false
    },
    {
      "id": "flaxman2016",
      "index": 6,
      "title": "Filter Bubbles, Echo Chambers, and Online News Consumption",
      "authors": [
        "Seth Flaxman",
        "Sharad Goel",
        "Justin M. Rao"
      ],
      "year": 2016,
      "venue": "Public Opinion Quarterly",
      "citation": "Flaxman, S., Goel, S., Rao, J. M. Filter bubbles, echo chambers, and online news consumption. *Public Opinion Quarterly*, 2016, 80(S1): 298-320.",
      "doi": "10.1093/poq/nfw006",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1093/poq/nfw006",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "sunstein2017",
      "index": 2,
      "title": "#Republic: Divided Democracy in the Age of Social Media",
      "authors": [
        "Cass R. Sunstein"
      ],
      "year": 2017,
      "venue": "Princeton University Press",
      "citation": "Sunstein, C. R. *#Republic: Divided Democracy in the Age of Social Media*. Princeton University Press, 2017.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "fanuel2017",
      "index": 26,
      "title": "Magnetic eigenmaps for community detection in directed networks",
      "authors": [
        "Michaël Fanuel",
        "Carlos M. Alaíz",
        "Johan A. K. Suykens"
      ],
      "year": 2017,
      "venue": "Physical review. E",
      "citation": "Fanuel, M., Alaíz, C. M., Suykens, J. A. K. Magnetic eigenmaps for community detection in directed networks. *Physical Review E*, 2017, 95(2): 022302.",
      "doi": "10.1103/physreve.95.022302",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "er 与 Wu（2012）提出的联络拉普拉斯，为在边上编码方向性相位提供了通用框架；Bandeira、Singer 与 Spielman（2013）则从谱理论角度进一步奠定了基础。Fanuel 等（2017）将磁性谱方法用于有向网络聚类，说明复相位权重不仅有理论意义，也具备可操作的计算价值。Benson、Gleich 与 Leskovec（2018）在 *PNAS* 上发表的工作把高阶结构分析推向了图数据挖掘的核心：他们证明真实网络中的单纯闭包模式（simplicial closur"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1103/physreve.95.022302",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "matakos2017",
      "index": 31,
      "title": "Measuring and moderating opinion polarization in social networks",
      "authors": [
        "Antonis Matakos",
        "Evimaria Terzi",
        "Panayiotis Tsaparas"
      ],
      "year": 2017,
      "venue": "Data Mining and Knowledge Discovery",
      "citation": "Matakos, A., Terzi, E., Tsaparas, P. Measuring and moderating opinion polarization in social networks. *Data Mining and Knowledge Discovery*, 2017, 31(5): 1480-1505.",
      "doi": "10.1007/s10618-017-0527-9",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1007/s10618-017-0527-9",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "garimella2017",
      "index": 33,
      "title": "Reducing Controversy by Connecting Opposing Views",
      "authors": [
        "Kiran Garimella",
        "Gianmarco De Francisci Morales",
        "Aristides Gionis",
        "Michael Mathioudakis"
      ],
      "year": 2017,
      "venue": "Proceedings of the Tenth ACM International Conference on Web Search and Data Mining",
      "citation": "Garimella, K., De Francisci Morales, G., Gionis, A., Mathioudakis, M. Reducing controversy by connecting opposing views. In: *Proceedings of the ACM International Conference on Web Search and Data Mining (WSDM)*, 2017: 81-90.",
      "doi": "10.1145/3018661.3018703",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3018661.3018703",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "abdollahpouri2017",
      "index": 40,
      "title": "Recommender Systems as Multistakeholder Environments",
      "authors": [
        "Himan Abdollahpouri",
        "Robin Burke",
        "Bamshad Mobasher"
      ],
      "year": 2017,
      "venue": "Proceedings of the 25th Conference on User Modeling, Adaptation and Personalization",
      "citation": "Abdollahpouri, H., Burke, R., Mobasher, B. Recommender systems as multistakeholder environments. In: *Adjunct Proceedings of the 25th Conference on User Modeling, Adaptation and Personalization*, 2017: 347-348.",
      "doi": "10.1145/3079628.3079657",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3079628.3079657",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "swaminathan2017",
      "index": 62,
      "title": "Off-Policy Evaluation for Slate Recommendation",
      "authors": [
        "Adith Swaminathan",
        "Akshay Krishnamurthy",
        "Aman Agarwal",
        "Miroslav Dudík",
        "John Langford"
      ],
      "year": 2017,
      "venue": "NeurIPS",
      "citation": "Swaminathan, A., Krishnamurthy, A., Agarwal, A., Dudík, M., Langford, J., Jose, D., Zitouni, I. Off-policy evaluation for slate recommendation. In: *Advances in Neural Information Processing Systems*, 2017, 30.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "evaluation"
      ],
      "streamLabel": "离策略评估与数据基础设施",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_6",
          "sectionTitle": "6.1 为什么推荐研究必须面对离策略评估",
          "streamKey": "evaluation",
          "snippet": "与真实相关性解耦——这一工作不仅推动了 unbiased learning-to-rank 子领域的形成，也为后续\"如果换一个排序策略会怎样\"的反事实问题提供了技术基石。进一步地，Swaminathan 等（2017）已把离策略评估明确扩展到展示列表推荐场景，说明多项目联合动作不能简单退化为单项目点击估计。Buchholz 等（2022）则从排序评估角度进一步指出，点击模型假设与偏差-方差权衡会显著影响离线评估可信度。Open Bandit Dataset and Pipeline（Saito"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "zehlike2017",
      "index": 72,
      "title": "FA*IR: A Fair Top-k Ranking Algorithm",
      "authors": [
        "Meike Zehlike",
        "Francesco Bonchi",
        "Carlos Castillo",
        "Sara Hajian",
        "Mohamed Megahed",
        "Ricardo Baeza-Yates"
      ],
      "year": 2017,
      "venue": "CIKM",
      "citation": "Zehlike, M., Bonchi, F., Castillo, C., Hajian, S., Megahed, M., Baeza-Yates, R. FA*IR: A fair top-k ranking algorithm. In: *Proceedings of the ACM International Conference on Information and Knowledge Management (CIKM)*, 2017: 1569-1578.",
      "doi": "10.1145/3132847.3132938",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.1 曝光作为可分配资源",
          "streamKey": "fairness",
          "snippet": "不仅是排序结果的副产品。这一转变的理论基础近年来由 Diaz（2024）的\"推荐即信息分配\"框架进一步系统化，将排名和推荐系统明确定位为信息性资源的分配机制。在排名公平的技术层面，Zehlike 等（2017）提出的 FA*IR 算法首次为 top-$k$ 排名施加了受保护群体比例约束，用统计检验保障弱势群体在排序结果中获得最低比例的曝光位置，开创了公平性约束与排序质量共同优化的技术路线。Singh 与 Joachims（2018）在排名公平研究中进一步系统提出\"曝光公平\"的概念，强调"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "循环论证。 表 2 总结了这一文献线的关键分工。 | 文献 | 主要问题 | 核心贡献 | 对结构外部性研究的意义 | | --- | --- | --- | --- | | Zehlike et al. (2017) | 受保护群体的 top-$k$ 公平排名 | FA*IR 算法：约束式公平排名 | 为约束重排序提供先驱技术路线 | | Singh & Joachims (2018) | 排名中的曝光公平 | 将曝光建模为注意力分配 | 为可见性分配提供正式语言 | | Biega et"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1028)>",
      "externalUrl": "https://repositori.upf.edu/items/c151e269-3d8b-4018-b4c3-e0b4587d2c5f",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "joachims2017",
      "index": 74,
      "title": "Unbiased Learning-to-Rank with Biased Feedback",
      "authors": [
        "Thorsten Joachims",
        "Adith Swaminathan",
        "Tobias Schnabel"
      ],
      "year": 2017,
      "venue": "Proceedings of the Tenth ACM International Conference on Web Search and Data Mining",
      "citation": "Joachims, T., Swaminathan, A., Schnabel, T. Unbiased learning-to-rank with biased feedback. In: *Proceedings of the ACM International Conference on Web Search and Data Mining (WSDM)*, 2017: 781-789.",
      "doi": "10.1145/3018661.3018699",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1145/3018661.3018699",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "dubois2018",
      "index": 7,
      "title": "The echo chamber is overstated: the moderating effect of political interest and diverse media",
      "authors": [
        "Elizabeth Dubois",
        "Grant Blank"
      ],
      "year": 2018,
      "venue": "Information Communication & Society",
      "citation": "Dubois, E., Blank, G. The echo chamber is overstated: The moderating effect of political interest and diverse media. *Information, Communication & Society*, 2018, 21(5): 729-745.",
      "doi": "10.1080/1369118x.2018.1428656",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1080/1369118x.2018.1428656",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "musco2018",
      "index": 32,
      "title": "Minimizing Polarization and Disagreement in Social Networks",
      "authors": [
        "Cameron Musco",
        "Christopher Musco",
        "Charalampos E. Tsourakakis"
      ],
      "year": 2018,
      "venue": "Proceedings of the 2018 World Wide Web Conference on World Wide Web - WWW '18",
      "citation": "Musco, C., Musco, C., Tsourakakis, C. E. Minimizing polarization and disagreement in social networks. In: *Proceedings of the Web Conference (WWW)*, 2018: 369-378.",
      "doi": "10.1145/3178876.3186103",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1145/3178876.3186103",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "singh2018",
      "index": 37,
      "title": "Fairness of Exposure in Rankings",
      "authors": [
        "Ashudeep Singh",
        "Thorsten Joachims"
      ],
      "year": 2018,
      "venue": "Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery &amp; Data Mining",
      "citation": "Singh, A., Joachims, T. Fairness of exposure in rankings. In: *Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)*, 2018: 2219-2228.",
      "doi": "10.1145/3219819.3220088",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1145/3219819.3220088",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "biega2018",
      "index": 38,
      "title": "Equity of Attention: Amortizing Individual Fairness in Rankings",
      "authors": [
        "Asia J. Biega",
        "Krishna P. Gummadi",
        "Gerhard Weikum"
      ],
      "year": 2018,
      "venue": "SIGIR",
      "citation": "Biega, A. J., Gummadi, K. P., Weikum, G. Equity of attention: Amortizing individual fairness in rankings. In: *Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)*, 2018: 405-414.",
      "doi": "10.1145/3209978.3210063",
      "arxivId": "1805.01788",
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "| 为约束重排序提供先驱技术路线 | | Singh & Joachims (2018) | 排名中的曝光公平 | 将曝光建模为注意力分配 | 为可见性分配提供正式语言 | | Biega et al. (2018) | 注意力公平 | 将注意力视为可摊销资源 | 强化\"被看见\"本身的公平含义 | | Patro et al. (2020) | 双边平台的双侧公平 | FairRec：同时保障消费者与生产者 | 为多利益相关者曝光治理提供参照 | | Diaz et al. (2020) |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://arxiv.org/abs/1805.01788",
      "localPdf": "./references/pdfs/2018_biega2018_equity-of-attention-amortizing-individual-fairness-in-ra.pdf",
      "pdfFilename": "2018_biega2018_equity-of-attention-amortizing-individual-fairness-in-ra.pdf",
      "isCurated": false
    },
    {
      "id": "bail2018",
      "index": 68,
      "title": "Exposure to opposing views on social media can increase political polarization",
      "authors": [
        "Christopher A. Bail",
        "Lisa P. Argyle",
        "Taylor Brown",
        "John P. Bumpus",
        "Haohan Chen",
        "M. B. Fallin Hunzaker",
        "Jaemin Lee",
        "Marcus Mann",
        "Friedolin Merhout",
        "Alexander Volfovsky"
      ],
      "year": 2018,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Bail, C. A., Argyle, L. P., Brown, T. W., Bumpus, J. P., Chen, H., et al. Exposure to opposing views on social media can increase political polarization. *Proceedings of the National Academy of Sciences*, 2018, 115(37): 9216-9221.",
      "doi": "10.1073/pnas.1804840115",
      "arxivId": null,
      "streamKeys": [
        "platforms",
        "conclusion"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 3,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "也显示，转发机制会放大政治新闻，但并未检测到显著的信念或意见变化。这组结果共同否定了一种过度简化的叙事：即“只要减少同质暴露、增加跨群接触，就能自动改善政治结果”。 值得注意的是，Bail 等（2018）在 *PNAS* 上报告的早期实地实验已经对这一叙事提出了更尖锐的挑战：研究者让美国 Twitter 用户关注发布对立阵营观点的机器人账号，结果发现共和党人的态度反而变得更为保守，民主党人虽变化不显著，但方向上未表现出去极化。换言之，单纯增加跨阵营暴露不仅未能缓和极化，在某些群体"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "。 表 1 总结了这一文献线对重构论文的直接含义。 | 研究 | 主要对象 | 结论类型 | 对重构论文的直接启示 | | --- | --- | --- | --- | | Bail et al. (2018) | 跨阵营暴露对极化的影响 | 实地实验 | 增加异质暴露可能适得其反，不能作为默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et"
        },
        {
          "sectionId": "section_8",
          "sectionTitle": "结论",
          "streamKey": "conclusion",
          "snippet": "\"相关内容能否被准确找出\"转向\"平台如何持续分配可见性，以及这种分配是否会形成结构性外部性\"（Diaz, 2024）。回音室与过滤气泡研究推动了对象澄清，平台实验提高了因果标准——Bail（2018）与 Levy（2021）的实验更进一步表明，暴露改变与态度改变之间存在非单调衰减——高阶网络工具提供了局部结构语言，曝光公平与多侧推荐把可见性写成资源分配问题，离策略评估与公开数据基础设施则为更严格的评估奠定了条件。 在这样的文献背景下，围绕推荐曝光结构风险的论文只有在三个条件"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 404: Not Found",
      "externalUrl": "https://www.ncbi.nlm.nih.gov/pmc/articles/6140520",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "benson2018",
      "index": 70,
      "title": "Simplicial closure and higher-order link prediction",
      "authors": [
        "Austin R. Benson",
        "Rediet Abebe",
        "Michael T. Schaub",
        "Ali Jadbabaie",
        "Jon Kleinberg"
      ],
      "year": 2018,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Benson, A. R., Gleich, D. F., Leskovec, J. Simplicial closure and higher-order link prediction. *Proceedings of the National Academy of Sciences*, 2018, 115(48): E11221-E11230.",
      "doi": "10.1073/pnas.1800683115",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/1802.06916",
      "localPdf": "./references/pdfs/2018_benson2018_simplicial-closure-and-higher-order-link-prediction.pdf",
      "pdfFilename": "2018_benson2018_simplicial-closure-and-higher-order-link-prediction.pdf",
      "isCurated": false
    },
    {
      "id": "bruns2019",
      "index": 66,
      "title": "Filter bubble",
      "authors": [
        "Axel Bruns"
      ],
      "year": 2019,
      "venue": "Internet Policy Review",
      "citation": "Bruns, A. Filter bubble. *Internet Policy Review*, 2019, 8(4).",
      "doi": "10.14763/2019.4.1426",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_2",
          "sectionTitle": "2.5 推荐系统领域内的过滤气泡研究",
          "streamKey": "constructs",
          "snippet": "与传播学和平台研究平行，推荐系统社区内部也出现了更直接讨论过滤气泡和偏差机制的工作。Bruns（2019）在 *Internet Policy Review* 中对\"过滤气泡\"概念本身提出了系统批评，指出该术语在学术使用中经常被过于宽泛地套用，掩盖了平台架构、用户能动性与信息生态之间的复杂关系；这一概念澄清对后续研究如何界定结构风险的边界具有警示意义。Areeb 等（2023）对过滤"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.14763/2019.4.1426",
      "localPdf": "./references/pdfs/2019_bruns2019_filter-bubble.pdf",
      "pdfFilename": "2019_bruns2019_filter-bubble.pdf",
      "isCurated": false
    },
    {
      "id": "battiston2020",
      "index": 20,
      "title": "Networks beyond pairwise interactions: Structure and dynamics",
      "authors": [
        "Federico Battiston",
        "Giulia Cencetti",
        "Iacopo Iacopini",
        "Vito Latora",
        "Maxime Lucas",
        "Alice Patania",
        "Jean-Gabriel Young",
        "Giovanni Petri"
      ],
      "year": 2020,
      "venue": "Physics Reports",
      "citation": "Battiston, F., Cencetti, G., Iacopini, I., Latora, V., Lucas, M., et al. Networks beyond pairwise interactions: Structure and dynamics. *Physics Reports*, 2020, 874: 1-92.",
      "doi": "10.1016/j.physrep.2020.05.004",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.1 为什么成对平均量不够",
          "streamKey": "topology",
          "snippet": "的双向失衡是否叠加跨群隔离，少数节点是否在若干三元结构中反复被放大，这些都超出了成对平均量能够表达的范围。要处理这些现象，仅用普通图上的节点度、边权不平衡或同质性系数往往不够。 Battiston 等（2020）对高阶网络的综述，以及 Bick 等（2023）关于“什么是高阶网络”的系统讨论，为这一判断提供了方法论基础。它们共同指出，当交互的基本单元不再是成对关系时，网络表示本身需要升级，否则许多现象要么被压缩，要么被误判。Torres 等（2021）进一步强调，复杂系统的表示选择并非中"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1016/j.physrep.2020.05.004",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "lim2020",
      "index": 27,
      "title": "Hodge Laplacians on Graphs",
      "authors": [
        "Lek‐Heng Lim"
      ],
      "year": 2020,
      "venue": "SIAM Review",
      "citation": "Lim, L.-H. Hodge Laplacians on graphs. *SIAM Review*, 2020, 62(3): 685-715.",
      "doi": "10.1137/18m1223101",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "高阶单元是否包含成对分析不可恢复的信息\"这一问题提供了最直接的肯定性证据。对推荐曝光研究而言，这意味着三元组层面的曝光结构不仅是统计便利的聚合单位，而且可能承载真实的预测价值。 Lim（2020）和 Schaub 等（2020）把 Hodge 拉普拉斯和单纯复形上的随机游走系统化，使高阶结构分析从抽象拓扑转向可计算信号处理。Neuhäuser、Mellor 与 Lambiotte（2020）从动力学角度指出，多体交互（multibody interactions）会产生与"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1137/18m1223101",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "schaub2020",
      "index": 28,
      "title": "Random Walks on Simplicial Complexes and the Normalized Hodge 1-Laplacian",
      "authors": [
        "Michael T. Schaub",
        "Austin R. Benson",
        "Paul Horn",
        "Gabor Lippner",
        "Ali Jadbabaie"
      ],
      "year": 2020,
      "venue": "SIAM Review",
      "citation": "Schaub, M. T., Benson, A. R., Horn, P., Lippner, G., Jadbabaie, A. Random walks on simplicial complexes and the normalized Hodge 1-Laplacian. *SIAM Review*, 2020, 62(2): 353-391.",
      "doi": "10.1137/18m1201019",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "析不可恢复的信息\"这一问题提供了最直接的肯定性证据。对推荐曝光研究而言，这意味着三元组层面的曝光结构不仅是统计便利的聚合单位，而且可能承载真实的预测价值。 Lim（2020）和 Schaub 等（2020）把 Hodge 拉普拉斯和单纯复形上的随机游走系统化，使高阶结构分析从抽象拓扑转向可计算信号处理。Neuhäuser、Mellor 与 Lambiotte（2020）从动力学角度指出，多体交互（multibody interactions）会产生与成对交互截然不同的共识/分裂动态"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/1807.05044",
      "localPdf": "./references/pdfs/2020_schaub2020_random-walks-on-simplicial-complexes-and-the-normalized.pdf",
      "pdfFilename": "2020_schaub2020_random-walks-on-simplicial-complexes-and-the-normalized.pdf",
      "isCurated": false
    },
    {
      "id": "diaz2020",
      "index": 39,
      "title": "Evaluating Stochastic Rankings with Expected Exposure",
      "authors": [
        "Fernando Díaz",
        "Bhaskar Mitra",
        "Michael D. Ekstrand",
        "Asia J. Biega",
        "Ben Carterette"
      ],
      "year": 2020,
      "venue": "arXiv (Cornell University)",
      "citation": "Diaz, F., Mitra, B., Ekstrand, M. D., Biega, A. J., Carterette, B. Evaluating stochastic rankings with expected exposure. In: *Proceedings of the ACM International Conference on Information and Knowledge Management (CIKM)*, 2020: 275-284.",
      "doi": "10.1145/3340531.3411962",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 3,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.1 曝光作为可分配资源",
          "streamKey": "fairness",
          "snippet": "的注意力权重，那么不同项目获得的曝光份额就可以被视为资源分配。Biega、Gummadi 与 Weikum（2018）进一步提出\"注意力公平摊销\"，把注意力分配与个体公平联系起来。Diaz 等（2020）则将\"期望曝光\"方法引入随机排名评价，为推荐与检索场景下的曝光公平计算提供了更稳的技术基础。 这一研究脉络的意义在于，它使“谁被看见”成为一个可评价、可优化、可受约束的问题。对以推荐曝光为对象的论文而言，这是一个决定性转向：一旦曝光被视为资源，就不再能用“推荐只是给用户找相关内"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.3 重要论文细读（七）：Diaz et al. (2020)",
          "streamKey": "fairness",
          "snippet": "Diaz 等（2020）的期望曝光方法之所以是核心文献，不只是因为它提出了一个排名评价指标，而是因为它改变了研究者对排序策略的理解。传统离线评估通常只看点击、NDCG 或精确率，而 Diaz 等表明，如果系统输出的是一个分布而非单一固定排序，那么曝光本身可以被建模、比较和优化。 这一点对本文拟研究的问"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "见\"本身的公平含义 | | Patro et al. (2020) | 双边平台的双侧公平 | FairRec：同时保障消费者与生产者 | 为多利益相关者曝光治理提供参照 | | Diaz et al. (2020) | 随机排名中的期望曝光 | 用分布化方式评价曝光 | 为请求-展示列表层级重排提供基础 | | Wu et al. (2022) | 联合多侧曝光公平 | 同时建模消费者与生产者侧 | 直接连接系统性曝光偏差与社会伤害 | | Mansoury & Mobasher (202"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2004.13157",
      "localPdf": "./references/pdfs/2020_diaz2020_evaluating-stochastic-rankings-with-expected-exposure.pdf",
      "pdfFilename": "2020_diaz2020_evaluating-stochastic-rankings-with-expected-exposure.pdf",
      "isCurated": false
    },
    {
      "id": "abdollahpouri2020",
      "index": 41,
      "title": "The Connection Between Popularity Bias, Calibration, and Fairness in Recommendation",
      "authors": [
        "Himan Abdollahpouri",
        "Masoud Mansoury",
        "Robin Burke",
        "Bamshad Mobasher"
      ],
      "year": 2020,
      "venue": "arXiv (Cornell University)",
      "citation": "Abdollahpouri, H., Mansoury, M., Burke, R., Mobasher, B. The connection between popularity bias, calibration, and fairness in recommendation. In: *Proceedings of the ACM Conference on Recommender Systems (RecSys)*, 2020: 726-731.",
      "doi": "10.1145/3383313.3418487",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2008.09273",
      "localPdf": "./references/pdfs/2020_abdollahpouri2020_the-connection-between-popularity-bias-calibration-and-f.pdf",
      "pdfFilename": "2020_abdollahpouri2020_the-connection-between-popularity-bias-calibration-and-f.pdf",
      "isCurated": false
    },
    {
      "id": "wu2020",
      "index": 54,
      "title": "MIND: A Large-scale Dataset for News Recommendation",
      "authors": [
        "Fangzhao Wu",
        "Ying Qiao",
        "Jiun-Hung Chen",
        "Chuhan Wu",
        "Tao Qi",
        "Jianxun Lian",
        "Danyang Liu",
        "Xing Xie",
        "Jianfeng Gao",
        "Winnie Wu",
        "Ming Zhou"
      ],
      "year": 2020,
      "venue": "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics",
      "citation": "Wu, F., Qiao, Y., Chen, J.-H., Wu, C., Qi, T., Lian, J., Liu, D., Xie, X., Gao, J., Wu, W., Zhou, M. MIND: A large-scale dataset for news recommendation. In: *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (ACL)*, 2020: 3597-3606. doi:10.18653/v1/2020.acl-main.331.",
      "doi": "10.18653/v1/2020.acl-main.331",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.18653/v1/2020.acl-main.331",
      "localPdf": "./references/pdfs/2020_wu2020_mind-a-large-scale-dataset-for-news-recommendation.pdf",
      "pdfFilename": "2020_wu2020_mind-a-large-scale-dataset-for-news-recommendation.pdf",
      "isCurated": false
    },
    {
      "id": "aridor2020",
      "index": 59,
      "title": "Deconstructing the Filter Bubble: User Decision-Making and Recommender Systems",
      "authors": [
        "Guy Aridor",
        "Duarte Gonçalves",
        "Shan Sikdar"
      ],
      "year": 2020,
      "venue": "Fourteenth ACM Conference on Recommender Systems",
      "citation": "Aridor, G., Gonçalves, D., Sikdar, S. Deconstructing the filter bubble: User decision-making and recommender systems. In: *Proceedings of the ACM Conference on Recommender Systems (RecSys)*, 2020: 82-91.",
      "doi": "10.1145/3383313.3412246",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3383313.3412246",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "perez2020",
      "index": 61,
      "title": "ContentWise Impressions: An Industrial Dataset with Impressions Included",
      "authors": [
        "Felipe B. Pérez Maurera",
        "Maurizio Ferrari Dacrema",
        "Lorenzo Saule",
        "Mario Scriminaci",
        "Paolo Cremonesi"
      ],
      "year": 2020,
      "venue": "Proceedings of the 29th ACM International Conference on Information and Knowledge Management",
      "citation": "Pérez Maurera, F. B., Ferrari Dacrema, M., Saule, L., Scriminaci, M., Cremonesi, P. ContentWise Impressions: An industrial dataset with impressions included. In: *Proceedings of the 29th ACM International Conference on Information and Knowledge Management (CIKM)*, 2020: 3093-3100. doi:10.1145/3340531.3412774.",
      "doi": "10.1145/3340531.3412774",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://re.public.polimi.it/handle/11311/1164456",
      "localPdf": "./references/pdfs/2020_perez2020_contentwise-impressions-an-industrial-dataset-with-impre.pdf",
      "pdfFilename": "2020_perez2020_contentwise-impressions-an-industrial-dataset-with-impre.pdf",
      "isCurated": false
    },
    {
      "id": "neuhauser2020",
      "index": 71,
      "title": "Multibody interactions and nonlinear consensus dynamics on networked systems",
      "authors": [
        "Leonie Neuhäuser",
        "Andrew Mellor",
        "Renaud Lambiotte"
      ],
      "year": 2020,
      "venue": "Physical review. E",
      "citation": "Neuhäuser, L., Mellor, A., Lambiotte, R. Multibody interactions and nonlinear consensus dynamics on networked systems. *Physical Review E*, 2020, 101(3): 032310.",
      "doi": "10.1103/physreve.101.032310",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/1910.09226",
      "localPdf": "./references/pdfs/2020_neuhauser2020_multibody-interactions-and-nonlinear-consensus-dynamics.pdf",
      "pdfFilename": "2020_neuhauser2020_multibody-interactions-and-nonlinear-consensus-dynamics.pdf",
      "isCurated": false
    },
    {
      "id": "patro2020",
      "index": 73,
      "title": "FairRec: Two-Sided Fairness for Personalized Recommendations in Two-Sided Platforms",
      "authors": [
        "Gourab K Patro",
        "Arpita Biswas",
        "Niloy Ganguly",
        "Krishna P. Gummadi",
        "Abhijnan Chakraborty"
      ],
      "year": 2020,
      "venue": "Proceedings of The Web Conference 2020",
      "citation": "Patro, G. K., Biswas, A., Ganguly, N., Gummadi, K. P., Chakraborty, A. FairRec: Two-sided fairness for personalized recommendations in two-sided platforms. In: *Proceedings of the Web Conference (WWW)*, 2020: 1194-1204.",
      "doi": "10.1145/3366423.3380196",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.2 多侧推荐与系统性暴露不平等",
          "streamKey": "fairness",
          "snippet": "从单侧扩展到多侧和多利益相关者环境。Abdollahpouri、Burke 与 Mobasher 较早提出推荐系统应被视为多利益相关者环境，后续又将流行度偏差与校准、公平联系起来。Patro 等（2020）提出的 FairRec 算法明确在双边平台中同时建模消费者公平与生产者公平，通过贪心加扰动策略在保证用户效用最低损失的条件下，为每个生产者保障最低曝光份额——这是首批系统处理双侧公平约束的推荐算法之一。Wu 等（2022）在此基础上，把期望曝光扩展到同时从消费者与生产者视角建模的"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "模为注意力分配 | 为可见性分配提供正式语言 | | Biega et al. (2018) | 注意力公平 | 将注意力视为可摊销资源 | 强化\"被看见\"本身的公平含义 | | Patro et al. (2020) | 双边平台的双侧公平 | FairRec：同时保障消费者与生产者 | 为多利益相关者曝光治理提供参照 | | Diaz et al. (2020) | 随机排名中的期望曝光 | 用分布化方式评价曝光 | 为请求-展示列表层级重排提供基础 | | Wu et al. (2022"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3366423.3380196",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "raji2020",
      "index": 76,
      "title": "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing",
      "authors": [
        "Inioluwa Deborah Raji",
        "Andrew Smart",
        "Rebecca N. White",
        "Margaret Mitchell",
        "Timnit Gebru"
      ],
      "year": 2020,
      "venue": "FAccT",
      "citation": "Raji, I. D., Smart, A., White, R. N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D., Barnes, P. Closing the AI accountability gap: Defining an end-to-end framework for internal algorithmic auditing. In: *Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 2020: 33-44.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "gaps",
        "conclusion"
      ],
      "streamLabel": "综合评述与研究空白",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_7",
          "sectionTitle": "综合评述与研究空白",
          "streamKey": "gaps",
          "snippet": "都可以被实证研究。断裂则在于：研究对象长期混杂，结构与结果经常被越级连接，用户聚合层级代理与请求-展示列表层级动作经常被混用，而许多\"治理\"论文仍在用自己的内部分数证明自己的成功。Raji 等（2020）在 FAccT 上提出的端到端内部算法审计框架指出了一个关键问题：有效的算法审计需要在体制层面嵌入预部署评估、持续监控和外部问责机制，而不能停留于研究者自行设定标准、自行评估的封闭循环。 围绕“推荐曝光结构外部性”这一主题，当前文献至少留下六个尚未完成的空白。"
        },
        {
          "sectionId": "section_8",
          "sectionTitle": "结论",
          "streamKey": "conclusion",
          "snippet": "才可能成立。其一，它必须把研究对象明确写成曝光分配的结构问题，而不是把回音室当作模糊总称。其二，它必须承认结构风险只是中层审计对象，而不是福利、极化或民主后果的直接代名词——正如 Raji 等（2020）所强调的，有效的算法审计需要在诊断、干预和问责之间建立可追溯的制度链条。其三，它必须在方法与评估上朝请求-展示列表层级动作空间、独立不利结果与分层证据设计靠拢。 如果说旧阶段的研究任务是证明“推荐系统可能塑造信息环境”，那么当前阶段的研究任务已经变成：在明确对象、明确边界和明确"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "cinelli2021",
      "index": 8,
      "title": "The echo chamber effect on social media",
      "authors": [
        "Matteo Cinelli",
        "Gianmarco De Francisci Morales",
        "Alessandro Galeazzi",
        "Walter Quattrociocchi",
        "Michele Starnini"
      ],
      "year": 2021,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Cinelli, M., De Francisci Morales, G., Galeazzi, A., Quattrociocchi, W., Starnini, M. The echo chamber effect on social media. *Proceedings of the National Academy of Sciences*, 2021, 118(9): e2023301118.",
      "doi": "10.1073/pnas.2023301118",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1073/pnas.2023301118",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "terren2021",
      "index": 9,
      "title": "Echo Chambers on Social Media: A Systematic Review of the Literature",
      "authors": [
        "Ludovic Terren",
        "Rosa Borge"
      ],
      "year": 2021,
      "venue": "Review of Communication Research",
      "citation": "Terren, L., Borge-Bravo, R. Echo chambers on social media: A systematic review. *Review of Communication Research*, 2021, 9: 99-118.",
      "doi": "10.12840/issn.2255-4165.028",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.12840/issn.2255-4165.028",
      "localPdf": "./references/pdfs/2021_terren2021_echo-chambers-on-social-media-a-systematic-review-of-the.pdf",
      "pdfFilename": "2021_terren2021_echo-chambers-on-social-media-a-systematic-review-of-the.pdf",
      "isCurated": false
    },
    {
      "id": "tokita2021",
      "index": 15,
      "title": "Polarized information ecosystems can reorganize social networks via information cascades",
      "authors": [
        "Christopher K. Tokita",
        "Andrew M. Guess",
        "Corina E. Tarnita"
      ],
      "year": 2021,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Tokita, C. K., Guess, A. M., Tarnita, C. E. Polarized information ecosystems can reorganize social networks via opinion amplification. *Proceedings of the National Academy of Sciences*, 2021, 118(50): e2102147118.",
      "doi": "10.1073/pnas.2102147118",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1073/pnas.2102147118",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "torres2021",
      "index": 21,
      "title": "The Why, How, and When of Representations for Complex Systems",
      "authors": [
        "Leo Torres",
        "Ann S. Blevins",
        "Danielle S. Bassett",
        "Tina Eliassi‐Rad"
      ],
      "year": 2021,
      "venue": "SIAM Review",
      "citation": "Torres, L., Blevins, A. S., Bassett, D. S., Eliassi-Rad, T. The why, how, and when of representations for complex systems. *SIAM Review*, 2021, 63(3): 435-485.",
      "doi": "10.1137/20m1355896",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.1 为什么成对平均量不够",
          "streamKey": "topology",
          "snippet": "（2023）关于“什么是高阶网络”的系统讨论，为这一判断提供了方法论基础。它们共同指出，当交互的基本单元不再是成对关系时，网络表示本身需要升级，否则许多现象要么被压缩，要么被误判。Torres 等（2021）进一步强调，复杂系统的表示选择并非中性的技术问题，而会决定研究者最终能看到什么。"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 403: Forbidden",
      "externalUrl": "https://doi.org/10.1137/20m1355896",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "santos2021",
      "index": 34,
      "title": "Link recommendation algorithms and dynamics of polarization in online social networks",
      "authors": [
        "Fernando P. Santos",
        "Yphtach Lelkes",
        "Simon A. Levin"
      ],
      "year": 2021,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Santos, F. P., Lelkes, Y., Levin, S. A. Link recommendation algorithms and dynamics of polarization in online social networks. *Proceedings of the National Academy of Sciences*, 2021, 118(50): e2102141118.",
      "doi": "10.1073/pnas.2102141118",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://www.ncbi.nlm.nih.gov/pmc/articles/8685674",
      "localPdf": "./references/pdfs/2021_santos2021_link-recommendation-algorithms-and-dynamics-of-polarizat.pdf",
      "pdfFilename": "2021_santos2021_link-recommendation-algorithms-and-dynamics-of-polarizat.pdf",
      "isCurated": false
    },
    {
      "id": "saito2021",
      "index": 52,
      "title": "Open Bandit Dataset and Pipeline: Towards Realistic and Reproducible Off-Policy Evaluation",
      "authors": [
        "Yuta Saito",
        "Shunsuke Aihara",
        "Megumi Matsutani",
        "Yusuke Narita"
      ],
      "year": 2021,
      "venue": "NeurIPS Datasets and Benchmarks",
      "citation": "Saito, Y., Aihara, S., Matsutani, M., Narita, Y. Open Bandit Dataset and Pipeline: Towards realistic and reproducible off-policy evaluation. In: *NeurIPS 2021 Datasets and Benchmarks Track*, 2021.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "eide2021",
      "index": 55,
      "title": "FINN.no Slates Dataset: A new Sequential Dataset Logging Interactions, all Viewed Items and Click Responses/No-Click for Recommender Systems Research",
      "authors": [
        "Simen Eide",
        "David S. Leslie",
        "Arnoldo Frigessi",
        "Joakim Rishaug",
        "Helge Kristian Jenssen",
        "Sofie Verrewaere"
      ],
      "year": 2021,
      "venue": "arXiv (Cornell University)",
      "citation": "Eide, S., Frigessi, A., Jenssen, H., Leslie, D. S., Rishaug, J., Verrewaere, S. FINN.no Slates Dataset: A new sequential dataset logging interactions, all-viewed items and click responses/no-click for recommender systems research. arXiv:2111.03340, 2021.",
      "doi": "10.1145/3460231.3474607",
      "arxivId": "2111.03340",
      "streamKeys": [
        "evaluation"
      ],
      "streamLabel": "离策略评估与数据基础设施",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_6",
          "sectionTitle": "6.3 重要论文细读（九）：FINN.no Slates Dataset",
          "streamKey": "evaluation",
          "snippet": "Eide 等（2021）的 FINN.no Slates 论文值得特别强调，因为它几乎用最直接的方式指出了现有推荐研究的一个结构性缺陷：多数公开数据集只保留点击，而不保留“用户实际看到了什么”。在没有真实展示记录的情况下，研究者很容易把未点击项当成“不感兴趣”，但实际上它可能只是从未被展示。 对任何想"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2111.03340",
      "localPdf": "./references/pdfs/2021_eide2021_finn-no-slates-dataset-a-new-sequential-dataset-logging.pdf",
      "pdfFilename": "2021_eide2021_finn-no-slates-dataset-a-new-sequential-dataset-logging.pdf",
      "isCurated": true
    },
    {
      "id": "levy2021",
      "index": 69,
      "title": "Social Media, News Consumption, and Polarization: Evidence from a Field Experiment",
      "authors": [
        "Roee Levy"
      ],
      "year": 2021,
      "venue": "American Economic Review",
      "citation": "Levy, R. Social media, news consumption, and polarization: Evidence from a field experiment. *American Economic Review*, 2021, 111(3): 831-870.",
      "doi": "10.1257/aer.20191777",
      "arxivId": null,
      "streamKeys": [
        "platforms",
        "conclusion"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 3,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "化不显著，但方向上未表现出去极化。换言之，单纯增加跨阵营暴露不仅未能缓和极化，在某些群体中甚至起到了反效果。这一发现对所有以\"增加异质暴露\"为默认目标的推荐干预方案构成根本性约束。Levy（2021）在 *American Economic Review* 上报告的另一项大规模实地实验则提供了更细致的图景：他通过激励美国 Facebook 用户订阅对立阵营新闻源，发现这种干预确实增加了对跨阵营新闻的消费和知识获取，但对态度极化的影响很小且不对称。Bail 与 Levy 的研究"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴露→知识获取路径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube 推荐效应 | 反事实因果识别 | 推荐曝光是独立可识别对象 | | Piccardi et al. (20"
        },
        {
          "sectionId": "section_8",
          "sectionTitle": "结论",
          "streamKey": "conclusion",
          "snippet": "\"转向\"平台如何持续分配可见性，以及这种分配是否会形成结构性外部性\"（Diaz, 2024）。回音室与过滤气泡研究推动了对象澄清，平台实验提高了因果标准——Bail（2018）与 Levy（2021）的实验更进一步表明，暴露改变与态度改变之间存在非单调衰减——高阶网络工具提供了局部结构语言，曝光公平与多侧推荐把可见性写成资源分配问题，离策略评估与公开数据基础设施则为更严格的评估奠定了条件。 在这样的文献背景下，围绕推荐曝光结构风险的论文只有在三个条件下才可能成立。其一，它必"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1257/aer.20191777",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "lorenz-spreen2023",
      "index": 10,
      "title": "A systematic review of worldwide causal and correlational evidence on digital media and democracy",
      "authors": [
        "Philipp Lorenz-Spreen",
        "Lisa Oswald",
        "Stephan Lewandowsky",
        "Ralph Hertwig"
      ],
      "year": 2022,
      "venue": "Nature Human Behaviour",
      "citation": "Lorenz-Spreen, P., et al. A systematic review of worldwide causal and correlational evidence on digital media and democracy. *Nature Human Behaviour*, 2023, 7: 74-101.",
      "doi": "10.1038/s41562-022-01460-1",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.1 从观察相关性到平台实验",
          "streamKey": "platforms",
          "snippet": "年的重要变化在于，社交媒体研究不再只能依赖观察性推断，而是逐渐出现了大规模随机实验、反事实机器人和平台外部干预工具。这些研究极大提高了因果识别标准，也同时提高了方法论文的门槛。 Lorenz-Spreen 等（2023）对全球数字媒体与民主研究进行了系统综述，强调因果证据与相关性证据不能被混写为同一强度。对推荐结构研究而言，这一点尤其重要。一个结构指标即使在观察数据中与极化、敌意或错误信息传播相关，也不意味着改变该指标就会导致这些结果随之变化。真实平台实验的价值正在于，它们提供了这种“改变之后会"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1038/s41562-022-01460-1",
      "localPdf": "./references/pdfs/2022_lorenz-spreen2023_a-systematic-review-of-worldwide-causal-and-correlationa.pdf",
      "pdfFilename": "2022_lorenz-spreen2023_a-systematic-review-of-worldwide-causal-and-correlationa.pdf",
      "isCurated": false
    },
    {
      "id": "wu2022",
      "index": 42,
      "title": "Joint Multisided Exposure Fairness for Recommendation",
      "authors": [
        "Haolun Wu",
        "Bhaskar Mitra",
        "Chen Ma",
        "Fernando Díaz",
        "Xue Liu"
      ],
      "year": 2022,
      "venue": "Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval",
      "citation": "Wu, H., Mitra, B., Ma, C., Diaz, F., Liu, X. Joint multisided exposure fairness for recommendation. In: *Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)*, 2022: 703-714. doi:10.1145/3477495.3532007.",
      "doi": "10.1145/3477495.3532007",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 3,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.2 多侧推荐与系统性暴露不平等",
          "streamKey": "fairness",
          "snippet": "算法明确在双边平台中同时建模消费者公平与生产者公平，通过贪心加扰动策略在保证用户效用最低损失的条件下，为每个生产者保障最低曝光份额——这是首批系统处理双侧公平约束的推荐算法之一。Wu 等（2022）在此基础上，把期望曝光扩展到同时从消费者与生产者视角建模的联合曝光公平框架，并明确指出系统性曝光不平等会造成分配性伤害与表征性伤害。 这类工作与早期“多样性推荐”之间有本质区别。多样性目标往往仍以用户体验为中心，而多侧曝光公平则承认平台同时面对用户、内容生产者、提供者以及平台自"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.4 重要论文细读（八）：Wu et al. (2022)",
          "streamKey": "fairness",
          "snippet": "Wu 等（2022）的联合多侧曝光公平框架，为推荐研究提供了最直接的系统性暴露偏差视角。论文不再只问“单个项目是否被不公平对待”，而是问“不同用户群体与不同生产者群体之间是否存在系统性的过曝或欠曝”。这一点非常契合结构外部性研究的目标，因为结构风险本质上也是在讨论系统是否在某些局部位置持续地分配了不"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "| 为多利益相关者曝光治理提供参照 | | Diaz et al. (2020) | 随机排名中的期望曝光 | 用分布化方式评价曝光 | 为请求-展示列表层级重排提供基础 | | Wu et al. (2022) | 联合多侧曝光公平 | 同时建模消费者与生产者侧 | 直接连接系统性曝光偏差与社会伤害 | | Mansoury & Mobasher (2023) | 动态曝光公平 | 指出静态方法在长期反馈中失效 | 强化长期结构偏差视角 | | Yoo et al. (2024) |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3477495.3532007",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "gao2022",
      "index": 56,
      "title": "KuaiRand: An Unbiased Sequential Recommendation Dataset with Randomly Exposed Videos",
      "authors": [
        "Chongming Gao",
        "Shijun Li",
        "Yuan Zhang",
        "Jiawei Chen",
        "Biao Li",
        "Wenqiang Lei",
        "Peng Jiang",
        "Xiangnan He"
      ],
      "year": 2022,
      "venue": "Proceedings of the 31st ACM International Conference on Information &amp; Knowledge Management",
      "citation": "Gao, C., Li, X., Wang, S., et al. KuaiRand: An unbiased sequential recommendation dataset with randomly exposed videos. In: *Proceedings of the ACM International Conference on Information and Knowledge Management (CIKM)*, 2022.",
      "doi": "10.1145/3511808.3557624",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2208.08696",
      "localPdf": "./references/pdfs/2022_gao2022_kuairand-an-unbiased-sequential-recommendation-dataset-w.pdf",
      "pdfFilename": "2022_gao2022_kuairand-an-unbiased-sequential-recommendation-dataset-w.pdf",
      "isCurated": false
    },
    {
      "id": "gao2022-kuairec-a",
      "index": 57,
      "title": "KuaiRec: A Fully-observed Dataset and Insights for Evaluating Recommender Systems",
      "authors": [
        "Chongming Gao",
        "Xiting Wang",
        "Yong Li"
      ],
      "year": 2022,
      "venue": "CIKM",
      "citation": "Gao, C., Li, X., Wu, Y., et al. KuaiRec: A fully-observed dataset and insights for evaluating recommender systems. In: *Proceedings of the ACM International Conference on Information and Knowledge Management (CIKM)*, 2022.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "buchholz2022",
      "index": 63,
      "title": "Off-policy evaluation for learning-to-rank via interpolating the item-position model and the position-based model",
      "authors": [
        "Alexander Buchholz",
        "Ben London",
        "Giuseppe Di Benedetto",
        "Thorsten Joachims"
      ],
      "year": 2022,
      "venue": "CoRR",
      "citation": "Buchholz, A., London, B., Di Benedetto, G., Joachims, T. Off-policy evaluation for learning-to-rank via interpolating the item-position model and the position-based model. arXiv:2210.09512, 2022.",
      "doi": null,
      "arxivId": "2210.09512",
      "streamKeys": [
        "evaluation"
      ],
      "streamLabel": "离策略评估与数据基础设施",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_6",
          "sectionTitle": "6.1 为什么推荐研究必须面对离策略评估",
          "streamKey": "evaluation",
          "snippet": "序策略会怎样\"的反事实问题提供了技术基石。进一步地，Swaminathan 等（2017）已把离策略评估明确扩展到展示列表推荐场景，说明多项目联合动作不能简单退化为单项目点击估计。Buchholz 等（2022）则从排序评估角度进一步指出，点击模型假设与偏差-方差权衡会显著影响离线评估可信度。Open Bandit Dataset and Pipeline（Saito 等，2021）进一步把离策略评估从理论工具推进到可复现实验基础设施。Saito 与 Joachims（2022）针对大动"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://arxiv.org/abs/2210.09512",
      "localPdf": "./references/pdfs/2022_buchholz2022_off-policy-evaluation-for-learning-to-rank-via-interpola.pdf",
      "pdfFilename": "2022_buchholz2022_off-policy-evaluation-for-learning-to-rank-via-interpola.pdf",
      "isCurated": false
    },
    {
      "id": "arguedas2022",
      "index": 67,
      "title": "Echo chambers, filter bubbles, and polarisation: A literature review",
      "authors": [
        "Ana Rita Arguedas",
        "Craig T. Robertson",
        "Richard Fletcher",
        "Rasmus Kleis Nielsen"
      ],
      "year": 2022,
      "venue": "Reuters Institute, University of Oxford",
      "citation": "Arguedas, A. R., Robertson, C. T., Fletcher, R., Nielsen, R. K. Echo chambers, filter bubbles, and polarisation: A literature review. *Reuters Institute Report*, 2022.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_2",
          "sectionTitle": "2.5 推荐系统领域内的过滤气泡研究",
          "streamKey": "constructs",
          "snippet": "清对后续研究如何界定结构风险的边界具有警示意义。Areeb 等（2023）对过滤气泡型推荐研究做了系统回顾，强调该问题通常与曝光偏差、选择偏差、多样性不足和长期反馈回路纠缠在一起。Arguedas 等（2022）在路透研究所的报告中整合了回音室、过滤气泡和极化研究的多学科证据，强调在线与离线信息环境的相互作用常常被忽略，不同研究设计（调查、日志分析、实验）可能导致截然不同的结论。Aridor、Gonçalves 与 Sikdar（2020）则从用户决策模型出发，讨论即使没有推荐系统，用户"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2022-01/Echo_Chambers_Filter_Bubbles_and_Polarisation_A_Literature_Review.pdf",
      "localPdf": "./references/pdfs/2022_arguedas2022_echo-chambers-filter-bubbles-and-polarisation-a-literatu.pdf",
      "pdfFilename": "2022_arguedas2022_echo-chambers-filter-bubbles-and-polarisation-a-literatu.pdf",
      "isCurated": false
    },
    {
      "id": "saito2022",
      "index": 75,
      "title": "Off-policy evaluation for large action spaces via embeddings",
      "authors": [
        "Yuta Saito",
        "Thorsten Joachims"
      ],
      "year": 2022,
      "venue": "ICML",
      "citation": "Saito, Y., Joachims, T. Off-policy evaluation for large action spaces via embeddings. In: *Proceedings of the International Conference on Machine Learning (ICML)*, 2022.",
      "doi": null,
      "arxivId": "2202.06317",
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://arxiv.org/abs/2202.06317",
      "localPdf": "./references/pdfs/2022_saito2022_off-policy-evaluation-for-large-action-spaces-via-embedd.pdf",
      "pdfFilename": "2022_saito2022_off-policy-evaluation-for-large-action-spaces-via-embedd.pdf",
      "isCurated": false
    },
    {
      "id": "gonzalez-bailon2023",
      "index": 11,
      "title": "Asymmetric ideological segregation in exposure to political news on Facebook",
      "authors": [
        "Sandra González‐Bailón",
        "David Lazer",
        "Pablo Barberá",
        "Meiqing Zhang",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Andrew M. Guess",
        "Shanto Iyengar",
        "Young Mie Kim",
        "Neil Malhotra",
        "Devra Moehler",
        "Brendan Nyhan",
        "Jennifer Pan",
        "Carlos Velasco Rivera",
        "Jaime E. Settle",
        "Emily Thorson",
        "Rebekah Tromble",
        "Arjun Wilkins",
        "Magdalena Wojcieszak",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Science",
      "citation": "González-Bailón, S., Lazer, D., Barberá, P., Zhang, M., Allcott, H., et al. Asymmetric ideological segregation in exposure to political news on Facebook. *Science*, 2023, 381(6656): 392-398.",
      "doi": "10.1126/science.ade7138",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "暴露、意识形态隔离、转发机制以及时间序信息流替代算法信息流的影响；另一方面，它也迫使研究者接受一个并不讨喜的结果：暴露结构确实可以被显著改变，但态度和行为指标并不一定随之变化。 González-Bailón 等（2023）在 *Science* 发表的研究表明，意识形态隔离在从潜在接触到实际暴露再到互动参与的过程中会逐步增强，并且保守派受众所在的新闻生态中存在更封闭、更同质的角落。这一发现有两个重要后果。其一，暴露隔离不是均匀分布的，而是具有不对称性。其二，结构分布的变化会随着行为链条向后推进而被"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| --- | --- | --- | | Bail et al. (2018) | 跨阵营暴露对极化的影响 | 实地实验 | 增加异质暴露可能适得其反，不能作为默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.ade7138",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "guess2023",
      "index": 12,
      "title": "How do social media feed algorithms affect attitudes and behavior in an election campaign?",
      "authors": [
        "Andrew M. Guess",
        "Neil Malhotra",
        "Jennifer Pan",
        "Pablo Barberá",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Drew Dimmery",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Sandra González‐Bailón",
        "Edward H. Kennedy",
        "Young Mie Kim",
        "David Lazer",
        "Devra Moehler",
        "Brendan Nyhan",
        "Carlos Velasco Rivera",
        "Jaime E. Settle",
        "Daniel Robert Thomas",
        "Emily Thorson",
        "Rebekah Tromble",
        "Arjun Wilkins",
        "Magdalena Wojcieszak",
        "B.S. Xiong",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Science",
      "citation": "Guess, A. M., Malhotra, N., Pan, J., Barberá, P., Allcott, H., et al. How do social media feed algorithms affect attitudes and behavior in an election campaign? *Science*, 2023, 381(6656): 398-404.",
      "doi": "10.1126/science.abp9364",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "保守派受众所在的新闻生态中存在更封闭、更同质的角落。这一发现有两个重要后果。其一，暴露隔离不是均匀分布的，而是具有不对称性。其二，结构分布的变化会随着行为链条向后推进而被放大。 Guess 等（2023）研究了将 Facebook 和 Instagram 从算法排序切换到时间序信息流的效果。结果显示，排序方式的改变确实显著改变了用户接触到的政治内容结构与参与模式，但在三个月实验窗口内，并未显著改变议题极化、情感极化或其他关键政治态度。Nyhan 等（2023）则进一步检验了“降低"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.abp9364",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "nyhan2023",
      "index": 13,
      "title": "Like-minded sources on Facebook are prevalent but not polarizing",
      "authors": [
        "Brendan Nyhan",
        "Jaime E. Settle",
        "Emily Thorson",
        "Magdalena Wojcieszak",
        "Pablo Barberá",
        "Annie Y. Chen",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Drew Dimmery",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Sandra González‐Bailón",
        "Andrew M. Guess",
        "Edward H. Kennedy",
        "Young Mie Kim",
        "David Lazer",
        "Neil Malhotra",
        "Devra Moehler",
        "Jennifer Pan",
        "Daniel Robert Thomas",
        "Rebekah Tromble",
        "Carlos Velasco Rivera",
        "Arjun Wilkins",
        "B.S. Xiong",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Nature",
      "citation": "Nyhan, B., Settle, J., Thorson, E., Wojcieszak, M., Barberá, P., et al. Like-minded sources on Facebook are prevalent but not polarizing. *Nature*, 2023, 620: 137-144.",
      "doi": "10.1038/s41586-023-06297-w",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "算法排序切换到时间序信息流的效果。结果显示，排序方式的改变确实显著改变了用户接触到的政治内容结构与参与模式，但在三个月实验窗口内，并未显著改变议题极化、情感极化或其他关键政治态度。Nyhan 等（2023）则进一步检验了“降低同阵营来源暴露是否会减少极化”，发现尽管同阵营暴露在平台上非常普遍，但将其降低约三分之一并没有带来相应的态度去极化效果。 与此相呼应，关于二次转发的研究也显示，转发机制会放大政治新闻，但并未检测到显著的信念或意见变化。这组结果共同否定了一种过度简化的叙事：即"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴露→知识获取路径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1038/s41586-023-06297-w",
      "localPdf": "./references/pdfs/2023_nyhan2023_like-minded-sources-on-facebook-are-prevalent-but-not-po.pdf",
      "pdfFilename": "2023_nyhan2023_like-minded-sources-on-facebook-are-prevalent-but-not-po.pdf",
      "isCurated": true
    },
    {
      "id": "guess2023-reshares-on",
      "index": 14,
      "title": "Reshares on social media amplify political news but do not detectably affect beliefs or opinions",
      "authors": [
        "Andrew M. Guess",
        "Neil Malhotra",
        "Jennifer Pan",
        "Pablo Barberá",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Drew Dimmery",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Sandra González‐Bailón",
        "Edward H. Kennedy",
        "Young Mie Kim",
        "David Lazer",
        "Devra Moehler",
        "Brendan Nyhan",
        "Carlos Velasco Rivera",
        "Jaime E. Settle",
        "Daniel Robert Thomas",
        "Emily Thorson",
        "Rebekah Tromble",
        "Arjun Wilkins",
        "Magdalena Wojcieszak",
        "Beixian Xiong",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Science",
      "citation": "Guess, A. M., et al. Reshares on social media amplify political news but do not detectably affect beliefs or opinions. *Science*, 2023, 381(6656).",
      "doi": "10.1126/science.add8424",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "保守派受众所在的新闻生态中存在更封闭、更同质的角落。这一发现有两个重要后果。其一，暴露隔离不是均匀分布的，而是具有不对称性。其二，结构分布的变化会随着行为链条向后推进而被放大。 Guess 等（2023）研究了将 Facebook 和 Instagram 从算法排序切换到时间序信息流的效果。结果显示，排序方式的改变确实显著改变了用户接触到的政治内容结构与参与模式，但在三个月实验窗口内，并未显著改变议题极化、情感极化或其他关键政治态度。Nyhan 等（2023）则进一步检验了“降低"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.add8424",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "bick2023",
      "index": 22,
      "title": "What Are Higher-Order Networks?",
      "authors": [
        "Christian Bick",
        "Elizabeth Gross",
        "Heather A. Harrington",
        "Michael T. Schaub"
      ],
      "year": 2023,
      "venue": "SIAM Review",
      "citation": "Bick, C., Gross, E., Harrington, H. A., Schaub, M. T. What are higher-order networks? *SIAM Review*, 2023, 65(3): 686-731.",
      "doi": "10.1137/21m1414024",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.1 为什么成对平均量不够",
          "streamKey": "topology",
          "snippet": "复被放大，这些都超出了成对平均量能够表达的范围。要处理这些现象，仅用普通图上的节点度、边权不平衡或同质性系数往往不够。 Battiston 等（2020）对高阶网络的综述，以及 Bick 等（2023）关于“什么是高阶网络”的系统讨论，为这一判断提供了方法论基础。它们共同指出，当交互的基本单元不再是成对关系时，网络表示本身需要升级，否则许多现象要么被压缩，要么被误判。Torres 等（2021）进一步强调，复杂系统的表示选择并非中性的技术问题，而会决定研究者最终能看到什么。"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1137/21m1414024",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "cinus2023",
      "index": 35,
      "title": "Rebalancing Social Feed to Minimize Polarization and Disagreement",
      "authors": [
        "Federico Cinus",
        "Aristides Gionis",
        "Francesco Bonchi"
      ],
      "year": 2023,
      "venue": "arXiv (Cornell University)",
      "citation": "Cinus, F., Gionis, A., Bonchi, F. Rebalancing social feeds to minimize polarization and disagreement. In: *Proceedings of the ACM International Conference on Information and Knowledge Management (CIKM)*, 2023.",
      "doi": "10.1145/3583780.3615025",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2308.14486",
      "localPdf": "./references/pdfs/2023_cinus2023_rebalancing-social-feed-to-minimize-polarization-and-dis.pdf",
      "pdfFilename": "2023_cinus2023_rebalancing-social-feed-to-minimize-polarization-and-dis.pdf",
      "isCurated": false
    },
    {
      "id": "bhalla2023",
      "index": 36,
      "title": "Local Edge Dynamics and Opinion Polarization",
      "authors": [
        "Nikita Bhalla",
        "Adam Lechowicz",
        "Cameron Musco"
      ],
      "year": 2023,
      "venue": "Proceedings of the Sixteenth ACM International Conference on Web Search and Data Mining",
      "citation": "Bhalla, N., Lechowicz, A., Musco, C. Local edge dynamics and opinion polarization. In: *Proceedings of the ACM International Conference on Web Search and Data Mining (WSDM)*, 2023.",
      "doi": "10.1145/3539597.3570442",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3539597.3570442",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "mansoury2023",
      "index": 43,
      "title": "Fairness of Exposure in Dynamic Recommendation",
      "authors": [
        "Mostafa Mansoury",
        "Bamshad Mobasher"
      ],
      "year": 2023,
      "venue": "arXiv",
      "citation": "Mansoury, M., Mobasher, B. Fairness of exposure in dynamic recommendation. arXiv:2309.02322, 2023.",
      "doi": null,
      "arxivId": "2309.02322",
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://arxiv.org/abs/2309.02322",
      "localPdf": "./references/pdfs/2023_mansoury2023_fairness-of-exposure-in-dynamic-recommendation.pdf",
      "pdfFilename": "2023_mansoury2023_fairness-of-exposure-in-dynamic-recommendation.pdf",
      "isCurated": false
    },
    {
      "id": "jin2023",
      "index": 44,
      "title": "A Survey on Fairness-Aware Recommender Systems",
      "authors": [
        "Di Jin",
        "Luzhi Wang",
        "He Zhang",
        "Yizhen Zheng",
        "Weiping Ding",
        "Feng Xia",
        "Shirui Pan"
      ],
      "year": 2023,
      "venue": "SSRN Electronic Journal",
      "citation": "Jin, D., Wang, L., Zhang, H., Zheng, Y., Ding, W., Xia, F., Pan, S. A survey on fairness-aware recommender systems. *Information Fusion*, 2023, 100: 101906.",
      "doi": "10.2139/ssrn.4469569",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "近年来的综述文献使这一领域的结构更加清晰。Jin 等（2023）系统梳理了公平感知推荐系统，并将其纳入可信推荐系统讨论；Vassøy 与 Langseth（2024）聚焦消费者侧公平，强调“什么算公平”本身就依赖于不同的公平解释框架；Klimashevskaia、Jannach、Elahi 与 Trattner（2024）对流行度偏差进行了多"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "http://dx.doi.org/10.2139/ssrn.4469569",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "areeb2023",
      "index": 58,
      "title": "Filter bubbles in recommender systems: Fact or fallacy—A systematic review",
      "authors": [
        "Qazi Mohammad Areeb",
        "Mohammad Nadeem",
        "Shahab Saquib Sohail",
        "Raza Imam",
        "Faiyaz Doctor",
        "Yassine Himeur",
        "Amir Hussain",
        "Abbes Amira"
      ],
      "year": 2023,
      "venue": "Wiley Interdisciplinary Reviews Data Mining and Knowledge Discovery",
      "citation": "Areeb, Q. M., Nadeem, M., Sohail, S. S., Imam, R., Doctor, F., Himeur, Y., Hussain, A., Amira, A. Filter bubbles in recommender systems: Fact or fallacy — A systematic review. arXiv:2307.01221, 2023.",
      "doi": "10.1002/widm.1512",
      "arxivId": "2307.01221",
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_2",
          "sectionTitle": "2.5 推荐系统领域内的过滤气泡研究",
          "streamKey": "constructs",
          "snippet": "\"概念本身提出了系统批评，指出该术语在学术使用中经常被过于宽泛地套用，掩盖了平台架构、用户能动性与信息生态之间的复杂关系；这一概念澄清对后续研究如何界定结构风险的边界具有警示意义。Areeb 等（2023）对过滤气泡型推荐研究做了系统回顾，强调该问题通常与曝光偏差、选择偏差、多样性不足和长期反馈回路纠缠在一起。Arguedas 等（2022）在路透研究所的报告中整合了回音室、过滤气泡和极化研究的多学科证据，强调在线与离线信息环境的相互作用常常被忽略，不同研究设计（调查、日志分析、实"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1002/widm.1512",
      "localPdf": "./references/pdfs/2023_areeb2023_filter-bubbles-in-recommender-systems-fact-or-fallacya-s.pdf",
      "pdfFilename": "2023_areeb2023_filter-bubbles-in-recommender-systems-fact-or-fallacya-s.pdf",
      "isCurated": false
    },
    {
      "id": "hosseinmardi2024",
      "index": 16,
      "title": "Causally estimating the effect of YouTube’s recommender system using counterfactual bots",
      "authors": [
        "Homa Hosseinmardi",
        "Amir Ghasemian",
        "Miguel Rivera-Lanas",
        "Manoel Horta Ribeiro",
        "Robert West",
        "Duncan J. Watts"
      ],
      "year": 2024,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Hosseinmardi, H., Ghasemian, A., Clauset, A., Mobius, M., Rothschild, D. M., Watts, D. J. Causally estimating the effect of YouTube's recommender system using counterfactual bots. *Proceedings of the National Academy of Sciences*, 2024, 121(8): e2313377121.",
      "doi": "10.1073/pnas.2313377121",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.4 重要论文细读（四）：Hosseinmardi et al. (2024)",
          "streamKey": "platforms",
          "snippet": "Hosseinmardi 等（2024）在 *PNAS* 上发表的 YouTube 研究，为推荐系统因果识别提供了另一种路径。论文使用反事实机器人，将用户偏好与算法推荐效应区分开来，估计 YouTube 推荐系统对所观看视频党派性的因果作用。与直接观察真实用户的日志不同，这种设计试图通过控制偏好部分，单独识别算法推荐的"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴露→知识获取路径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube 推荐效应 | 反事实因果识别 | 推荐曝光是独立可识别对象 | | Piccardi et al. (2025) | 无平台合作的实时重排 | 平台外部实地实验 | 请求-展示列表层级干预是未来方向 | | Gauthier et al. (2026) |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1073/pnas.2313377121",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "gong2024",
      "index": 29,
      "title": "Higher-order connection Laplacians for directed simplicial complexes",
      "authors": [
        "Xue Gong",
        "Desmond J. Higham",
        "Konstantinos C. Zygalakis",
        "Ginestra Bianconi"
      ],
      "year": 2024,
      "venue": "Journal of Physics Complexity",
      "citation": "Gong, X., Higham, D. J., Zygalakis, K. C., Bianconi, G. Higher-order connection Laplacians for directed simplicial complexes. *Journal of Physics: Complexity*, 2024, 5(1): 015022.",
      "doi": "10.1088/2632-072x/ad353b",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "y interactions）会产生与成对交互截然不同的共识/分裂动态——在推荐暴露语境中，这意味着三人或以上的共同暴露事件可能驱动的态度趋同/分化模式，无法被两两交互叠加所近似。Gong 等（2024）更进一步，将高阶联络拉普拉斯推广到有向单纯复形，从而为\"有向高阶结构上的局部流、方向挫折和扩散\"提供了统一语言。Pérez-Martínez 等（2025）则把高阶交互与社会极化动力学联系起来，说明稀疏高阶交互本身会改变极化过程。"
        },
        {
          "sectionId": "section_4",
          "sectionTitle": "4.4 重要论文细读（六）：Gong et al. (2024)",
          "streamKey": "topology",
          "snippet": "Gong 等（2024）的论文是当前技术路线中最接近目标问题的一篇基础工作。它的核心贡献并不在于某个具体应用，而在于把联络拉普拉斯从有向图推进到有向单纯复形，使方向性不再局限于边，而可以进入更高阶结构单元。 这对于推荐曝光研究尤其关键。推荐系统中的局部结构往往同时具有方向性和高阶性：不仅要知道 A 是"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: response is not a PDF",
      "externalUrl": "https://doi.org/10.1088/2632-072x/ad353b",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "vassy2024",
      "index": 45,
      "title": "Consumer-side fairness in recommender systems: a systematic survey of methods and evaluation",
      "authors": [
        "Bjørnar Vassøy",
        "Helge Langseth"
      ],
      "year": 2024,
      "venue": "Artificial Intelligence Review",
      "citation": "Vassøy, B., Langseth, H. Consumer-side fairness in recommender systems: A systematic survey of methods and evaluation. *Artificial Intelligence Review*, 2024, 57: 116.",
      "doi": "10.1007/s10462-023-10663-5",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1007/s10462-023-10663-5",
      "localPdf": "./references/pdfs/2024_vassy2024_consumer-side-fairness-in-recommender-systems-a-systemat.pdf",
      "pdfFilename": "2024_vassy2024_consumer-side-fairness-in-recommender-systems-a-systemat.pdf",
      "isCurated": false
    },
    {
      "id": "klimashevskaia2024",
      "index": 46,
      "title": "A survey on popularity bias in recommender systems",
      "authors": [
        "Anastasiia Klimashevskaia",
        "Dietmar Jannach",
        "Mehdi Elahi",
        "Christoph Trattner"
      ],
      "year": 2024,
      "venue": "User Modeling and User-Adapted Interaction",
      "citation": "Klimashevskaia, A., Jannach, D., Elahi, M., Trattner, C. A survey on popularity bias in recommender systems. *User Modeling and User-Adapted Interaction*, 2024.",
      "doi": "10.1007/s11257-024-09406-0",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1007/s11257-024-09406-0",
      "localPdf": "./references/pdfs/2024_klimashevskaia2024_a-survey-on-popularity-bias-in-recommender-systems.pdf",
      "pdfFilename": "2024_klimashevskaia2024_a-survey-on-popularity-bias-in-recommender-systems.pdf",
      "isCurated": false
    },
    {
      "id": "yoo2024",
      "index": 47,
      "title": "Ensuring User-side Fairness in Dynamic Recommender Systems",
      "authors": [
        "Hyunsik Yoo",
        "Zhichen Zeng",
        "Jian Kang",
        "Ruizhong Qiu",
        "David Zhou",
        "Zhining Liu",
        "Fei Wang",
        "Caizhi Xu",
        "Eunice Chan",
        "Hanghang Tong"
      ],
      "year": 2024,
      "venue": "Proceedings of the ACM Web Conference 2024",
      "citation": "Yoo, H., Zeng, Z., Kang, J., Qiu, R., Zhou, D., Liu, Z., Wang, F., Xu, C., Chan, E., Tong, H. Ensuring user-side fairness in dynamic recommender systems. In: *Proceedings of the ACM Web Conference (WWW)*, 2024. doi:10.1145/3589334.3645536.",
      "doi": "10.1145/3589334.3645536",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.5 动态公平与长期反馈回路",
          "streamKey": "fairness",
          "snippet": "反馈问题。Mansoury 与 Mobasher（2023）明确指出，许多只在单轮推荐上缓解曝光不平等的方法，放到动态环境中会失效，因为推荐结果会反过来改变未来训练数据与偏差结构。Yoo 等（2024）进一步把用户侧公平引入动态推荐，说明群体间的性能差异在持续微调过程中可能逐步扩大。Chen 等（2024）在多侧推荐情境下提出 FAIR 与 FORM 框架，强调平台、用户和项目之间的公平权衡需要在在线学习过程中同时处理。Shafiloo 等（2026）则把消费者公平、提供者公平"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "接连接系统性曝光偏差与社会伤害 | | Mansoury & Mobasher (2023) | 动态曝光公平 | 指出静态方法在长期反馈中失效 | 强化长期结构偏差视角 | | Yoo et al. (2024) | 动态用户侧公平 | 讨论公平差异随时间扩大 | 提醒评价不能停留在单时点 | | Chen et al. (2024) | 多侧在线公平 | 在不确定反馈下平衡多方利益 | 显示公平与在线学习必须联动 | | Shafiloo et al. (2026) | 消费者/提供者"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3589334.3645536",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "chen2024",
      "index": 48,
      "title": "Interpolating Item and User Fairness in Multi-Sided Recommendations",
      "authors": [
        "Djallel Bouneffouf",
        "Qinyi Chen",
        "Negin Golrezaei",
        "Jason Cheuk Nam Liang"
      ],
      "year": 2024,
      "venue": "Advances in Neural Information Processing Systems 37",
      "citation": "Chen, Q., Liang, J. C. N., Golrezaei, N., Bouneffouf, D. Interpolating item and user fairness in multi-sided recommendations. In: *Advances in Neural Information Processing Systems (NeurIPS)*, 2024.",
      "doi": "10.52202/079017-1589",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.5 动态公平与长期反馈回路",
          "streamKey": "fairness",
          "snippet": "方法，放到动态环境中会失效，因为推荐结果会反过来改变未来训练数据与偏差结构。Yoo 等（2024）进一步把用户侧公平引入动态推荐，说明群体间的性能差异在持续微调过程中可能逐步扩大。Chen 等（2024）在多侧推荐情境下提出 FAIR 与 FORM 框架，强调平台、用户和项目之间的公平权衡需要在在线学习过程中同时处理。Shafiloo 等（2026）则把消费者公平、提供者公平和项目层公平明确拆分，强调提供者与项目不是一个可以随便合并的概念。 这些文献共同强化了一个判断：如果论文"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "态方法在长期反馈中失效 | 强化长期结构偏差视角 | | Yoo et al. (2024) | 动态用户侧公平 | 讨论公平差异随时间扩大 | 提醒评价不能停留在单时点 | | Chen et al. (2024) | 多侧在线公平 | 在不确定反馈下平衡多方利益 | 显示公平与在线学习必须联动 | | Shafiloo et al. (2026) | 消费者/提供者/项目三侧公平 | 拆分提供者与项目 | 为精细化结构外部性对象提供参照 |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: HTTP Error 404: Not Found",
      "externalUrl": "https://doi.org/10.52202/079017-1589",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "luo2024",
      "index": 53,
      "title": "A survey on causal inference for recommendation",
      "authors": [
        "Huishi Luo",
        "Fuzhen Zhuang",
        "Ruobing Xie",
        "Hengshu Zhu",
        "Deqing Wang",
        "Zhulin An",
        "Yongjun Xu"
      ],
      "year": 2024,
      "venue": "The Innovation",
      "citation": "Luo, H., Zhuang, F., Xie, R., Zhu, H., Wang, D., An, Z., Xu, Y., Lin, L. A survey on causal inference for recommendation. *The Innovation*, 2024, 5(2): 100590.",
      "doi": "10.1016/j.xinn.2024.100590",
      "arxivId": null,
      "streamKeys": [
        "evaluation"
      ],
      "streamLabel": "离策略评估与数据基础设施",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_6",
          "sectionTitle": "6.1 为什么推荐研究必须面对离策略评估",
          "streamKey": "evaluation",
          "snippet": "了基于嵌入的离策略评估方法，解决了当候选项目数量极大时传统逆倾向加权估计量方差爆炸的问题——这一进展对请求-展示列表层级的曝光评估至关重要，因为真实平台的候选集规模远超实验室设定。Luo 等（2024）的因果推荐综述则明确将混杂、反事实估计、离线策略评估和数据增强统一到因果推荐框架中。 对结构外部性论文而言，这条文献线的意义非常直接：如果最终的行动空间是请求-展示列表层级重排序，那么仅仅报告结构分数下降远远不够，还必须估计效用、曝光、公平与代价在新策略下如何变化。否则，所谓“"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1016/j.xinn.2024.100590",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "diaz2024",
      "index": 64,
      "title": "Recommendation as Information Allocation",
      "authors": [
        "Fernando Diaz"
      ],
      "year": 2024,
      "venue": "Foundations and Trends in Information Retrieval",
      "citation": "Diaz, F. Recommendation as information allocation. *Foundations and Trends in Information Retrieval*, 2024.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "overview",
        "fairness"
      ],
      "streamLabel": "综述",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_1",
          "sectionTitle": "研究背景与综述框架",
          "streamKey": "overview",
          "snippet": "推荐系统研究长期以\"相关性最大化\"或\"排序质量优化\"为中心，但现实平台真正持续做的事情，不只是为某个用户选择若干候选内容，而是在反复分配可见性、注意力与接触机会。Diaz（2024）在 *Foundations and Trends in Information Retrieval* 中系统提出\"推荐即信息分配\"（recommendation as information allocation）的理论框架，将排名与推荐重新定义为信息性资源在生产者与消费者之间"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.1 曝光作为可分配资源",
          "streamKey": "fairness",
          "snippet": "推荐系统公平性研究最重要的转变之一，是将曝光理解为一种可分配资源，而不仅是排序结果的副产品。这一转变的理论基础近年来由 Diaz（2024）的\"推荐即信息分配\"框架进一步系统化，将排名和推荐系统明确定位为信息性资源的分配机制。在排名公平的技术层面，Zehlike 等（2017）提出的 FA*IR 算法首次为 top-$k$ 排名施加了受保护群体比例约束，用统计检验保障弱势群体在排序结果中获得最低比例的曝光位置，开创了"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "piccardi2025",
      "index": 17,
      "title": "Reranking partisan animosity in algorithmic social media feeds alters affective polarization",
      "authors": [
        "Tiziano Piccardi",
        "Martin Saveski",
        "Chenyan Jia",
        "Jeffrey T. Hancock",
        "Jeanne L. Tsai",
        "Michael S. Bernstein"
      ],
      "year": 2025,
      "venue": "Science",
      "citation": "Piccardi, T., Saveski, M., Jia, C., Hancock, J., Tsai, J. L., Bernstein, M. S. Reranking partisan animosity in algorithmic social media feeds alters affective polarization. *Science*, 2025, 390: eadu5584.",
      "doi": "10.1126/science.adu5584",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.5 平台外部干预工具的出现：Piccardi (2025) 与 Gauthier (2026)",
          "streamKey": "platforms",
          "snippet": "较新的两项研究代表了这一领域的两个方向。Piccardi 等（2025）在 *Science* 上报告了一个无需平台合作的预注册实地实验：研究者通过浏览器扩展在 X 平台实时重排用户信息流，降低或提高对反民主态度与党派敌意内容的暴露。结果显示，这类内容暴露的减少或增加会使受试者对对立党派的情感温度计评分相应变暖或变冷，而传统参与指标变化不显著。这项研"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube 推荐效应 | 反事实因果识别 | 推荐曝光是独立可识别对象 | | Piccardi et al. (2025) | 无平台合作的实时重排 | 平台外部实地实验 | 请求-展示列表层级干预是未来方向 | | Gauthier et al. (2026) | X 平台信息流算法 | 实地实验 | 平台效应高度依赖环境与历史路径 | ---"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.adu5584",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "perez-martinez2025",
      "index": 30,
      "title": "Social polarization promoted by sparse higher-order interactions",
      "authors": [
        "Hugo Pérez-Martínez",
        "Santiago Lamata-Otín",
        "Federico Malizia",
        "L. M. Florı́a",
        "Jesús Gómez‐Gardeñes",
        "David Soriano‐Paños"
      ],
      "year": 2025,
      "venue": "Communications Physics",
      "citation": "Pérez-Martínez, H., Lamata-Otín, S., Malizia, F., Floría, L. M., Gómez-Gardeñes, J., Soriano-Paños, D. Social polarization promoted by sparse higher-order interactions. *Communications Physics*, 2025, 8: 507.",
      "doi": "10.1038/s42005-025-02413-6",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "度趋同/分化模式，无法被两两交互叠加所近似。Gong 等（2024）更进一步，将高阶联络拉普拉斯推广到有向单纯复形，从而为\"有向高阶结构上的局部流、方向挫折和扩散\"提供了统一语言。Pérez-Martínez 等（2025）则把高阶交互与社会极化动力学联系起来，说明稀疏高阶交互本身会改变极化过程。"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1038/s42005-025-02413-6",
      "localPdf": "./references/pdfs/2025_perez-martinez2025_social-polarization-promoted-by-sparse-higher-order-inte.pdf",
      "pdfFilename": "2025_perez-martinez2025_social-polarization-promoted-by-sparse-higher-order-inte.pdf",
      "isCurated": false
    },
    {
      "id": "shafiloo2026",
      "index": 49,
      "title": "The many facets of fairness in recommender systems: Consumers, providers and items",
      "authors": [
        "Reza Shafiloo",
        "Maria Stratigi",
        "Jaakko Peltonen",
        "Thomas Olsson",
        "Kostas Stefanidis"
      ],
      "year": 2025,
      "venue": "Information Systems",
      "citation": "Shafiloo, R., Stratigi, M., Peltonen, J., Olsson, T., Stefanidis, K. The many facets of fairness in recommender systems: Consumers, providers and items. *Information Systems*, 2026, 137: 102643.",
      "doi": "10.1016/j.is.2025.102643",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.5 动态公平与长期反馈回路",
          "streamKey": "fairness",
          "snippet": "的性能差异在持续微调过程中可能逐步扩大。Chen 等（2024）在多侧推荐情境下提出 FAIR 与 FORM 框架，强调平台、用户和项目之间的公平权衡需要在在线学习过程中同时处理。Shafiloo 等（2026）则把消费者公平、提供者公平和项目层公平明确拆分，强调提供者与项目不是一个可以随便合并的概念。 这些文献共同强化了一个判断：如果论文讨论的是结构外部性治理，就不能只在单窗口上讨论“分数降了多少”。一旦系统持续运行，推荐结果会改变曝光、曝光改变行为，行为再反馈到后续模型，短期公平与"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "异随时间扩大 | 提醒评价不能停留在单时点 | | Chen et al. (2024) | 多侧在线公平 | 在不确定反馈下平衡多方利益 | 显示公平与在线学习必须联动 | | Shafiloo et al. (2026) | 消费者/提供者/项目三侧公平 | 拆分提供者与项目 | 为精细化结构外部性对象提供参照 |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1016/j.is.2025.102643",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": false
    },
    {
      "id": "gauthier2026",
      "index": 18,
      "title": "The political effects of X’s feed algorithm",
      "authors": [
        "Germain Gauthier",
        "Roland Hodler",
        "Philine Widmer",
        "Ekaterina Zhuravskaya"
      ],
      "year": 2026,
      "venue": "Nature",
      "citation": "Gauthier, G., Hodler, R., Widmer, P., Zhuravskaya, E. The political effects of X’s feed algorithm. *Nature*, 2026, 652: 416-423. doi:10.1038/s41586-026-10098-2.",
      "doi": "10.1038/s41586-026-10098-2",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| 推荐曝光是独立可识别对象 | | Piccardi et al. (2025) | 无平台合作的实时重排 | 平台外部实地实验 | 请求-展示列表层级干预是未来方向 | | Gauthier et al. (2026) | X 平台信息流算法 | 实地实验 | 平台效应高度依赖环境与历史路径 | ---"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1038/s41586-026-10098-2",
      "localPdf": "./references/pdfs/2026_gauthier2026_the-political-effects-of-xs-feed-algorithm.pdf",
      "pdfFilename": "2026_gauthier2026_the-political-effects-of-xs-feed-algorithm.pdf",
      "isCurated": false
    }
  ],
  "curatedReferences": [
    {
      "id": "bakshy2015",
      "index": 5,
      "title": "Exposure to ideologically diverse news and opinion on Facebook",
      "authors": [
        "Eytan Bakshy",
        "Solomon Messing",
        "Lada A. Adamic"
      ],
      "year": 2015,
      "venue": "Science",
      "citation": "Bakshy, E., Messing, S., Adamic, L. A. Exposure to ideologically diverse news and opinion on Facebook. *Science*, 2015, 348(6239): 1130-1132.",
      "doi": "10.1126/science.aaa1160",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.aaa1160",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "cinelli2021",
      "index": 8,
      "title": "The echo chamber effect on social media",
      "authors": [
        "Matteo Cinelli",
        "Gianmarco De Francisci Morales",
        "Alessandro Galeazzi",
        "Walter Quattrociocchi",
        "Michele Starnini"
      ],
      "year": 2021,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Cinelli, M., De Francisci Morales, G., Galeazzi, A., Quattrociocchi, W., Starnini, M. The echo chamber effect on social media. *Proceedings of the National Academy of Sciences*, 2021, 118(9): e2023301118.",
      "doi": "10.1073/pnas.2023301118",
      "arxivId": null,
      "streamKeys": [
        "constructs"
      ],
      "streamLabel": "回音室与过滤气泡",
      "mentionCount": 0,
      "mentions": [],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1073/pnas.2023301118",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "gonzalez-bailon2023",
      "index": 11,
      "title": "Asymmetric ideological segregation in exposure to political news on Facebook",
      "authors": [
        "Sandra González‐Bailón",
        "David Lazer",
        "Pablo Barberá",
        "Meiqing Zhang",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Andrew M. Guess",
        "Shanto Iyengar",
        "Young Mie Kim",
        "Neil Malhotra",
        "Devra Moehler",
        "Brendan Nyhan",
        "Jennifer Pan",
        "Carlos Velasco Rivera",
        "Jaime E. Settle",
        "Emily Thorson",
        "Rebekah Tromble",
        "Arjun Wilkins",
        "Magdalena Wojcieszak",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Science",
      "citation": "González-Bailón, S., Lazer, D., Barberá, P., Zhang, M., Allcott, H., et al. Asymmetric ideological segregation in exposure to political news on Facebook. *Science*, 2023, 381(6656): 392-398.",
      "doi": "10.1126/science.ade7138",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "暴露、意识形态隔离、转发机制以及时间序信息流替代算法信息流的影响；另一方面，它也迫使研究者接受一个并不讨喜的结果：暴露结构确实可以被显著改变，但态度和行为指标并不一定随之变化。 González-Bailón 等（2023）在 *Science* 发表的研究表明，意识形态隔离在从潜在接触到实际暴露再到互动参与的过程中会逐步增强，并且保守派受众所在的新闻生态中存在更封闭、更同质的角落。这一发现有两个重要后果。其一，暴露隔离不是均匀分布的，而是具有不对称性。其二，结构分布的变化会随着行为链条向后推进而被"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| --- | --- | --- | | Bail et al. (2018) | 跨阵营暴露对极化的影响 | 实地实验 | 增加异质暴露可能适得其反，不能作为默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.ade7138",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "guess2023",
      "index": 12,
      "title": "How do social media feed algorithms affect attitudes and behavior in an election campaign?",
      "authors": [
        "Andrew M. Guess",
        "Neil Malhotra",
        "Jennifer Pan",
        "Pablo Barberá",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Drew Dimmery",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Sandra González‐Bailón",
        "Edward H. Kennedy",
        "Young Mie Kim",
        "David Lazer",
        "Devra Moehler",
        "Brendan Nyhan",
        "Carlos Velasco Rivera",
        "Jaime E. Settle",
        "Daniel Robert Thomas",
        "Emily Thorson",
        "Rebekah Tromble",
        "Arjun Wilkins",
        "Magdalena Wojcieszak",
        "B.S. Xiong",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Science",
      "citation": "Guess, A. M., Malhotra, N., Pan, J., Barberá, P., Allcott, H., et al. How do social media feed algorithms affect attitudes and behavior in an election campaign? *Science*, 2023, 381(6656): 398-404.",
      "doi": "10.1126/science.abp9364",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "保守派受众所在的新闻生态中存在更封闭、更同质的角落。这一发现有两个重要后果。其一，暴露隔离不是均匀分布的，而是具有不对称性。其二，结构分布的变化会随着行为链条向后推进而被放大。 Guess 等（2023）研究了将 Facebook 和 Instagram 从算法排序切换到时间序信息流的效果。结果显示，排序方式的改变确实显著改变了用户接触到的政治内容结构与参与模式，但在三个月实验窗口内，并未显著改变议题极化、情感极化或其他关键政治态度。Nyhan 等（2023）则进一步检验了“降低"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "默认目标 | | González-Bailón et al. (2023) | 暴露隔离的不对称性 | 描述性 + 平台证据 | 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1126/science.abp9364",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "nyhan2023",
      "index": 13,
      "title": "Like-minded sources on Facebook are prevalent but not polarizing",
      "authors": [
        "Brendan Nyhan",
        "Jaime E. Settle",
        "Emily Thorson",
        "Magdalena Wojcieszak",
        "Pablo Barberá",
        "Annie Y. Chen",
        "Hunt Allcott",
        "Taylor Brown",
        "Adriana Crespo-Tenorio",
        "Drew Dimmery",
        "Deen Freelon",
        "Matthew Gentzkow",
        "Sandra González‐Bailón",
        "Andrew M. Guess",
        "Edward H. Kennedy",
        "Young Mie Kim",
        "David Lazer",
        "Neil Malhotra",
        "Devra Moehler",
        "Jennifer Pan",
        "Daniel Robert Thomas",
        "Rebekah Tromble",
        "Carlos Velasco Rivera",
        "Arjun Wilkins",
        "B.S. Xiong",
        "Chad Kiewiet de Jonge",
        "Annie Franco",
        "Winter Mason",
        "Natalie Jomini Stroud",
        "Joshua A. Tucker"
      ],
      "year": 2023,
      "venue": "Nature",
      "citation": "Nyhan, B., Settle, J., Thorson, E., Wojcieszak, M., Barberá, P., et al. Like-minded sources on Facebook are prevalent but not polarizing. *Nature*, 2023, 620: 137-144.",
      "doi": "10.1038/s41586-023-06297-w",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.2 Meta 2020 研究计划的意义",
          "streamKey": "platforms",
          "snippet": "算法排序切换到时间序信息流的效果。结果显示，排序方式的改变确实显著改变了用户接触到的政治内容结构与参与模式，但在三个月实验窗口内，并未显著改变议题极化、情感极化或其他关键政治态度。Nyhan 等（2023）则进一步检验了“降低同阵营来源暴露是否会减少极化”，发现尽管同阵营暴露在平台上非常普遍，但将其降低约三分之一并没有带来相应的态度去极化效果。 与此相呼应，关于二次转发的研究也显示，转发机制会放大政治新闻，但并未检测到显著的信念或意见变化。这组结果共同否定了一种过度简化的叙事：即"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "| 不对称曝光是实证对象，不只是规范性标签 | | Guess et al. (2023) | 算法信息流与时间序信息流 | 大规模平台实验 | 结构改变不等于态度改变 | | Nyhan et al. (2023) | 同阵营暴露 | 大规模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴露→知识获取路径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1038/s41586-023-06297-w",
      "localPdf": "./references/pdfs/2023_nyhan2023_like-minded-sources-on-facebook-are-prevalent-but-not-po.pdf",
      "pdfFilename": "2023_nyhan2023_like-minded-sources-on-facebook-are-prevalent-but-not-po.pdf",
      "isCurated": true
    },
    {
      "id": "hosseinmardi2024",
      "index": 16,
      "title": "Causally estimating the effect of YouTube’s recommender system using counterfactual bots",
      "authors": [
        "Homa Hosseinmardi",
        "Amir Ghasemian",
        "Miguel Rivera-Lanas",
        "Manoel Horta Ribeiro",
        "Robert West",
        "Duncan J. Watts"
      ],
      "year": 2024,
      "venue": "Proceedings of the National Academy of Sciences",
      "citation": "Hosseinmardi, H., Ghasemian, A., Clauset, A., Mobius, M., Rothschild, D. M., Watts, D. J. Causally estimating the effect of YouTube's recommender system using counterfactual bots. *Proceedings of the National Academy of Sciences*, 2024, 121(8): e2313377121.",
      "doi": "10.1073/pnas.2313377121",
      "arxivId": null,
      "streamKeys": [
        "platforms"
      ],
      "streamLabel": "平台实验与因果证据",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_3",
          "sectionTitle": "3.4 重要论文细读（四）：Hosseinmardi et al. (2024)",
          "streamKey": "platforms",
          "snippet": "Hosseinmardi 等（2024）在 *PNAS* 上发表的 YouTube 研究，为推荐系统因果识别提供了另一种路径。论文使用反事实机器人，将用户偏好与算法推荐效应区分开来，估计 YouTube 推荐系统对所观看视频党派性的因果作用。与直接观察真实用户的日志不同，这种设计试图通过控制偏好部分，单独识别算法推荐的"
        },
        {
          "sectionId": "section_3",
          "sectionTitle": "3.6 真实平台文献对重构论文的约束",
          "streamKey": "platforms",
          "snippet": "模平台实验 | 不能把减少同阵营暴露写成默认成功 | | Levy (2021) | 跨阵营新闻订阅 | 大规模实地实验 | 暴露→知识获取路径可行，但→态度变化衰减严重 | | Hosseinmardi et al. (2024) | YouTube 推荐效应 | 反事实因果识别 | 推荐曝光是独立可识别对象 | | Piccardi et al. (2025) | 无平台合作的实时重排 | 平台外部实地实验 | 请求-展示列表层级干预是未来方向 | | Gauthier et al. (2026) |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1073/pnas.2313377121",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "diaz2024",
      "index": 64,
      "title": "Recommendation as Information Allocation",
      "authors": [
        "Fernando Diaz"
      ],
      "year": 2024,
      "venue": "Foundations and Trends in Information Retrieval",
      "citation": "Diaz, F. Recommendation as information allocation. *Foundations and Trends in Information Retrieval*, 2024.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "overview",
        "fairness"
      ],
      "streamLabel": "综述",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_1",
          "sectionTitle": "研究背景与综述框架",
          "streamKey": "overview",
          "snippet": "推荐系统研究长期以\"相关性最大化\"或\"排序质量优化\"为中心，但现实平台真正持续做的事情，不只是为某个用户选择若干候选内容，而是在反复分配可见性、注意力与接触机会。Diaz（2024）在 *Foundations and Trends in Information Retrieval* 中系统提出\"推荐即信息分配\"（recommendation as information allocation）的理论框架，将排名与推荐重新定义为信息性资源在生产者与消费者之间"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.1 曝光作为可分配资源",
          "streamKey": "fairness",
          "snippet": "推荐系统公平性研究最重要的转变之一，是将曝光理解为一种可分配资源，而不仅是排序结果的副产品。这一转变的理论基础近年来由 Diaz（2024）的\"推荐即信息分配\"框架进一步系统化，将排名和推荐系统明确定位为信息性资源的分配机制。在排名公平的技术层面，Zehlike 等（2017）提出的 FA*IR 算法首次为 top-$k$ 排名施加了受保护群体比例约束，用统计检验保障弱势群体在排序结果中获得最低比例的曝光位置，开创了"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "jiang2011",
      "index": 23,
      "title": "Statistical ranking and combinatorial Hodge theory",
      "authors": [
        "Xiaoye Jiang",
        "Lek‐Heng Lim",
        "Yuan Yao",
        "Yinyu Ye"
      ],
      "year": 2010,
      "venue": "Mathematical Programming",
      "citation": "Jiang, X., Lim, L.-H., Yao, Y., Ye, Y. Statistical ranking and combinatorial Hodge theory. *Mathematical Programming*, 2011, 127(1): 203-244.",
      "doi": "10.1007/s10107-010-0419-x",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.3 重要论文细读（五）：Jiang et al. (2011)",
          "streamKey": "topology",
          "snippet": "Jiang 等（2011）虽然研究的是统计排名，而非推荐曝光，但它对本文最重要的启示在于“局部循环不一致可以被单独识别，而不必被平均掉”。在偏好排序情境中，这意味着 A 优于 B、B 优于 C、C 又优于 A 的循环结构具有独立解释价值；在推荐曝光情境中，这种思想可以自然迁移为“局部曝光闭环与方向性失衡是"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "https://doi.org/10.1007/s10107-010-0419-x",
      "localPdf": "./references/pdfs/2010_jiang2011_statistical-ranking-and-combinatorial-hodge-theory.pdf",
      "pdfFilename": "2010_jiang2011_statistical-ranking-and-combinatorial-hodge-theory.pdf",
      "isCurated": true
    },
    {
      "id": "gong2024",
      "index": 29,
      "title": "Higher-order connection Laplacians for directed simplicial complexes",
      "authors": [
        "Xue Gong",
        "Desmond J. Higham",
        "Konstantinos C. Zygalakis",
        "Ginestra Bianconi"
      ],
      "year": 2024,
      "venue": "Journal of Physics Complexity",
      "citation": "Gong, X., Higham, D. J., Zygalakis, K. C., Bianconi, G. Higher-order connection Laplacians for directed simplicial complexes. *Journal of Physics: Complexity*, 2024, 5(1): 015022.",
      "doi": "10.1088/2632-072x/ad353b",
      "arxivId": null,
      "streamKeys": [
        "topology"
      ],
      "streamLabel": "高阶网络与方向算子",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_4",
          "sectionTitle": "4.2 Hodge 理论与联络拉普拉斯的方法谱系",
          "streamKey": "topology",
          "snippet": "y interactions）会产生与成对交互截然不同的共识/分裂动态——在推荐暴露语境中，这意味着三人或以上的共同暴露事件可能驱动的态度趋同/分化模式，无法被两两交互叠加所近似。Gong 等（2024）更进一步，将高阶联络拉普拉斯推广到有向单纯复形，从而为\"有向高阶结构上的局部流、方向挫折和扩散\"提供了统一语言。Pérez-Martínez 等（2025）则把高阶交互与社会极化动力学联系起来，说明稀疏高阶交互本身会改变极化过程。"
        },
        {
          "sectionId": "section_4",
          "sectionTitle": "4.4 重要论文细读（六）：Gong et al. (2024)",
          "streamKey": "topology",
          "snippet": "Gong 等（2024）的论文是当前技术路线中最接近目标问题的一篇基础工作。它的核心贡献并不在于某个具体应用，而在于把联络拉普拉斯从有向图推进到有向单纯复形，使方向性不再局限于边，而可以进入更高阶结构单元。 这对于推荐曝光研究尤其关键。推荐系统中的局部结构往往同时具有方向性和高阶性：不仅要知道 A 是"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "download_failed: response is not a PDF",
      "externalUrl": "https://doi.org/10.1088/2632-072x/ad353b",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "wu2022",
      "index": 42,
      "title": "Joint Multisided Exposure Fairness for Recommendation",
      "authors": [
        "Haolun Wu",
        "Bhaskar Mitra",
        "Chen Ma",
        "Fernando Díaz",
        "Xue Liu"
      ],
      "year": 2022,
      "venue": "Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval",
      "citation": "Wu, H., Mitra, B., Ma, C., Diaz, F., Liu, X. Joint multisided exposure fairness for recommendation. In: *Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)*, 2022: 703-714. doi:10.1145/3477495.3532007.",
      "doi": "10.1145/3477495.3532007",
      "arxivId": null,
      "streamKeys": [
        "fairness"
      ],
      "streamLabel": "曝光公平与多侧推荐",
      "mentionCount": 3,
      "mentions": [
        {
          "sectionId": "section_5",
          "sectionTitle": "5.2 多侧推荐与系统性暴露不平等",
          "streamKey": "fairness",
          "snippet": "算法明确在双边平台中同时建模消费者公平与生产者公平，通过贪心加扰动策略在保证用户效用最低损失的条件下，为每个生产者保障最低曝光份额——这是首批系统处理双侧公平约束的推荐算法之一。Wu 等（2022）在此基础上，把期望曝光扩展到同时从消费者与生产者视角建模的联合曝光公平框架，并明确指出系统性曝光不平等会造成分配性伤害与表征性伤害。 这类工作与早期“多样性推荐”之间有本质区别。多样性目标往往仍以用户体验为中心，而多侧曝光公平则承认平台同时面对用户、内容生产者、提供者以及平台自"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.4 重要论文细读（八）：Wu et al. (2022)",
          "streamKey": "fairness",
          "snippet": "Wu 等（2022）的联合多侧曝光公平框架，为推荐研究提供了最直接的系统性暴露偏差视角。论文不再只问“单个项目是否被不公平对待”，而是问“不同用户群体与不同生产者群体之间是否存在系统性的过曝或欠曝”。这一点非常契合结构外部性研究的目标，因为结构风险本质上也是在讨论系统是否在某些局部位置持续地分配了不"
        },
        {
          "sectionId": "section_5",
          "sectionTitle": "5.6 公平性综述文献的启示",
          "streamKey": "fairness",
          "snippet": "| 为多利益相关者曝光治理提供参照 | | Diaz et al. (2020) | 随机排名中的期望曝光 | 用分布化方式评价曝光 | 为请求-展示列表层级重排提供基础 | | Wu et al. (2022) | 联合多侧曝光公平 | 同时建模消费者与生产者侧 | 直接连接系统性曝光偏差与社会伤害 | | Mansoury & Mobasher (2023) | 动态曝光公平 | 指出静态方法在长期反馈中失效 | 强化长期结构偏差视角 | | Yoo et al. (2024) |"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "external_only",
      "externalUrl": "https://doi.org/10.1145/3477495.3532007",
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    },
    {
      "id": "eide2021",
      "index": 55,
      "title": "FINN.no Slates Dataset: A new Sequential Dataset Logging Interactions, all Viewed Items and Click Responses/No-Click for Recommender Systems Research",
      "authors": [
        "Simen Eide",
        "David S. Leslie",
        "Arnoldo Frigessi",
        "Joakim Rishaug",
        "Helge Kristian Jenssen",
        "Sofie Verrewaere"
      ],
      "year": 2021,
      "venue": "arXiv (Cornell University)",
      "citation": "Eide, S., Frigessi, A., Jenssen, H., Leslie, D. S., Rishaug, J., Verrewaere, S. FINN.no Slates Dataset: A new sequential dataset logging interactions, all-viewed items and click responses/no-click for recommender systems research. arXiv:2111.03340, 2021.",
      "doi": "10.1145/3460231.3474607",
      "arxivId": "2111.03340",
      "streamKeys": [
        "evaluation"
      ],
      "streamLabel": "离策略评估与数据基础设施",
      "mentionCount": 1,
      "mentions": [
        {
          "sectionId": "section_6",
          "sectionTitle": "6.3 重要论文细读（九）：FINN.no Slates Dataset",
          "streamKey": "evaluation",
          "snippet": "Eide 等（2021）的 FINN.no Slates 论文值得特别强调，因为它几乎用最直接的方式指出了现有推荐研究的一个结构性缺陷：多数公开数据集只保留点击，而不保留“用户实际看到了什么”。在没有真实展示记录的情况下，研究者很容易把未点击项当成“不感兴趣”，但实际上它可能只是从未被展示。 对任何想"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "downloaded",
      "externalUrl": "http://arxiv.org/abs/2111.03340",
      "localPdf": "./references/pdfs/2021_eide2021_finn-no-slates-dataset-a-new-sequential-dataset-logging.pdf",
      "pdfFilename": "2021_eide2021_finn-no-slates-dataset-a-new-sequential-dataset-logging.pdf",
      "isCurated": true
    },
    {
      "id": "raji2020",
      "index": 76,
      "title": "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing",
      "authors": [
        "Inioluwa Deborah Raji",
        "Andrew Smart",
        "Rebecca N. White",
        "Margaret Mitchell",
        "Timnit Gebru"
      ],
      "year": 2020,
      "venue": "FAccT",
      "citation": "Raji, I. D., Smart, A., White, R. N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D., Barnes, P. Closing the AI accountability gap: Defining an end-to-end framework for internal algorithmic auditing. In: *Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 2020: 33-44.",
      "doi": null,
      "arxivId": null,
      "streamKeys": [
        "gaps",
        "conclusion"
      ],
      "streamLabel": "综合评述与研究空白",
      "mentionCount": 2,
      "mentions": [
        {
          "sectionId": "section_7",
          "sectionTitle": "综合评述与研究空白",
          "streamKey": "gaps",
          "snippet": "都可以被实证研究。断裂则在于：研究对象长期混杂，结构与结果经常被越级连接，用户聚合层级代理与请求-展示列表层级动作经常被混用，而许多\"治理\"论文仍在用自己的内部分数证明自己的成功。Raji 等（2020）在 FAccT 上提出的端到端内部算法审计框架指出了一个关键问题：有效的算法审计需要在体制层面嵌入预部署评估、持续监控和外部问责机制，而不能停留于研究者自行设定标准、自行评估的封闭循环。 围绕“推荐曝光结构外部性”这一主题，当前文献至少留下六个尚未完成的空白。"
        },
        {
          "sectionId": "section_8",
          "sectionTitle": "结论",
          "streamKey": "conclusion",
          "snippet": "才可能成立。其一，它必须把研究对象明确写成曝光分配的结构问题，而不是把回音室当作模糊总称。其二，它必须承认结构风险只是中层审计对象，而不是福利、极化或民主后果的直接代名词——正如 Raji 等（2020）所强调的，有效的算法审计需要在诊断、干预和问责之间建立可追溯的制度链条。其三，它必须在方法与评估上朝请求-展示列表层级动作空间、独立不利结果与分层证据设计靠拢。 如果说旧阶段的研究任务是证明“推荐系统可能塑造信息环境”，那么当前阶段的研究任务已经变成：在明确对象、明确边界和明确"
        }
      ],
      "auditSection": null,
      "auditColumns": [],
      "verificationStatus": "verified",
      "downloadStatus": "not_open_access",
      "externalUrl": null,
      "localPdf": null,
      "pdfFilename": null,
      "isCurated": true
    }
  ],
  "relationEdges": [
    {
      "source": "areeb2023",
      "target": "bruns2019",
      "weight": 1
    },
    {
      "source": "arguedas2022",
      "target": "bruns2019",
      "weight": 1
    },
    {
      "source": "gonzalez-bailon2023",
      "target": "guess2023",
      "weight": 2
    },
    {
      "source": "guess2023",
      "target": "nyhan2023",
      "weight": 2
    },
    {
      "source": "guess2023-reshares-on",
      "target": "nyhan2023",
      "weight": 2
    },
    {
      "source": "bail2018",
      "target": "guess2023-reshares-on",
      "weight": 1
    },
    {
      "source": "bail2018",
      "target": "levy2021",
      "weight": 3
    },
    {
      "source": "guess2023-reshares-on",
      "target": "hosseinmardi2024",
      "weight": 1
    },
    {
      "source": "hosseinmardi2024",
      "target": "piccardi2025",
      "weight": 1
    },
    {
      "source": "gauthier2026",
      "target": "piccardi2025",
      "weight": 1
    },
    {
      "source": "bail2018",
      "target": "gauthier2026",
      "weight": 1
    },
    {
      "source": "battiston2020",
      "target": "torres2021",
      "weight": 1
    },
    {
      "source": "bick2023",
      "target": "torres2021",
      "weight": 1
    },
    {
      "source": "fanuel2017",
      "target": "lim2020",
      "weight": 1
    },
    {
      "source": "lim2020",
      "target": "schaub2020",
      "weight": 1
    },
    {
      "source": "gong2024",
      "target": "schaub2020",
      "weight": 1
    },
    {
      "source": "gong2024",
      "target": "perez-martinez2025",
      "weight": 1
    },
    {
      "source": "diaz2020",
      "target": "diaz2024",
      "weight": 1
    },
    {
      "source": "diaz2024",
      "target": "zehlike2017",
      "weight": 1
    },
    {
      "source": "patro2020",
      "target": "wu2022",
      "weight": 1
    },
    {
      "source": "chen2024",
      "target": "yoo2024",
      "weight": 2
    },
    {
      "source": "chen2024",
      "target": "shafiloo2026",
      "weight": 2
    },
    {
      "source": "biega2018",
      "target": "diaz2020",
      "weight": 1
    },
    {
      "source": "diaz2020",
      "target": "wu2022",
      "weight": 1
    },
    {
      "source": "jin2023",
      "target": "wu2022",
      "weight": 1
    },
    {
      "source": "jin2023",
      "target": "yoo2024",
      "weight": 1
    },
    {
      "source": "shafiloo2026",
      "target": "zehlike2017",
      "weight": 1
    },
    {
      "source": "patro2020",
      "target": "zehlike2017",
      "weight": 1
    },
    {
      "source": "luo2024",
      "target": "swaminathan2017",
      "weight": 1
    },
    {
      "source": "buchholz2022",
      "target": "swaminathan2017",
      "weight": 1
    },
    {
      "source": "levy2021",
      "target": "raji2020",
      "weight": 1
    }
  ],
  "readingPath": [
    "先看综述骨架与研究状态，确认当前论文重构处于什么阶段。",
    "再看章节导航与时间线，把 5 条文献主线的时间顺序理顺。",
    "最后进入关系图、对读器和参考文献库，逐条定位关键论文与下载状态。"
  ]
} as const
