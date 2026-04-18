/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Github, Mail, ChevronLeft, ChevronRight, RefreshCw, BarChart2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONS, ECONOMISTS } from './data';
import { Language, Scores, Economist } from './types';
import { calculateResult } from './utils';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [step, setStep] = useState<'home' | 'quiz' | 'result' | 'overview'>('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Scores[]>([]);
  const [result, setResult] = useState<Economist | null>(null);

  const t = {
    home: {
      title: { en: "EconTI", zh: "EconTI" },
      subtitle: { 
        en: "Who can be your guide, and on whose shoulders do you stand when thinking?", 
        zh: "谁可以成为你的领路人，你站在谁的肩膀上思考？" 
      },
      cta: { en: "Take the Test", zh: "开始测试" }
    },
    quiz: {
      prev: { en: "Back", zh: "返回" },
      progress: { en: "Progress", zh: "进度" }
    },
    result: {
      title: { en: "Your Economic Identity", zh: "你的经济人格" },
      authorTitle: { en: "About the Thinker", zh: "关于这位思想家" },
      sameTraits: { en: "Personality Traits", zh: "人格特质" },
      restart: { en: "Retake Test", zh: "重新测试" },
      summaryWord: { en: "Economic Type Indicator", zh: "Economic Type Indicator" },
      viewAll: { en: "View All 12 Types", zh: "查看全部12种经济学人格" }
    },
    overview: {
      title: { en: "The 12 Economic Thinkers", zh: "12位经济学大师一览" },
      back: { en: "Back to Result", zh: "返回结果" }
    },
    footer: {
      contact: { en: "Connection", zh: "Connection" }
    }
  };

  const currentScores = (): Scores => {
    const defaultScores: Scores = { interventionism: 0, rationality: 0, scope: 0, vision: 0 };
    if (answers.length === 0) return defaultScores;
    
    const sum = answers.reduce((acc, curr) => ({
      interventionism: acc.interventionism + (curr.interventionism || 0),
      rationality: acc.rationality + (curr.rationality || 0),
      scope: acc.scope + (curr.scope || 0),
      vision: acc.vision + (curr.vision || 0),
    }), defaultScores);

    // Normalize
    const count = answers.length;
    return {
      interventionism: sum.interventionism / count,
      rationality: sum.rationality / count,
      scope: sum.scope / count,
      vision: sum.vision / count,
    };
  };

  const handleChoice = (weights: Partial<Scores>) => {
    const newAnswers = [...answers];
    const fullWeights: Scores = {
      interventionism: weights.interventionism ?? 0,
      rationality: weights.rationality ?? 0,
      scope: weights.scope ?? 0,
      vision: weights.vision ?? 0,
    };
    newAnswers[currentIndex] = fullWeights;
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const finalResult = calculateResult(currentScores(), ECONOMISTS);
      setResult(finalResult);
      setStep('result');
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5a5a40', '#1a1a1a', '#f9f8f4']
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

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white overflow-x-hidden relative bg-[#F8FAFC]">
      {/* Navbar */}
      <nav className="px-6 py-6 flex justify-between items-center max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={reset}>
          <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-brand-accent/20">E</div>
          <span className="font-sans text-2xl font-black tracking-tighter uppercase text-brand-ink">EconTI</span>
        </div>
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-brand-secondary hover:border-brand-accent transition-all text-xs font-bold uppercase text-brand-muted hover:text-brand-accent"
        >
          <Languages className="w-4 h-4" />
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-10 relative">
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="text-center max-w-2xl w-full py-10"
            >
              <div className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Personality Assessment
              </div>
              <h1 className="mb-6 font-black text-brand-ink">
                {t.home.title[lang]}
              </h1>
              <p className="text-lg md:text-xl text-brand-muted mb-10 font-medium leading-relaxed">
                {t.home.subtitle[lang]}
              </p>
              <button 
                onClick={() => setStep('quiz')}
                className="bg-brand-accent text-white px-12 py-5 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl shadow-brand-accent/30 active:scale-95"
              >
                {t.home.cta[lang]}
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-3xl"
            >
              <div className="mb-10 text-center">
                <div className="mb-4 flex justify-between items-center text-xs font-black uppercase tracking-widest text-brand-muted">
                  <span>{t.quiz.progress[lang]}</span>
                  <span>{currentIndex + 1} / {QUESTIONS.length}</span>
                </div>
                <div className="progress-container">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-center leading-tight text-brand-ink px-4">
                    {QUESTIONS[currentIndex].title[lang]}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {QUESTIONS[currentIndex].choices.map((choice, i) => (
                      <button
                        key={i}
                        onClick={() => handleChoice(choice.weights)}
                        className="group text-center p-6 rounded-2xl border-2 border-transparent bg-white shadow-sm hover:border-brand-accent hover:shadow-md transition-all duration-200"
                      >
                        <p className="text-base md:text-lg font-semibold text-brand-ink/80 group-hover:text-brand-accent transition-colors">
                          {choice.text[lang]}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex justify-center">
                {currentIndex > 0 && (
                  <button 
                    onClick={goBack}
                    className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-xs font-black uppercase tracking-widest"
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
              className="w-full max-w-4xl"
            >
              <div className="mbti-card overflow-hidden">
                {/* Result Header */}
                <div className="bg-brand-accent/5 p-10 text-center border-b border-brand-secondary/50">
                  <div className="inline-block px-4 py-1.5 bg-brand-accent text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg shadow-brand-accent/20">
                    {t.result.summaryWord[lang]}
                  </div>
                  
                  <div className="flex flex-col items-center gap-8">
                    <div className="w-48 h-48 md:w-56 md:h-56 bg-white p-4 rounded-[2rem] shadow-xl rotate-3 transform transition-transform hover:rotate-0 hover:scale-105 duration-500">
                      <img 
                        src={result.imageUrl} 
                        alt={result.name[lang]} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl font-medium text-brand-accent italic font-serif mb-2">"{result.summary[lang]}"</p>
                      <h2 className="text-2xl md:text-3xl font-black text-brand-ink">{result.name[lang]}</h2>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="p-8 md:p-12 space-y-12">
                  <section className="text-center max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl font-medium text-brand-ink/90 leading-relaxed whitespace-pre-wrap">
                      {result.description[lang]}
                    </p>
                  </section>

                  <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-brand-secondary">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-brand-accent rounded-full" />
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-muted">
                          {t.result.sameTraits[lang]}
                        </h3>
                      </div>
                      <div className="text-sm md:text-base text-brand-ink/80 leading-[1.8] whitespace-pre-wrap font-medium">
                        {result.commonTraits[lang]}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-brand-accent rounded-full" />
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-muted">
                          {t.result.authorTitle[lang]}
                        </h3>
                      </div>
                      <div className="text-sm md:text-base text-brand-ink/80 leading-[1.8] whitespace-pre-wrap font-medium">
                        {result.authorBio[lang]}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col items-center gap-4">
                    <button 
                      onClick={reset}
                      className="group flex items-center gap-3 px-10 py-4 rounded-2xl bg-brand-ink text-white hover:bg-brand-accent transition-all font-black uppercase tracking-widest text-xs shadow-lg shadow-brand-ink/20 hover:shadow-brand-accent/30"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                      {t.result.restart[lang]}
                    </button>
                    
                    <button 
                      onClick={() => setStep('overview')}
                      className="flex items-center gap-2 px-6 py-2 text-xs font-black text-brand-muted hover:text-brand-accent transition-colors uppercase tracking-widest"
                    >
                      <BarChart2 className="w-4 h-4" />
                      {t.result.viewAll[lang]}
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
              className="w-full max-w-6xl"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-ink mb-4">{t.overview.title[lang]}</h2>
                  <p className="text-lg text-brand-muted font-medium max-w-2xl leading-relaxed">
                    {lang === 'zh' 
                      ? "探索塑造现代世界的大师们。从市场主义到结构性反思，了解每种视角的起源。" 
                      : "Explore the thinkers who shaped the modern world. From market enthusiasts to structural rebels, find out where each perspective comes from."}
                  </p>
                </div>
                <button
                  onClick={() => setStep('result')}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-brand-ink font-bold rounded-2xl border-2 border-brand-ink/10 hover:bg-brand-ink hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft size={20} />
                  {t.overview.back[lang]}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(ECONOMISTS || []).map((econ) => (
                  <motion.div
                    key={econ.id}
                    whileHover={{ y: -8 }}
                    className="mbti-card p-6 flex flex-col group cursor-pointer"
                  >
                    <div className="w-full aspect-square bg-brand-bg rounded-2xl mb-6 overflow-hidden relative border border-brand-secondary/30 shadow-inner">
                      <img
                        src={econ.imageUrl}
                        alt={typeof econ.name === 'string' ? econ.name : econ.name[lang]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-brand-accent/10 backdrop-blur-md px-3 py-1 rounded-full border border-brand-accent/20">
                        <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                          {econ.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-1 block">
                        {typeof econ.summary === 'string' ? econ.summary : econ.summary[lang]}
                      </span>
                      <h3 className="text-xl font-bold text-brand-ink leading-tight">
                        {lang === 'zh' ? (typeof econ.name === 'string' ? econ.name : (econ.name.zh.split(' (')[0])) : (typeof econ.name === 'string' ? econ.name : econ.name.en)}
                      </h3>
                    </div>

                    <p className="text-xs text-brand-muted line-clamp-4 mb-6 flex-grow leading-relaxed font-medium">
                      {typeof econ.description === 'string' ? econ.description : econ.description[lang]}
                    </p>

                    <div className="pt-4 border-t border-brand-secondary">
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(econ.idealScores || {}).map(([dim, val]) => (
                          <div key={dim} className="px-2 py-0.5 bg-brand-secondary/50 rounded flex items-center gap-1 border border-brand-secondary/20">
                            <span className="text-[8px] font-black text-brand-muted uppercase">{dim[0]}</span>
                            <div className="w-6 h-1 bg-white rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${val > 0 ? 'bg-green-400' : 'bg-red-400'}`}
                                style={{ width: `${Math.abs(val * 100)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <button
                  onClick={() => {
                    setStep('home');
                    setCurrentIndex(0);
                    setAnswers([]);
                  }}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-accent/25"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                  {t.result.restart[lang].toUpperCase()}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Professor Badge Replacement */}
        {step !== 'result' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex absolute bottom-8 right-8 items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-brand-secondary/50"
          >
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-muted">
              Economic Type Indicator.
            </span>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-brand-secondary bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{t.footer.contact[lang]}</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <a href="mailto:zhouxinyu_iesr23@outlook.com" className="flex items-center gap-2 text-[11px] font-bold text-brand-ink hover:text-brand-accent transition-colors">
                <Mail className="w-3.5 h-3.5" />
                zhouxinyu_iesr23@outlook.com
              </a>
              <a href="https://github.com/Raine-zz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-bold text-brand-ink hover:text-brand-accent transition-colors">
                <Github className="w-3.5 h-3.5" />
                Raine-zz
              </a>
            </div>
          </div>
          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-muted bg-brand-bg px-4 py-2 rounded-lg">
            &copy; 2026 Economic Type Indicator.
          </div>
        </div>
      </footer>
    </div>
  );
}
