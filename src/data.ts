import { Question, MindsetType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: {
      zh: "如何应对大城市内由于供需缺口引发的房租暴涨与住房危机？",
      en: "How should cities address rent surges and housing crises caused by supply-demand gaps?"
    },
    choices: [
      {
        text: {
          zh: "放宽城市规划等土地限制，减免建设相关税种，鼓励私人资本与开发商增建各类住宅以提升房屋供给。",
          en: "Relax zoning laws and land restrictions, cut construction taxes, and encourage private builders to rapidly increase overall housing supply."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "出台租金上涨红线（如租金管制），设立租客协商代表，限制非理性驱逐以保护弱势居住群体的基本权益。",
          en: "Enact a cap on rent hikes (rent control), support tenant unions, and limit eviction rules to shield vulnerable residents."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "由政府财政部门提供廉租公房，并直接对低收入阶层发放长期住房租金现金补贴，托底其可居住能力。",
          en: "Directly construct social housing and provide long-term housing vouchers to low-income families to ensure essential shelter capability."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "扶持非营利性社区信托自自治和房屋自组织合作社，通过邻里协商共同决定、自建房屋、分摊保障、自主维护。",
          en: "Empower non-profit community land trusts and housing cooperatives to co-develop, allocate, and manage properties via collaborative consensus."
        },
        weights: { institutionalPower: 1.0, communityGovernance: 2.0 }
      }
    ]
  },
  {
    id: 2,
    title: {
      zh: "面对极端异常气候导致部分重要生活消费物料（如咖啡豆、糖分等）价格疯涨，你会关注什么？",
      en: "In the face of extreme weather events causing price hikes in essential consumer goods, where is your focus?"
    },
    choices: [
      {
        text: {
          zh: "尊重供求决定的相对价格，自发上涨的价格才能合理激励新商家进入和引导消费者削减非必要需求，让市场恢复均衡。",
          en: "Respect free price movements; rising relative prices incentivize supply diversification and guide customers to reduce non-essential demand."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "这更需要央行系统和宏观金融政策发挥作用，保障大局物价平稳，并利用宏观防火墙阻断个别通胀风险向全局传导。",
          en: "Observe system-wide risk. The central bank and monetary policies must maintain overall price stability and prevent local shocks from turning systemic."
        },
        weights: { macroStabilization: 1.5 }
      },
      {
        text: {
          zh: "关注商家在价格展示中是否利用了算法或信息差误导购买决策，在结账页面设计默认明细提示以辅助理性选择。",
          en: "Watch for deceptive app algorithms or behavioral biases, and improve check-out flows with default price transparency to nudge rational choices."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "支持和引入采用先进智能物流 and 集约化冲泡等高效率平替方案，发挥长期产业创新升级的降本优势。",
          en: "Encourage automated supply chain logistics and production-line innovation to lower systemic marginal cost through technical upgrade."
        },
        weights: { evolutionaryInnovation: 1.5 }
      }
    ]
  },
  {
    id: 3,
    title: {
      zh: "生成式人工智能（AI）加速重塑写字楼办公生态，部分初级普通职位面临极大的替代失业风险，该如何筹谋？",
      en: "Generative AI is transforming corporate workplaces. How should society handle the disruption to junior knowledge-worker jobs?"
    },
    choices: [
      {
        text: {
          zh: "这体现了技术不断进化的生命力，应鼓励人工智能企业竞争，用颠覆式创新创造出全新类型的高附加值岗位。",
          en: "Embrace creative destruction. Encourage technology firms to run experiments and build new value chains, generating high-skilled professions."
        },
        weights: { evolutionaryInnovation: 1.5 }
      },
      {
        text: {
          zh: "必须保障普通人在规则博弈中的基本尊严和劳动议价权，要求平台与科技巨头依法购买社会保护，限制任意解聘行为。",
          en: "Bolster employees' collective bargain rights, ensure labor protections remain intact, and prevent Tech giants from cutting safety nets."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "重在对这些员工提供全链条的再就业与自学专项能力基金，通过高质量教育重构其社会可行力，而非人为阻断技术推进。",
          en: "Focus on social investment in professional retraining and educational resources to boost workers' adaptive capabilities to learn."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "如果出现了大规模的、不可控的急速科技淘汰危机，宏观财政需要适度干预，比如给予研发减免并由公共领域扩建临时周转岗位。",
          en: "Deploy expansionary fiscal programs or temporary public jobs if short-term technology unemployment shocks escalate into dynamic macro risks."
        },
        weights: { macroStabilization: 1.5 }
      }
    ]
  },
  {
    id: 4,
    title: {
      zh: "在零工平台经济高速崛起、外卖骑手普遍承受高强度算法驱动与缺乏传统社保的浪潮下，哪种思路最合适？",
      en: "As the gig economy balloons, delivery food couriers face algorithmic control and lacks structured pensions. What is the path forward?"
    },
    choices: [
      {
        text: {
          zh: "依法引入集体谈判机制，赋予骑手共同商讨派单时间算法边界的制度表决权，并联合重构用工最低工资法和雇主兜底标准。",
          en: "Legislate collective bargaining. Empower couriers to participate in redefining algorithmic boundaries and guarantee workplace floor pay."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "维持平台弹性灵活用工规则以拓宽更庞大的大众就业盘，并在多个配送品牌之间培育充分的自由竞争，引导其动态提高骑手回报。",
          en: "Assert contract flexibility to safeguard vast low-barrier employment, and foster dynamic platform competition to push market compensation."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "通过对配送应用程序的界面规则做出“助推”（Nudge）设置，比如默认预设“每送 3 小时自动下线锁定 15 分钟”，扭转过劳冲动。",
          en: "Design interface nudges inside gig apps, such as pre-setting a default 15-minute cooloff lock for every 3 hours worked to curb extreme fatigue."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "联合社区工作站、地方志愿者与商户，合作构建地区级“骑手温暖网格”生态（如饮水点、自组织歇脚站、邻里紧急调解委员会）。",
          en: "Synthesize localized community support networks, where local store owners, worker councils, and neighborhood volunteers provide shelter."
        },
        weights: { behavioralReality: 1.0, communityGovernance: 2.0 }
      }
    ]
  },
  {
    id: 5,
    title: {
      zh: "学区房炒作、优质中等教育资源紧缺并催生极度的家长跟风攀比和教育焦虑，如何良性纾解？",
      en: "Intense competitive anxieties surrounding local elite schools fuel scholastic market bubbles and parent distress. How to solve this?"
    },
    choices: [
      {
        text: {
          zh: "一刀切地禁绝学校竞争无益。应该鼓励民间办学供给多样化，放开公办民办定价权并健全市场竞争，以此来根本平复名校溢价。",
          en: "Encourage private sector options and ease standard price restrictions on tuition. Boost educational options to absorb excess premium."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "由政府教育系统发挥主导责任，饱和式投资落后学校，对边缘贫寒家庭实施基础教育直补政策，全面保障寒门门槛的教育可行性。",
          en: "Direct government spending toward underfunded schools, and launch needs-based learning grants to safeguard marginal students' real potentials."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "跟风报班很大程度是盲从或被广告制造的焦虑，应该规范推荐话术，并将免试就近入学制作为全社会的默认报考预设选项。",
          en: "Acknowledge that parental panic feeds on cognitive herd behavior. Simplify application screens and set local registration as the standard default."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "充分调动地方社区公会或基层自治委员会，建立街坊课后托管、互助学习共享小组，用地方熟人凝聚力平摊课后看护的社会压力。",
          en: "Delegate educational care. Coordinate school-parent neighborhood collectives and student clubs to cushion childcarer stress."
        },
        weights: { equityCapability: 1.0, communityGovernance: 2.0 }
      }
    ]
  },
  {
    id: 6,
    title: {
      zh: "为应对全球气候变暖等“公地悲剧”，社会如何合理约束碳排放并让重污染工业减排？",
      en: "Faced with greenhouse gas emissions and 'tragedy of the commons', how can society curb pollution and save carbon space?"
    },
    choices: [
      {
        text: {
          zh: "科学界定排碳指标并开征碳排碳税（庇古税），让排碳企业完全承担外部不经济性，将社会成本完整自发反射在企业产品标价中。",
          en: "Levy a precise Pigouvian carbon tax or trade credits to force firms to internalize the societal cost, leveraging the price mechanism."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "极力支持在清洁核聚变、超材料光伏、高效储能等深层硬科技上的技术风投，当高效率清洁创新彻底便宜时，旧行业自会退出历史舞台。",
          en: "Direct heavy resources to technological venture funds solving scale battery storage or carbon capture. Green technologies will naturally obsolete coal."
        },
        weights: { evolutionaryInnovation: 1.5 }
      },
      {
        text: {
          zh: "这更需要宏观统领的主导责任：依据全面低碳化蓝图路线，强制设定全行业硬能耗红线、淘汰不合格锅炉工艺并拉闸停产。",
          en: "Maintain state intervention. Formulate direct top-down climate targets, outlaw excessively dirty factories, and enforce energy safety limits."
        },
        weights: { macroStabilization: 1.5 }
      },
      {
        text: {
          zh: "鼓励地区自治协商（奥斯特罗姆框架），支持工厂代表与周边受损社区代表、邻里自治理事会当面谈判，商定符合本地方利益的最大减排规约。",
          en: "Pioneer localized negotiation, letting industrial associations, local community boards, and civic unions co-agree on micro emissions agreements."
        },
        weights: { institutionalPower: 1.0, communityGovernance: 2.0 }
      }
    ]
  },
  {
    id: 7,
    title: {
      zh: "三甲大医院总是人满为患，专家号一号难求并伴随号贩高额溢价。若让你理顺配置方案，你会赞成？",
      en: "Top tier public clinics are persistently overwhelmed, while black-market scalpers command massive diagnostic markups. What is your cure?"
    },
    choices: [
      {
        text: {
          zh: "允许资深医生在合规范围内合理自主定价，利用特需调节削减不必要或轻度诉求门类，回收盈利用于研发扩增优质供给。",
          en: "Allow competitive pricing for premium consultation to weed out non-essential demand, while recycling revenues into new medical capacity."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "保障生命尊严是第一天职。重构社保大统筹直接投建边缘社区免费全科医疗，禁止私人商业资本过度垄断核心药品与先进设备定价权。",
          en: "Declaim healthcare as a human right. Secure robust public coverage to lower hospital cost for common diseases and subsidize essential therapies."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "承认大量轻度感冒患者存在“过度自我担忧”的偏误，通过预约挂号APP智能诊断，默认预设推荐去往普通基层卫生院完成首诊。",
          en: "Address the human bias of over-diagnosing minor bugs. Program health apps to show primary clinics as the default booking option for family medicine."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "大排长龙暴露出医生、患者与医院组织规则议价权的失衡；规范核心执业标准，保障基本卫生工会福利并严厉防范内部灰色利益输送。",
          en: "Examine institutional bias. Tighten audits on hospital procurement networks and regulate doctor-pharma marketing connections."
        },
        weights: { institutionalPower: 1.5 }
      }
    ]
  },
  {
    id: 8,
    title: {
      zh: "多处小体量城商行卷入坏账纠纷并引致局部挤兑恐慌势头，如何遏阻系统性震荡？",
      en: "Multiple regional municipal banks face high delinquency rates, triggering localized cash-run scares. How to prevent systemic runs?"
    },
    choices: [
      {
        text: {
          zh: "严肃遵循市场纪律和责任自负原则。拒绝无条件救助，避免严重的“道德风险”（Moral Hazard），让市场充分定价和信用自然淘汰。",
          en: "Observe pure market discipline. Deny blank-check bailouts to avoid serious 'moral hazard' and restore baseline healthy asset behavior."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "由政府金融监管与央行果断介入，履行最后贷款人职责（Lender of Last Resort），无限提供大额信用兜底，在瞬间稳定市场信心大局。",
          en: "Declare full stability posture. The central bank must serve as 'lender of last resort', pouring swift emergency credit injections to halt panic."
        },
        weights: { macroStabilization: 1.5 }
      },
      {
        text: {
          zh: "理解银行挤兑通常是恐慌情绪（兽性冲动）极速传染的反应。应暂设小幅业务阻漏，调低临柜人员每日提取上限，通过心理疏导抚慰信心。",
          en: "Calm animal spirits. Since bank panic is heavily psychological, extend the bank app's waiting times and provide simple cues to break the stampede."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "挤兑暴露了底层资本的所有权控制弊端，借此机会对这些金融机构进行深度监管听证、推行重大信用资产重组并追究股东的契约责任。",
          en: "Investigate structural exploitation. Execute rigorous administrative audits into the financial elites and reorganize asset ownership boards."
        },
        weights: { institutionalPower: 1.5 }
      }
    ]
  },
  {
    id: 9,
    title: {
      zh: "社会财富跨度极宽且出现了不容忽视的结构性固化现象，改善这一局面的核心支点应当放在哪里？",
      en: "Wealth divides have widened, and environments have hardened. Where should policy tilt to build upward mobility?"
    },
    choices: [
      {
        text: {
          zh: "重点提升弱势下一代的可行受教育条件和儿童营养，完善全民基础生活兜底保障，让每个人自出生起便能拥有公平的参与能力。",
          en: "Direct wealth into early schooling, health, and minimum income to upgrade marginal children's capability to discover their talent."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "重构企业法和超额收益分配。重点解决垄断平台、超大资本财团和劳动者之间在组织话语和权利博弈上的不均，限制不平等的寻租红利。",
          en: "Introduce progressive inheritance taxes and curb platform rent-seeking to level the structurally skewed playing field between labor and capital."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "应当警惕严酷的一刀切财产税挫伤了关键财富创造者的长线创业热情，需通过培育生机勃勃的私营竞争来拉高蛋糕体积与创造大量就业。",
          en: "Avoid heavy wealth levies that disincentivize job creators. Maintain competitive dynamics to scale the pie and boost baseline employment."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "单纯靠行政转移难以解决长效活力。应当鼓励最激进的技术跃迁和颠覆性新兴风口（如人工智能、新能源），通过竞争更迭实现阶层自演进。",
          en: "Focus on creating technology frontiers. Launch supercharged economic growth engines that break old monopolies through evolution."
        },
        weights: { evolutionaryInnovation: 1.5 }
      }
    ]
  },
  {
    id: 10,
    title: {
      zh: "社交软件或视频平台推荐算法成瘾并构建了广泛的“信息茧房”，何其解也？",
      en: "Social feed recommenders promote extreme viral addiction and construct localized ideological echo-chambers. What is the remedy?"
    },
    choices: [
      {
        text: {
          zh: "数字资产被巨头垄断控制。应制定前瞻算法透明法，保障网民可以就自己的个人数据产权进行自主主张与交易所有权。",
          en: "Legislate digital consumer guidelines. Force transparency in algos and give users legal control and property rights over their data assets."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "在多巴胺偏好中存在强烈的短视盲区。应该立法让平台开通一键自主添加：“每日默认1小时限停”、“无推荐清白版”等良性默认预设开关。",
          en: "Understand present-bias. Encourage product nudges such as easy opt-out buttons or a default 1-hour healthy screen restriction."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "鼓励风投资本研发完全去中心化的新代社媒框架，支持能自主设置过滤条件的草根小应用进驻去挑战流量寡头，以多点创新推动平台换代。",
          en: "Promote decentralized networking models. Supercharge open-source startups and digital tools to bypass big centralized media conglomerates."
        },
        weights: { evolutionaryInnovation: 1.5 }
      },
      {
        text: {
          zh: "这本质上是每个用户理性决策与有限时间约束相互适应的过程。消费者自愿花费时间去换多巴胺是个体效用的自主选择，无需行政过度监管。",
          en: "Recognize subjective individual valuation. Customers intentionally trade time for infotainment based on their personal marginal utility."
        },
        weights: { priceMechanism: 1.5 }
      }
    ]
  }
];

