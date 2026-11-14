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

export default function SMCChapter3BacktestingGame() {
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
      title: "Scenario 01: Break of Structure vs. Range Consolidation",
      concept: "Market States & Range Noise (Figure 3 & Section 3)",
      realDrawing: "/assets/smc/ch3/image3.png",
      drawingCaption: "Figure 3. Left: Beginner trap of marking every swing inside a range. Right: Drawing a box around the range and waiting for a clean break OUT.",
      description: "EUR/USD has been moving sideways between 1.08200 (Range Low) and 1.09000 (Range High) for several sessions. Price forms a higher high inside the box. Watch the candles replay and decide the institutional action.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 110, c: 80, h: 70, l: 120, label: 'Swing High' },
        { id: 2, type: 'bear', o: 80, c: 130, h: 75, l: 140, label: 'Swing Low' },
        { id: 3, type: 'bull', o: 130, c: 95, h: 90, l: 135, label: 'Push Up' }, // PAUSE HERE
        { id: 4, type: 'bear', o: 95, c: 125, h: 90, l: 130, label: 'Internal Noise' },
        { id: 5, type: 'bull', o: 125, c: 50, h: 40, l: 130, label: 'True Breakout!' }
      ],
      question: "Look at the real chart drawing and Candle 3 inside the box: What is the institutional diagnosis?",
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
      concept: "Reversal Anatomy & Confirmation (Figure 4 & Section 4)",
      realDrawing: "/assets/smc/ch3/image4.png",
      drawingCaption: "Figure 4. Beat 1: The CHoCH warning through the higher low. Beat 2: A second break lower confirms the new bearish trend.",
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
      title: "Scenario 03: The Fake Change of Character (Trap)",
      concept: "False Reversals & Liquidity Sweeps (Figure 5 & Section 5)",
      realDrawing: "/assets/smc/ch3/image5.png",
      drawingCaption: "Figure 5. Price breaks the low, then makes a new high. The CHoCH was fake, so the move up is a normal higher low in the uptrend.",
      description: "Bitcoin forms an apparent break below a swing low. Traders rush to short, expecting a macro bear trend. Then a high-volume green candle appears.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 120, c: 80, h: 70, l: 125, label: 'Higher Low' },
        { id: 2, type: 'bull', o: 80, c: 45, h: 35, l: 85, label: 'Higher High' },
        { id: 3, type: 'bear', o: 45, c: 135, h: 40, l: 140, label: 'Break Below HL' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 135, c: 60, h: 50, l: 140, label: 'Rejection Rocket' },
        { id: 5, type: 'bull', o: 60, c: 20, h: 15, l: 65, label: 'New All-Time High' }
      ],
      question: "Price broke below the swing low, but immediately rallied above the previous high. What was that break?",
      options: [
        {
          id: 'A',
          text: "It was a real downtrend that failed due to unexpected news.",
          isCorrect: false,
          feedback: "INCORRECT: In institutional SMC, we don't blame news. We read liquidity mechanics."
        },
        {
          id: 'B',
          text: "It was a Fake CHoCH: price swept liquidity below the low, the old trend remained active, and the dip was just a normal higher low.",
          isCorrect: true,
          feedback: "CORRECT! If a CHoCH fails to produce a second break and instead makes a higher high, it was a fakeout. The uptrend never died.",
          memoryTrick: "Wick takes the cash, body breaks the path."
        },
        {
          id: 'C',
          text: "It was an Order Block mitigation that invalidated market structure.",
          isCorrect: false,
          feedback: "INCORRECT: An order block does not invalidate structure; structure governs all POIs."
        }
      ]
    },
    {
      id: 4,
      title: "Scenario 04: Premium & Discount Execution (OTE 0.62–0.79)",
      concept: "Dealing Ranges & Bar-Close Alert Discipline (Figure 7 & Section 7)",
      realDrawing: "/assets/smc/ch3/image7.png",
      drawingCaption: "Figure 7. Look to buy in the discount of an uptrend and to sell in the premium of a downtrend. The sweet spot is 0.62 to 0.79.",
      description: "A major impulse leg is established from 2,000 to 2,500. Price retraces into the dealing range. You set an alert at the 0.5 Equilibrium level.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bull', o: 140, c: 40, h: 30, l: 150, label: 'Impulse Leg' },
        { id: 2, type: 'bear', o: 40, c: 75, h: 35, l: 80, label: 'Retracement 0.38' },
        { id: 3, type: 'bear', o: 75, c: 110, h: 70, l: 125, label: 'Hits 0.62 OTE' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 110, c: 65, h: 60, l: 115, label: 'Bar-Close Confirm' },
        { id: 5, type: 'bull', o: 65, c: 20, h: 10, l: 70, label: 'Target 1:4 RR' }
      ],
      question: "Price touches the 0.62–0.79 OTE zone with a wick. What is Roman's mandatory execution rule?",
      options: [
        {
          id: 'A',
          text: "Click Market Buy the instant the price touches the zone line.",
          isCorrect: false,
          feedback: "INCORRECT: Touching a zone does NOT mean enter. Roman says: 'The zone is where to look, not where to click!'"
        },
        {
          id: 'B',
          text: "Wait for a bar-close confirmation or switch to LTF to see a shift before opening the trade.",
          isCorrect: true,
          feedback: "CORRECT! Touch alerts warn you to pay attention; bar-close alerts or LTF shifts confirm the reaction. Never buy blindly inside the zone.",
          memoryTrick: "Zone is where to look, not where to click."
        },
        {
          id: 'C',
          text: "Cancel the trade because price pulled back too deeply.",
          isCorrect: false,
          feedback: "INCORRECT: 0.62–0.79 is the optimal trade entry (OTE), the highest-probability area for institutional entries."
        }
      ]
    },
    {
      id: 5,
      title: "Scenario 05: The SUI 6-Step Case Study",
      concept: "End-to-End Institutional Trade Execution (Figure 9 & Section 9)",
      realDrawing: "/assets/smc/ch3/image9.png",
      drawingCaption: "Figure 9. The SUI story in six numbered steps: Range -> Liquidity Sweep -> Re-entry -> Retest -> BOS -> Explosive Markup.",
      description: "On the SUI token, price consolidates in a broad macro range. Smart Money engineers a deep wick below the range low, takes out all stop losses, and returns inside.",
      pauseAtStep: 3,
      candles: [
        { id: 1, type: 'bear', o: 60, c: 110, h: 55, l: 115, label: 'Step 1 Range' },
        { id: 2, type: 'bear', o: 110, c: 160, h: 105, l: 175, label: 'Step 2 Sweep Low' },
        { id: 3, type: 'bull', o: 160, c: 90, h: 85, l: 165, label: 'Step 3 Return Inside' }, // PAUSE HERE
        { id: 4, type: 'bull', o: 90, c: 70, h: 65, l: 95, label: 'Step 4 BOS Break' },
        { id: 5, type: 'bull', o: 70, c: 20, h: 15, l: 75, label: 'Step 5-6 Expansion' }
      ],
      question: "Price swept the range low, closed back inside the range, and retested. What is the institutional target?",
      options: [
        {
          id: 'A',
          text: "Take profit at the middle of the range only.",
          isCorrect: false,
          feedback: "INCORRECT: While 0.5 is an intermediate milestone, a full liquidity sweep aims at the opposing side of the range."
        },
        {
          id: 'B',
          text: "Target the opposing Buy-Side Liquidity (BSL) resting above the range high, yielding a massive 1:6+ Risk-to-Reward ratio.",
          isCorrect: true,
          feedback: "CORRECT! Price moves from liquidity to liquidity. Once sell-side stops are swept and structure shifts, the algorithmic target is the resting buy stops above the range high.",
          memoryTrick: "A missed trade costs zero dollars; a FOMO trade costs your account."
        },
        {
          id: 'C',
          text: "Wait for the trade to break even and exit.",
          isCorrect: false,
          feedback: "INCORRECT: In SMC, we let winners run to the liquidity target with asymmetric risk-to-reward."
        }
      ]
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  // Auto-replay timer effect
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= currentScenario.candles.length) {
            setIsPlaying(false);
            return prev;
          }
          // Check pause at decision candle
          if (prev + 1 === currentScenario.pauseAtStep && !isAnswerSubmitted) {
            setIsPlaying(false);
            return prev + 1;
          }
          return prev + 1;
        });
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentScenario, isAnswerSubmitted]);

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

  const handleSelectOption = (option) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    if (option.isCorrect) {
      setScore(prev => prev + 1);
      if (option.memoryTrick && !unlockedTricks.includes(option.memoryTrick)) {
        setUnlockedTricks(prev => [...prev, option.memoryTrick]);
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

        {/* View Mode & Score Controls */}
        <div className="flex items-center gap-3">
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

          <div className="px-3.5 py-1.5 rounded-xl bg-[#131722] border border-[#2a2e39] text-center">
            <span className="text-[9px] font-mono text-slate-400 uppercase block">Score</span>
            <span className="text-sm font-black text-amber-400 font-mono">{score} / {scenarios.length}</span>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-[#131722] hover:bg-slate-800 border border-[#2a2e39] text-slate-300 hover:text-white transition-all"
            title="Reset Scenario"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="space-y-4">
        
        {/* Scenario Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#131722] p-3.5 rounded-xl border border-[#2a2e39]">
          <strong className="text-amber-400">Trading Situation:</strong> {currentScenario.description}
        </p>

        {/* Viewport Grid (Drawing + Candlestick Replay) */}
        <div className={`grid gap-4 ${viewMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          
          {/* A. Real Textbook Drawing Card */}
          {(viewMode === 'both' || viewMode === 'drawing') && currentScenario.realDrawing && (
            <div className="rounded-2xl bg-[#060913] border border-[#2a2e39] overflow-hidden flex flex-col justify-between">
              <div className="p-3 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5" /> Official Textbook Drawing
                </span>
                <button
                  onClick={() => setInvertDrawing(!invertDrawing)}
                  className="px-2 py-0.5 rounded text-[11px] bg-[#090d16] text-slate-300 border border-[#2a2e39] hover:text-white flex items-center gap-1"
                >
                  {invertDrawing ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-cyan-400" />}
                  <span>{invertDrawing ? 'Paper' : 'Dark'}</span>
                </button>
              </div>

              <div className={`p-4 flex items-center justify-center min-h-[220px] transition-colors ${invertDrawing ? 'bg-white' : 'bg-[#070b12]'}`}>
                <img
                  src={currentScenario.realDrawing}
                  alt={currentScenario.title}
                  className={`max-w-full max-h-[260px] object-contain rounded transition-all ${
                    invertDrawing ? 'filter-none' : 'filter invert hue-rotate-180 brightness-95 contrast-125'
                  }`}
                />
              </div>

              <div className="p-3 bg-[#0d121f] border-t border-[#2a2e39] text-[11px] font-mono text-slate-400">
                {currentScenario.drawingCaption}
              </div>
            </div>
          )}

          {/* B. Candlestick Replay Interactive Canvas */}
          {(viewMode === 'both' || viewMode === 'candles') && (
            <div className="rounded-2xl bg-[#060913] border border-[#2a2e39] overflow-hidden flex flex-col justify-between">
              
              {/* Candlestick Controls Bar */}
              <div className="p-3 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">
                  Candle Replay: <strong className="text-amber-400">{currentStep}</strong> / {currentScenario.candles.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayPause}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition-all ${
                      isPlaying 
                        ? 'bg-amber-500 text-dark-950' 
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={isPlaying || currentStep >= currentScenario.candles.length}
                    className="px-2.5 py-1 rounded bg-[#090d16] hover:bg-slate-800 border border-[#2a2e39] text-slate-300 disabled:opacity-40 text-xs font-semibold"
                  >
                    Next Bar &gt;
                  </button>
                </div>
              </div>

              {/* Candlestick SVG Chart Viewport */}
              <div className="p-4 sm:p-6 relative min-h-[220px] flex items-center justify-center">
                
                {/* Subtle Grid */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ 
                    backgroundImage: 'linear-gradient(#2a2e39 1px, transparent 1px), linear-gradient(90deg, #2a2e39 1px, transparent 1px)', 
                    backgroundSize: '24px 24px' 
                  }} 
                />

                {/* Candlestick Rendering Engine */}
                <svg className="w-full h-44 overflow-visible" viewBox="0 0 500 180">
                  {/* Dynamic Levels based on Scenario */}
                  {currentScenario.id === 1 && (
                    <rect x="50" y="55" width="400" height="95" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" rx="4" />
                  )}

                  {currentScenario.id === 2 && (
                    <line x1="40" y1="90" x2="460" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
                  )}

                  {currentScenario.id === 4 && (
                    <rect x="40" y="85" width="420" height="50" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
                  )}

                  {/* Render visible candles up to currentStep */}
                  {currentScenario.candles.slice(0, currentStep).map((c, i) => {
                    const cx = 80 + i * 85;
                    const isBull = c.type === 'bull';
                    const candleColor = isBull ? '#10b981' : '#ef4444';
                    const bodyTop = Math.min(c.o, c.c);
                    const bodyHeight = Math.max(Math.abs(c.o - c.c), 6);
                    const isDecisionCandle = i + 1 === currentScenario.pauseAtStep;

                    return (
                      <g key={c.id} className="transition-all duration-300">
                        {/* Upper and Lower Wicks */}
                        <line x1={cx} y1={c.h} x2={cx} y2={c.l} stroke={candleColor} strokeWidth="2" />
                        
                        {/* Real Body */}
                        <rect
                          x={cx - 12}
                          y={bodyTop}
                          width={24}
                          height={bodyHeight}
                          fill={isBull ? '#10b981' : '#ef4444'}
                          stroke={isDecisionCandle ? '#f59e0b' : 'none'}
                          strokeWidth={isDecisionCandle ? 2 : 0}
                          rx={2}
                          className={isDecisionCandle ? 'animate-pulse' : ''}
                        />

                        {/* Candle Label */}
                        <text
                          x={cx}
                          y={c.l + 18}
                          textAnchor="middle"
                          fill="#94a3b8"
                          fontSize="9.5"
                          fontFamily="monospace"
                        >
                          {c.label}
                        </text>

                        {/* Decision Target Arrow */}
                        {isDecisionCandle && (
                          <g>
                            <circle cx={cx} cy={c.h - 14} r="10" fill="#f59e0b" />
                            <text x={cx} y={c.h - 10} textAnchor="middle" fill="#090d16" fontSize="10" fontWeight="900" fontFamily="sans-serif">?</text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Status Bar */}
              <div className="p-3 bg-[#0d121f] border-t border-[#2a2e39] flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">
                  {currentStep < currentScenario.pauseAtStep ? (
                    'Replaying price action...'
                  ) : currentStep === currentScenario.pauseAtStep && !isAnswerSubmitted ? (
                    <span className="text-amber-400 font-bold animate-pulse">PAUSED AT DECISION BAR: CHOOSE NEXT ACTION</span>
                  ) : (
                    <span className="text-emerald-400 font-bold">ANALYSIS CONFIRMED</span>
                  )}
                </span>
                <span className="text-slate-500">Step {currentStep} of {currentScenario.candles.length}</span>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Decision Point Question & Hypothesis Options */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-4">
        <div className="flex items-start gap-2.5">
          <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
            {currentScenario.question}
          </h4>
        </div>

        <div className="space-y-2.5 pt-1">
          {currentScenario.options.map((opt) => {
            const isSelected = selectedAnswer?.id === opt.id;
            let btnStyle = "bg-[#090d16] border-[#2a2e39] text-slate-300 hover:bg-[#1a202e] hover:border-amber-500/40";

            if (isAnswerSubmitted) {
              if (opt.isCorrect) {
                btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = "bg-red-500/20 border-red-500 text-red-300 font-bold";
              } else {
                btnStyle = "bg-[#090d16] border-[#2a2e39] text-slate-500 opacity-50";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt)}
                disabled={isAnswerSubmitted}
                className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-sans flex items-start gap-3 transition-all ${btnStyle}`}
              >
                <span className={`w-6 h-6 rounded-lg font-mono font-bold flex items-center justify-center shrink-0 text-xs ${
                  isAnswerSubmitted && opt.isCorrect
                    ? 'bg-emerald-500 text-dark-950 font-black'
                    : isAnswerSubmitted && isSelected && !opt.isCorrect
                    ? 'bg-red-500 text-white'
                    : 'bg-[#131722] text-amber-400 border border-[#2a2e39]'
                }`}>
                  {opt.id}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {isAnswerSubmitted && (
          <div className="space-y-4 pt-2 animate-fadeIn">
            <div className={`p-4 rounded-xl border ${
              selectedAnswer.isCorrect 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
                : 'bg-red-500/10 border-red-500/40 text-red-300'
            }`}>
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase mb-1">
                {selectedAnswer.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>✓ Institutional Execution Confirmed!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span>⚠️ Retail Execution Trap Detected</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-200">
                {selectedAnswer.feedback}
              </p>

              {/* Memory Trick Banner */}
              {selectedAnswer.memoryTrick && (
                <div className="mt-3 p-3 rounded-lg bg-[#090d16] border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Memory Trick Unlocked:</strong> “{selectedAnswer.memoryTrick}”</span>
                </div>
              )}
            </div>

            <button
              onClick={handleNextScenario}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-dark-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>{currentScenarioIndex < scenarios.length - 1 ? 'Next Backtesting Scenario' : 'Claim Institutional Certificate'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Unlocked Institutional Memory Tricks Vault */}
      {unlockedTricks.length > 0 && (
        <div className="p-4 rounded-xl bg-[#060913] border border-[#2a2e39] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Unlocked Institutional Memory Tricks ({unlockedTricks.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {unlockedTricks.map((trick, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-[#131722] border border-amber-500/30 text-amber-300 text-xs font-mono">
                “{trick}”
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {gameCompleted && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-[#090d16] border-2 border-amber-500 text-center space-y-5 shadow-2xl animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Institutional Market Structure Mastered!
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              You scored <strong className="text-amber-400 font-mono">{score} out of {scenarios.length}</strong> on the Chapter 3 real chart backtesting engine. You have unlocked all core axioms of Market Structure.
            </p>
            <div className="p-4 rounded-xl bg-[#131722] border border-[#2a2e39] space-y-1 text-left text-xs font-mono">
              <span className="text-amber-400 font-bold block">Unlocked Rhymes:</span>
              <ul className="text-slate-300 space-y-1">
                <li>&bull; "Range = no structure, no breaks that count."</li>
                <li>&bull; "CHoCH is the knock, the second break is the door opening."</li>
                <li>&bull; "Wick takes the cash, body breaks the path."</li>
                <li>&bull; "Zone is where to look, not where to click."</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setGameCompleted(false);
                setCurrentScenarioIndex(0);
                setCurrentStep(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setScore(0);
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-black text-xs uppercase tracking-wider transition-all"
            >
              Replay Backtesting Arena
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
