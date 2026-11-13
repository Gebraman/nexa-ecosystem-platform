import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';

export default function BarReplaySimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "Step 01: Three-Candle High Forms",
      time: "14:00 GMT",
      badge: "Formation Stage",
      statusText: "Potential Swing High Candidate",
      explanation: "Candle 2 forms a prominent peak at 1.09200 with higher wicks than its immediate neighbors. At this moment, this is strictly a POTENTIAL swing high. Roman's rule: never mark it until confirmed.",
      redLineActive: false,
      validated: false,
      candles: [
        { id: 1, open: 1.0860, close: 1.0890, high: 1.0900, low: 1.0850, type: 'bull' },
        { id: 2, open: 1.0890, close: 1.0910, high: 1.0920, low: 1.0870, type: 'bull', isSwingCandle: true },
        { id: 3, open: 1.0910, close: 1.0885, high: 1.0915, low: 1.0880, type: 'bear' }
      ]
    },
    {
      title: "Step 02: Draw the Red Line at Swing Low",
      time: "14:15 GMT",
      badge: "Rule Application",
      statusText: "Red Line Active at 1.08700",
      explanation: "Following Roman's definitive rule: draw the horizontal 'Red Line' at the exact LOWEST point (bottom wick) of the swing candle (1.08700). Price must close below this level to confirm.",
      redLineActive: true,
      validated: false,
      candles: [
        { id: 1, open: 1.0860, close: 1.0890, high: 1.0900, low: 1.0850, type: 'bull' },
        { id: 2, open: 1.0890, close: 1.0910, high: 1.0920, low: 1.0870, type: 'bull', isSwingCandle: true },
        { id: 3, open: 1.0910, close: 1.0885, high: 1.0915, low: 1.0880, type: 'bear' }
      ]
    },
    {
      title: "Step 03: The Retail Trap (Wick Spike Without Close)",
      time: "14:30 GMT",
      badge: "False Break Trap",
      statusText: "NO CLOSE = NO SWING",
      explanation: "Candle 4 wicks down and touches 1.08680, but retracts to close at 1.08750 (ABOVE the red line). Beginners mistakenly call this a break. Roman states: a wick touch is not a close! The high remains unconfirmed.",
      redLineActive: true,
      validated: false,
      candles: [
        { id: 1, open: 1.0860, close: 1.0890, high: 1.0900, low: 1.0850, type: 'bull' },
        { id: 2, open: 1.0890, close: 1.0910, high: 1.0920, low: 1.0870, type: 'bull', isSwingCandle: true },
        { id: 3, open: 1.0910, close: 1.0885, high: 1.0915, low: 1.0880, type: 'bear' },
        { id: 4, open: 1.0885, close: 1.0875, high: 1.0895, low: 1.0868, type: 'bear', isWickTest: true }
      ]
    },
    {
      title: "Step 04: Full Candle Body Closes Below",
      time: "14:45 GMT",
      badge: "Validation Moment",
      statusText: "VALIDATED SWING HIGH CONFIRMED",
      explanation: "Candle 5 aggressively sells off and closes its BODY at 1.08550—substantially below the 1.08700 red line! The swing high at 1.09200 is now officially validated as an authentic structural swing.",
      redLineActive: true,
      validated: true,
      candles: [
        { id: 1, open: 1.0860, close: 1.0890, high: 1.0900, low: 1.0850, type: 'bull' },
        { id: 2, open: 1.0890, close: 1.0910, high: 1.0920, low: 1.0870, type: 'bull', isSwingCandle: true },
        { id: 3, open: 1.0910, close: 1.0885, high: 1.0915, low: 1.0880, type: 'bear' },
        { id: 4, open: 1.0885, close: 1.0875, high: 1.0895, low: 1.0868, type: 'bear' },
        { id: 5, open: 1.0875, close: 1.0855, high: 1.0880, low: 1.0850, type: 'bear', isBreakCandle: true }
      ]
    },
    {
      title: "Step 05: Establish Dealing Range & Liquidity Pool",
      time: "15:00 GMT",
      badge: "Execution Ready",
      statusText: "Buy-Side Liquidity (BSL) Established",
      explanation: "Now that the high is validated, mark 1.09200 as Buy-Side Liquidity (BSL). You can now safely apply Fibonacci to find the 50% equilibrium level and look for short setups with full institutional confidence.",
      redLineActive: true,
      validated: true,
      showBsl: true,
      candles: [
        { id: 1, open: 1.0860, close: 1.0890, high: 1.0900, low: 1.0850, type: 'bull' },
        { id: 2, open: 1.0890, close: 1.0910, high: 1.0920, low: 1.0870, type: 'bull', isSwingCandle: true },
        { id: 3, open: 1.0910, close: 1.0885, high: 1.0915, low: 1.0880, type: 'bear' },
        { id: 4, open: 1.0885, close: 1.0875, high: 1.0895, low: 1.0868, type: 'bear' },
        { id: 5, open: 1.0875, close: 1.0855, high: 1.0880, low: 1.0850, type: 'bear' }
      ]
    }
  ];

  const current = steps[currentStep];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full my-6 p-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] space-y-6 shadow-2xl">
      
      {/* Header with Simulator Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2a2e39] pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> TradingView Bar Replay Engine
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Candle-By-Candle Swing Validation Replay
          </h3>
        </div>

        {/* Playback Button Group */}
        <div className="flex items-center gap-2 bg-[#131722] p-1.5 rounded-xl border border-[#2a2e39]">
          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
            className="p-1.5 rounded-lg hover:bg-[#2a2e39] text-slate-400 hover:text-white"
            title="Reset Replay"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(Math.max(0, currentStep - 1)); }}
            disabled={currentStep === 0}
            className="p-1.5 rounded-lg hover:bg-[#2a2e39] text-slate-400 hover:text-white disabled:opacity-30"
            title="Previous Bar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs flex items-center gap-1 transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(Math.min(steps.length - 1, currentStep + 1)); }}
            disabled={currentStep === steps.length - 1}
            className="p-1.5 rounded-lg hover:bg-[#2a2e39] text-slate-400 hover:text-white disabled:opacity-30"
            title="Next Bar"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-slate-400 px-2 font-bold">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      {/* Candlestick Canvas & Status Ribbon */}
      <div className="p-6 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-4">
        
        {/* Real Vector SVG Candlestick Chart */}
        <div className="relative h-64 w-full bg-[#090d16] rounded-xl border border-[#2a2e39] overflow-hidden flex items-center justify-center">
          
          {/* Subtle Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#2a2e39 1px, transparent 1px), linear-gradient(90deg, #2a2e39 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }} 
          />

          <svg viewBox="0 0 500 220" className="w-full h-full">
            {/* Price lines */}
            <line x1="20" y1="40" x2="480" y2="40" stroke="#1f2430" strokeDasharray="3 3" />
            <text x="440" y="36" fill="#64748b" fontSize="9" fontFamily="monospace">1.09200</text>
            
            <line x1="20" y1="120" x2="480" y2="120" stroke="#1f2430" strokeDasharray="3 3" />
            <text x="440" y="116" fill="#64748b" fontSize="9" fontFamily="monospace">1.08700</text>

            <line x1="20" y1="180" x2="480" y2="180" stroke="#1f2430" strokeDasharray="3 3" />
            <text x="440" y="176" fill="#64748b" fontSize="9" fontFamily="monospace">1.08500</text>

            {/* Red Line Overlay */}
            {current.redLineActive && (
              <g>
                <line x1="120" y1="120" x2="480" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray={current.validated ? "none" : "4 4"} />
                <rect x="360" y="108" width="115" height="18" fill="#ef4444" rx="3" />
                <text x="417" y="121" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  RED LINE: 1.08700
                </text>
              </g>
            )}

            {/* BSL Overlay */}
            {current.showBsl && (
              <g>
                <line x1="120" y1="40" x2="480" y2="40" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="360" y="28" width="115" height="18" fill="#f59e0b" rx="3" />
                <text x="417" y="41" fill="#0f172a" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BSL LIQUIDITY POOL
                </text>
              </g>
            )}

            {/* Render Visible Candles */}
            {current.candles.map((c, i) => {
              const xPos = 60 + i * 75;
              const isBull = c.type === 'bull';
              const candleColor = isBull ? '#089981' : '#f23645';

              // Map price to SVG Y coordinates (1.09300 = 20, 1.08400 = 200)
              const priceToY = (p) => 200 - ((p - 1.0840) / 0.0090) * 180;
              const yHigh = priceToY(c.high);
              const yLow = priceToY(c.low);
              const yOpen = priceToY(c.open);
              const yClose = priceToY(c.close);
              const yTop = Math.min(yOpen, yClose);
              const height = Math.max(8, Math.abs(yClose - yOpen));

              return (
                <g key={c.id}>
                  {/* Wick */}
                  <line x1={xPos} y1={yHigh} x2={xPos} y2={yLow} stroke={candleColor} strokeWidth="1.5" />
                  {/* Body */}
                  <rect x={xPos - 12} y={yTop} width="24" height={height} fill={candleColor} rx="1.5" />
                  {/* Annotations */}
                  {c.isSwingCandle && (
                    <circle cx={xPos} cy={yHigh - 6} r="4" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  )}
                  <text x={xPos} y="212" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    C{c.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Step Explanation Card */}
        <div className="p-4 rounded-xl bg-[#090d16] border border-[#2a2e39] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                current.validated 
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {current.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">{current.time}</span>
            </div>
            <h4 className="text-sm font-bold text-white">{current.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">{current.explanation}</p>
          </div>

          <div className="shrink-0 text-right">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">ENGINE STATUS</span>
            <span className={`text-xs font-mono font-bold ${current.validated ? 'text-emerald-400' : 'text-amber-400'}`}>
              {current.statusText}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
