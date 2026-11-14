import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowDownUp, ShieldCheck, Zap, AlertCircle, Compass, Sparkles } from 'lucide-react';

export const InternalVsExternalLiquidityShowdown = () => {
  const [activeCycle, setActiveCycle] = useState('external-to-internal'); // 'external-to-internal' | 'internal-to-external' | 'matrix'

  return (
    <div className="my-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#131722] via-[#0c1017] to-[#131722] border-b border-[#2a2e39] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ArrowDownUp className="w-4 h-4 text-cyan-400" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Algorithmic Price Delivery Mechanics
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Internal Range Liquidity (IRL) vs. External Range Liquidity (ERL)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            The fundamental heartbeat of institutional order flow: price moves from external extremes to internal imbalances.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#0b0e14] p-1.5 rounded-xl border border-[#2a2e39] self-start md:self-auto">
          <button
            onClick={() => setActiveCycle('external-to-internal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeCycle === 'external-to-internal'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            1. External &rarr; Internal
          </button>
          <button
            onClick={() => setActiveCycle('internal-to-external')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeCycle === 'internal-to-external'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Internal &rarr; External
          </button>
          <button
            onClick={() => setActiveCycle('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeCycle === 'matrix'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3. Differential Matrix
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-6">
        {activeCycle !== 'matrix' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Visualizer (Left 5 Cols) */}
            <div className="lg:col-span-5 p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39] flex flex-col items-center">
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
                <span>ORDER FLOW VECTOR</span>
                <span className="text-cyan-400 font-bold">
                  {activeCycle === 'external-to-internal' ? 'EXT &rarr; INT RETRACEMENT' : 'INT &rarr; EXT EXPANSION'}
                </span>
              </div>

              <div className="relative w-full h-56 bg-[#07090e] rounded-xl border border-[#1b202c] overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 320 220" className="w-full h-full select-none">
                  {/* External Boundaries */}
                  <line x1="20" y1="40" x2="300" y2="40" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="25" y="32" fill="#fda4af" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    EXTERNAL BSL (Major Swing High)
                  </text>

                  <line x1="20" y1="180" x2="300" y2="180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="25" y="195" fill="#6ee7b7" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    EXTERNAL SSL (Major Swing Low)
                  </text>

                  {/* Equilibrium 50% line */}
                  <line x1="20" y1="110" x2="300" y2="110" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="25" y="106" fill="#64748b" fontSize="8" fontFamily="monospace">
                    0.50 Equilibrium
                  </text>

                  {/* Internal Fair Value Gap Box */}
                  <rect x="120" y="125" width="80" height="30" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" rx="4" />
                  <text x="130" y="143" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
                    Internal FVG (Discount)
                  </text>

                  {/* Price Path */}
                  {activeCycle === 'external-to-internal' ? (
                    <g>
                      {/* Price sweeps high, then retraces into FVG */}
                      <path d="M 40 140 L 90 70 L 140 35 L 180 80 L 220 140" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="140" cy="35" r="4" fill="#f43f5e" />
                      <text x="145" y="25" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold">External BSL Swept ⚡</text>
                      <circle cx="220" cy="140" r="4" fill="#38bdf8" />
                      <text x="180" y="165" fill="#38bdf8" fontSize="8" fontFamily="monospace">Retraced into Internal FVG</text>
                    </g>
                  ) : (
                    <g>
                      {/* Price mitigates internal FVG, then expands to external BSL */}
                      <path d="M 50 140 L 90 140 L 160 90 L 240 40 L 290 35" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="90" cy="140" r="4" fill="#38bdf8" />
                      <text x="45" y="160" fill="#38bdf8" fontSize="8" fontFamily="monospace">Internal FVG Mitigated ✓</text>
                      <circle cx="290" cy="35" r="4" fill="#10b981" />
                      <text x="190" y="25" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">Expanding to External BSL &rarr;</text>
                    </g>
                  )}
                </svg>
              </div>

              <div className="mt-3 text-[11px] font-mono text-center text-slate-400">
                {activeCycle === 'external-to-internal'
                  ? 'Stage 1: Once major External BSL is taken, price retraces into Internal FVG.'
                  : 'Stage 2: Once Internal FVG is rebalanced, price rallies to target next External BSL.'}
              </div>
            </div>

            {/* Differential Details (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {activeCycle === 'external-to-internal' ? 'CYCLE STAGE 1: THE RETRACEMENT' : 'CYCLE STAGE 2: THE EXPANSION'}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#131722] border border-[#2a2e39] text-amber-400">
                  ALGORITHMIC LAW
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">
                {activeCycle === 'external-to-internal'
                  ? 'External Liquidity Swept: Initiating Internal Retracement'
                  : 'Internal Liquidity Mitigated: Delivering to External Target'}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCycle === 'external-to-internal'
                  ? 'When the market takes out a major high or low (External Range Liquidity), institutions have fulfilled their large-scale distribution or accumulation. Price has zero reason to continue in that direction until liquidity is replenished. Price naturally retraces inside the dealing range to rebalance Fair Value Gaps and order blocks.'
                  : 'Once price taps into a discount Fair Value Gap or order block (Internal Range Liquidity), Smart Money accumulates fresh positions. With fuel replenished, the algorithm drives price with aggressive displacement toward the opposing extreme structural boundary (External BSL/SSL).'}
              </p>

              {/* Practical Guidance Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#0c1017] border border-cyan-500/20 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> Where to Place Targets
                  </span>
                  <p className="text-xs text-slate-300">
                    Always target the opposing **External Liquidity Pool** (the swing high or low) as your final take-profit.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0c1017] border border-emerald-500/20 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Where to Enter Trades
                  </span>
                  <p className="text-xs text-slate-300">
                    Never enter at External highs/lows. Wait for price to pull back to **Internal FVG / Order Blocks** in discount.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-Side Differential Matrix */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0e131e] border border-rose-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                  External Range Liquidity (ERL)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Range Boundaries
                </span>
              </div>
              <h5 className="text-base font-bold text-white">Major Swing Highs & Swing Lows</h5>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Lives at the outer edges of the active trading dealing range.</li>
                <li>Composed of resting stop-loss clusters and breakout orders.</li>
                <li>Acts as the <strong>terminal target</strong> for institutional moves.</li>
                <li>When swept, expect a shift in market structure and a retracement back inward.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e131e] border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Internal Range Liquidity (IRL)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Inside Range
                </span>
              </div>
              <h5 className="text-base font-bold text-white">Fair Value Gaps & Order Blocks</h5>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Lives nested inside the dealing range between high and low.</li>
                <li>Composed of algorithmic price imbalances and institutional accumulation blocks.</li>
                <li>Acts as the <strong>entry zone</strong> for trend continuation.</li>
                <li>When mitigated, expect aggressive expansion toward the opposing external boundary.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternalVsExternalLiquidityShowdown;
