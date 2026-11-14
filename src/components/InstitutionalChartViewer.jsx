import React, { useState } from 'react';
import { Layers, Eye, Maximize2, Sparkles, TrendingUp, TrendingDown, Target, ShieldCheck } from 'lucide-react';

export default function InstitutionalChartViewer({ 
  type = 'fvg', // 'fvg', 'topdown', 'structure', 'trio', 'redline', 'sweep-break', 'range', 'extreme'
  title = 'Institutional Price Action Model',
  subtitle = 'High-Precision TradingView Vector Schematic',
  data = {}
}) {
  const [activeOverlay, setActiveOverlay] = useState('all'); // 'all', 'poi', 'liquidity', 'clean'
  const [hoveredCandle, setHoveredCandle] = useState(null);

  return (
    <div className="w-full my-6 rounded-2xl bg-[#0d1117] border border-[#2a2e39] overflow-hidden shadow-2xl transition-all">
      
      {/* Top Chart Toolbar */}
      <div className="px-4 py-2.5 bg-[#161b22] border-b border-[#2a2e39] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-semibold ml-2">TRADINGVIEW VECTOR TERMINAL</span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-bold">{title}</span>
        </div>

        {/* Overlay toggles */}
        <div className="flex items-center gap-1 bg-[#0d1117] rounded-lg p-0.5 border border-[#2a2e39]">
          <button
            onClick={() => setActiveOverlay('all')}
            className={`px-2 py-1 rounded text-[11px] transition-colors ${activeOverlay === 'all' ? 'bg-[#2a2e39] text-amber-300 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            All Layers
          </button>
          <button
            onClick={() => setActiveOverlay('poi')}
            className={`px-2 py-1 rounded text-[11px] transition-colors ${activeOverlay === 'poi' ? 'bg-[#2a2e39] text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            POIs Only
          </button>
          <button
            onClick={() => setActiveOverlay('liquidity')}
            className={`px-2 py-1 rounded text-[11px] transition-colors ${activeOverlay === 'liquidity' ? 'bg-[#2a2e39] text-purple-300 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Liquidity
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="p-4 sm:p-6 bg-[#090d16] relative min-h-[300px] flex items-center justify-center select-none overflow-x-auto">
        
        {/* Subtle Chart Grid Background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#2a2e39 1px, transparent 1px), linear-gradient(90deg, #2a2e39 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* 1. FAIR VALUE GAP (FVG) SCHEMATIC */}
        {type === 'fvg' && (
          <div className="w-full max-w-xl py-4 space-y-4 relative z-10">
            <svg viewBox="0 0 600 280" className="w-full h-auto drop-shadow-lg">
              {/* Price Scale Gridlines */}
              <line x1="40" y1="50" x2="560" y2="50" stroke="#1f2430" strokeDasharray="3 3" />
              <line x1="40" y1="120" x2="560" y2="120" stroke="#1f2430" strokeDasharray="3 3" />
              <line x1="40" y1="190" x2="560" y2="190" stroke="#1f2430" strokeDasharray="3 3" />

              {/* FVG Imbalance Zone Box */}
              {(activeOverlay === 'all' || activeOverlay === 'poi') && (
                <g>
                  <rect x="220" y="80" width="300" height="90" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" rx="4" />
                  <line x1="220" y1="125" x2="520" y2="125" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="370" y="120" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    50% CE (Consequent Encroachment)
                  </text>
                  <text x="525" y="130" fill="#f59e0b" fontSize="10" fontFamily="monospace">1.08500</text>
                </g>
              )}

              {/* Candle 1 (Down candle) */}
              <g>
                <line x1="120" y1="40" x2="120" y2="110" stroke="#f23645" strokeWidth="2" />
                <rect x="105" y="55" width="30" height="45" fill="#f23645" rx="2" />
                <line x1="90" y1="80" x2="150" y2="80" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="120" y="128" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">Candle 1</text>
                <text x="60" y="83" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">Low of C1</text>
              </g>

              {/* Candle 2 (Large Displacement Candle) */}
              <g>
                <line x1="220" y1="70" x2="220" y2="250" stroke="#f23645" strokeWidth="2" />
                <rect x="205" y="85" width="30" height="150" fill="#f23645" rx="2" />
                <text x="220" y="265" fill="#f23645" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  Candle 2 (Impulse)
                </text>
              </g>

              {/* Candle 3 (Down candle) */}
              <g>
                <line x1="320" y1="160" x2="320" y2="240" stroke="#f23645" strokeWidth="2" />
                <rect x="305" y="180" width="30" height="50" fill="#f23645" rx="2" />
                <line x1="290" y1="170" x2="350" y2="170" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="320" y="255" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">Candle 3</text>
                <text x="375" y="174" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">High of C3</text>
              </g>

              {/* Price return arrow */}
              <path d="M 380 220 Q 420 125 450 125" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="455,125 447,120 447,130" fill="#38bdf8" />
              <text x="440" y="105" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Retest & Rebalance
              </text>
            </svg>
          </div>
        )}

        {/* 2. TOP-DOWN 5-STEP METHOD */}
        {type === 'topdown' && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 700 220" className="w-full h-auto">
              {/* Daily Macro Box */}
              <rect x="20" y="30" width="180" height="150" fill="#131722" stroke="#3b82f6" strokeWidth="1.5" rx="10" />
              <text x="110" y="55" fill="#60a5fa" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STEP 1 & 2: DAILY (HTF)</text>
              <text x="110" y="85" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">Establish Bias & POI</text>
              <text x="110" y="110" fill="#94a3b8" fontSize="10" textAnchor="middle">• Bearish Structure (LH/LL)</text>
              <text x="110" y="130" fill="#94a3b8" fontSize="10" textAnchor="middle">• Mark Daily FVG / OB</text>
              <text x="110" y="155" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WAIT FOR PRICE</text>

              {/* Arrow */}
              <line x1="205" y1="105" x2="245" y2="105" stroke="#64748b" strokeWidth="2" />
              <polygon points="250,105 240,100 240,110" fill="#64748b" />

              {/* 4H Shift Box */}
              <rect x="255" y="30" width="180" height="150" fill="#131722" stroke="#f59e0b" strokeWidth="1.5" rx="10" />
              <text x="345" y="55" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STEP 3 & 4: 4-HOUR</text>
              <text x="345" y="85" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">Intermediate Shift</text>
              <text x="345" y="110" fill="#94a3b8" fontSize="10" textAnchor="middle">• Price enters Daily POI</text>
              <text x="345" y="130" fill="#94a3b8" fontSize="10" textAnchor="middle">• Liquidity sweep of high</text>
              <text x="345" y="155" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CONFIRM 4H SHIFT</text>

              {/* Arrow */}
              <line x1="440" y1="105" x2="480" y2="105" stroke="#64748b" strokeWidth="2" />
              <polygon points="485,105 475,100 475,110" fill="#64748b" />

              {/* 15M Execution Box */}
              <rect x="490" y="30" width="190" height="150" fill="#131722" stroke="#10b981" strokeWidth="1.5" rx="10" />
              <text x="585" y="55" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STEP 5: 15-MINUTE (LTF)</text>
              <text x="585" y="85" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">Optimal Execution</text>
              <text x="585" y="110" fill="#94a3b8" fontSize="10" textAnchor="middle">• Sweep + Body Close BOS</text>
              <text x="585" y="130" fill="#94a3b8" fontSize="10" textAnchor="middle">• Tight stop above sweep</text>
              <text x="585" y="155" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">1:5+ RR HIGH YIELD</text>
            </svg>
          </div>
        )}

        {/* 3. THREE-CANDLE SWING ANATOMY */}
        {type === 'trio' && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 700 240" className="w-full h-auto">
              {/* Pattern A: Swing High YES */}
              <g transform="translate(40, 30)">
                <rect x="0" y="0" width="130" height="180" fill="#131722" stroke="#10b981" strokeWidth="1.5" rx="8" />
                <text x="65" y="24" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">A) SWING HIGH: YES</text>
                {/* Candle 1 */}
                <line x1="35" y1="80" x2="35" y2="140" stroke="#64748b" strokeWidth="1.5" />
                <rect x="25" y="95" width="20" height="35" fill="#64748b" rx="1" />
                {/* Candle 2 (Extreme high) */}
                <line x1="65" y1="45" x2="65" y2="135" stroke="#10b981" strokeWidth="1.5" />
                <rect x="55" y="65" width="20" height="55" fill="#10b981" rx="1" />
                {/* Candle 3 */}
                <line x1="95" y1="75" x2="95" y2="145" stroke="#64748b" strokeWidth="1.5" />
                <rect x="85" y="90" width="20" height="40" fill="#64748b" rx="1" />
                <line x1="15" y1="45" x2="115" y2="45" stroke="#34d399" strokeDasharray="2 2" />
                <text x="65" y="165" fill="#94a3b8" fontSize="9" textAnchor="middle">Center wick highest</text>
              </g>

              {/* Pattern B: Swing Low YES */}
              <g transform="translate(200, 30)">
                <rect x="0" y="0" width="130" height="180" fill="#131722" stroke="#10b981" strokeWidth="1.5" rx="8" />
                <text x="65" y="24" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">B) SWING LOW: YES</text>
                {/* Candle 1 */}
                <line x1="35" y1="60" x2="35" y2="120" stroke="#64748b" strokeWidth="1.5" />
                <rect x="25" y="70" width="20" height="35" fill="#64748b" rx="1" />
                {/* Candle 2 (Extreme low) */}
                <line x1="65" y1="65" x2="65" y2="155" stroke="#10b981" strokeWidth="1.5" />
                <rect x="55" y="80" width="20" height="55" fill="#10b981" rx="1" />
                {/* Candle 3 */}
                <line x1="95" y1="55" x2="95" y2="125" stroke="#64748b" strokeWidth="1.5" />
                <rect x="85" y="70" width="20" height="40" fill="#64748b" rx="1" />
                <line x1="15" y1="155" x2="115" y2="155" stroke="#34d399" strokeDasharray="2 2" />
                <text x="65" y="165" fill="#94a3b8" fontSize="9" textAnchor="middle">Center wick lowest</text>
              </g>

              {/* Pattern C: Swing High NO (Rising) */}
              <g transform="translate(360, 30)">
                <rect x="0" y="0" width="130" height="180" fill="#131722" stroke="#f23645" strokeWidth="1" rx="8" />
                <text x="65" y="24" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">C) SWING HIGH: NO</text>
                <line x1="35" y1="110" x2="35" y2="160" stroke="#64748b" strokeWidth="1.5" />
                <rect x="25" y="120" width="20" height="30" fill="#64748b" rx="1" />
                <line x1="65" y1="80" x2="65" y2="140" stroke="#64748b" strokeWidth="1.5" />
                <rect x="55" y="90" width="20" height="35" fill="#64748b" rx="1" />
                <line x1="95" y1="50" x2="95" y2="110" stroke="#f23645" strokeWidth="1.5" />
                <rect x="85" y="60" width="20" height="35" fill="#f23645" rx="1" />
                <text x="65" y="165" fill="#f87171" fontSize="9" textAnchor="middle">Price still rising (wait)</text>
              </g>

              {/* Pattern D: Swing High NO (Middle not highest) */}
              <g transform="translate(520, 30)">
                <rect x="0" y="0" width="130" height="180" fill="#131722" stroke="#f23645" strokeWidth="1" rx="8" />
                <text x="65" y="24" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">D) SWING HIGH: NO</text>
                <line x1="35" y1="80" x2="35" y2="140" stroke="#64748b" strokeWidth="1.5" />
                <rect x="25" y="95" width="20" height="35" fill="#64748b" rx="1" />
                <line x1="65" y1="70" x2="65" y2="135" stroke="#64748b" strokeWidth="1.5" />
                <rect x="55" y="85" width="20" height="35" fill="#64748b" rx="1" />
                <line x1="95" y1="55" x2="95" y2="120" stroke="#f23645" strokeWidth="1.5" />
                <rect x="85" y="65" width="20" height="40" fill="#f23645" rx="1" />
                <text x="65" y="165" fill="#f87171" fontSize="9" textAnchor="middle">Right candle higher</text>
              </g>
            </svg>
          </div>
        )}

        {/* 4. THE RED LINE RULE */}
        {type === 'redline' && (
          <div className="w-full max-w-xl py-4 relative z-10">
            <svg viewBox="0 0 600 240" className="w-full h-auto">
              {/* Left: Potential Only */}
              <g transform="translate(30, 20)">
                <rect x="0" y="0" width="250" height="200" fill="#131722" stroke="#f59e0b" strokeWidth="1.5" rx="8" />
                <text x="125" y="30" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  POTENTIAL ONLY (No Close Yet)
                </text>
                {/* Swing Candle */}
                <line x1="90" y1="50" x2="90" y2="140" stroke="#10b981" strokeWidth="2" />
                <rect x="75" y="65" width="30" height="60" fill="#10b981" rx="2" />
                {/* Red Line drawn at lowest point of swing candle */}
                <line x1="30" y1="140" x2="220" y2="140" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                <text x="175" y="132" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="bold">RED LINE (Low)</text>
                {/* Subsequent candles failing to close below */}
                <line x1="140" y1="75" x2="140" y2="135" stroke="#64748b" strokeWidth="1.5" />
                <rect x="130" y="85" width="20" height="40" fill="#64748b" rx="1" />
                <line x1="180" y1="65" x2="180" y2="125" stroke="#64748b" strokeWidth="1.5" />
                <rect x="170" y="75" width="20" height="40" fill="#64748b" rx="1" />
                <text x="125" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">Price still trades above red line.</text>
                <text x="125" y="190" fill="#f59e0b" fontSize="9" fontFamily="monospace" textAnchor="middle">STATUS: Awaiting Validation</text>
              </g>

              {/* Right: Validated Swing High */}
              <g transform="translate(320, 20)">
                <rect x="0" y="0" width="250" height="200" fill="#131722" stroke="#10b981" strokeWidth="1.5" rx="8" />
                <text x="125" y="30" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  VALIDATED SWING HIGH (Confirmed)
                </text>
                {/* Swing Candle */}
                <line x1="80" y1="50" x2="80" y2="135" stroke="#10b981" strokeWidth="2" />
                <rect x="65" y="65" width="30" height="55" fill="#10b981" rx="2" />
                <circle cx="80" cy="50" r="4" fill="none" stroke="#fbbf24" strokeWidth="2" />
                {/* Red Line */}
                <line x1="30" y1="135" x2="220" y2="135" stroke="#ef4444" strokeWidth="2" />
                {/* Candle Closing Below */}
                <line x1="140" y1="110" x2="140" y2="175" stroke="#f23645" strokeWidth="2" />
                <rect x="125" y="125" width="30" height="40" fill="#f23645" rx="2" />
                <polygon points="175,150 160,145 160,155" fill="#34d399" />
                <text x="180" y="153" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">BODY CLOSES BELOW</text>
                <text x="125" y="190" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">STATUS: Validated Structure</text>
              </g>
            </svg>
          </div>
        )}

        {/* 5. WICK SWEEP VS BODY CLOSE BOS */}
        {(type === 'sweep-break' || type === 'fig-ch3-6') && (
          <div className="w-full max-w-xl py-4 relative z-10">
            <svg viewBox="0 0 600 240" className="w-full h-auto">
              {/* Left: Sweep */}
              <g transform="translate(30, 20)">
                <rect x="0" y="0" width="250" height="200" fill="#131722" stroke="#a855f7" strokeWidth="1.5" rx="8" />
                <text x="125" y="30" fill="#c084fc" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  LIQUIDITY SWEEP (Raid)
                </text>
                <line x1="20" y1="90" x2="230" y2="90" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="190" y="82" fill="#fbbf24" fontSize="9" fontFamily="monospace">Old Swing High</text>
                {/* Candlestick with wick spike */}
                <line x1="125" y1="50" x2="125" y2="160" stroke="#a855f7" strokeWidth="2" />
                <rect x="110" y="95" width="30" height="55" fill="#a855f7" rx="2" />
                <text x="125" y="42" fill="#c084fc" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WICK CROSSES</text>
                <text x="125" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">Body closes BELOW line.</text>
                <text x="125" y="190" fill="#c084fc" fontSize="9" fontFamily="monospace" textAnchor="middle">RESULT: Stop Hunt Reversal</text>
              </g>

              {/* Right: Break of Structure */}
              <g transform="translate(320, 20)">
                <rect x="0" y="0" width="250" height="200" fill="#131722" stroke="#06b6d4" strokeWidth="1.5" rx="8" />
                <text x="125" y="30" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BREAK OF STRUCTURE (BOS)
                </text>
                <line x1="20" y1="120" x2="230" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="190" y="112" fill="#fbbf24" fontSize="9" fontFamily="monospace">Old Swing High</text>
                {/* Candlestick closing above */}
                <line x1="125" y1="45" x2="125" y2="155" stroke="#06b6d4" strokeWidth="2" />
                <rect x="110" y="60" width="30" height="80" fill="#06b6d4" rx="2" />
                <text x="125" y="42" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BODY CLOSES ABOVE</text>
                <text x="125" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">Candle body expands beyond.</text>
                <text x="125" y="190" fill="#22d3ee" fontSize="9" fontFamily="monospace" textAnchor="middle">RESULT: Trend Continuation</text>
              </g>
            </svg>
          </div>
        )}

        {/* 6. FIGURE 2: BULLISH VS BEARISH BREAK OF STRUCTURE (BOS) */}
        {(type === 'bos-states' || type === 'fig-ch3-2') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 250" className="w-full h-auto">
              {/* Bullish Structure */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="300" height="230" fill="#131722" stroke="#10b981" strokeWidth="1.2" rx="8" />
                <text x="150" y="25" fill="#34d399" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BULLISH STRUCTURE (HH / HL)
                </text>
                <path d="M 30 180 L 80 120 L 130 150 L 190 70 L 230 110 L 280 40" fill="none" stroke="#10b981" strokeWidth="3" />
                {/* Swing Points */}
                <circle cx="30" cy="180" r="4" fill="#10b981" />
                <circle cx="80" cy="120" r="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                <circle cx="130" cy="150" r="4" fill="#10b981" />
                <circle cx="190" cy="70" r="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                <circle cx="230" cy="110" r="4" fill="#10b981" />
                <circle cx="280" cy="40" r="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                {/* BOS lines */}
                <line x1="80" y1="120" x2="160" y2="120" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="135" y="114" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">BOS</text>
                <line x1="190" y1="70" x2="260" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="240" y="64" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">BOS</text>
                <text x="150" y="215" fill="#94a3b8" fontSize="9" textAnchor="middle">Higher Highs + Higher Lows &bull; Close confirms</text>
              </g>

              {/* Bearish Structure */}
              <g transform="translate(340, 10)">
                <rect x="0" y="0" width="300" height="230" fill="#131722" stroke="#ef4444" strokeWidth="1.2" rx="8" />
                <text x="150" y="25" fill="#f87171" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BEARISH STRUCTURE (LH / LL)
                </text>
                <path d="M 30 40 L 80 110 L 120 70 L 180 150 L 220 120 L 280 190" fill="none" stroke="#ef4444" strokeWidth="3" />
                {/* Swing Points */}
                <circle cx="30" cy="40" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
                <circle cx="80" cy="110" r="4" fill="#ef4444" />
                <circle cx="120" cy="70" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
                <circle cx="180" cy="150" r="4" fill="#ef4444" />
                <circle cx="220" cy="120" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
                <circle cx="280" cy="190" r="4" fill="#ef4444" />
                {/* BOS lines */}
                <line x1="80" y1="110" x2="160" y2="110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="135" y="104" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">BOS</text>
                <line x1="180" y1="150" x2="260" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="240" y="144" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">BOS</text>
                <text x="150" y="215" fill="#94a3b8" fontSize="9" textAnchor="middle">Lower Highs + Lower Lows &bull; Close confirms</text>
              </g>
            </svg>
          </div>
        )}

        {/* 7. FIGURE 3: THE RANGE - WRONG VS RIGHT */}
        {(type === 'range-box' || type === 'fig-ch3-3') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 240" className="w-full h-auto">
              {/* Left: Wrong */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="300" height="220" fill="#131722" stroke="#ef4444" strokeWidth="1" rx="8" />
                <text x="150" y="25" fill="#f87171" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  WRONG: Marking Every Internal Swing
                </text>
                <path d="M 25 150 L 60 70 L 100 160 L 140 70 L 180 160 L 220 70 L 260 140" fill="none" stroke="#64748b" strokeWidth="2" />
                <text x="100" y="115" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">BOS? CHoCH?</text>
                <text x="180" y="115" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">Noise Trap!</text>
                <text x="150" y="200" fill="#94a3b8" fontSize="9" textAnchor="middle">Beginner's Trap: Searching for structure inside noise</text>
              </g>

              {/* Right: Right */}
              <g transform="translate(340, 10)">
                <rect x="0" y="0" width="300" height="220" fill="#131722" stroke="#10b981" strokeWidth="1" rx="8" />
                <text x="150" y="25" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  RIGHT: Draw a Box & Wait for Breakout
                </text>
                {/* Range box */}
                <rect x="25" y="55" width="200" height="110" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
                <path d="M 15 150 L 40 70 L 80 155 L 120 70 L 160 155 L 200 90 L 240 50 L 280 20" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <text x="125" y="115" fill="#fbbf24" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RANGE (NO STRUCTURE)</text>
                <text x="260" y="40" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">CLEAN BREAK OUT</text>
                <text x="150" y="200" fill="#94a3b8" fontSize="9" textAnchor="middle">Dismiss internal wiggles. Trade only true boundary breaks.</text>
              </g>
            </svg>
          </div>
        )}

        {/* 8. FIGURE 4: CHANGE OF CHARACTER (CHoCH) TWO-BEAT RULE */}
        {(type === 'choch' || type === 'fig-ch3-4') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 250" className="w-full h-auto">
              <rect x="10" y="10" width="630" height="230" fill="#131722" stroke="#f59e0b" strokeWidth="1.2" rx="8" />
              <text x="325" y="32" fill="#fbbf24" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                CHANGE OF CHARACTER (CHoCH): THE TWO-BEAT REVERSAL
              </text>
              
              {/* Trend path */}
              <path d="M 40 180 L 110 110 L 170 145 L 250 65 L 320 145 L 390 185 L 460 130 L 540 210" fill="none" stroke="#38bdf8" strokeWidth="3" />
              
              {/* Bullish BOS 1 & 2 */}
              <circle cx="110" cy="110" r="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
              <line x1="110" y1="110" x2="210" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="180" y="104" fill="#94a3b8" fontSize="9" fontFamily="monospace">BOS (Bull)</text>
              
              {/* Higher Low being broken */}
              <circle cx="170" cy="145" r="5" fill="#f59e0b" />
              <line x1="170" y1="145" x2="360" y2="145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
              <text x="210" y="160" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">Higher Low (Holding Trend)</text>
              
              {/* Beat 1: CHoCH */}
              <circle cx="390" cy="185" r="5" fill="#ef4444" />
              <rect x="330" y="165" width="130" height="40" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" rx="4" />
              <text x="395" y="180" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BEAT 1: CHoCH</text>
              <text x="395" y="195" fill="#fca5a5" fontSize="8" textAnchor="middle">First close below HL (Warning)</text>
              
              {/* Beat 2: Confirming BOS */}
              <circle cx="540" cy="210" r="5" fill="#ef4444" />
              <line x1="390" y1="185" x2="510" y2="185" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="475" y="170" width="140" height="40" fill="#10b981" fillOpacity="0.15" stroke="#10b981" rx="4" />
              <text x="545" y="185" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BEAT 2: BOS CONFIRMS</text>
              <text x="545" y="200" fill="#6ee7b7" fontSize="8" textAnchor="middle">Confirmed Bearish Trend</text>
            </svg>
          </div>
        )}

        {/* 9. FIGURE 5: FAKE CHANGE OF CHARACTER */}
        {(type === 'fake-choch' || type === 'fig-ch3-5') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 240" className="w-full h-auto">
              <rect x="10" y="10" width="630" height="220" fill="#131722" stroke="#38bdf8" strokeWidth="1.2" rx="8" />
              <text x="325" y="30" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                FAKE CHANGE OF CHARACTER (OLD TREND INTACT)
              </text>
              {/* Uptrend path */}
              <path d="M 40 180 L 110 120 L 160 150 L 240 80 L 300 150 L 350 185 L 430 50 L 520 20" fill="none" stroke="#38bdf8" strokeWidth="3" />
              
              {/* Old Swing High line */}
              <line x1="240" y1="80" x2="480" y2="80" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="280" y="74" fill="#fbbf24" fontSize="9" fontFamily="monospace">Old Swing High Level</text>
              
              {/* Higher Low line */}
              <line x1="300" y1="150" x2="380" y2="150" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Fakeout dip */}
              <rect x="310" y="155" width="85" height="40" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" rx="4" />
              <text x="352" y="172" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FAKE CHoCH</text>
              <text x="352" y="186" fill="#fca5a5" fontSize="8" textAnchor="middle">Failed follow-through</text>
              
              {/* Normal BOS */}
              <rect x="420" y="60" width="130" height="40" fill="#10b981" fillOpacity="0.15" stroke="#10b981" rx="4" />
              <text x="485" y="76" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">NORMAL BOS (UP)</text>
              <text x="485" y="92" fill="#6ee7b7" fontSize="8" textAnchor="middle">Old trend alive &bull; Trade it!</text>
              <text x="325" y="218" fill="#94a3b8" fontSize="9" textAnchor="middle">Marking the break as fake buys you time: the upward expansion is simply trend continuation.</text>
            </svg>
          </div>
        )}

        {/* 10. FIGURE 7: PREMIUM / DISCOUNT & OPTIMAL TRADE ENTRY (OTE) */}
        {(type === 'ote-premium' || type === 'fig-ch3-7') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 250" className="w-full h-auto">
              {/* Bullish Case */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="300" height="230" fill="#131722" stroke="#10b981" strokeWidth="1" rx="8" />
                <text x="150" y="24" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  UPTREND: BUY IN DISCOUNT
                </text>
                
                {/* 100% High line */}
                <line x1="20" y1="45" x2="280" y2="45" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                <text x="250" y="40" fill="#64748b" fontSize="8" fontFamily="monospace">100% High</text>

                {/* Premium Area */}
                <rect x="20" y="45" width="260" height="45" fill="#ef4444" fillOpacity="0.08" />
                <text x="40" y="65" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">PREMIUM (Expensive)</text>

                {/* 0.5 Equilibrium */}
                <line x1="20" y1="90" x2="280" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="250" y="86" fill="#fbbf24" fontSize="8" fontFamily="monospace">0.5 EQ</text>

                {/* Discount Area */}
                <rect x="20" y="90" width="260" height="90" fill="#10b981" fillOpacity="0.08" />
                <text x="40" y="165" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">DISCOUNT (Cheap)</text>

                {/* OTE Shaded Band (0.62 - 0.79) */}
                <rect x="20" y="115" width="260" height="35" fill="#10b981" fillOpacity="0.22" stroke="#10b981" strokeWidth="1" rx="3" />
                <text x="150" y="136" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  OPTIMAL TRADE ENTRY (0.62–0.79)
                </text>

                {/* 0% Low line */}
                <line x1="20" y1="180" x2="280" y2="180" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                <text x="250" y="176" fill="#64748b" fontSize="8" fontFamily="monospace">0% Low</text>

                {/* Price path */}
                <path d="M 40 180 L 120 45 L 180 130 L 250 30" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="180" cy="130" r="4" fill="#34d399" />
                <text x="150" y="215" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Price pulls into OTE discount, then resumes markup</text>
              </g>

              {/* Bearish Case */}
              <g transform="translate(340, 10)">
                <rect x="0" y="0" width="300" height="230" fill="#131722" stroke="#ef4444" strokeWidth="1" rx="8" />
                <text x="150" y="24" fill="#f87171" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  DOWNTREND: SELL IN PREMIUM
                </text>
                
                {/* 100% High line */}
                <line x1="20" y1="45" x2="280" y2="45" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                <text x="250" y="40" fill="#64748b" fontSize="8" fontFamily="monospace">100% High</text>

                {/* Premium Area with OTE */}
                <rect x="20" y="45" width="260" height="90" fill="#ef4444" fillOpacity="0.08" />
                <text x="40" y="60" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">PREMIUM (Expensive)</text>

                {/* OTE Shaded Band (0.62 - 0.79) */}
                <rect x="20" y="75" width="260" height="35" fill="#ef4444" fillOpacity="0.22" stroke="#ef4444" strokeWidth="1" rx="3" />
                <text x="150" y="96" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  OPTIMAL TRADE ENTRY (0.62–0.79)
                </text>

                {/* 0.5 Equilibrium */}
                <line x1="20" y1="135" x2="280" y2="135" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="250" y="131" fill="#fbbf24" fontSize="8" fontFamily="monospace">0.5 EQ</text>

                {/* Discount Area */}
                <rect x="20" y="135" width="260" height="45" fill="#10b981" fillOpacity="0.08" />
                <text x="40" y="165" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">DISCOUNT (Cheap)</text>

                {/* 0% Low line */}
                <line x1="20" y1="180" x2="280" y2="180" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                <text x="250" y="176" fill="#64748b" fontSize="8" fontFamily="monospace">0% Low</text>

                {/* Price path */}
                <path d="M 40 45 L 120 180 L 180 95 L 250 200" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="180" cy="95" r="4" fill="#ef4444" />
                <text x="150" y="215" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Price pulls into OTE premium, then resumes markdown</text>
              </g>
            </svg>
          </div>
        )}

        {/* 11. FIGURE 13: BALANCE PRICE RANGE (BPR) & BAR-CLOSE ALERTS */}
        {(type === 'bpr-alert' || type === 'fig-ch3-13') && (
          <div className="w-full max-w-2xl py-4 relative z-10">
            <svg viewBox="0 0 650 230" className="w-full h-auto">
              {/* Left: BPR */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="300" height="210" fill="#131722" stroke="#f59e0b" strokeWidth="1" rx="8" />
                <text x="150" y="25" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BALANCE PRICE RANGE (BPR)
                </text>
                {/* Bearish FVG */}
                <rect x="30" y="80" width="160" height="60" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" rx="4" />
                <text x="40" y="96" fill="#f87171" fontSize="8.5" fontFamily="monospace">Bearish FVG</text>
                {/* Bullish FVG */}
                <rect x="110" y="50" width="160" height="60" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.2" strokeDasharray="2 2" rx="4" />
                <text x="190" y="66" fill="#34d399" fontSize="8.5" fontFamily="monospace">Bullish FVG</text>
                {/* Overlap Box = BPR */}
                <rect x="110" y="80" width="80" height="30" fill="#f59e0b" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="2" rx="3" />
                <text x="150" y="100" fill="#ffffff" fontSize="9.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  BPR (OVERLAP)
                </text>
                <text x="150" y="170" fill="#fbbf24" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  &star; Double Magnet Power Zone &star;
                </text>
                <text x="150" y="195" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Two overlapping FVGs create powerful institutional POIs</text>
              </g>

              {/* Right: Touch vs Bar Close Alert */}
              <g transform="translate(340, 10)">
                <rect x="0" y="0" width="300" height="210" fill="#131722" stroke="#38bdf8" strokeWidth="1" rx="8" />
                <text x="150" y="25" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  TOUCH ALERT VS BAR-CLOSE ALERT
                </text>
                
                {/* Level line */}
                <line x1="20" y1="100" x2="280" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="240" y="94" fill="#fbbf24" fontSize="8" fontFamily="monospace">Key Level</text>
                
                {/* Candle A: Sweep wick */}
                <g transform="translate(70, 40)">
                  <line x1="20" y1="20" x2="20" y2="110" stroke="#f23645" strokeWidth="2" />
                  <rect x="10" y="70" width="20" height="30" fill="#f23645" rx="2" />
                  <text x="20" y="130" fill="#f87171" fontSize="8" fontFamily="monospace" textAnchor="middle">Wick Pokes</text>
                  <text x="20" y="145" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Touch: FIRES</text>
                  <text x="20" y="158" fill="#f59e0b" fontSize="7.5" textAnchor="middle">Bar-Close: SILENT</text>
                </g>

                {/* Candle B: Body Close */}
                <g transform="translate(180, 40)">
                  <line x1="20" y1="10" x2="20" y2="100" stroke="#10b981" strokeWidth="2" />
                  <rect x="10" y="20" width="20" height="70" fill="#10b981" rx="2" />
                  <text x="20" y="130" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">Body Closes</text>
                  <text x="20" y="145" fill="#34d399" fontSize="7.5" textAnchor="middle">Both Alerts Fire!</text>
                  <text x="20" y="158" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">VALID CONFIRMATION</text>
                </g>

                <text x="150" y="195" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Set alerts to 'Once on Bar Close' to filter out wick sweeps</text>
              </g>
            </svg>
          </div>
        )}

      </div>

      {/* Chart Footer with Pro Info */}
      <div className="px-4 py-2 bg-[#161b22] border-t border-[#2a2e39] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" /> Institutional Provenance Verified
        </span>
        <span className="text-slate-500">
          Reference: Altrady Academy • Institutional Order Flow Standard
        </span>
      </div>

    </div>
  );
}