export const MINDSETS: MindsetType[] = [
  {
    id: "price-mechanism",
    name: { zh: "价格机制型", en: "Price Mechanism Lens" },
    summary: { 
      zh: "你习惯先发问：价格和激励信号是否被阻滞扭曲？供给是否充足？", 
      en: "You always check price signals, supply-demand balances, and marginal incentives first." 
    },
    representative: { zh: "亚当·斯密 / 弗里德里希·哈耶克", en: "Adam Smith / Friedrich Hayek" },
    keywords: { zh: ["供求定价", "价格信号", "自发秩序", "个体激励"], en: ["Supply & Demand", "Price Signals", "Spontaneous Order", "Incentives"] },
    description: {
      zh: "散布于社会无数个体头脑中的地方性知识是任何中央规划部门无法穷尽的。当现实资源分配出现摩擦时，你天然会先去考察底层的『激励机制是否出偏差、自由价格通道是否被人为封死、自由准入门槛是否被高壁垒拦截、供给有没有自由发展的空间』。你更偏爱相信千万商户自发碰撞所带来的敏捷修正能力。",
      en: "You believe decentralized society contains localized, dispersed information that no big centralized planner can fully master. When problems arise, your default intuition tells you to check: Are price controls distorting supply? Are entry barriers too high? You prefer to trust millions of micro-merchants coordinating via open market trade."
    },
    habits: {
      zh: [
        "物价上涨或资源短缺时，本能质问：是不是正常的资本准入或供给生产被人为法规和行政干预限制了？",
        "不赞同简单粗暴的强制锁价或封顶指令，认为这往往会扭曲正常的资源流转并带来次生黑市与短缺故障。",
        "面对社会政策设计，非常在乎长期激励是否相容，即个体追求自我利益的行动是否能自然服务于增进整体社会财富。"
      ],
      en: [
        "When prices spike or scarcity hits, you immediately look for regulations or state controls blocking the supply pipeline.",
        "You reject hard price-cap formulas because they destroy normal signals, bringing immediate black markets and shortages.",
        "You evaluate policy from a long-term incentive standpoint, checking if structural rewards encourage productive effort."
      ]
    },
    blindspot: {
      zh: "对公平交易所依凭的『初始禀赋差距程度』关注度相对较低。容易下意识低估初始资产分配极度悬殊时造成的平民起点不公正，或在面临剧烈系统性崩溃、多重市场失灵重合时防线迟滞。",
      en: "By assuming rational market interactions, you may downplay severe starting endowment inequalities, plus collective failures (like strong externalities or network cartels) that require robust state regulation."
    },
    scholars: [
      {
        name: { zh: "亚当·斯密", en: "Adam Smith" },
        intro: { zh: "古典经济学奠基人，揭示了“看不见的手”如何促成分工合作，强调价格作为协调庞杂社会协作的核心自发机制。", en: "The founding father of classical economics, illustrating how the 'invisible hand' aligns self-interest with social harmony." },
        wikis: [
          {
            label: { zh: "《国富论》维基说明", en: "Wikipedia: The Wealth of Nations" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AF%8C%E8%AE%BA", en: "https://en.wikipedia.org/wiki/The_Wealth_of_Nations" }
          },
          {
            label: { zh: "关于亚当·斯密", en: "Wikipedia: Adam Smith" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E4%BA%9A%E5%BD%93%C2%B7%E6%96%AF%E5%AF%86", en: "https://en.wikipedia.org/wiki/Adam_Smith" }
          }
        ]
      },
      {
        name: { zh: "弗里德里希·哈耶克", en: "Friedrich Hayek" },
        intro: { zh: "奥地利学派代表学者，指出分散知识在社会中的重要性，论证价格体系是汇聚并传递这些不可言传之知识的奇妙网络。", en: "Austrian legend who argued that prices act as a crucial medium, aggregating and transmitting dispersed, tacit human knowledge." },
        wikis: [
          {
            label: { zh: "《知识在社会中的利用》维基说明", en: "Wikipedia: The Use of Knowledge in Society" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%B8%AD%E7%9F%A5%E8%AF%86%E7%9A%84%E5%88%A9%E7%94%A8", en: "https://en.wikipedia.org/wiki/The_Use_of_Knowledge_in_Society" }
          },
          {
            label: { zh: "关于哈耶克", en: "Wikipedia: Friedrich Hayek" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E5%BC%96%E9%87%8C%E5%BE%B7%E9%87%8C%E5%B8%8C%C2%B7%E5%93%88%E8%80%B6%E5%85%8B", en: "https://en.wikipedia.org/wiki/Friedrich_Hayek" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "看不见的手", en: "Invisible Hand" },
        explanation: { zh: "在开放竞争中，无数个体仅仅出于自身自私的利益目标自发合作，却被价格体系无形牵引着，最大化了全社会的真实福祉。", en: "The market mechanism that harmonizes self-interested choices into overall social cooperation and wealth generation without central direction." }
      },
      {
        term: { zh: "分散知识", en: "Dispersed Knowledge" },
        explanation: { zh: "关于时间、地点的具体、局部的实用知识只散布在无数普通参与者的头脑里，没有任何规划机构能够全盘占有并制定无误差的方案。", en: "Practical information regarding local constraints operates in a decentralized fashion, rendering comprehensive centralized maps useless." }
      },
      {
        term: { zh: "排队与短缺", en: "Queuing and Shortages" },
        explanation: { zh: "当价格被人为冻结或压低时，供不应求的现实不会凭空消失，反而会转化为时间排队、找关系交易、送红包等隐性租金消耗。", en: "Imposing price caps does not conjure abundance; it merely substitutes cash premiums with grueling lines and structural rationing." }
      }
    ],
    contrast: {
      target: { zh: "制度权力型", en: "Institutional Power Lens" },
      text: {
        zh: "相比对方探查大资本是否控制交易规则、劳工议价话语权是否倾斜，你更执着于维持不设立准入壁垒、让供给畅行并依靠价格作为核心激励和配置信号机制。",
        en: "Whereas they demand rigid legal frameworks to balance systemic inequality or capital monopolies, you trust that clearing away regulatory entry barriers and leaving price channels unimpeded is the most productive fix."
      }
    }
  },
  {
    id: "macro-stabilization",
    name: { zh: "宏观稳定型", en: "Macro Stabilization Lens" },
    summary: { 
      zh: "个体的理性不代表全局稳定。你优先审视大局失陷与系统性预期雪崩。", 
      en: "A aggregate of rational actors can result in irrational collapses. You prioritize macro health and systemic firewall protections." 
    },
    representative: { zh: "约翰·梅纳德·凯恩斯", en: "John Maynard Keynes" },
    keywords: { zh: ["系统性风险", "有效需求", "逆周期稳定", "宏观调控"], en: ["Systemic Risk", "Effective Demand", "Countercyclical", "Stabilization"] },
    description: {
      zh: "市场可能在局部分散运作时十分优异，但宏观经济绝不只是单个微观主体的简单叠加。当金融信心崩坏、失业预期极度传染时，个体的自利储蓄与紧缩开支不仅不能修复萧条，反而会导向自我扼杀的『消费悖论』。你更赞成公共部门在重大关头，扮演逆周期调节的平准器和大船舵。",
      en: "The macroeconomy is not a simple summation of individual ledgers. When confidence cracks and layoffs loom, individual efforts to hoard cash compress total demand further, leading to depression. You believe the state must behave as a countercyclical balance wheel to anchor baseline security."
    },
    habits: {
      zh: [
        "面对重大危机（如大挤兑、极端技术下行、通缩漩涡），优先把“扑灭信心恐慌”放在绝对第一位，认为纠缠道德风险可以等危机过后研究。",
        "审视社会演进时，习惯先关注宏观大盘的森林：总社会消费意愿、失业红线保障、资金流动性循环。而非满足于单一部门的局部平衡。",
        "赞同在气候治理、灾难兜底等超大范围公地悲剧上，确立顶层的硬性限制指标或公共宏观平准安排。"
      ],
      en: [
        "During major runs or macro shocks, you prioritize extinguishing psychological firestorms immediately over debating long-term moral hazard.",
        "You always look at the forest rather than the single trees—monitoring national consumer sentiment, unemployment thresholds, and fiscal velocity.",
        "You believe that massive multi-region issues like target carbon emissions require hard, top-down state targets rather than just waiting for price magic."
      ]
    },
    blindspot: {
      zh: "特定时刻由于着力于在宏观上大举平险和刺激总需求，可能不经意低估了庞大救市救助资金传导时的层层中间寻租、资本泡沫溢出、长线隐性赤字高企以及扭曲局部优胜劣汰等潜在代价。",
      en: "An unyielding focus on broad aggregates can generate moral hazard, mask local structural blockages, expand state debt liabilities, and fuel inflation bubbles."
    },
    scholars: [
      {
        name: { zh: "约翰·梅纳德·凯恩斯", en: "John Maynard Keynes" },
        intro: { zh: "现代微观/宏观经济学分野 of 奠基人，开创了有效需求不足引起大萧条的理论，主张政府需要实施主动的逆周期需求管理政策。", en: "Father of modern macroeconomics, who identified the 'liquidity trap' and demonstrated why government is required to stimulate recessionary gaps." },
        wikis: [
          {
            label: { zh: "《就业、利息和货币通论》维基说明", en: "Wikipedia: The General Theory of Employment, Interest and Money" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E5%B0%B1%E4%B8%9A%E3%80%81%E5%88%A9%E6%81%AF%E5%92%8C%E8%B4%A7%E5%B8%81%E9%80%9A%E8%AE%BA", en: "https://en.wikipedia.org/wiki/The_General_Theory_of_Employment,_Interest_and_Money" }
          },
          {
            label: { zh: "关于凯恩斯", en: "Wikipedia: John Maynard Keynes" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%9A%84%E7%BF%B0%C2%B7%E6%A2%85%E7%BA%B3%E5%BE%B7%C2%B7%E5%87%AF%E6%81%A9%E6%96%AF", en: "https://en.wikipedia.org/wiki/John_Maynard_Keynes" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "节约悖论", en: "Paradox of Thrift" },
        explanation: { zh: "面临大下行时，每个人或企业为了防风控风险自私地选择缩减开销、囤积储蓄；但当所有人同时这么做，消费大盘雪崩，反而导致所有人收入断崖式下滑、经济自毁。", en: "The aggregate phenomenon where concurrent attempts to increase savings shrink total sales, lowering aggregate income and keeping society trapped in depression." }
      },
      {
        term: { zh: "有效需求", en: "Effective Demand" },
        explanation: { zh: "有真实货币资本支撑、能转化为商品购买的实际总社会需求，其寡多直接决定了工矿产线的运转密度和工人受雇门槛。", en: "The market demand supported by actual monetary spending power, which directly sets the general rate of employment and output." }
      },
      {
        term: { zh: "逆周期调节", en: "Countercyclical Balance" },
        explanation: { zh: "在民间热烈膨胀、资产泡沫飞升时政府紧缩降温；在民间普遍信心惨淡、流动性干涸时大举赤字扩支，充当社会大系统的中和稳定平准器。", en: "The stabilization strategy where authorities cool down hyperactive bubbles and aggressively spend to float the economy during major gluts." }
      }
    ],
    contrast: {
      target: { zh: "价格机制型", en: "Price Mechanism Lens" },
      text: {
        zh: "当风暴降临时，你支持政府及主导机构重拳出击、注水托底、甚至直接启动公共基建计划撑住信心；对方则会高度警惕此类一刀切救助带给个体责任的软约束，担忧巨额补贴扭曲了市场自然的优胜劣汰与相对价格发现。",
        en: "During crashes, you support massive financial injections or direct public staffing programs to secure baseline demand, whereas they emphasize that free adjustment, decentralized adaptations, and painful pricing corrections should clean up speculative mistakes."
      }
    }
  },
  {
    id: "behavioral-reality",
    name: { zh: "行为现实型", en: "Behavioral Reality Lens" },
    summary: { 
      zh: "真实世界里的人绝非总是冷静算计的机器人。你重视行为偏误并倡导“助推”。", 
      en: "Real humans are not calculation algorithms. You focus on biases and champion well-designed nudges." 
    },
    representative: { zh: "理查德·塞勒 / 丹尼尔·卡尼曼", en: "Richard Thaler / Daniel Kahneman" },
    keywords: { zh: ["助推 nudge", "默认选项", "有限理性", "心理账户"], en: ["Nudge", "Default Option", "Bounded Rationality", "Cognitive Biases"] },
    description: {
      zh: "传统的『理性人』假设在真实世界经常失能。人类大脑本能充斥着拖延、多巴胺依赖、短视近视、攀比从众以及羊群效应等认知局限。高谈『让完全理性的个体自行抉择并全盘买单』无视了当代诱导性高频算法、不透明信息的强力劫持。你极力赞同在关键机制、应用和公共产品的决策流中，注入精妙便捷的“默认选项”（Default Preset）和心理学架构，实现四两拨千斤的行为指引（助推）。",
      en: "Real individuals are not walking computation engines. Cognitive bounds mean attention fatigue, mental shortcut biases, and loss aversion dictate real behaviors. Demanding perfect rational agency in a world of addictive modern applications is unrealistic. You advocate for installing subtle default rules and clean interfaces, gently nudging populations toward prudent decisions."
    },
    habits: {
      zh: [
        "分析高频社会痛点（成瘾、疯狂超前网贷、乱买药），率先探究其底层微观决策界面是否包含精心诱导、信息堆载及非理性攀比陷阱。",
        "极其习惯反思细节流程：如果一个方案最有利健康或储蓄，为什么不一开始就将其设为免去主动申请的『默认选项』，从而给懒得折腾的大脑最顺畅的福利路径？",
        "在极端恐慌时（挤兑、非理性抢盐），深入到群体行为心理的正反馈循环、偏见传染路径中去截断其螺旋演进。"
      ],
      en: [
        "When explaining everyday traps (like credit micro-debts or screen addiction), you criticize predatory layouts and platform designs over individual failure.",
        "You ask: 'Why make people navigate hard controls? Let's make the healthy, safe option the default preset so basic human inertia works in their favor.'",
        "You study panic loops (like localized bank scares) as communicative feedback chains, proposing subtle cooling speed-bumps to disrupt irrational panics."
      ]
    },
    blindspot: {
      zh: "特定条件下可能过于高估了针对微观习惯和助推细节的局部调优。当社会的根本堵点是由于法律性行政垄断、资本特权剥削和资源分配严重失衡制约时，过于沉浸在一些小助推中可能沦落为无济大布局的形式点缀。",
      en: "Relying purely on soft nudges and smart designs can occasionally depoliticize severe issues, downplaying massive structural inequalities, raw capital exploitation, or systemic monopolies that require hard coercive intervention."
    },
    scholars: [
      {
        name: { zh: "理查德·塞勒", en: "Richard Thaler" },
        intro: { zh: "行为经济学大师，首创助推理论、默认选项及心理账户假说，证实了微调底层决策架构能以极低成本释放庞大社会红利。", en: "The pioneering father of behavioral studies who established the concept of nudges and analyzed human mental accounting." },
        wikis: [
          {
            label: { zh: "《助推》维基说明", en: "Wikipedia: Nudge" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E5%8A%A9%E6%8E%A8_(%E4%B9%A6%E7%B1%8D)", en: "https://en.wikipedia.org/wiki/Nudge_(book)" }
          },
          {
            label: { zh: "《不当行为》维基说明", en: "Wikipedia: Misbehaving" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%BD%93%E8%A1%8C%E4%B8%BA_(%E4%B9%A6%E7%B1%8D)", en: "https://en.wikipedia.org/wiki/Misbehaving_(book)" }
          },
          {
            label: { zh: "关于理查德·塞勒", en: "Wikipedia: Richard Thaler" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%90%86%E6%9F%A5%E5%BE%B7%C2%B7%E5%A1%9E%E5%8B%92", en: "https://en.wikipedia.org/wiki/Richard_Thaler" }
          }
        ]
      },
      {
        name: { zh: "丹尼尔·卡尼曼", en: "Daniel Kahneman" },
        intro: { zh: "诺贝尔奖得主，提出双系统逻辑：直觉、情绪化的系统1与冷静、深思的系统2。展示了偏失是如何在有限理性的头脑中成系统发生的。", en: "Nobel laureate psychologist who mapped System 1 and System 2 processing, illustrating programmatic cognitive heuristic errors." },
        wikis: [
          {
            label: { zh: "《思考，快与慢》维基说明", en: "Wikipedia: Thinking, Fast and Slow" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E6%80%9D%E8%80%83%EF%BC%8C%E5%BF%AB%E4%B8%8E%E6%85%A2", en: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow" }
          },
          {
            label: { zh: "关于丹尼尔·卡尼曼", en: "Wikipedia: Daniel Kahneman" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7%E5%8D%A1%E5%B0%BC%E6%9B%BC", en: "https://en.wikipedia.org/wiki/Daniel_Kahneman" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "默认选项的力量", en: "Power of Default Options" },
        explanation: { zh: "人类生来趋向于顺应现状，不做额外的设定折腾。一旦注册或者默认配置被改变，极高比例的用户会在无意识状态下跟从此配置，蕴藏巨大行为导向潜力。", en: "The cognitive reality that humans default to the path of least resistance; switching the default choice channels public behavior effortlessly." }
      },
      {
        term: { zh: "助推论 Nudge", en: "Nudge Theory" },
        explanation: { zh: "完全不采用严厉的行政禁绝或巨额经济重罚，仅通过改变选择呈现时的细微结构层次来温柔干涉，帮助其克服理智盲点做出英明决策。", en: "A design philosophy that shapes choices without bans or direct bonuses, steering people to positive behaviors through interface tweaks." }
      },
      {
        term: { zh: "损失厌恶", en: "Loss Aversion" },
        explanation: { zh: "人们在心理上失去100块钱的极端痛苦、失衡感，往往比意外收获100块钱的快乐体验要强烈近乎两倍，从而在决策中极度规避潜在的失去感。", en: "The cognitive asymmetry where human distress over potential losses is significantly greater than the joy of equivalent gains, distorting payoffs." }
      }
    ],
    contrast: {
      target: { zh: "制度权力型", en: "Institutional Power Lens" },
      text: {
        zh: "你更热衷于用温和细润的方式，不强迫选择自由的前提下微调注册栏、添加默认冷却限制解决问题；对方则认为不正面限制巨头算法的所有权结构、不触碰反垄断刚性重罚，一切细枝末叶的便利修正都属于治标不治本、抚平资本压榨的软麻药。",
        en: "You look for elegant micro nudge corrections to align human choices with their true welfare, whereas they claim that unless you structurally change ownership patterns, break monopolistic platform controls, and leverage tough laws, minor design changes are toothless gestures."
      }
    }
  },
  {
    id: "equity-capability",
    name: { zh: "分配能力型", en: "Equity & Capability Lens" },
    summary: { 
      zh: "总量增长是一方面，穷人是否真的拥有实现自我人生的选择能力是你的第一标尺。", 
      en: "Economic expansion is meaningless unless the weak command the genuine freedom and capability to choose their destiny." 
    },
    representative: { zh: "阿马蒂亚·森", en: "Amartya Sen" },
    keywords: { zh: ["可行能力", "福利公平", "起点平权", "社会保障"], en: ["Capabilities Approach", "Equity", "Social Safety Net", "Freedom to Achieve"] },
    description: {
      zh: "衡量一国经济发展最深刻的刻度，既非单纯宏观总值的飞跃，也非静态消费者购买的效率最大，而是每个身处底层的孱弱个体，其真实的生命尊严、健康照护、摆脱压迫的可行能力（Capability）是否充分发展。你深刻在乎社会资源是否切中贫困阶层成长链条的最痛点（生存与教育门槛），给予普通人主宰、追求和自由践行自我人生的真实奋斗底气。",
      en: "You are highly suspicious of abstract GDP growth that papers over severe distributive inequalities. Real economic freedom means concrete capabilities—whether a vulnerable family has safe shelter, standard nutrition, non-predatory credit, and quality basic education to shape their career path. You focus on bottom-up investment over trickle-down growth."
    },
    habits: {
      zh: [
        "面对一切亮丽的大国宏观政策，先本能地追问：这对最底层的寒门家庭、体力劳动、偏远贫困群体究竟带来了什么实惠或磨难？",
        "在遭遇所谓“保总量效率还是保底线分配”的纠结博弈时，总是毫无迟疑地把资源优先倾斜给底层能力兜底倾斜、贫寒教育补贴和全面公共资源倾注。",
        "分配政策上，比起抽象口号，你更极度推荐用实打实的贫寒儿童营养包、全民基本医疗保障、去极度分化的起点教育等行动，筑牢个体搏击一生的初始筹码。"
      ],
      en: [
        "Whenever a shiny reform is proposed, you immediately zoom in on the margins: 'How will underrepresented groups absorb these changes?'",
        "Between rapid expansion gains and robust bottom-of-the-pyramid lifelines, you persistently prioritize deep education assistance, community clinics, and basic survival safety.",
        "You trust concrete capital allocations directly targeting human capabilities—nutrition plans, unconditional education accounts, and medical equity—over broad growth hype."
      ]
    },
    blindspot: {
      zh: "出于对社会底线公平的强烈共情，有时可能不太容易割舍长期生产投资必要的利润激励。在特定时刻如果执行过度税负或超量干预，可能会使私营营商风控环境高企并压制长续活力资本的积极性。",
      en: "An intense empathy for structural distribution goals can occasionally blind you to the essential mechanics of private capital formation, return on risk investment, and market growth drivers."
    },
    scholars: [
      {
        name: { zh: "阿马蒂亚·森", en: "Amartya Sen" },
        intro: { zh: "诺贝尔纪念奖得主，因其对福利经济学、饥荒成因机制的突破贡献著称。提出著名的“可行能力方法”（Capabilities Approach），将发展的本意回归到人的真正实质自由之上。", en: "Nobel laureate renowned for deep welfare analysis, famine mechanics, and the capabilities framework redefine poverty as capability deprivation." },
        wikis: [
          {
            label: { zh: "《以自由看待发展》维基说明", en: "Wikipedia: Development as Freedom" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E4%BB%A5%E8%87%AA%E7%94%B1%E7%9C%8B%E5%BE%85%E5%8F%91%E5%B1%95", en: "https://en.wikipedia.org/wiki/Development_as_Freedom" }
          },
          {
            label: { zh: "关于阿马蒂亚·森", en: "Wikipedia: Amartya Sen" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E9%98%BF%E9%A9%AC%E8%92%82%E4%BA%9A%C2%B7%E6%A3%AE", en: "https://en.wikipedia.org/wiki/Amartya_Sen" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "可行能力", en: "Capabilities Approach" },
        explanation: { zh: "发展真正的衡量不应是冰冷的GDP，而必须转化为穷人在营养健康、受教育水平、参与政治及主宰自命等多维度下的“做何事、具有何等体魄”的真实可行集合。", en: "An evaluative framework prioritizing what individuals can explicitly do and achieve, treating poverty as basic capability deprivation." },
      },
      {
        term: { zh: "起点公平与形式平等", en: "Starting Equity vs Formal Equality" },
        explanation: { zh: "法律或合同名义上赐予所有人均有竞争名校或购买产权的“许可自由”，但初始禀赋极度贫困时，此类字面许可只是镜花水月的空洞契约形式。", en: "Paper rules allowing everyone to form tech empires mean little if severe health deficits and schooling starvation prevent marginal citizens from entering the game." }
      },
      {
        term: { zh: "实质自由", en: "Substantive Freedom" },
        explanation: { zh: "一个人并非静态地作为任由消费摆布的购买者存在，而是作为一个富有选择弹性、免受穷饿债务羁绊并能主动实现其生存意愿的实质性行为人。", en: "The concrete opportunities and wellness state an individual enjoys, expanding their practical agency to live the valued life." }
      }
    ],
    contrast: {
      target: { zh: "创新演化型", en: "Evolutionary Innovation Lens" },
      text: {
        zh: "你跨越每一道试题，只关心当下被大轮子甩下的寒门与平民是否分到了足够的面包与教育火种；对方则热切眺望拉长到数十年尺度下，由少数技术极客与风险资本掀起的颠覆式创造，认为做大蛋糕整体能给后代带来最大的拉动式腾跃。",
        en: "Your core focus is protecting and equipping vulnerable people right now at the margins, whereas they focus on long-term dynamic paradigm shifts led by elite innovators, believing dynamic abundance is the true elevator."
      }
    }
  },
  {
    id: "institutional-power",
    name: { zh: "制度权力型", en: "Institutional Power Lens" },
    summary: { 
      zh: "资本市场绝非中立。谁制定了契约规则，谁就在支配财富的所有权与成本转嫁。", 
      en: "Markets are never blank slates. The balance of rules and structural power determines who bears the risks and rents." 
    },
    representative: { zh: "琼·罗宾逊 / 索尔斯坦·凡勃伦", en: "Joan Robinson / Thorstein Veblen" },
    keywords: { zh: ["议价地位", "规则结构", "市场集中", "成本转嫁"], en: ["Bargaining Power", "Institutional Rules", "Monopoly Rents", "Cost Shift"] },
    description: {
      zh: "你反感『市场运作皆是自然竞争』这类完美掩护。你清醒洞见一切买卖合同层底最底层的真实本质：法律赋权所有制、缺失的劳动工会、排他算法集中度编织成了极度不对称的契约支配格。没有反垄断重拳、没有集体议价权托底，掌握垄断特权的大资本就能毫无顾忌地转嫁风险、压榨寻租。社会解题法唯有直面其底层利益权力构型并推行大手术制度规约。",
      en: "You naturally dismiss mild apologies that trace market transactions to mechanical equilibrium. Economic setups are constructed battles: legal protections, algorithm copyrights, and patent monopolies. Without equalizing institutions, the powerful shift the burden to decentralized individuals. Progress requires altering asymmetric labor compacts and hard oversight on giant rents."
    },
    habits: {
      zh: [
        "每当某些平台或品牌录得惊天暴利，第一时间审视：这到底是因为生产力爆发带来的自愿奖励，还是利用集体博弈地位悬殊进行的超常算法及法权寻租压榨？",
        "对依靠纸面自律倡导的“企业社会责任理念”毫无兴趣，坚信法律、反垄断刚性介入与增加基层民主决策委员会分配才是最可靠的强力契约盾牌。",
        "面对底层劳方的挫败时，迅速追踪背后的所有权流向，直切阻碍其自我纠偏的深水特权利益网格。"
      ],
      en: [
        "When mega mergers or algorithms grab astronomical profits, you ask: 'Is this dynamic productivity, or are they leveraging legal privileges to choke rivals?'",
        "You bypass moralizing ads or corporate social responsibility brochures, demanding structural antitrust laws and labor union agreements.",
        "When analyzing gig workers trapped in delivery grids, you analyze the software copyrights, and search for the direct capital concentration nodes."
      ]
    },
    blindspot: {
      zh: "因为过度防微杜渐地审查和提防不对称特权，极可能把原本属于温和的技术演进和敏捷企业行为通通纳入极其敏感、严苛的司法诉讼程序之中。如果制度性紧箍咒繁多过密，很有可能会极度窒息掉前沿尖端领域必需的生长冲力与野蛮探路效率。",
      en: "A continuous focus on searching for rent-seeking biases can overregulate voluntary contracts, burying dynamic enterprise activities in compliance costs and strangling market entry."
    },
    scholars: [
      {
        name: { zh: "琼·罗宾逊", en: "Joan Robinson" },
        intro: { zh: "新剑桥学派代表人物，打破完全竞争理论，深入研究买方独占（Monopsony）、市场集中与不完美世界中的隐性要素压榨细节。", en: "Pioneering Cambridge legend who dismantled pure competition models, proving oligopoly and monopsony distort natural rewards." },
        wikis: [
          {
            label: { zh: "《不完全竞争经济学》维基说明", en: "Wikipedia: The Economics of Imperfect Competition" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89%E7%BB%8F%E6%B5%8E%E5%AD%A6", en: "https://en.wikipedia.org/wiki/The_Economics_of_Imperfect_Competition" }
          },
          {
            label: { zh: "关于琼·罗宾逊", en: "Wikipedia: Joan Robinson" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%90%BC%C2%B7%E7%BD%97%E5%AE%BE%E9%80%8A", en: "https://en.wikipedia.org/wiki/Joan_Robinson" }
          }
        ]
      },
      {
        name: { zh: "索尔斯坦·凡勃伦", en: "Thorstein Veblen" },
        intro: { zh: "制度学派先驱，剖析了企业所有制与金融投机势力的冲突。在《有闲阶级论》中剖析了“炫耀性消费”等受社会规范 and 制度框架支配的行为模式。", en: "Revered founder of institutional school who exposed predatory finance and showed how social consumption patterns echo structural power hierarchies." },
        wikis: [
          {
            label: { zh: "《有闲阶级论》维基说明", en: "Wikipedia: The Theory of the Leisure Class" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E6%93%89%E9%96%92%E9%98%B6%E7%BA%A7%E8%AE%BA", en: "https://en.wikipedia.org/wiki/The_Theory_of_the_Leisure_Class" }
          },
          {
            label: { zh: "关于凡勃伦", en: "Wikipedia: Thorstein Veblen" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%B4%A2%E5%B0%94%E6%96%AF%E5%9D%A6%C2%B7%E5%87%A1%E5%8B%83%E4%BC%A6", en: "https://en.wikipedia.org/wiki/Thorstein_Veblen" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "买方要素垄断", en: "Monopsony Power" },
        explanation: { zh: "当全行业只有寥寥几家超级平台、大型雇主招聘该技能时，劳动者和供应商在谈判上完全丧失了转身离开的筹码，只得被迫委屈接收极为压榨的议价克扣条件。", en: "A market situation where single dominant buyers dictate wages, leaving decentralized workers with zero leverage." }
      },
      {
        term: { zh: "制度化寻租", en: "Institutional Rent-Seeking" },
        explanation: { zh: "大企业并不通过提升产线的效率和创新降本获取溢价，而直接游说修法、堆高专利、排挤草根对手准入，巧借国家法权保护躺平攫取稳定超额利润。", en: "Securing income not through innovation or service efficiency, but by lobbying, manipulating law, and restricting competitive entries." }
      },
      {
        term: { zh: "倾斜的契约规则", en: "Asymmetric Contracts" },
        explanation: { zh: "由于雇佣契约或线上注册许可、条款设计完全由法务军团和核心巨头拟就，弱势劳方便被迫在“不接受就滚蛋”的生存压力下签字，自吞大部分外溢风控损失。", en: "The legal designs that pass liabilities to independent workers, leaving them with all the operational variables and zero cover." }
      }
    ],
    contrast: {
      target: { zh: "价格机制型", en: "Price Mechanism Lens" },
      text: {
        zh: "你坚信，没有平等的刚性制度话语权（工会、反垄断诉讼、监管限制），自由交换只是一句单向压榨的伪虚词；而对方坚持认为自由准入、减负减税和支持充分的供给竞逐才是保护平民不被某一家卡死、提高报酬的最优机制。",
        en: "You point out that without dynamic legal protections or union blocks, 'free consent' contracts function as systemic leverage for capital, whereas they argue that dropping entry barriers and scaling competition is what shields workers."
      }
    }
  },
  {
    id: "evolutionary-innovation",
    name: { zh: "创新演化型", en: "Evolutionary Innovation Lens" },
    summary: { 
      zh: "经济绝不是在算盘上算计分蛋糕，而是在颠覆性科技与创造性破坏中滚滚向前。", 
      en: "The economy is not a static ledger of dividing existing pies, but an evolutionary engine of creative destruction." 
    },
    representative: { zh: "约瑟夫·熊彼特", en: "Joseph Schumpeter" },
    keywords: { zh: ["创造性破坏", "技术范式", "企业家精神", "演化突变"], en: ["Creative Destruction", "Enterprise", "Paradigm Shift", "Evolutionary Evolution"] },
    description: {
      zh: "用孤立、静态甚至一味妥协保护的教条模型去阻止社会必然发生的技术范式突变是在逆演化而行。决定一个国家兴衰大局的，绝不是静态维持一个绝对安稳分派蛋糕的方案，而是不容迟疑地重仓支持颠覆科技、风险科研及去边缘化突围，让全新的高效率模式（如绿能替换化石能、新AI代替传统劳动力）野蛮洗牌旧有没落的生产格局。",
      en: "Evaluating progress through static mathematical allocations is a path to social stagnation. Economic growth is an evolutionary mutation process driven by daring inventions and paradigm shifts. The ultimate test of long-run prosperity is whether standard codes and laws encourage wild risk experiments, letting new systems (like electric replaces fuel, algorithms simplify paper logs) sweep away outdated entities."
    },
    habits: {
      zh: [
        "每当发生重大的行业性失业和传统大品牌垮台时，本能抗拒对这些陈旧没落模式实施不计代价的形式死保，宁愿加速资源向新范式的转换和解离。",
        "将宏观思考拉长到一至三代人的演进史尺度，对那些在陈旧规制定法边缘探路、敢于在废墟上对旧有势力叫号的创新企业家，给予极浓厚包容厚望。",
        "面对严重污染、巨头垄断、能源约束等公地悲剧上，比起密集禁令绳索，更企盼从硬核科研创新（如核聚变、超材料、无人工厂）上秒杀传统化石要素。"
      ],
      en: [
        "In waves of industrial decline, you avoid funding expensive state bailouts for dead-end skills, seeking instead swift redeployments to frontier labs.",
        "You zoom out to long decades of historical trajectory, looking with intense curiosity at risk-taking pathfinders and experimental startups on the regulation fringes.",
        "For global issues like carbon spikes, you favor hyper-investment in heavy R&D (such as modern fission) that scales cheaper clean alternatives to force the transition."
      ]
    },
    blindspot: {
      zh: "对未来科技和企业家长线腾飞范式有种迷恋式的崇拜极可能让你不够体察和温和呵护那些当前被“创造性破坏”巨轮压在下面碎裂的、缺乏转轨过渡手段的悲凉普通大众当下的人生权益。",
      en: "A continuous fascination with futuristic breakthroughs and technological trends can desensitize you to the immense human collateral damage faced by workers crushed overnight in Schumpeterian gales."
    },
    scholars: [
      {
        name: { zh: "约瑟夫·熊彼特", en: "Joseph Schumpeter" },
        intro: { zh: "演化与增长流大师，开创了“创造性破坏”（Creative Destruction）这一深刻术语，指出正是充满挑战与质变的企业家精神，构成了资本主义最核心的蓬勃长程动力轴。", en: "Revered pioneer of evolutionary economic development, who synthesized the concept of 'creative destruction' and the central role of entrepreneurs." },
        wikis: [
          {
            label: { zh: "《资本主义、社会主义与民主》维基说明", en: "Wikipedia: Capitalism, Socialism and Democracy" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E3%80%81%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E4%B8%8E%E6%B0%91%E4%B8%BB", en: "https://en.wikipedia.org/wiki/Capitalism,_Socialism_and_Democracy" }
          },
          {
            label: { zh: "关于约瑟夫·熊彼特", en: "Wikipedia: Joseph Schumpeter" },
            url: { zh: "https://zh.wikipedia.org/wiki/%E7%BD%A6%E7%94%9F%E5%A4%AB%C2%B7%E7%86%8A%E5%BD%BC%E7%89%B9", en: "https://en.wikipedia.org/wiki/Joseph_Schumpeter" }
          }
        ]
      }
    ],
    concepts: [
      {
        term: { zh: "创造性破坏", en: "Creative Destruction" },
        explanation: { zh: "经济发展绝非让面包店多做10%的面包，而是通过内燃机淘汰马车、人工智能颠覆行政档案整理等不断自内向外大举质变清洗旧生产基础的过程。", en: "The process of industrial mutation that incessantly revolutionizes the economic structure from within, destroying the old one and creating the new one." }
      },
      {
        term: { zh: "企业家精神", en: "Entrepreneurship" },
        explanation: { zh: "不是指收得温和利差的常态商人，而是指在前景晦暗无光、制度百般排斥的险境下，敢于押注高风险范式、整合要素突破未知生态的草根探险人。", en: "The creative drive to execute brand-new combinations—new products, materials, or organizations—against standard conventions and high risk." }
      },
      {
        term: { zh: "技术范式 Paradigm", en: "Technological Paradigm" },
        explanation: { zh: "在特定历史阶段支配一国全部行业、直接界定生产模板、分工层级及契约规则最核心甚至不可逆的工程基础和研发路径机制。", en: "The overarching scientific and technological template shaping industrial rules, defining what is feasible and setting modern jobs." }
      }
    ],
    contrast: {
      target: { zh: "分配能力型", en: "Equity & Capability Lens" },
      text: {
        zh: "你为长线颠覆、企业家星火与下一次技术范式换代欢欣呼号，甚至在所不惜容忍部分转换阵痛；对方则片刻不离对于遭遇转型阵痛、起点资本和受教环境严重匮乏之凡人个体的基础生计照护托底。",
        en: "You look downstream to long-run technological breakthroughs and revolutionary shifts driven by daring companies, while they demand solid social platforms, schooling, and direct aid for families falling through the cracks."
      }
    }
  }
];
