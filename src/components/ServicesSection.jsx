import React, { useState } from 'react';
import { 
  TrendingUp, 
  Code2, 
  GraduationCap, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle, 
  Video, 
  Download, 
  Calculator, 
  Target, 
  Clock, 
  BookOpen, 
  Sparkles,
  Calendar,
  Lock,
  Unlock,
  Play,
  FileText,
  Star,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Award,
  PenTool,
  FileCheck2,
  BarChart2,
  X,
  Maximize2,
  Layers,
  MonitorPlay,
  AlertTriangle,
  Check,
  Link as LinkIcon
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function ServicesSection({ selectedServiceId, onSelectService }) {
  // Forex Trading sub-tab
  const [forexSubTab, setForexSubTab] = useState('orientation'); // 'orientation', 'strategy', 'backtesting', 'calculator'
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // SMC Strategy Sub-Module state & custom YouTube video linking
  const [smcActiveModuleId, setSmcActiveModuleId] = useState('sideways-markets');
  const [smcVideoUrls, setSmcVideoUrls] = useState({
    'sideways-markets': 'https://youtu.be/Bl8oljJwgZ4',
    'premium-discount-zones': 'https://youtu.be/Bl8oljJwgZ4',
    'applying-smc-strategy': 'https://youtu.be/Bl8oljJwgZ4',
  });
  const [customVideoInput, setCustomVideoInput] = useState('https://youtu.be/Bl8oljJwgZ4');
  const [checkedSmcSteps, setCheckedSmcSteps] = useState({ '01': true, '02': true, '03': true });

  const getYouTubeEmbedUrl = (rawUrl) => {
    if (!rawUrl) return '';
    if (rawUrl.includes('/embed/')) return rawUrl;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = rawUrl.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : rawUrl;
  };

  const currentSmcModule = (ecosystemData.forexAcademy.smcModules && ecosystemData.forexAcademy.smcModules.find(m => m.id === smcActiveModuleId)) 
    || (ecosystemData.forexAcademy.smcModules && ecosystemData.forexAcademy.smcModules[0])
    || {};
  const activeSmcVideoUrl = smcVideoUrls[currentSmcModule.id] || currentSmcModule.defaultVideoUrl || 'https://youtu.be/Bl8oljJwgZ4';

  const handleToggleSmcStep = (step) => {
    setCheckedSmcSteps(prev => ({ ...prev, [step]: !prev[step] }));
  };

  const handleUpdateSmcVideo = (moduleId, newUrl) => {
    if (newUrl && newUrl.trim()) {
      setSmcVideoUrls(prev => ({ ...prev, [moduleId]: newUrl.trim() }));
    }
  };

  // Full-Stack Academy state
  const [devVideoCategory, setDevVideoCategory] = useState('master'); // 'master', 'html-subs', 'css-basics', 'css-props', 'roadmap'
  const [activeDevVideo, setActiveDevVideo] = useState({
    title: "HTML Part One - Master Zoom Workshop",
    duration: "3:14:08",
    category: "HTML",
    badge: "Master Zoom 01",
    videoId: "M8dQpAeqsbY",
    url: "https://youtu.be/M8dQpAeqsbY",
    embedUrl: "https://www.youtube.com/embed/M8dQpAeqsbY",
    description: "Complete foundational workshop on HTML architecture, document anatomy, headings, paragraphs, lists, anchor tags, and multimedia elements.",
  });

  // Position size calculator state
  const [accountBalance, setAccountBalance] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [stopLossPips, setStopLossPips] = useState(10);
  const [targetRr, setTargetRr] = useState(4);

  const riskAmountUsd = (accountBalance * (riskPercent / 100));
  const profitTargetUsd = riskAmountUsd * targetRr;
  const estimatedLotSize = (riskAmountUsd / (stopLossPips * 10)).toFixed(2);

  // K-12 state
  const [k12LevelId, setK12LevelId] = useState('highschool');
  const [bookingGrade, setBookingGrade] = useState('Grade 10');
  const [bookingSubject, setBookingSubject] = useState('Mathematics / Calculus');
  const [bookingStudentName, setBookingStudentName] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const activeK12Level = ecosystemData.academicTutoring.levels.find(l => l.id === k12LevelId) 
    || ecosystemData.academicTutoring.levels[2];

  // Cheatsheet Download handler
  const handleDownloadCheatsheet = () => {
    const cheatsheetText = `
================================================================================
           NEXA FOREX TRADING ACADEMY - INSTITUTIONAL SMC PLAYBOOK
       Sideways Markets, Premium/Discount Zones & 10-Step Execution
================================================================================

Orientation Video: https://youtu.be/Bl8oljJwgZ4

--------------------------------------------------------------------------------
LESSON 1: TRADING STRATEGIES IN A SIDEWAYS MARKET (MEMORY NOTES)
--------------------------------------------------------------------------------
1. Why this matters:
   - Choppy, sideways markets ruin setups without proper range reading.
   - Most damage comes from fake breakouts and liquidity traps.
   - Ranges are opportunities: "Range = liquidity storage."

2. What is a Range?
   - Range High = Buy-Side Liquidity (BSL) resting above it.
   - Range Low = Sell-Side Liquidity (SSL) resting below it.
   - Equilibrium (0.5) = The midpoint. Above is Premium; below is Discount.

3. Accumulation vs Distribution:
   - Accumulation: Smart Money buys quietly after downtrend -> Retail sells -> Outcome: MARKUP.
   - Distribution: Smart Money sells quietly after uptrend -> Retail buys -> Outcome: MARKDOWN.
   - Core Idea: Institutions build positions using retail stops as liquidity.

4. Deviations (The Setup):
   - Deviation: Price briefly breaks outside the range, then quickly returns inside.
   - Break below SSL and return inside = Bullish (SPRING), sweep of SSL.
   - Break above BSL and return inside = Bearish (UPTHRUST), sweep of BSL.
   - Deviation sets the stage because retail stops have just been taken.

5. Spotting Fakeouts & Liquidity Traps:
   - RULE: "Wick = Warning, Close = Confirmation."
   - Fakeout Signs: Only a wick breaks; closes back inside; no strong momentum impulse.
   - Breakout Signs: Candle closes beyond range; strong impulse; retest holds.
   - Liquidity Traps: Equal Highs/Lows attract breakout traders who get trapped on reversal.

6. Range Trading Strategies:
   - Strike Protocol:
     * Mark Range High, Low, and Equilibrium (0.5).
     * Wait for sweep/deviation at one edge.
     * Confirmation: Returns inside range, then small BoS/CHoCH opposite.
     * Entry: At OB or FVG in Discount (buys) or Premium (sells).
     * Stop: Beyond the sweep wick extreme.
     * Targets: Equilibrium first, then opposite edge.
   - When to Stay Out:
     * Middle of range (near equilibrium - no edge).
     * Tight choppy range with small candles.
     * No sweep has happened yet.
     * Trading against HTF trend without confirmation.
     * Right before high-impact news.

7. Lesson 1 Memory Tricks:
   - "Range = liquidity storage."
   - "Sweep the edge, return inside, trade the other side."
   - "Buy discount, sell premium, skip the middle."
   - "Deviation is the setup, confirmation is the trigger."
   - "Accumulation then markup, distribution then markdown."

--------------------------------------------------------------------------------
LESSON 2: MASTER PREMIUM & DISCOUNT ZONES (MEMORY NOTES)
--------------------------------------------------------------------------------
1. Why this matters:
   - Retail chases; institutions plan.
   - Premium/Discount gives a mathematical framework to find high-probability areas.

2. Zones Breakdown:
   - Premium (> 0.5): Expensive -> Look exclusively to SELL.
   - Equilibrium (0.5): Fair price -> No edge, skip the middle.
   - Discount (< 0.5): Cheap -> Look exclusively to BUY.
   - Precise entries: Deep in discount (OTE 0.618 to 0.79) for buys; deep in premium for sells.
   - Rule: Buy low, sell high relative to range. Never buy in premium or sell in discount.

3. Points of Interest (POIs):
   - POIs: Order Blocks (OBs), Fair Value Gaps (FVGs), Liquidity Pools.
   - Best POIs: In correct zone, strong impulse with BoS, fresh/unmitigated, formed after sweep.

4. First Trouble Areas (FTAs):
   - The first opposing zone (OB, FVG, liquidity pool) between entry and target.
   - If FTA is very close to entry -> weak trade (skip or TP at FTA).
   - If FTA is far away or cleared -> superior Risk-to-Reward.

5. Syncing Multiple Timeframes:
   - RULE: "HTF gives the direction. LTF gives the entry."
   - HTF (Daily/4H): Bias, range, premium/discount, major POIs, target liquidity.
   - LTF (15M/5M/1M): Wait for HTF POI tap, sweep, BoS/CHoCH, precision entry.
   - Swing Trading: Weekly/Daily HTF, 4H/1H LTF (Days to weeks).
   - Intraday: 4H/1H HTF, 15M/5M LTF (Minutes to hours).

6. Lesson 2 Memory Tricks:
   - "Buy in discount, sell in premium, skip equilibrium."
   - "HTF = direction, LTF = entry."
   - "POI + right zone + FTA clear = strong trade."
   - "FTA is the first obstacle. Check it before you enter."
   - "Plan the trade, then trade the plan."

--------------------------------------------------------------------------------
LESSON 3: APPLYING SMART MONEY CONCEPT STRATEGY (MEMORY NOTES)
--------------------------------------------------------------------------------
1. 10-Step Top-Down Checklist:
   [01] HTF Directional Bias (Daily/4H)
   [02] Mark dealing range and Equilibrium (0.5)
   [03] Map Liquidity (BSL, SSL, internal vs external)
   [04] Identify fresh POIs (OB/FVG in correct zone)
   [05] Wait patiently for price to tap POI (no chasing)
   [06] LTF Confirmation: Liquidity sweep + BoS/CHoCH
   [07] Precision Entry: At LTF OB/FVG in OTE (0.618 - 0.79)
   [08] Check FTA: Ensure path to target has room to run
   [09] Stop Loss: Beyond swing or POI invalidation extreme
   [10] Target: Opposing liquidity pool (Minimum 1:3 R:R)

2. Confluence Stacking:
   - HTF bias aligned.
   - Price in right zone (Discount for buy, Premium for sell).
   - Liquidity sweep just happened.
   - BoS follows with strong impulse.
   - Fresh POI in OTE zone.
   - FTA far away.
   - RULE: "The more confluences, the higher the probability."

3. Execution Discipline:
   - Simulate first, risk later.
   - Journal every setup with screenshots.
   - Process > Outcome.
   - Never risk more than 1% per trade.

4. Lesson 3 Memory Tricks:
   - "Top-down: bias, range, liquidity, POI, confirm, enter."
   - "Sweep, BoS, pullback to POI, enter."
   - "More confluence, more probability."
   - "Simulate first, risk later."
   - "Trust the process, not one trade."

================================================================================
Generated by Nexa Forex Trading Academy // Addis Ababa & Global
================================================================================
    `;

    const blob = new Blob([cheatsheetText], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Nexa_Institutional_SMC_Playbook.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const handleK12Booking = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      window.open('https://calendar.app.google/NqgKSXoBhqz163hG9', '_blank');
    }, 1200);
  };

  return (
    <section id="services" className="py-24 border-b border-slate-800/80 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Educational & Tech Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Core Services & Academies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Click into any parent container below to launch its <strong>dedicated full-screen Academy Portal Window</strong> — featuring video lessons, full curriculum tracks, backtest journals, and 1-on-1 mentorship.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* PARENT CONTAINERS GRID                                                */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ecosystemData.services.map((service) => {
            const isForex = service.id === 'forex-trading';
            const isFullstack = service.id === 'fullstack-dev';
            const Icon = isForex ? TrendingUp : isFullstack ? Code2 : GraduationCap;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-cyan-950/20 transform hover:-translate-y-1.5 min-h-[540px] bg-dark-900"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-30 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/90 to-dark-950/60" />
                </div>

                {/* Top Card Info */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase backdrop-blur-md ${
                      isForex 
                        ? 'bg-amber-950/80 text-amber-400 border border-amber-800' 
                        : isFullstack
                        ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800'
                        : 'bg-indigo-950/80 text-indigo-400 border border-indigo-800'
                    }`}>
                      {service.badge}
                    </span>

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md ${
                      isForex 
                        ? 'bg-amber-500/10 text-amber-400' 
                        : isFullstack
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'bg-indigo-500/10 text-indigo-400'
                    }`}>
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-4">
                    {service.title}
                  </h3>

                  <p className={`text-xs font-semibold mt-1 ${
                    isForex ? 'text-amber-400' : isFullstack ? 'text-cyan-400' : 'text-indigo-400'
                  }`}>
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-4 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${
                          isForex ? 'text-amber-400' : isFullstack ? 'text-cyan-400' : 'text-indigo-400'
                        }`} />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Trigger */}
                <div className="relative z-10 p-8 pt-0">
                  <div className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-between transition-all shadow-lg ${
                    isForex 
                      ? 'bg-amber-500 group-hover:bg-amber-400 text-dark-950 shadow-amber-500/15' 
                      : isFullstack
                      ? 'bg-cyan-500 group-hover:bg-cyan-400 text-dark-950 shadow-cyan-500/15'
                      : 'bg-indigo-500 group-hover:bg-indigo-400 text-dark-950 shadow-indigo-500/15'
                  }`}>
                    <span>{service.ctaText}</span>
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* DEDICATED FULL-SCREEN SEPARATE ENTITY PORTAL WINDOW                   */}
        {/* ===================================================================== */}
        {selectedServiceId && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/98 backdrop-blur-2xl animate-fade-in flex flex-col">
            
            {/* Top Standalone Portal Header */}
            <header className="sticky top-0 z-40 bg-dark-900/90 border-b border-slate-800 px-6 py-4 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold uppercase">
                  Standalone Academy Portal
                </span>
                <span className="text-sm font-bold text-white hidden sm:inline">
                  {selectedServiceId === 'forex-trading' && 'Nexa Forex Trading Academy'}
                  {selectedServiceId === 'fullstack-dev' && 'Nexa Full-Stack Developer Campus'}
                  {selectedServiceId === 'k12-scholars' && 'Nexa K-12 Academic Scholars Hub'}
                </span>
              </div>

              {/* Navigation Switchers & Close Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectService('forex-trading')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedServiceId === 'forex-trading' ? 'bg-amber-500 text-dark-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Forex Trading
                </button>
                <button
                  onClick={() => onSelectService('fullstack-dev')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedServiceId === 'fullstack-dev' ? 'bg-cyan-500 text-dark-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Full-Stack
                </button>
                <button
                  onClick={() => onSelectService('k12-scholars')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedServiceId === 'k12-scholars' ? 'bg-indigo-500 text-dark-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  K-12 Scholars
                </button>

                <button
                  onClick={() => onSelectService(null)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 ml-2"
                >
                  <X className="w-4 h-4 text-red-400" />
                  <span>Close Window</span>
                </button>
              </div>
            </header>

            {/* Portal Body Content */}
            <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
              
              {/* ------------------------------------------------------------- */}
              {/* 1. FOREX TRADING ACADEMY PORTAL WINDOW                        */}
              {/* ------------------------------------------------------------- */}
              {selectedServiceId === 'forex-trading' && (
                <div className="space-y-10">
                  
                  {/* Banner */}
                  <div className="p-8 rounded-3xl bg-dark-900 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
                    <div>
                      <span className="text-xs font-mono px-3 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 uppercase font-bold">
                        Comprehensive Forex Education & Price Action
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                        Nexa Forex Trading Academy
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                        {ecosystemData.forexAcademy.overview}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={ecosystemData.forexAcademy.featuredVideo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Watch on YouTube (New Tab)</span>
                      </a>

                      <button
                        onClick={handleDownloadCheatsheet}
                        className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-dark-950 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-700 transition-all shrink-0"
                      >
                        <Download className="w-4 h-4 text-amber-400" />
                        <span>Cheatsheet (.txt)</span>
                      </button>
                    </div>
                  </div>

                  {downloadSuccess && (
                    <div className="p-4 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Nexa Forex Trading Institutional Rules Cheatsheet downloaded successfully!</span>
                    </div>
                  )}

                  {/* Sub-Nav Tabs inside Forex Portal */}
                  <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-dark-900 border border-slate-800 w-fit text-xs">
                    <button
                      onClick={() => setForexSubTab('orientation')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'orientation' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Orientation Video & Modules</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('strategy')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'strategy' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Market Structure & SMC Strategy</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('backtesting')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'backtesting' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>Audited Backtest Journal</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('calculator')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'calculator' ? 'bg-amber-500 text-dark-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Lot Size Calculator</span>
                    </button>
                  </div>

                  {/* TAB 1: ORIENTATION VIDEO & UNLISTED MODULES */}
                  {forexSubTab === 'orientation' && (
                    <div className="space-y-8 animate-fade-in">
                      {/* Featured Video Player Embed */}
                      <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-xs font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                              <Play className="w-3.5 h-3.5" /> Featured Unlisted Masterclass
                            </span>
                            <h3 className="text-2xl font-bold text-white mt-1">
                              {ecosystemData.forexAcademy.featuredVideo.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {ecosystemData.forexAcademy.featuredVideo.subtitle}
                            </p>
                          </div>

                          <a
                            href={ecosystemData.forexAcademy.featuredVideo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start sm:self-auto"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                            <span>Open on YouTube (New Window)</span>
                          </a>
                        </div>

                        {/* Interactive Responsive 16:9 Video Frame */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                          <iframe
                            src={ecosystemData.forexAcademy.featuredVideo.embedUrl}
                            title="Forex Trading Orientation Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>

                        {/* Topics covered in orientation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {ecosystemData.forexAcademy.featuredVideo.topics.map((t, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Video Modules List */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <Video className="w-4 h-4 text-amber-400" />
                          Unlisted Video Series Curriculum
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ecosystemData.forexAcademy.videoModules.map((mod, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-dark-900 border border-slate-800 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
                                    <Play className="w-3.5 h-3.5" /> {mod.duration}
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                                    {mod.access}
                                  </span>
                                </div>
                                <h5 className="text-base font-bold text-white">{mod.title}</h5>
                                <p className="text-xs text-slate-400 mt-1 font-mono">{mod.notesIncluded}</p>
                                <div className="mt-4 space-y-1.5">
                                  {mod.topics.map((t, idx) => (
                                    <div key={idx} className="text-xs text-slate-400 flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                      <span>{t}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="mt-6 pt-4 border-t border-slate-800">
                                <a
                                  href={mod.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                                >
                                  <span>Launch Unlisted Video Lesson</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: MARKET STRUCTURE & SMC STRATEGY STUDIO */}
                  {forexSubTab === 'strategy' && (
                    <div className="space-y-10 animate-fade-in">
                      {/* Top Header & Strategy Intro */}
                      <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-mono uppercase font-bold mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Institutional Smart Money Framework</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Smart Money Concept (SMC) Strategy Studio
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                            Master ranges, liquidity engineering, Premium vs. Discount pricing, First Trouble Areas (FTAs), and the complete 10-step top-down institutional execution checklist.
                          </p>
                        </div>

                        {/* Cheatsheet quick download */}
                        <button
                          onClick={handleDownloadCheatsheet}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start md:self-auto shrink-0"
                        >
                          <Download className="w-4 h-4 text-amber-400" />
                          <span>Download Complete SMC Playbook</span>
                        </button>
                      </div>

                      {/* 3 Master Modules Selector Tabs */}
                      <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 pb-4">
                        {ecosystemData.forexAcademy.smcModules && ecosystemData.forexAcademy.smcModules.map((mod) => (
                          <button
                            key={mod.id}
                            onClick={() => {
                              setSmcActiveModuleId(mod.id);
                              setCustomVideoInput(smcVideoUrls[mod.id] || mod.defaultVideoUrl);
                            }}
                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                              smcActiveModuleId === mod.id
                                ? 'bg-amber-500 text-dark-950 shadow-lg shadow-amber-500/20'
                                : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20">{mod.badge}</span>
                            <span>{mod.title}</span>
                          </button>
                        ))}
                      </div>

                      {/* Active Module Video Theater Player & Public YouTube Linker */}
                      {currentSmcModule && currentSmcModule.title && (
                        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 space-y-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                                  <Play className="w-3.5 h-3.5" /> {currentSmcModule.badge}
                                </span>
                                <span className="text-xs text-slate-500 font-mono">• {currentSmcModule.duration}</span>
                              </div>
                              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                                {currentSmcModule.title}
                              </h4>
                              <p className="text-xs text-slate-400 mt-1">
                                {currentSmcModule.subtitle}
                              </p>
                            </div>

                            <a
                              href={activeSmcVideoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start md:self-auto shrink-0"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                              <span>Open on YouTube (New Tab)</span>
                            </a>
                          </div>

                          {/* 16:9 Video Frame */}
                          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                            <iframe
                              src={getYouTubeEmbedUrl(activeSmcVideoUrl)}
                              title={currentSmcModule.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>

                          {/* Public YouTube Video URL Connector / Previews Bar */}
                          <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                              <LinkIcon className="w-4 h-4 text-amber-400 shrink-0" />
                              <span className="font-semibold">Connect Public YouTube Video:</span>
                              <span className="text-slate-500 text-[11px] hidden sm:inline">(Paste any public YouTube video link to stream in this lesson)</span>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <input
                                type="text"
                                placeholder="https://youtu.be/... or https://youtube.com/watch?v=..."
                                value={customVideoInput}
                                onChange={(e) => setCustomVideoInput(e.target.value)}
                                className="w-full sm:w-80 px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-700 text-slate-200 font-mono text-xs focus:border-amber-400 focus:outline-none"
                              />
                              <button
                                onClick={() => handleUpdateSmcVideo(currentSmcModule.id, customVideoInput)}
                                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shrink-0 transition-all"
                              >
                                Link Video
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LESSON DETAILS ACCORDING TO MODULE */}
                      {/* ========================================================================= */}
                      {/* MODULE 1: TRADING STRATEGIES IN A SIDEWAYS MARKET                         */}
                      {/* ========================================================================= */}
                      {smcActiveModuleId === 'sideways-markets' && currentSmcModule.whatIsARange && (
                        <div className="space-y-8 animate-fade-in">
                          {/* 1. Why this matters & What is a range */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">01. Why This Matters</span>
                              <h4 className="text-lg font-bold text-white">The Truth About Choppy & Sideways Markets</h4>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                {currentSmcModule.whyItMatters}
                              </p>
                              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-300 text-xs font-mono">
                                💡 Key Concept: Ranges are not dead markets — they are where institutional inventory is accumulated or distributed.
                              </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">02. What Is A Range?</span>
                              <h4 className="text-lg font-bold text-white">Market Anatomy Between High & Low</h4>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {currentSmcModule.whatIsARange.definition}
                              </p>
                              <div className="space-y-2 text-xs font-mono mt-3">
                                <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 text-red-300">
                                  🔴 {currentSmcModule.whatIsARange.rangeHigh}
                                </div>
                                <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 text-amber-300">
                                  ⚖️ {currentSmcModule.whatIsARange.equilibrium}
                                </div>
                                <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 text-emerald-300">
                                  🟢 {currentSmcModule.whatIsARange.rangeLow}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* INTERACTIVE RANGE & DEVIATION VISUALIZER */}
                          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <span className="text-xs font-mono text-amber-400 font-bold uppercase">Visual Architecture</span>
                                <h4 className="text-xl font-bold text-white mt-0.5">The Institutional Dealing Range</h4>
                              </div>
                              <span className="text-xs font-mono text-slate-400 bg-dark-950 px-3 py-1 rounded-full border border-slate-800">
                                Equilibrium (0.5) Midpoint
                              </span>
                            </div>

                            {/* Range Visual Graphic Container */}
                            <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                              {/* Range High */}
                              <div className="flex items-center justify-between p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs font-mono">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                  <strong className="text-red-300">RANGE HIGH</strong>
                                </div>
                                <span className="text-red-300 font-bold">Buy-Side Liquidity (BSL) resting above</span>
                              </div>

                              {/* Premium Zone */}
                              <div className="px-4 py-3 rounded-lg bg-red-950/10 border border-dashed border-red-900/40 text-center text-xs font-mono text-red-400">
                                ▲ PREMIUM ZONE (&gt; 0.5) — Institutional Expensive Pricing • Look Exclusively for Sells / Upthrust Sweeps
                              </div>

                              {/* Equilibrium */}
                              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs font-mono">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                  <strong className="text-amber-300">EQUILIBRIUM (0.5 MIDPOINT)</strong>
                                </div>
                                <span className="text-amber-300">Fair Price • Zero Statistical Edge (Skip The Middle)</span>
                              </div>

                              {/* Discount Zone */}
                              <div className="px-4 py-3 rounded-lg bg-emerald-950/10 border border-dashed border-emerald-900/40 text-center text-xs font-mono text-emerald-400">
                                ▼ DISCOUNT ZONE (&lt; 0.5) — Institutional Cheap Pricing • Look Exclusively for Buys / Spring Sweeps
                              </div>

                              {/* Range Low */}
                              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs font-mono">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                  <strong className="text-emerald-300">RANGE LOW</strong>
                                </div>
                                <span className="text-emerald-300 font-bold">Sell-Side Liquidity (SSL) resting below</span>
                              </div>
                            </div>
                          </div>

                          {/* 3. Accumulation vs Distribution Table */}
                          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 space-y-6">
                            <div>
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">03. Institutional Cycle</span>
                              <h4 className="text-xl font-bold text-white mt-1">Accumulation vs. Distribution</h4>
                              <p className="text-xs text-slate-400 mt-1">
                                {currentSmcModule.institutionalCoreIdea}
                              </p>
                            </div>

                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-xs font-mono">
                                <thead>
                                  <tr className="border-b border-slate-800 text-slate-400">
                                    <th className="py-3 px-4">Market Metric</th>
                                    <th className="py-3 px-4 text-emerald-400">Accumulation Phase</th>
                                    <th className="py-3 px-4 text-red-400">Distribution Phase</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                  {currentSmcModule.accumulationVsDistribution.map((row, i) => (
                                    <tr key={i} className="hover:bg-dark-950/40">
                                      <td className="py-3.5 px-4 font-bold text-white">{row.aspect}</td>
                                      <td className="py-3.5 px-4 text-emerald-300">{row.accumulation}</td>
                                      <td className="py-3.5 px-4 text-red-300">{row.distribution}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* 4. Deviations (Spring / Upthrust) & 5. Spotting Fakeouts */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Deviations */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">04. The Setup: Deviations</span>
                              <h4 className="text-lg font-bold text-white">{currentSmcModule.deviations.title}</h4>
                              <p className="text-xs text-slate-300">{currentSmcModule.deviations.explanation}</p>
                              
                              <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-2 text-xs">
                                <div className="text-emerald-400 font-mono font-semibold">
                                  🌱 Bullish Spring: {currentSmcModule.deviations.spring}
                                </div>
                                <div className="text-red-400 font-mono font-semibold">
                                  ⚡ Bearish Upthrust: {currentSmcModule.deviations.upthrust}
                                </div>
                              </div>

                              <p className="text-xs text-amber-300 font-mono">
                                {currentSmcModule.deviations.keyInsight}
                              </p>
                            </div>

                            {/* Fakeouts vs Breakouts */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">05. Filtering Fakeouts</span>
                              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs">
                                📌 Golden Rule: {currentSmcModule.fakeoutsVsBreakouts.rule}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                                  <strong className="text-red-400 block mb-1">Fakeout Signs:</strong>
                                  <ul className="space-y-1 text-slate-400 text-[11px]">
                                    {currentSmcModule.fakeoutsVsBreakouts.fakeoutSigns.map((s, i) => (
                                      <li key={i}>• {s}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                                  <strong className="text-emerald-400 block mb-1">Real Breakout Signs:</strong>
                                  <ul className="space-y-1 text-slate-400 text-[11px]">
                                    {currentSmcModule.fakeoutsVsBreakouts.breakoutSigns.map((s, i) => (
                                      <li key={i}>• {s}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <p className="text-[11px] text-slate-400">
                                ⚠️ {currentSmcModule.fakeoutsVsBreakouts.liquidityTraps}
                              </p>
                            </div>
                          </div>

                          {/* 6. Execution Protocol: When to Strike vs When to Stay Out */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <h4 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                06. When To Strike (Execution Blueprint)
                              </h4>
                              <div className="space-y-2 mt-2">
                                {currentSmcModule.rangeTradingExecution.whenToStrike.map((step, idx) => (
                                  <div key={idx} className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-xs text-slate-300">
                                    {step}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <h4 className="text-base font-bold text-red-400 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                When To Stay Out (Preserve Capital)
                              </h4>
                              <div className="space-y-2 mt-2">
                                {currentSmcModule.rangeTradingExecution.whenToStayOut.map((reason, idx) => (
                                  <div key={idx} className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
                                    <span className="text-red-400 font-bold">✕</span>
                                    <span>{reason}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* 7. Mistakes to Avoid & Memory Tricks */}
                          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 space-y-6">
                            <div>
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">07. Institutional Discipline</span>
                              <h4 className="text-xl font-bold text-white mt-1">Memory Tricks & Mental Models</h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {currentSmcModule.memoryTricks.map((trick, i) => (
                                <div key={i} className="p-4 rounded-xl bg-dark-950 border border-amber-500/20 text-xs text-amber-300 font-mono font-semibold flex items-center gap-2 shadow-inner">
                                  <span>🧠</span>
                                  <span>{trick}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ========================================================================= */}
                      {/* MODULE 2: MASTER PREMIUM & DISCOUNT ZONES                                  */}
                      {/* ========================================================================= */}
                      {smcActiveModuleId === 'premium-discount-zones' && currentSmcModule.zonesTable && (
                        <div className="space-y-8 animate-fade-in">
                          {/* Why this matters & Zones Table */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">01. Why This Matters</span>
                              <h4 className="text-lg font-bold text-white">Think Like Institutions, Not Retail</h4>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                {currentSmcModule.whyItMatters}
                              </p>
                              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                                ⚖️ {currentSmcModule.goldenRule}
                              </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">02. Mathematical Zone Matrix</span>
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs font-mono">
                                  <thead>
                                    <tr className="border-b border-slate-800 text-slate-400">
                                      <th className="py-2.5 px-3">Zone</th>
                                      <th className="py-2.5 px-3">Level</th>
                                      <th className="py-2.5 px-3">Pricing</th>
                                      <th className="py-2.5 px-3">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                    {currentSmcModule.zonesTable.map((z, idx) => (
                                      <tr key={idx}>
                                        <td className="py-2.5 px-3 font-bold text-white">{z.zone}</td>
                                        <td className="py-2.5 px-3 text-slate-400">{z.rangePosition}</td>
                                        <td className="py-2.5 px-3 font-semibold">{z.pricing}</td>
                                        <td className={`py-2.5 px-3 font-bold ${
                                          idx === 0 ? 'text-red-400' : idx === 1 ? 'text-amber-400' : 'text-emerald-400'
                                        }`}>{z.action}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <p className="text-xs text-slate-400 font-mono mt-2">
                                🎯 {currentSmcModule.optimalTradeEntry}
                              </p>
                            </div>
                          </div>

                          {/* Points of Interest (POIs) & First Trouble Areas (FTAs) */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* POIs */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">03. Points of Interest (POIs)</span>
                              <h4 className="text-lg font-bold text-white">{currentSmcModule.poisCriteria.title}</h4>
                              <p className="text-xs text-slate-300">{currentSmcModule.poisCriteria.description}</p>
                              <div className="space-y-1.5 mt-2">
                                {currentSmcModule.poisCriteria.bestPoisFeatures.map((f, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded bg-dark-950">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>{f}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="p-2.5 rounded bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono">
                                ⚠️ {currentSmcModule.poisCriteria.warning}
                              </div>
                            </div>

                            {/* FTAs */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">04. First Trouble Areas (FTAs)</span>
                              <h4 className="text-lg font-bold text-white">{currentSmcModule.ftaFramework.title}</h4>
                              <p className="text-xs text-slate-300">{currentSmcModule.ftaFramework.definition}</p>
                              <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs space-y-2">
                                <strong className="text-amber-400 block font-mono">How To Evaluate Your Trade Path:</strong>
                                {currentSmcModule.ftaFramework.howToUse.map((u, i) => (
                                  <div key={i} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                                    <span className="text-amber-400">•</span>
                                    <span>{u}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Multi-Timeframe Syncing (HTF vs LTF) */}
                          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 space-y-6">
                            <div>
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">06. Timeframe Alignment</span>
                              <h4 className="text-xl font-bold text-white mt-1">
                                {currentSmcModule.multiTimeframeSyncing.title}
                              </h4>
                              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs mt-2">
                                🔑 Rule: {currentSmcModule.multiTimeframeSyncing.goldenRule}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentSmcModule.multiTimeframeSyncing.roles.map((r, i) => (
                                <div key={i} className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1.5">
                                  <span className="text-xs font-mono font-bold text-amber-400">{r.timeframe}</span>
                                  <p className="text-xs text-slate-300">{r.purpose}</p>
                                  <p className="text-[11px] font-mono text-slate-500">Examples: {r.examples}</p>
                                </div>
                              ))}
                            </div>

                            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-2">
                              <h5 className="text-xs font-bold font-mono text-white">Execution Steps (Top-Down):</h5>
                              {currentSmcModule.multiTimeframeSyncing.executionSteps.map((step, idx) => (
                                <div key={idx} className="text-xs text-slate-300 font-mono flex items-start gap-2">
                                  <span className="text-amber-400 font-bold">{idx + 1}.</span>
                                  <span>{step}</span>
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {currentSmcModule.multiTimeframeSyncing.stylesComparison.map((style, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1 text-xs font-mono">
                                  <span className="text-amber-400 font-bold text-sm">{style.style}</span>
                                  <p className="text-slate-400">HTF (Bias): <strong className="text-white">{style.htf}</strong></p>
                                  <p className="text-slate-400">LTF (Entry): <strong className="text-white">{style.ltf}</strong></p>
                                  <p className="text-slate-400">Holding Time: <strong className="text-white">{style.holdingTime}</strong></p>
                                  <p className="text-slate-400">Stops/Targets: <strong className="text-white">{style.stopsTargets}</strong></p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Memory Tricks */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {currentSmcModule.memoryTricks.map((trick, i) => (
                              <div key={i} className="p-4 rounded-xl bg-dark-900 border border-amber-500/20 text-xs text-amber-300 font-mono font-semibold flex items-center gap-2">
                                <span>🧠</span>
                                <span>{trick}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ========================================================================= */}
                      {/* MODULE 3: APPLYING SMART MONEY CONCEPT STRATEGY                           */}
                      {/* ========================================================================= */}
                      {smcActiveModuleId === 'applying-smc-strategy' && currentSmcModule.checklistTopDown && (
                        <div className="space-y-8 animate-fade-in">
                          {/* Interactive 10-Step Top-Down Checklist */}
                          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Interactive Protocol</span>
                                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                                  10-Step Top-Down SMC Analysis Checklist
                                </h4>
                                <p className="text-xs text-slate-400 mt-1">
                                  Click each step as you complete it during live chart analysis before risking capital.
                                </p>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="text-xs font-mono text-amber-400 font-bold bg-amber-950 px-3 py-1.5 rounded-xl border border-amber-800">
                                  {Object.values(checkedSmcSteps).filter(Boolean).length} / 10 Steps Complete
                                </span>
                                <button
                                  onClick={() => setCheckedSmcSteps({})}
                                  className="text-xs text-slate-400 hover:text-white underline font-mono"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {currentSmcModule.checklistTopDown.map((item) => {
                                const isChecked = !!checkedSmcSteps[item.step];
                                return (
                                  <div
                                    key={item.step}
                                    onClick={() => handleToggleSmcStep(item.step)}
                                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                      isChecked
                                        ? 'bg-emerald-950/30 border-emerald-500/60 text-emerald-100 shadow-md shadow-emerald-950/20'
                                        : 'bg-dark-950 border-slate-800 hover:border-slate-700 text-slate-300'
                                    }`}
                                  >
                                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                                      isChecked
                                        ? 'bg-emerald-500 border-emerald-400 text-dark-950'
                                        : 'border-slate-700 bg-dark-900 text-transparent'
                                    }`}>
                                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    </div>

                                    <div className="space-y-1 flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="font-bold text-xs text-white">
                                          {item.step}. {item.name}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-400 leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Confluence Stacking & Risk-Free Simulation */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Confluences */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Confluence Stacking</span>
                              <h4 className="text-lg font-bold text-white">{currentSmcModule.confluenceStacking.title}</h4>
                              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs">
                                ⚡ Rule: {currentSmcModule.confluenceStacking.rule}
                              </div>
                              <div className="space-y-2">
                                {currentSmcModule.confluenceStacking.factors.map((factor, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-dark-950 border border-slate-800/80">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>{factor}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Simulation & Real-World Errors */}
                            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Execution Discipline</span>
                              <h4 className="text-lg font-bold text-white">Simulate First, Risk Later</h4>
                              <div className="space-y-2 text-xs text-slate-300">
                                {currentSmcModule.simulatingWithoutRisk.principles.map((p, i) => (
                                  <div key={i} className="flex items-start gap-2 p-2 rounded bg-dark-950">
                                    <span className="text-amber-400 font-bold">•</span>
                                    <span>{p}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="p-3 rounded-xl bg-red-950/30 border border-red-800/50 space-y-1">
                                <strong className="text-red-400 text-xs font-mono block">Common Real-Chart Mistakes:</strong>
                                <ul className="text-[11px] text-slate-400 space-y-1">
                                  {currentSmcModule.commonMistakesInRealCharts.slice(0, 4).map((m, i) => (
                                    <li key={i}>✕ {m}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Memory Tricks */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {currentSmcModule.memoryTricks.map((trick, i) => (
                              <div key={i} className="p-4 rounded-xl bg-dark-900 border border-amber-500/20 text-xs text-amber-300 font-mono font-semibold flex items-center gap-2">
                                <span>🧠</span>
                                <span>{trick}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Supplementary Core Tenets Grid */}
                      <div className="pt-6 border-t border-slate-800 space-y-4">
                        <h4 className="text-sm font-bold font-mono text-slate-400 uppercase tracking-wider">
                          Foundational Institutional Tenets
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {ecosystemData.forexAcademy.coreTenets.map((tenet, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-dark-950 border border-slate-800 flex flex-col justify-between">
                              <div>
                                <span className="text-xs font-mono font-bold text-amber-400">0{idx + 1}</span>
                                <h5 className="text-sm font-bold text-white mt-1">{tenet.concept}</h5>
                                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{tenet.description}</p>
                              </div>
                              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[10px] font-mono text-amber-400/90">
                                Rule: {tenet.rule}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: BACKTESTING JOURNAL */}
                  {forexSubTab === 'backtesting' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                      {ecosystemData.forexAcademy.backtestLogs.map((log) => (
                        <div key={log.id} className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold font-mono text-white">{log.pair} ({log.direction})</span>
                            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                              {log.result}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs font-mono p-3 rounded-lg bg-dark-950 text-center">
                            <div><span className="text-slate-500 text-[10px]">Entry</span><p>{log.entry}</p></div>
                            <div><span className="text-slate-500 text-[10px]">SL</span><p className="text-red-400">{log.stopLoss}</p></div>
                            <div><span className="text-slate-500 text-[10px]">TP</span><p className="text-emerald-400">{log.takeProfit}</p></div>
                          </div>
                          <p className="text-xs text-slate-300"><strong className="text-amber-400">Confluence:</strong> {log.confluence}</p>
                          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex justify-between">
                            <span>{log.id} • {log.session}</span>
                            <span className="text-emerald-400">{log.riskReward} R:R</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 4: CALCULATOR */}
                  {forexSubTab === 'calculator' && (
                    <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-dark-900 border border-slate-800 animate-fade-in space-y-5">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-400" />
                        Institutional Lot Size & Equity Preservation Calculator
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-400">Account Balance ($USD)</label>
                          <input
                            type="number"
                            value={accountBalance}
                            onChange={e => setAccountBalance(Number(e.target.value))}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400">Risk % (1% Recommended)</label>
                          <input
                            type="number"
                            value={riskPercent}
                            onChange={e => setRiskPercent(Number(e.target.value))}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400">Stop Loss (Pips)</label>
                          <input
                            type="number"
                            value={stopLossPips}
                            onChange={e => setStopLossPips(Number(e.target.value))}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400">Target R:R (e.g. 4 for 1:4)</label>
                          <input
                            type="number"
                            value={targetRr}
                            onChange={e => setTargetRr(Number(e.target.value))}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-dark-950 border border-amber-500/30 grid grid-cols-3 gap-2 text-center">
                        <div><span className="text-[10px] text-slate-500 font-mono">Risk</span><p className="text-base font-bold font-mono text-red-400">${riskAmountUsd.toFixed(2)}</p></div>
                        <div><span className="text-[10px] text-slate-500 font-mono">Lot Size</span><p className="text-base font-bold font-mono text-amber-400">{estimatedLotSize}</p></div>
                        <div><span className="text-[10px] text-slate-500 font-mono">Gain</span><p className="text-base font-bold font-mono text-emerald-400">+${profitTargetUsd.toFixed(2)}</p></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* 2. FULL-STACK WEB DEVELOPMENT PORTAL WINDOW (WITH THEATER)    */}
              {/* ------------------------------------------------------------- */}
              {selectedServiceId === 'fullstack-dev' && (
                <div className="space-y-10 animate-fade-in">
                  
                  {/* Top Header Banner */}
                  <div className="p-8 rounded-3xl bg-dark-900 border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase font-bold">
                          13+ Hours Live Zoom Lectures
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {ecosystemData.fullStackAcademy.totalVideos} Available
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Full-Stack Web Development Academy
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                        Master HTML5, CSS3, Flexbox, Grid, and Modern React. Access all four recorded 3+ hour Zoom intensive workshops and over 37 targeted topic breakdowns below.
                      </p>
                    </div>

                    <a
                      href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all shrink-0"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Join Live Mentorship Session</span>
                    </a>
                  </div>

                  {/* INTERACTIVE VIDEO THEATER PLAYER */}
                  <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                          <MonitorPlay className="w-4 h-4" /> Now Playing in Theater Player
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                          {activeDevVideo.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 font-mono">
                          {activeDevVideo.duration && `Duration: ${activeDevVideo.duration} • `}
                          {activeDevVideo.description || 'Interactive lecture breakdown from the Nexa Full-Stack curriculum.'}
                        </p>
                      </div>

                      <a
                        href={activeDevVideo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start sm:self-auto"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Open on YouTube (New Tab)</span>
                      </a>
                    </div>

                    {/* Responsive Video Frame */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                      <iframe
                        src={`https://www.youtube.com/embed/${activeDevVideo.videoId}`}
                        title={activeDevVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* COURSE PLAYLIST & CATEGORY SELECTOR */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        <Layers className="w-5 h-5 text-cyan-400" />
                        Complete Course Library & Zoom Recordings
                      </h4>
                      <span className="text-xs font-mono text-cyan-400">Click any lesson to load into player</span>
                    </div>

                    {/* Playlist Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
                      <button
                        onClick={() => setDevVideoCategory('master')}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                          devVideoCategory === 'master' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-300 border border-slate-800'
                        }`}
                      >
                        🎥 Master Zoom Workshops (4 Large Sessions)
                      </button>

                      <button
                        onClick={() => setDevVideoCategory('html-subs')}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                          devVideoCategory === 'html-subs' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-300 border border-slate-800'
                        }`}
                      >
                        📄 HTML Topic Breakdown (16 Lessons)
                      </button>

                      <button
                        onClick={() => setDevVideoCategory('css-basics')}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                          devVideoCategory === 'css-basics' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-300 border border-slate-800'
                        }`}
                      >
                        🎨 CSS Basics & Box Model (9 Lessons)
                      </button>

                      <button
                        onClick={() => setDevVideoCategory('css-props')}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                          devVideoCategory === 'css-props' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-300 border border-slate-800'
                        }`}
                      >
                        ⚡ CSS Properties, Flexbox & Grid (13 Lessons)
                      </button>

                      <button
                        onClick={() => setDevVideoCategory('roadmap')}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                          devVideoCategory === 'roadmap' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-300 border border-slate-800'
                        }`}
                      >
                        🗺️ 12-Week Full Roadmap
                      </button>
                    </div>

                    {/* PLAYLIST ITEMS: 1. MASTER ZOOM WORKSHOPS */}
                    {devVideoCategory === 'master' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                        {ecosystemData.fullStackAcademy.masterLectures.map((item) => {
                          const isPlaying = activeDevVideo.videoId === item.videoId;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setActiveDevVideo(item)}
                              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                                isPlaying
                                  ? 'bg-dark-900 border-cyan-500 shadow-xl shadow-cyan-950/30'
                                  : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold">
                                    {item.badge}
                                  </span>
                                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                    {item.duration}
                                  </span>
                                </div>
                                <h5 className="text-base font-bold text-white mt-1 group-hover:text-cyan-300">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                <span className={`text-xs font-bold flex items-center gap-1.5 ${
                                  isPlaying ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                                }`}>
                                  <Play className="w-3.5 h-3.5" />
                                  {isPlaying ? 'Currently Playing in Player' : 'Play in Theater Player'}
                                </span>
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                                >
                                  <span>YouTube</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* PLAYLIST ITEMS: 2. HTML SUB-VIDEOS */}
                    {devVideoCategory === 'html-subs' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in">
                        {ecosystemData.fullStackAcademy.htmlSubVideos.map((item, idx) => {
                          const isPlaying = activeDevVideo.videoId === item.videoId;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setActiveDevVideo({
                                ...item,
                                duration: "Topic Lesson",
                                description: `In-depth breakdown of ${item.title} from the HTML Zoom Masterclass.`
                              })}
                              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                isPlaying
                                  ? 'bg-dark-900 border-cyan-500 shadow-md'
                                  : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] font-mono text-cyan-400">Lesson {idx + 1}</span>
                                <h6 className="text-xs font-bold text-white mt-1 leading-snug">{item.title}</h6>
                              </div>
                              <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                                <span className={`flex items-center gap-1 font-semibold ${
                                  isPlaying ? 'text-cyan-400' : 'text-slate-400'
                                }`}>
                                  <Play className="w-3 h-3" /> {isPlaying ? 'Playing' : 'Play'}
                                </span>
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-slate-500 hover:text-cyan-400"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* PLAYLIST ITEMS: 3. CSS BASICS SUB-VIDEOS */}
                    {devVideoCategory === 'css-basics' && (
                      <div className="space-y-4 animate-fade-in">
                        {/* Recommended Special Video Card */}
                        <div
                          onClick={() => setActiveDevVideo({
                            ...ecosystemData.fullStackAcademy.recommendedCssVideo,
                            description: "Recommended extra video lecture covering clean CSS architecture and design best practices."
                          })}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                            activeDevVideo.videoId === ecosystemData.fullStackAcademy.recommendedCssVideo.videoId
                              ? 'bg-dark-900 border-amber-500 shadow-xl'
                              : 'bg-amber-950/20 border-amber-800/40 hover:border-amber-500/60'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                              <Star className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Staff Pick</span>
                              <h5 className="text-sm font-bold text-white">{ecosystemData.fullStackAcademy.recommendedCssVideo.title}</h5>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                            <Play className="w-3.5 h-3.5" /> Play Recommended Video
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {ecosystemData.fullStackAcademy.cssBasicsSubVideos.map((item, idx) => {
                            const isPlaying = activeDevVideo.videoId === item.videoId;
                            return (
                              <div
                                key={item.id}
                                onClick={() => setActiveDevVideo({
                                  ...item,
                                  duration: "CSS Lesson",
                                  description: `Targeted CSS breakdown of ${item.title}.`
                                })}
                                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                  isPlaying
                                    ? 'bg-dark-900 border-cyan-500 shadow-md'
                                    : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                                }`}
                              >
                                <div>
                                  <span className="text-[10px] font-mono text-cyan-400">Lesson {idx + 1}</span>
                                  <h6 className="text-xs font-bold text-white mt-1 leading-snug">{item.title}</h6>
                                </div>
                                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                                  <span className={`flex items-center gap-1 font-semibold ${
                                    isPlaying ? 'text-cyan-400' : 'text-slate-400'
                                  }`}>
                                    <Play className="w-3 h-3" /> {isPlaying ? 'Playing' : 'Play'}
                                  </span>
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-slate-500 hover:text-cyan-400"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* PLAYLIST ITEMS: 4. CSS PROPERTIES SUB-VIDEOS */}
                    {devVideoCategory === 'css-props' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in">
                        {ecosystemData.fullStackAcademy.cssPropertiesSubVideos.map((item, idx) => {
                          const isPlaying = activeDevVideo.videoId === item.videoId;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setActiveDevVideo({
                                ...item,
                                duration: "CSS Property Lesson",
                                description: `In-depth exploration of ${item.title} with layout examples.`
                              })}
                              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                isPlaying
                                  ? 'bg-dark-900 border-cyan-500 shadow-md'
                                  : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] font-mono text-cyan-400">Property {idx + 1}</span>
                                <h6 className="text-xs font-bold text-white mt-1 leading-snug">{item.title}</h6>
                              </div>
                              <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                                <span className={`flex items-center gap-1 font-semibold ${
                                  isPlaying ? 'text-cyan-400' : 'text-slate-400'
                                }`}>
                                  <Play className="w-3 h-3" /> {isPlaying ? 'Playing' : 'Play'}
                                </span>
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-slate-500 hover:text-cyan-400"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* PLAYLIST ITEMS: 5. ROADMAP */}
                    {devVideoCategory === 'roadmap' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
                        {ecosystemData.fullStackAcademy.advancedTracks.map((trk) => (
                          <div key={trk.step} className="p-6 rounded-2xl bg-dark-900 border border-slate-800 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono font-bold text-cyan-400">{trk.step}</span>
                                <span className="text-[10px] font-mono text-slate-400">{trk.duration}</span>
                              </div>
                              <h5 className="text-sm font-bold text-white mb-2">{trk.title}</h5>
                              <p className="text-xs text-slate-400 leading-relaxed">{trk.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* 3. K-12 ACADEMIC SCHOLARS PORTAL WINDOW                       */}
              {/* ------------------------------------------------------------- */}
              {selectedServiceId === 'k12-scholars' && (
                <div className="space-y-10">
                  <div className="p-8 rounded-3xl bg-dark-900 border border-indigo-500/30 shadow-2xl">
                    <span className="text-xs font-mono px-3 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 uppercase font-bold">
                      Addis Ababa University Honors Scholar Mentors
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                      K-12 Academic Scholars Tutoring Network
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                      {ecosystemData.academicTutoring.tagline}
                    </p>
                  </div>

                  {/* Level Selector Tabs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {ecosystemData.academicTutoring.levels.map((lvl) => (
                      <button
                        key={lvl.id}
                        onClick={() => setK12LevelId(lvl.id)}
                        className={`p-5 rounded-2xl border text-left transition-all ${
                          k12LevelId === lvl.id
                            ? 'bg-dark-900 border-indigo-500 shadow-xl'
                            : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-indigo-400 font-bold">{lvl.grades}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{lvl.badge}</span>
                        </div>
                        <h5 className="text-base font-bold text-white">{lvl.name}</h5>
                      </button>
                    ))}
                  </div>

                  {/* Level Detail & Booking Form */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-6">
                      <h4 className="text-2xl font-bold text-white">{activeK12Level.name} Curriculum</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{activeK12Level.description}</p>
                      
                      <div className="space-y-3">
                        <p className="text-xs font-mono uppercase text-slate-400">Subject Coverage:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {activeK12Level.subjects.map((sub, i) => (
                            <div key={i} className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                              <span>{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-6 rounded-3xl bg-dark-900 border border-indigo-500/40">
                      <h5 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        Book Complimentary 30-Min Diagnostic
                      </h5>
                      <p className="text-xs text-slate-400 mb-5">
                        Schedule an online Google Meet session to assess baseline mastery.
                      </p>

                      {bookingSubmitted ? (
                        <div className="p-6 rounded-xl bg-indigo-950 border border-indigo-500 text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-indigo-400 mx-auto" />
                          <p className="text-sm text-white font-bold">Redirecting to Google Meet Calendar...</p>
                        </div>
                      ) : (
                        <form onSubmit={handleK12Booking} className="space-y-4">
                          <div>
                            <label className="text-xs font-mono text-slate-400 uppercase">Student Name or Parent</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Samuel / Parent Contact"
                              value={bookingStudentName}
                              onChange={e => setBookingStudentName(e.target.value)}
                              className="mt-1 w-full px-3 py-2 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-indigo-400 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono text-slate-400 uppercase">Target Grade Level</label>
                            <select
                              value={bookingGrade}
                              onChange={e => setBookingGrade(e.target.value)}
                              className="mt-1 w-full px-3 py-2 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-indigo-400 focus:outline-none"
                            >
                              <option value="Elementary">Grades 1 – 5 (Elementary School)</option>
                              <option value="Middle">Grades 6 – 8 (Middle School)</option>
                              <option value="HighSchool">Grades 9 – 12 (High School / Calculus / Physics)</option>
                            </select>
                          </div>
                          <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-dark-950 font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all"
                          >
                            Confirm & Select Google Meet Slot
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
