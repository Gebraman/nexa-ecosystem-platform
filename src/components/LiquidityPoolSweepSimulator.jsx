import React, { useState } from 'react';
import { Target, Zap, Play, RotateCcw, AlertOctagon, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export const LiquidityPoolSweepSimulator = () => {
  const [poolType, setPoolType] = useState('eqh'); // 'eqh' | 'eql'
  const [isSwept, setIsSwept] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);

  const handleSweep = () => {
    setIsSwept(true);
  };

  const handleReset = () => {
    setIsSwept(false);
    setQuizAnswer(null);
  };

  return (
    <div className="my-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#131722] via-[#0c1017] to-[#131722] border-b border-[#2a2e39] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-rose-400" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-rose-400 uppercase">
              Section 4 & 5 Interactive Laboratory
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Engineered Liquidity Pool & Turtle Soup Sweep Simulator
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Simulate how institutional algorithms engineer Equal Highs/Lows and execute surgical stop-hunts.
          </p>
        </div>

        {/* Pool Selector & Trigger Button */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex bg-[#0b0e14] p-1 rounded-xl border border-[#2a2e39]">
            <button
              onClick={() => { setPoolType('eqh'); setIsSwept(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                poolType === 'eqh'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Equal Highs (BSL)
            </button>
            <button
              onClick={() => { setPoolType('eql'); setIsSwept(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                poolType === 'eql'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Equal Lows (SSL)
            </button>
          </div>

          <button
            onClick={isSwept ? handleReset : handleSweep}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all shadow-lg ${
              isSwept
                ? 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:text-white'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 border-amber-400 font-extrabold'
            }`}
          >
            {isSwept ? <RotateCcw className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5 fill-dark-950" />}
            <span>{isSwept ? 'Reset Simulator' : 'Trigger Institutional Sweep ⚡'}</span>
          </button>
        </div>
      </div>

      {/* Simulator Canvas */}
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Visual SVG Stage (Left 7 Cols) */}
          <div className="lg:col-span-7 p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39] flex flex-col items-center relative">
            <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
              <span>ORDER BOOK LIQUIDITY DEPTH MAP</span>
              <span className={isSwept ? 'text-amber-400 font-bold animate-pulse' : 'text-slate-400'}>
                {isSwept ? 'STATUS: LIQUIDITY HARVESTED ⚡' : 'STATUS: RESTING ORDERS DETECTED'}
              </span>
            </div>

            <div className="relative w-full h-64 bg-[#07090e] rounded-xl border border-[#1b202c] overflow-hidden flex items-center justify-center select-none">
              <svg viewBox="0 0 400 240" className="w-full h-full">
                {/* Horizontal Level */}
                {poolType === 'eqh' ? (
                  <g>
                    {/* Equal Highs Threshold */}
                    <line x1="30" y1="80" x2="370" y2="80" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="35" y="72" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      EQUAL HIGHS (EQH) • BUY-SIDE LIQUIDITY CEILING
                    </text>

                    {/* Resting Stop Cluster Badges */}
                    <rect x="230" y="45" width="130" height="26" rx="6" fill={isSwept ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.15)'} stroke="#f43f5e" strokeWidth="1" />
                    <text x="240" y="62" fill="#fda4af" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      {isSwept ? '💥 4,820 STOPS PURGED' : '🎯 4,820 RESTING STOPS'}
                    </text>

                    {/* Left Swing 1 */}
                    <path d="M 40 170 L 90 85 L 130 140" fill="none" stroke="#64748b" strokeWidth="2.5" />
                    <circle cx="90" cy="85" r="4" fill="#38bdf8" />
                    <text x="80" y="105" fill="#94a3b8" fontSize="8" fontFamily="monospace">High 1</text>

                    {/* Middle Swing 2 (Equal High) */}
                    <path d="M 130 140 L 190 85 L 230 140" fill="none" stroke="#64748b" strokeWidth="2.5" />
                    <circle cx="190" cy="85" r="4" fill="#38bdf8" />
                    <text x="180" y="105" fill="#94a3b8" fontSize="8" fontFamily="monospace">High 2 (EQH)</text>

                    {/* The 3rd Candle: Sweep or Pre-Sweep */}
                    {!isSwept ? (
                      /* Idle before sweep */
                      <g>
                        <path d="M 230 140 L 270 100" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 3" />
                        <text x="260" y="125" fill="#64748b" fontSize="9" fontFamily="monospace">Approaching...</text>
                      </g>
                    ) : (
                      /* The Surgical Sweep Candle */
                      <g>
                        {/* Upper wick piercing through EQH */}
                        <line x1="290" y1="35" x2="290" y2="160" stroke="#f43f5e" strokeWidth="2.5" />
                        {/* Bearish candle body closing back inside */}
                        <rect x="278" y="95" width="24" height="60" rx="3" fill="#f43f5e" stroke="#e11d48" strokeWidth="1.5" />
                        <circle cx="290" cy="35" r="5" fill="#f59e0b" className="animate-ping" />
                        <text x="305" y="42" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          Wick Sweep ⚡ ($68,850)
                        </text>
                        <text x="250" y="180" fill="#f43f5e" fontSize="9" fontFamily="monospace">
                          Body closed inside! (Turtle Soup)
                        </text>
                      </g>
                    )}
                  </g>
                ) : (
                  /* Equal Lows SSL */
                  <g>
                    {/* Equal Lows Threshold */}
                    <line x1="30" y1="160" x2="370" y2="160" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="35" y="175" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      EQUAL LOWS (EQL) • SELL-SIDE LIQUIDITY FLOOR
                    </text>

                    {/* Resting Stop Cluster Badges */}
                    <rect x="230" y="180" width="130" height="26" rx="6" fill={isSwept ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.15)'} stroke="#10b981" strokeWidth="1" />
                    <text x="240" y="197" fill="#6ee7b7" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      {isSwept ? '💥 6,240 STOPS PURGED' : '🎯 6,240 RESTING STOPS'}
                    </text>

                    {/* Low 1 */}
                    <path d="M 40 70 L 90 155 L 130 100" fill="none" stroke="#64748b" strokeWidth="2.5" />
                    <circle cx="90" cy="155" r="4" fill="#38bdf8" />
                    <text x="80" y="145" fill="#94a3b8" fontSize="8" fontFamily="monospace">Low 1</text>

                    {/* Low 2 (Equal Low) */}
                    <path d="M 130 100 L 190 155 L 230 100" fill="none" stroke="#64748b" strokeWidth="2.5" />
                    <circle cx="190" cy="155" r="4" fill="#38bdf8" />
                    <text x="180" y="145" fill="#94a3b8" fontSize="8" fontFamily="monospace">Low 2 (EQL)</text>

                    {/* Sweep candle */}
                    {!isSwept ? (
                      <g>
                        <path d="M 230 100 L 270 140" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 3" />
                        <text x="260" y="125" fill="#64748b" fontSize="9" fontFamily="monospace">Approaching...</text>
                      </g>
                    ) : (
                      <g>
                        {/* Lower wick piercing through EQL */}
                        <line x1="290" y1="80" x2="290" y2="205" stroke="#10b981" strokeWidth="2.5" />
                        {/* Bullish candle body closing inside */}
                        <rect x="278" y="85" width="24" height="60" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1.5" />
                        <circle cx="290" cy="205" r="5" fill="#f59e0b" className="animate-ping" />
                        <text x="250" y="225" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          Wick Sweep ⚡ (SSL Harvested)
                        </text>
                      </g>
                    )}
                  </g>
                )}
              </svg>
            </div>

            <div className="mt-3 text-[11px] font-mono text-center text-slate-400">
              {isSwept
                ? 'Liquidity Purge Complete: Smart Money filled institutional positions using resting stop-market orders.'
                : 'Click "Trigger Institutional Sweep ⚡" above to watch the algorithmic stop run in real-time.'}
            </div>
          </div>

          {/* Institutional Execution Receipt (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#0c1017] border border-[#2a2e39] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Algorithmic Execution Audit
                </span>
                <span className="text-[10px] font-mono text-slate-500">Live Simulation</span>
              </div>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-[#131722] border border-[#2a2e39]">
                  <span className="text-slate-400">Target Pool:</span>
                  <span className="text-white font-bold">{poolType === 'eqh' ? 'Buy-Side Liquidity (EQH)' : 'Sell-Side Liquidity (EQL)'}</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#131722] border border-[#2a2e39]">
                  <span className="text-slate-400">Resting Orders:</span>
                  <span className="text-amber-300 font-bold">{poolType === 'eqh' ? '4,820 Buy Stops ($28.5M)' : '6,240 Sell Stops ($34.2M)'}</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#131722] border border-[#2a2e39]">
                  <span className="text-slate-400">Sweep Status:</span>
                  <span className={isSwept ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {isSwept ? 'PURGED & FILLED ✓' : 'AWAITING TRIGGER'}
                  </span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-[#131722] border border-[#2a2e39]">
                  <span className="text-slate-400">Institutional Bias:</span>
                  <span className="text-cyan-300 font-bold">{poolType === 'eqh' ? 'Distribute Short at Peak' : 'Accumulate Long at Bottom'}</span>
                </div>
              </div>

              {isSwept && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono space-y-1 animate-fade-in">
                  <div className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>TURTLE SOUP VERIFIED:</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Retail breakout traders were trapped. Protective stop-losses were matched against institutional size. Next high-probability target: opposing dealing range boundary.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Field Check */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0d121c] border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Quick Field Check: Identify the Trap
            </span>
            <span className="text-[10px] font-mono text-slate-400">Institutional Mechanics</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            <strong>Question:</strong> Why do institutions intentionally allow price to test Equal Highs multiple times before breaking through?
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
              A) Because the resistance is naturally too strong for them to break
            </button>
            <button
              onClick={() => setQuizAnswer('correct')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                quizAnswer === 'correct'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-emerald-500/50'
              }`}
            >
              B) To induce retail traders to cluster thousands of stop-losses above the level, creating a dense liquidity pool
            </button>
          </div>

          {quizAnswer === 'correct' && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Correct!</strong> Clean double and triple tops are liquidity factories. The more times retail sees resistance holding, the more stops accumulate above it for institutions to harvest.
              </div>
            </div>
          )}

          {quizAnswer === 'wrong' && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-start gap-2">
              <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong>Incorrect.</strong> Institutional algorithms can easily pierce any retail resistance level. They deliberately leave equal highs intact to entice retail traders into placing predictable stop orders.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiquidityPoolSweepSimulator;
