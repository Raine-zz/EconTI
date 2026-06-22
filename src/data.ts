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
          zh: "支持和引入采用先进智能物流和集约化冲泡等高效率平替方案，发挥长期产业创新升级的降本优势。",
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
      zh: "多处小体量城商行和信用社卷入坏账纠纷并引致局部挤兑恐慌势头，如何遏阻系统性震荡？",
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
          zh: "由政府金融监管与央行果断介入，履行最后贷款人职责（Lender of Last Resort），无限提供大额信用兜底，在瞬时稳定市场信心大局。",
          en: "Declare full stability posture. The central bank must serve as 'lender of last resort', pouring swift emergency credit injections to halt panic."
        },
        weights: { macroStabilization: 1.5 }
      },
      {
        text: {
          zh: "理解银行挤兑通常是恐慌情绪（兽性冲动）极速传染的反应。应暂设小幅业务阻漏，调低临柜人员每日提取上限，通过小提示抚慰信心。",
          en: "Calm animal spirits. Since bank panic is heavily psychological, extend the bank app's waiting times and provide simple cues to break the stampede."
        },
        weights: { behavioralReality: 1.5 }
      },
      {
        text: {
          zh: "挤兑暴露了底层资本的所有权控制弊端，借此机会对这些金融机构进行深度监管听证、推行重大信用资产重组并追究股东的欺诈议价罪责。",
          en: "Investigate structural exploitation. Execute rigorous administrative audits into the financial elites and reorganize asset ownership boards."
        },
        weights: { institutionalPower: 1.5 }
      }
    ]
  },
  {
    id: 9,
    title: {
      zh: "社会财富跨度极宽且出现了不容忽视的前端固化现象，改善这一局面的核心支点应当放在哪里？",
      en: "Wealth divides have widened, and initial environments have hardened. Where should policy tilt to build upward mobility?"
    },
    choices: [
      {
        text: {
          zh: "重点提升弱势下一代的可行受教育条件、儿童营养，并完善全民基础基础生活兜底保障，让每个人自出生起便能拥有公平的参与能力。",
          en: "Direct wealth into early schooling, health, and minimum income to upgrade marginal children's capability to discover their talent."
        },
        weights: { equityCapability: 1.5 }
      },
      {
        text: {
          zh: "重构企业法和超额税收规则。重点解决垄断平台、超大资本财团和劳动者之间在组织话语和权利博弈上的不均，纠错不合规则的寻租差富。",
          en: "Introduce progressive inheritance taxes and curb platform rent-seeking to level the structurally skewed playing field between labor and capital."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "应当警惕严酷的一刀切财产平复挫伤了关键财富创造者的长线创业热情，需通过培育生机勃勃的私营竞争来拉高蛋糕体积与创造大量就业岗位。",
          en: "Avoid heavy punitive wealth levies that disincentivize job creators. Maintain competitive dynamics to scale the pie and boost baseline employment."
        },
        weights: { priceMechanism: 1.5 }
      },
      {
        text: {
          zh: "单纯靠行政转移不解决长期活力。应当鼓励最激进的技术跃迁和颠覆性新兴风口（如太空探索、新能源风口），通过竞争更新让社会阶层自演进。",
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
          zh: "数字资产被大品牌绝对操纵。应制定前瞻算法透明法，保障网民可以就自己的个人数据产权进行独立诉讼、收回自己的数字劳务受偿权。",
          en: "Legislate clear digital consumer guidelines. Force transparency in algos and give users legal control and property rights over their data assets."
        },
        weights: { institutionalPower: 1.5 }
      },
      {
        text: {
          zh: "在多巴胺偏好中存在强烈的近视偏好（短视盲区），应该立法让平台开通一键自主添加：“每日默认 1 小时限停”、“无推荐清白版”的易得预设开关。",
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
          zh: "这本质上是每个用户理性决策与有限时间约束相互适应的过程，消费者花费时间去换多巴胺是个体主观效用的自主选择，无需行政过度监管。",
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
      zh: "你不见得反对一切国家政策，但在你心中，散布于社会无数个体头脑中的地方性知识是任何中央规划部门无法穷尽的。当现实资源分配或者民生出现摩擦时，你天然会先去考察底层的『激励机制是否出偏差、自由价格通道是否被人为封死、自由准入门槛是否被高壁垒拦截、供给有没有自由发展的空间』。你更偏爱相信千万商户自发碰撞所带来的敏捷修正能力。",
      en: "You do not necessarily hate public systems, but you believe decentralized society contains localized, dispersed information that no big centralized planner can fully master. When problems arise, your default intuition tells you to check: Are rent caps causing storage shortages? Are standard costs warped? You prefer to trust millions of micro merchants self-negotiating through market transactions."
    },
    habits: {
      zh: [
        "物价上涨或资源短缺时，你习惯率先质问：是不是正常的资本准入或原料供给被人为干预限制了？",
        "你本能不赞同简单粗暴的强制锁价或封顶指令，认为这往往会带来严重的二次黑市与效率滑坡。",
        "面对社会性政策设计，你非常在乎：是不是有合理的利益挂钩，个体在长线上到底有没有创新的正向回报（激励机制）。"
      ],
      en: [
        "When things look costly or scarce, you focus on whether private supply pipelines are blocked by excess regulations.",
        "You reject hard price-freezing formulas because you worry they lead immediately to hidden black markets and shortages.",
        "You prioritize robust marginal reward designs, trusting that people innovate best when they directly profit from their efforts."
      ]
    },
    blindspot: {
      zh: "有时候过于看重价格和自主供求，容易下意识低估初始资产分配极度悬殊时造成的起点极度不公正，或在面临剧烈系统性崩溃、市场失灵重合时容易显得防线迟滞。",
      en: "Your focus on free market trade can cause you to overlook severe initial endowment inequality or market breakdowns (like externalities, structural monopolies) where state actions are functionally essential."
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
      zh: "在你看来，市场可能在局部分散运作时十分优异，但宏观经济绝不只是『微观个体的加总』。当金融信心崩坏、失业预期极度传染时，个体的自利储蓄不仅不能修复萧条，反而会导向自我扼杀的『节约悖论』。你更赞成公共决策部门在危险关头敢于大展神威，承担最后贷款人（Lender of Last Resort）与逆周期调节的平准器大角色。",
      en: "In your view, while local markets can allocate widgets well, the macroeconomy is not a simple summation of individual ledgers. When confidence cracks and layoffs loom, individuals hoarding liquidity can make depression worse. You believe a big government must act as a balance wheel, using proactive fiscal budgets and prompt lender-of-last-resort interventions to arrest system failures."
    },
    habits: {
      zh: [
        "面对重大危机（如挤兑、大下行和结构替代失业），你非常在乎信心的大局。你认为相比纠结道德风险，率先扑灭信心的恐慌大火才是第一优先级。",
        "观察社会发展时，你极具系统演进的整体观，常优先关注诸如：总消费意愿、失业红线、宏观债务、资金整体循环等系统健康因子。",
        "在处理气候保护等超大型宏观公地悲剧时，你会首先认为统筹规划层面的硬杠杠指标是最强有力的底线防火墙。"
      ],
      en: [
        "During large runs or deep systemic shocks, you prefer putting out the panic bonfire immediately over worrying about moral hazard constraints.",
        "You always look at the forest rather than the single trees—monitoring national consumer sentiment, unemployment thresholds, and fiscal velocity.",
        "You believe that massive multi-region issues like target carbon emissions require hard, top-down state targets rather than just waiting for price magic."
      ]
    },
    blindspot: {
      zh: "有时极度看重保护宏观总量和扑灭燃眉危机，可能会忽略救助政策落地时的巨大损耗、执行部门的配置低效以及长线累积的多重隐性债务膨胀风险。",
      en: "A continuous focus on broad aggregates and emergency stimulus can hide local resource misallocations, lead to bloated bureaucracies, or delay vital market corrections."
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
      zh: "你完全不能信服所谓『万物皆能绝对计算』的完备理智说。在你眼里，拖延、沉迷手机、盲目攀比、羊群恐慌和买高买低的认知偏误，是生动而真实的凡人常态。那些只在嘴上宣传『为自己的行动彻底买单』的立场，低估了当代各种信息爆炸与大脑本能弱点。你更看赞成通过在应用平台或社会政策界面中，设计良性便利的默认预设选项来轻度助推（Nudge）大众，用四两拨千斤的技术润物细无声地造福普通决策者。",
      en: "You are highly skeptical of standard economics' 'hyper-rational economic man'. To you, attention fatigue, status-seeking, panic stamps, and immediate-gratification are human realities. Insisting on 'individuals bearing ultimate liability' ignores modern cognitive structures. You support designing smart 'default settings' in user interfaces and social choices backends to softly nudge society without choking off choice."
    },
    habits: {
      zh: [
        "面对社会高频弊端（如青少年游戏成瘾、医疗就读焦虑等），你总是会从『信息不对称、决策界面太诱导、用户意志力近视偏误』的真实体验入手剖析解题法。",
        "你习惯先问：既然人人都想避开陷阱，那底层报考或订阅界面能不能把『正向良性的健康方案』设定为省心不需要主动折腾的默认选项？",
        "在危机席卷引发群体恐慌的那一分钟，你会特别关注人群的非理性心理正反馈螺旋，尝试用平稳阻隔技术物理上减缓负反馈的狂热蔓延速度。"
      ],
      en: [
        "In viral feedback loops (like platform addiction), you focus on choices layout, cognitive fatigue, and information designs rather than assuming individuals are perfectly resilient.",
        "You ask: 'Why make users search for safety? Let's make the healthy option the easy default option that works without extra head-scratching.'",
        "You watch the psychological mechanics of stampedes or consumer runs, trying to design physical speed bumps to break the positive panic feedback loops."
      ]
    },
    blindspot: {
      zh: "有时候过于沉溺和依附于利用微观行为学的精妙助推，也许会模糊或淡化了对由于阶级规则固化、行业行政资本垄断等重大制度特权硬骨头的宏观斗争干预力量。",
      en: "Relying purely on soft nudges and smart design choice architecture can occasionally trivialize structural class barriers, lack of fundamental public services, or hard industrial monopolies."
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
      zh: "你最不赞成用冰冷的一笔大国 GDP 增长总额来遮盖局部分配失调的现实伤痕。你认为，衡量一种经济行为真正的神圣刻度，是看底层极其孱弱的人在面对生活的狂飙突进时，是否有其作为独立人的尊严、受教育尊严、健康照护、摆脱极度债务压榨、参与体面协作的可行能力（Capability）。比起只强调静态效率最大，你永远更关心弱势群体是否真正拥有可以去自由选择理想人生轨迹的充实可行权。",
      en: "You refuse to let a rosy headline GDP growth figure cover real distributional wounds. Across all policies, your guiding meter is Amartya Sen's 'capability'—does a migrant worker have real food security, healthcare, spatial access, and financial capabilities to chart their life? It's not just about letting consumers buy; it's about providing the base security required for actual liberty."
    },
    habits: {
      zh: [
        "无论分析哪类社会问题，你最关心的一行核心指标永远是：这项新变革对底层贫弱、留守群体意味着什么？他们到底是搭上便车还是更深处断链？",
        "你在效率与底线保障博弈时，永远会毫不犹豫把最低底线扶助、寒门能力赋能、平权教育饱和列在最优高优先级。",
        "在分配方案上，相比于虚幻的口号倾向，你更相信用实打实的公共教育基金投向、穷人住房直补和极低门槛全民兜底等资源，直接赋予个体真实战斗资本。"
      ],
      en: [
        "No matter the business policy, your primary query is: 'What are the micro effects on those at the margins? Do they share the gains or suffer in silence?'",
        "You always vote to place baseline child assistance, basic clean health, and educational equity ahead of high-end corporate efficiency gains.",
        "You prioritize direct, structural investments in the weak—unconditional direct learning allowances, social-housing credits, and state medical capacity."
      ]
    },
    blindspot: {
      zh: "对保障底线分配的热忱由于太过感同身受，可能在特定时刻难以割舍短期成本。当过度低估了由于高强度保护对全社会私人长期营商风控预期的潜在压抑后，容易对经济整体活力带来挑战。",
      en: "Your deep passion for bottom-up equity can sometimes lead you to undervalue the critical importance of private capital formation, incentives to take risk, and business growth engines."
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
      zh: "你天生排斥对『市场运行只是自然法则』这类文饰借口。你敏锐而清醒地看穿一切买卖交换背后的本质：法律、工会缺位、平台信息支配和庞大的集团寻租构成了倾斜的巨大角力场。如果没有制度性话语权制衡，强势方就能随时把风险甩给灵活就业人员，把亏损抛售给全社会。对你而言，调节社会矛盾的根本良策是重构底层的契约制度、赋予劳动博弈话语尊严，并对不对称特权阶层实施真正长效制度化监督。",
      en: "You naturally reject the platitude that 'the market outcome is just natural law'. You dissect transaction setups for what they are: asymmetric arenas where labor guilds, patent legal blocks, algorithm monopolies, and financial interests compete. Without institutional offsets (like unions, tough laws, antimonopoly regimes), the strong dump risks onto gig workers and shift liabilities to taxpayers. True progress is about correcting asymmetric laws."
    },
    habits: {
      zh: [
        "面对资本或者新型巨头品牌（如科技大厂、外卖平台、大地主）的暴利，你通常第一反应会探明：这本质上是不是利用了规则不对称和集体议价权悬殊下的变相压榨寻租？",
        "你不相信没有牙齿的纯主观道德自律倡导，你只崇尚以铁腕反垄断、劳动合同集体谈判权立法与增加平民表决监督委员等深水区刚性契约武器。",
        "面对普通人的窘境（如零工被锁死、名医号被垄断），你总是会寻找这背后长链资本所有权结构、行业勾连等底层利益网格并尝试进行制度规约。"
      ],
      en: [
        "When big corporations command spectacular profit margins, you immediately ask: 'Is this dynamic productivity, or is it rent-seeking enabled by asymmetric rules?'",
        "You place no faith in soft corporate social responsibility ads, advocating instead for strict antimonopoly regulation, labor collective compacts, and voter surveillance.",
        "When analyzing normal struggles (like riders trapped in grids), you trace who controls the source code, who owns the patents, and who enjoys regulatory shielding."
      ]
    },
    blindspot: {
      zh: "由于对资本和权力不对称倾斜有着长线的戒备，有时候容易陷入全面防微杜渐的监管思维，若规则编制过密、干预契约自由过繁，反而会压缩了行业原本需要的野蛮生长活力和前沿突围效率。",
      en: "Your constant suspicion of power imbalances can pull you into overly dense, rigid micro-management, which can strangle free contracting, discourage high growth experiments, and freeze enterprise flexibility."
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
      zh: "你最不赞成用孤立静态的模型、守旧保守的规则去阻碍社会本该发生的新物种质变。在你眼里，当面对AI可能带来的技术下岗、价格机制在极端状态下的失能时，所有的『维持现状平摊保障』都是在削弱全社会的中长线生命活力。真正决定一个文明兴衰的不是静态地实现百分百无偏误完美，而是敢于在废墟中通过大胆的企业家精神、尖端科研探索、去中心化的小范围突围，让全新的更高效模式和新技术范式自发诞生、野蛮生长并用物种升级自然洗牌陈旧势力。",
      en: "You reject narrow static views of economic policy. In your view, trying to freeze technologies in their tracks to save obsolete careers weakens a country's baseline competitive gene pool. What drives prosperity is Schumpeter's 'creative destruction'—bold entrepreneurs, venture capital, and open-source mutations. You look for high-risk tech jumps to push humanity forward, rather than lingering on dividing a shrinking pie."
    },
    habits: {
      zh: [
        "当发生行业性冲击时（如技术性失业、日常传统业务遭到平台更迭），你更渴望看到社会资源自主流向新颠覆机会，而非不计代价死保陈旧低效产能。",
        "你习惯性将观察维度拉到长达十到二十年的生态演进尺度，极度看好那些看似在制度边缘诞生、敢于向既得利益者老旧规则叫板、探索未知边界的企业突围者。",
        "面对重污染或者垄断，你最期待的从来都不是严苛捆绑企业手脚的繁多监管，而是由底层完全颠覆性的清洁替换（如清洁核能）在性价比上秒杀传统化石能源。"
      ],
      en: [
        "During industrial shifts, you advocate for speedier reallocations of capital and labor to emerging sectors, rather than keeping non-viable traditional jobs on life support.",
        "You always look decades down the road, believing edge inventions and open-ended, messy start-up experiments are what obsolete old monopolies.",
        "For ecological or massive power overreaches, you eagerly support creating game-changing technical alternatives (like decentralized green tools) that win purely on value."
      ]
    },
    blindspot: {
      zh: "由于习惯了对技术极客和颠覆质变的长线迷之笃信，在特定时期内，你也许会不经意忽略了那些因为在『创造性破坏』狂澜中被无辜拍碎、缺乏适应缓冲而被碾落在边缘的悲情真实凡人利益。",
      en: "Your high-altitude focus on historical trajectories and technological progress can blind you to the heavy human wreckage left behind in the short-run waves of creative destruction."
    }
  }
];
