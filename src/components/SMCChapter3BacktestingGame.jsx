import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  Award, 
  Trophy, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function SMCChapter3BacktestingGame() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [unlockedTricks, setUnlockedTricks] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Scenario 01: Break of Structure vs. Range Consolidation",
      concept: "Market States & Range Noise (Sections 2 & 3)",
      description: "EUR/USD has been moving sideways between 1.08200 (Range Low) and 1.09000 (Range High) for several sessions. Price forms a higher high inside the box. Watch the candles replay and decide the institutional action.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 110, c: 80, h: 70, l: 120, label: 'Swing High' },
        { id: 2, type: 'bear', o: 80, c: 130, h: 75, l: 140, label: 'Swing Low' },
        { id: 3, type: 'bull', o: 130, c: 95, h: 90, l: 135, label: 'Push Up' }, // PAUSE HERE
        { id: 4, type: 'bear', o: 95, c: 125, h: 90, l: 130, label: 'Internal Noise' },
        { id: 5, type: 'bull', o: 125, c: 50, h: 40, l: 130, label: 'True Breakout!' }
      ],
      question: "Candle 3 just formed a higher high inside the grey box. What is the institutional diagnosis?",
      options: [
        {
          id: 'A',
          text: "Enter Long immediately: it's a confirmed Break of Structure (BOS) indicating a new bullish trend.",
          isCorrect: false,
          feedback: "INCORRECT: Marking every internal swing inside a range is the beginner's trap. There is NO structure inside a range!"
        },
        {
          id: 'B',
          text: "Dismiss the break as noise: draw a box around the range and wait for a clean body close OUT of the box.",
          isCorrect: true,
          feedback: "CORRECT! Roman's Rule: 'There is no structure within a range.' Internal breaks are noise. Only a clean break outside the range boundaries counts.",
          memoryTrick: "Range = no structure, no breaks that count."
        },
        {
          id: 'C',
          text: "It is a Change of Character (CHoCH) and price is guaranteed to drop 500 pips.",
          isCorrect: false,
          feedback: "INCORRECT: A CHoCH requires breaking the swing low holding an established trend, not an internal wiggle."
        }
      ]
    },
    {
      id: 2,
      title: "Scenario 02: Change of Character (CHoCH) — The Two-Beat Rule",
      concept: "Reversal Anatomy & Confirmation (Section 4)",
      description: "GBP/USD has been in an uptrend producing consecutive BOSs. Price suddenly pierces through the higher low holding the trend. Watch the replay unfold.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 130, c: 90, h: 80, l: 135, label: 'HL' },
        { id: 2, type: 'bull', o: 90, c: 50, h: 40, l: 95, label: 'HH (BOS)' },
        { id: 3, type: 'bear', o: 50, c: 115, h: 45, l: 120, label: 'Break Below HL' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 115, c: 90, h: 85, l: 120, label: 'Retest' },
        { id: 5, type: 'bear', o: 90, c: 150, h: 85, l: 160, label: '2nd BOS Down!' }
      ],
      question: "Candle 3 just closed below the higher low. What is this event and what is your required next step?",
      options: [
        {
          id: 'A',
          text: "It is a confirmed downtrend! Go all-in short with market orders right now.",
          isCorrect: false,
          feedback: "INCORRECT: One break is NOT enough. A single break is only a warning (CHoCH) and can easily turn out to be a fakeout."
        },
        {
          id: 'B',
          text: "It is a Change of Character (CHoCH): a warning only. You must wait for Beat 2 (a confirming second break lower) before trading.",
          isCorrect: true,
          feedback: "CORRECT! Beat 1 (CHoCH) is the knock on the door; Beat 2 (the second break) is the door opening. A reversal is read in two beats.",
          memoryTrick: "CHoCH is the knock, the second break is the door opening."
        },
        {
          id: 'C',
          text: "It is only a wick sweep so you should ignore it completely.",
          isCorrect: false,
          feedback: "INCORRECT: The candle body closed cleanly below the line, so it is a structural break, not a wick sweep."
        }
      ]
    },
    {
      id: 3,
      title: "Scenario 03: The Fake Change of Character (Fake CHoCH)",
      concept: "Recognizing Trap Reversals (Section 5)",
      description: "BTC/USD broke below a swing low, causing retail traders to panic short. However, price did not produce a second break down. Instead, it aggressively pushes upward toward the previous swing high.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 100, c: 50, h: 40, l: 105, label: 'Swing High' },
        { id: 2, type: 'bear', o: 50, c: 120, h: 45, l: 130, label: 'Dip Below Low' },
        { id: 3, type: 'bull', o: 120, c: 35, h: 25, l: 125, label: 'Surge Past High' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 35, c: 20, h: 15, l: 40, label: 'Trend Continues' }
      ],
      question: "Price pierced below the low, failed to print a second break down, and has now closed above the previous high. How do you classify this setup?",
      options: [
        {
          id: 'A',
          text: "The first breakdown was a Fake CHoCH. The old bullish trend is alive; treat the breakout as a normal BOS and trade it.",
          isCorrect: true,
          feedback: "CORRECT! Marking the first move as a 'fake CHoCH' buys you time and clarity: it tells you the original trend is alive and you can trade the upward BOS without waiting for extra confirmation.",
          memoryTrick: "Body breaks, wick sweeps. Fake CHoCH means the old trend lives."
        },
        {
          id: 'B',
          text: "The market is broken; shut down your computer for the next 3 weeks.",
          isCorrect: false,
          feedback: "INCORRECT: This is a textbook institutional fakeout / liquidity sweep designed to trap retail short sellers."
        },
        {
          id: 'C',
          text: "It is an invalid double top and you should sell immediately.",
          isCorrect: false,
          feedback: "INCORRECT: Price closed with a full candle body ABOVE the high, which confirms bullish continuation."
        }
      ]
    },
    {
      id: 4,
      title: "Scenario 04: Optimal Trade Entry (OTE) & Bar-Close Alert Discipline",
      concept: "Fibonacci Zones & Risk-to-Reward (Sections 7 & 13)",
      description: "After a strong bullish BOS, price retraces into the current trading range. Fibonacci 0.5 Equilibrium is at 1.08500, with an overlapping Balance Price Range (BPR) in the 0.62–0.79 OTE zone.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 130, c: 60, h: 50, l: 135, label: 'BOS Impulse' },
        { id: 2, type: 'bear', o: 60, c: 95, h: 55, l: 100, label: 'Pullback into 0.5' },
        { id: 3, type: 'bear', o: 95, c: 110, h: 90, l: 115, label: 'Inside OTE Band' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 110, c: 75, h: 70, l: 112, label: 'Bar-Close Confirm' },
        { id: 5, type: 'bull', o: 75, c: 45, h: 35, l: 80, label: 'Target Hit (1:3 RR)' }
      ],
      question: "Price has entered the shaded OTE Discount Zone. What is Roman's strict rule regarding entry execution?",
      options: [
        {
          id: 'A',
          text: "Place a blind market order immediately upon entering the zone, with a stop loss in the middle of nowhere.",
          isCorrect: false,
          feedback: "INCORRECT: A zone is NOT an entry order! Roman repeatedly warns that placing blind orders in Fibonacci zones gets retail traders stopped out."
        },
        {
          id: 'B',
          text: "Zone is where to look, not where to click. Wait for a point of interest (FVG/BPR), lower timeframe candle close, and ensure Risk-to-Reward >= 2.5:1.",
          isCorrect: true,
          feedback: "CORRECT! 'Zone is where to look, not where to click.' Use a bar-close alert, wait for the lower timeframe confirmation, and only take trades with >= 2.5 RR discipline.",
          memoryTrick: "Zone is where to look, not where to click. Miss the trade, keep the money."
        },
        {
          id: 'C',
          text: "Wait until price hits the exact all-time high before buying with maximum size.",
          isCorrect: false,
          feedback: "INCORRECT: Buying the top of a spike without discount pricing destroys your risk-to-reward ratio."
        }
      ]
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < currentScenario.candles.length) {
      // Check if paused at decision step
      if (currentStep === currentScenario.pauseAtStep && !isAnswerSubmitted) {
        setIsPlaying(false);
      } else {
        timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 1200);
      }
    } else if (currentStep >= currentScenario.candles.length) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, currentScenario, isAnswerSubmitted]);

  const handlePlayPause = () => {
    if (currentStep >= currentScenario.candles.length) {
      setCurrentStep(0);
      setIsAnswerSubmitted(false);
      setSelectedAnswer(null);
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextStep = () => {
    if (currentStep < currentScenario.candles.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleAnswerSelect = (option) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer.isCorrect) {
      setScore(prev => prev + 1);
      if (selectedAnswer.memoryTrick && !unlockedTricks.includes(selectedAnswer.memoryTrick)) {
        setUnlockedTricks(prev => [...prev, selectedAnswer.memoryTrick]);
      }
    }
    // Resume replay after answer
    setIsPlaying(true);
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setCurrentStep(0);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsPlaying(false);
    } else {
      setGameCompleted(true);
    }
  };

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-[#090d16] border-2 border-amber-500/40 shadow-2xl space-y-6">
      
      {/* Game Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2a2e39]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
              Interactive Backtesting Arena
            </span>
            <span className="text-xs font-mono text-slate-400">
              Scenario {currentScenarioIndex + 1} of {scenarios.length}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-amber-400" />
            <span>{currentScenario.title}</span>
          </h3>
          <p className="text-xs font-mono text-amber-300/80">
            {currentScenario.concept}
          </p>
        </div>

        {/* Score & Controls Bar */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-[#131722] border border-[#2a2e39] text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Institutional Score</span>
            <span className="text-base font-black text-amber-400 font-mono">{score} / {scenarios.length}</span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-[#131722] hover:bg-slate-800 border border-[#2a2e39] text-slate-300 hover:text-white transition-all"
            title="Reset Scenario"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Replay Controller & Visualizer Canvas */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-mono text-slate-400">
            Market Bar Replay: {currentStep} / {currentScenario.candles.length} Candles
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isPlaying 
                  ? 'bg-amber-500 text-dark-950 shadow-md' 
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Play Replay</span>
                </>
              )}
            </button>
            <button
              onClick={handleNextStep}
              disabled={isPlaying || currentStep >= currentScenario.candles.length}
              className="px-3 py-1.5 rounded-lg bg-[#131722] hover:bg-slate-800 border border-[#2a2e39] text-slate-300 disabled:opacity-40 text-xs font-semibold"
            >
              Next Bar &gt;
            </button>
          </div>
        </div>

        {/* Candlestick Replay SVG Viewer */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#060913] border border-[#2a2e39] relative overflow-hidden min-h-[260px] flex items-center justify-center">
          
          {/* Subtle Grid */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#2a2e39 1px, transparent 1px), linear-gradient(90deg, #2a2e39 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }} 
          />

          {/* Range Box for Scenario 1 */}
          {currentScenario.id === 1 && (
            <div className="absolute left-12 right-20 top-16 bottom-16 border-2 border-dashed border-amber-500/40 bg-amber-500/5 rounded-lg pointer-events-none flex items-start justify-end p-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase bg-[#090d16] px-2 py-0.5 rounded border border-amber-500/30">
                Range Box: No Structure Inside
              </span>
            </div>
          )}

          {/* OTE Shaded Band for Scenario 4 */}
          {currentScenario.id === 4 && (
            <div className="absolute left-10 right-10 top-24 bottom-14 bg-gradient-to-r from-emerald-500/10 via-emerald-500/15 to-transparent border-y border-emerald-500/30 pointer-events-none flex items-center justify-between px-4">
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                0.62–0.79 OTE DISCOUNT BAND &bull; BALANCE PRICE RANGE (BPR)
              </span>
              <span className="text-[10px] font-mono text-slate-400">0.5 Equilibrium</span>
            </div>
          )}

          <svg viewBox="0 0 600 200" className="w-full h-auto drop-shadow-md">
            {/* Horizontal level lines */}
            <line x1="20" y1="50" x2="580" y2="50" stroke="#1f2430" strokeDasharray="3 3" />
            <line x1="20" y1="100" x2="580" y2="100" stroke="#1f2430" strokeDasharray="3 3" />
            <line x1="20" y1="150" x2="580" y2="150" stroke="#1f2430" strokeDasharray="3 3" />

            {/* Render candles up to currentStep */}
            {currentScenario.candles.slice(0, currentStep).map((c, idx) => {
              const x = 70 + idx * 105;
              const isBull = c.type === 'bull';
              const color = isBull ? '#089981' : '#f23645';
              const topY = Math.min(c.o, c.c);
              const height = Math.max(Math.abs(c.c - c.o), 4);

              return (
                <g key={c.id} className="transition-all duration-300">
                  {/* Wick */}
                  <line x1={x} y1={c.h} x2={x} y2={c.l} stroke={color} strokeWidth="2" />
                  
                  {/* Body */}
                  <rect 
                    x={x - 14} 
                    y={topY} 
                    width="28" 
                    height={height} 
                    fill={color} 
                    rx="2"
                    stroke={color}
                  />

                  {/* Candle label */}
                  <text 
                    x={x} 
                    y={c.l + 18} 
                    fill="#94a3b8" 
                    fontSize="9.5" 
                    fontFamily="monospace" 
                    textAnchor="middle"
                  >
                    {c.label}
                  </text>
                </g>
              );
            })}

            {/* Decision Flag at Pause Point */}
            {currentStep >= currentScenario.pauseAtStep && !isAnswerSubmitted && (
              <g className="animate-pulse">
                <circle cx={70 + (currentScenario.pauseAtStep - 1) * 105} cy="30" r="12" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
                <text 
                  x={70 + (currentScenario.pauseAtStep - 1) * 105} 
                  y="34" 
                  fill="#ffffff" 
                  fontSize="12" 
                  fontWeight="bold" 
                  textAnchor="middle"
                >
                  ?
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Decision Point Question & Answer Panel */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <h4 className="text-base sm:text-lg font-bold text-white">
            {currentScenario.question}
          </h4>
        </div>

        {/* Options Grid */}
        <div className="space-y-2.5">
          {currentScenario.options.map((opt) => {
            const isSelected = selectedAnswer?.id === opt.id;
            let optClass = "bg-[#090d16] border-[#2a2e39] text-slate-300 hover:border-slate-700";

            if (isSelected) {
              optClass = "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold";
            }
            if (isAnswerSubmitted) {
              if (opt.isCorrect) {
                optClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
              } else if (isSelected && !opt.isCorrect) {
                optClass = "bg-red-500/20 border-red-500 text-red-300";
              }
            }

            return (
              <button
                key={opt.id}
                disabled={isAnswerSubmitted}
                onClick={() => handleAnswerSelect(opt)}
                className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${optClass}`}
              >
                <span className="font-mono font-bold px-2 py-0.5 rounded bg-[#161b22] border border-[#2a2e39] text-slate-400">
                  {opt.id}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button & Explanations */}
        {!isAnswerSubmitted ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 disabled:opacity-40 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
          >
            Confirm Institutional Decision
          </button>
        ) : (
          <div className="space-y-4 pt-2">
            <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
              selectedAnswer?.isCorrect 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
                : 'bg-red-500/10 border-red-500/40 text-red-300'
            }`}>
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                {selectedAnswer?.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Institutional Execution Confirmed!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span>Retail Trap Triggered</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed text-slate-200">
                {selectedAnswer?.feedback}
              </p>
              {selectedAnswer?.memoryTrick && (
                <div className="p-3 rounded-lg bg-[#090d16] border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2 mt-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Memory Trick Unlocked:</strong> “{selectedAnswer.memoryTrick}”</span>
                </div>
              )}
            </div>

            <button
              onClick={handleNextScenario}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs transition-all shadow-md"
            >
              <span>{currentScenarioIndex < scenarios.length - 1 ? 'Next Backtesting Scenario' : 'View Institutional Accreditation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Unlocked Memory Rhymes Box */}
      {unlockedTricks.length > 0 && (
        <div className="p-4 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-2">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Unlocked Institutional Memory Tricks ({unlockedTricks.length})
          </span>
          <div className="flex flex-wrap gap-2">
            {unlockedTricks.map((trick, tIdx) => (
              <span key={tIdx} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
                “{trick}”
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Completion Trophy Card */}
      {gameCompleted && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/20 via-[#131722] to-amber-500/20 border-2 border-amber-500 text-center space-y-3 shadow-2xl">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
          <h4 className="text-2xl font-black text-white">
            Chapter 3 Backtesting Master Certification Achieved!
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            You successfully navigated Break of Structure, Change of Character confirmation beats, Fakeout traps, and Optimal Trade Entry discipline.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setGameCompleted(false);
                setCurrentScenarioIndex(0);
                setCurrentStep(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setScore(0);
              }}
              className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs transition-all"
            >
              Restart All Scenarios
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
