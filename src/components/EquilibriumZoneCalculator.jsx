import React, { useState } from 'react';
import { Calculator, ArrowDownCircle, ArrowUpCircle, Compass, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export const EquilibriumZoneCalculator = () => {
  const [highPrice, setHighPrice] = useState(68000);
  const [lowPrice, setLowPrice] = useState(60000);
  const [currentPrice, setCurrentPrice] = useState(63200);

  // Presets
  const presets = [
    { label: 'BTC/USD 4H Leg', high: 68000, low: 60000, current: 63200 },
    { label: 'ETH/USD Daily', high: 3600, low: 2900, current: 3100 },
    { label: 'EUR/USD 15M Dealing Range', high: 1.0950, low: 1.0820, current: 1.0860 }
  ];

  const high = parseFloat(highPrice) || 0;
  const low = parseFloat(lowPrice) || 0;
  const current = parseFloat(currentPrice) || low;

  const delta = Math.max(0.00001, high - low);
  const equilibrium = low + delta * 0.5;
  const ote62 = low + delta * 0.382; // Retracement from high down into discount
  const ote79 = low + delta * 0.214; // Deep discount pocket

  // Current price position percentage from low to high
  const percentFromLow = Math.min(100, Math.max(0, ((current - low) / delta) * 100));

  const isPremium = current > equilibrium;
  const isOTE = current <= low + delta * 0.382 && current >= low + delta * 0.214;

  const applyPreset = (p) => {
    setHighPrice(p.high);
    setLowPrice(p.low);
    setCurrentPrice(p.current);
  };

  return (
    <div className="my-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#131722] via-[#0c1017] to-[#131722] border-b border-[#2a2e39] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
              Section 9 Interactive Dealing Range Tool
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            0.5 Equilibrium, Premium & Discount Zone Engine
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Institutional Golden Rule: Never buy in Premium. Never sell in Discount.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-1.5">
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(p)}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#131722] border border-[#2a2e39] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Input Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-2xl bg-[#0d121c] border border-[#2a2e39] space-y-1">
            <label className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <ArrowDownCircle className="w-3.5 h-3.5" /> Confirmed Swing High
            </label>
            <input
              type="number"
              step="any"
              value={highPrice}
              onChange={(e) => setHighPrice(e.target.value)}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-400"
            />
            <span className="text-[10px] text-slate-500">Dealing range ceiling (100%)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0d121c] border border-[#2a2e39] space-y-1">
            <label className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ArrowUpCircle className="w-3.5 h-3.5" /> Confirmed Swing Low
            </label>
            <input
              type="number"
              step="any"
              value={lowPrice}
              onChange={(e) => setLowPrice(e.target.value)}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-400"
            />
            <span className="text-[10px] text-slate-500">Dealing range floor (0%)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0d121c] border border-[#2a2e39] space-y-1">
            <label className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Live Price Position
            </label>
            <input
              type="number"
              step="any"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-400"
            />
            <span className="text-[10px] text-slate-500">Interactive probe marker</span>
          </div>
        </div>

        {/* Visual Dealing Range Thermometer */}
        <div className="p-5 rounded-2xl bg-[#0b0e15] border border-[#2a2e39] space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-rose-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500" /> PREMIUM ZONE (Expensive)
            </span>
            <span className="text-amber-400 font-bold">
              0.5 EQUILIBRIUM: {equilibrium.toFixed(2)}
            </span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> DISCOUNT ZONE (Cheap)
            </span>
          </div>

          {/* Interactive Range Track */}
          <div className="relative h-10 rounded-xl overflow-hidden bg-gradient-to-r from-emerald-500/30 via-slate-700/40 to-rose-500/30 border border-[#2a2e39]">
            {/* 50% Divider Marker */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-400 z-10">
              <span className="absolute -top-1 -left-3 text-[9px] font-mono bg-amber-400 text-black px-1 rounded font-bold">
                0.5
              </span>
            </div>

            {/* Current Price Pin */}
            <div
              className="absolute top-0 bottom-0 w-2 bg-cyan-400 z-20 shadow-lg transform -translate-x-1/2 transition-all duration-200"
              style={{ left: `${percentFromLow}%` }}
            >
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-cyan-500 text-black px-1.5 py-0.5 rounded text-[10px] font-mono font-extrabold shadow-md">
                ${current.toLocaleString()} ({percentFromLow.toFixed(1)}%)
              </div>
            </div>
          </div>

          {/* Range Slider for Mobile/Desktop Touch */}
          <div className="pt-4">
            <input
              type="range"
              min={low}
              max={high}
              step={delta / 200}
              value={current}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className="w-full h-2 bg-[#131722] rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>Low: {low}</span>
              <span>Slide to simulate price retracement</span>
              <span>High: {high}</span>
            </div>
          </div>
        </div>

        {/* Real-time Institutional Execution Verdict */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isPremium
            ? 'bg-rose-500/10 border-rose-500/30'
            : isOTE
            ? 'bg-emerald-500/15 border-emerald-500/50 shadow-lg shadow-emerald-500/5'
            : 'bg-emerald-500/10 border-emerald-500/30'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {isPremium ? (
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                )}
                <span className={`text-xs font-mono font-bold tracking-wider uppercase ${
                  isPremium ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {isPremium ? 'PREMIUM ZONE POSITION' : isOTE ? 'OPTIMAL TRADE ENTRY (OTE) ZONE' : 'DISCOUNT ZONE POSITION'}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {isPremium
                  ? 'High Risk For Longs — Institutional Distribution Territory'
                  : isOTE
                  ? 'Prime Institutional Accumulation Pocket (0.62 - 0.79)'
                  : 'Favorable Discount Territory — Look for Bullish POIs'}
              </h4>
              <p className="text-xs text-slate-300">
                {isPremium
                  ? `Price is at ${percentFromLow.toFixed(1)}% of the dealing range (above 50% Equilibrium at ${equilibrium.toFixed(2)}). Smart money will NOT buy here. They look for sell-side liquidity sweeps or short entries.`
                  : isOTE
                  ? `Price has retraced deep into the institutional sweet spot (${percentFromLow.toFixed(1)}%). Look for Fair Value Gaps (FVG) or Order Blocks here with minimal invalidation risk.`
                  : `Price is at ${percentFromLow.toFixed(1)}% of the range (below 50% Equilibrium at ${equilibrium.toFixed(2)}). Retail who sold at the bottom are trapped; institutions accumulate here.`}
              </p>
            </div>

            <div className="shrink-0 p-3 rounded-xl bg-[#090d16] border border-[#2a2e39] font-mono text-center">
              <span className="text-[10px] text-slate-400 block">INSTITUTIONAL ACTION</span>
              <span className={`text-sm font-bold block ${isPremium ? 'text-rose-400' : 'text-emerald-400'}`}>
                {isPremium ? 'SELL / SHORT ONLY' : 'BUY / LONG ACCUMULATE'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquilibriumZoneCalculator;
