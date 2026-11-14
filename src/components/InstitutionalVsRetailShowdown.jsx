import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  TrendingUp, 
  Layers, 
  Crosshair,
  Check,
  X,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function InstitutionalVsRetailShowdown() {
  const [activeTab, setActiveTab] = useState('duel'); // 'duel', 'institutional', 'retail'
  const [revealedSecrets, setRevealedSecrets] = useState({});

  const comparisonRows = [
    {
      id: 'who',
      dimension: 'Who They Are',
      instIcon: Building2,
      instTitle: 'Tier-1 Banks & Hedge Funds',
      instDesc: 'Central banks, sovereign wealth funds, market makers, and institutional algorithms trading massive multi-billion portfolios.',
      retailIcon: User,
      retailTitle: 'Individual Home Traders',
      retailDesc: 'Part-time traders, crypto retail, and individual margin accounts trading small personal capital (0.01 to 5 lots).',
      edgeSecret: 'Institutions represent 90%+ of total market liquidity. Retail volume is merely the counter-party liquidity they harvest.'
    },
    {
      id: 'size',
      dimension: 'Capital & Order Size',
      instIcon: TrendingUp,
      instTitle: 'Very Large ($10 Billion+)',
      instDesc: 'Orders are so enormous that clicking "Market Buy" would cause 40% slippage and move the market violently against themselves.',
      retailIcon: User,
      retailTitle: 'Small & Dispersed',
      retailDesc: 'Single orders are absorbed instantaneously by exchange order books without causing any price movement.',
      edgeSecret: 'Institutions cannot enter all at once; they must distribute and accumulate their positions across multiple sessions.'
    },
    {
      id: 'problem',
      dimension: 'Main Constraint',
      instIcon: Crosshair,
      instTitle: 'Finding Sufficient Liquidity',
      instDesc: 'They desperately need opposing orders (sellers when they want to buy, buyers when they want to sell) to fill positions without slippage.',
      retailIcon: AlertTriangle,
      retailTitle: 'They ARE the Liquidity',
      retailDesc: 'Retail traders predictably place stop losses right behind obvious support/resistance, providing the exact liquidity institutions need.',
      edgeSecret: 'Your stop-loss order is literally an institutional entry order. Retailers don’t see that they are the product.'
    },
    {
      id: 'entry',
      dimension: 'How They Enter',
      instIcon: Zap,
      instTitle: 'Algorithmic Distribution & Sweeps',
      instDesc: 'Slowly, patiently, using algorithmic TWAP/VWAP execution, driving price into stop clusters to absorb volume quietly before markup.',
      retailIcon: User,
      retailTitle: 'Emotional One-Click Orders',
      retailDesc: 'Market orders executed during green candles (FOMO) or placing pending orders right at obvious chart patterns.',
      edgeSecret: 'Smart Money pushes price DOWN when they want to BUY, so retail panics and sells to them at maximum discount.'
    },
    {
      id: 'tools',
      dimension: 'What They Use to Trade',
      instIcon: Layers,
      instTitle: 'Order Flow & Liquidity Pools',
      instDesc: 'Resting BSL/SSL pools, Fair Value Gaps, algorithmic imbalances, interbank delivery algorithms (IPDA), and multi-timeframe structure.',
      retailIcon: AlertTriangle,
      retailTitle: 'Lagging Retail Indicators',
      retailDesc: 'RSI, MACD crossovers, Bollinger Bands, trendlines, and candlestick patterns (head & shoulders, double bottoms).',
      edgeSecret: 'Indicators merely calculate past price mathematically. Smart Money reads where orders are waiting in the future.'
    },
    {
      id: 'stops',
      dimension: 'Stops & Liquidity Relation',
      instIcon: ShieldCheck,
      instTitle: 'Move Price into High Liquidity',
      instDesc: 'Engineer liquidity runs above equal highs or below equal lows to trigger retail liquidation cascades and fuel trend expansion.',
      retailIcon: AlertTriangle,
      retailTitle: 'Cluster Stops in Obvious Zones',
      retailDesc: 'Place stop losses 5-10 pips below obvious swing lows or right above resistance lines taught in beginner textbooks.',
      edgeSecret: 'Rule: Wick takes the cash, body breaks the path. When retail stops get hit, institutions begin the real markup.'
    }
  ];

  const toggleSecret = (id) => {
    setRevealedSecrets(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="my-8 rounded-3xl bg-[#090d16] border border-[#2a2e39] p-4 sm:p-7 space-y-6 shadow-2xl">
      
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#2a2e39]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
              Differential Analysis Matrix
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">• Section 03 Focus</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5 flex items-center gap-2">
            <span>Smart Money (Institutions) vs. Retail Traders</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            The core difference that separates consistent market profitability from retail liquidation. Understand both sides to trade with institutional flow.
          </p>
        </div>

        {/* Mobile / Device View Tabs */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-[#2a2e39] text-xs font-mono self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('duel')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'duel' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Side-by-Side Duel
          </button>
          <button
            onClick={() => setActiveTab('institutional')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'institutional' ? 'bg-emerald-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Smart Money
          </button>
          <button
            onClick={() => setActiveTab('retail')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'retail' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Retail Trap
          </button>
        </div>
      </div>

      {/* 1. SIDE-BY-SIDE DUEL VIEW (RESPONSIVE TABLE / CARDS) */}
      {activeTab === 'duel' && (
        <div className="space-y-4">
          
          {/* Table Header Labels for Larger Screens */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-mono font-bold text-slate-400 border-b border-[#2a2e39]/60">
            <div className="col-span-3 uppercase text-amber-400">Differential Dimension</div>
            <div className="col-span-4 uppercase text-emerald-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Smart Money (Institutions)
            </div>
            <div className="col-span-4 uppercase text-rose-400 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Retail Traders
            </div>
            <div className="col-span-1 text-right text-slate-500">Edge</div>
          </div>

          {/* Comparison Rows */}
          {comparisonRows.map((row) => {
            const isSecretOpen = revealedSecrets[row.id];

            return (
              <div 
                key={row.id}
                className="rounded-2xl bg-[#131722]/80 border border-[#2a2e39] p-4 sm:p-5 transition-all hover:border-slate-600 space-y-3"
              >
                {/* Desktop Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                  
                  {/* Dimension Title */}
                  <div className="lg:col-span-3 space-y-1">
                    <span className="text-xs font-mono font-bold text-amber-300 block">
                      {row.dimension}
                    </span>
                    <button
                      onClick={() => toggleSecret(row.id)}
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{isSecretOpen ? 'Hide Edge Law' : 'Reveal Institutional Law'}</span>
                    </button>
                  </div>

                  {/* Smart Money Column */}
                  <div className="lg:col-span-4 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-xs font-bold text-emerald-300 font-mono">
                        {row.instTitle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {row.instDesc}
                    </p>
                  </div>

                  {/* Retail Traders Column */}
                  <div className="lg:col-span-4 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                      <span className="text-xs font-bold text-rose-300 font-mono">
                        {row.retailTitle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {row.retailDesc}
                    </p>
                  </div>

                  {/* Quick Toggle Button */}
                  <div className="lg:col-span-1 hidden lg:flex justify-end">
                    <button
                      onClick={() => toggleSecret(row.id)}
                      className={`p-2 rounded-lg border transition-all ${
                        isSecretOpen ? 'bg-amber-500 text-dark-950 border-amber-400' : 'bg-[#090d16] text-slate-400 border-[#2a2e39] hover:text-white'
                      }`}
                      title="Reveal Institutional Edge"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Collapsible Institutional Law / Secret Box */}
                {isSecretOpen && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs font-mono text-amber-200 flex items-start gap-2.5 animate-fade-in">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <strong className="text-amber-300 uppercase">Institutional Edge Axiom:</strong>
                      <p className="text-slate-200 leading-relaxed">{row.edgeSecret}</p>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

      {/* 2. DEDICATED SMART MONEY VIEW (MOBILE OPTIMIZED CARDS) */}
      {activeTab === 'institutional' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-xs text-emerald-300 font-mono flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Institutional Profile: How banks operate with multi-billion dollar algorithmic patience.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonRows.map((row) => (
              <div key={row.id} className="p-5 rounded-2xl bg-[#131722] border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider block">
                  {row.dimension}
                </span>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {row.instTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {row.instDesc}
                </p>
                <div className="pt-2 border-t border-[#2a2e39] text-[11px] font-mono text-amber-300/90">
                  <strong>Axiom:</strong> {row.edgeSecret}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. DEDICATED RETAIL TRAP VIEW (MOBILE OPTIMIZED CARDS) */}
      {activeTab === 'retail' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 text-xs text-rose-300 font-mono flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Retail Vulnerability Matrix: Why 90% of retail traders lose money inside ranges and support traps.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonRows.map((row) => (
              <div key={row.id} className="p-5 rounded-2xl bg-[#131722] border border-rose-500/30 space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-rose-400 tracking-wider block">
                  {row.dimension}
                </span>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-400" />
                  {row.retailTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {row.retailDesc}
                </p>
                <div className="pt-2 border-t border-[#2a2e39] text-[11px] font-mono text-amber-300/90">
                  <strong>Trap Rationale:</strong> {row.edgeSecret}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Footer */}
      <div className="p-4 rounded-xl bg-[#131722] border border-[#2a2e39] text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono">
        <span className="text-amber-400 font-bold">
          Summary Takeaway: "Retail puts stops in obvious places. Those stop losses become the liquidity Smart Money uses to fill big orders."
        </span>
        <span className="text-slate-500 text-[11px]">
          Touch-Friendly • Adaptive Mobile Layout
        </span>
      </div>

    </div>
  );
}
