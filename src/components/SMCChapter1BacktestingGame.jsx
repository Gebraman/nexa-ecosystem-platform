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
  ArrowRight,
  Maximize2,
  Moon,
  Sun,
  Image as ImageIcon
} from 'lucide-react';

export default function SMCChapter1BacktestingGame() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [unlockedTricks, setUnlockedTricks] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [viewMode, setViewMode] = useState('both'); // 'both', 'drawing', 'candles'
  const [invertDrawing, setInvertDrawing] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Scenario 01: The $10B Institutional Absorption & Retail Support Trap",
      concept: "Liquidity Pools & The Stop Cascade (Figure 4 & Section 5)",
      realDrawing: "/assets/smc/ch1/image4.png",
      drawingCaption: "Figure 4. Retail traders buy obvious support and cluster stop-loss sell orders just beneath it. Smart Money sweeps these stops to fill massive institutional orders.",
      description: "EUR/USD forms an obvious double bottom support level at 1.08500. Thousands of retail traders enter long with stops clustered right at 1.08450. A major tier-1 bank needs to accumulate a $10 Billion buy position. Price suddenly pierces through 1.08450 with a sharp wick, hitting 1.08410 before closing right back at 1.08530.",
      question: "What did the market just execute, and how should an institutional SMC trader interpret this candle?",
      candles: [
        { open: 1.08700, high: 1.08750, low: 1.08500, close: 1.08520, type: 'bearish', label: '1st Low' },
        { open: 1.08520, high: 1.08680, low: 1.08510, close: 1.08660, type: 'bullish', label: 'Bounce' },
        { open: 1.08660, high: 1.08690, low: 1.08500, close: 1.08510, type: 'bearish', label: '2nd Low' },
        { open: 1.08510, high: 1.08580, low: 1.08410, close: 1.08530, type: 'bullish', label: 'SWEEP!' },
        { open: 1.08530, high: 1.08720, low: 1.08520, close: 1.08710, type: 'bullish', label: 'Expansion' }
      ],
      stopAtStep: 3,
      options: [
        {
          id: 'A',
          text: "Bearish Breakdown: Support has broken. Enter short immediately with a market sell order.",
          isCorrect: false,
          rationale: "Retail error! Only a wick pierced 1.08450; the candle body closed above support. Entering short here sells directly into the institution's buy absorption at maximum discount."
        },
        {
          id: 'B',
          text: "Sell-Side Liquidity (SSL) Sweep: Retail stops triggered and absorbed by Smart Money. Prepare for bullish markup.",
          isCorrect: true,
          rationale: "Correct! The long lower wick pierced the retail stop cluster, delivering the exact counterpart volume needed to fill the $10B buy order. Price is now free to expand higher."
        },
        {
          id: 'C',
          text: "Range Consolidation: Price is random noise. Add Dollar-Cost Averaging (DCA) down.",
          isCorrect: false,
          rationale: "Incorrect. SMC forbids DCA on futures contracts. A sweep of equal lows is high-probability intentional order flow, not random noise."
        }
      ],
      memoryRhyme: "“Your stop is their entry.”"
    },
    {
      id: 2,
      title: "Scenario 02: Wick Sweep vs. Valid Candle Body Breakout",
      concept: "Fakeout Identification & The Red Line Rule (Figure 6 & Section 7)",
      realDrawing: "/assets/smc/ch1/image6.png",
      drawingCaption: "Figure 6. A wick through the line is a liquidity sweep. A full candle body close beyond it is a valid Break of Structure.",
      description: "GBP/USD approaches a major 4-Hour swing high at 1.27200. A rapid green impulse candle spikes up to 1.27350 (+15 pips above resistance). Breakout traders rush in with buy market orders. However, before the 4-Hour candle closes, price retreats and closes at 1.27180.",
      question: "Did a valid Break of Structure (BOS) occur, and what is the expected institutional move?",
      candles: [
        { open: 1.26800, high: 1.27000, low: 1.26750, close: 1.26980, type: 'bullish', label: 'Run up' },
        { open: 1.26980, high: 1.27200, low: 1.26950, close: 1.27180, type: 'bullish', label: 'At High' },
        { open: 1.27180, high: 1.27350, low: 1.27150, close: 1.27180, type: 'bearish', label: 'WICK SPIKE' },
        { open: 1.27180, high: 1.27200, low: 1.26900, close: 1.26920, type: 'bearish', label: 'Drop' },
        { open: 1.26920, high: 1.26950, low: 1.26600, close: 1.26650, type: 'bearish', label: 'Collapse' }
      ],
      stopAtStep: 2,
      options: [
        {
          id: 'A',
          text: "Yes, a valid BOS occurred because price traded at 1.27350, proving buyers are in control.",
          isCorrect: false,
          rationale: "Violates the Golden Rule! Intraday pokes mean nothing if the candle body cannot close above the key level. Wicks merely test and harvest liquidity."
        },
        {
          id: 'B',
          text: "No valid BOS. It was a Buy-Side Liquidity (BSL) grab that trapped breakout buyers. Expect aggressive downward markdown.",
          isCorrect: true,
          rationale: "Spot on! The candle body closed below 1.27200, confirming that breakout buyers were trapped at the highs while institutions offloaded short inventory."
        },
        {
          id: 'C',
          text: "It is an unconfirmed Fair Value Gap that requires buying at the wick tip.",
          isCorrect: false,
          rationale: "Never buy at the tip of a rejection wick! That is where retail liquidity was taken."
        }
      ],
      memoryRhyme: "“Wick takes the cash, body breaks the path.”"
    },
    {
      id: 3,
      title: "Scenario 03: Roman's 4-Step Master Execution Sequence",
      concept: "Chronological Order Flow Execution (Figure 8 & Section 9)",
      realDrawing: "/assets/smc/ch1/image8.png",
      drawingCaption: "Figure 8. The 4-step sequence: 1. Liquidity Sweep -> 2. Structure Shift (CHoCH) -> 3. Retest Discount FVG -> 4. Disciplined Entry.",
      description: "Bitcoin on the 1-Hour chart sweeps equal lows at $88,000 (Step 1). You switch to the 5-Minute timeframe. The 5m chart violently breaks the last Lower High with a strong full-body green candle (Step 2: Structure Shift). Price then begins pulling back toward the 50% Fair Value Gap at $88,400.",
      question: "What is your mandatory institutional action according to Chapter 1?",
      candles: [
        { open: 89000, high: 89100, low: 88000, close: 88200, type: 'bearish', label: '1. Sweep' },
        { open: 88200, high: 88800, low: 88150, close: 88750, type: 'bullish', label: '2. Shift (BOS)' },
        { open: 88750, high: 88800, low: 88400, close: 88420, type: 'bearish', label: '3. FVG Retest' },
        { open: 88420, high: 89200, low: 88400, close: 89150, type: 'bullish', label: '4. Entry Target' }
      ],
      stopAtStep: 2,
      options: [
        {
          id: 'A',
          text: "FOMO buy immediately at $88,750 because the structure shift means price will never return.",
          isCorrect: false,
          rationale: "Retail mistake! Buying at the top of an impulsive shift means buying at premium. Always wait for the discount pullback into the Point of Interest."
        },
        {
          id: 'B',
          text: "Wait for price to tap the 50% FVG retest around $88,400, place stop loss under the sweep low ($87,950), and target opposite BSL for ≥ 1:3 RR.",
          isCorrect: true,
          rationale: "Masterful execution! Step 3 (Retest) and Step 4 (Entry with defined risk) are executed with sniper precision."
        },
        {
          id: 'C',
          text: "Short the market because the 5-minute candle showed a red pullback candle.",
          isCorrect: false,
          rationale: "Trading against the newly shifted bullish structure inside a discount FVG is a guaranteed loss."
        }
      ],
      memoryRhyme: "“Sweep, shift, retest, enter.”"
    },
    {
      id: 4,
      title: "Scenario 04: The Wyckoff Spring Shakeout in a Sideways Range",
      concept: "Richard Wyckoff Accumulation & Liquidity Traps (Figure 7 & Section 8)",
      realDrawing: "/assets/smc/ch1/image7.png",
      drawingCaption: "Figure 7. The range is where institutions accumulate. The Spring is the sweep of SSL before the markup rally.",
      description: "Solana has traded sideways between $130 (Range Low) and $145 (Range High) for two weeks. Suddenly, on a quiet Sunday afternoon, price flashes a sharp 15-minute selloff down to $127, instantly triggering stop-loss sells and retail panic. Thirty minutes later, price surges back to $133 with heavy volume.",
      question: "What Wyckoff schematic element has just completed?",
      candles: [
        { open: 135, high: 144, low: 134, close: 142, type: 'bullish', label: 'Range High' },
        { open: 142, high: 143, low: 131, close: 132, type: 'bearish', label: 'Range Low' },
        { open: 132, high: 133, low: 127, close: 133, type: 'bullish', label: 'SPRING!' },
        { open: 133, high: 140, low: 132, close: 139, type: 'bullish', label: 'Markup' }
      ],
      stopAtStep: 2,
      options: [
        {
          id: 'A',
          text: "A confirmed markdown trend. Short Solana aggressively targeting $100.",
          isCorrect: false,
          rationale: "The rapid recovery back above $130 invalidates any markdown breakdown. This was a textbook shakeout."
        },
        {
          id: 'B',
          text: "A Wyckoff Spring: The final shakeout of Sell-Side Liquidity before the institutional markup phase begins.",
          isCorrect: true,
          rationale: "Correct! Richard Wyckoff documented this 100 years ago: Smart Money sweeps the range boundary to clean out weak hands and fuel their markup."
        },
        {
          id: 'C',
          text: "A Fair Value Gap failure requiring immediate liquidation.",
          isCorrect: false,
          rationale: "Incorrect. The Spring is the most powerful bullish trigger in range accumulation."
        }
      ],
      memoryRhyme: "“The spring is the institutional trampoline.”"
    },
    {
      id: 5,
      title: "Scenario 05: The Asymmetric Math of 1:3 Risk-to-Reward",
      concept: "Why 45% Win Rate Generates Massive Profit (Figure 11 & Section 11)",
      realDrawing: "/assets/smc/ch1/image11.png",
      drawingCaption: "Figure 11. 55 losses at -$100 = -$5,500. 45 wins at +$300 = +$13,500. Net institutional profit: +$8,000.",
      description: "A retail trader argues: 'If your win rate is only 45%, you are losing money because you lose more than half your trades!' An SMC practitioner conducts 100 trades risking exactly $100 per loss and taking minimum 1:3 RR profit ($300 per win).",
      question: "What is the mathematical reality of this trading journal?",
      candles: [
        { open: 100, high: 105, low: 99, close: 104, type: 'bullish', label: '55 Losses: -$5,500' },
        { open: 104, high: 115, low: 103, close: 114, type: 'bullish', label: '45 Wins: +$13,500' },
        { open: 114, high: 125, low: 112, close: 122, type: 'bullish', label: 'NET: +$8,000' }
      ],
      stopAtStep: 2,
      options: [
        {
          id: 'A',
          text: "The trader lost money because losing 55 trades is psychologically unbearable.",
          isCorrect: false,
          rationale: "Amateur mindset! Professional trading is a game of statistical expectancy, not emotional attachment to individual trades."
        },
        {
          id: 'B',
          text: "The trader generated +$8,000 NET PROFIT because asymmetric payout (+3R) vastly outpaces small controlled losses (-1R).",
          isCorrect: true,
          rationale: "Mastery achieved! Math wins every time: 45 × $300 ($13,500) minus 55 × $100 ($5,500) equals +$8,000 in pocket."
        },
        {
          id: 'C',
          text: "Win rate must be at least 90% to trade professionally.",
          isCorrect: false,
          rationale: "Anyone promising 90% win rates is selling retail fantasy. Real institutional desks aim for 40-50% win rates with 3R to 5R payoffs."
        }
      ],
      memoryRhyme: "“1 to 3 keeps you wealthy, even when losing more trades than you win.”"
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  // Auto-play animation loop
  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < currentScenario.candles.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1000);
    } else if (currentStep >= currentScenario.candles.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, currentScenario.candles.length]);

  const handleNextStep = () => {
    if (currentStep < currentScenario.candles.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleResetReplay = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleSelectOption = (option) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer.isCorrect) {
      setScore(prev => prev + 1);
      if (!unlockedTricks.includes(currentScenario.memoryRhyme)) {
        setUnlockedTricks(prev => [...prev, currentScenario.memoryRhyme]);
      }
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

  const handleRestartGame = () => {
    setCurrentScenarioIndex(0);
    setCurrentStep(0);
    setIsPlaying(false);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUnlockedTricks([]);
    setGameCompleted(false);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-[#2a2e39] space-y-8 shadow-2xl">
      
      {/* Top Header & Scoreboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2a2e39]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Interactive Backtesting Arena • Chapter 01
            </span>
            <span className="text-xs font-mono text-slate-400">
              Scenario {currentScenarioIndex + 1} of {scenarios.length}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {currentScenario.title}
          </h3>
          <p className="text-xs text-amber-300 font-mono">
            {currentScenario.concept}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-xl bg-[#131722] border border-[#2a2e39] text-right">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Institutional Edge</span>
            <span className="text-lg font-black text-emerald-400 font-mono">
              {score} / {scenarios.length}
            </span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-[#2a2e39] text-xs font-mono">
            <button
              onClick={() => setViewMode('both')}
              className={`px-2.5 py-1 rounded-lg transition-all ${viewMode === 'both' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Dual View
            </button>
            <button
              onClick={() => setViewMode('drawing')}
              className={`px-2.5 py-1 rounded-lg transition-all ${viewMode === 'drawing' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Drawing
            </button>
            <button
              onClick={() => setViewMode('candles')}
              className={`px-2.5 py-1 rounded-lg transition-all ${viewMode === 'candles' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Candles
            </button>
          </div>
        </div>
      </div>

      {!gameCompleted ? (
        <div className="space-y-6">

          {/* Visual Dual Screen: Real Author Vector Drawing + Bar Replay Simulator */}
          <div className={`grid gap-6 ${viewMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
            
            {/* SCREEN 1: Real Author Drawing */}
            {(viewMode === 'both' || viewMode === 'drawing') && (
              <div className="rounded-2xl bg-[#131722] border border-[#2a2e39] p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#2a2e39]">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <ImageIcon className="w-3.5 h-3.5" /> Author Textbook Schematic
                  </span>
                  <button
                    onClick={() => setInvertDrawing(!invertDrawing)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#090d16] hover:bg-slate-800 text-[11px] text-slate-300 transition-colors"
                  >
                    {invertDrawing ? <Moon className="w-3 h-3 text-amber-400" /> : <Sun className="w-3 h-3 text-amber-400" />}
                    <span>{invertDrawing ? 'Dark Terminal' : 'Light Paper'}</span>
                  </button>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-black/40 border border-[#2a2e39] flex items-center justify-center min-h-[260px]">
                  <img
                    src={currentScenario.realDrawing}
                    alt={currentScenario.title}
                    className={`max-h-[320px] w-auto object-contain transition-all duration-300 ${
                      invertDrawing ? 'invert hue-rotate-180 brightness-95 contrast-125' : ''
                    }`}
                  />
                </div>

                <p className="text-[11px] font-mono text-slate-400 bg-[#090d16] p-2.5 rounded-lg border border-[#2a2e39]">
                  {currentScenario.drawingCaption}
                </p>
              </div>
            )}

            {/* SCREEN 2: Dynamic Candlestick Bar Replay */}
            {(viewMode === 'both' || viewMode === 'candles') && (
              <div className="rounded-2xl bg-[#131722] border border-[#2a2e39] p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#2a2e39]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Layers className="w-3.5 h-3.5" /> Live Replay Canvas (Candle {currentStep + 1} of {currentScenario.candles.length})
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-[11px] transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isPlaying ? 'Pause' : 'Play'}</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={currentStep >= currentScenario.candles.length - 1}
                      className="px-2 py-1 rounded-lg bg-[#090d16] hover:bg-slate-800 disabled:opacity-30 text-[11px] text-slate-300 font-mono transition-colors"
                    >
                      Step +1
                    </button>
                    <button
                      onClick={handleResetReplay}
                      className="p-1 rounded-lg bg-[#090d16] hover:bg-slate-800 text-slate-400 transition-colors"
                      title="Reset Candlesticks"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Candlestick Visualization Canvas */}
                <div className="relative rounded-xl overflow-hidden bg-[#090d16] border border-[#2a2e39] h-[260px] flex items-center justify-around px-6">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none p-4">
                    <div className="border-b border-slate-500" />
                    <div className="border-b border-slate-500" />
                    <div className="border-b border-slate-500" />
                  </div>

                  {currentScenario.candles.map((candle, cIdx) => {
                    const isVisible = cIdx <= currentStep;
                    const isCurrent = cIdx === currentStep;
                    const isBullish = candle.type === 'bullish';
                    const heightPercent = Math.min(180, Math.max(50, Math.abs(candle.close - candle.open) * 1000 + 40));

                    return (
                      <div 
                        key={cIdx} 
                        className={`flex flex-col items-center justify-center transition-all duration-500 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-10 scale-90'
                        }`}
                      >
                        <span className={`text-[9px] font-mono mb-1 ${isCurrent ? 'text-amber-400 font-bold underline' : 'text-slate-500'}`}>
                          {candle.label}
                        </span>
                        
                        {/* Candlestick Upper Wick */}
                        <div className="w-0.5 h-6 bg-slate-400" />
                        
                        {/* Candlestick Body */}
                        <div 
                          style={{ height: `${heightPercent}px` }}
                          className={`w-7 rounded-sm shadow-md transition-all ${
                            isBullish 
                              ? 'bg-emerald-500 border border-emerald-300 shadow-emerald-500/20' 
                              : 'bg-red-500 border border-red-300 shadow-red-500/20'
                          } ${isCurrent ? 'ring-2 ring-amber-400' : ''}`}
                        />
                        
                        {/* Candlestick Lower Wick */}
                        <div className="w-0.5 h-8 bg-slate-400" />
                      </div>
                    );
                  })}
                </div>

                <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#2a2e39] text-xs text-slate-300 flex items-center justify-between font-mono">
                  <span>Replay: {currentStep < currentScenario.stopAtStep ? 'Observing order flow development...' : 'CRITICAL DECISION POINT!'}</span>
                  {currentStep >= currentScenario.stopAtStep && (
                    <span className="text-amber-400 font-bold animate-pulse">Evaluate Setup Below</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Scenario Case Narrative */}
          <div className="p-5 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Market Situation
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              {currentScenario.description}
            </p>
            <p className="text-sm font-bold text-white pt-2 border-t border-[#2a2e39]/60">
              <span className="text-amber-400 font-mono mr-1">Objective:</span> {currentScenario.question}
            </p>
          </div>

          {/* Interactive Multiple Choice Decision Options */}
          <div className="space-y-3">
            {currentScenario.options.map((opt) => {
              const isSelected = selectedAnswer?.id === opt.id;
              let btnClass = "bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-slate-600";

              if (isSelected) {
                btnClass = "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold";
              }

              if (isAnswerSubmitted) {
                if (opt.isCorrect) {
                  btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                } else if (isSelected && !opt.isCorrect) {
                  btnClass = "bg-red-500/20 border-red-500 text-red-300 font-bold";
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(opt)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnClass}`}
                >
                  <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-amber-500 text-dark-950' : 'bg-[#090d16] text-slate-400'
                  }`}>
                    {opt.id}
                  </span>
                  <div className="space-y-1">
                    <span>{opt.text}</span>
                    {isAnswerSubmitted && (
                      <p className={`text-xs mt-1.5 pt-1.5 border-t border-slate-700/40 ${opt.isCorrect ? 'text-emerald-400 font-mono' : 'text-red-400'}`}>
                        {opt.rationale}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#2a2e39]">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-dark-950 font-black text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Lock In Institutional Decision</span>
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                <div className="flex items-center gap-2">
                  {selectedAnswer.isCorrect ? (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Correct! Memory Rhyme Unlocked:</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                        {currentScenario.memoryRhyme}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>Sub-optimal execution. Review the institutional rationale above.</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleNextScenario}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <span>{currentScenarioIndex < scenarios.length - 1 ? 'Next Backtest Scenario' : 'Review Performance'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Trophy & Game Completion Screen */
        <div className="py-12 px-6 rounded-2xl bg-[#131722] border border-[#2a2e39] text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Chapter 01 Backtest Certification Complete!
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              You scored <strong className="text-emerald-400">{score} out of {scenarios.length}</strong> on institutional order flow absorption, wick sweeps, and asymmetric 1:3 risk math.
            </p>
          </div>

          {/* Unlocked Memory Rhymes Box */}
          <div className="p-5 rounded-2xl bg-[#090d16] border border-[#2a2e39] max-w-xl mx-auto space-y-3 text-left">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
              Unlocked Institutional Memory Rhymes:
            </span>
            <div className="space-y-2">
              {unlockedTricks.map((trick, tIdx) => (
                <div key={tIdx} className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>{trick}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestartGame}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs font-mono transition-all inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay Chapter 1 Backtest Scenarios</span>
          </button>
        </div>
      )}

    </div>
  );
}
