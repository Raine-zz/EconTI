import { Question, Economist } from './types';

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "title": {
      "en": "Your favorite local café just raised prices by 30%. Your response is:",
      "zh": "你最喜欢的本地咖啡馆涨价了30%。你的反应是："
    },
    "choices": [
      {
        "text": {
          "en": "Just pay it; supply and demand is just how things work.",
          "zh": "照付不误；供需关系就是这么运作的。"
        },
        "weights": {
          "interventionism": -0.8,
          "rationality": 0.8,
          "vision": -0.175,
          "scope": -0.05
        }
      },
      {
        "text": {
          "en": "Complain to the manager about price-gouging.",
          "zh": "找经理抱怨他们是在敲竹杠。"
        },
        "weights": {
          "interventionism": 0.8,
          "rationality": -0.6,
          "scope": -0.05,
          "vision": 0.225
        }
      },
      {
        "text": {
          "en": "Stop going there as a personal protest.",
          "zh": "作为个人抗议，不再去那儿买东西了。"
        },
        "weights": {
          "rationality": -0.7,
          "scope": -0.45,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "Start checking if your grocery bills are also creeping up.",
          "zh": "开始检查你的超市账单是否也在悄悄涨价。"
        },
        "weights": {
          "scope": 0.55,
          "rationality": 0.5,
          "vision": -0.075
        }
      }
    ]
  },
  {
    "id": 2,
    "title": {
      "en": "There's a massive housing shortage in your city. You think we should:",
      "zh": "你所在的城市正面临严重的住房短缺。你认为我们应该："
    },
    "choices": [
      {
        "text": {
          "en": "Clear all the red tape and let builders build fast.",
          "zh": "扫除所有繁文缛节，让开发商快马加鞭地盖房。"
        },
        "weights": {
          "interventionism": -1,
          "scope": -0.225,
          "vision": -0.6
        }
      },
      {
        "text": {
          "en": "Protest for lower rents and better public housing.",
          "zh": "抗议要求降低租金并提供更好的公共住房。"
        },
        "weights": {
          "interventionism": 0.7,
          "vision": 0.3,
          "scope": -0.025
        }
      },
      {
        "text": {
          "en": "Give people moving out to the suburbs a tax break.",
          "zh": "为搬到郊区的人提供税收优惠。"
        },
        "weights": {
          "interventionism": 0.2,
          "scope": 0.275,
          "vision": -0.1
        }
      },
      {
        "text": {
          "en": "Join a communal living project that shares space.",
          "zh": "加入一个共享空间的社区共同生活项目。"
        },
        "weights": {
          "vision": 0.4,
          "interventionism": 0.1,
          "scope": -0.025
        }
      }
    ]
  },
  {
    "id": 3,
    "title": {
      "en": "A new AI robot can do 90% of manual labor. Your first thought is:",
      "zh": "一台新型AI机器人可以完成90%的体力劳动。你的第一想法是："
    },
    "choices": [
      {
        "text": {
          "en": "Sweet! We can finally spend all day at the beach.",
          "zh": "太棒了！我们终于可以整天在海滩躺平了。"
        },
        "weights": {
          "vision": 0.4,
          "scope": -0.15,
          "interventionism": -0.075,
          "rationality": 0.025
        }
      },
      {
        "text": {
          "en": "Terrifying! We should tax robots to pay for our lost jobs.",
          "zh": "太吓人了！我们应该对机器人征税来支付我们失去的工作。"
        },
        "weights": {
          "interventionism": 0.625,
          "vision": 0.3,
          "rationality": 0.025,
          "scope": 0.05
        }
      },
      {
        "text": {
          "en": "Time to sign up for a coding bootcamp, I guess.",
          "zh": "我想，该报名参加一个编程训练营了。"
        },
        "weights": {
          "rationality": 0.725,
          "interventionism": -0.475,
          "vision": -0.2,
          "scope": 0.05
        }
      },
      {
        "text": {
          "en": "Meh, people have been saying this for a hundred years.",
          "zh": "额，人们一百年来一直这么说。"
        },
        "weights": {
          "rationality": -0.775,
          "vision": -0.5,
          "interventionism": -0.075,
          "scope": 0.05
        }
      }
    ]
  },
  {
    "id": 4,
    "title": {
      "en": "When you see a giant tech monopoly, you usually:",
      "zh": "当你看到一家巨型科技垄断企业时，你通常会："
    },
    "choices": [
      {
        "text": {
          "en": "Use their app anyway because it's so convenient.",
          "zh": "照样用他们的App，因为太方便了。"
        },
        "weights": {
          "interventionism": -0.625,
          "rationality": 0.55,
          "vision": -0.35,
          "scope": -0.1
        }
      },
      {
        "text": {
          "en": "Call for them to be broken up by the government.",
          "zh": "呼吁政府将其拆分。"
        },
        "weights": {
          "interventionism": 0.775,
          "vision": 0.35,
          "rationality": -0.35,
          "scope": -0.1
        }
      },
      {
        "text": {
          "en": "Wonder how they actually manage such a huge workforce.",
          "zh": "好奇他们到底是如何管理如此庞大的员工队伍的。"
        },
        "weights": {
          "rationality": 0.15,
          "scope": 0.3,
          "vision": -0.25,
          "interventionism": 0.075
        }
      },
      {
        "text": {
          "en": "Expect a scrappy startup to take them down eventually.",
          "zh": "期待最终会有一家斗志旺盛的初创公司打败他们。"
        },
        "weights": {
          "vision": 0.25,
          "interventionism": -0.225,
          "rationality": -0.35,
          "scope": -0.1
        }
      }
    ]
  },
  {
    "id": 5,
    "title": {
      "en": "During a major financial crash, you think we should:",
      "zh": "在重大金融危机期间，你认为我们就应该："
    },
    "choices": [
      {
        "text": {
          "en": "Have the government spend big to keep us afloat.",
          "zh": "让政府大手笔支出以维持我们的生存。"
        },
        "weights": {
          "interventionism": 0.725,
          "scope": 0.425,
          "rationality": -0.3,
          "vision": -0.15
        }
      },
      {
        "text": {
          "en": "Let the failing banks collapse; that's just life.",
          "zh": "让倒闭的银行破产吧；这就是现实。"
        },
        "weights": {
          "interventionism": -0.975,
          "rationality": 0.1,
          "scope": -0.275,
          "vision": -0.15
        }
      },
      {
        "text": {
          "en": "Tighten our belts and make sure the currency stays strong.",
          "zh": "勒紧裤腰带，确保货币维持强势。"
        },
        "weights": {
          "scope": 0.125,
          "rationality": 0.5,
          "interventionism": -0.075,
          "vision": -0.15
        }
      },
      {
        "text": {
          "en": "Use the crisis to build a whole new green economy.",
          "zh": "利用危机建立一个全新的绿色经济体系。"
        },
        "weights": {
          "vision": 0.45,
          "interventionism": 0.325,
          "rationality": -0.3,
          "scope": -0.275
        }
      }
    ]
  },
  {
    "id": 6,
    "title": {
      "en": "What's the main reason you do anything in life?",
      "zh": "你做任何事的主要动力是什么？"
    },
    "choices": [
      {
        "text": {
          "en": "To get the best possible outcome for myself.",
          "zh": "为自己争取最好的结果。"
        },
        "weights": {
          "rationality": 1,
          "scope": -0.375,
          "vision": -0.55,
          "interventionism": 0.025
        }
      },
      {
        "text": {
          "en": "Just because that's what everyone else is doing.",
          "zh": "仅仅因为大家都在这么做。"
        },
        "weights": {
          "rationality": -1,
          "scope": -0.175,
          "vision": -0.25,
          "interventionism": 0.025
        }
      },
      {
        "text": {
          "en": "Because my background and status expect it of me.",
          "zh": "因为我的背景和地位对我有这种期待。"
        },
        "weights": {
          "vision": 0.45,
          "scope": 0.525,
          "interventionism": 0.025
        }
      },
      {
        "text": {
          "en": "To create something original that breaks the mold.",
          "zh": "为了创造一些打破常规的原创东西。"
        },
        "weights": {
          "vision": 0.35,
          "interventionism": -0.075,
          "scope": 0.025
        }
      }
    ]
  },
  {
    "id": 7,
    "title": {
      "en": "The massive gap between rich and poor makes you:",
      "zh": "巨大的贫富差距让你觉得："
    },
    "choices": [
      {
        "text": {
          "en": "Want to work harder to join the top 1%.",
          "zh": "想更努力地工作以挤进那1%的圈子。"
        },
        "weights": {
          "interventionism": -0.85,
          "vision": -0.9,
          "rationality": 0.375,
          "scope": 0.075
        }
      },
      {
        "text": {
          "en": "Want to tax the rich until everyone has the same.",
          "zh": "想对富人课重税，直到大家的生活水平都一样。"
        },
        "weights": {
          "interventionism": 0.65,
          "vision": 0.4,
          "rationality": -0.325,
          "scope": 0.075
        }
      },
      {
        "text": {
          "en": "Assume it's just because some people went to better schools.",
          "zh": "认为这仅仅是因为有些人上了更好的学校。"
        },
        "weights": {
          "rationality": 0.275,
          "scope": -0.225,
          "interventionism": -0.15,
          "vision": -0.1
        }
      },
      {
        "text": {
          "en": "Feel that true freedom is impossible for the poor.",
          "zh": "觉得由于贫困，真正的自由对穷人来说是不可能的。"
        },
        "weights": {
          "vision": 0.6,
          "interventionism": 0.35,
          "rationality": -0.325,
          "scope": 0.075
        }
      }
    ]
  },
  {
    "id": 8,
    "title": {
      "en": "The best way to save the planet from pollution is:",
      "zh": "让地球免受污染的最佳方式是："
    },
    "choices": [
      {
        "text": {
          "en": "Make companies pay a fee for every ton of CO2.",
          "zh": "让公司为每吨二氧化碳排放支付费用。"
        },
        "weights": {
          "rationality": 0.75,
          "interventionism": 0.175,
          "scope": 0.125,
          "vision": -0.2
        }
      },
      {
        "text": {
          "en": "Have the government ban gas cars and plan green cities.",
          "zh": "让政府禁止燃油车并规划绿色城市。"
        },
        "weights": {
          "interventionism": 0.675,
          "vision": 0.3,
          "rationality": -0.05,
          "scope": 0.125
        }
      },
      {
        "text": {
          "en": "Hope that new tech makes being 'green' more profitable.",
          "zh": "希望新技术能让“环保”变得更有利可图。"
        },
        "weights": {
          "interventionism": -0.725,
          "scope": -0.075,
          "rationality": -0.05,
          "vision": -0.2
        }
      },
      {
        "text": {
          "en": "Let local neighborhoods manage their own forests and parks.",
          "zh": "让当地社区管理他们自己的森林和公园。"
        },
        "weights": {
          "vision": 0.1,
          "scope": -0.175,
          "rationality": -0.65,
          "interventionism": -0.125
        }
      }
    ]
  },
  {
    "id": 9,
    "title": {
      "en": "When you choose a career, what matters most?",
      "zh": "当你选择职业时，最重要的是什么？"
    },
    "choices": [
      {
        "text": {
          "en": "The salary and growth potential.",
          "zh": "薪水和增长潜力。"
        },
        "weights": {
          "rationality": 0.75,
          "scope": -0.475,
          "vision": -0.75,
          "interventionism": -0.025
        }
      },
      {
        "text": {
          "en": "Having a job that lets me help my local community.",
          "zh": "拥有一份能让我帮助当地社区的工作。"
        },
        "weights": {
          "vision": 0.25,
          "scope": 0.425,
          "interventionism": -0.025,
          "rationality": -0.25
        }
      },
      {
        "text": {
          "en": "Just finding something stable so I can pay the bills.",
          "zh": "只求找份稳定的工作，好付账单。"
        },
        "weights": {
          "vision": 0.35,
          "interventionism": 0.275,
          "rationality": -0.25,
          "scope": 0.025
        }
      },
      {
        "text": {
          "en": "Finding a place where I can invent new things.",
          "zh": "找一个能让我发明新事物的地方。"
        },
        "weights": {
          "vision": 0.15,
          "interventionism": -0.225,
          "rationality": -0.25,
          "scope": 0.025
        }
      }
    ]
  },
  {
    "id": 10,
    "title": {
      "en": "Who should pay for college tuition?",
      "zh": "大学学费应该由谁承担？"
    },
    "choices": [
      {
        "text": {
          "en": "The government, so everyone has a fair shot.",
          "zh": "政府，这样每个人都有公平的机会。"
        },
        "weights": {
          "interventionism": 0.8,
          "scope": 0.275,
          "rationality": -0.325,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "The students, so they actually show up to class.",
          "zh": "学生自己，这样他们才会真的去上课。"
        },
        "weights": {
          "interventionism": -0.4,
          "rationality": 0.475,
          "vision": -0.375,
          "scope": -0.025
        }
      },
      {
        "text": {
          "en": "A mix of both, using income-based loans.",
          "zh": "两者兼顾，使用基于收入的贷款方式。"
        },
        "weights": {
          "rationality": 0.175,
          "scope": -0.225,
          "interventionism": 0.1,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "Let's just learn from each other and skip the fancy degrees.",
          "zh": "咱们互相学习得了，别去拿那些昂贵的学位。"
        },
        "weights": {
          "vision": 0.325,
          "interventionism": -0.5,
          "rationality": -0.325,
          "scope": -0.025
        }
      }
    ]
  },
  {
    "id": 11,
    "title": {
      "en": "Buying goods from abroad is usually:",
      "zh": "从国外购买商品通常是："
    },
    "choices": [
      {
        "text": {
          "en": "Awesome; I can get cool stuff cheaper.",
          "zh": "太棒了；我可以更便宜地买到酷炫的东西。"
        },
        "weights": {
          "interventionism": -0.8,
          "scope": 0.1,
          "rationality": 0.525,
          "vision": -0.4
        }
      },
      {
        "text": {
          "en": "A bit guilty; I worry about the workers who made them.",
          "zh": "有点愧疚；我担心生产这些东西的工人。"
        },
        "weights": {
          "vision": 0.4,
          "interventionism": 0.5,
          "rationality": -0.175,
          "scope": -0.3
        }
      },
      {
        "text": {
          "en": "Bad for the shops in my own neighborhood.",
          "zh": "对我们自己社区的商店不好。"
        },
        "weights": {
          "interventionism": 0.4,
          "rationality": -0.175,
          "vision": -0.1
        }
      },
      {
        "text": {
          "en": "A cool way to feel connected to the whole world.",
          "zh": "一种感觉与全世界相连的酷炫方式。"
        },
        "weights": {
          "vision": 0.1,
          "scope": 0.2,
          "interventionism": -0.1,
          "rationality": -0.175
        }
      }
    ]
  },
  {
    "id": 12,
    "title": {
      "en": "When the economy grows, you see it as:",
      "zh": "当经济增长时，你将其视为："
    },
    "choices": [
      {
        "text": {
          "en": "Life generally getting better for my family.",
          "zh": "全家人的生活通常都在变好。"
        },
        "weights": {
          "scope": 0.5,
          "rationality": 0.65,
          "vision": -0.375,
          "interventionism": -0.025
        }
      },
      {
        "text": {
          "en": "An excuse to keep trashing the planet for objects.",
          "zh": "为了物质而继续破坏地球的借口。"
        },
        "weights": {
          "vision": 0.325,
          "rationality": -0.75,
          "interventionism": -0.025,
          "scope": -0.1
        }
      },
      {
        "text": {
          "en": "Pointless if the rich just get richer and I don't.",
          "zh": "如果只是富人变得更富而我没有，那就毫无意义。"
        },
        "weights": {
          "interventionism": 0.575,
          "vision": 0.225,
          "rationality": 0.05,
          "scope": -0.1
        }
      },
      {
        "text": {
          "en": "A side-effect of people inventing better ways to work.",
          "zh": "人们发明了更好的工作方式所带来的副作用。"
        },
        "weights": {
          "interventionism": -0.525,
          "scope": -0.3,
          "rationality": 0.05,
          "vision": -0.175
        }
      }
    ]
  },
  {
    "id": 13,
    "title": {
      "en": "A billionaire gives away half their money. You think:",
      "zh": "一位亿万富翁捐出了他们一半的钱。你认为："
    },
    "choices": [
      {
        "text": {
          "en": "Wow, they are such a nice person.",
          "zh": "哇，他们真是个好人。"
        },
        "weights": {
          "interventionism": -0.575,
          "vision": -0.625,
          "rationality": -0.225,
          "scope": 0.1
        }
      },
      {
        "text": {
          "en": "They should have just paid more taxes in the first place.",
          "zh": "他们当初就应该交更多的税。"
        },
        "weights": {
          "interventionism": 0.725,
          "vision": 0.275,
          "rationality": 0.075,
          "scope": 0.1
        }
      },
      {
        "text": {
          "en": "It's probably just a PR move to look good.",
          "zh": "这可能只是为了树立良好形象的公关手段。"
        },
        "weights": {
          "rationality": 0.775,
          "scope": -0.2,
          "interventionism": -0.075,
          "vision": -0.025
        }
      },
      {
        "text": {
          "en": "We should all be sharing more like that anyway.",
          "zh": "反正我们大家都应该更多地进行那样的分享。"
        },
        "weights": {
          "vision": 0.375,
          "rationality": -0.625,
          "interventionism": -0.075
        }
      }
    ]
  },
  {
    "id": 14,
    "title": {
      "en": "When hotels double their prices during the holidays, you:",
      "zh": "当酒店在假期期间价格翻倍时，你会："
    },
    "choices": [
      {
        "text": {
          "en": "Expect it; everyone wants to travel then.",
          "zh": "预料之中；那时大家都想去旅游。"
        },
        "weights": {
          "interventionism": -0.625,
          "rationality": 1.125,
          "vision": -0.275,
          "scope": -0.025
        }
      },
      {
        "text": {
          "en": "Get angry that they are taking advantage of us.",
          "zh": "对他们利用我们而感到愤怒。"
        },
        "weights": {
          "interventionism": 0.675,
          "vision": 0.225,
          "rationality": 0.125,
          "scope": -0.025
        }
      },
      {
        "text": {
          "en": "Just stay home or look for a cheaper Airbnb.",
          "zh": "干脆待在家里或找一家更便宜的Airbnb。"
        },
        "weights": {
          "rationality": -0.875,
          "scope": -0.425,
          "interventionism": -0.025,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "Think about how it prices out regular families.",
          "zh": "思考这如何让普通家庭望而却步。"
        },
        "weights": {
          "scope": 0.475,
          "rationality": -0.375,
          "interventionism": -0.025,
          "vision": 0.025
        }
      }
    ]
  },
  {
    "id": 15,
    "title": {
      "en": "Farming should mostly focus on:",
      "zh": "农业应该主要关注："
    },
    "choices": [
      {
        "text": {
          "en": "Using science to grow as much food as possible.",
          "zh": "利用科学种植尽可能多的粮食。"
        },
        "weights": {
          "rationality": 0.95,
          "interventionism": -0.55,
          "vision": -0.625,
          "scope": 0.025
        }
      },
      {
        "text": {
          "en": "Making sure the people working the land get a fair deal.",
          "zh": "确保在土地上劳作的人获得公平待遇。"
        },
        "weights": {
          "interventionism": 0.45,
          "vision": 0.275,
          "rationality": -0.85,
          "scope": 0.025
        }
      },
      {
        "text": {
          "en": "Strict rules to stop polluting the soil.",
          "zh": "通过严格的规则防止土壤污染。"
        },
        "weights": {
          "interventionism": 0.35,
          "scope": 0.325,
          "rationality": -0.05,
          "vision": -0.125
        }
      },
      {
        "text": {
          "en": "Going back to old-school, natural ways of growing.",
          "zh": "回归老派、自然的种植方式。"
        },
        "weights": {
          "vision": 0.475,
          "scope": -0.375,
          "interventionism": -0.25,
          "rationality": -0.05
        }
      }
    ]
  },
  {
    "id": 16,
    "title": {
      "en": "Social media apps are mostly there to:",
      "zh": "社交媒体App的存在主要是为了："
    },
    "choices": [
      {
        "text": {
          "en": "Keep us entertained and talking to friends.",
          "zh": "让我们保持娱乐并与朋友交谈。"
        },
        "weights": {
          "vision": -0.55,
          "scope": -0.35,
          "rationality": -0.3,
          "interventionism": -0.175
        }
      },
      {
        "text": {
          "en": "Harvest our data to sell and make a profit.",
          "zh": "收集我们的数据进行销售并获取利润。"
        },
        "weights": {
          "rationality": 0.6,
          "vision": 0.25,
          "interventionism": -0.175,
          "scope": 0.05
        }
      },
      {
        "text": {
          "en": "Manipulate our attention, so we should limit them.",
          "zh": "操控我们的注意力，所以我们应该限制它们。"
        },
        "weights": {
          "interventionism": 0.525,
          "rationality": -0.3,
          "scope": 0.05,
          "vision": -0.05
        }
      },
      {
        "text": {
          "en": "Give us a place to build digital communities.",
          "zh": "为我们提供建立数字社区的场所。"
        },
        "weights": {
          "vision": 0.35,
          "scope": 0.25,
          "interventionism": -0.175
        }
      }
    ]
  },
  {
    "id": 17,
    "title": {
      "en": "When parents leave money to their kids, it should be:",
      "zh": "当父母把钱留给孩子时，这应该是："
    },
    "choices": [
      {
        "text": {
          "en": "Their total right, and the government should stay out of it.",
          "zh": "他们的绝对权利，政府不应插手。"
        },
        "weights": {
          "interventionism": -1,
          "rationality": 0.425,
          "vision": -0.875,
          "scope": 0.025
        }
      },
      {
        "text": {
          "en": "Taxed heavily so every kid starts on a level playing field.",
          "zh": "重税收，以便每个孩子都在平等的起跑线上开始。"
        },
        "weights": {
          "interventionism": 0.8,
          "vision": 0.525,
          "rationality": -0.275,
          "scope": 0.025
        }
      },
      {
        "text": {
          "en": "Spent on the kids' studies anyway.",
          "zh": "反正应该花在孩子的学业上。"
        },
        "weights": {
          "rationality": 0.125,
          "scope": -0.075,
          "interventionism": -0.1,
          "vision": -0.075
        }
      },
      {
        "text": {
          "en": "Mostly shared with the public to help everyone.",
          "zh": "大部分与公众分享以帮助大家。"
        },
        "weights": {
          "vision": 0.425,
          "interventionism": 0.3,
          "rationality": -0.275,
          "scope": 0.025
        }
      }
    ]
  },
  {
    "id": 18,
    "title": {
      "en": "The best way to stop bad traffic jams is:",
      "zh": "解决严重交通拥堵的最佳方式是："
    },
    "choices": [
      {
        "text": {
          "en": "Charge a fee for driving into the center during rush hour.",
          "zh": "在高峰时段进城收取费用。"
        },
        "weights": {
          "rationality": 0.175,
          "interventionism": 0.2,
          "scope": -0.075,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "Build way more public buses, subways, and bike lanes.",
          "zh": "建设更多的公共汽车、地铁和自行车道。"
        },
        "weights": {
          "interventionism": 0.6,
          "scope": 0.325,
          "rationality": -0.325,
          "vision": 0.025
        }
      },
      {
        "text": {
          "en": "Let private companies build better toll roads.",
          "zh": "让私人公司建设更好的收费公路。"
        },
        "weights": {
          "interventionism": -0.7,
          "scope": -0.275,
          "rationality": 0.475,
          "vision": -0.375
        }
      },
      {
        "text": {
          "en": "Just let more people work from their couches.",
          "zh": "干脆让更多人坐在沙发上办公。"
        },
        "weights": {
          "vision": 0.325,
          "scope": 0.025,
          "interventionism": -0.1,
          "rationality": -0.325
        }
      }
    ]
  },
  {
    "id": 19,
    "title": {
      "en": "Why is putting money in a savings account important?",
      "zh": "为什么把钱存进储蓄账户很重要？"
    },
    "choices": [
      {
        "text": {
          "en": "To make sure I'm safe if I lose my job.",
          "zh": "为了确保如果我丢了工作也能有保障。"
        },
        "weights": {
          "rationality": 0.525,
          "scope": -0.55,
          "vision": -0.4,
          "interventionism": 0.05
        }
      },
      {
        "text": {
          "en": "So I can buy a house or a car down the road.",
          "zh": "这样以后我可以买房或买车。"
        },
        "weights": {
          "rationality": 0.225,
          "interventionism": -0.15,
          "scope": -0.05
        }
      },
      {
        "text": {
          "en": "It gives banks money to lend out for new buildings.",
          "zh": "它让银行有钱贷出去建造新楼。"
        },
        "weights": {
          "scope": 0.65,
          "rationality": -0.275,
          "interventionism": 0.05
        }
      },
      {
        "text": {
          "en": "To leave something behind for my family one day.",
          "zh": "为了有一天能给家人留点遗产。"
        },
        "weights": {
          "vision": 0.4,
          "rationality": -0.475,
          "interventionism": 0.05,
          "scope": -0.05
        }
      }
    ]
  },
  {
    "id": 20,
    "title": {
      "en": "A truly happy country should focus on:",
      "zh": "一个真正幸福的国家应该关注："
    },
    "choices": [
      {
        "text": {
          "en": "Making sure there are lots of jobs and things to buy.",
          "zh": "确保有大量的工作和可购买的东西。"
        },
        "weights": {
          "interventionism": -0.475,
          "scope": -0.475,
          "rationality": 0.425,
          "vision": -0.35
        }
      },
      {
        "text": {
          "en": "Health, schools, and looking after each other.",
          "zh": "健康、学校和互相照顾。"
        },
        "weights": {
          "interventionism": 0.725,
          "vision": 0.25,
          "scope": 0.225,
          "rationality": -0.775
        }
      },
      {
        "text": {
          "en": "Keeping prices stable and our money valuable.",
          "zh": "保持物价稳定并让我们的货币保值。"
        },
        "weights": {
          "scope": 0.425,
          "rationality": 0.425,
          "interventionism": 0.025,
          "vision": -0.35
        }
      },
      {
        "text": {
          "en": "Making sure everyone is free to live their own best life.",
          "zh": "确保每个人都能自由地过上他们认为最好的生活。"
        },
        "weights": {
          "vision": 0.45,
          "interventionism": -0.275,
          "rationality": -0.075,
          "scope": -0.175
        }
      }
    ]
  }
];

