import { Question, MindsetType } from './types';

export const MINDSETS: MindsetType[] = [
  {
    id: "market-coordination",
    name: { en: "Market Coordination Type", zh: "市场协调型" },
    summary: { 
      en: "You treat price mechanisms as spontaneous coordination miracles of human civilization.",
      zh: "你将价格机制视为人类文明在去中心化模式下自发协作的奇迹。"
    },
    representative: { en: "Adam Smith / Friedrich Hayek", zh: "亚当·斯密 (Adam Smith) / 弗里德里希·哈耶克 (Friedrich Hayek)" },
    representativeBio: {
      en: "Adam Smith defined the 'Invisible Hand', showing decentralized exchange creates wealth. Hayek proved price is a decentralized system to process scattered information, solving coordinate challenges of human society.",
      zh: "亚当·斯密开创了“看不见的手”理论，展示去中心化交易如何创造财富。哈耶克进一步指出价格是由无数分散的人自发传递供需信号的通信网络，远比集中计划敏捷。"
    },
    keywords: {
      en: ["Spontaneous Order", "Price Signal", "Division of Labor", "Decentralized Action"],
      zh: ["自发秩序", "价格信号", "劳动分工", "去中心化行为"]
    },
    description: {
      en: "You have strong faith in spontaneous market mechanisms. You believe millions of individuals acting locally on local price signals produce order and wealth far superior to any top-down master design. For you, top-down coordination should only act as a neutral framework of rules, rather than dictating actual trading results.",
      zh: "你对自发的市场机制抱有极强的信心。你相信数以百万计的个体根据局部价格信号进行决策，自然演化出的社会秩序和繁荣程度，远非任何自上而下的完美规划所能及。对你而言，集中计划往往赶不上市场参与者灵活调整的效率。"
    },
    strengths: {
      en: [
        "Deep respect for organic complexity and decentralization, preventing system-wide plans that backfire.",
        "Clear grasp of how prices guide resources efficiently without needing a saintly or expert referee.",
        "Saves enormous administrative and supervisory heavy costs by prioritizing market adjustment."
      ],
      zh: [
        "尊重复杂系统的有机自发演化，极力避免好心办坏事、代价高昂的集中决策扭曲。",
        "敏锐地理解价格是如何自动调节供需、引导资源最高效流动的，无需完美且居高临下的设计者。",
        "优先利用价格和交易发现方案，省去繁冗庞大的行政与监管隐性成本。"
      ]
    },
    blindspots: {
      en: [
        "May underestimate market gaps, public goods shortages, or negative externalities like long-term carbon crises.",
        "Could ignore initially skewed asset allocations and bargaining power gaps.",
        "Sometimes treats systemic blockages as merely local regulatory interferences."
      ],
      zh: [
        "可能低估市场无法解决的外部性（如碳排放等环境危机）和公共物品天然供给不足的问题。",
        "容易忽视由于初始禀赋、资本积累和市场支配势力不对等所导致的实质性议价权差距。",
        "有时容易不加区分地把所有的系统性失灵，一律归结为政府或非市场力量的过度干预。"
      ]
    },
    concepts: [
      { name: "Invisible Hand", desc: { en: "How self-interested actions lead to optimal societal resource allocation.", zh: "个人在追求自身利益的同时，受无形机制指导实现了促进社会整体利益的效果。" } },
      { name: "Spontaneous Order", desc: { en: "Order emerging without intentional top-down design (e.g., markets, language).", zh: "没有中央指令或特意设计，多主体自发产生的精妙稳定秩序（如市场、语言）。" } },
      { name: "Information Problem", desc: { en: "Knowledge is highly localized and fragmented, central planning cannot aggregate it.", zh: "社会性决策所需的具体知识分散且具有局部性，任何中央权威都无法完美收集并处理。" } }
    ],
    idealScores: {
      marketVsIntervention: 0.9,
      incentiveVsPower: 0.5,
      rationalVsBehavioral: 0.4,
      efficiencyVsEquity: 0.7,
      localVsCentral: 0.8
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4"
  },
  {
    id: "free-choice",
    name: { en: "Individual Choice & Incentive Type", zh: "自由选择型" },
    summary: { 
      en: "You treat human actions as rational reactions to costs, returns, and behavioral incentives.",
      zh: "你习惯将各种人类活动转化为对成本、收益与核心激励机制做出的理性反应。"
    },
    representative: { en: "Milton Friedman / Gary Becker", zh: "米尔顿·弗里德曼 (Milton Friedman) / 加里·贝克尔 (Gary Becker)" },
    representativeBio: {
      en: "Friedman defended consumer freedom and monetary rules. Becker expanded economic tools to daily choices, proving marriage, crime, and human capital are products of incentive assessment.",
      zh: "弗里德曼是自由市场竞争与个人选择权的坚实捍卫者。贝克尔将微观经济学分析开创性地运用到家庭、犯罪、族群歧视等社会学领域，证明人类行为遵循着统一的成本激励抉择。"
    },
    keywords: {
      en: ["Incentives", "Opportunity Cost", "Human Capital", "Consumer Sovereignty"],
      zh: ["激励机制", "机会成本", "人力资本", "消费者主权"]
    },
    description: {
      en: "Your thinking focuses on individuals rather than labels. You believe the best way to explain human cooperation and development is to analyze how people trade off options based on their constraints, payoffs, and individual costs. To resolve complex public problems, your primary focus is changing the underlying incentive structure rather than appealing to pure moral solidarity.",
      zh: "你的思维始终聚焦于具体的行动主体，而非宏大集体的道德标签。你认为解释一切人类合作、行为与制度最可信的钥匙，就是去观察人们在面临有限资源和真实成本制约下，如何对边际得失做出反应。重新理顺激励机制往往是解决社会问题的关键。"
    },
    strengths: {
      en: [
        "Superb ability to predict human behavioral responses, cutting through idealistic but failing policies.",
        "Empowers local users and consumers instead of strengthening management or monopoly organizations.",
        "Deep focus on opportunities, treating human skills and education as high-yield human capital investments."
      ],
      zh: [
        "卓越的行为预测能力，能凭理性的成本收益路径敏锐看穿那些出于好意但违背人性的空头政策。",
        "崇尚消费者主权，主张以此建立充分竞争，把真正的决定抉择权交还给最终使用者和民众本身。",
        "注重长远潜力，将人的受教育与技能提升视为一种回报极其丰厚的人力资本积累行为。"
      ]
    },
    blindspots: {
      en: [
        "May dismiss psychological biases, systematic framing, and long-term habits.",
        "Could reduce deep emotional, historical, or relational bonds into simple calculation spreadsheets.",
        "Tends to ignore structural privilege blocks that limit individual choices to begin with."
      ],
      zh: [
        "可能忽视心理认知偏误、社会情境锚定以及文化惯性等心理与非理性非计算要素。",
        "容易将复杂多变的情感、历史积怨或社会伦理关系，过于片面地抽象为单一维度上的得失考量。",
        "有时容易忽略由于系统性特权、出身阶层差距等前提条件的不对等，导致某些自由选择名存实亡。"
      ]
    },
    concepts: [
      { name: "Opportunity Cost", desc: { en: "The value of the next-best alternative forgone when making a choice.", zh: "为了做出某种选择而必须放弃的、在其他备选项中所对应的最高价值。" } },
      { name: "Human Capital", desc: { en: "The skills, knowledge, and experience possessed by an individual, viewed as a value creator.", zh: "将个人所拥有的技能、健康状况和知识储备，视为可以通过长线投入促成未来持续生财的资本。" } },
      { name: "Consumer Sovereignty", desc: { en: "The power of consumers to determine what goods and services are produced.", zh: "消费者的偏好和需求才是最终决定社会生产要素流向与商品生死存亡的至高决定者。" } }
    ],
    idealScores: {
      marketVsIntervention: 0.8,
      incentiveVsPower: 0.9,
      rationalVsBehavioral: 0.9,
      efficiencyVsEquity: 0.5,
      localVsCentral: 0.6
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Jack&backgroundColor=ffd5dc"
  },
  {
    id: "macro-stability",
    name: { en: "Macro Stabilization Type", zh: "宏观稳定型" },
    summary: { 
      en: "You look at the world through system-wide links, focusing on demand and policy stabilizer roles during recessions.",
      zh: "你习惯从大国总需求、总流动的全局高度解剖经济问题，主张在经济低迷时以政策手段对抗系统波动。"
    },
    representative: { en: "John Maynard Keynes", zh: "约翰·梅纳德·凯恩斯 (John Maynard Keynes)" },
    representativeBio: {
      en: "The founder of modern macroeconomics. He argued that total spending dictates economic output and employment, urging proactive fiscal and monetary measures during massive demand gaps.",
      zh: "现代宏观经济学之父。他提出了总需求管理的核心框架，证实在危机中市场的自我均衡力量可能会失效，需要政府在流动性凝结时担当“最后借款人与最终购买者”。"
    },
    keywords: {
      en: ["Aggregate Demand", "Animal Spirits", "Fiscal Multiplier", "Liquidity Trap"],
      zh: ["总需求", "动物精神", "财政乘数", "流动性陷阱"]
    },
    description: {
      en: "You analyze problems from a macro system-wide viewpoint. For you, the market is not a self-contained smooth balance system; instead, waves of systemic confidence shifts (what Keynes called 'Animal Spirits') can trigger deep freezes. You believe aggregate policy interventions are essential public anchors to support confidence and restore national cycle health.",
      zh: "你倾向于从全局系统的流转和连带关系来观察经济冷热。在你看来，微观的市场竞争虽然重要，但宏观系统由于信心剧变、消费低迷而陷入“流沙”时，往往无法自拔。需要国家出面，通过逆周期的调节工具向全社会注入有效总需求，重新激活死水的循环。"
    },
    strengths: {
      en: [
        "Highly realistic grasp of deep economic systemic crises, employment crunches, and chain collapses.",
        "Combines micro elements into clear macro linkages, keeping public infrastructure well-funded.",
        "Saves long-term health by preventing short-term demand crashes from causing irreversible destruction."
      ],
      zh: [
        "对深层次系统危机、大范围失业和信用断链风险有高度敏锐的大局预判，极具抗危机和救火意识。",
        "能够整合微观局部矛盾到总需求的拼图里，推动公共工程在逆风期完成跨越式基础设施建设。",
        "主张用积极有为的救助阻止短期的需求崩溃演变为持久的结构性毁损（滞后效应）。"
      ]
    },
    blindspots: {
      en: [
        "May ignore high public debts or inflation triggered by sustained liquidity flows.",
        "Could fail to focus on microeconomic structural incentives and private sector dynamic drive.",
        "Usually faces time-lag bottlenecks where policies arrive too late, bringing structural inefficiencies."
      ],
      zh: [
        "容易对公共债务的无节制膨胀、财政赤字的长期高企以及滥发流动性带来的通胀风险重视不足。",
        "相对容易忽视由高负税、繁重管制造成的私营主体长远微观激励损伤与效率低下。",
        "容易面临政策执行的时滞瓶颈，行政干预资源偏分配可能会造成持久性国进民退和低效率垄断。"
      ]
    },
    concepts: [
      { name: "Effective Demand", desc: { en: "The level of spending in an economy that matches actual production capability.", zh: "消费者、企业、政府有真实的购买力与意愿进行支付的总支出水平，是拉动供给的引擎。" } },
      { name: "Animal Spirits", desc: { en: "Emotional factors and psychological consensus driving consumer and investor decisions.", zh: "指那些驱动人类经济决策过程中的非理性情绪变化、恐惧与盲目乐观等心理波动。" } },
      { name: "Fiscal Multiplier", desc: { en: "The proportional shift in national income caused by changes in government spending.", zh: "政府每投下一笔新增支出的流动，在整个社会中多轮循环放大并撬动数倍国民产出的效应。" } }
    ],
    idealScores: {
      marketVsIntervention: -0.9,
      incentiveVsPower: -0.3,
      rationalVsBehavioral: -0.5,
      efficiencyVsEquity: 0.3,
      localVsCentral: -0.7
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=c0aede"
  },
  {
    id: "behavioral-nudge",
    name: { en: "Behavioral & Choice Nudge Type", zh: "行为助推型" },
    summary: { 
      en: "You study how flesh-and-blood humans act, optimizing systems by working with human habits rather than fighting them.",
      zh: "你致力于探究真实而有偏误的人类心理，坚信通过温和的“选择架构”与助推，比粗暴的禁止更能解决问题。"
    },
    representative: { en: "Richard Thaler / Daniel Kahneman", zh: "理查德·塞勒 (Richard Thaler) / 丹尼尔·卡尼曼 (Daniel Kahneman)" },
    representativeBio: {
      en: "Kahneman pioneered decision psychology, defining cognitive shortcuts. Thaler mapped economic behaviors, promoting 'nudge' designs to guide public outcomes.",
      zh: "卡尼曼开创了前景理论与认知心理学，证实人类思维拥有本能偏误。塞勒进一步将其引入公共政策，主张设立友好的“选择架构”帮助普通人在面临复杂决策时免遭诱骗。"
    },
    keywords: {
      en: ["Bounded Rationality", "Nudge", "Choice Architecture", "Mental Accounting"],
      zh: ["有限理性", "助推", "选择架构", "心理账户"]
    },
    description: {
      en: "You have a deep understanding of human psychological quirks. You know that real individuals are not cold supercomputers; we get anxious, have limited willpower, get anchored by defaults, and easily fall into visual traps. Instead of lecturing people to behave rationally or setting heavy fines, you prefer to optimize choice environments — like auto-enrollments — to help people make the best choices easily.",
      zh: "你对人心的复杂脆弱有着惊人的洞察。你深知现实生活中的个体绝非冷血、精准的超级计算器，人们会拖延、会冲动、容易被默认选项牵着走。相比于冷冰冰地呼吁人必须要保持理智，或者采取粗暴的高额行政罚款，你更倾倒于使用柔性、巧妙的触引和助推机制，促使多赢结果自然显现。"
    },
    strengths: {
      en: [
        "Incredibly realistic understanding of consumer psychology, error patterns, and daily struggles.",
        "Guarantees freedom while gently guiding better choices, avoiding absolute state mandates.",
        "Changes public outcomes with low capital outlays by adjusting simple rules (e.g., organ donor defaults)."
      ],
      zh: [
        "极其人性化的洞察力，看淡抽象的纯理性假说，高度贴合最普罗大众真实的心理决策细节。",
        "首创“自由意志家长制”，在没有消灭个人选择裁量权的前提下默默实现公共利益的最大化。",
        "性价比惊人，往往只需修改申请表默认勾选项等极低成本，就能瞬间彻底扭转深重的社会难题。"
      ]
    },
    blindspots: {
      en: [
        "May focus excessively on micro tweaks, ignoring larger macro conflicts like power dynamic blocks.",
        "Could be exploited by commercial monopolists using dark design nudges against users.",
        "Runs potential ethical controversies over who holds the authority to design 'good options' for others."
      ],
      zh: [
        "可能容易过度流连于微观上的“精雕细琢”，错失对重大的社会底层制度和权力不公层面的宏观解构。",
        "这种助推策略一不留神也容易沦为平台巨头和商家操纵用户注意力的“暗黑模式”帮凶。",
        "面临道德边界的拷问：谁拥有定义什么是“好”、什么是“最优”的选择设计师权力？"
      ]
    },
    concepts: [
      { name: "Bounded Rationality", desc: { en: "Human cognitive limits restrict perfect decision-making in a complex world.", zh: "人类受限于信息、时间、处理能力的边界，行事只能追求局部的、基本满意的决策。" } },
      { name: "Nudge", desc: { en: "Small adjustments in choice context that alter behavior without forbidding options.", zh: "不改变经济激励，不消灭可选项，只靠重构背景信息便引导人们朝着特定方向靠拢的小设计。" } },
      { name: "Choice Architecture", desc: { en: "The structured way choices are presented, exerting strong influence on human decisions.", zh: "选项在被视觉、流程呈现时所对应的组合结构，决定了一般参与者最习惯走哪条懒人道路。" } }
    ],
    idealScores: {
      marketVsIntervention: -0.3,
      incentiveVsPower: 0.3,
      rationalVsBehavioral: -0.9,
      efficiencyVsEquity: 0.4,
      localVsCentral: 0.5
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Alexander&backgroundColor=c1f0c1"
  },
  {
    id: "institutional-power",
    name: { en: "Institutional & Power Analysis Type", zh: "制度权力型" },
    summary: { 
      en: "You investigate who holds market rules, bargaining leverage, and asset control before evaluating deals.",
      zh: "你绝不轻易相信任何市场的自动均衡，而是会习惯性地追问：是谁在暗中分配博弈规则与话语主导权？"
    },
    representative: { en: "Joan Robinson / Thorstein Veblen", zh: "琼·罗宾逊 (Joan Robinson) / 索尔斯坦·凡勃伦 (Thorstein Veblen)" },
    representativeBio: {
      en: "Robinson created 'Monopsony' and imperfect match models, exposing how power tilts wage negotiations. Veblen satirized status showmanship, showing consumption is driven by a quest for honor.",
      zh: "罗宾逊开创了不完全竞争和买方垄断模型，拆穿了资方压榨工资的制度漏洞。凡勃伦则用辛辣幽默剖析了“炫耀性消费”，指出商品购买有时是个人证明阶级优越感的社会演戏。"
    },
    keywords: {
      en: ["Market Power", "Monopsony", "Conspicuous Consumption", "Institutional Inertia"],
      zh: ["市场支配力", "买方垄断", "炫耀性消费", "制度惯性"]
    },
    description: {
      en: "You reject easy stories of perfect competition. You observe that free transactions often carry power imbalances. In negotiations between a single gig driver and a trillion-dollar algorithm platform, you don't call it 'fair market equilibrium'; you call it unequal bargaining power. For you, analyzing economy means dissecting who owns properties, who controls laws, and who pays the hidden human costs.",
      zh: "你对教科书上描绘的“完全竞争神话”保持清醒的怀疑。你注意到，市场交易很少发生在真空或完全对称的真空状态中。在外卖骑手与超级垄断算法平台、单打独斗的租客与大型长租公寓之间，你看到的不是自由谈判，而是权力差距。重构规则和增设制衡保护是你不变的呼吁。"
    },
    strengths: {
      en: [
        "Unyielding critical voice, uncovering monopolies, exploitations, and power blocks.",
        "Deep understanding of how status, peer imitation, and custom drive wasteful spending.",
        "Advocates for balanced protections like antitrust laws, unions, and transparency."
      ],
      zh: [
        "极具批判性的审视视角，擅长揭开完美竞争的温情面纱，拆穿垄断暴利与单向倾斜的劳动盘剥关系。",
        "深刻地看透各种社会符号性行为，指出攀比心理、面子消费和身份认同对真实生活资源的消耗与扭曲。",
        "极力呼吁反垄断拆分、劳方集体议价以及利益关联透明化等平权机制，维护实质性底线尊严。"
      ]
    },
    blindspots: {
      en: [
        "May underestimate the direct efficiency and creative impulse generated by pure price systems.",
        "Could overlook cases where dynamic competition replaces monopolies naturally via tech change.",
        "Sometimes treats every voluntary transaction as an act of power dominance, losing sight of win-win gains."
      ],
      zh: [
        "容易在一些竞争本已非常充分的微观行业，高估合规监管门槛的积极效用，压抑了本属于市场的活力。",
        "可能会低估“创造性毁灭”所伴随的技术迭代，在缺少干预下也能顺应用户拥护自发淘汰旧垄断者。",
        "容易习惯性将所有的自由商业协议一概套上剥削阶级的印记，忽视了低摩擦互通所创造的巨大真实合作增量。"
      ]
    },
    concepts: [
      { name: "Monopsony", desc: { en: "A market situation where there is only one buyer (e.g., employers possessing lopsided local hiring power).", zh: "市场上存在垄断性的买方，使得资方掌握单向定价权阻碍了平等自由择业，蓄意压低工资。" } },
      { name: "Conspicuous Consumption", desc: { en: "Buying flashy premium goods to show off economic status rather than for core utility.", zh: "购买并炫耀昂贵且低实用价值的奢侈品，借此显露财富门槛以换取社会尊重地位的举动。" } },
      { name: "Asymmetric Bargaining Power", desc: { en: "Lopsided influence where one group dictates terms to a weaker participant.", zh: "不平等的议价博弈，强势一方凭借对生存资源的完全掐死，迫使弱势方无奈接受不公条款。" } }
    ],
    idealScores: {
      marketVsIntervention: -0.8,
      incentiveVsPower: -1.0,
      rationalVsBehavioral: -0.6,
      efficiencyVsEquity: -0.5,
      localVsCentral: -0.4
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=George&backgroundColor=ffdfbf"
  },
  {
    id: "equity-capability",
    name: { en: "Social Justice & Capability Type", zh: "公平能力型" },
    summary: { 
      en: "You measure progress by human growth, valuing peoples' real freedoms and foundational tools to shape meaningful lives.",
      zh: "你主张将人的自由和选择能力作为评估国家发展的终极标尺，强调效率必须为全体人的生存尊严服务。"
    },
    representative: { en: "Amartya Sen", zh: "阿马蒂亚·森 (Amartya Sen)" },
    representativeBio: {
      en: "Famine researcher and Nobel laureate. He created the 'Capability Approach', moving policy metrics from mere GDP outputs toward healthcare access, educational outcomes, and social inclusion.",
      zh: "诺贝尔奖得主，福利经济学大师，经历过印度大饥荒。他开创了“能力进路（Capability Approach）”，证实饥荒往往由制度不公、交换权遭到剥夺引起，而不单是粮食匮乏。"
    },
    keywords: {
      en: ["Capability Approach", "Substantive Freedom", "Entitlement", "Human Development Index"],
      zh: ["能力方法", "实质自由", "可行能力", "人类发展指数"]
    },
    description: {
      en: "You treat economics as an extension of moral philosophy and justice. For you, a high average GDP is hollow if millions are trapped by illiteracy or illness. Your core policy mission is expanding 'Feasible Capability' — ensuring every citizen possesses the healthcare, education, and political access to build a life they have genuine reason to value.",
      zh: "在你的人格底色中，经济学绝非冰冷无情的会计学电子表格，而是伦理、社会正义与人类发展的前线。你认为，如果数以千万计的普通家庭仍被识字率低下、医疗匮乏和选择空白捆绑，高昂的 GDP 数据只是虚无的幻象。扩大每个普通个体的“实质可行能力”，是所有经济决策的崇高标尺。"
    },
    strengths: {
      en: [
        "Incredibly strong ethical lens, ensuring most vulnerable communities are not discarded in name of efficiency.",
        "Multi-dimensional analysis of welfare, addressing long-term barriers like healthcare and training gaps.",
        "Redesigning metrics to track what humans can actually do and be, inspiring global agencies."
      ],
      zh: [
        "无比崇高的道德关怀与人道底色，保障最底层的边缘困难群体在追求冰冷效率的过程中不被粗暴抛弃。",
        "跳出单一纯收入测量的偏狭，从医疗、女性受教育、社会自尊和公共理性辩论等多重空间重写进步内涵。",
        "极具实操感召力，推动联合国构建了“人类发展指数（HDI）”，从根本上扭转了诸多国家政策导向。"
      ]
    },
    blindspots: {
      en: [
        "Multiple dimensions make it difficult to condense capability targets into unified, low-friction policy rules.",
        "Requires deep and sustained redistribution efforts, run with risks of heavy fiscal strains in practice.",
        "Could occasionally overlook the raw dynamic growth needs of highly competitive basic industries."
      ],
      zh: [
        "由于“可行能力”的内涵极其宏大，往往在实际转化为简单明确、低交易成本的立法判例时面临争议。",
        "推进包容性全面公平需要极高且长期的转移支付与教育资源补贴投入，容易令公共财政面临沉重负荷。",
        "有时容易弱化效率积累本身的滚雪球效应，在不发达阶段如果过早高福利分配，可能会损失资本积累源泉。"
      ]
    },
    concepts: [
      { name: "Capability Approach", desc: { en: "Defining well-being by what a person actually has the capability to be and do.", zh: "核心理论认为，人一生的幸福取决于其真实拥有的可行选择（如维持健康、能上学、参与民主议政的要素组合）。" } },
      { name: "Substantive Freedom", desc: { en: "The real opportunities a person has to live the life they value.", zh: "实质自由不仅是没有阻碍，更是真实持有使人免于贫困、逃离伤痛折磨并发挥各自潜能的基础机会。" } },
      { name: "Entitlement", desc: { en: "The basket of goods and choices a person can command within the social legal system.", zh: "一个人在所在社会法律体系下，凭劳动、产权或社会保障所能正当支配、交换得到的消费要素组合。" } }
    ],
    idealScores: {
      marketVsIntervention: -0.7,
      incentiveVsPower: -0.4,
      rationalVsBehavioral: -0.4,
      efficiencyVsEquity: -0.9,
      localVsCentral: 0.2
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Thomas&backgroundColor=fbe2ff"
  },
  {
    id: "community-governance",
    name: { en: "Polycentric & Community Management Type", zh: "社区治理型" },
    summary: { 
      en: "You champion trust and shared user agreements, navigating between private market limits and state mandates.",
      zh: "你不迷信市场的自由投机，也警惕政府的一刀切管制，认为身处一线的本地社群自有一套守护公共家园的智慧。"
    },
    representative: { en: "Elinor Ostrom", zh: "埃莉诺·奥斯特罗姆 (Elinor Ostrom)" },
    representativeBio: {
      en: "The first female Nobel laureate in Economics. Overturning 'the Tragedy of the Commons' dogma, she proved communities can co-manage shared resources using localized trusts, clear boundaries, and mutual monitoring.",
      zh: "第一位获诺贝尔学奖的女性学者。她推翻了学术界流行的“唯有私有化或者唯有收归国有才能解决公共资源枯竭”的教条，通过大量的实地勘察和历史考证，证实民间自组织自有一发生力。"
    },
    keywords: {
      en: ["Tragedy of the Commons", "Common-Pool Resources", "Polycentricity", "Local Knowledge"],
      zh: ["公地悲剧", "共有池塘资源", "多中心主义", "地方性知识"]
    },
    description: {
      en: "You have strong doubts about rigid dualisms. You do not believe public systems must either be privatized on open markets or fully controlled by government bureaucracies. You look for the 'Third Way': local users creating self-monitoring circles, based on mutual trust, shared rules, and adaptive feedback. You believe that those who actually work with resources are best suited to design its rules.",
      zh: "你天然抗拒“市场还是国家”这种二极管式的非黑即白论断。你相信，在浩瀚的公有草场、淡水渔区、乃至现代小区的绿化维护、开源软件代码库的共创中，本地社群能够通过平等的协商契约、适度的动态处罚和道德约束，在不需要外部强力干预下完美自我救赎。"
    },
    strengths: {
      en: [
        "Protects precious shared resources from over-exploitation without giant overhead of policing systems.",
        "Embraces dynamic local conditions, avoiding centralized 'one-size-fits-all' policy disasters.",
        "Fosters high social capital, building safe and long-term habits of cooperation in neighbor circles."
      ],
      zh: [
        "既避免了私有化导致的公共资源分配断截、丧失共享权，也摆脱了官僚管理导致的高成本治理冗余。",
        "极具对症下药的灵活性，因地制宜，最大程度地盘活并汲取了无法写进行政规划的地方经验。",
        "极力培育民间互信这一宝贵的社会资本，为社会各维度面对危机时的自愈建立弹性韧性。"
      ]
    },
    blindspots: {
      en: [
        "Scaling can be difficult; localized community setups sometimes struggle with massive global common challenges.",
        "Can experience internal tribalism, dynamic split conflicts, or exclusion of outside newcomers.",
        "Runs risk of complete collapse if underlying structures of mutual peer trust and memory fade away."
      ],
      zh: [
        "“小国寡民式”的社群自治经验在大范围、跨国境和涉及全人类利益的博弈（如全球碳中和）中复制困难。",
        "自治团体容易走向隐秘的“内部熟人部落主义”，圈外人融入成本高，也可能产生难以调解的内部恶性倾轧。",
        "极其脆弱地依赖于地方共同记忆和持久不散的互信基础，一旦出现人口大幅流出、异化则有可能全盘瘫痪。"
      ]
    },
    concepts: [
      { name: "Tragedy of the Commons", desc: { en: "Individual self-interest leads to the depletion of unowned common resources.", zh: "公地悲剧描述了当资源没有排他性产权、人人触手可及时，理性谋私的个体最终促成全盘枯竭毁坏的局面。" } },
      { name: "Polycentric Governance", desc: { en: "A system where multiple governing authorities overlap and coordinate instead of relying on a single monolith.", zh: "承认并倡导社会中存在多个、多维、多层级重叠的决策中心，通过自组织实现复杂网络的大协作协调。" } },
      { name: "Design Principles for CPR", desc: { en: "Ostrom's 8 rules for stable collective resource management (e.g., clear boundaries, graduated sanctions).", zh: "由奥斯特罗姆归纳出的 8 项长寿共有池塘管理特征（如设立明确边界、实施渐进惩罚机制等）。" } }
    ],
    idealScores: {
      marketVsIntervention: 0.1,
      incentiveVsPower: -0.2,
      rationalVsBehavioral: -0.5,
      efficiencyVsEquity: -0.5,
      localVsCentral: 0.9
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=dcfce7"
  },
  {
    id: "evolutionary-innovation",
    name: { en: "Evolutionary & Innovation Type", zh: "创新演化型" },
    summary: { 
      en: "You analyze economy as dynamic seas of technological change, valuing entrepreneurs disruptively breaking old equilibriums.",
      zh: "你认为研究静态的供给平衡毫无意义，你对由企业家与技术狂潮掀起的狂风暴雨（创造性破坏）心驰神往。"
    },
    representative: { en: "Joseph Schumpeter", zh: "约瑟夫·熊彼特 (Joseph Schumpeter)" },
    representativeBio: {
      en: "Introduced 'Creative Destruction' as the ultimate law of capitalist development. Identified the bold Entrepreneur as the force that propels civilizations forward through technological and business paradigm leaps.",
      zh: "动态经济学之王。他定义了“创造性毁灭”这一资本主义演化真理，将独具远见、无视常规且敢于把世界撕开裂口的企业家视为推动人类科技进步的真正火种。"
    },
    keywords: {
      en: ["Creative Destruction", "Entrepreneurship", "Dynamic Disequilibrium", "Paradigm Shift"],
      zh: ["创造性毁灭", "企业家精神", "动态非均衡", "范式转换"]
    },
    description: {
      en: "You have a natural passion for long-wave technological curves. You do not treat the economy as a neat, boring spreadsheet of supply and demand balancing at rest. Instead, you focus on tech paradigm leaps and bold industry disruptions. For you, high profits are not monopolies to be banned, but natural temporary premiums awarded to pioneers who dare to challenge the old and outdated world.",
      zh: "你的视线始终牢牢盯着经济长波周期里的科技颠覆曲线。在你眼里，一味通过计划去维持某种静态、完美的产业秩序是迂腐的。只有那些勇为人先、逆势破坏旧格局的企业家所掀起的技术大迁徙，才是文明脱胎换骨的生机。你主张呵护自由颠覆的野蛮生长空间。"
    },
    strengths: {
      en: [
        "Unrivaled dynamic analysis, explaining where new industries, productivity leaps, and jobs actually come from.",
        "Incentivizes world-changing bold investments, rewarding research and startup leap-taking.",
        "Embraces painful transitions as necessary dynamic phases of upward societal self-renewal."
      ],
      zh: [
        "无与伦比的动态全局观，唯独只有你能说清楚：崭新的行业、飞跃的生产力、乃至更酷的未来职业究竟是怎么诞生的。",
        "能够从制度上大度宽容高风险、超额回报的资本冒险，极力催化并呵护了风险投资和前沿未知科学的生民空间。",
        "豁达地直面阵痛，将旧产业死亡、巨头倒闭视为整个社会肌体吐故纳新、重新轻装上阵的必由之路。"
      ]
    },
    blindspots: {
      en: [
        "May dismiss massive transition pain, leaving displaced workers or distressed towns to rot in name of long-term progress.",
        "Could under-estimate monopolists extending software dominances to completely kill small creative newcomers.",
        "Tends to ignore immediate, urgent social safety needs during periods of intense digital paradigm displacements."
      ],
      zh: [
        "极易滑向冷酷的进步崇拜，把被时代列车无情碾碎、失去生计并无辜遭下岗的底层人们淡化为一笔必要的“历史代价”。",
        "有时容易高估技术超越的简单性，无视巨无霸科技寡头利用生态完全掐死后续弱小颠覆者的垄断。 ",
        "忽略在惊涛骇浪的“新旧交替”大时代里，全社会本能需要的极速兜底式结构性补偿与保障工程。"
      ]
    },
    concepts: [
      { name: "Creative Destruction", desc: { en: "The continuous product and process revolution that destroys old economic structures or firms from within.", zh: "由技术跃迁或经营创新，不断从经济系统内部将陈旧落后的业态打破、覆灭并在死灰中孕育初生奇迹的洪流。" } },
      { name: "Entrepreneurship", desc: { en: "The dynamic will to capture new ideas, carry out new combinations, and break old norms.", zh: "指那些超越常轨、顶着极度不确定性重新排布生产力要素，实现开拓性飞跃的实干远见。" } },
      { name: "Dynamic Disequilibrium", desc: { en: "Growth driven by constant disruption instead of comfortable static resting balance.", zh: "坚信经济生机并不来自于舒服的匀速滑行和静态平衡，它本身就是在非均衡的浪潮里不断冲刷跳跃前行。" } }
    ],
    idealScores: {
      marketVsIntervention: 0.7,
      incentiveVsPower: 0.5,
      rationalVsBehavioral: 0.1,
      efficiencyVsEquity: 0.8,
      localVsCentral: 0.3
    },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Aiden&backgroundColor=fef3c7"
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    measurement: {
      en: "Rent Control vs Market Incentives in Housing Crises.",
      zh: "住房危机中的租金管控与市场激励权衡。"
    },
    title: {
      en: "There's an acute housing shortage in your city, and rents are skyrocketing. What should be done first?",
      zh: "你所在的城市正面临严重的住房短缺，租金一路狂飙。你首要倾向于支持哪种方案？"
    },
    choices: [
      {
        text: {
          en: "Cap maximum rents immediately to relieve tenant pressure and prevent landlord exploitation.",
          zh: "立即出台法令锁死租金上限，保护租客不被房东随意驱逐和坐地起价。"
        },
        weights: { marketVsIntervention: -0.9, efficiencyVsEquity: -0.8, incentiveVsPower: -0.7 },
        explanation: {
          en: "Institutional Power view: Protect vulnerable tenants from asymmetrical landlord power immediately.",
          zh: "制度权力型观点：直接介入纠正不平等的博弈地位，阻止租客在买方弱势下遭到强征。"
        }
      },
      {
        text: {
          en: "Relax municipal zoning codes and density rules to let private builders rapidly increase supply.",
          zh: "大举放宽容积率和审批限制，提供税收激励，鼓励开发商无阻碍地建房。"
        },
        weights: { marketVsIntervention: 0.9, efficiencyVsEquity: 0.8, incentiveVsPower: 0.8 },
        explanation: {
          en: "Market Coordination view: Artificially capping prices kills the long-term incentive to build new supply.",
          zh: "市场协调与选择型观点：强制限价无异于饮鸩止渴，松绑和顺应价格利润才能吸引新资本涌入解决根本供给。"
        }
      },
      {
        text: {
          en: "Have the central government issue low-cost construction bonds to build extensive public social housing.",
          zh: "由政府统一进行城市规划，直接发债拨款开工，大规模建设非营利性公共保障房。"
        },
        weights: { marketVsIntervention: -0.7, localVsCentral: -0.8, efficiencyVsEquity: -0.5 },
        explanation: {
          en: "Macro Stabilization view: Public capital must directly supply essential societal goods where market flows lag.",
          zh: "宏观稳定型观点：基础公共品不应当成为资本投机的赌场，需要政府出手担当供应中流砥柱。"
        }
      },
      {
        text: {
          en: "Foster local neighborhood associations and co-ops to collectively manage shared, adaptive rental spaces.",
          zh: "培育本地租户合作社与非营利信托社群，自主制定住房契约和低频动态协商机制。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.2, efficiencyVsEquity: -0.4 },
        explanation: {
          en: "Community Governance view: Refuses simple central control or market chaos; leverages localized trust boundaries.",
          zh: "社区治理型观点：淡化一刀切或野蛮逐利，用在地人对共有资源的自主协商形成可持性的共治框架。"
        }
      }
    ]
  },
  {
    id: 2,
    measurement: {
      en: "Economic externalities and pigouvian taxing on Environmental Crises.",
      zh: "环境危机中的外部性、污染产权与排碳管制权衡。"
    },
    title: {
      en: "Fossil emissions are driving a severe global carbon crisis. What is the most effective policy mechanism?",
      zh: "高能耗产业的高碳排放正在加剧环境危机。如果要最理性地推进资源重估，应首先引入哪种方案？"
    },
    choices: [
      {
        text: {
          en: "Impose a clear Pigouvian tax on carbon, allowing the price to guide firms to find their best mitigation tactics.",
          zh: "出台科学计量的碳税（Pigouvian Tax），让生产成本内含社会外部成本，由市场主体自主权衡最划算的减排路径。"
        },
        weights: { marketVsIntervention: 0.5, rationalVsBehavioral: 0.8, efficiencyVsEquity: 0.4 },
        explanation: {
          en: "Free Choice view: Corrects external market failure by internalizing the social cost into the price system.",
          zh: "个体选择型观点：利用碳税重构企业面临的机会成本与利润模型，借用价格系统温和引导资源替换。"
        }
      },
      {
        text: {
          en: "Draft sweeping administrative standards to ban coal-firing units and mandate high wind-solar targets.",
          zh: "由中央规划部门制定强有力的禁令与产业刚性绿色配额，限期关闭不达标企业并罚款。"
        },
        weights: { marketVsIntervention: -0.9, localVsCentral: -0.8 },
        explanation: {
          en: "Macro Stabilization view: Climate is a massive central crisis; weak slow taxes cannot match swift administrative action.",
          zh: "宏观稳定型观点：气候问题是极其迫切的大型危机，缓慢的价格摸索可能为时已晚，必须以法治刚性底线强推。"
        }
      },
      {
        text: {
          en: "Assign clean carbon properties locally, encouraging regional community councils and companies to directly trade rights.",
          zh: "明确区域级碳排放与环境权边界，让本地排污者与居民在受法律庇护的前提下当面进行自发博弈换算。"
        },
        weights: { localVsCentral: 0.8, marketVsIntervention: 0.6 },
        explanation: {
          en: "Community Governance view: Favors localized property agreements over giant central bureaucracies or tax schemes.",
          zh: "社区管理型观点：不迷信中心机构，由地方基于直接知情、利益相关的细化契约来进行低损耗自主交易。"
        }
      },
      {
        text: {
          en: "Aggressively fund technology pioneers and risk capital; count on dynamic competition to make fossil energy outdated.",
          zh: "向光伏、聚变与氢能等初创科技派发放超高奖励，用野蛮崛起的廉价新清洁能源自然毁灭高碳旧垄断巨头。"
        },
        weights: { marketVsIntervention: 0.6, efficiencyVsEquity: 0.8, rationalVsBehavioral: 0.2 },
        explanation: {
          en: "Evolutionary Innovation view: The only sustainable way out is tech paradigm leap via creative destruction.",
          zh: "创新演化型观点：用新一轮“创造性毁灭”将高碳燃煤归入尘埃，技术换代升级才是解决终极危机的唯一途径。"
        }
      }
    ]
  },
  {
    id: 3,
    measurement: {
      en: "Gig Economy workers, structural algortihmic monopolies, and social safety nets.",
      zh: "零工经济、平台算法控制与底层福利兜底权衡。"
    },
    title: {
      en: "Trillion-dollar platforms utilize real-time price algorithms to manage delivery workers, with razor-thin individual wages. How do you view this scene?",
      zh: "超级外卖与零工平台利用实时定价算法管理数百万骑手，骑手在算法压迫下只拿到极薄的派送费。你对此倾向于如何应对？"
    },
    choices: [
      {
        text: {
          en: "This is a typical lopsided monopsony. We must legally break platform algorithmic monopolies and unionize riders immediately.",
          zh: "这是经典的“买方垄断（Monopsony）”。必须通过反垄断强拆算法，建立工会，保障骑手的集体议价权线。"
        },
        weights: { incentiveVsPower: -0.9, marketVsIntervention: -0.8, efficiencyVsEquity: -0.7 },
        explanation: {
          en: "Institutional Power view: Lopsided platform advantages require counter-balancing rules and labor checks.",
          zh: "制度权力型观点：在强大的资方算法剥削下，单个骑手无法凭市价谈判，必须以法定工会等强硬制约夺回博弈权。"
        }
      },
      {
        text: {
          en: "Riders chose this flexible gig with open options. Intervention will destroy their high employment rate and choice flexibility.",
          zh: "这是数百万人在自由意志下做出权衡后的现实结果。强行设卡干预只会让平台关闭职位、减少低门槛工作选择。"
        },
        weights: { marketVsIntervention: 0.8, incentiveVsPower: 0.9, rationalVsBehavioral: 0.8 },
        explanation: {
          en: "Free Choice view: Riders make rational choices under constraints. Arbitrary wage floors risk throwing people into unemployment.",
          zh: "个体选择型观点：骑手们正是在现有生存资源限制下进行自由机会对比。强制保护只会转嫁成本、杀伤平台竞争，最终反噬底层饭碗。"
        }
      },
      {
        text: {
          en: "Provide unconditional basic safety dividends or capability grants to riders, so they own the capacity to leave bad gigs.",
          zh: "避开平台纠葛，政府直接给低收入劳工提供无附加条件的技能飞跃补贴，从教育、医疗、自尊层面改善其可行能力。",
        },
        weights: { efficiencyVsEquity: -0.9, marketVsIntervention: -0.4, incentiveVsPower: -0.3 },
        explanation: {
          en: "Equity Capability view: Welfare is not just about platform wages, but empowering people's life-shaping capacities so they have true choice.",
          zh: "公平能力型观点：比起无休止的限价纠纷，最纯粹的是从根本上赋予他们随时离开糟糕零工的底气——即受教育和退出的自尊筹码。"
        }
      },
      {
        text: {
          en: "Set platform software settings and health check apps to automatically prompt default breaks to combat physical burnout.",
          zh: "不强压定价，只以法定准则要求系统在界面将“每 4 小时强制休息 15 分钟”设为退出按钮的默认状态，消除诱导沉迷行为。"
        },
        weights: { rationalVsBehavioral: -0.8, marketVsIntervention: -0.2, incentiveVsPower: 0.2 },
        explanation: {
          en: "Behavioral Nudge view: Uses choice architecture. Gentle design default-anchors protect humans from hyper-exploitation without banishing market transaction.",
          zh: "行为助推型观点：不消灭派单交易，但在系统界面重构选择架构（默认自动间歇），纠正骑手为了短暂金钱激励而忽视健康的认知偏差。"
        }
      }
    ]
  },
  {
    id: 4,
    measurement: {
      en: "Technological displacement (AI) vs Creative Destruction and redistribution.",
      zh: "技术跃迁（AI）的冲击与创造性毁灭及再分配博弈。"
    },
    title: {
      en: "Advanced AI systems threaten to displace tens of millions of professional office and programming workers. What is your fundamental attitude?",
      zh: "高能AI大模型和自动化算法正在闪击大片初级编程、文案与行政服务岗位。面对海量白领阶层可能被技术替代，你的主要态度是？"
    },
    choices: [
      {
        text: {
          en: "This is a textbook 'Creative Destruction'. We must let AI companies sprint; temporary displacement will seed cooler industries.",
          zh: "这是最教科书般的“创造性毁灭”。不该阻碍AI进化，阵痛是必要的。旧岗位消亡必将以更酷、更颠覆的未知产业诞生为补偿。"
        },
        weights: { marketVsIntervention: 0.8, efficiencyVsEquity: 0.9, incentiveVsPower: 0.6 },
        explanation: {
          en: "Evolutionary Innovation view: Squelching technology saves buggy buggy-whips but kills human industrial leap progress.",
          zh: "创新演化型观点：若为眼下阵痛扼杀新范式，等同于马车时代禁止汽车。唯有包容剧烈颠覆，文明生产力才能跨代升级。"
        }
      },
      {
        text: {
          en: "Levy high automation taxes on tech monopolists, using proceeds to subsidize manual industries and shorten weekly work.",
          zh: "立即对利用海量用户公有数据训练AI的科技寡头加征高额自动化税，给被拆解人员提供基本薪酬和缩短工时补贴。"
        },
        weights: { marketVsIntervention: -0.8, efficiencyVsEquity: -0.7, incentiveVsPower: -0.8 },
        explanation: {
          en: "Institutional Power view: Prevent capitalists from fully capturing public knowledge fruits as raw monopoly capital profits.",
          zh: "制度权力型观点：AI大模型是搭了人类公共知识长河的便车，其红利必须面临反垄断税支，不能由少数财阀寡头独吞暴利。"
        }
      },
      {
        text: {
          en: "We must guarantee comprehensive educational grants to re-skill citizens, returning genuine ability choice to humans.",
          zh: "不该阻止技术，但应由国家提供一辈子随时可取用的重组学费资金，让每个人都跟得上科技曲线并拥有不被机器支配的可行能力。"
        },
        weights: { efficiencyVsEquity: -0.8, marketVsIntervention: -0.3, incentiveVsPower: -0.2 },
        explanation: {
          en: "Equity Capability view: Humans must have substantive choices. Re-skill human capabilities to preserve human dignity in machines age.",
          zh: "公平能力型观点：要通过终身学习红利、可行能力的二次锻造，保障人在机器大生产时代下维持做选择的真实底气。"
        }
      },
      {
        text: {
          en: "Support localized professional guilds to jointly agree on gradual, adaptive transition speeds for practical implementations.",
          zh: "由同业协会、本地社区工团共同制定“平稳换代”行业动态公约，不以中央下达死限，用社区自洽消减冲击摩擦。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.1, efficiencyVsEquity: -0.3 },
        explanation: {
          en: "Community Governance view: Local groups understand exact field limits, resolving adaptation friction through localized co-agreements.",
          zh: "社区管理型观点：规避宏大叙事或资本粗暴撤退，交由行业基层联合互信协议，在自洽共治中消化技术迁移阵痛。"
        }
      }
    ]
  },
  {
    id: 5,
    measurement: {
      en: "Financing higher education: Human capital investment vs screening and loan burdens.",
      zh: "高等教育筹资：人力资本投资、筛选效应与公平负担。"
    },
    title: {
      en: "University tuition fees are surging globally, causing massive youth loan burdens. How do you analyze this social trend?",
      zh: "大学学费节节高升，年轻人在踏入社会前就背上了沉重的学生贷款。你倾向于用哪种经济逻辑理解并解决这个现象？"
    },
    choices: [
      {
        text: {
          en: "Education is a high-return human capital investment. Students should self-finance because they reap the long-term career returns.",
          zh: "教育是个体对自身的“人力资本投资（Human Capital）”。既然未来的高层级红利归个人享有，自掏腰包符合市场基本契约。"
        },
        weights: { incentiveVsPower: 0.9, marketVsIntervention: 0.7, rationalVsBehavioral: 0.8 },
        explanation: {
          en: "Free Choice view: Self-funding align incentives, matching human investment efforts with career returns under price signal guide.",
          zh: "个体选择型观点：让受教育者作为理性的资本持有人自负成本，才有可能让专业设置、人才流向跟市场的真实供给匹配，杜绝虚浮泡沫。"
        }
      },
      {
        text: {
          en: "Universities act as high-status status social screening machines. We must tax commercial colleges and fund public craft vocational schools.",
          zh: "高额学费是富人阶层为了地位隔离而设立的“社会筛选机”。必须对高学费野鸡大学课税，大力拨款全额免费的工艺技术学院。"
        },
        weights: { incentiveVsPower: -0.8, efficiencyVsEquity: -0.6, marketVsIntervention: -0.7 },
        explanation: {
          en: "Institutional Power view: Academic credentials are used mostly as a status game tool. Higher costs just entrench unequal class blocks.",
          zh: "制度权力型观点：文凭在很大程度上已沦为富裕阶层实现圈层封闭和地位隔离的博弈道具。用不合理的高债务门槛挤占底层上升阶梯，是赤裸裸的阶下特权防线。"
        }
      },
      {
        text: {
          en: "Tuition barriers destroy the capability choices of poor children. The state must provide complete, tax-funded free public colleges.",
          zh: "金钱门槛粗暴剥夺了贫穷弱势儿童的人生最大可行选择权。国家必须提供由财政转移支付支持、全民免费的世界级高等教育。"
        },
        weights: { efficiencyVsEquity: -0.9, marketVsIntervention: -0.8, localVsCentral: -0.6 },
        explanation: {
          en: "Equity Capability view: Education is a fundamental capability right. Lack of tuition is deprivation of basic lifelong survival tools.",
          zh: "公平能力型观点：教育不应该是一门生意。无法接受技能训练等同于被粗暴地剥夺了探索人生可能的实质自由，属于典型的贫困剥夺。"
        }
      },
      {
        text: {
          en: "Surging fees stem from administrative visual inflation. Simplify university scale and shift to decentralized peer guild appraisals.",
          zh: "高学费来自于庞大大学行政机构、面子评比等视觉通胀。应当去中心化大学编制，回归社区互信式的手艺人行会和学徒制重组。"
        },
        weights: { localVsCentral: 0.8, marketVsIntervention: 0.3, rationalVsBehavioral: -0.3 },
        explanation: {
          en: "Community Governance view: Heavy hierarchies and bureaucracies drive inflation. Local peer apprenticeships are efficient and practical.",
          zh: "社区管理型观点：大型办学行政通病拉高了浮夸门槛，回到小团体的学徒制和手工艺师行会，自能培养出最契合社群需求的扎实手艺。"
        }
      }
    ]
  },
  {
    id: 6,
    measurement: {
      en: "Macro Systemic crises in financial markets, bank bailouts, and moral hazard.",
      zh: "巨额金融危机、银行救助、系统性风险与道德风险交锋。"
    },
    title: {
      en: "A systemic credit freeze hits the national banking market, threatening widespread liquidations. What is your fundamental stance?",
      zh: "一场突如其来的宏观债务冻结席卷金融市场，几家系统重要性银行命悬一线，随时可能引发全局挤兑和储蓄蒸发。你首要拥戴什么样的应对？"
    },
    choices: [
      {
        text: {
          en: "The central state must inject cash and bailout key banks immediately. A total system collapse will freeze domestic cycles and kill businesses.",
          zh: "中央和央行必须立即向心脏注入无限资金实施彻底救助。宏观流动性一旦凝结将引发实体行业断水断粮，酿成大萧条灾难。"
        },
        weights: { marketVsIntervention: -0.9, localVsCentral: -0.8, efficiencyVsEquity: 0.2 },
        explanation: {
          en: "Macro Stabilization view: In systemic credit loops, fear freezes all exchange. Central emergency intervention is the absolute buffer.",
          zh: "宏观稳定型观点：危机来临时，“动物精神”极度惊慌导致全民现金为王。此时救银行实际救的是整个社会循环系统的总生命线。"
        }
      },
      {
        text: {
          en: "Let failed banks fail. Bailouts create severe moral hazard, rewarding reckless high-risk financial games at public expense.",
          zh: "顽固地坚守市场惩戒，让违规高风险做空、高杠杆套利的投机银行清盘。政府绝不能救助，否则后患无穷（道德风险）。"
        },
        weights: { marketVsIntervention: 0.9, incentiveVsPower: 0.8, efficiencyVsEquity: 0.6 },
        explanation: {
          en: "Free Choice view: Erasing bad consequences rewards reckless hazard behavior. Real market discipline means taking responsibility for risks.",
          zh: "个体选择型观点：错误理性的基石是自负盈亏。政府若出钱买单，等同于拿着纳税人的血汗钱去纵容贪婪，长期来看彻底摧毁了金融市场的良性激励。"
        }
      },
      {
        text: {
          en: "Bail out depositors fully, but erase the billionaire shareholders and mandate strict commercial firewall restrictions on Wall Street.",
          zh: "无条件保护全体小微储户钱财，但是彻底罚没清洗高管和投机财团的期权红利，出台严苛反垄断细则将投行隔离拆分。"
        },
        weights: { incentiveVsPower: -0.9, efficiencyVsEquity: -0.7, marketVsIntervention: -0.6 },
        explanation: {
          en: "Institutional Power view: Protect innocent citizens while aggressively punishing the financial class for high-risk capture.",
          zh: "制度权力型观点：必须清算金融寡头玩资本游戏、把全社会当人质的霸道垄断不公；在救护大众利益的同时，铁血拆散金融统治阶级利益。"
        }
      },
      {
        text: {
          en: "Shift towards cooperative localized credits, credit unions, and community-level mutual help pools that resist high leverages.",
          zh: "将金融主权分散，由地方信托社、乡村合作金融互助机构进行自我治理，避开华尔街高度复杂的投机寄生杠杆游戏。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.3, rationalVsBehavioral: -0.4 },
        explanation: {
          en: "Community Governance view: Decentralizes systematic leverage risk. Trust pools are built on actual localized memory, limiting toxic financial games.",
          zh: "社区管理型观点：从根子上摆脱对超大体量金融寡头的高度寄生，用分散化多中心、拥有真实声誉约束的在地中小互助信用社自疗系统。"
        }
      }
    ]
  },
  {
    id: 7,
    measurement: {
      en: "Public Healthcare Allocation: Price signals vs moral asymmetries and public supply.",
      zh: "医疗资源分配：市价机制、信息不对称、道德溢价与公共供给抉择。"
    },
    title: {
      en: "High-demand specialist healthcare has long queues and extreme medical resource tensions. What is the fairest long-term solution?",
      zh: "高水平专家门诊人满为患，医疗设备抢夺紧张，排队黄牛猖獗。为了最长久且有尊严地化解“看病难、看病贵”难题，应主要采纳："
    },
    choices: [
      {
        text: {
          en: "Allow prices to peak and encourage premium private clinics; profits will automatically motivate high supply expand.",
          zh: "全面松绑，允许医院按市场真实溢价自主定价，让高端私营医疗自由竞逐。高额利润会自动引流并催生高水平人才爆裂增长。"
        },
        weights: { marketVsIntervention: 0.9, efficiencyVsEquity: 0.8, incentiveVsPower: 0.7 },
        explanation: {
          en: "Free Choice view: Artificially suppress healthcare prices only leads to black-market scalping and bad hospital incentives.",
          zh: "个体选择性观点：价格管制的恶果是催生猖獗的倒牌大军（黄牛），并致使医生毫无行医动力。恢复真实价格逻辑，竞争自然提升品质。"
        }
      },
      {
        text: {
          en: "A healthy life is a fundamental human capability. Healthcare must be entirely funded by public taxes and open free.",
          zh: "健康是人探索世界、追求生活的最基本“可行能力”。医疗必须由政府作为最大单一采购方全额承担，并按病情急缓免费分配门诊。"
        },
        weights: { efficiencyVsEquity: -0.9, marketVsIntervention: -0.8, localVsCentral: -0.5 },
        explanation: {
          en: "Equity Capability view: Treating sick bodies as market auction goods is morally bankrupt. Absolute equality must guard medical access.",
          zh: "公平能力型观点：生老病死容不得半点资产隔离。不能看病形同于被剥夺了在这个世界上“能活下去”的底线，公共资源必须对所有人不加区别平等兜底。"
        }
      },
      {
        text: {
          en: "The current crisis is a showcase of corporate lobby monopolies and pharmaceutical patents. Dismantle deep medical conglomerates and break secrets.",
          zh: "看病难根子在于药企、医疗器械资本联盟的专利垄断。必须强力拆开药理黑箱、打破行业垄断，打击一切合谋溢价暴利行为。"
        },
        weights: { incentiveVsPower: -0.9, marketVsIntervention: -0.7, efficiencyVsEquity: -0.5 },
        explanation: {
          en: "Institutional Power view: Health crisis is driven by asymmetrical info monopoly and pharmaceutical greed. True fix means stripping corporate power.",
          zh: "制度权力型观点：信息极度不对称的医疗市场容易变成寡头大发死人财的绞肉机，绝不可相信单纯的市场调和，唯有反垄断和粉碎暴利才是出路。"
        }
      },
      {
        text: {
          en: "Set registration platforms to auto-default users to convenient local community doctors, filtering non-severe cases efficiently and gently.",
          zh: "引入“助推”机制：在挂号系统中，将用户初诊默认勾选为方便的同籍社区家庭医院，并以温和科普改变市民一得病就非排三甲医院的盲目偏见。"
        },
        weights: { rationalVsBehavioral: -0.8, marketVsIntervention: -0.2, localVsCentral: 0.5 },
        explanation: {
          en: "Behavioral Nudge view: Corrects visual heuristics. Better choice architecture redirects citizens without removing individual option right.",
          zh: "行为助推型观点：不废除非必要就医，而是在系统层面修改初次就医的选择网络，引导人进行常识纠偏，高效率降噪专家门诊压力。"
        }
      }
    ]
  },
  {
    id: 8,
    measurement: {
      en: "Public Commons Management: Government policing vs private privatization and communal collective rules.",
      zh: "共有资源治理：私有产权、政府铁腕警察执法、还是社群自我编织共同规约交锋。"
    },
    title: {
      en: "A beautiful local marine fishing area is suffering from severe, competitive overfishing that threatens structural collapse. What is the best path?",
      zh: "一处水产丰饶的公海近海渔场正在被各路大小船队竞相疯狂超额捕捞，生态随时面临崩溃荒芜。你会首先极力倾向并信任哪种处理？"
    },
    choices: [
      {
        text: {
          en: "Privatize the marine area completely, selling properties to large responsible organizations who will preserve values.",
          zh: "将渔场彻底私有化，设立可永久继承的排他性近海产权并拍卖。产权拥有者自然会在自利驱动下精益求精地养护渔业寿命。"
        },
        weights: { marketVsIntervention: 0.8, incentiveVsPower: 0.7, localVsCentral: 0.2 },
        explanation: {
          en: "Market Coordination view: The Tragedy of the Commons stems from the absence of private owners. Ownership aligns profits with conservation search.",
          zh: "市场协调与选择型观点：“公地悲剧”之所以产生，是因为产权模糊导致人人不要白不要。有了清晰明确的私人权界，业主自然自利地护卫其长期增值资产。"
        }
      },
      {
        text: {
          en: "Draft central regulations, dispatch government patrol ships, and strictly police the quota limits with radar scanners.",
          zh: "重手收归国有，由中央渔政局实行刚性禁渔和指标。划定红线并派出海上执法船队进行全天候军警式雷达查扣罚没。"
        },
        weights: { marketVsIntervention: -0.8, localVsCentral: -0.8 },
        explanation: {
          en: "Macro Stabilization view: Environmental commons collapse is a fatal national systemic crisis; only centralized policing has actual deter power.",
          zh: "宏观稳定型观点：生态死亡不可逆。决不能指望私商妥协。唯有国家机器带着强力武器、重型处罚在最前线充当裁判，才能强硬压制短视的贪婪。"
        }
      },
      {
        text: {
          en: "Empower local fishermen themselves to collectively design limits, grads-of-sanctions, and monitor peer vessels voluntarily.",
          zh: "发起在地社区捕捞大会，由渔民行会自组织协商规则（如单日网眼、禁捕期），自主进行小额度熟人罚款，自建渔船轮换执勤机制。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.2, efficiencyVsEquity: -0.3 },
        explanation: {
          en: "Community Governance view: Proves localized peer trust pools can perfectly beat tragedy without heavy central police costs or profit extraction.",
          zh: "社区管理型（Ostrom）观点：在地人最清楚海洋状态，凭世代相承的手握手熟人守望和轻微动态梯度罚则，足以自愈公地，且免受官僚机器或资本家的双向勒索。"
        }
      },
      {
        text: {
          en: "Support large-scale sea-farming pioneers. Fund dynamic science startups to make traditional raw wild sea-catch obsolete.",
          zh: "不靠强制围堵，下拨巨款赞助先进海上合成养殖、微藻素食初创。用极速下落的工厂科技鱼，彻底摧毁远洋野生捕捞的利润基础。"
        },
        weights: { marketVsIntervention: 0.6, efficiencyVsEquity: 0.8, rationalVsBehavioral: 0.1 },
        explanation: {
          en: "Evolutionary Innovation view: Technology change shifts constraints. Cultured protein leaps automatically cure resource extraction struggles.",
          zh: "创新演化型观点：堵截总有见不得光的偷捕。只有彻底改变生产范式和供给技术，用先进人工养殖让超额远洋野捕变得得不偿失，才能永绝悲剧。"
        }
      }
    ]
  },
  {
    id: 9,
    measurement: {
      en: "Faced with widening wealth inequality: Progressive taxation vs productivity and baseline safety capabilities.",
      zh: "贫富差距危机：累进税、资本积累红利与底层基本能力建设博弈。"
    },
    title: {
      en: "The wealth gap between ultra-rich billionaires and general families is at an all-time high. What is your fundamental analysis?",
      zh: "金字塔尖的亿万富豪与广大底层民众的贫富差距攀升到空前的顶点，社会撕裂隐隐加剧。你对此倾向于如何系统地反思解决？"
    },
    choices: [
      {
        text: {
          en: "We must run aggressive global wealth taxes on billionaires' properties, and mandate strict anti-monopoly clawbacks.",
          zh: "立即对豪商、金融大财阀的所有资产和股票存量加征累进财产税，通过强悍反垄断立法斩断资本在掠夺性垄断下的野蛮繁殖。"
        },
        weights: { incentiveVsPower: -0.9, marketVsIntervention: -0.8, efficiencyVsEquity: -0.7 },
        explanation: {
          en: "Institutional Power view: Modern capital drifts into compounding monopolies. Progressive wealth tax claws back lopsided rule-dictating advantage.",
          zh: "制度权力型观点：在资本要素长期压过劳动的垄断格局下，阶级不公是自我强化的。若不以税收铁血回采、打散资本寡头，财富差距将永久固化为特权极权统治。"
        }
      },
      {
        text: {
          en: "Never punish productivity or investment efforts. Keep tax flat and leverage incentives so the rich reinvest in bold startups to build cooler infrastructure.",
          zh: "严防惩罚性税收。要让高回报在产权制度保障下理直气壮，从而激励他们将资本大举投资到极具颠覆性的未知未来科技、改变生产力中去。"
        },
        weights: { marketVsIntervention: 0.8, efficiencyVsEquity: 0.9, incentiveVsPower: 0.8 },
        explanation: {
          en: "Free Choice and Evolutionary views: Exorbitant marginal taxes only paralyze capital accumulation and slow down technical dynamic drive.",
          zh: "个体选择性与演化观点：强征资本累退税无异于惩罚拼搏和成功的勇气。唯有保护他们的正当回报，富人才会甘冒超高风险把资产变为新产业，从而做大蛋糕。"
        }
      },
      {
        text: {
          en: "Focus entirely on the bottom. Tax high estates and pour it directly into unconditional basic capability lifelines like universal child health and free training.",
          zh: "视线聚焦底层。不要去算富人股票，要通过足额的新增遗产税，在底层彻底消除起跑线不公，让每一个穷孩子从小拥有绝对平等的营养、医疗与受训选择能力。"
        },
        weights: { efficiencyVsEquity: -0.9, marketVsIntervention: -0.5, localVsCentral: 0.1 },
        explanation: {
          en: "Equity Capability view: Poverty is capability deprivation. Erasing起跑线 opportunity disparities is the absolute moral baseline of civilized justice.",
          zh: "公平能力型观点：人生来由于投胎造成的家庭起跑线差距是文明的最大耻辱。国家应专注于补足弱者的“底阀”可行能力，让每颗草都有开花繁衍的机会。"
        }
      },
      {
        text: {
          en: "Rethink local municipal finance: Foster small community shared land trusts and regional mutual credit banks to keep assets locally co-owned.",
          zh: "重构地方微观共同财务：把公有社区土地、民生基础设施收归本地公信度极高的市民合作信托基金打理，让劳动果实留在原乡社群。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.2, efficiencyVsEquity: -0.3 },
        explanation: {
          en: "Community Governance view: Displaces center wealth monopoly by localized communal assets and non-monetized mutual ties.",
          zh: "社区管理型观点：不要试图通过巨型中心机器来分钱，那往往会催生庞大的官僚浪费。回到社群共有的本土地产信托、合作行，让本土地里冒出的资源归本土劳者共同分配。"
        }
      }
    ]
  },
  {
    id: 10,
    measurement: {
      en: "Attention economy, digital addiction, algorithms framing vs consumer choice and behavior default biases.",
      zh: "注意力经济、社交媒体沉迷、算法极客诱导与自我选择决策权衡。"
    },
    title: {
      en: "Short-video and social media algorithms use intense psychological feedback loops, leaving millions of youth highly addicted. How do you respond?",
      zh: "短视频与主流社交网络利用大脑多巴胺机制设计成瘾算法，引致无数人重度刷屏沉迷。为了让用户重夺理智生活的主权，你最认同的是哪种办法？"
    },
    choices: [
      {
        text: {
          en: "This is deliberate design capture. Levy heavy antitrust fines on digital platforms, force software code audits, and ban algorithmic loops targeting minors.",
          zh: "这是平台厂商对大脑的多巴胺强权劫持。必须出台严刚司法反垄断重罚平台，强制公开推荐算法并彻底限期封禁未成年自动连播循环。"
        },
        weights: { marketVsIntervention: -0.8, incentiveVsPower: -0.9, efficiencyVsEquity: -0.4 },
        explanation: {
          en: "Institutional Power view: Refuses the myth of 'rational choice'. The platform algorithm holds asymmetrical absolute power over human brain wiring.",
          zh: "制度权力型观点：别拿“自由决定”当借口。单个用户面对千人千面、全天候进化的万亿赫兹算力算法，心智是被完全碾压的。唯有国家用硬核铁铲砸烂算法垄断。"
        }
      },
      {
        text: {
          en: "The platform provides massive fun and efficient market trading channels. Content consumption is a sovereign choice; users decide their time allocations.",
          zh: "这些平台极大消除了内容传输的交易摩擦。刷手机是消费者在有限时间里自由对比、获得愉悦的自我满足决定，他人无权站在高处冒充导师干涉。"
        },
        weights: { marketVsIntervention: 0.8, incentiveVsPower: 0.9, rationalVsBehavioral: 0.9 },
        explanation: {
          en: "Free Choice view: Respects consumer sovereignty. Overestimating digital addiction paternalism often leads to moral policing over lifestyles.",
          zh: "个体选择性观点：尊重绝对的“消费者主权”。用户有权享受廉价广泛的信息盛宴，假惺惺的家长主义干涉往往沦为对普罗大众个人生活情趣的傲慢说教。"
        }
      },
      {
        text: {
          en: "Design default settings on phone OS where app daily limits (e.g. 1hr maximum) are automatically default-enabled, letting users easily opt-out if desired.",
          zh: "在操作系统原生设计中引入“柔性偏向设计”：出厂默认自动开启“单应用每日限制1小时”，给用户一个随时可以点击解除但本能产生震慑的锚定阀。"
        },
        weights: { rationalVsBehavioral: -0.9, marketVsIntervention: -0.1, incentiveVsPower: 0.1 },
        explanation: {
          en: "Behavioral Nudge view: Employs choice architecture. Changes default anchor status to gently protect human executive function without state censorship.",
          zh: "行为助推型观点：不封禁任何APP，只在出厂级设置里把保护默认状态前置。给脆弱的意志力一个平稳落地的扶手，用最不侵犯选择的手段解除算法劫持。"
        }
      },
      {
        text: {
          en: "Support regional libraries, physical community spaces, and civic recreation centers to re-weave actual physical human connection networks.",
          zh: "跳出线上网络纠纷，拨款大举兴建并升级地方普惠性公共图书馆、邻里草坪沙龙、实体桌游社等，用线下真实的物理温暖重织脱虚向实的社区网。"
        },
        weights: { localVsCentral: 0.9, marketVsIntervention: 0.1, efficiencyVsEquity: -0.3 },
        explanation: {
          en: "Community Governance view: Virtual immersion thrives on real physical community loneliness. Fostering localized relational trust space resolves the void naturally.",
          zh: "社区管理型观点：线上沉迷背后的根子是物理社群连结的破碎和荒芜引发的漫长孤寂。用在地的人性温存、面对面的互动，去自然治愈精神空虚，才是正本清源。"
        }
      }
    ]
  }
];
