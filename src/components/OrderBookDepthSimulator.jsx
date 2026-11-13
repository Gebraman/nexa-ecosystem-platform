import React, { useState } from 'react';
import { Target, AlertTriangle, ShieldCheck, TrendingUp, DollarSign, Activity } from 'lucide-react';

export default function OrderBookDepthSimulator() {
  const [orderSizeTier, setOrderSizeTier] = useState(2); // 0: Retail ($5k), 1: Prop Trader ($500k), 2: Institution ($10B)

  const tiers = [
    {
      label: "Retail Trader ($5,000 / 0.1 Lot)",
      size: "$5,000",
      slippage: "0.0 pips (Zero)",
      impact: "Zero Market Impact",
      fillStatus: "Instant Fill at 1.08500",
      narrative: "A retail order is microscopic compared to interbank volume. It matches with existing market makers instantly with zero price dislocation.",
      color: "emerald"
    },
    {
      label: "Prop Fund Trader ($500,000 / 10 Lots)",
      size: "$500,000",
      slippage: "0.8 pips",
      impact: "Minor Local Absorption",
      fillStatus: "Filled across 2 price increments",
      narrative: "A mid-sized order absorbs immediate resting liquidity on the book. Slight execution slippage occurs, but does not move the macro market.",
      color: "amber"
    },
    {
      label: "Tier-1 Investment Bank / Hedge Fund ($10,000,000,000)",
      size: "$10 Billion",
      slippage: "350+ pips (Severe Loss)",
      impact: "CATASTROPHIC ORDER BOOK EXHAUSTION",
      fillStatus: "Failed Market Execution (Self-Destructive)",
      narrative: "If an institution tries to buy $10B at market price, they instantly exhaust all resting sell orders on the book. Price rockets upward before their order fills, creating massive slippage that destroys profitability.",
      color: "red"
    }
  ];

  const current = tiers[orderSizeTier];

  return (
    <div className="w-full my-6 p-6 rounded-3xl bg-[#090d16] border border-[#2a2e39] space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2a2e39] pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="w-4 h-4" /> Institutional Mechanics Simulator
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Order Book Liquidity & The Volume Mismatch
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#161b22] border border-[#2a2e39] text-slate-300">
          Interactive Depth Engine
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Select an order execution size to inspect how liquidity density dictates why institutions <strong>must</strong> engineer stop raids before accumulating:
      </p>

      {/* Tier Selection Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tiers.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setOrderSizeTier(idx)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              orderSizeTier === idx
                ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="font-bold">{t.size}</span>
              <span className={`w-2 h-2 rounded-full ${t.color === 'emerald' ? 'bg-emerald-400' : t.color === 'amber' ? 'bg-amber-400' : 'bg-red-400'}`} />
            </div>
            <h5 className="text-xs font-bold truncate">{t.label.split('(')[0]}</h5>
          </button>
        ))}
      </div>

      {/* Visualized Order Book Ladder & Execution Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* Order Book Depth Graphic */}
        <div className="p-4 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-[#2a2e39] text-[11px]">
            <span>PRICE LADDER</span>
            <span>RESTING LIQUIDITY</span>
            <span>SIMULATED FILL</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            {/* Ask Rows (Sellers) */}
            <div className="flex items-center justify-between p-2 rounded bg-red-950/20 text-red-400 border border-red-900/30">
              <span>1.08530</span>
              <span>$450,000 (Ask)</span>
              <span className={orderSizeTier === 2 ? 'text-amber-400 font-bold' : 'text-slate-600'}>
                {orderSizeTier === 2 ? 'Exhausted (-100%)' : 'Untouched'}
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-red-950/30 text-red-400 border border-red-900/40">
              <span>1.08520</span>
              <span>$1,200,000 (Ask)</span>
              <span className={orderSizeTier >= 1 ? 'text-amber-400 font-bold' : 'text-slate-600'}>
                {orderSizeTier >= 1 ? 'Exhausted (-100%)' : 'Untouched'}
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-red-950/40 text-red-300 border border-red-900/50">
              <span>1.08510</span>
              <span>$850,000 (Ask)</span>
              <span className="text-emerald-400 font-bold">Filled</span>
            </div>

            {/* Current Spread Bar */}
            <div className="py-1 px-3 bg-amber-500/10 rounded border border-amber-500/20 flex items-center justify-between text-amber-300 font-bold">
              <span>SPREAD: 1.08500</span>
              <span>CURRENT MARKET PRICE</span>
            </div>

            {/* Bids Rows (Buyers) */}
            <div className="flex items-center justify-between p-2 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-900/30">
              <span>1.08490</span>
              <span>$950,000 (Bid)</span>
              <span className="text-slate-500">Resting Pool</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-emerald-950/20 text-emerald-400 border border-emerald-900/20">
              <span>1.08480 (Old Low)</span>
              <span className="text-amber-300 font-bold">$18,400,000 (RETAIL STOPS)</span>
              <span className="text-amber-400 font-bold">🎯 TARGET SWEEP</span>
            </div>
          </div>
        </div>

        {/* Execution Diagnosis Card */}
        <div className="p-5 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Execution Diagnosis</span>
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${
              current.color === 'emerald' 
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                : current.color === 'amber'
                ? 'bg-amber-950 text-amber-300 border border-amber-800'
                : 'bg-red-950 text-red-300 border border-red-800'
            }`}>
              {current.impact}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#090d16] border border-[#2a2e39]">
              <span className="text-slate-500 block text-[10px]">SLIPPAGE</span>
              <span className="text-white font-bold">{current.slippage}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#090d16] border border-[#2a2e39]">
              <span className="text-slate-500 block text-[10px]">EXECUTION SPEED</span>
              <span className="text-white font-bold">{current.fillStatus.split(' ')[0]}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-400 block mb-1">Institutional Law:</strong>
            {current.narrative}
          </div>

          {orderSizeTier === 2 && (
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30 text-xs text-red-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>
                <strong>Conclusion:</strong> To buy $10B, institutions <strong>cannot buy at market</strong>. They must drive price downward below 1.08480 to trigger the $18.4M of retail stop-loss sell orders, providing the liquidity needed to absorb their position!
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