export const ECONOMISTS: Economist[] = [
  {
    id: "smith",
    name: { en: "Adam Smith", zh: "亚当·斯密 (Adam Smith)" },
    summary: { en: "The Market Maestro", zh: "自发秩序的指挥家" },
    description: {
      en: "You find deep logic in the 'Invisible Hand', seeing the market as a miracle of spontaneous coordination where individual effort builds social wealth.",
      zh: "你在“看不见的手”中发现了深层逻辑，将市场视为自发协作的奇迹，个人的努力在此建立了社会财富。"
    },
    authorBio: {
      en: "Adam Smith was the pioneer of classical economics and the master of Enlightenment logic. Writing in 1776, his 'The Wealth of Nations' became the blueprint for the modern world, explaining how decentralized systems could thrive without a single person in charge.\n\nHe famously observed that it is not from the benevolence of the butcher or the baker that we expect our dinner, but from their regard to their own interest. This simple yet profound realization laid the groundwork for understanding how specialization and free exchange create universal prosperity.\n\nBeyond pure math, Smith was a moral philosopher who deeply valued 'Moral Sentiments' and human empathy. He believed that the 'Invisible Hand' worked best when supported by a clear legal framework and a baseline of social justice, ensuring that the fruit of industry reached all levels of society.",
      zh: "亚当·斯密是古典经济学的先驱，也是启蒙运动逻辑的大师。他在1776年撰写的《国富论》成为了现代世界的蓝图，解释了去中心化的系统如何在没有单一负责人管理的情况下蓬勃发展。\n\n他那句著名的观察是：我们期望的晚餐并非来自屠夫、酿酒师或面包师的恩惠，而是来自他们对自身利益的关注。这种简单而深刻的感悟为理解专业化分工和自由交换如何创造普遍繁荣奠定了基础。\n\n除了纯粹的计算，斯密亦是一位深切看重“道德情操”和人类移情的道德哲学家。他相信，“看不见的手”在清晰的法律框架和社会正义底线的支持下运作得最为出色，确保勤劳的成果能够触及社会的各个层面。"
    },
    commonTraits: {
      en: "You possess a profound trust in decentralized systems, much like a tech developer who believes open-source code naturally evolves into the best software. You prefer the organic flow of local interactions over the rigid predictability of a top-down master plan.\n\nYour view of human nature is balanced; you understand that personal drive is a powerful engine for progress. Just as a small business owner works late to perfect their product for customers, you believe that when individuals excel for themselves, they inadvertently serve the whole world.\n\nIn policy, you advocate for a stable referee state. Like a football official who ensures fair play without deciding the score, you believe government should focus on core infrastructure and justice, leaving the creative 'game' of life to the free players.",
      zh: "你对去中心化系统抱有极深的信任，就像一位相信开源代码能自然演化成最佳软件的技术开发者。比起自上而下蓝图的那种呆板可预测性，你更倾向于局部互动的有机流动。\n\n你的人性观非常平衡；你明白个人动力是进步的强大引擎。正如一位小店主为了顾客熬夜完善产品一样，你相信当个人为了自己而追求卓越时，无意中也服务了整个世界。\n\n在政策上，你主张建立稳定的“裁判型”国家。就像一位只确保公平竞赛而不决定比分的足球裁判，你认为政府应专注于核心基础设施和正义，而将充满创造力的“生活游戏”留给自由的参与者。"
    },
    idealScores: { interventionism: -0.8, rationality: 0.9, scope: -0.6, vision: -0.7 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4"
  },
  {
    id: "keynes",
    name: { en: "John Maynard Keynes", zh: "约翰·梅纳德·凯恩斯 (John Maynard Keynes)" },
    summary: { en: "The Crisis Architect", zh: "大衰退的“救火队长”" },
    description: {
      en: "You are the architect of the middle path, believing that while markets are powerful, they are prone to sudden collapses in confidence.",
      zh: "你是中间道路的建筑师，相信尽管市场力量强大，但它们很容易在信心崩溃时突然瓦解。"
    },
    authorBio: {
      en: "John Maynard Keynes revolutionized 20th-century thought by challenging the dogma that markets always balance themselves. When the Great Depression hit, he observed that economic machines could get stuck in deep ruts, requiring a 'kickstart' from high-level intervention.\n\nHis core insight was that 'animal spirits'—the shifting moods of fear and confidence—drive our largest spending decisions. He famously argued that 'in the long run we are all dead', urging governments to handle the immediate pain of the present rather than waiting for a distant, natural equilibrium.\n\nKeynes helped build the Bretton Woods system, the foundation of modern global finance. He aimed to save capitalism from its own volatile extremes, proposing that the state use its unique power to borrow and spend during downturns to keep the heart of the economy beating.",
      zh: "约翰·梅纳德·凯恩斯通过挑战“市场总能自我平衡”的教条，彻底改变了20世纪的思想。当大萧条来袭时，他观察到经济机器可能会陷入深坑，需要来自高层的干预来“启动”。\n\n他的核心见解是：是“动物精神”——即恐惧和信心的情绪转变——驱动了我们重大的消费决定。他那句名言是“长期来看，我们都死了”，以此敦促政府处理现下的痛苦，而非等待遥远且自然发生的均衡。\n\n凯恩斯帮助建立了布雷顿森林体系，这是现代全球金融的基础。他致力于将资本主义从其自身剧烈的极端波动中拯救出来，提出国家应在低迷时期利用其特有的借贷和支出能力，保持经济脉搏的跳动。"
    },
    commonTraits: {
      en: "You have a natural talent for macro-thinking, focusing on how large systems interact rather than individual line items. If a local community center is falling apart during a recession, you are the first to say we should fund its repair today to create jobs and boost local hope.\n\n You understand that confidence is the currency of growth. Much like a visionary CEO who invests in a project because they 'believe' in the future, you recognize that fear can lead to a 'liquidity trap' where saving too much kills the very system we are trying to protect.\n\nYour approach is essentially pragmatic; you believe policy should be a flexible toolkit. You view the government not as a rigid overseer, but as a 'safety net architect' whose task is to manage the volatile rhythms of human optimism and despair.",
      zh: "你拥有宏观思维的天赋，关注大系统如何互动而非仅仅是细节条目。如果一个社区中心在衰退期破败不堪，你会第一个说：我们今天就应该出资修缮它，以此创造就业并提振当地的信心。\n\n你明白信心才是增长的货币。就像一位因为“相信”未来而投资项目的愿景型 CEO，你意识到恐惧可能导致“流动性陷阱”，即存钱过多反而杀死了我们试图保护的系统。\n\n你的方法本质上是务实的；你认为政策应当是一个灵活的工具箱。你并不将政府视为死板的监察者，而是将其视为“安全网建筑师”，其任务是管理人类乐观与绝望的剧烈波动节奏。"
    },
    idealScores: { interventionism: 0.9, rationality: -0.8, scope: 0.9, vision: 0.6 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=c0aede"
  },
  {
    id: "marx",
    name: { en: "Karl Marx", zh: "卡尔·马克思 (Karl Marx)" },
    summary: { en: "The Structural Rebel", zh: "旧世界的“叛逆挖掘者”" },
    description: {
      en: "You view the world through the lens of power and history, believing that progress requires changing the underlying structures of society.",
      zh: "你通权力和历史的透镜看待世界，相信真正的进步需要改变社会的底层结构。"
    },
    authorBio: {
      en: "Karl Marx spent his life in libraries and exile, documenting the internal 'laws of motion' that drive capitalist societies. He looked beyond the surface of individual trades to see the deep historical currents of class struggle that define human labor.\n\nIn his monumental work 'Capital', he developed the theory of surplus value, arguing that the wealth created by workers often accumulates in the hands of those who own the means of production. He famously declared that the history of all hitherto existing society is the history of class struggles.\n\nMarx wasn't just a theorist but a revolutionary who sought to reunite humans with their own creative essence. He envisioned a future where work was not just a commodified burden for survival, but a direct expression of human potential, free from the mechanical requirements of the market.",
      zh: "卡尔·马克思在图书馆和流放中度过了一生，记录了驱动资本主义社会的内在“运动规律”。他看透了个体贸易的表象，洞察到了定义人类劳动的阶级斗争的深厚历史潮流。\n\n在他那部巨制《资本论》中，他发展了剩余价值理论，主张劳工创造的财富往往积聚在那些拥有生产资料的人手中。他那句名言是：至今一切社会的历史都是阶级斗争的历史。\n\n马克思不仅是一个理论家，更是一位致力于让渡人类与其自身创造本性重聚的革命者。他憧憬着一个将来，在那里工作不再是单纯为了生存而被商品化的负担，而是人类潜力的直接表达，摆脱了市场的机械需求。"
    },
    commonTraits: {
      en: "You care deeply about the 'foundations' of a situation, much like an architect who checks the soil and core pillars before looking at the paint. You are sensitive to how power dynamics shape daily interactions, noticing who sets the rules and who simply follows them.\n\nYou likely possess a fierce sense of solidarity with the underdog and a vision for systemic overhaul. If you see a gig worker struggling with a faulty algorithm, you don't just blame the worker; you look at the entire platform economy and wonder how the very rules of ownership should be rewritten.\n\nYou identify labor as the soul of all creation. You are wary of systems that treat humans as mere 'inputs' in a spreadsheet, instead seeking ways to empower collectives to own the fruits of their own hard work and ingenuity.",
      zh: "你非常关注情境的“地基”，就像一位先检查土壤 and 核心支柱再看油漆的建筑师。你对权力动态如何塑造日常互动非常敏感，总能注意到谁在制定规则，谁在服从规则。\n\n你可能对弱势群体拥有强烈的共情，并且渴望系统性的变革集。如果你看到一个外卖骑手被算法困住，你不会只责怪骑手，而是会审视整个平台经济，思考所有权的规则该如何重写。\n\n你将劳动视为一切创新的灵魂。你警惕那些将人类视为电子表格中“投入要素”的系统，相反，你寻求各种方式赋予集体力量，让他们拥有自己辛勤工作和才智的果实。"
    },
    idealScores: { interventionism: 1.0, rationality: -0.6, scope: 1.0, vision: 1.0 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=George&backgroundColor=ffdfbf"
  },
  {
    id: "hayek",
    name: { en: "Friedrich Hayek", zh: "弗里德里希·哈耶克 (Friedrich Hayek)" },
    summary: { en: "The Liberty Sentinel", zh: "自由秩序的哨兵" },
    description: {
      en: "You have a profound respect for the complexity of human interaction, believing that knowledge is scattered among millions.",
      zh: "你对人类互动的复杂性怀有深深的敬意，相信知识分散在数百万人之中。"
    },
    authorBio: {
      en: "Friedrich Hayek, a Nobel laureate, dedicated his work to exposing the limits of human planning. Having seen the rise of totalitarianism in Europe, he wrote 'The Road to Serfdom' to explain how central management often accidentally leads to the end of individual liberty.\n\nHis greatest contribution was the idea of 'Spontaneous Order'—the concept that complex patterns, like language or common law, emerge whenever people are free to interact without a central designer. He famously called the problem of coordinating society 'The Use of Knowledge in Society'.\n\nHayek argued that only a price system can coordinate the vast, fragmented knowledge held by millions of unique individuals. He saw freedom not as a luxury, but as the only effective way for a civilization to discover what it actually needs to survive and grow.",
      zh: "弗里德里希·哈耶克是一位诺贝尔奖得主，他致力于揭示人类计划的局限性。在见证了欧洲极权主义的兴起后，他撰写了《通往奴役之路》，解释了中央管理往往如何意外地导致个人自由的终结。\n\n他最大的贡献是“自发秩序”的理念——即语言或普通法等复杂模式，只要人们拥有自由互动的权利，且没有中央设计者，就会产生。他那句著名的论述将社会协调问题称为“社会中知识的利用”。\n\n哈耶克主张只有价格系统才能协调数百万个独特个体所掌握的宏大、碎片化的知识。他并不将自由视为奢侈品，而是将其视为人类文明发现生存和增长所需要素的唯一有效方式。"
    },
    commonTraits: {
      en: "You share a deep skepticism of 'top-down' authorities who claim to have all the answers. Just as a forest thrives through the tiny, uncoordinated growth of millions of plants, you believe that decentralization is the ultimate safeguard of a resilient and functional community.\n\nYou likely find beauty in the 'Price Network', recognizing that a local hike in milk prices is actually a silent signal that someone, somewhere, needs it more. You prefer these organic signals over the slow, biased decisions of an expert committee or a central planner.\n\nYou value clear, stable rules of the game over specific outcomes. You think the task of government is to protect the 'Rule of Law', ensuring that the boundaries are safe so that millions of unique individuals can invent their own futures and solve their own problems.",
      zh: "你对那些声称掌握所有答案的“自上而下”权威持有深刻的怀疑。正如森林通过数百万株植物微小且互不协调的生长而繁茂一样，你相信去中心化是一个坚韧且运作良好的社会的终极保障。\n\n你可能发现了“价格网络”的美妙之处，意识到局部牛奶价格的上涨实际上是一个无声的信号，表明在某地的某个人更有需求。比起专家委员会或计划者的那种迟缓且带有偏差的决定，你更倾向于这种有机的信号。\n\n比起特定的结果，你更看重清晰、稳定的游戏规则。你认为政府的任务是保护“法治”，确保边界安全，这样数亿个独特的人才能创造他们自己的未来并解决他们自己的问题。"
    },
    idealScores: { interventionism: -1.0, rationality: -0.8, scope: -1.0, vision: -0.9 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Charlie&backgroundColor=d1d4f9"
  },
  {
    id: "friedman",
    name: { en: "Milton Friedman", zh: "米顿·弗里德曼 (Milton Friedman)" },
    summary: { en: "The Logic Warrior", zh: "自由选择的逻辑斗士" },
    description: {
      en: "You are a sharp, realistic thinker who believes that individual choice and economic freedom are the foundation of all other liberties.",
      zh: "你是一位敏锐、现实的思考者，相信个人选择和经济自由是所有其他自由的基础。"
    },
    authorBio: {
      en: "Milton Friedman was the towering figure of the Chicago School and perhaps the most persuasive champion of free markets in history. He served as a advisor to major world leaders, famously using a simple 'Lead Pencil' to illustrate how thousands of people collaborate for mutual benefit.\n\nHe revolutionized monetary policy with his focus on the money supply, famously stating that 'inflation is always and everywhere a monetary phenomenon'. He sought to show that when governments try to micromanage markets, they often create the very instabilities they were trying to fix.\n\nIn his popular work 'Free to Choose', he argued that political freedom is impossible without economic freedom. He championed innovative ideas like school vouchers and floating exchange rates, believing that empowering the individual consumer was always more effective than empowering a bureaucrat.",
      zh: "米顿·弗里德曼是芝加哥学派的泰斗，或许也是历史上最具说服力的自由市场捍卫者。他曾担任多位世界级领导人的顾问，曾用一支简单的“铅笔”来展示数千人是如何为了共同利益而协作的。\n\n他通过关注货币供应彻底改变了货币政策，留下了名言：“通货膨胀在任何时候、任何地方都是一种货币现象”。他试图证明，当政府试图微观管理市场时，往往恰恰制造了他们本想解决的不稳定性。\n\n在他广受欢迎的作品《自由选择》中，他主张政治自由离不开经济自由。他支持教育券和浮动汇率等创新观点，相信赋予个体消费者权力总比赋予官僚权力更为有效。"
    },
    commonTraits: {
      en: "You possess an incredibly sharp, results-oriented mind. If you see a government program that isn't working, your first instinct is to ask: 'Why not just give the money directly to the people and let them choose the service?' You value direct, logical solutions over complicated theories.\n\nYou believe in the 'Power of Comparison', trusting that competition forces everyone to get better. Just as you might shop around for the best phone plan, you think that applying market logic to things like education or mail delivery ensures better quality for everyone at a lower cost.\n\nYou see yourself as a champion of individual autonomy. You are wary of any group that claims to know what is 'best' for you, preferring the messy but real freedom of making your own mistakes and reaping your own rewards in an open market.",
      zh: "你拥有一颗极其敏锐、结果导向的头脑。如果你看到一个政府项目运作不善，你的第一直觉是：为什么不直接把钱发给民众，让他们自己选择服务呢？比起复杂的理论，你更看重直接、符合逻辑的方案。\n\n你相信“竞争的力量”，信任竞争会迫使每个人变得更好。正如你会到处比价寻找最合适的手机套餐一样，你认为将市场逻辑应用于教育或邮政等领域，能确保每个人都能以更低的成本获得更好的质量。\n\n你视自己为个人自主的捍卫者。你警惕任何声称知道什么对你“最好”的群体，更倾向于在开放市场中自己犯错并自己承担后果的那种看似杂乱但真实的自由。"
    },
    idealScores: { interventionism: -0.9, rationality: 1.0, scope: 0.8, vision: -0.4 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Jack&backgroundColor=ffd5dc"
  },
  {
    id: "thaler",
    name: { en: "Richard Thaler", zh: "理查德·塞勒 (Richard Thaler)" },
    summary: { en: "The Nudge Master", zh: "人性偏误的“助推员”" },
    description: {
      en: "You understand that humans aren't perfect calculating machines, preferring to build systems that work with human nature rather than against it.",
      zh: "你明白人类并非完美的计算机器，比起对抗人性，你更倾向于建立顺应人性的系统。"
    },
    authorBio: {
      en: "Richard Thaler, a Nobel laureate, redefined economics by adding a human face to the dry equations. He famously listed 'unrealistic behaviors' in his early work, identifying concepts like 'endowment effects' where we overvalue what we already possess just because it's ours.\n\nHe showed that humans are systematically biased rather than perfectly rational. His work on 'Mental Accounting' explained why we treat money from a salary differently than money won in a lottery, proving that context and framing are everything in our decisions.\n\nThaler is the pioneer of 'Libertarian Paternalism', the idea captured in his book 'Nudge'. He argued that by simply changing the 'choice architecture'—like setting retirement savings to automatically start—we can help people achieve their own long-term goals without taking away their freedom.",
      zh: "诺贝尔奖得主理查德·塞勒通过为枯燥的方程式加入“人性面孔”，重新定义了经济学。他在早期的工作中列举了“非理性行为”，识别了“禀赋效应”等概念，即我们仅仅因为某物属于自己就过度低估其价值。\n\n他证明了人类是系统性带有偏见的，而非完全理性。他在“心理账户”方面的研究解释了为什么我们会将薪水收入和中奖奖金区别对待，证明了语境和框架在决策中决定了一切。\n\n塞勒是“自由意志家长制”的先驱，这一理念体现在他的著作《助推》中。他主张通过简单地改变“选择架构”——例如将退休储蓄设定为自动启动——我们就能在不剥夺自由的情况下，帮助人们实现其长远目标。"
    },
    commonTraits: {
      en: "You have a natural curiosity about 'Human Quirks', noticing the small psychological traps we fall into every day. If you see a long line at a buffet making people eat more than they planned, you are the person wondering how to rearrange the plates to gently guide them toward healthier choices.\n\nYou likely prefer a 'Soft Touch' when it comes to rules. You find that you can solve major social problems, like low saving rates or organ donation shortages, by making the 'right' thing the 'easy' thing. You value outcomes that come from understanding behavior rather than forcing it.\n\nYou are a realist who embraces our imperfections. You don't expect people to be saints or calculators; instead, you find harmony in designing systems that recognize we are biased, emotional, and prone to mistakes, and help us be our best selves anyway.",
      zh: "你对“人性的怪癖”抱有天然的好奇心，总能注意到我们每天掉入的小心理陷阱。如果你看到自助餐厅的长队让人们吃得比计划的还多，你会是那个思考如何重新排列餐具以含蓄引导他们做出更健康选择的人。\n\n在规则问题上，你可能更倾向于“柔和的处理方式”。你发现通过把“正确的事”变成“容易的事”，就能解决储蓄率低或器官捐赠短缺等重大社会问题。你更看重源于理解行为而非强迫行为的结果。\n\n你是一位拥抱我们并不完美这一事实的现实主义者。你并不期待人们都是圣人或计算器；相反，你通过设计承认我们带有偏见、感性且易犯错的系统来实现和谐，无论如何都帮助我们成为最好的自己。"
    },
    idealScores: { interventionism: 0.4, rationality: -1.0, scope: -0.6, vision: 0.1 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Alexander&backgroundColor=c1f0c1"
  },
  {
    id: "sen",
    name: { en: "Amartya Sen", zh: "阿马蒂亚·森 (Amartya Sen)" },
    summary: { en: "The Dignity Guardian", zh: "人类能力的“正义使者”" },
    description: {
      en: "For you, economics is about ethics and human capability, believing real development is the expansion of human freedom.",
      zh: "对你而言，经济学关乎伦理和人类能力，相信真正的繁荣是人类自由的扩展。"
    },
    authorBio: {
      en: "Amartya Sen, a Nobel Prize winner, brought a deep humanism to the study of wealth. Growing up in India, he witnessed the 1943 Bengal famine, leading him to the radical insight that famines are often caused by the collapse of democratic rights and food accessibility, not just a lack of grain.\n\nHe pioneered the 'Capability Approach', moving the world's focus away from simple GDP numbers toward what people can actually 'be and do'. He famously argued that poverty is the deprivation of basic capabilities, like the ability to be educated or healthy, rather than just a low bank balance.\n\nSen's work directly led to the UN's Human Development Index, changing how nations are measured. He believes that public reasoning and open debate are the core engines of development, and that the ultimate goal of any economy is to provide everyone with the dignity of real choice.",
      zh: "诺贝尔奖得主阿马蒂亚·森为财富研究引入了深刻的人道主义。在印度长大的他目睹了1943年的孟加拉大饥荒，这促使他产生了激进的见解：饥荒通常是由民主权利和食物获取途径的崩溃引起的，而不仅仅是缺粮。\n\n他开创了“能力方法”，将世界的关注点从简单的 GDP 数字转向人们实际能“成为和做成”的事情。他那句名言是：贫困是对基本能力的剥夺，比如受教育或健康的能力，而不仅仅是银行余额低。\n\n森的工作直接推动了联合国人类发展指数的创立，改变了衡量国家的方式。他相信公共理性和开放辩论是发展的核心引擎，任何经济体的终极目标都是赋予每个人拥有真实选择权力的尊严。"
    },
    commonTraits: {
      en: "You possess a powerful sense of 'Moral Purpose' in everything you do. If you are looking at a school system, you don't just ask about test scores; you ask if the students are gaining the freedom to lead lives they actually have reason to value. You care about the 'Why' behind the numbers.\n\nYou likely look at the world through a multi-dimensional lens. You recognize that a high income means very little to someone who lacks access to healthcare or basic security. You identify success the way a community leader does: by the expansion of the tangible opportunities available to the most vulnerable.\n\nYou are a pragmatist for human dignity. You believe that to have real freedom, one must have the fundamental 'tools' of health and knowledge. You identify with the struggle for social justice and seek economic paths that empower people to flourish as whole, choosing individuals.",
      zh: "你在所做的每一件事中都拥有强烈的“道德使命感”。如果你在考察一个学校系统，你不会只问考试分数；你会问学生是否获得了去过他们有理由看重的生活的自由。你在乎数字背后的那个“为什么”。\n\n你可能通过多维视觉观察世界。你意识到对于一个缺乏医疗或基本保障的人来说，高收入意义微乎其微。你像一位社区领袖那样定义成功：即最弱势群体所能获得的切实机会的扩展。\n\n你是为了人类尊严而战的务实主义者。你相信要获得真实的自由，一个人必须具备健康和知识这些基础“工具”。你认同对社会正义的追求，并寻找能赋权于人、让人作为一个完整的、有选择权的个体蓬勃发展的经济道路。"
    },
    idealScores: { interventionism: 0.7, rationality: -0.7, scope: 0.5, vision: 1.0 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Thomas&backgroundColor=fbe2ff"
  },
  {
    id: "schumpeter",
    name: { en: "Joseph Schumpeter", zh: "约瑟夫·熊彼特 (Joseph Schumpeter)" },
    summary: { en: "The Prophet of Innovation", zh: "“创造性毁灭”的先知" },
    description: {
      en: "You see the economy as a restless sea of 'Creative Destruction', believing that bold innovation is the true driver of history.",
      zh: "你将经济视为“创造性毁灭”的不息海洋，相信大胆的创新才是历史真正的驱动力。"
    },
    authorBio: {
      en: "Joseph Schumpeter was a flamboyant Austrian-American economist who famously aimed to be the world's greatest economist, lover, and horseman. He moved beyond the static models of his peers to analyze the dynamic, often painful process of how capitalism actually evolves through constant revolution.\n\nHe introduced the world to the concept of 'Creative Destruction'—the process by which new innovations incessantly replace outdated structures from within. He argued that the real hero of the economy is the Entrepreneur, the individual who has the vision and nerve to disrupt the status quo with something entirely new.\n\nSchumpeter believed that a healthy economy isn't one at rest or in 'perfect balance', but one in a state of constant, turbulent change. For him, the cyclical booms and busts were not just accidents, but the very heartbeat of a system that lives by reinventing itself.",
      zh: "约瑟夫·熊彼特是一位性格张扬的奥地利裔美国经济学家，他曾立志成为世界上最伟大的经济学家、情圣和骑手。他超越了同龄人那些静态的模型，转而分析资本主义是如何通过不断的革命而在动态且往往痛苦的过程中实际演化的。\n\n他向世界引入了“创造性毁灭”的概念——即新的创新不断地从内部取代过时结构的进程。他主张经济中真正的英雄是企业家，即那些拥有远见和胆量、用全新的事物打破现状的个人。\n\n熊彼特相信，健康的经济并非处于静止或“完美平衡”状态，而是处于一种持续、动荡的变革之中。对他而言，周期性的繁荣与萧条并非仅仅是意外，而是一个靠自我重塑而生存的系统的脉搏。"
    },
    commonTraits: {
      en: "You have a deep appreciation for the 'Grit' of progress, recognizing that to build something great, something old often has to fall. Like a tech visionary who embraces a market pivot, you find energy in the messy transitions and see them as signs of life rather than failure.\n\nYou likely identity with the spirit of the 'Disruptor'. You aren't interested in maintaining things just because 'that's how we've always done it'. You probably value the high-stakes gamble of a new idea over the safe, slow growth of a guaranteed dividend.\n\nYour worldview is inherently dynamic. You see the economy as a story of evolution rather than a math problem to be solved. You find harmony in the chaos of the laboratory and the startup, believing that the future belongs to those who dare to destroy the present to build what's next.",
      zh: "你对进步中的“阵痛”有着深切的认同，意识到为了建立伟大的事业，旧的事物往往必须倒下。就像一位拥抱市场转型的技术愿景家，你在那些混乱的转型中发现了活力，并将其视为生命的迹象而非失败。\n\n你可能对“颠覆者”的精神深有共鸣。你对仅仅因为“一向如此”而维持现状毫无兴趣。比起稳健且极其缓慢的红利增长，你可能更看重一个新想法所带来的高风险博弈。\n\n你的世界观本质上是动态的。你将经济视为演化的故事，而非待解的数学题。你在实验室和创业公司的混乱中寻找到了和谐，相信未来属于那些敢于摧毁现状以构建未来的人。"
    },
    idealScores: { interventionism: -0.4, rationality: 0.6, scope: 0.8, vision: 1.0 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Aiden&backgroundColor=fef3c7"
  },
  {
    id: "ostrom",
    name: { en: "Elinor Ostrom", zh: "埃莉诺·奥斯特罗姆 (Elinor Ostrom)" },
    summary: { en: "The Community Weaver", zh: "公地秩序的“编织者”" },
    description: {
      en: "You believe that local communities, not just states or markets, are the best managers of the resources we share.",
      zh: "你相信地方社区，而不仅仅是国家或市场，才是我们共有资源的最佳管理者。"
    },
    authorBio: {
      en: "Elinor Ostrom made history as the first woman to win the Nobel Prize in Economics, but her real legacy was overturning the 'Tragedy of the Commons'. For decades, experts believed that shared resources (like forests or fisheries) would always be overused unless privatized or strictly policed by the government.\n\nOstrom spent years in the field, observing how local groups around the world actually managed to cooperate without top-down orders. She identified eight 'Design Principles' that allow people to build trust and solve problems together through shared rules and mutual monitoring.\n\nHer work is a powerful defense of polycentric governance—the idea that many different centers of power and decision-making can overlap and work together. She showed that humans are far more capable of collective action than the 'rational selfish' model often suggests.",
      zh: "埃莉诺·奥斯特罗姆作为第一位获得诺贝尔经济学奖的女性载入史册，但她真正的遗产是推翻了“公地悲剧”。几十年来，专家们一直认为共有资源（如森林或渔场）除非私有化或受到政府严格监控，否则总会被过度使用。\n\n奥斯特罗姆在实地度过了多年，观察世界各地的地方群体是如何在没有自上而下指令的情况下实现协作的。她确定了八项“设计原则”，让人们能够通过共同的规则和相互监督建立信任并共同解决问题。\n\n她的工作是对多中心治理的有力辩护——即许多不同的权力和决策中心可以重叠且协同工作。她证明了人类集体行动的能力远超“理性自私”模型所暗示的那种程度。"
    },
    commonTraits: {
      en: "You place an immense value on 'Local Trust' and the power of the group. If a neighborhood garden is being neglected, you don't call the city or try to sell the land; you knock on neighbors' doors and ask: 'How can we build a schedule together?' You believe in the power of the handshake.\n\nYou likely look for solutions that aren't 'One Size Fits All'. You recognize that a rule that works in a mountain village might fail in a seaside town, and you value the wisdom of those who actually live with the resources every day. You are a pragmatist for the community.\n\nYour worldview is rooted in cooperation rather than competition or control. You see the economy as a social fabric that requires tending and maintenance. You find harmony in the 'Middle Way' between the giant state and the cold market, trusting in the ingenuity of small, organized groups.",
      zh: "你极其看重“局部信任”和群体的力量。如果社区花园被荒废了，你不会打电话给市政部门或试图卖掉土地，而是会敲开邻居的门问：“我们怎么一起定个排班表？”你相信握手的力量。\n\n你倾向于寻找非“一刀切”的解决方案。你意识到在山村奏效的规则在海边小镇可能会失效，你尊重那些每天都与资源共处的人们的智慧。你是为了社区而战的务实主义者。\n\n你的世界观植根于协作而非竞争或控制。你将经济视为需要照料和维护的社会织物。你在宏大国家与冷酷市场之间的“中间道路”中寻找到了和谐，信任小型有组织群体的智慧。"
    },
    idealScores: { interventionism: -0.6, rationality: -0.4, scope: -1.0, vision: 0.9 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=dcfce7"
  },
  {
    id: "becker",
    name: { en: "Gary Becker", zh: "加里·贝克尔 (Gary Becker)" },
    summary: { en: "The Logic Imperialist", zh: "生活逻辑的“头号猎人”" },
    description: {
      en: "You apply economic logic to every corner of human life—believing that behavior is always shaped by incentives.",
      zh: "你将经济逻辑应用于人类生活的每一个角落——相信行为总是由激励机制塑造的。"
    },
    authorBio: {
      en: "Gary Becker was a Nobel laureate who famously expanded the boundaries of economics into sociology and daily life. While others were studying interest rates and inflation, Becker was using the tools of microeconomics to analyze marriage, family size, education, and even crime.\n\nHe is the father of 'Human Capital' theory, arguing that we don't just 'spend' on school or health, we invest in ourselves as productive assets. He saw the family not just as a sentimental union, but as a small factory producing valuable future outcomes through careful decision-making.\n\nBecker's work was controversial because he dared to treat 'irrational' choices—like choosing a partner or committing a crime—as the result of an internal cost-benefit analysis. He believed that if you change the incentives, you change the human story.",
      zh: "诺贝尔奖得主加里·贝克尔以将经济学的边界扩展到社会学和日常生活中而闻名。当别人在研究利率和通胀时，贝克尔却在利用微观经济学的工具分析婚姻、家庭规模、教育甚至犯罪。\n\n他是“人力资本”理论之父，主张我们不只是在学校或健康上“消费”，而是在将自己作为生产性资产进行投资。他不将家庭单纯视为情感联盟，而是将其视为一个通过缜密决策产出宝贵未来成果的小型工厂。\n\n贝克尔的工作极具争议，因为他敢于将“非理性”的选择——如选择伴侣或实施犯罪——视为内部成本效益分析的结果。他相信，只要改变激励机制，你就改变了人类的故事。"
    },
    commonTraits: {
      en: "You possess a razor-sharp 'Analytical Filter', looking at life as a series of trade-offs and investments. If you are choosing a career, you don't just look at the salary; you weigh the 'Return on Investment' of your time, sanity, and network. You are a master of internal math.\n\nYou likely believe in the power of 'Incentives' over morality or rules. You are the first to notice that if a city wants cleaner streets, it shouldn't just ask nicely—it should make littering expensive and recycling rewarding. You value the clarity of why people actually do what they do.\n\nYour worldview is unified and consistent. You see the same fundamental patterns of choice in the boardroom and the living room. You find harmony in the predictive power of logic, trusting that a deep understanding of human motivation is the only way to solve the world's puzzles.",
      zh: "你拥有一层极其锋利的“分析滤镜”，将生活视为一系列的权衡和投资。如果你在选择职业，你不会只看薪水，你会衡量时间、精力和人脉的“投资回报率”。你是内部心理计算的高手。\n\n相对于道德或规章，你可能更相信“激励”的力量。你会第一个注意到，如果一个城市想要街道更干净，不该只是礼貌请求，而应该让乱丢垃圾变得昂贵，让回收变得有奖。你重视“人们为什么实际这么做”背后的清晰逻辑。\n\n你的世界观是统一且一致的。你在董事会和客厅里看到了相同的基本选择模式。你在逻辑的预测力量中寻找到了和谐，相信对人类动机的深刻理解是解决世界谜题的唯一途径。"
    },
    idealScores: { interventionism: -0.7, rationality: 1.0, scope: -0.9, vision: -0.6 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=f1f5f9"
  },
  {
    id: "veblen",
    name: { en: "Thorstein Veblen", zh: "凡勃伦 (Thorstein Veblen)" },
    summary: { en: "The Satirist of Status", zh: "炫耀性消费的“毒舌观察员”" },
    description: {
      en: "You notice how habits, social status, and 'conspicuous consumption' drive our spending, not just simple utility.",
      zh: "你注意到习惯、社会地位和“炫耀性消费”是如何驱动我们的支出，而非仅仅是简单的效用。"
    },
    authorBio: {
      en: "Thorstein Veblen was a brilliant, eccentric sociologist and economist who gave the world the term 'Conspicuous Consumption'. He lived at the height of the Gilded Age and spent his time dissecting the vanity and waste he saw among the ultra-rich and those trying to imitate them.\n\nIn 'The Theory of the Leisure Class', he argued that we don't buy expensive things just because they are better; we buy them to prove that we can afford to waste money. He saw humans not as calculators, but as creatures driven by deep evolutionary urges for prestige and social ranking.\n\nVeblen was a pioneer of Institutional Economics, believing that our choices are shaped more by deep-rooted social habits and cultural 'institutions' than by abstract market laws. He was the ultimate outsider, looking at modern life like a biologist examining a strange species.",
      zh: "索尔斯坦·凡勃伦是一位才华横溢、性格古怪的社会学家和经济学家，他向世界贡献了“炫耀性消费”一词。他生活在镀金时代的顶峰，致力于剖析他在巨富阶层及其模仿者身上所看到的虚荣与浪费。\n\n在《有闲阶级论》中，他主张我们购买昂贵的东西并不只是因为它们更好，而是为了证明我们“浪费得起”。他不将人类视为计算器，而是视为受深层进化冲动驱动、追求声望和社会等级的生物。\n\n凡勃伦是制度经济学的先驱，他相信我们的选择更多是由根深蒂固的社会习惯和文化“制度”塑造的，而非抽象的市场规律。他是一位终极的局外人，像生物学家观察奇怪物种一样观察着现代生活。"
    },
    commonTraits: {
      en: "You possess a 'Cynical Curiosity', and you are often the first to notice that people buy things they don't need just to impress people they don't like. You see the economy as a vast theater of 'Status Games' rather than a simple exchange of goods. You look for the hidden motives.\n\nYou likely identity as a 'Cultural Skeptic'. You are wary of the 'Machine Culture' and the drive for endless efficiency, preferring to ask what our work and consumption really say about who we think we are. You value authenticity over social signaling.\n\nYour worldview is rooted in psychology and sociology. You see the economy as an extension of our tribal history. You find harmony in the truth of human behavior, even if that truth is messy and a little bit ridiculous, believing that understanding our vanities is the first step toward real freedom.",
      zh: "你拥有一种“愤世嫉俗的好奇心”，通常第一个注意到人们购买不真实需要的东西，仅仅是为了给他们并不喜欢的人留下深刻印象。你将经济视为“地位博弈”的大剧场，而非简单的商品交换。你寻找那些隐藏的动机。\n\n你可能对“文化怀疑论者”的身份有共鸣。你警惕“机器文化”和对无止境效率的追求，更倾向于追问我们的工作和消费究竟反映了我们认为自己是谁。你更看重真实性而非社会信号。\n\n你的世界观植根于心理学和社会学。你将经济视为人类部落历史的延续。你在人类行为的真相中寻找到了和谐，即便这个真相混乱且有点可笑，你相信理解我们的虚荣心是通往真实自由的第一步。"
    },
    idealScores: { interventionism: 0.5, rationality: -1.0, scope: -0.2, vision: 0.5 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Milo&backgroundColor=fae8ff"
  },
  {
    id: "robinson",
    name: { en: "Joan Robinson", zh: "琼·罗宾逊 (Joan Robinson)" },
    summary: { en: "The Structural Realist", zh: "不完美市场的“揭秘者”" },
    description: {
      en: "You challenge the easy myths of perfect competition, seeing a world of uncertainty and power imbalances.",
      zh: "你挑战了完美竞争的简单神话，看到了一个充满不确定性和权力失衡的世界。"
    },
    authorBio: {
      en: "Joan Robinson was a powerhouse of the Cambridge School who famously said that the reason to study economics is to 'avoid being deceived by economists'. She was one of the few women in a male-dominated field, and she spent her life dismantling the neat, unrealistic models of her peers.\n\nShe developed the theory of 'Monopsony' and 'Imperfect Competition', showing that real markets are often dominated by powerful buyers and sellers who distort prices. She believed that the economy is deeply historical—meaning that where we started matters just as much as where we think we are going.\n\nRobinson was a critic of the idea that markets always lead to 'fair' equilibrium. She argued that the world is messy, power is unequal, and the 'logic' of the market is often just a cover for the interests of those already at the top.",
      zh: "琼·罗宾逊是剑桥学派的中坚力量，她有句名言：学习经济学的理由就是“避免被经济学家所欺骗”。她是这个男性主导领域中为数不多的女性之一，她的一生致力于拆解同僚们那些整齐却不切实际的模型。\n\n她发展了“买方垄断”和“不完全竞争”理论，证明了真实的市往往由强大的买方和卖方主导，从而扭曲了价格。她相信经济具有深厚的历史性——这意味着我们的起点与我们所认为的去向同样重要。\n\n罗宾逊批评了“市场总能导向‘公平’均衡”的观点。她主张世界是混乱的，权力是不对等的，而市场的“逻辑”往往只是为那些已经处于顶层的人的需求打掩护。"
    },
    commonTraits: {
      en: "You possess a 'Critical Realism', refusing to accept simple answers to complex problems. If a store is the only one in town and keeps its wages low, you don't say 'that's just supply and demand'—you say 'that's market power'. You look for the underlying imbalance.\n\nYou likely identity as a 'Systemic Challenger'. You aren't afraid to question the status quo or the 'experts' who claim that everything is working as it should. You value the messy truth of history and context over the clean, abstract math of the textbook.\n\nYour worldview is rooted in the reality of uncertainty. You see the economy as a site of potential conflict and negotiation. You find harmony in the struggle for clarity, believing that the only way to build a better world is to be brutally honest about how this one actually functions.",
      zh: "你拥有一种“批判性的现实主义”，拒绝接受复杂问题的简单答案。如果镇上只有一家商店且一直压低工资，你不会说“这只是供需关系”——你会说“这是市场权力”。你寻找底层的失衡。\n\n你可能对“系统性的挑战者”这一身份有共鸣。你并不畏惧质疑现状，或是质疑那些声称一切正如预期般运作的“专家”。比起教科书上整洁抽象的数学，你更看重历史与语境中的混乱真相。\n\n你的世界观植根于不确定性的现实中。你将经济视为潜在冲突与博弈的场所。你在追求清晰的过程中寻找到了和谐，相信建立一个更好世界的唯一途径，就是对当前这个世界实际上是如何运作的保持残酷的诚实。"
    },
    idealScores: { interventionism: 0.8, rationality: 0.3, scope: 0.7, vision: 0.4 },
    imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Nala&backgroundColor=e0f2fe"
  }
];
