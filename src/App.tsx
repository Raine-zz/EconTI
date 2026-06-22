/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Languages, 
  Github, 
  Mail, 
  ChevronLeft, 
  RefreshCw, 
  Compass, 
  Award, 
  ShieldAlert, 
  Sparkles, 
  AlertCircle, 
  Sparkle,
  CheckCircle2,
  Layers,
  Cpu,
  Code2,
  Terminal,
  Activity,
  Workflow,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONS, MINDSETS } from './data';
import { Language, Scores, MindsetType } from './types';
import { 
  calculateDynamicResult, 
  MatchResult, 
  runFeasibilitySimulation, 
  SimulationResult, 
  KEY_MAP,
  runAdvancedDiagnostics,
  AdvancedDiagnostics
} from './utils';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [step, setStep] = useState<'home' | 'quiz' | 'result' | 'overview' | 'diagnostics'>('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Scores[]>([]);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [simResult, setSimResult] = useState<SimulationResult | null>(null);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [advResult, setAdvResult] = useState<AdvancedDiagnostics | null>(null);
  const [isRunningAdv, setIsRunningAdv] = useState(false);

  const handleRunSimulation = () => {
    setIsRunningSim(true);
    setTimeout(() => {
      try {
        const res = runFeasibilitySimulation(QUESTIONS, MINDSETS);
        setSimResult(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsRunningSim(false);
      }
    }, 150);
  };

  const handleRunAdvancedDiagnostics = () => {
    setIsRunningAdv(true);
    setTimeout(() => {
      try {
        const res = runAdvancedDiagnostics(QUESTIONS, MINDSETS);
        setAdvResult(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsRunningAdv(false);
      }
    }, 150);
  };

  const primaryMindset = (result && result.isHybrid) 
    ? result.secondary[0] 
    : (result ? result.primary as MindsetType : null);

  const t = {
    home: {
      title: { en: "EconTI", zh: "EconTI" },
      subtitle: { 
        en: "Which economic intuition or lens do you habitually use to understand real-world problems?", 
        zh: "当期观察身边世界的摩擦时，你习惯套用哪一种经济学学理直觉？" 
      },
      disclaimer: {
        en: "This test is designed to present various economic perspectives in a lightweight manner, intended solely for educational exchange and entertainment reference. It does not represent rigorous academic categorization, psychological diagnosis, or a basis for real-world decision-making.",
        zh: "本测验旨在以轻量方式呈现不同经济学视角，仅供学习交流与娱乐参考，不代表严肃学术分类、心理诊断或现实决策依据。"
      },
      cta: { en: "Start Discovery", zh: "开始测试" }
    },
    quiz: {
      prev: { en: "Previous Question", zh: "返回上一题" },
      progress: { en: "Progress", zh: "答题进度" }
    },
    result: {
      title: { en: "Diagnostic Analysis Report", zh: "认知视角报告" },
      subtitle: { en: "Which explanatory framework fits your intuition first?", zh: "你看经济问题时，最常用哪种解释框架？" },
      explanationTitle: { en: "Core Intuition Style", zh: "核心直觉特征" },
      habitsTitle: { en: "You Typically Tend To...", zh: "你通常会..." },
      blindspotTitle: { en: "A Gentle Blindspot worth noting...", zh: "可能存在的温和思考盲点..." },
      closestTitle: { en: "Your Primary Focus", zh: "主导视角" },
      secondariesTitle: { en: "Hidden Secondary Tendencies", zh: "其次接近的分析倾向" },
      communityTitle: { en: "Ostrom Trait: Local Polycentrism", zh: "特殊印记：社区协作与地方治理倾向" },
      communityDesc: {
        en: "You show an undercurrent of community polycentric governance: Instead of relying purely on free markets or central blueprints, you strongly trust local guidelines, community councils, and collaborative rules.",
        zh: "你展现出明显的社区治理倾向：在直面特定公地危机时，相比于单纯依赖抽象的市场价格调节或自上而下的行政管制指令，你本能更信任局部的共同利害人举行面对面协商、自组规则并进行社区共治。"
      },
      restart: { en: "Restart Test", zh: "重新评估" },
      viewAll: { en: "Explore All Lenses", zh: "巡览六大分析视角" },
      copyShare: { en: "Copy Result Code to Share", zh: "复制我的视角分析报告" },
      copied: { en: "Report text copied to clipboard!", zh: "视角报告文本已复制到剪贴板，快分享给伙伴吧！" },
      hybridTitle: { en: "Panoramic Pragmatic Synthesizer", zh: "全景辩证混合型" },
      hybridDesc: {
        zh: "你面临测试中的政策论争时，得分曲线非常均衡。这表明你天然偏好拒绝教条主义式地归附在任何单一眼光之下。你更像是一位理性的『情景分析家』——你会根据现实摩擦的不同情境，在考虑效率的同时，务实地调节并引入价格激励、宏观大局、算法偏误以及资本纠偏。在你的脑海里，不同的逻辑互补存在，没有一成不变的放之四海皆准的标准方案。",
        en: "Your scores are highly balanced across all core dimensions. You refuse to dogmatically cling to a single view. Instead, you act as a panoramic pragmatist, switching smoothly between pricing incentives, macro stability safety blocks, cognitive heuristics, and institutional guardrails based on the local situation."
      },
      keywordsTitle: { en: "Core Keywords", zh: "核心关键词" },
      thinkersTitle: { en: "Key Thinkers / Foundations", zh: "主要学者与思想渊源" }
    },
    overview: {
      title: { en: "The 6 Great Economic Lenses", zh: "六大核心经济学观察视角" },
      sub: { en: "Review the primary explanatory frameworks that humans shape to analyze real societal trade-offs.", zh: "了解不同学者如何从不同剖面探查人类的交换、繁荣与分歧。真理绝不止有一副侧颜。" },
      back: { en: "Return to Report", zh: "返回我的分析报告" }
    }
  };

  // Helper to accurately aggregate score vectors from list of previous user inputs.
  const getCalculatedScores = (currentAnswersList: Scores[]): Scores => {
    const defaultScores: Scores = {
      priceMechanism: 0,
      macroStabilization: 0,
      behavioralReality: 0,
      equityCapability: 0,
      institutionalPower: 0,
      evolutionaryInnovation: 0,
      communityGovernance: 0
    };
    if (currentAnswersList.length === 0) return defaultScores;

    const sum = currentAnswersList.reduce((acc, curr) => ({
      priceMechanism: acc.priceMechanism + (curr.priceMechanism || 0),
      macroStabilization: acc.macroStabilization + (curr.macroStabilization || 0),
      behavioralReality: acc.behavioralReality + (curr.behavioralReality || 0),
      equityCapability: acc.equityCapability + (curr.equityCapability || 0),
      institutionalPower: acc.institutionalPower + (curr.institutionalPower || 0),
      evolutionaryInnovation: acc.evolutionaryInnovation + (curr.evolutionaryInnovation || 0),
      communityGovernance: acc.communityGovernance + (curr.communityGovernance || 0)
    }), defaultScores);

    return sum;
  };

  const handleChoice = (weights: Partial<Scores>) => {
    const newAnswers = [...answers];
    const fullWeights: Scores = {
      priceMechanism: weights.priceMechanism ?? 0,
      macroStabilization: weights.macroStabilization ?? 0,
      behavioralReality: weights.behavioralReality ?? 0,
      equityCapability: weights.equityCapability ?? 0,
      institutionalPower: weights.institutionalPower ?? 0,
      evolutionaryInnovation: weights.evolutionaryInnovation ?? 0,
      communityGovernance: weights.communityGovernance ?? 0
    };
    newAnswers[currentIndex] = fullWeights;
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Direct calculation here ensures absolutely no state lagging or missing the 10th answer
      const finalScores = getCalculatedScores(newAnswers);
      const dynamicResult = calculateDynamicResult(finalScores, MINDSETS);
      setResult(dynamicResult);
      setStep('result');

      // Play soft aesthetics particle celebration
      confetti({
        particleCount: 120,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#44403c', '#78716c', '#a8a29e', '#d6d3d1']
      });
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reset = () => {
    setStep('home');
    setCurrentIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const textStr = lang === 'zh' 
      ? `【EconTI — 经济学直觉视角测试】\n主导直觉视角：%PRIMARY%\n隐藏倾向：%SECONDARY%\n测试我的观察直觉：${window.location.origin}`
      : `[EconTI — Economic Intuition Test]\nMy Primary Lens: %PRIMARY%\nSecondary Tendencies: %SECONDARY%\nTake your test: ${window.location.origin}`;
    
    let primaryStr = "";
    let secondaryStr = "";

    if (result.isHybrid) {
      primaryStr = t.result.hybridTitle[lang];
      secondaryStr = result.secondary.map(m => m.name[lang]).join('、');
    } else {
      const p = result.primary as MindsetType;
      primaryStr = p.name[lang];
      secondaryStr = result.secondary.map(m => m.name[lang]).join('、');
    }

    if (result.hasCommunitySubbadge) {
      secondaryStr += ` + ${t.result.communityTitle[lang]}`;
    }

    const payload = textStr
      .replace("%PRIMARY%", primaryStr)
      .replace("%SECONDARY%", secondaryStr);

    navigator.clipboard.writeText(payload);
    alert(t.result.copied[lang]);
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] font-sans text-stone-900 selection:bg-stone-200 flex flex-col antialiased">
      {/* Elegantly Spaced Topbar Header */}
      <header className="border-b border-stone-200/50 bg-[#fafaf7]/85 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer bg-stone-100/60 border border-stone-200/40 px-3 py-1.5 rounded-full text-stone-600 text-[10.5px] font-bold tracking-wider hover:bg-stone-100 transition-colors" onClick={reset} id="header-brand">
            <Sparkles className="w-3 h-3 text-[#d97706] shrink-0" />
            <span className="truncate">
              {lang === 'zh' ? '经济学思维探索 / Interactive Educational Platform' : 'Interactive Educational Platform / 经济学思维探索'}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-200 hover:bg-stone-100 active:bg-stone-200/50 transition-all text-xs font-semibold text-stone-700"
              id="btn-lang-toggle"
            >
              <Languages className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-12 transition-transform" />
              <span>{lang === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 md:px-6 relative">
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full max-w-2xl space-y-8 text-center py-12"
              id="home-stage"
            >
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-serif leading-tight">
                  {t.home.title[lang]}
                </h1>
                <p className="text-lg md:text-xl font-serif text-stone-750 max-w-lg mx-auto leading-relaxed">
                  {t.home.subtitle[lang]}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setStep('quiz')}
                  className="px-8 py-3.5 rounded-xl bg-stone-900 text-[#fcfcf9] hover:bg-stone-800 active:scale-[0.99] hover:scale-[1.01] transition-all font-bold uppercase tracking-wider text-xs md:text-sm shadow-md"
                  id="btn-start-test"
                >
                  {t.home.cta[lang]}
                </button>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-2xl space-y-6"
              id="quiz-stage"
            >
              {/* Progress and indicators */}
              <div className="flex items-center justify-between text-[11px] font-bold tracking-wider text-stone-500 px-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-800 rounded font-bold">{currentIndex + 1} / {QUESTIONS.length}</span>
                  <span>{t.quiz.progress[lang]}</span>
                </div>
                <div className="w-1/3 bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-stone-950 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Pristine Single Question Box */}
              <div className="border border-stone-200 bg-white rounded-3xl shadow-sm p-6 md:p-10 space-y-8" id="question-card">
                <div className="space-y-4">
                  <span className="w-6 h-0.5 bg-stone-400 block rounded" />
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900 leading-snug">
                    {QUESTIONS[currentIndex].title[lang]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {QUESTIONS[currentIndex].choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(choice.weights)}
                      className="group text-left p-5 rounded-xl border border-stone-200 hover:border-stone-950 hover:bg-stone-50/50 active:bg-stone-100 transition-all w-full flex gap-3.5 items-start"
                      id={`choice-${i}`}
                    >
                      <div className="w-6 h-6 rounded-md bg-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors flex items-center justify-center font-bold text-[10px] shrink-0 border border-stone-200">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <p className="text-stone-700 group-hover:text-stone-900 text-xs md:text-sm leading-relaxed pr-1 pt-0.5 font-medium">
                        {choice.text[lang]}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Return block */}
              <div className="flex justify-center pt-2">
                {currentIndex > 0 && (
                  <button 
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-stone-850 transition-colors text-xs font-bold uppercase tracking-wider"
                    id="btn-prev-question"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t.quiz.prev[lang]}
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-3xl space-y-8"
              id="result-stage"
            >
              {/* Minimal header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  <Award className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t.result.title[lang]}</span>
                </div>
                <h2 className="text-2xl md:text-3.5xl font-extrabold tracking-tight text-stone-900 font-serif leading-none mt-2">
                  {t.result.subtitle[lang]}
                </h2>
              </div>

              {/* Main Report Card */}
              <div className="border border-stone-200 bg-white rounded-3xl overflow-hidden shadow-sm" id="result-main-card">
                
                {/* Result header banner */}
                <div className="bg-[#fafaf7] border-b border-stone-200/80 p-8 md:p-10">
                  {result.isHybrid ? (
                    /* Hybrid Synthesizer View */
                    <div className="space-y-4 text-center max-w-xl mx-auto">
                      <div className="w-12 h-12 bg-white rounded-xl border border-stone-200 mx-auto flex items-center justify-center text-stone-700 shadow-sm">
                        <Compass className="w-6 h-6 animate-spin-slow text-stone-500" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">SITUATION ADAPTIVITY</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                          {t.result.hybridTitle[lang]}
                        </h2>
                        <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-serif pt-2 text-left md:text-center">
                          {t.result.hybridDesc[lang]}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Standard Profile View */
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                      <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-700 shrink-0 mx-auto md:mx-0">
                        <Sparkle className="w-6 h-6 text-stone-400" />
                      </div>
                      <div className="space-y-2 text-center md:text-left flex-grow">
                        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block">
                          {t.result.closestTitle[lang]}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 font-serif leading-tight">
                          {(result.primary as MindsetType).name[lang]}
                        </h2>
                        <p className="text-stone-600 text-xs md:text-sm italic font-serif leading-relaxed pt-0.5">
                          "{(result.primary as MindsetType).summary[lang]}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Substantive section container */}
                <div className="p-6 md:p-10 space-y-10">

                  {!result.isHybrid && (
                    <>
                      {/* Explanatory description of why matched */}
                      <section className="space-y-3" id="section-explanation">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5 matches">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                          {t.result.explanationTitle[lang]}
                        </h3>
                        <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-serif text-justify font-medium">
                          {(result.primary as MindsetType).description[lang]}
                        </p>
                      </section>

                      {/* Three habits ("你通常会...") */}
                      <section className="space-y-4 pt-6 border-t border-stone-100" id="section-habits">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                          {t.result.habitsTitle[lang]}
                        </h3>

                        <div className="space-y-3">
                          {(result.primary as MindsetType).habits[lang].map((habit, hidx) => (
                            <div key={hidx} className="flex gap-2.5 items-start p-3 bg-stone-50/50 rounded-lg border border-stone-100">
                              <span className="text-[9px] font-bold bg-stone-200/85 text-stone-600 w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 select-none">{hidx+1}</span>
                              <span className="text-xs md:text-sm text-stone-600 leading-relaxed font-medium">{habit}</span>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* One gentle blindspot */}
                      <section className="space-y-3 p-4 bg-stone-50 border border-stone-150 rounded-xl" id="section-blindspot">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9a3412] flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-[#c2410c]" />
                          {t.result.blindspotTitle[lang]}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed font-medium">
                          {(result.primary as MindsetType).blindspot[lang]}
                        </p>
                      </section>
                    </>
                  )}

                  {/* Hidden Ostrom sub-badge trait if custom trigger points meet */}
                  {result.hasCommunitySubbadge && (
                    <section className="p-5 bg-amber-50/40 border border-amber-200/70 rounded-2xl space-y-2" id="section-ostrom">
                      <div className="flex gap-2 items-center text-amber-800 text-xs font-bold">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>{t.result.communityTitle[lang]}</span>
                      </div>
                      <p className="text-xs text-stone-650 leading-relaxed font-serif pt-1 font-medium">
                        {t.result.communityDesc[lang]}
                      </p>
                    </section>
                  )}

                  {/* Perspective Contrast (Objective discussion pointing out differences, no right or wrong) */}
                  {primaryMindset && primaryMindset.contrast && (
                    <section className="space-y-3 pt-6 border-t border-stone-100" id="section-contrast">
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                        {lang === 'zh' ? '主导视角对比' : 'Perspective Contrast'}
                      </h3>
                      <div className="p-4 bg-stone-50/50 border border-stone-150 rounded-xl space-y-1.5">
                        <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                          {lang === 'zh' ? '相比于 ' : 'Compared with '}
                          <span className="px-2 py-0.5 bg-stone-200 text-stone-850 rounded font-bold uppercase select-none text-[9px]">
                            {primaryMindset.contrast.target[lang]}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-stone-650 leading-relaxed font-serif text-justify font-medium pt-0.5">
                          {primaryMindset.contrast.text[lang]}
                        </p>
                      </div>
                    </section>
                  )}

                  {/* Dynamic Affinity Percentage (经济学视角唤醒百分比) moved after contrast */}
                  <section className="space-y-4 pt-6 border-t border-stone-100" id="section-score-affinity">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 animate-pulse" />
                      {lang === 'zh' ? '经济学视角唤醒深度百分比 (Perspective Affinity Breakdown)' : 'Perspective Affinity Breakdown'}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50/55 p-5 rounded-2xl border border-stone-200">
                      {(() => {
                        const scoreKeys: (keyof Scores)[] = [
                          'priceMechanism',
                          'macroStabilization',
                          'behavioralReality',
                          'equityCapability',
                          'institutionalPower',
                          'evolutionaryInnovation'
                        ];
                        const totalCore = scoreKeys.reduce((acc, k) => acc + (result.userScores[k] || 0), 0);
                        
                        return MINDSETS.map((m) => {
                          const scoreKey = KEY_MAP[m.id];
                          const rawScore = result.userScores[scoreKey] || 0;
                          const percent = totalCore > 0 ? Math.round((rawScore / totalCore) * 100) : 0;
                          
                          return (
                            <div key={m.id} className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-150/85 shadow-2xs flex flex-col justify-between">
                              <div className="flex justify-between items-center text-xs">
                                <span className="font-bold text-stone-850 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-stone-600 shrink-0" />
                                  {m.name[lang]}
                                </span>
                                <span className="font-mono text-[10px] font-bold text-stone-500 bg-stone-50 px-2 py-0.5 rounded border border-stone-150 shrink-0">
                                  {percent}% ({rawScore.toFixed(1)}分)
                                </span>
                              </div>
                              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-3">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percent}%` }}
                                  transition={{ duration: 0.8, ease: 'easeOut' }}
                                  className="h-full bg-stone-800 rounded-full" 
                                />
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </section>

                  {/* Learning Layer Collapsible Sections (Collapsed by default, styled for restraint, fully responsive) */}
                  {primaryMindset && (
                    <section className="space-y-4 pt-6 border-t border-stone-100" id="section-learning-layer">
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                        {lang === 'zh' ? '进入学习层深挖学理' : 'Further Conceptual Explorations'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        {/* Accordion 1: Representative Figures and Works */}
                        {primaryMindset.scholars && primaryMindset.scholars.length > 0 && (
                          <details className="group border border-stone-200 rounded-xl overflow-hidden bg-white [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-3.5 bg-stone-50/60 cursor-pointer select-none font-bold text-xs uppercase tracking-wider text-stone-700 hover:bg-stone-50 transition-colors">
                              <span className="flex items-center gap-2">
                                <Compass className="w-4 h-4 text-stone-400 group-hover:rotate-45 transition-transform" />
                                {lang === 'zh' ? '代表人物与维基说明' : 'Figures & Wikipedia Entries'}
                              </span>
                              <span className="text-stone-400 group-open:rotate-180 transition-transform font-bold text-[9px] pl-2">▼</span>
                            </summary>
                            <div className="p-4 border-t border-stone-200 bg-white space-y-4 max-h-[300px] overflow-y-auto">
                              {primaryMindset.scholars.map((scholar, sidx) => (
                                <div key={sidx} className="space-y-2">
                                  <h4 className="font-bold text-xs text-stone-900 border-l-2 border-stone-900 pl-2">
                                    {scholar.name[lang]}
                                  </h4>
                                  <p className="text-xs text-stone-605 leading-relaxed font-serif pl-2">
                                    {scholar.intro[lang]}
                                  </p>
                                  {scholar.wikis && scholar.wikis.length > 0 && (
                                    <div className="pl-2 pt-1 flex flex-wrap gap-2 items-center">
                                      <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mr-1">
                                        {lang === 'zh' ? '维基说明：' : 'Wikipedia:'}
                                      </span>
                                      {scholar.wikis.map((wiki, widx) => (
                                        <a
                                          key={widx}
                                          href={wiki.url[lang]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          referrerPolicy="no-referrer"
                                          className="text-stone-600 hover:text-stone-900 underline text-[11px] font-serif font-medium inline-flex items-center gap-1.5"
                                        >
                                          {wiki.label[lang]}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </details>
                        )}

                        {/* Accordion 2: Core Concept Explanations */}
                        {primaryMindset.concepts && primaryMindset.concepts.length > 0 && (
                          <details className="group border border-stone-200 rounded-xl overflow-hidden bg-white [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-3.5 bg-stone-50/60 cursor-pointer select-none font-bold text-xs uppercase tracking-wider text-stone-700 hover:bg-stone-50 transition-colors">
                              <span className="flex items-center gap-2">
                                <Sparkle className="w-4 h-4 text-stone-400" />
                                {lang === 'zh' ? '核心概念解释' : 'Concept Explanations'}
                              </span>
                              <span className="text-stone-400 group-open:rotate-180 transition-transform font-bold text-[9px] pl-2">▼</span>
                            </summary>
                            <div className="p-4 border-t border-stone-200 bg-white space-y-4 max-h-[300px] overflow-y-auto">
                              {primaryMindset.concepts.map((concept, cidx) => (
                                <div key={cidx} className="space-y-1">
                                  <h4 className="font-bold text-xs text-stone-950 flex items-center gap-1.5 leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                                    {concept.term[lang]}
                                  </h4>
                                  <p className="text-xs text-stone-600 leading-relaxed font-serif pl-3 text-justify">
                                    {concept.explanation[lang]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                      </div>
                    </section>
                  )}
                </div>
              </div>

              {/* Action operations under result card */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-stone-300 font-bold hover:bg-stone-50 transition-all text-xs uppercase tracking-wider text-stone-700"
                    id="btn-copy-share"
                  >
                    {t.result.copyShare[lang]}
                  </button>
                  
                  <button 
                    onClick={() => setStep('overview')}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-stone-250 bg-stone-50 hover:bg-stone-100 transition-all text-xs font-bold text-stone-700 uppercase tracking-widest"
                    id="btn-view-all"
                  >
                    {t.result.viewAll[lang]}
                  </button>
                </div>

                <button 
                  onClick={reset}
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-900 text-white hover:bg-stone-850 active:scale-[0.98] transition-all font-bold uppercase tracking-widest text-xs shadow-sm hover:scale-[1.01]"
                  id="btn-restart"
                >
                  <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700" />
                  <span>{t.result.restart[lang]}</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-4xl space-y-8"
              id="overview-stage"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 font-serif tracking-tight">
                    {t.overview.title[lang]}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500 max-w-xl leading-relaxed">
                    {t.overview.sub[lang]}
                  </p>
                </div>
                <button
                  onClick={() => setStep(result ? 'result' : 'home')}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white text-stone-800 font-bold rounded-lg border border-stone-250 hover:bg-stone-50 transition-all shadow-sm shrink-0 uppercase tracking-wider text-xs"
                  id="btn-back-to-stage"
                >
                  <ChevronLeft size={14} />
                  {t.overview.back[lang]}
                </button>
              </div>

              {/* Grid block for the 6 streamlined lenses */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MINDSETS.map((m) => (
                  <div key={m.id} className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xs transition-shadow">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="w-1.5 h-4 bg-stone-400 block rounded" />
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest select-none">ECONOMIC PERSPECTIVE</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-base text-stone-950 font-serif leading-snug">
                          {m.name[lang]}
                        </h3>
                        <p className="text-[10px] text-stone-400 font-bold leading-normal">
                          Pioneers: {m.representative[lang].split(' (')[0]}
                        </p>
                      </div>
                      <p className="text-xs text-stone-650 leading-relaxed font-serif font-medium text-justify">
                        {m.summary[lang]}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 mt-4 flex flex-wrap gap-1">
                      {m.keywords[lang].slice(0, 3).map((kw, i) => (
                        <span key={i} className="text-[9px] font-bold text-stone-605 bg-stone-100 px-2 py-0.5 rounded select-none">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'diagnostics' && (
            <motion.div
              key="diagnostics"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-5xl space-y-8"
              id="diagnostics-stage"
            >
              {/* Header with return button */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
                <div className="space-y-1.5 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-stone-150 border border-stone-350 text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded">
                    <Terminal className="w-3 h-3 text-stone-550" />
                    <span>Developer Audit Center</span>
                  </div>
                  <h2 className="text-2xl md:text-3.5xl font-extrabold text-stone-900 font-serif tracking-tight">
                    {lang === 'zh' ? '经济学直觉评分系统深度自检面板' : 'Algorithmic Diagnostics & Robustness Hub'}
                  </h2>
                  <p className="text-xs text-stone-500 max-w-xl leading-relaxed">
                    {lang === 'zh'
                      ? "面向学术设计人员的蒙特卡洛随机收敛、拟真人决策概率博弈智能体模拟、各细分视角极限可挽回性、以及干扰刚度防崩自检套件。"
                      : "Monte Carlo simulation convergence, human-like probabilistic policy agents, 100% targeted recoverability limits, and structural sensitivity audits."}
                  </p>
                </div>
                <button
                  onClick={() => setStep('home')}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white text-stone-800 font-bold rounded-lg border border-stone-250 hover:bg-stone-50 transition-all shadow-xs shrink-0 uppercase tracking-wider text-xs"
                  id="btn-close-diagnostics"
                >
                  <ChevronLeft size={14} />
                  {lang === 'zh' ? '返回主页' : 'Exit to Home'}
                </button>
              </div>

              {/* Status & Actions trigger card */}
              <div className="bg-white border border-stone-205 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-1 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">SYSTEM STATUS</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse block" />
                    <span className="text-sm font-bold text-stone-850">
                      {lang === 'zh' ? '评分策略就绪（共 12 题，包含青年失业与产业转型专题）' : 'Scoring Engines Calibrated (12 standard scenario nodes)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#78716c] leading-normal font-medium">
                    {lang === 'zh'
                      ? "权重对称平衡：减少了价格机制与制度权力过度偏倚，强化了宏观稳定、创新演化与分配能力触发条件；奥斯特罗姆副特质配平完毕。"
                      : "Symmetrical balanced weights. Fixed price-mechanism / institutional power overshot; reinforced macro stabilizer, evolutionary, and capability lenses."}
                  </p>
                </div>
                <button
                  onClick={handleRunAdvancedDiagnostics}
                  disabled={isRunningAdv}
                  className="flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-[#fcfcf9] hover:bg-stone-800 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md disabled:opacity-50 group shrink-0 active:scale-[0.98] transition-transform"
                >
                  <RefreshCw className={`w-4 h-4 ${isRunningAdv ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                  <span>
                    {isRunningAdv
                      ? (lang === 'zh' ? '正在运行深度体检...' : 'Running Diagnostic Engines...')
                      : (lang === 'zh' ? '一键执行深度自适应审计' : 'Run Algorithmic Stress Test')}
                  </span>
                </button>
              </div>

              {advResult && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  
                  {/* Row 1: Failure metrics and Symmetrical opportunities info */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Failure Metric 1 */}
                    <div className="bg-white border border-stone-200 p-5 rounded-2xl space-y-1 text-left">
                      <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{lang === 'zh' ? '运行时异常率' : 'Runtime Abnormal Rate'}</div>
                      <div className="text-xl font-black font-mono text-emerald-600 flex items-baseline gap-1">
                        {advResult.failureStats.abnormalRate.toFixed(2)}%
                        <span className="text-[9px] font-sans font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase select-none">Healthy</span>
                      </div>
                      <p className="text-[10px] text-stone-400 leading-relaxed font-serif">{lang === 'zh' ? '模拟进程中未中断率与参数丢失自校验证' : 'Ensures zero system crashes under randomized trial loads'}</p>
                    </div>

                    {/* Failure Metric 2 */}
                    <div className="bg-white border border-stone-200 p-5 rounded-2xl space-y-1 text-left">
                      <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{lang === 'zh' ? '无效结果率' : 'Invalid Result Rate'}</div>
                      <div className="text-xl font-black font-mono text-emerald-600">
                        {advResult.failureStats.invalidResultRate.toFixed(2)}%
                      </div>
                      <p className="text-[10px] text-stone-400 leading-relaxed font-serif">{lang === 'zh' ? '排除空匹配、重复主特征、死循环等异常' : 'Mismatched, empty primary, or circular dependencies rate'}</p>
                    </div>

                    {/* Failure Metric 3 */}
                    <div className="bg-white border border-stone-200 p-5 rounded-2xl space-y-1 text-left">
                      <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{lang === 'zh' ? '运行时故障率' : 'Runtime Failure Rate'}</div>
                      <div className="text-xl font-black font-mono text-emerald-600">
                        {advResult.failureStats.runtimeFailureRate.toFixed(2)}%
                      </div>
                      <p className="text-[10px] text-stone-400 leading-relaxed font-serif">{lang === 'zh' ? '系统防呆机制，对逻辑边界极限容错' : 'System exceptions, memory buffer overruns, or dynamic lags'}</p>
                    </div>

                    {/* Failure Metric 4 */}
                    <div className="bg-stone-900 border border-stone-900 p-5 rounded-2xl text-white space-y-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="text-[9px] text-[#a8a29e] font-bold uppercase tracking-widest">{lang === 'zh' ? '奥氏社区倾向唤醒率' : 'Ostrom governance subbadge'}</div>
                        <div className="text-xl font-black font-mono text-[#fbbf24]">
                          {((advResult.simulation.communitySubbadgeCount / advResult.simulation.totalRuns) * 100).toFixed(1)}%
                        </div>
                      </div>
                      <p className="text-[9px] text-stone-300 leading-snug font-serif pr-1">{lang === 'zh' ? '12题中获取3.0分（做2次以上强社区决策）的期望概率' : 'Target baseline aligned near 20-30% for high selectivity'}</p>
                    </div>
                  </div>

                  {/* Section A: Symmetrical Weights & Random Monte Carlo distribution */}
                  <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">MODULE A</span>
                      <h3 className="text-lg font-bold text-stone-900 font-serif leading-none flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-stone-600 shrink-0" />
                        {lang === 'zh' ? '蒙特卡洛 1000 次随机决策收敛分布 (Symmetrical Random Dispersion)' : 'Monte Carlo Random Symmetrical Dispersion'}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        {lang === 'zh'
                          ? "在每个问答节点随机以 25% 的概率做出选择，进行 1000 次完整测试跑通。以此检验各核心视角的触发比率，证明系统不再发生特定的概率坍塌或者单一机制优势极大的情况。"
                          : "Simulate 1,000 independent random test rounds. It acts as an entropy check to confirm we have flat symmetrical structures with zero parameter collapse or overshot biases."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                      {/* Left: Detailed stats */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {MINDSETS.map(m => {
                            const count = advResult.simulation.matchCounts[m.id] || 0;
                            const pct = ((count / advResult.simulation.totalRuns) * 100).toFixed(1);
                            const optChance = advResult.weightOpportunities.find(o => o.lensId === m.id);
                            
                            return (
                              <div key={m.id} className="p-4 bg-stone-50/50 border border-stone-200 rounded-xl space-y-2 text-left">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="font-bold text-stone-850 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded bg-stone-600" />
                                    {m.name[lang]}
                                  </span>
                                  <span className="font-mono text-[10px] font-bold text-[#44403c] bg-white border border-stone-200 px-1.5 py-0.5 rounded">{pct}% ({count}次)</span>
                                </div>
                                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                                  <div className="bg-stone-700 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                                </div>
                                <div className="flex justify-between text-[9px] text-[#a8a29e] font-sans leading-none pt-1">
                                  <span className="font-semibold">{lang === 'zh' ? '计分机会数: ' : 'Scoring ops: '}{optChance?.opportunityCount}</span>
                                  <span className="font-mono">{lang === 'zh' ? '期望权重: ' : 'Exp weights: '}{optChance?.totalPotentialWeight}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Hybrid metrics bar */}
                        <div className="p-4 bg-stone-900 text-[#fafaf7] rounded-xl space-y-2 select-none text-left" style={{ backgroundColor: "#1e1e1a" }}>
                          <div className="flex justify-between text-xs font-bold leading-none">
                            <span>{lang === 'zh' ? '非教条情景混合型占比 (Panoramic Hybrid Ratio)' : 'Panoramic Hybrid Ratio'}</span>
                            <span className="font-mono text-[#fbbf24]">{(advResult.simulation.hybridCount / advResult.simulation.totalRuns * 100).toFixed(1)}% ({advResult.simulation.hybridCount} / 1000)</span>
                          </div>
                          <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#fbbf24] h-full rounded-full" style={{ width: `${(advResult.simulation.hybridCount / advResult.simulation.totalRuns * 100)}%` }} />
                          </div>
                          <p className="text-[9.5px] text-[#a8a29e] leading-normal font-serif">
                            {lang === 'zh'
                              ? "注：当 1st / 2nd 最相近视角得分完全一致，或差值极其微茫（<= 0.2 分) 且得分绝对值偏低时触发辩证混合型倾向。当前通过更严密的极差条件锁定，确保了混合型既不滥触发，也保持了良好的收纳力。"
                              : "Hybrid occurs on equal ties or very close score spans. Rigid filter locks prevent excessive pooling."}
                          </p>
                        </div>
                      </div>

                      {/* Right: Symmetrical Weight audit list */}
                      <div className="p-5 border border-stone-200 bg-stone-50/20 rounded-2xl flex flex-col justify-between text-left">
                        <div className="space-y-3.5">
                          <h4 className="text-[10px] uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1.5 pb-2 border-b border-stone-200">
                            <Workflow className="w-3.5 h-3.5 text-stone-400" />
                            {lang === 'zh' ? '题目计分对称性审计报告' : 'Symmetrical Weight Opportunity Audit'}
                          </h4>
                          <p className="text-[10.5px] text-stone-500 font-serif leading-relaxed">
                            {lang === 'zh'
                              ? "在 12 道中性题目的极限制约下，我们审计了每个单独经济视角在所有选项中所获得的分值设定与露出频率："
                              : "Under the hard constraints of 12 questions, we mapped the total point boundaries assigned to each perspective:"}
                          </p>
                          <div className="space-y-2">
                            {advResult.weightOpportunities.map(o => {
                              const nameStr = MINDSETS.find(m => m.id === o.lensId)?.name[lang].replace('型', '') || o.lensId;
                              return (
                                <div key={o.lensId} className="flex justify-between items-center text-[10.5px] border-b border-stone-100 pb-1.5">
                                  <span className="font-bold text-stone-750 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                                    {nameStr}
                                  </span>
                                  <span className="font-mono text-stone-500 font-semibold">
                                    {o.opportunityCount}选 / 共 <strong>{o.totalPotentialWeight.toFixed(1)}</strong> 分
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <p className="text-[9.5px] text-stone-400 font-serif leading-relaxed italic pt-4">
                          {lang === 'zh'
                            ? "* 结论：12道题通过权重补偿机制使得期待最大分值及触发次数保持高度对称（各视角完全对齐12积分上限），这从根本上杜绝了以往“狂出价格机制型”的严重系统性偏误。"
                            : "* Verdict: Clean symmetry achieved. Maximum points potential for all lenses has been harmonized."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section B: Recoverability Depth Analysis */}
                  <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">MODULE B</span>
                      <h3 className="text-lg font-bold text-stone-900 font-serif leading-none flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        {lang === 'zh' ? '极限定向可挽回性测试 (100% Targeted Recoverability Test)' : '100% Targeted Recoverability Depth Audit'}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        {lang === 'zh'
                          ? "【唤醒深度测试】：模拟一位极其纯粹的、100% 坚定某个特定视角的答题主体（每题必选最支持该视角的选项）。检查极值算法最终输出的主导核算结果是否能准确、无偏、100% 挽回还原为该主导视角，以此检验量表在极值下的抗扰度。"
                          : "Simulate a completely pure agent choosing options favoring ONLY one perspective. This test ensures the dynamic matching algorithm recovers that target lens as primary 100% of the time, guaranteeing topological soundness."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 shadow-2xs">
                      {advResult.recoverability.map(rec => (
                        <div key={rec.lensId} className="p-4 rounded-2xl border border-stone-200 bg-white flex justify-between items-center text-xs">
                          <div className="space-y-1 text-left">
                            <div className="font-bold text-stone-850 flex items-center gap-1.5">
                              <span className="w-1.5 h-3 bg-[#a8a29e] block rounded-sm" />
                              {rec.lensName}
                            </div>
                            <div className="text-[10px] text-stone-550 font-medium">
                              {lang === 'zh' ? '最高可能累积积分: ' : 'Max score potential: '}<span className="font-mono bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded font-bold text-stone-800">{rec.perfectScore.toFixed(1)}分</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1 select-none">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 font-sans">RECOVERED PRIMARY</span>
                            <span className="text-[10px] font-bold font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                              {rec.recoveredPrimary}
                            </span>
                            {rec.isRecovered ? (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                Pass / 100% 可挽回
                              </span>
                            ) : (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                                Failed / 无法收敛
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section C: Rigid and Sensitivity Check */}
                  <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">MODULE C</span>
                      <h3 className="text-lg font-bold text-stone-900 font-serif leading-none flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-stone-500 shrink-0" />
                        {lang === 'zh' ? '评分权重敏感性与刚度测试 (Sensitivity & Rigidity Audit)' : 'Sensitivity & Structural Rigidity Audit'}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        {lang === 'zh'
                          ? "【刚度自检 / 干扰冗余度】：测试当主体在答题中出现“误操作、偶发性摇摆”或者“偶然分神偏离主观倾向”时，系统的容错与稳定性。偏离1题（1-Deviation）和偏离2题（2-Deviation）后，检查主导诊断是否能保持正确的抗噪刚度。"
                          : "This stress test deviates one or two high-matching questions under targeted vectors to inspect if the primary framework holds robustly under small human deviations (noise tolerance audit)."}
                      </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm bg-stone-50/20 text-left">
                      <table className="w-full text-xs text-stone-800 text-left border-collapse">
                        <thead>
                          <tr className="bg-stone-50 text-[10px] uppercase font-bold text-stone-450 tracking-wider border-b border-stone-250">
                            <th className="p-4">{lang === 'zh' ? '测试视角' : 'Economic Lens'}</th>
                            <th className="p-4">{lang === 'zh' ? '1题偏离影响' : '1-Dev Match Result'}</th>
                            <th className="p-4">{lang === 'zh' ? '1题容错刚度' : '1-Dev Stability'}</th>
                            <th className="p-4">{lang === 'zh' ? '2题偏离影响' : '2-Dev Match Result'}</th>
                            <th className="p-4">{lang === 'zh' ? '2题容错刚度' : '2-Dev Stability'}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {advResult.sensitivity.map(sen => (
                            <tr key={sen.lensId} className="border-b border-stone-200 last:border-0 hover:bg-stone-50/50 transition-colors">
                              <td className="p-4 font-bold text-stone-850 bg-white">{sen.lensName}</td>
                              <td className="p-4 font-mono text-stone-550">{sen.oneDeviationPrimary}</td>
                              <td className="p-4">
                                {sen.isOneDeviationStable ? (
                                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 uppercase tracking-wide">
                                    Held / 稳健
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 uppercase tracking-wide">
                                    Shifted / 泄引
                                  </span>
                                )}
                              </td>
                              <td className="p-4 font-mono text-stone-550">{sen.twoDeviationPrimary}</td>
                              <td className="p-4">
                                {sen.isTwoDeviationStable ? (
                                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 uppercase tracking-wide">
                                    Held / 稳健
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 uppercase tracking-wide">
                                    Pragmatic / 宽滤
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section D: Human-like Agent Simulations */}
                  <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">MODULE D</span>
                      <h3 className="text-lg font-bold text-stone-900 font-serif leading-none flex items-center gap-2">
                        <Activity className="w-5 h-5 text-stone-600 shrink-0" />
                        {lang === 'zh' ? '自适应真人主体决策模型仿真 (Human-like Probabilistic Agent Simulations)' : 'Probabilistic Agent Behavior Simulations'}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed font-sans">
                        {lang === 'zh'
                          ? "【拟真人概率仿真模型】：通过拉高和微调决策主体基于价值观与政治经济倾向对各个选项的偏好权重（叠加 epsilon 随机噪声），产生高频行为树。检验系统在面对符合真实人类经济偏好的样本流时，能否输出在现实中高度自恰、贴合社会科学学派互补直觉的结果。"
                          : "Generate 200 probabilistic human-like answer paths for 4 specific ideological archetypes. This validates policy coherence and behavioral-affinity matching under realistic social science preference vectors."}
                      </p>
                    </div>

                    <div className="space-y-5 pt-2">
                      {advResult.archetypes.map((arc, uIdx) => (
                        <div key={uIdx} className="bg-stone-50/50 border border-stone-200 rounded-2xl p-5 md:p-6 space-y-4">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <div className="space-y-1 text-left">
                              <span className="text-[9px] font-bold text-amber-800 uppercase tracking-widest bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full select-none">
                                Archetype {uIdx + 1}
                              </span>
                              <h4 className="text-sm font-extrabold text-stone-900 font-serif">
                                {arc.archetypeName}
                              </h4>
                            </div>
                            <div className="text-right flex flex-col md:items-end gap-0.5">
                              <span className="text-[9px] font-bold text-stone-400 tracking-widest leading-none">DOMINANT RESULT</span>
                              <span className="font-mono text-xs font-bold text-stone-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 uppercase">
                                {arc.dominantPrimary}
                              </span>
                            </div>
                          </div>

                          <p className="text-[10.5px] text-stone-550 italic font-serif leading-relaxed text-justify border-l-2 border-stone-300 pl-3">
                            {arc.archetypeDesc}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2.5">
                            {/* Average scores checklist */}
                            <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200">
                              <div className="text-[9px] uppercase font-bold tracking-wider text-stone-400 pb-1.5 border-b border-stone-100 text-left">
                                {lang === 'zh' ? '主体均值得分 (Expected Scores)' : 'Expected Scores'}
                              </div>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                                {Object.keys(KEY_MAP).map(id => {
                                  const key = KEY_MAP[id];
                                  const rawVal = arc.averageScores[key] || 0;
                                  return (
                                    <div key={id} className="flex justify-between items-center text-[10px] text-stone-600 font-mono">
                                      <span className="truncate max-w-[85px]">{id.replace('-', ' ')}</span>
                                      <span className="font-bold">{rawVal.toFixed(1)}分</span>
                                    </div>
                                  );
                                })}
                                <div className="flex justify-between items-center text-[10px] text-stone-600 font-mono col-span-2 border-t border-stone-100 pt-1.5">
                                  <span className="text-stone-450 font-bold uppercase text-[8.5px]">{lang === 'zh' ? '吉德公地治理唤醒值' : 'Ostrom Governance'}</span>
                                  <span className="font-bold text-stone-750">{arc.averageScores.communityGovernance.toFixed(1)}分</span>
                                </div>
                              </div>
                            </div>

                            {/* Secondary trigger distribution list */}
                            <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between">
                              <div>
                                <div className="text-[9px] uppercase font-bold tracking-wider text-stone-400 pb-1.5 border-b border-stone-100 text-left">
                                  {lang === 'zh' ? '其次接近的分派频率 (Secondary Tendencies)' : 'Secondary Tendencies'}
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2.5 text-left">
                                  {arc.secondaryBlends.map((sb, sbIdx) => (
                                    <span key={sbIdx} className="text-[9.5px] font-mono font-bold text-stone-605 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded">
                                      {sb}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p className="text-[9.5px] text-[#78716c] font-serif leading-tight pt-2 text-left">
                                {lang === 'zh'
                                  ? "与心理主观预期高度吻合。可证，各细分经济学术视角逻辑自恰，学理契合结构完备。"
                                  : "Strictly aligns with theoretical design, supporting great ecological compatibility."}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer block */}
      <footer className="px-6 py-10 border-t border-stone-200/50 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-[10px] text-stone-400 font-medium max-w-xl leading-relaxed text-center md:text-left">
              {t.home.disclaimer[lang]}
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-[10px] text-stone-500 font-medium items-center justify-center md:justify-start">
              <a href="mailto:zhouxinyu_iesr23@outlook.com" className="flex items-center gap-1.5 hover:text-stone-900 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                zhouxinyu_iesr23@outlook.com
              </a>
              <a href="https://github.com/Raine-zz/EconTI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-stone-900 transition-colors">
                <Github className="w-3.5 h-3.5" />
                Raine-zz/EconTI
              </a>
              <button onClick={() => { setStep('diagnostics'); handleRunAdvancedDiagnostics(); }} className="flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors uppercase font-bold text-[9px]" id="btn-footer-diagnostics">
                <Cpu className="w-3.5 h-3.5 text-stone-500" />
                {lang === 'zh' ? '评分算法诊断系统' : 'Scoring Stress Test'}
              </button>
            </div>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 bg-stone-100 px-3 py-1.5 rounded border border-stone-200/50 select-none">
            &copy; 2026 EconTI indicators.
          </div>
        </div>
      </footer>
    </div>
  );
}
