import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, Sparkles, HelpCircle, Check, X, ArrowRight, Eye, RefreshCw } from 'lucide-react';

export const WickVsBodyShowdown = () => {
  const [activeScenario, setActiveScenario] = useState('wick'); // 'wick' | 'body' | 'fake'
  const [quizAnswer, setQuizAnswer] = useState(null);

  const scenarios = {
    wick: {
      title: 'Wick Sweep (Liquidity Purge / Stop Hunt)',
      badge: 'LIQUIDITY ABSORPTION',
      badgeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
      status: 'STRUCTURE UNCHANGED',
      statusColor: 'text-rose-400',
      summary: 'The candle wick pierces past the swing high/low, but the candle BODY closes back inside the previous range.',
      whatYouSee: 'A long needle/tail piercing above a swing high or below a swing low.',
      institutionalAction: 'Institutions triggered resting stop-loss orders and breakout buy stops, accumulated opposing liquidity, and immediately pushed price back into range.',
      retailMistake: 'Retail traders bought the breakout assuming the uptrend continued, only to get trapped and stopped out.',
      verdict: 'NOT A BREAK OF STRUCTURE. This is a pure liquidity grab. Structure remains 100% intact.',
      svgCandle: {
        high: 25,
        low: 155,
        bodyTop: 75,
        bodyHeight: 50,
        isBullish: false,
        breakLineY: 55,
        label: 'Wick pierced swing level (Y=55), but body closed below at Y=75'
      }
    },
    body: {
      title: 'Candle Body Close (Confirmed Break of Structure - BOS)',
      badge: 'TREND CONFIRMATION',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
      status: 'STRUCTURE EXPANDED',
      statusColor: 'text-emerald-400',
      summary: 'The candle BODY closes completely beyond the previous swing high or low at candle close time.',
      whatYouSee: 'A solid candle body closing outside the prior swing boundary on the timeframe you trade.',
      institutionalAction: 'Institutions have accepted new price discovery. They absorbed all available opposing orders and are driving price to the next liquidity pool.',
      retailMistake: 'Failing to wait for the candle to close and mistaking intraday wicks for confirmed trend breakouts.',
      verdict: 'VALID BREAK OF STRUCTURE (BOS). Trend is officially confirmed and continuation setups are valid.',
      svgCandle: {
        high: 25,
        low: 155,
        bodyTop: 35,
        bodyHeight: 75,
        isBullish: true,
        breakLineY: 55,
        label: 'Candle body closed firmly above swing level at Y=35'
      }
    },
    fake: {
      title: 'The Fake Change of Character (Fake CHoCH)',
      badge: 'REVERSAL DECEPTION',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
      status: 'FALSE REVERSAL TRAP',
      statusColor: 'text-amber-400',
      summary: 'Price closes once against the trend, but fails to print a secondary break, and price promptly sweeps the original trend extreme.',
      whatYouSee: 'One candle closes below a swing low in an uptrend, but the very next impulse powers to a brand new higher high.',
      institutionalAction: 'Smart money induced early counter-trend traders to short, generated buy-side liquidity, and then resumed the primary trend.',
      retailMistake: 'Entering aggressively on the first counter-trend close without waiting for the mandatory 2nd confirmation break.',
      verdict: 'FAKE CHoCH. The original trend remains active. Treat the next break as a continuation BOS.',
      svgCandle: {
        high: 20,
        low: 165,
        bodyTop: 50,
        bodyHeight: 60,
        isBullish: true,
        breakLineY: 120,
        label: 'Counter-trend drop was absorbed; primary uptrend quickly restored'
      }
    }
  };

  const curr = scenarios[activeScenario];

  return (
    <div className="my-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#131722] via-[#0e121b] to-[#131722] border-b border-[#2a2e39] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
              Core Institutional Rule • Wick vs Body Showdown
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            The Red Line Standard: Wick Sweep vs Body Breakout
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Why Smart Money never counts wicks as structure breaks, and how retail gets trapped by false breakouts.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex bg-[#0b0e14] p-1 rounded-xl border border-[#2a2e39] self-start sm:self-auto">
          <button
            onClick={() => setActiveScenario('wick')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeScenario === 'wick'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            1. Wick Sweep
          </button>
          <button
            onClick={() => setActiveScenario('body')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeScenario === 'body'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Body Break (BOS)
          </button>
          <button
            onClick={() => setActiveScenario('fake')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeScenario === 'fake'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3. Fake CHoCH
          </button>
        </div>
      </div>

      {/* Main Interactive Body */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Dynamic Scenario Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Interactive SVG Candlestick Visualizer (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0d111a] border border-[#2a2e39] relative">
            <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
              <span>INTERACTIVE CANDLE MECHANICS</span>
              <span className="text-amber-400 font-bold">{activeScenario.toUpperCase()}</span>
            </div>

            {/* SVG Visualizer */}
            <div className="relative w-full h-56 flex items-center justify-center bg-[#070a10] rounded-xl border border-[#1e2330] overflow-hidden">
              <svg viewBox="0 0 320 200" className="w-full h-full select-none">
                <defs>
                  <linearGradient id="bullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="bearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="20" y1="55" x2="300" y2="55" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="25" y="48" fill="#60a5fa" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  SWING HIGH LEVEL (RED/BLUE REFERENCE LINE)
                </text>

                {/* Prior Swing Structure */}
                <path d="M 30 140 L 70 80 L 110 110 L 150 55" fill="none" stroke="#64748b" strokeWidth="2" />
                <circle cx="150" cy="55" r="4" fill="#38bdf8" />
                <text x="135" y="42" fill="#38bdf8" fontSize="8" fontFamily="monospace">Previous High</text>

                {/* The Tested Candle */}
                {/* Wick Line */}
                <line
                  x1="230"
                  y1={curr.svgCandle.high}
                  x2="230"
                  y2={curr.svgCandle.low}
                  stroke={curr.svgCandle.isBullish ? '#34d399' : '#fb7185'}
                  strokeWidth="2.5"
                />

                {/* Candle Body */}
                <rect
                  x="215"
                  y={curr.svgCandle.bodyTop}
                  width="30"
                  height={curr.svgCandle.bodyHeight}
                  rx="3"
                  fill={curr.svgCandle.isBullish ? 'url(#bullGrad)' : 'url(#bearGrad)'}
                  stroke={curr.svgCandle.isBullish ? '#10b981' : '#f43f5e'}
                  strokeWidth="1.5"
                />

                {/* Annotations */}
                {activeScenario === 'wick' && (
                  <g>
                    {/* Wick Sweep Callout */}
                    <path d="M 230 25 L 260 25" stroke="#f43f5e" strokeWidth="1.5" />
                    <text x="245" y="18" fill="#fda4af" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      Wick Sweep ⚡
                    </text>
                    <text x="210" y="185" fill="#f43f5e" fontSize="9" fontFamily="monospace">
                      Body closed inside!
                    </text>
                  </g>
                )}

                {activeScenario === 'body' && (
                  <g>
                    {/* Body Close Callout */}
                    <path d="M 245 45 L 285 45" stroke="#10b981" strokeWidth="1.5" />
                    <text x="245" y="38" fill="#6ee7b7" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      Body Close ✓ (BOS)
                    </text>
                    <text x="180" y="185" fill="#34d399" fontSize="9" fontFamily="monospace">
                      Confirmed Expansion
                    </text>
                  </g>
                )}

                {activeScenario === 'fake' && (
                  <g>
                    <text x="180" y="185" fill="#fbbf24" fontSize="9" fontFamily="monospace">
                      Trap: Trend Resumes Upward
                    </text>
                  </g>
                )}
              </svg>
            </div>

            <p className="mt-3 text-[11px] font-mono text-center text-slate-300">
              {curr.svgCandle.label}
            </p>
          </div>

          {/* Differential Details (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${curr.badgeColor}`}>
                {curr.badge}
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#131722] border border-[#2a2e39] ${curr.statusColor}`}>
                {curr.status}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white">{curr.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {curr.summary}
            </p>

            {/* Side-by-side Human Comparison Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0e131d] border border-cyan-500/20 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> What Price Really Did
                </span>
                <p className="text-xs text-slate-200">
                  {curr.whatYouSee}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e131d] border border-amber-500/20 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Institutional Smart Money
                </span>
                <p className="text-xs text-slate-200">
                  {curr.institutionalAction}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e131d] border border-rose-500/20 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" /> Retail Trader Trap
                </span>
                <p className="text-xs text-slate-200">
                  {curr.retailMistake}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e131d] border border-emerald-500/20 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Actionable Execution Rule
                </span>
                <p className="text-xs text-slate-200 font-semibold">
                  {curr.verdict}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Fast Flash Check / Memory Puzzle */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0d121c] border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Quick Field Check: Test Your Instincts
            </span>
            <span className="text-[10px] font-mono text-slate-400">Institutional Rule Verification</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            <strong>Scenario:</strong> Bitcoin trades up to $68,500. The prior swing high was $68,400. The candle wicks up to $68,520, but the 4-hour candle closes at $68,390. Is this a confirmed Break of Structure (BOS)?
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              onClick={() => setQuizAnswer('wrong')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                quizAnswer === 'wrong'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-slate-600'
              }`}
            >
              A) Yes, because price traded above $68,400
            </button>
            <button
              onClick={() => setQuizAnswer('correct')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                quizAnswer === 'correct'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-emerald-500/50'
              }`}
            >
              B) No, it is a Liquidity Sweep because the body closed below $68,400
            </button>
          </div>

          {quizAnswer === 'correct' && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Correct!</strong> The body closed at $68,390 (inside the range). The structure remains unchanged. Smart Money just hunted retail breakout orders and buy stops, gathering liquidity for a downward reversal.
              </div>
            </div>
          )}

          {quizAnswer === 'wrong' && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-start gap-2">
              <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong>Incorrect.</strong> Remember Roman's Red Line rule: Price trading through a level does NOT make a break. Only a candle <em>body close</em> beyond the line confirms a Break of Structure. Wicks are liquidity grabs!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WickVsBodyShowdown;
