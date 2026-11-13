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
  // Forex Trading sub-tab: 'smc-course' (default), 'orientation', 'backtesting', 'calculator'
  const [forexSubTab, setForexSubTab] = useState('smc-course');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // 8-Chapter SMC Master Course State
  const [activeSmcChapterId, setActiveSmcChapterId] = useState('chapter-1');
  const [smcChapterVideos, setSmcChapterVideos] = useState({});
  const [chapterVideoInput, setChapterVideoInput] = useState('');
  const [checkedSmcSteps, setCheckedSmcSteps] = useState({ '01': true, '02': true, '03': true });

  // Chapter 1 Interactive Textbook State
  const [ch1StructureTab, setCh1StructureTab] = useState('bullish'); // 'bullish' vs 'bearish'
  const [ch1FvgTab, setCh1FvgTab] = useState('bullish'); // 'bullish' vs 'bearish'
  const [ch1CheckedSteps, setCh1CheckedSteps] = useState({ '01': true, '02': true });
  const [ch1VocabSearch, setCh1VocabSearch] = useState('');
  const [showCh1VideoOption, setShowCh1VideoOption] = useState(false);

  const getYouTubeEmbedUrl = (rawUrl) => {
    if (!rawUrl) return '';
    if (rawUrl.includes('/embed/')) return rawUrl;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = rawUrl.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : rawUrl;
  };

  const allChapters = ecosystemData.forexAcademy.smcChapters || [];
  const activeChapter = allChapters.find(c => c.id === activeSmcChapterId) || allChapters[0] || {};
  const activeChapterVideoUrl = smcChapterVideos[activeChapter.id] || activeChapter.defaultVideoUrl || '';

  const currentIndex = allChapters.findIndex(c => c.id === activeChapter.id);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  const handleToggleSmcStep = (step) => {
    setCheckedSmcSteps(prev => ({ ...prev, [step]: !prev[step] }));
  };

  const handleSaveChapterVideo = (chapterId, url) => {
    if (url && url.trim()) {
      setSmcChapterVideos(prev => ({ ...prev, [chapterId]: url.trim() }));
      setChapterVideoInput('');
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
                  <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-dark-900 border border-slate-800 w-fit text-xs">
                    <button
                      onClick={() => setForexSubTab('smc-course')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'smc-course' ? 'bg-amber-500 text-dark-950 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>🏛️ SMC Master Course (8 Chapters)</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('orientation')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'orientation' ? 'bg-amber-500 text-dark-950 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>General Trading, Orientation & Price Action</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('backtesting')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'backtesting' ? 'bg-amber-500 text-dark-950 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>Audited Backtest Journal</span>
                    </button>

                    <button
                      onClick={() => setForexSubTab('calculator')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        forexSubTab === 'calculator' ? 'bg-amber-500 text-dark-950 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'
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

                  {/* TAB: SMART MONEY CONCEPTS (SMC) 8-CHAPTER MASTER COURSE */}
                  {(forexSubTab === 'smc-course' || forexSubTab === 'strategy') && (
                    <div className="space-y-10 animate-fade-in">
                      {/* Top Header & Strategy Intro */}
                      <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-mono uppercase font-bold mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Official 8-Chapter Institutional SMC Curriculum</span>
                          </div>
                          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                            Smart Money Concepts (SMC) Master Course
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                            Master institutional price action, liquidity engineering, dealing ranges, and top-down execution chapter by chapter. Aligned with the official Altrady Academy syllabus with dedicated unlisted video theaters for every chapter.
                          </p>
                        </div>

                        {/* Cheatsheet quick download */}
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={handleDownloadCheatsheet}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all shrink-0"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download Full SMC Playbook</span>
                          </button>
                        </div>
                      </div>

                      {/* 8 Chapters Interactive Selector Ribbon / Grid */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                            Select Chapter to Study:
                          </span>
                          <span className="text-xs font-mono text-amber-400 font-bold">
                            Chapter {activeChapter.chapterNumber || 1} of {allChapters.length}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {allChapters.map((chapter) => {
                            const isActive = activeSmcChapterId === chapter.id;
                            const hasVideo = !!smcChapterVideos[chapter.id];

                            return (
                              <button
                                key={chapter.id}
                                onClick={() => {
                                  setActiveSmcChapterId(chapter.id);
                                  setChapterVideoInput('');
                                }}
                                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-[105px] group ${
                                  isActive
                                    ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/10'
                                    : 'bg-dark-900 border-slate-800 hover:border-slate-700 hover:bg-dark-900/80'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                                      isActive
                                        ? 'bg-amber-500 text-dark-950'
                                        : 'bg-dark-950 text-amber-400 border border-amber-900/60'
                                    }`}>
                                      {chapter.badge}
                                    </span>
                                    {hasVideo && (
                                      <span className="w-2 h-2 rounded-full bg-emerald-400" title="Video Connected" />
                                    )}
                                  </div>
                                  <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${
                                    isActive ? 'text-white' : 'text-slate-200 group-hover:text-amber-300'
                                  }`}>
                                    {chapter.title}
                                  </h4>
                                </div>

                                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                                  <span>{chapter.subtitles ? `${chapter.subtitles.length} Subtopics` : 'Core Strategy'}</span>
                                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                                    isActive ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                                  }`} />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* ACTIVE CHAPTER CONTAINER */}
                      {activeChapter && activeChapter.title && (
                        <div className="rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 space-y-8 shadow-2xl">
                          
                          {/* Active Chapter Header & Altrady Reference Link */}
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-amber-400 uppercase font-bold px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800">
                                  {activeChapter.badge} • Official SMC Syllabus
                                </span>
                              </div>
                              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                                {activeChapter.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                                {activeChapter.subtitle}
                              </p>
                            </div>

                            <a
                              href={activeChapter.referenceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start lg:self-auto shrink-0 group"
                            >
                              <span>Altrady Course Reference</span>
                              <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>

                          {/* Active Chapter Overview */}
                          <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                            <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                              Chapter Overview:
                            </span>
                            <p>{activeChapter.overview}</p>
                          </div>

                          {/* CHAPTER 1: W3SCHOOLS-STYLE DEEP INTERACTIVE TEXTBOOK */}
                          {activeChapter.id === 'chapter-1' && (
                            <div className="space-y-10 animate-fade-in">
                              
                              {/* 1. The Core Thesis Banner */}
                              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-dark-950 to-dark-950 border border-amber-500/30 space-y-3">
                                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5" /> Core Institutional Law
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                                  "Price moves to find liquidity."
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                                  This single sentence is the foundation of all Smart Money Concepts. Large institutions cannot enter at market price without slippage destroying their execution. Your objective as an SMC trader is never: <em>"Where should I buy because an indicator says buy?"</em> Instead, your sole focus is:
                                </p>
                                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-amber-500/20 text-amber-300 font-mono text-xs sm:text-sm font-semibold">
                                  {activeChapter.textbookContent?.mainIdeaQuote}
                                </div>
                              </div>

                              {/* 2. Visual Diagram: Institutional vs Retail Order Book */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 01</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">Smart Money vs. Retail Traders</h4>
                                  </div>
                                  <span className="text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1 rounded-full border border-slate-800">
                                    The Volume Problem
                                  </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Retail Card */}
                                  <div className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Retail Trader</span>
                                      <span className="text-[10px] font-mono text-slate-500">Small Position ($1k - $10k)</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1.5 text-center">
                                      <p className="text-cyan-400 font-bold">PRICE ↑</p>
                                      <p className="text-slate-400">BUY (0.1 - 5 Lots)</p>
                                      <p className="text-slate-500 text-[10px]">Zero Market Impact</p>
                                      <div className="w-full border-t border-slate-800 my-2" />
                                      <p className="text-slate-400">Order fills instantly with no slippage</p>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                      {activeChapter.textbookContent?.smartMoneyVsRetail.retail}
                                    </p>
                                  </div>

                                  {/* Institutional Card */}
                                  <div className="p-5 rounded-2xl bg-dark-900 border border-amber-500/30 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-mono text-amber-400 font-bold uppercase">Institutional Bank</span>
                                      <span className="text-[10px] font-mono text-amber-400/80">Massive Position ($10,000,000,000)</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-dark-950 border border-amber-500/20 font-mono text-xs text-amber-300 space-y-1.5 text-center">
                                      <p className="text-red-400 font-bold">MASSIVE SLIPPAGE IF BOUGHT AT ONCE</p>
                                      <p className="text-amber-400 font-bold">$10B BUY ORDER</p>
                                      <p className="text-slate-400 text-[10px]">Requires Opposite Counterpart Orders</p>
                                      <div className="w-full border-t border-slate-800 my-2" />
                                      <p className="text-emerald-400 font-semibold">Solution: Push price to trigger retail stops</p>
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                      {activeChapter.textbookContent?.smartMoneyVsRetail.institutional}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* 3. Visual Diagram: What is Liquidity? (BSL vs SSL) */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 02 & 03</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">Buy-Side (BSL) & Sell-Side (SSL) Liquidity Pools</h4>
                                  </div>
                                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-xs">
                                    {activeChapter.textbookContent?.bslAndSsl.rule}
                                  </div>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                  {activeChapter.textbookContent?.liquidityDefinition.keyExample}
                                </p>

                                {/* Interactive Visual Chart: BSL and SSL Pools */}
                                <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-6 font-mono text-xs">
                                  {/* BSL Pool */}
                                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/40 space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-red-400 font-bold flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                                        BUY-SIDE LIQUIDITY (BSL) — ABOVE SWING HIGHS
                                      </span>
                                      <span className="text-[10px] text-red-300/80 bg-red-950/60 px-2 py-0.5 rounded border border-red-800">
                                        RESTING BUY ORDERS
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-slate-400">
                                      {activeChapter.textbookContent?.bslAndSsl.bsl}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-[10px] text-red-300 pt-1 border-t border-red-900/40">
                                      <span>● Short Stop Losses (Buy Orders)</span>
                                      <span>•</span>
                                      <span>● Breakout Buy Stops</span>
                                    </div>
                                  </div>

                                  {/* Candlestick Wave Representation */}
                                  <div className="py-6 px-4 rounded-xl bg-dark-950 border border-slate-800 flex flex-col items-center justify-center space-y-4">
                                    <div className="text-slate-500 text-[10px]">── [ PRICE ACTION DEALING SWING ] ──</div>
                                    <div className="w-full flex items-center justify-around text-center text-xs">
                                      <div className="space-y-1">
                                        <span className="text-slate-500 text-[10px]">Origination</span>
                                        <div className="w-3 h-12 bg-emerald-500/80 mx-auto rounded-sm" />
                                      </div>
                                      <div className="space-y-1">
                                        <span className="text-red-400 font-bold text-xs">Swing High (BSL Above)</span>
                                        <div className="w-3 h-20 bg-emerald-500 mx-auto rounded-sm relative">
                                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-red-400" />
                                        </div>
                                      </div>
                                      <div className="space-y-1">
                                        <span className="text-slate-400 text-[10px]">Retracement</span>
                                        <div className="w-3 h-14 bg-red-500/80 mx-auto rounded-sm" />
                                      </div>
                                      <div className="space-y-1">
                                        <span className="text-emerald-400 font-bold text-xs">Swing Low (SSL Below)</span>
                                        <div className="w-3 h-16 bg-red-500 mx-auto rounded-sm relative">
                                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-emerald-400" />
                                        </div>
                                      </div>
                                      <div className="space-y-1">
                                        <span className="text-cyan-400 text-[10px]">Expansion</span>
                                        <div className="w-3 h-24 bg-emerald-500 mx-auto rounded-sm" />
                                      </div>
                                    </div>
                                  </div>

                                  {/* SSL Pool */}
                                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-emerald-400 font-bold flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        SELL-SIDE LIQUIDITY (SSL) — BELOW SWING LOWS
                                      </span>
                                      <span className="text-[10px] text-emerald-300/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                                        RESTING SELL ORDERS
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-slate-400">
                                      {activeChapter.textbookContent?.bslAndSsl.ssl}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 pt-1 border-t border-emerald-900/40">
                                      <span>● Long Stop Losses (Sell Orders)</span>
                                      <span>•</span>
                                      <span>● Breakout Sell Stops</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* 4. Visual Diagram: The Anatomy of a Liquidity Sweep */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div>
                                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 04 & 05</span>
                                  <h4 className="text-xl font-bold text-white mt-0.5">The Anatomy of a Liquidity Sweep</h4>
                                  <p className="text-xs text-slate-400 mt-1">
                                    How institutions trigger stops and reverse the market in 6 sequential steps:
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {activeChapter.textbookContent?.liquiditySweepSequence.map((item) => (
                                    <div key={item.step} className="p-4 rounded-2xl bg-dark-900 border border-slate-800 space-y-1.5">
                                      <span className="text-xs font-mono font-bold text-amber-400">Step {item.step}</span>
                                      <h5 className="text-xs font-bold text-white">{item.label}</h5>
                                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                  ))}
                                </div>

                                {/* Long Wick Secret Card */}
                                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div className="space-y-1">
                                    <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-2">
                                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                                      {activeChapter.textbookContent?.sweepWarning}
                                    </span>
                                    <p className="text-xs text-slate-300 mt-1">
                                      {activeChapter.textbookContent?.candleWickSecret}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* 5. Market Structure: Bullish vs Bearish */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 07 & 08</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">Reading Market Structure</h4>
                                  </div>

                                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800">
                                    <button
                                      onClick={() => setCh1StructureTab('bullish')}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                                        ch1StructureTab === 'bullish' ? 'bg-emerald-500 text-dark-950' : 'text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      Bullish (HH / HL)
                                    </button>
                                    <button
                                      onClick={() => setCh1StructureTab('bearish')}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                                        ch1StructureTab === 'bearish' ? 'bg-red-500 text-dark-950' : 'text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      Bearish (LH / LL)
                                    </button>
                                  </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                                  {ch1StructureTab === 'bullish' ? (
                                    <div className="space-y-4 font-mono text-xs">
                                      <div className="flex items-center justify-between text-emerald-400 font-bold">
                                        <span>BULLISH UPTREND SEQUENCE:</span>
                                        <span>Low → High → Higher Low (HL) → Higher High (HH)</span>
                                      </div>
                                      <div className="p-6 rounded-xl bg-dark-950 border border-slate-800 text-center space-y-2">
                                        <div className="flex items-end justify-around h-32 px-4">
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-slate-500">Low</span><div className="w-2.5 h-6 bg-slate-600 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-emerald-400">High</span><div className="w-2.5 h-16 bg-emerald-500 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-amber-400">HL 01</span><div className="w-2.5 h-10 bg-emerald-400 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-emerald-400 font-bold">HH 01</span><div className="w-2.5 h-24 bg-emerald-500 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-amber-400">HL 02</span><div className="w-2.5 h-16 bg-emerald-400 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-emerald-400 font-bold">HH 02</span><div className="w-2.5 h-32 bg-emerald-500 rounded-t" /></div>
                                        </div>
                                      </div>
                                      <p className="text-slate-400 text-xs">
                                        {activeChapter.textbookContent?.marketStructure.bullish}
                                      </p>
                                    </div>
                                  ) : (
                                    <div className="space-y-4 font-mono text-xs">
                                      <div className="flex items-center justify-between text-red-400 font-bold">
                                        <span>BEARISH DOWNTREND SEQUENCE:</span>
                                        <span>High → Low → Lower High (LH) → Lower Low (LL)</span>
                                      </div>
                                      <div className="p-6 rounded-xl bg-dark-950 border border-slate-800 text-center space-y-2">
                                        <div className="flex items-end justify-around h-32 px-4">
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-slate-500">High</span><div className="w-2.5 h-32 bg-slate-600 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-red-400">Low</span><div className="w-2.5 h-16 bg-red-500 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-amber-400">LH 01</span><div className="w-2.5 h-24 bg-red-400 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-red-400 font-bold">LL 01</span><div className="w-2.5 h-10 bg-red-500 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-amber-400">LH 02</span><div className="w-2.5 h-16 bg-red-400 rounded-t" /></div>
                                          <div className="flex flex-col items-center"><span className="text-[10px] text-red-400 font-bold">LL 02</span><div className="w-2.5 h-6 bg-red-500 rounded-t" /></div>
                                        </div>
                                      </div>
                                      <p className="text-slate-400 text-xs">
                                        {activeChapter.textbookContent?.marketStructure.bearish}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* 6. Visual Diagram: The Basic SMC Reversal Model */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div>
                                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 11 & 12</span>
                                  <h4 className="text-xl font-bold text-white mt-0.5">The Basic SMC Reversal Model</h4>
                                  <p className="text-xs text-slate-400 mt-1">
                                    Memorize this 4-step sequence — the most important drawing in Chapter 1:
                                  </p>
                                </div>

                                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center font-mono font-bold text-amber-300 text-xs sm:text-sm">
                                  {activeChapter.textbookContent?.reversalModel.sequence}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                  <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-red-400">01. The Sweep</span>
                                    <p className="text-xs text-slate-300">Price moves below an obvious swing low (SSL) with a long wick, triggering retail sell stops.</p>
                                  </div>
                                  <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-amber-400">02. Structure Break</span>
                                    <p className="text-xs text-slate-300">Price surges upward and candle body closes above the previous Lower High (BOS / MSS).</p>
                                  </div>
                                  <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-cyan-400">03. The Retest</span>
                                    <p className="text-xs text-slate-300">Price pulls back calmly to retest the newly formed Fair Value Gap (FVG) or Order Block.</p>
                                  </div>
                                  <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-emerald-400">04. Entry & Target</span>
                                    <p className="text-xs text-slate-300">Enter long position. Stop loss placed beyond sweep wick extreme. Target opposing BSL pool.</p>
                                  </div>
                                </div>
                              </div>

                              {/* 7. Fair Value Gap (FVG) Visualizer */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 16, 17 & 18</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">Fair Value Gap (FVG) Anatomy</h4>
                                    <p className="text-xs text-slate-400 mt-1">
                                      A 3-candle imbalance where Candle 1 and Candle 3 leave an unfilled void around Candle 2:
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800">
                                    <button
                                      onClick={() => setCh1FvgTab('bullish')}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                                        ch1FvgTab === 'bullish' ? 'bg-emerald-500 text-dark-950' : 'text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      Bullish FVG
                                    </button>
                                    <button
                                      onClick={() => setCh1FvgTab('bearish')}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                                        ch1FvgTab === 'bearish' ? 'bg-red-500 text-dark-950' : 'text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      Bearish FVG
                                    </button>
                                  </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                                  {ch1FvgTab === 'bullish' ? (
                                    <div className="space-y-4 font-mono text-xs">
                                      <div className="flex items-center justify-between text-emerald-400 font-bold">
                                        <span>BULLISH 3-CANDLE IMBALANCE:</span>
                                        <span>High of Candle 1 &lt; Low of Candle 3</span>
                                      </div>

                                      {/* Visual Candlestick Gap */}
                                      <div className="p-6 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center gap-8 text-center">
                                        {/* Candle 1 */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-slate-400">Candle 1</span>
                                          <div className="w-8 h-16 bg-slate-700 mx-auto rounded-sm relative">
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-400" />
                                            <div className="absolute -top-3 right-0 text-[9px] text-amber-400 font-bold whitespace-nowrap">
                                              High of 1 ──►
                                            </div>
                                          </div>
                                        </div>

                                        {/* FVG Highlighted Zone */}
                                        <div className="px-4 py-6 rounded-lg bg-emerald-950/40 border border-dashed border-emerald-500/60 text-emerald-300 font-bold text-center space-y-1">
                                          <span className="text-[11px] block">◄── BULLISH FVG ──►</span>
                                          <span className="text-[9px] text-emerald-400 font-normal">50% CE (Consequent Encroachment)</span>
                                        </div>

                                        {/* Candle 2 (Displacement) */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-emerald-400 font-bold">Candle 2 (Impulse)</span>
                                          <div className="w-10 h-36 bg-emerald-500 mx-auto rounded-sm relative shadow-lg shadow-emerald-500/20">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-emerald-300" />
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-emerald-300" />
                                          </div>
                                        </div>

                                        {/* Candle 3 */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-slate-400">Candle 3</span>
                                          <div className="w-8 h-20 bg-slate-700 mx-auto rounded-sm relative mt-4">
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-400" />
                                            <div className="absolute -bottom-3 left-0 text-[9px] text-amber-400 font-bold whitespace-nowrap">
                                              ◄── Low of 3
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <p className="text-slate-400 text-xs">
                                        {activeChapter.textbookContent?.fvgExplanation.bullish}
                                      </p>
                                    </div>
                                  ) : (
                                    <div className="space-y-4 font-mono text-xs">
                                      <div className="flex items-center justify-between text-red-400 font-bold">
                                        <span>BEARISH 3-CANDLE IMBALANCE:</span>
                                        <span>Low of Candle 1 &gt; High of Candle 3</span>
                                      </div>

                                      <div className="p-6 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center gap-8 text-center">
                                        {/* Candle 1 */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-slate-400">Candle 1</span>
                                          <div className="w-8 h-20 bg-slate-700 mx-auto rounded-sm relative">
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-400" />
                                            <div className="absolute -bottom-3 right-0 text-[9px] text-amber-400 font-bold whitespace-nowrap">
                                              Low of 1 ──►
                                            </div>
                                          </div>
                                        </div>

                                        {/* FVG Highlighted Zone */}
                                        <div className="px-4 py-6 rounded-lg bg-red-950/40 border border-dashed border-red-500/60 text-red-300 font-bold text-center space-y-1">
                                          <span className="text-[11px] block">◄── BEARISH FVG ──►</span>
                                          <span className="text-[9px] text-red-400 font-normal">50% CE (Consequent Encroachment)</span>
                                        </div>

                                        {/* Candle 2 (Displacement) */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-red-400 font-bold">Candle 2 (Impulse)</span>
                                          <div className="w-10 h-36 bg-red-500 mx-auto rounded-sm relative shadow-lg shadow-red-500/20">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-red-300" />
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-red-300" />
                                          </div>
                                        </div>

                                        {/* Candle 3 */}
                                        <div className="space-y-1">
                                          <span className="text-[10px] text-slate-400">Candle 3</span>
                                          <div className="w-8 h-16 bg-slate-700 mx-auto rounded-sm relative -mt-4">
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-400" />
                                            <div className="absolute -top-3 left-0 text-[9px] text-amber-400 font-bold whitespace-nowrap">
                                              ◄── High of 3
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <p className="text-slate-400 text-xs">
                                        {activeChapter.textbookContent?.fvgExplanation.bearish}
                                      </p>
                                    </div>
                                  )}

                                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs font-mono">
                                    ⚠️ {activeChapter.textbookContent?.fvgExplanation.disciplineRule}
                                  </div>
                                </div>
                              </div>

                              {/* 8. Multi-Timeframe Alignment (4H -> 15M) */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div>
                                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 13, 14 & 15</span>
                                  <h4 className="text-xl font-bold text-white mt-0.5">Multi-Timeframe Analysis: 4H to 15M</h4>
                                  <p className="text-xs text-slate-400 mt-1">
                                    {activeChapter.textbookContent?.multiTimeframeAnalysis.concept}
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-amber-400">4-Hour Chart (Higher Timeframe)</span>
                                    <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                                      <li>• 1. Determine overall market structure (HH/HL or LH/LL)</li>
                                      <li>• 2. Mark major BSL above highs & SSL below lows</li>
                                      <li>• 3. Mark fresh Point of Interest (unmitigated FVG / OB)</li>
                                      <li>• 4. <strong>WAIT</strong> — Do not enter on 4H!</li>
                                    </ul>
                                  </div>

                                  <div className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-2">
                                    <span className="text-xs font-mono font-bold text-emerald-400">15-Minute Chart (Lower Timeframe)</span>
                                    <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                                      <li>• 1. Wait for price to enter 4H POI zone</li>
                                      <li>• 2. Identify liquidity sweep with long wick</li>
                                      <li>• 3. Confirm Market Structure Shift (BOS on 15M)</li>
                                      <li>• 4. <strong>EXECUTE</strong> on pullback into 15M FVG</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              {/* 9. TradingView Chart-Drawing Checklist */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 23</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">Your TradingView Chart-Drawing Protocol</h4>
                                    <p className="text-xs text-slate-400 mt-1">When you open a chart, follow this exact 5-step routine before placing any trade:</p>
                                  </div>
                                </div>

                                <div className="space-y-2.5">
                                  {activeChapter.textbookContent?.checklist.map((item) => {
                                    const isDone = !!ch1CheckedSteps[item.step];
                                    return (
                                      <div
                                        key={item.step}
                                        onClick={() => setCh1CheckedSteps(prev => ({ ...prev, [item.step]: !prev[item.step] }))}
                                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                                          isDone ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200' : 'bg-dark-900 border-slate-800 text-slate-400'
                                        }`}
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className={`w-5 h-5 rounded flex items-center justify-center border text-xs font-bold ${
                                            isDone ? 'bg-emerald-500 border-emerald-400 text-dark-950' : 'border-slate-700 bg-dark-950 text-transparent'
                                          }`}>
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                          </div>
                                          <div>
                                            <span className="text-xs font-bold text-white font-mono">{item.step}. {item.name}: </span>
                                            <span className="text-xs text-slate-300">{item.action}</span>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* 10. What You Should NOT Do (3 Red Flags) */}
                              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/40 space-y-4">
                                <h4 className="text-base font-bold text-red-400 flex items-center gap-2">
                                  <AlertTriangle className="w-5 h-5 text-red-400" />
                                  What You Should NOT Do (Beginner Traps)
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {activeChapter.textbookContent?.whatNotToDo.map((flag, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-dark-950 border border-red-900/50 space-y-1">
                                      <strong className="text-xs text-red-300 font-mono block">✕ {flag.rule}</strong>
                                      <p className="text-[11px] text-slate-400 leading-relaxed">{flag.detail}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* 11. SMC Beginner Vocabulary Table */}
                              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">Section 25</span>
                                    <h4 className="text-xl font-bold text-white mt-0.5">SMC Beginner Vocabulary</h4>
                                  </div>
                                  <input
                                    type="text"
                                    placeholder="Search term (e.g. FVG, Sweep, BSL)..."
                                    value={ch1VocabSearch}
                                    onChange={(e) => setCh1VocabSearch(e.target.value)}
                                    className="px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-700 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400 sm:w-64"
                                  />
                                </div>

                                <div className="overflow-x-auto">
                                  <table className="w-full text-left text-xs font-mono">
                                    <thead>
                                      <tr className="border-b border-slate-800 text-slate-400">
                                        <th className="py-2.5 px-3">Term</th>
                                        <th className="py-2.5 px-3">Concept Name</th>
                                        <th className="py-2.5 px-3">Institutional Meaning</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                      {activeChapter.textbookContent?.vocabulary
                                        .filter(v => 
                                          !ch1VocabSearch || 
                                          v.term.toLowerCase().includes(ch1VocabSearch.toLowerCase()) || 
                                          v.name.toLowerCase().includes(ch1VocabSearch.toLowerCase()) ||
                                          v.meaning.toLowerCase().includes(ch1VocabSearch.toLowerCase())
                                        )
                                        .map((v, i) => (
                                          <tr key={i} className="hover:bg-dark-900/50">
                                            <td className="py-2.5 px-3 font-bold text-amber-400 whitespace-nowrap">{v.term}</td>
                                            <td className="py-2.5 px-3 font-semibold text-white whitespace-nowrap">{v.name}</td>
                                            <td className="py-2.5 px-3 text-slate-400 text-[11px]">{v.meaning}</td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* 12. Mental Model Flowchart */}
                              <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-3 font-mono text-xs">
                                <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                                  🧠 The Chapter 1 Mental Model Hierarchy:
                                </span>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px]">
                                  {activeChapter.textbookContent?.mentalModel.map((m, idx) => (
                                    <div key={idx} className="p-2 rounded bg-dark-900 border border-slate-800 text-slate-300 font-semibold">
                                      {m}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Optional Collapsible Chapter 1 Video Connector */}
                              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                <button
                                  onClick={() => setShowCh1VideoOption(!showCh1VideoOption)}
                                  className="text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                                >
                                  <Video className="w-3.5 h-3.5" />
                                  <span>{showCh1VideoOption ? 'Hide Video Connector' : 'Optional: Connect an Unlisted Video for Chapter 1'}</span>
                                </button>
                              </div>

                              {showCh1VideoOption && (
                                <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-3 animate-fade-in">
                                  {activeChapterVideoUrl ? (
                                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(activeChapterVideoUrl)}
                                        title={activeChapter.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                      />
                                    </div>
                                  ) : (
                                    <p className="text-xs text-slate-400 font-mono">No video connected yet. Enter your unlisted link below:</p>
                                  )}
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      placeholder="https://youtu.be/..."
                                      value={chapterVideoInput}
                                      onChange={(e) => setChapterVideoInput(e.target.value)}
                                      className="w-full sm:w-80 px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-700 text-slate-200 font-mono text-xs focus:border-amber-400 focus:outline-none"
                                    />
                                    <button
                                      onClick={() => handleSaveChapterVideo(activeChapter.id, chapterVideoInput)}
                                      className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shrink-0 transition-all"
                                    >
                                      Save Video
                                    </button>
                                  </div>
                                </div>
                              )}

                            </div>
                          )}

                          {/* CHAPTERS 2 TO 8: DEDICATED CHAPTER VIDEO THEATER & UNLISTED VIDEO SLOT */}
                          {activeChapter.id !== 'chapter-1' && (
                            <div className="rounded-2xl bg-dark-950 border border-slate-800 p-6 space-y-5">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <Video className="w-4 h-4 text-amber-400" />
                                  <h4 className="text-base font-bold text-white">
                                    {activeChapter.badge} Dedicated Unlisted Video Lecture
                                  </h4>
                                </div>

                                {activeChapterVideoUrl && (
                                  <a
                                    href={activeChapterVideoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                                  >
                                    <span>Watch on YouTube</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>

                              {/* Video Screen or Standby Placeholder */}
                              {activeChapterVideoUrl ? (
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                                  <iframe
                                    src={getYouTubeEmbedUrl(activeChapterVideoUrl)}
                                    title={activeChapter.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                  />
                                </div>
                              ) : (
                                <div className="p-8 sm:p-12 rounded-xl border border-dashed border-amber-500/30 bg-amber-950/10 text-center space-y-3">
                                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
                                    <Video className="w-6 h-6" />
                                  </div>
                                  <h5 className="text-base font-bold text-white">
                                    Unlisted Video Slot: Ready for {activeChapter.title}
                                  </h5>
                                  <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                                    This chapter has an independent video theater slot separate from previous orientation videos. Paste your unlisted YouTube lecture link below to stream it live right inside this container.
                                  </p>
                                </div>
                              )}

                              {/* Unlisted Video URL Connector */}
                              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                  <LinkIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <span className="font-mono text-[11px]">
                                    {activeChapterVideoUrl ? 'Change Unlisted Video URL:' : 'Connect Unlisted YouTube Video for This Chapter:'}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                  <input
                                    type="text"
                                    placeholder="Paste unlisted YouTube link (e.g. https://youtu.be/...)"
                                    value={chapterVideoInput}
                                    onChange={(e) => setChapterVideoInput(e.target.value)}
                                    className="w-full sm:w-80 px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-700 text-slate-200 font-mono text-xs focus:border-amber-400 focus:outline-none"
                                  />
                                  <button
                                    onClick={() => handleSaveChapterVideo(activeChapter.id, chapterVideoInput)}
                                    className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shrink-0 transition-all"
                                  >
                                    Save & Stream
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* SUBTITLES & SUBTOPICS ACCORDION / GRID (FOR CHAPTERS 2-8) */}
                          {activeChapter.id !== 'chapter-1' && activeChapter.subtitles && activeChapter.subtitles.length > 0 && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-amber-400" />
                                <h4 className="text-lg font-bold text-white">
                                  {activeChapter.badge} Subtopics & Structural Breakdown
                                </h4>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {activeChapter.subtitles.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-dark-950 border border-slate-800 flex flex-col justify-between space-y-3"
                                  >
                                    <div>
                                      <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/80">
                                        Subtopic {sub.num || `0${idx + 1}`}
                                      </span>
                                      <h5 className="text-sm font-bold text-white mt-2 leading-snug">
                                        {sub.title}
                                      </h5>
                                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                        {sub.description}
                                      </p>
                                    </div>

                                    {sub.keyPoints && sub.keyPoints.length > 0 && (
                                      <div className="pt-3 border-t border-slate-800 space-y-1.5">
                                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">
                                          Key Takeaways:
                                        </span>
                                        {sub.keyPoints.map((pt, pIdx) => (
                                          <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                                            <span className="text-amber-400 font-bold shrink-0">•</span>
                                            <span>{pt}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CHAPTER-SPECIFIC SPECIALIZED TOOLS */}
                          {/* ================================================================= */}
                          {/* CHAPTER 6: SIDEWAYS MARKET VISUALIZERS                            */}
                          {/* ================================================================= */}
                          {activeChapter.id === 'chapter-6' && activeChapter.whatIsARange && (
                            <div className="space-y-6 pt-6 border-t border-slate-800">
                              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                Chapter 6 Interactive Strategy Visualizers
                              </h4>

                              {/* Dealing Range Visual Graphic Container */}
                              <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs font-mono">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <strong className="text-red-300">RANGE HIGH</strong>
                                  </div>
                                  <span className="text-red-300 font-bold">Buy-Side Liquidity (BSL) resting above</span>
                                </div>

                                <div className="px-4 py-3 rounded-lg bg-red-950/10 border border-dashed border-red-900/40 text-center text-xs font-mono text-red-400">
                                  ▲ PREMIUM ZONE (&gt; 0.5) — Institutional Expensive Pricing • Look Exclusively for Sells / Upthrust Sweeps
                                </div>

                                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs font-mono">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    <strong className="text-amber-300">EQUILIBRIUM (0.5 MIDPOINT)</strong>
                                  </div>
                                  <span className="text-amber-300">Fair Price • Zero Statistical Edge (Skip The Middle)</span>
                                </div>

                                <div className="px-4 py-3 rounded-lg bg-emerald-950/10 border border-dashed border-emerald-900/40 text-center text-xs font-mono text-emerald-400">
                                  ▼ DISCOUNT ZONE (&lt; 0.5) — Institutional Cheap Pricing • Look Exclusively for Buys / Spring Sweeps
                                </div>

                                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs font-mono">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    <strong className="text-emerald-300">RANGE LOW</strong>
                                  </div>
                                  <span className="text-emerald-300 font-bold">Sell-Side Liquidity (SSL) resting below</span>
                                </div>
                              </div>

                              {/* Accumulation vs Distribution Table */}
                              {activeChapter.accumulationVsDistribution && (
                                <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
                                  <h5 className="text-sm font-bold text-white">Accumulation vs. Distribution</h5>
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs font-mono">
                                      <thead>
                                        <tr className="border-b border-slate-800 text-slate-400">
                                          <th className="py-2.5 px-3">Metric</th>
                                          <th className="py-2.5 px-3 text-emerald-400">Accumulation</th>
                                          <th className="py-2.5 px-3 text-red-400">Distribution</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                        {activeChapter.accumulationVsDistribution.map((row, i) => (
                                          <tr key={i}>
                                            <td className="py-2.5 px-3 font-bold text-white">{row.aspect}</td>
                                            <td className="py-2.5 px-3 text-emerald-300">{row.accumulation}</td>
                                            <td className="py-2.5 px-3 text-red-300">{row.distribution}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* ================================================================= */}
                          {/* CHAPTER 7: PREMIUM & DISCOUNT ZONE MATRIX                         */}
                          {/* ================================================================= */}
                          {activeChapter.id === 'chapter-7' && activeChapter.zonesTable && (
                            <div className="space-y-6 pt-6 border-t border-slate-800">
                              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                Chapter 7 Mathematical Zone Matrix & Timeframe Alignment
                              </h4>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
                                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">Mathematical Zone Matrix</span>
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs font-mono">
                                      <thead>
                                        <tr className="border-b border-slate-800 text-slate-400">
                                          <th className="py-2.5 px-3">Zone</th>
                                          <th className="py-2.5 px-3">Level</th>
                                          <th className="py-2.5 px-3">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                        {activeChapter.zonesTable.map((z, idx) => (
                                          <tr key={idx}>
                                            <td className="py-2.5 px-3 font-bold text-white">{z.zone}</td>
                                            <td className="py-2.5 px-3 text-slate-400">{z.rangePosition}</td>
                                            <td className={`py-2.5 px-3 font-bold ${
                                              idx === 0 ? 'text-red-400' : idx === 1 ? 'text-amber-400' : 'text-emerald-400'
                                            }`}>{z.action}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                  <p className="text-xs text-slate-400 font-mono mt-2">
                                    🎯 {activeChapter.optimalTradeEntry}
                                  </p>
                                </div>

                                {activeChapter.multiTimeframeSyncing && (
                                  <div className="p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
                                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">Multi-Timeframe Alignment</span>
                                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs">
                                      🔑 {activeChapter.multiTimeframeSyncing.goldenRule}
                                    </div>
                                    <div className="space-y-2 mt-2">
                                      {activeChapter.multiTimeframeSyncing.roles.map((r, i) => (
                                        <div key={i} className="text-xs text-slate-300">
                                          <strong className="text-amber-400">{r.timeframe}:</strong> {r.purpose}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* ================================================================= */}
                          {/* CHAPTER 8: 10-STEP TOP-DOWN SMC CHECKLIST                         */}
                          {/* ================================================================= */}
                          {activeChapter.id === 'chapter-8' && activeChapter.checklistTopDown && (
                            <div className="space-y-6 pt-6 border-t border-slate-800">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    Interactive 10-Step Top-Down SMC Analysis Checklist
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
                                {activeChapter.checklistTopDown.map((item) => {
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
                                        <span className="font-bold text-xs text-white">
                                          {item.step}. {item.name}
                                        </span>
                                        <p className="text-[11px] text-slate-400 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* MEMORY TRICKS FLASHCARDS */}
                          {activeChapter.memoryTricks && activeChapter.memoryTricks.length > 0 && (
                            <div className="space-y-3 pt-6 border-t border-slate-800">
                              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                                Chapter {activeChapter.chapterNumber} Institutional Memory Tricks:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {activeChapter.memoryTricks.map((trick, i) => (
                                  <div key={i} className="p-4 rounded-xl bg-dark-950 border border-amber-500/20 text-xs text-amber-300 font-mono font-semibold flex items-center gap-2">
                                    <span>🧠</span>
                                    <span>{trick}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CHAPTER PROGRESSION FOOTER (PREV / NEXT) */}
                          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                            {prevChapter ? (
                              <button
                                onClick={() => {
                                  setActiveSmcChapterId(prevChapter.id);
                                  setChapterVideoInput('');
                                }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all"
                              >
                                <ArrowLeft className="w-4 h-4 text-amber-400" />
                                <span>Previous: {prevChapter.badge}</span>
                              </button>
                            ) : (
                              <div />
                            )}

                            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                              Chapter {activeChapter.chapterNumber} of {allChapters.length}
                            </span>

                            {nextChapter ? (
                              <button
                                onClick={() => {
                                  setActiveSmcChapterId(nextChapter.id);
                                  setChapterVideoInput('');
                                }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 text-xs font-bold transition-all shadow-lg shadow-amber-500/20"
                              >
                                <span>Next: {nextChapter.badge}</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <div />
                            )}
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
