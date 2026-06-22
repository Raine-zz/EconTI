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
  Sparkle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONS, MINDSETS } from './data';
import { Language, Scores, MindsetType } from './types';
import { calculateDynamicResult, MatchResult } from './utils';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [step, setStep] = useState<'home' | 'quiz' | 'result' | 'overview'>('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Scores[]>([]);
  const [result, setResult] = useState<MatchResult | null>(null);

  const t = {
    home: {
      title: { en: "EconTI", zh: "EconTI" },
      subtitle: { 
        en: "Which economic intuition or lens do you habitually use to understand real-world problems?", 
        zh: "当期观察身边世界的摩擦时，你习惯套用哪一种经济学学理直觉？" 
      },
      desc: {
        en: "Through 10 balanced decision scenarios, discover the explanatory framework that drives your fundamental thinking.",
        zh: "通过 10 个贴近生存民生的中性政策权衡情景，探寻你在思考社会资源、效率与博弈时的底层直觉体系。"
      },
      disclaimer: {
        en: "This test is designed purely for educational exploration and popular analysis. It does not constitute formal political profile audits, psychological classifications, or administrative policy verdicts.",
        zh: "说明：本测验为学术探求普及与日常自娱设计，结果不代表任何严肃社会学政风审计、标准的心理诊断或行政决策判语。"
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
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={reset} id="header-brand">
            <div className="w-8 h-8 rounded bg-stone-900 flex items-center justify-center text-[#fcfcf9] font-serif font-black text-base shadow-sm">
              E
            </div>
            <div>
              <span className="font-bold text-stone-900 tracking-wide text-sm block">EconTI</span>
              <span className="text-[9px] text-stone-400 font-bold tracking-widest block leading-none mt-0.5 uppercase">Economic Lenses</span>
            </div>
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
              className="w-full max-w-2xl space-y-8 text-center"
              id="home-stage"
            >
              <div className="space-y-4">
                <div className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-stone-150/50 border border-stone-200/40 text-stone-600 text-[10px] font-bold tracking-wider uppercase mx-auto">
                  <Sparkles className="w-3 h-3 text-[#d97706] animate-pulse" />
                  <span>Interactive Educational Platform / 经济学思维探索</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-serif leading-tight">
                  {t.home.title[lang]}
                </h1>
                <p className="text-lg md:text-xl font-serif text-stone-700 max-w-lg mx-auto leading-relaxed">
                  {t.home.subtitle[lang]}
                </p>
                <p className="text-xs md:text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                  {t.home.desc[lang]}
                </p>
              </div>

              {/* Guide card - clean scholastic feel */}
              <div className="border border-stone-200 bg-white p-6 md:p-8 rounded-2xl text-left shadow-sm space-y-4" id="home-guide-card">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center shrink-0 border border-stone-200 text-stone-600 shadow-sm-flat">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-stone-850 uppercase tracking-widest">
                      {lang === 'zh' ? '测试使用指南' : 'Core Focus Statement'}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1 font-medium">
                      {lang === 'zh' 
                        ? "当身边的民生、科技、分配发生纠纷冲突时，脑海中最先促发你感到信服的直觉折射出你解释世界的底层透镜模型。本测试精选 10 个具有代表性的无道德好坏之分的真实经济场景，帮助探索你的大局直觉。"
                        : "When everyday debates happen, your immediate impulse mirrors your background lenses. EconTI maps your answers through 10 balanced scenario debates to show your default explanatory framing."}
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-4 flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center shrink-0 border border-stone-200 text-stone-400">
                    <AlertCircle className="w-4 h-4 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-400 font-medium leading-relaxed leading-snug">
                      {t.home.disclaimer[lang]}
                    </p>
                  </div>
                </div>
              </div>

              <div>
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

                  {/* Secondary inclination or Top Blends (Simple pure text cards, NO precision percentages) */}
                  <section className="space-y-4 pt-6 border-t border-stone-100" id="section-secondaries">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                      {t.result.secondariesTitle[lang]}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {result.secondary.map((sec, sidx) => (
                        <div key={sec.id} className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-xl flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-stone-400" />
                          <span className="text-xs font-bold text-stone-850 select-none">
                            {sec.name[lang]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

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

                  {/* Representative footnotes at bottom (minor section size) */}
                  {!result.isHybrid && (
                    <footer className="pt-6 border-t border-stone-100 grid md:grid-cols-2 gap-4 text-[11px] text-stone-500">
                      <div className="space-y-1.5">
                        <span className="font-bold text-stone-400 block uppercase tracking-wider">{t.result.thinkersTitle[lang]}</span>
                        <span className="font-medium">{(result.primary as MindsetType).representative[lang]}</span>
                      </div>
                      <div className="space-y-1.5">
                        <span className="font-bold text-stone-400 block uppercase tracking-wider">{t.result.keywordsTitle[lang]}</span>
                        <span className="font-medium">{(result.primary as MindsetType).keywords[lang].join(' / ')}</span>
                      </div>
                    </footer>
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
        </AnimatePresence>
      </main>

      {/* Footer block */}
      <footer className="px-6 py-10 border-t border-stone-200/50 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-stone-400">
              EconTI Project &bull; 经济学观察视角测试
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-[10px] text-stone-500 font-medium">
              <a href="mailto:zhouxinyu_iesr23@outlook.com" className="flex items-center justify-center md:justify-start gap-1.5 hover:text-stone-900 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                zhouxinyu_iesr23@outlook.com
              </a>
              <a href="https://github.com/Raine-zz/EconTI" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-1.5 hover:text-stone-900 transition-colors">
                <Github className="w-3.5 h-3.5" />
                Raine-zz/EconTI
              </a>
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
