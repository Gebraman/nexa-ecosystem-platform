import React, { useState } from 'react';
import { TrendingUp, TrendingDown, RefreshCcw, Layers, Zap, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';

export const MarketStateShowdown = () => {
  const [activeState, setActiveState] = useState('bullish'); // 'bullish' | 'bearish' | 'range' | 'choch'

  const states = {
    bullish: {
      title: 'State 1: Bullish Trend (Institutional Markup)',
      badge: 'HIGHER HIGHS & HIGHER LOWS',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
      icon: TrendingUp,
      definition: 'Price forms consistent Higher Highs (HH) and Higher Lows (HL). Every break above the previous swing high confirms a Break of Structure (BOS).',
      mechanics: 'Smart money accumulates in discount zones, defenses the Higher Lows, and drives prices to take out buy-side liquidity above swing highs.',
      smartMoneyRule: 'Never look for shorts against structural BOS. Wait for pullbacks into the 50% discount zone of the dealing range before entering longs.',
      retailTrap: 'Retail traders try to call tops at every swing high, selling into institutional markup momentum.',
      svgPoints: 'M 30 150 L 70 100 L 110 120 L 160 70 L 200 90 L 260 40',
      labels: [
        { x: 30, y: 165, text: 'Low' },
        { x: 70, y: 90, text: 'HH 1' },
        { x: 110, y: 135, text: 'HL 1' },
        { x: 160, y: 60, text: 'HH 2 (BOS)' },
        { x: 200, y: 105, text: 'HL 2' },
        { x: 260, y: 30, text: 'HH 3 (BOS)' }
      ]
    },
    bearish: {
      title: 'State 2: Bearish Trend (Institutional Markdown)',
      badge: 'LOWER HIGHS & LOWER LOWS',
      badgeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
      icon: TrendingDown,
      definition: 'Price forms consistent Lower Highs (LH) and Lower Lows (LL). Every candle body close below the prior swing low confirms a bearish Break of Structure (BOS).',
      mechanics: 'Institutions distribute in premium zones and target sell-side liquidity resting below swing lows.',
      smartMoneyRule: 'Focus strictly on sell-side setups. Defend the Lower Highs as invalidation points.',
      retailTrap: 'Retail tries to catch falling knives, buying support levels that institutions use as liquidity exit pools.',
      svgPoints: 'M 30 40 L 80 110 L 120 80 L 170 140 L 210 115 L 270 175',
      labels: [
        { x: 30, y: 30, text: 'High' },
        { x: 80, y: 125, text: 'LL 1' },
        { x: 120, y: 70, text: 'LH 1' },
        { x: 170, y: 155, text: 'LL 2 (BOS)' },
        { x: 210, y: 105, text: 'LH 2' },
        { x: 270, y: 190, text: 'LL 3 (BOS)' }
      ]
    },
    range: {
      title: 'State 3: Sideways Range (The Institutional Liquidity Factory)',
      badge: 'CONSOLIDATION / NO BOS',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
      icon: RefreshCcw,
      definition: 'Price bounces between an established Range High and Range Low without breaking out. There is NO directional structure inside.',
      mechanics: 'Smart money uses ranges to generate liquidity: stops build above the high (BSL) and below the low (SSL). Then they engineer sweeps on both sides.',
      smartMoneyRule: 'Do NOT trade inside the middle chop. Wait for liquidity sweeps of the range boundary or trade edges with defined invalidation.',
      retailTrap: 'Retail traders get chopped to pieces trying to apply trend strategies to a consolidating range.',
      svgPoints: 'M 30 100 L 70 50 L 120 140 L 170 55 L 215 135 L 265 60',
      labels: [
        { x: 70, y: 40, text: 'Range High (BSL)' },
        { x: 120, y: 155, text: 'Range Low (SSL)' },
        { x: 170, y: 45, text: 'Equal Highs' },
        { x: 215, y: 150, text: 'Liquidity Trap' }
      ]
    },
    choch: {
      title: 'Structural Shift: Real CHoCH vs Fake CHoCH',
      badge: 'CRITICAL REVERSAL STANDARD',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
      icon: Zap,
      definition: 'A Change of Character (CHoCH) is the FIRST candle body close against the prevailing trend. It is an alert, NEVER an automatic entry confirmation.',
      mechanics: 'Real CHoCH requires a SECOND break in the new direction. A Fake CHoCH breaks once, then immediately roars back to take out the original trend extreme.',
      smartMoneyRule: 'Wait for the 2-step confirmation sequence: 1) Initial CHoCH breaking the swing holding the trend, 2) Secondary BOS confirming real institutional intent.',
      retailTrap: 'Jumping short the instant a bullish swing low is touched, getting swallowed by a Fake CHoCH continuation.',
      svgPoints: 'M 30 130 L 70 70 L 110 100 L 160 50 L 195 115 L 225 90 L 275 40',
      labels: [
        { x: 70, y: 60, text: 'HH 1' },
        { x: 110, y: 115, text: 'HL (Key)' },
        { x: 160, y: 40, text: 'HH 2' },
        { x: 195, y: 130, text: 'CHoCH?' },
        { x: 275, y: 30, text: 'Fakeout! New High' }
      ]
    }
  };

  const curr = states[activeState];
  const IconComponent = curr.icon;

  return (
    <div className="my-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#131722] via-[#0c1017] to-[#131722] border-b border-[#2a2e39] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
              Institutional Market Architecture Matrix
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            The Three States of the Market & Structural Integrity
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            How institutions read market structure without lagging indicators or retail trendlines.
          </p>
        </div>

        {/* 4 State Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-[#0b0e14] p-1.5 rounded-xl border border-[#2a2e39]">
          <button
            onClick={() => setActiveState('bullish')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeState === 'bullish'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Uptrend
          </button>
          <button
            onClick={() => setActiveState('bearish')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeState === 'bearish'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Downtrend
          </button>
          <button
            onClick={() => setActiveState('range')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeState === 'range'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sideways
          </button>
          <button
            onClick={() => setActiveState('choch')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeState === 'choch'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CHoCH vs Fake
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Vector Schematic SVG (Left 5 Cols) */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39] flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
              <span>STRUCTURAL WAVEFORM</span>
              <span className="text-amber-400 font-bold">{activeState.toUpperCase()}</span>
            </div>

            <div className="relative w-full h-52 bg-[#07090e] rounded-xl border border-[#1b202c] overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full select-none">
                {/* Horizontal reference lines */}
                <line x1="10" y1="50" x2="290" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="10" y1="100" x2="290" y2="100" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="10" y1="150" x2="290" y2="150" stroke="#1e293b" strokeDasharray="3 3" />

                {/* Path line */}
                <path
                  d={curr.svgPoints}
                  fill="none"
                  stroke={
                    activeState === 'bullish'
                      ? '#10b981'
                      : activeState === 'bearish'
                      ? '#f43f5e'
                      : activeState === 'range'
                      ? '#f59e0b'
                      : '#c084fc'
                  }
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Swings / Node Dots */}
                {curr.labels.map((lbl, idx) => (
                  <g key={idx}>
                    <circle
                      cx={lbl.x}
                      cy={
                        activeState === 'bullish'
                          ? [150, 100, 120, 70, 90, 40][idx] || 100
                          : activeState === 'bearish'
                          ? [40, 110, 80, 140, 115, 175][idx] || 100
                          : activeState === 'range'
                          ? [50, 140, 55, 135, 60][idx] || 100
                          : [70, 100, 50, 115, 40][idx] || 100
                      }
                      r="4"
                      fill="#38bdf8"
                      stroke="#0f172a"
                      strokeWidth="1.5"
                    />
                    <text
                      x={lbl.x}
                      y={lbl.y}
                      fill="#e2e8f0"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {lbl.text}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Blue nodes represent validated swing pivot coordinates</span>
            </div>
          </div>

          {/* Details & Rules (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${curr.badgeColor}`}>
                {curr.badge}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <IconComponent className="w-5 h-5 text-amber-400" />
              {curr.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {curr.definition}
            </p>

            {/* Differential Comparison Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0c1017] border border-amber-500/20 space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Institutional Mechanics
                </span>
                <p className="text-xs text-slate-300">
                  {curr.mechanics}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1017] border border-emerald-500/20 space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Smart Money Execution
                </span>
                <p className="text-xs text-slate-300 font-medium">
                  {curr.smartMoneyRule}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1017] border border-rose-500/20 sm:col-span-2 space-y-1">
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Retail Psychological Trap
                </span>
                <p className="text-xs text-slate-300">
                  {curr.retailTrap}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStateShowdown;
