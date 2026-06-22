/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Github, Mail, ChevronLeft, ChevronRight, RefreshCw, BookOpen, Compass, Award, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
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
  const [activeConcept, setActiveConcept] = useState<string | null>(null);

  const t = {
    home: {
      title: { en: "EconTI - Economic Mindset Indicator", zh: "EconTI - 经济学思维视角测试" },
      subtitle: { 
        en: "What economic lens do you unconsciously use to explain the daily world?", 
        zh: "当你在观察这个世界的喧嚣时，你潜意识里在套用哪一种经济学思维偏好？" 
      },
      warningTitle: { en: "Important Design Stance", zh: "核心测试立场" },
      warningText: {
        en: "This test is NOT designed to judge your political biases or party allegiences. Instead, it uncovers the underlying economic mechanism patterns you find most convincing when parsing everyday social trade-offs.",
        zh: "请注意，本测试的目标绝非诊断你的任何政治派系或立场黑白。它的初心是拆解出当你在面临繁杂的民生、科技、分配等现实利益权衡时，你下意识里感觉最信服、最契合你直觉的那些微观、宏观与博弈机理。"
      },
      disclaimer: {
        en: "This test and report are created for educational exploration and entertainment. They do not constitute authority academic classification or standard psychological profiling.",
        zh: "结果报告仅供学术普及、学习探讨与娱乐休闲，并不代表任何权威学术鉴定或严肃心理诊断。"
      },
      cta: { en: "Start Discovery", zh: "开启思维探索" }
    },
    quiz: {
      prev: { en: "Previous Option", zh: "返回上一题" },
      progress: { en: "Progress", zh: "进度" },
      dimensionTitle: { en: "Measurement Undercurrent", zh: "本题测量交锋" }
    },
    result: {
      title: { en: "Your Mindset Analysis", zh: "你的思维报告" },
      subtitle: { en: "A complete explanation of how you parse societal trade-offs", zh: "一个关于你如何权衡并审视社会分配的深度报告" },
      matchDegree: { en: "Match Compatibility", zh: "契合度" },
      keywordsTitle: { en: "Core Keywords", zh: "核心关键词" },
      explanationTitle: { en: "Why You Were Matched", zh: "为什么我是该类型？" },
      strengthsTitle: { en: "Your Cognitive Advantages", zh: "你的思维长处" },
      blindspotsTitle: { en: "Your Potential Blindspots", zh: "你潜在的思考盲点" },
      secondariesTitle: { en: "Your Mindset Spectrum: Top 3 Matches", zh: "你的复合思维光谱：Top 3 契合度" },
      secondaryDesc: { en: "Human intellect is complex. Below are the top perspectives you align with, ordered by geometric affinity.", zh: "人类心智并不是非此即彼的切片。以下是你在 5D 空间里最接近的三个视角谱系。" },
      dimensionsTitle: { en: "Your 5D Cognitive Axes Position", zh: "你的五维基础认知坐标（5D Position）" },
      dimensionAxisDesc: { en: "Scores closer to ends indicate stronger opinions, closer to absolute zero represents balanced pragmatism.", zh: "得分越倾向两端，说明你对该矛盾的立场越坚定鲜明；越接近中轴，说明你偏向兼收并蓄。" },
      recommendTitle: { en: "Recommended Concepts/Works to Explore", zh: "推荐长线了解的核心经济学名词" },
      restart: { en: "Retake Test", zh: "重新评估自我" },
      viewAll: { en: "Review All 8 Perspectives", zh: "全面巡览八大核心思维流派" },
      copyShare: { en: "Copy Results for Sharing", zh: "复制思维报告代码（便于分享）" },
      copied: { en: "Copied successfully!", zh: "已复制到剪贴板！" },
      hybridTitle: { en: "The Sophisticated Synthesizer / Moderate Type", zh: "全景辩证混合型 / 均衡实用视角" },
      hybridDesc: {
        en: "Your score vector is highly balanced across the 5 axes. This means you do not dogmatically cling to a single stream. Instead, you act as an analytical pragmatist, balancing market efficiency, social justice, local trust, and structural power based on situational challenges.",
        zh: "你面临测试中所有的剧烈论争时，得分坐标极其趋近中点。这表明你天然拒绝教条式地依附于任何一支孤立的学者教鞭，而更像一位理性的“全景实用主义论证者”。你习惯在面临现实民生摩擦时，根据现实局限务实地把自由激励、公平救助、本地自组织与宏观防火墙有机串联。"
      }
    },
    overview: {
      title: { en: "The 8 Great Economic Perspectives", zh: "八大经典经济学思维视野" },
      sub: { en: "Explore the historic frameworks that shape how human institutions think and decide.", zh: "探索重塑现代世界发展轨道的九九框架与思想演进，感知思想本身的厚重生命力。" },
      back: { en: "Return to Report", zh: "返回我的分析报告" }
    }
  };

  // Helper to calculate score averages from a specific answers state array.
  // This avoids the asynchronous React state delay by bypassing `answers` state during immediate calls.  
  const getCalculatedScores = (currentAnswersList: Scores[]): Scores => {
    const defaultScores: Scores = {
      marketVsIntervention: 0,
      incentiveVsPower: 0,
      rationalVsBehavioral: 0,
      efficiencyVsEquity: 0,
      localVsCentral: 0
    };
    if (currentAnswersList.length === 0) return defaultScores;

    const sum = currentAnswersList.reduce((acc, curr) => ({
      marketVsIntervention: acc.marketVsIntervention + (curr.marketVsIntervention || 0),
      incentiveVsPower: acc.incentiveVsPower + (curr.incentiveVsPower || 0),
      rationalVsBehavioral: acc.rationalVsBehavioral + (curr.rationalVsBehavioral || 0),
      efficiencyVsEquity: acc.efficiencyVsEquity + (curr.efficiencyVsEquity || 0),
      localVsCentral: acc.localVsCentral + (curr.localVsCentral || 0),
    }), defaultScores);

    const count = currentAnswersList.length;
    return {
      marketVsIntervention: sum.marketVsIntervention / count,
      incentiveVsPower: sum.incentiveVsPower / count,
      rationalVsBehavioral: sum.rationalVsBehavioral / count,
      efficiencyVsEquity: sum.efficiencyVsEquity / count,
      localVsCentral: sum.localVsCentral / count,
    };
  };

  // Executed when choosing an option
  const handleChoice = (weights: Partial<Scores>) => {
    const newAnswers = [...answers];
    const fullWeights: Scores = {
      marketVsIntervention: weights.marketVsIntervention ?? 0,
      incentiveVsPower: weights.incentiveVsPower ?? 0,
      rationalVsBehavioral: weights.rationalVsBehavioral ?? 0,
      efficiencyVsEquity: weights.efficiencyVsEquity ?? 0,
      localVsCentral: weights.localVsCentral ?? 0,
    };
    newAnswers[currentIndex] = fullWeights;
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // CRITICAL FIX: Base scoring calculation on newly built 'newAnswers'
      // This completely squashes the state lagging lag bug on 10th question!
      const finalScores = getCalculatedScores(newAnswers);
      const dynamicResult = calculateDynamicResult(finalScores, MINDSETS);
      setResult(dynamicResult);
      setStep('result');
      setActiveConcept(null);

      // Party effects
      confetti({
        particleCount: 160,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#4b5563', '#91825c', '#111827', '#e5e7eb']
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
    setActiveConcept(null);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `【EconTI 经济学思维视角测试报告】\n我的主导视角：%PRIMARY%\n得分轴：\n- 市场 vs 干预：%MVI%\n- 激励 vs 结构：%IVP%\n- 理性 vs 偏误：%RVB%\n- 效率 vs 公平：%EVE%\n- 地方 vs 中心：%LVC%\n在这里寻找我的同伴及探索概念：${window.location.origin}`;
    
    let primaryStr = "";
    if (result.isHybrid) {
      primaryStr = t.result.hybridTitle[lang];
    } else {
      const p = result.primary as MindsetType;
      primaryStr = `${p.name[lang]} (代表学者: ${p.representative[lang]})`;
    }

    const formatVal = (v: number) => {
      if (v > 0.15) return `+${v.toFixed(2)} (偏纯粹市场/个体理性/效率地方)`;
      if (v < -0.15) return `${v.toFixed(2)} (偏规约干预/结构权力/公平中央)`;
      return `${v.toFixed(2)} (均衡稳健派)`;
    };

    const payload = text
      .replace("%PRIMARY%", primaryStr)
      .replace("%MVI%", formatVal(result.userNormalizedScores.marketVsIntervention))
      .replace("%IVP%", formatVal(result.userNormalizedScores.incentiveVsPower))
      .replace("%RVB%", formatVal(result.userNormalizedScores.rationalVsBehavioral))
      .replace("%EVE%", formatVal(result.userNormalizedScores.efficiencyVsEquity))
      .replace("%LVC%", formatVal(result.userNormalizedScores.localVsCentral));

    navigator.clipboard.writeText(payload);
    alert(t.result.copied[lang]);
  };

  const currentScoresObj = getCalculatedScores(answers);

  return (
    <div className="min-h-screen bg-[#fbfbf8] font-sans text-stone-900 selection:bg-stone-200 flex flex-col antialiased">
      {/* Navbar Banner */}
      <header className="border-b border-stone-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={reset}>
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
              E
            </div>
            <div>
              <span className="font-black text-sm tracking-wider uppercase text-stone-900 block leading-none">ECONTI</span>
              <span className="text-[9px] text-stone-500 font-bold uppercase tracking-widest block mt-1">Cognitive Lens</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 hover:bg-stone-50 transition-all text-xs font-semibold text-stone-700"
            >
              <Languages className="w-3.5 h-3.5 text-stone-500 group-hover:rotate-12 transition-transform" />
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
              className="w-full max-w-3xl space-y-10 text-center"
            >
              <div className="space-y-4">
                <div className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200/50 text-stone-700 text-[10px] font-black uppercase tracking-widest mx-auto">
                  <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>2026 Academic Edition / 2026 学术重构版</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif whitespace-pre-line leading-tight">
                  {t.home.title[lang]}
                </h1>
                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  {t.home.subtitle[lang]}
                </p>
              </div>

              {/* Position Card Panel */}
              <div className="mbti-card border border-stone-200/80 bg-white p-6 md:p-8 rounded-3xl text-left space-y-6 shadow-sm">
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-700 border border-amber-200">
                    <Compass className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-stone-900 uppercase tracking-wide">{t.home.warningTitle[lang]}</h3>
                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed mt-2.5">
                      {t.home.warningText[lang]}
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-5 flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 text-stone-500 border border-stone-200">
                    <AlertCircle className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-stone-800 uppercase tracking-widest">学习娱乐声明</h3>
                    <p className="text-[11px] md:text-xs text-stone-500 leading-relaxed mt-2">
                      {t.home.disclaimer[lang]}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setStep('quiz')}
                  className="px-10 py-5 rounded-2xl bg-stone-900 text-white hover:bg-stone-800 active:scale-[0.98] transition-all font-black uppercase tracking-widest text-xs md:text-sm shadow-xl shadow-stone-900/15"
                >
                  {t.home.cta[lang]}
                </button>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-4xl space-y-6"
            >
              {/* Progress Panel */}
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-stone-500 px-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-800 rounded font-black">{currentIndex + 1} / {QUESTIONS.length}</span>
                  <span>{t.quiz.progress[lang]}</span>
                </div>
                <div className="w-1/2 bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-stone-900 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Main Question Card */}
              <div className="mbti-card border border-stone-200 bg-white rounded-[2rem] shadow-md p-8 md:p-12 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-1 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">
                      {t.quiz.dimensionTitle[lang]}: {QUESTIONS[currentIndex].measurement[lang]}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-stone-900 leading-snug font-serif">
                    {QUESTIONS[currentIndex].title[lang]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {QUESTIONS[currentIndex].choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(choice.weights)}
                      className="group text-left p-6 rounded-2xl border-2 border-stone-200/70 hover:border-stone-900 hover:bg-stone-50 active:bg-stone-100 transition-all w-full flex flex-col md:flex-row gap-4 items-start"
                    >
                      <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors flex items-center justify-center font-bold text-[11px] shrink-0 border border-stone-200">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div className="space-y-2">
                        <p className="text-stone-800 group-hover:text-stone-900 font-bold text-sm md:text-sm leading-relaxed">
                          {choice.text[lang]}
                        </p>
                        <p className="text-[10px] text-stone-500 font-semibold italic">
                          {choice.explanation[lang]}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Back */}
              <div className="flex justify-center pt-2">
                {currentIndex > 0 && (
                  <button 
                    onClick={goBack}
                    className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-xs font-black uppercase tracking-widest"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-5xl space-y-8"
            >
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-800 text-[10px] font-black uppercase tracking-widest rounded-full">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>{t.result.title[lang]}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
                  {t.result.subtitle[lang]}
                </h1>
              </div>

              {/* Main Result Card */}
              <div className="mbti-card border-2 border-stone-200 bg-white rounded-[2rem] overflow-hidden shadow-lg">
                <div className="bg-stone-50 border-b border-stone-200/80 p-8 md:p-12">
                  {result.isHybrid ? (
                    /* Hybrid Synthesizer View */
                    <div className="space-y-6 text-center max-w-3xl mx-auto">
                      <div className="w-36 h-36 bg-gradient-to-tr from-stone-200 to-amber-50 rounded-[2rem] border border-stone-300 md:w-40 md:h-40 mx-auto flex items-center justify-center shadow-md">
                        <Compass className="w-16 h-16 text-stone-600 animate-spin-slow" />
                      </div>
                      <div className="space-y-3">
                        <span className="text-[11px] font-black uppercase tracking-widest text-amber-700 block">SPECIAL SPECTRUM / 特殊光谱</span>
                        <h2 className="text-2xl md:text-3.5xl font-black text-stone-900 font-serif leading-tight">
                          {t.result.hybridTitle[lang]}
                        </h2>
                        <p className="text-stone-600 text-sm md:text-base leading-relaxed font-serif pt-1">
                          {t.result.hybridDesc[lang]}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Standard Profile View */
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                      <div className="w-40 h-40 md:w-52 md:h-52 bg-[#fdfdfb] p-3 rounded-[2.5rem] border-2 border-stone-200 shadow-sm shrink-0 flex items-center justify-center transform hover:rotate-2 transition-transform duration-300">
                        <img 
                          src={(result.primary as MindsetType).imageUrl} 
                          alt={(result.primary as MindsetType).name[lang]} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-4 text-center md:text-left flex-grow">
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
                          <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                            {t.result.matchDegree[lang]}: {result.top3[0].percentage}%
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <h2 className="text-2.5xl md:text-3.5xl font-black text-stone-900 font-serif leading-tight">
                            {(result.primary as MindsetType).name[lang]}
                          </h2>
                          <p className="text-stone-600 text-sm italic font-serif leading-relaxed">
                            "{(result.primary as MindsetType).summary[lang]}"
                          </p>
                        </div>
                        <div className="pt-2 border-t border-stone-250/50">
                          <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-1">
                            {lang === 'en' ? 'Ideology Representative' : '学术代表人物'}
                          </span>
                          <span className="text-sm font-extrabold text-stone-850 leading-normal">
                            {(result.primary as MindsetType).representative[lang]}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Substantive Info List */}
                <div className="p-8 md:p-12 space-y-12">
                  {!result.isHybrid && (
                    <>
                      {/* Representative Bio Panel */}
                      <section className="space-y-3 bg-stone-50/50 p-6 rounded-2xl border border-stone-150 relative">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                          {lang === 'en' ? 'Representative Foundations' : '关于代表人物'}
                        </h4>
                        <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-medium">
                          {(result.primary as MindsetType).representativeBio[lang]}
                        </p>
                      </section>

                      {/* Keywords Panel */}
                      <section className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                          <span className="w-3 h-0.5 bg-stone-300" />
                          {t.result.keywordsTitle[lang]}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {(result.primary as MindsetType).keywords[lang].map((kw, idx) => (
                            <span key={idx} className="px-3.5 py-1.5 bg-stone-105 border border-stone-200 text-stone-800 rounded-lg text-xs font-black">
                              # {kw}
                            </span>
                          ))}
                        </div>
                      </section>

                      {/* Mindset Description */}
                      <section className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                          <span className="w-3 h-0.5 bg-stone-300" />
                          {t.result.explanationTitle[lang]}
                        </h3>
                        <p className="text-sm md:text-base text-stone-755 leading-relaxed font-serif">
                          {(result.primary as MindsetType).description[lang]}
                        </p>
                      </section>

                      {/* Strengths & Blindspots Grid */}
                      <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-stone-150">
                        <div className="space-y-4 p-5 rounded-2.5rem bg-green-50/30 border border-green-100/90">
                          <h4 className="text-xs font-black uppercase tracking-[0.15em] text-green-800 flex items-center gap-2">
                            <Compass className="w-4 h-4 text-green-700" />
                            {t.result.strengthsTitle[lang]}
                          </h4>
                          <ul className="space-y-2.5 text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                            {(result.primary as MindsetType).strengths[lang].map((st, sidx) => (
                              <li key={sidx} className="flex gap-2 items-start">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>{st}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4 p-5 rounded-2.5rem bg-amber-50/30 border border-amber-100/90">
                          <h4 className="text-xs font-black uppercase tracking-[0.15em] text-amber-800 flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-amber-700" />
                            {t.result.blindspotsTitle[lang]}
                          </h4>
                          <ul className="space-y-2.5 text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                            {(result.primary as MindsetType).blindspots[lang].map((bl, bidx) => (
                              <li key={bidx} className="flex gap-2 items-start">
                                <span className="text-amber-600 font-bold">!</span>
                                <span>{bl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 5-Dimension Sliders Visualizer */}
                  <section className="space-y-7 pt-10 border-t border-stone-200">
                    <div className="space-y-2">
                      <h3 className="text-sm font-black uppercase tracking-widest text-stone-850">
                        {t.result.dimensionsTitle[lang]}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">
                        {t.result.dimensionAxisDesc[lang]}
                      </p>
                    </div>

                    <div className="space-y-6 max-w-3xl">
                      {/* Dim 1 */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-xs font-extrabold uppercase tracking-wide">
                          <span className="text-stone-500">政府规约/干预 (State Intervention)</span>
                          <span className="text-stone-500">市场自发协调 (Spontaneous Market)</span>
                        </div>
                        <div className="h-2.5 bg-stone-105 rounded-full relative border border-stone-200 flex items-center">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-300" />
                          <div 
                            className="absolute h-full bg-stone-800 rounded-full transition-all"
                            style={{ 
                              left: result.userNormalizedScores.marketVsIntervention >= 0 ? '50%' : `${50 + (result.userNormalizedScores.marketVsIntervention * 50)}%`,
                              width: `${Math.abs(result.userNormalizedScores.marketVsIntervention * 50)}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                          <span>-1.0</span>
                          <span className="text-stone-800 font-black">你的落点: {result.userNormalizedScores.marketVsIntervention.toFixed(2)}</span>
                          <span>+1.0</span>
                        </div>
                      </div>

                      {/* Dim 2 */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-xs font-extrabold uppercase tracking-wide">
                          <span className="text-stone-500">阶级与结构权力 (Structural Power)</span>
                          <span className="text-stone-500">个体边际激励 (Individual Incentives)</span>
                        </div>
                        <div className="h-2.5 bg-stone-105 rounded-full relative border border-stone-200 flex items-center">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-300" />
                          <div 
                            className="absolute h-full bg-stone-800 rounded-full transition-all"
                            style={{ 
                              left: result.userNormalizedScores.incentiveVsPower >= 0 ? '50%' : `${50 + (result.userNormalizedScores.incentiveVsPower * 50)}%`,
                              width: `${Math.abs(result.userNormalizedScores.incentiveVsPower * 50)}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                          <span>-1.0</span>
                          <span className="text-stone-800 font-black">你的落点: {result.userNormalizedScores.incentiveVsPower.toFixed(2)}</span>
                          <span>+1.0</span>
                        </div>
                      </div>

                      {/* Dim 3 */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-xs font-extrabold uppercase tracking-wide">
                          <span className="text-stone-500">非理性与行为偏误 (Behavioral Bias)</span>
                          <span className="text-stone-500">理性决策计算 (Rational Calculation)</span>
                        </div>
                        <div className="h-2.5 bg-stone-105 rounded-full relative border border-stone-200 flex items-center">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-300" />
                          <div 
                            className="absolute h-full bg-stone-800 rounded-full transition-all"
                            style={{ 
                              left: result.userNormalizedScores.rationalVsBehavioral >= 0 ? '50%' : `${50 + (result.userNormalizedScores.rationalVsBehavioral * 50)}%`,
                              width: `${Math.abs(result.userNormalizedScores.rationalVsBehavioral * 50)}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                          <span>-1.0</span>
                          <span className="text-stone-800 font-black">你的落点: {result.userNormalizedScores.rationalVsBehavioral.toFixed(2)}</span>
                          <span>+1.0</span>
                        </div>
                      </div>

                      {/* Dim 4 */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-xs font-extrabold uppercase tracking-wide">
                          <span className="text-stone-500">底线公平与人类可行能力 (Equity & Capability)</span>
                          <span className="text-stone-500">静态效率与供给增长 (Efficiency & Growth)</span>
                        </div>
                        <div className="h-2.5 bg-stone-105 rounded-full relative border border-stone-200 flex items-center">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-300" />
                          <div 
                            className="absolute h-full bg-stone-800 rounded-full transition-all"
                            style={{ 
                              left: result.userNormalizedScores.efficiencyVsEquity >= 0 ? '50%' : `${50 + (result.userNormalizedScores.efficiencyVsEquity * 50)}%`,
                              width: `${Math.abs(result.userNormalizedScores.efficiencyVsEquity * 50)}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                          <span>-1.0</span>
                          <span className="text-stone-800 font-black">你的落点: {result.userNormalizedScores.efficiencyVsEquity.toFixed(2)}</span>
                          <span>+1.0</span>
                        </div>
                      </div>

                      {/* Dim 5 */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-xs font-extrabold uppercase tracking-wide">
                          <span className="text-stone-500">中心化整合蓝图 (Centralized Blueprint)</span>
                          <span className="text-stone-500">地方性治理自治 (Local & Polycentric)</span>
                        </div>
                        <div className="h-2.5 bg-stone-105 rounded-full relative border border-stone-200 flex items-center">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-300" />
                          <div 
                            className="absolute h-full bg-stone-800 rounded-full transition-all"
                            style={{ 
                              left: result.userNormalizedScores.localVsCentral >= 0 ? '50%' : `${50 + (result.userNormalizedScores.localVsCentral * 50)}%`,
                              width: `${Math.abs(result.userNormalizedScores.localVsCentral * 50)}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                          <span>-1.0</span>
                          <span className="text-stone-800 font-black">你的落点: {result.userNormalizedScores.localVsCentral.toFixed(2)}</span>
                          <span>+1.0</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Top 3 Spectra Analysis */}
                  <section className="space-y-5 pt-10 border-t border-stone-200">
                    <div className="space-y-1">
                      <h3 className="text-sm font-black uppercase tracking-widest text-stone-850">
                        {t.result.secondariesTitle[lang]}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">
                        {t.result.secondaryDesc[lang]}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {result.top3.map((m, idx) => (
                        <div key={m.mindset.id} className="p-5 border border-stone-200 bg-stone-50/50 rounded-2xl flex flex-col justify-between">
                          <div className="space-y-2">
                            <span className="w-6 h-6 rounded-full bg-stone-900 border text-white text-[11px] font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <h4 className="font-extrabold text-sm text-stone-950 leading-tight">
                              {m.mindset.name[lang]}
                            </h4>
                            <p className="text-[11px] text-stone-500 font-medium">
                              主要学者: {m.mindset.representative[lang].split(' (')[0].split(' / ').slice(0, 2).join(' / ')}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-stone-200 select-none">
                            <div className="flex justify-between items-center text-xs text-stone-600 font-extrabold">
                              <span>适配指数</span>
                              <span className="text-amber-800">{m.percentage}%</span>
                            </div>
                            <div className="w-full bg-stone-200 h-1 rounded-full mt-1.5 overflow-hidden">
                              <div className="bg-amber-600 h-full rounded-full" style={{ width: `${m.percentage}%` }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Recommended Vocabulary Sub-section */}
                  {!result.isHybrid && (
                    <section className="space-y-5 pt-10 border-t border-stone-200">
                      <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                        <span className="w-3 h-0.5 bg-stone-300" />
                        {t.result.recommendTitle[lang]}
                      </h3>

                      <div className="space-y-3">
                        {(result.primary as MindsetType).concepts.map((concept, idx) => {
                          const isExpanded = activeConcept === concept.name;
                          return (
                            <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-all shadow-sm">
                              <button
                                onClick={() => setActiveConcept(isExpanded ? null : concept.name)}
                                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-stone-50 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <BookOpen className="w-4 h-4 text-stone-600" />
                                  <span className="font-bold text-sm text-stone-900 select-none">
                                    {concept.name}
                                  </span>
                                </div>
                                <span className="text-xs text-stone-500 uppercase font-black tracking-widest leading-none select-none">
                                  {isExpanded ? '[ 收起 / Close ]' : '[ 学习释义 / Explan ]'}
                                </span>
                              </button>
                              
                              {isExpanded && (
                                <div className="px-5 pb-5 pt-2 border-t border-stone-100 bg-stone-50/50 text-xs md:text-sm text-stone-650 leading-relaxed font-serif animate-fade-in">
                                  {concept.desc[lang]}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* Operational Footer Actions */}
                  <div className="pt-8 flex flex-col items-center gap-4">
                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-stone-300 font-bold hover:bg-stone-50 transition-all text-xs uppercase tracking-wider"
                      >
                        {t.result.copyShare[lang]}
                      </button>
                      
                      <button 
                        onClick={() => setStep('overview')}
                        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-250 bg-stone-50 hover:bg-stone-100 transition-all text-xs font-black text-stone-700 uppercase tracking-widest"
                      >
                        {t.result.viewAll[lang]}
                      </button>
                    </div>

                    <button 
                      onClick={reset}
                      className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-all font-black uppercase tracking-widest text-xs shadow-md shadow-stone-900/10 hover:scale-[1.01]"
                    >
                      <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700" />
                      {t.result.restart[lang]}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-6xl space-y-10"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4.5xl font-black text-stone-900 font-serif tracking-tight">{t.overview.title[lang]}</h2>
                  <p className="text-sm md:text-base text-stone-600 max-w-2xl leading-relaxed">
                    {t.overview.sub[lang]}
                  </p>
                </div>
                <button
                  onClick={() => setStep(result ? 'result' : 'home')}
                  className="flex items-center gap-2 px-5 py-3 bg-white text-stone-900 font-bold rounded-xl border border-stone-250 hover:bg-stone-50 transition-all shadow-sm shrink-0 uppercase tracking-widest text-xs"
                >
                  <ChevronLeft size={16} />
                  {t.overview.back[lang]}
                </button>
              </div>

              {/* Grid System for Mindsets list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MINDSETS.map((m) => (
                  <div key={m.id} className="bg-white border border-stone-200 rounded-[2rem] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      {/* Avatar */}
                      <div className="w-full aspect-square bg-stone-100 rounded-2xl overflow-hidden border border-stone-150/80 relative shadow-inner">
                        <img 
                          src={m.imageUrl} 
                          alt={m.name[lang]} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-extrabold text-base text-stone-950 font-serif leading-snug">
                          {m.name[lang]}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-bold leading-normal">
                          学者: {m.representative[lang].split(' (')[0]}
                        </p>
                      </div>
                      <p className="text-xs text-stone-600 font-medium leading-relaxed font-serif break-words">
                        {m.summary[lang]}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 mt-4 flex flex-wrap gap-1">
                      {m.keywords[lang].slice(0, 3).map((kw, i) => (
                        <span key={i} className="text-[9px] font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded">
                          {kw}
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

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">
              EconTI Project Redesign &bull; Connection
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <a href="mailto:zhouxinyu_iesr23@outlook.com" className="flex items-center justify-center md:justify-start gap-2 text-[11px] font-bold text-stone-700 hover:text-stone-900 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                zhouxinyu_iesr23@outlook.com
              </a>
              <a href="https://github.com/Raine-zz/EconTI" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-[11px] font-bold text-stone-700 hover:text-stone-900 transition-colors">
                <Github className="w-3.5 h-3.5" />
                Raine-zz/EconTI
              </a>
            </div>
          </div>
          <div className="text-[9px] font-black uppercase tracking-[0.25em] text-stone-400 bg-stone-50 px-4 py-2.5 rounded-lg border border-stone-150 select-none">
            &copy; 2026 EconTI indicators.
          </div>
        </div>
      </footer>
    </div>
  );
}
