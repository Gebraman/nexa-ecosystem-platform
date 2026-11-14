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

export default function SMCChapter4BacktestingGame() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Scenario 01: Equal Highs (EQH) Turtle Soup Sweep",
      concept: "Buy-Side Liquidity Purge (Chapter 4 Section 4 & 5)",
      description: "Bitcoin has consolidated for 4 days between $66,000 and $68,500. A clean double-top with Equal Highs has formed at $68,520. Watch the bar replay unfold at the New York session open.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 150, c: 100, h: 90, l: 160, label: 'High 1 ($68,510)' },
        { id: 2, type: 'bear', o: 100, c: 140, h: 95, l: 150, label: 'Pullback' },
        { id: 3, type: 'bull', o: 140, c: 100, h: 90, l: 145, label: 'High 2 ($68,520 EQH)' },
        { id: 4, type: 'sweep', o: 100, c: 115, h: 40, l: 125, label: 'Spike to $68,850 & Close inside!' }, // PAUSE HERE
        { id: 5, type: 'bear', o: 115, c: 180, h: 110, l: 190, label: 'Collapse to SSL ($66k)' }
      ],
      question: "Bar 4 wicked 330 points above the Equal Highs to $68,850, but closed back at $68,410 inside the range. What is your institutional execution?",
      options: [
        {
          id: 'A',
          text: "Enter Long immediately: price broke out above resistance and will moon to $75,000.",
          isCorrect: false,
          feedback: "RETAIL TRAP: Buying the top of a wick breakout is how retail traders provide liquidity to Smart Money. The body closed back INSIDE the range!"
        },
        {
          id: 'B',
          text: "Execute a Short setup: wait for lower-timeframe CHoCH, then short targeting the discount FVG and external Sell-Side Liquidity ($66k).",
          isCorrect: true,
          feedback: "INSTITUTIONAL EXECUTION CONFIRMED! This is a textbook Turtle Soup sweep of Buy-Side Liquidity. Smart Money absorbed retail breakout orders to fill massive short positions."
        },
        {
          id: 'C',
          text: "Place a buy limit at $68,850 because old resistance becomes new support.",
          isCorrect: false,
          feedback: "INCORRECT: A level that has just been swept has zero resting orders left. Placing orders at the sweep peak is a guaranteed loss."
        }
      ]
    },
    {
      id: 2,
      title: "Scenario 02: Trendline Liquidity Compression Flush",
      concept: "Sell-Side Liquidity Compression (Chapter 4 Section 6)",
      description: "EUR/USD has been grinding upward in an overlapping diagonal channel. Retail traders have bought 3 consecutive touches of the trendline with stops resting underneath.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 160, c: 130, h: 125, l: 165, label: 'Touch 1' },
        { id: 2, type: 'bull', o: 130, c: 105, h: 100, l: 135, label: 'Touch 2' },
        { id: 3, type: 'bull', o: 105, c: 80, h: 75, l: 110, label: 'Touch 3 (Heavy Stops Under)' }, // PAUSE HERE
        { id: 4, type: 'bear', o: 80, c: 140, h: 75, l: 145, label: 'Trendline Breakdown' },
        { id: 5, type: 'bear', o: 140, c: 200, h: 135, l: 210, label: 'Liquidity Cascade' }
      ],
      question: "Price approaches the trendline for a 4th touch. What does Smart Money see?",
      options: [
        {
          id: 'A',
          text: "Smart Money sees an uncollected liquidity debt. Stop-losses are clustered beneath every touchpoint, waiting to be flushed.",
          isCorrect: true,
          feedback: "CORRECT! Trendlines are not dynamic support; they are liquidity compression. Smart Money will trigger a cascade through the stops."
        },
        {
          id: 'B',
          text: "Smart Money sees strong trendline support and will buy with high leverage alongside retail.",
          isCorrect: false,
          feedback: "INCORRECT: Institutions do not trade diagonal trendlines. Overlapping candles indicate corrective liquidity build-up."
        },
        {
          id: 'C',
          text: "Smart Money waits for a 50-period moving average golden cross.",
          isCorrect: false,
          feedback: "INCORRECT: Moving averages are lagging indicators. Institutions trade real order book liquidity."
        }
      ]
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  // Auto-play timer
  useEffect(() => {
    let interval = null;
    if (isPlaying && currentStep < currentScenario.candles.length - 1) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev + 1 === currentScenario.pauseAtStep && !isAnswerSubmitted) {
            setIsPlaying(false);
            return prev + 1;
          }
          if (prev + 1 >= currentScenario.candles.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, currentScenario, isAnswerSubmitted]);

  const handleNextStep = () => {
    if (currentStep < currentScenario.candles.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSelectOption = (opt) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
    setIsAnswerSubmitted(true);
    if (opt.isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setCurrentStep(0);
      setIsPlaying(false);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setGameCompleted(true);
    }
  };

  const handleResetGame = () => {
    setCurrentScenarioIndex(0);
    setCurrentStep(0);
    setIsPlaying(false);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setGameCompleted(false);
  };

  return (
    <div className="my-8 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-5 sm:p-7 bg-gradient-to-r from-[#131722] via-[#0c1017] to-[#131722] border-b border-[#2a2e39] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-rose-400 uppercase">
              Chapter 4 Interactive Arena • Liquidity Hunt Backtester
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Institutional Liquidity & Turtle Soup Replay Engine
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Step through real liquidity sweeps bar-by-bar. Predict the institutional reaction before the breakout traps retail.
          </p>
        </div>

        {/* Score Badge */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[#0c1017] border border-[#2a2e39] font-mono text-xs text-slate-300 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Score: <strong className="text-amber-400">{score}</strong> / {scenarios.length}</span>
          </div>
        </div>
      </div>

      {!gameCompleted ? (
        <div className="p-5 sm:p-7 space-y-6">
          {/* Scenario Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39]">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase font-bold">
                {currentScenario.concept}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                {currentScenario.title}
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Scenario {currentScenarioIndex + 1} of {scenarios.length}
            </span>
          </div>

          {/* Candlestick Visualizer */}
          <div className="p-5 rounded-2xl bg-[#07090e] border border-[#1b202c] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Target className="w-4 h-4" /> Live Candlestick Replay Stage
              </span>
              <span>Candle {currentStep + 1} of {currentScenario.candles.length}</span>
            </div>

            {/* SVG Candlestick Track */}
            <div className="relative h-60 bg-[#090d16] rounded-xl border border-[#2a2e39] overflow-hidden flex items-center justify-center select-none">
              <svg viewBox="0 0 450 220" className="w-full h-full">
                {/* Horizontal reference lines */}
                <line x1="20" y1="90" x2="430" y2="90" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="25" y="82" fill="#fda4af" fontSize="9" fontFamily="monospace">
                  EQUAL HIGHS SWEEP LEVEL ($68,520)
                </text>

                {/* Candles up to currentStep */}
                {currentScenario.candles.slice(0, currentStep + 1).map((c, i) => {
                  const x = 50 + i * 80;
                  const isBull = c.type === 'bull';
                  const isSweep = c.type === 'sweep';
                  const strokeColor = isSweep ? '#f59e0b' : isBull ? '#10b981' : '#f43f5e';
                  const fillColor = isSweep ? '#f59e0b' : isBull ? '#10b981' : '#f43f5e';

                  return (
                    <g key={c.id}>
                      {/* Wick */}
                      <line x1={x} y1={c.h} x2={x} y2={c.l} stroke={strokeColor} strokeWidth="2" />
                      {/* Body */}
                      <rect
                        x={x - 12}
                        y={Math.min(c.o, c.c)}
                        width="24"
                        height={Math.max(8, Math.abs(c.o - c.c))}
                        rx="2"
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                      {/* Label */}
                      <text
                        x={x}
                        y={c.l + 16}
                        fill="#94a3b8"
                        fontSize="8"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {c.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Replay Controls */}
            <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-[#2a2e39]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#131722] hover:bg-slate-800 text-xs font-mono font-bold text-white border border-[#2a2e39] flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play Replay'}</span>
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStep >= currentScenario.candles.length - 1}
                  className="px-3 py-1.5 rounded-xl bg-[#131722] hover:bg-slate-800 disabled:opacity-40 text-xs font-mono text-slate-300 border border-[#2a2e39] flex items-center gap-1 transition-colors"
                >
                  <span>Next Bar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
                className="px-3 py-1.5 rounded-xl bg-[#131722] hover:bg-slate-800 text-xs font-mono text-slate-400 border border-[#2a2e39] flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restart Candles</span>
              </button>
            </div>
          </div>

          {/* Decision Question Area */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1017] border border-amber-500/30 space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <h4 className="text-base sm:text-lg font-bold text-white">
                {currentScenario.question}
              </h4>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentScenario.options.map((opt) => {
                const isSelected = selectedAnswer?.id === opt.id;
                const showSuccess = isAnswerSubmitted && opt.isCorrect;
                const showWrong = isAnswerSubmitted && isSelected && !opt.isCorrect;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all border flex items-start gap-3 ${
                      showSuccess
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : showWrong
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                        : isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-slate-600 hover:text-white'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#090d16] border border-[#2a2e39] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {opt.id}
                    </span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Advance Button */}
            {isAnswerSubmitted && (
              <div className="space-y-4 pt-3 border-t border-[#2a2e39]">
                <div className={`p-4 rounded-xl text-xs font-mono ${
                  selectedAnswer.isCorrect
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                }`}>
                  <strong>{selectedAnswer.isCorrect ? '✓ INSTITUTIONAL ACCURACY:' : '✗ TRADING ERROR:'}</strong> {selectedAnswer.feedback}
                </div>

                <button
                  onClick={handleNextScenario}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-xs font-mono uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>{currentScenarioIndex < scenarios.length - 1 ? 'Next Backtesting Scenario →' : 'Complete Arena Assessment'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Completion Screen */
        <div className="p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-white">
              Chapter 4 Backtesting Arena Complete!
            </h4>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              You correctly diagnosed {score} out of {scenarios.length} institutional liquidity scenarios.
            </p>
          </div>

          <div className="inline-block p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39] font-mono text-sm text-amber-400">
            {score === scenarios.length
              ? 'Institutional Mastery: You read liquidity like a Tier-1 Market Maker.'
              : 'Keep Practicing: Revisit Section 4 & 5 to master Turtle Soup sweeps.'}
          </div>

          <div>
            <button
              onClick={handleResetGame}
              className="px-6 py-2.5 rounded-xl bg-[#131722] hover:bg-slate-800 text-white font-mono text-xs font-bold border border-[#2a2e39] transition-colors"
            >
              Replay Arena
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
