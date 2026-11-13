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
        {type === 'sweep-break' && (
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
