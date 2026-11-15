import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  X, 
  Activity, 
  TrendingUp, 
  Check, 
  Compass, 
  GraduationCap, 
  BarChart2, 
  FileDown
} from 'lucide-react';
import { smcChapter1FullData } from '../data/smcChapter1FullData';
import { smcChapter2FullData } from '../data/smcChapter2FullData';
import { smcChapter3FullData } from '../data/smcChapter3FullData';
import { smcChapter4FullData } from '../data/smcChapter4FullData';
import { chapterFiguresMap } from '../data/smcChapterFiguresMap';
import InstitutionalRealFigureViewer from './InstitutionalRealFigureViewer';
import InstitutionalContentRenderer from './InstitutionalContentRenderer';

// Interactive specialized simulators
import SMCChapter1BacktestingGame from './SMCChapter1BacktestingGame';
import SMCChapter3BacktestingGame from './SMCChapter3BacktestingGame';
import SMCChapter4BacktestingGame from './SMCChapter4BacktestingGame';
import InstitutionalVsRetailShowdown from './InstitutionalVsRetailShowdown';
import WickVsBodyShowdown from './WickVsBodyShowdown';
import MarketStateShowdown from './MarketStateShowdown';
import EquilibriumZoneCalculator from './EquilibriumZoneCalculator';
import InternalVsExternalLiquidityShowdown from './InternalVsExternalLiquidityShowdown';
import LiquidityPoolSweepSimulator from './LiquidityPoolSweepSimulator';

export default function W3SchoolsSMCAcademy({ 
  initialChapterId = 'chapter-1',
  onBackToOverview
}) {
  // Navigation Hierarchy: 'chapters' (Level 1) | 'subtopics' (Level 2) | 'reader' (Level 3)
  const [viewLevel, setViewLevel] = useState('chapters');
  const [activeChapterId, setActiveChapterId] = useState(initialChapterId);
  const [activeSectionId, setActiveSectionId] = useState(null);

  // Search & Reader Preferences
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState('base'); // 'sm', 'base', 'lg', 'xl'
  const [themeMode, setThemeMode] = useState('dark'); // 'dark', 'light', 'sepia'
  const [isExportingWord, setIsExportingWord] = useState(false);

  // Sync prop changes
  useEffect(() => {
    if (initialChapterId) {
      setActiveChapterId(initialChapterId);
    }
  }, [initialChapterId]);

  const chaptersMap = {
    'chapter-1': smcChapter1FullData,
    'chapter-2': smcChapter2FullData,
    'chapter-3': smcChapter3FullData,
    'chapter-4': smcChapter4FullData
  };

  const courseChapters = [
    { 
      id: 'chapter-1', 
      num: '01', 
      title: '1. What Are Smart Money Concepts (SMC)', 
      isReady: true, 
      subCount: 15,
      description: 'The foundational masterclass on institutional order flow, bank liquidity sweeps, manipulation tactics, and algorithmic price delivery.',
      keyPoints: ['The $10 Billion Order Problem', 'Liquidity Pools (BSL & SSL)', 'Order Blocks & Imbalances', 'Stop Hunting Mechanics']
    },
    { 
      id: 'chapter-2', 
      num: '02', 
      title: '2. How to Identify Structural Swing Points', 
      isReady: true, 
      subCount: 14,
      description: 'Mastering the foundational skill of SMC: The Three-Candle Rule, Red Line Validation & Range Mechanics.',
      keyPoints: ['3-Candle Anatomy Rule', 'Red Line Validation Test', 'Wick vs Body Close Break', 'Internal vs Structural Swings']
    },
    { 
      id: 'chapter-3', 
      num: '03', 
      title: '3. How to Identify Market Structure', 
      isReady: true, 
      subCount: 16,
      description: 'Reading the skeleton of price: Break of Structure (BOS), Change of Character (CHoCH), Fake CHoCH, Range Boundaries, and Premium/Discount Zones.',
      keyPoints: ['Break of Structure (BOS)', 'Two-Step CHoCH Confirmation', 'Fake CHoCH Mechanics', 'Optimal Trade Entry (OTE)']
    },
    { 
      id: 'chapter-4', 
      num: '04', 
      title: '4. Liquidity & Price Movement', 
      isReady: true, 
      subCount: 10,
      description: 'Interbank liquidity pools, Buy-Side vs Sell-Side Liquidity (BSL / SSL), internal vs external range liquidity, and manipulation sweeps.',
      keyPoints: ['External Range Liquidity', 'Internal Range Liquidity', 'Engineering Liquidity', 'Session Highs & Lows Purges']
    },
    { 
      id: 'chapter-5', 
      num: '05', 
      title: '5. POIs, Fibonacci & SMC Strategy', 
      isReady: false, 
      subCount: 11,
      description: 'Points of interest (POI), order blocks, mitigation blocks, and optimal trade entry execution.',
      keyPoints: ['Mitigation Blocks', 'Breaker Blocks', 'Fibonacci Confluence']
    },
    { 
      id: 'chapter-6', 
      num: '06', 
      title: '6. Strategies in a Sideways Market', 
      isReady: false, 
      subCount: 9,
      description: 'Range trading, mean reversion, and trading sideways consolidations with institutional precision.',
      keyPoints: ['Range Extremes', 'Equilibrium 0.5', 'Compression Squeezes']
    },
    { 
      id: 'chapter-7', 
      num: '07', 
      title: '7. Master Premium & Discount Zones', 
      isReady: false, 
      subCount: 8,
      description: 'Algorithmic valuation pricing: buying at discount extremes and distributing in premium zones.',
      keyPoints: ['Discount Buying', 'Premium Selling', 'Central Bank Ranges']
    },
    { 
      id: 'chapter-8', 
      num: '08', 
      title: '8. Applying SMC Strategy in Live Markets', 
      isReady: false, 
      subCount: 10,
      description: 'The 10-step institutional trade execution checklist and trade journal management.',
      keyPoints: ['10-Step Execution', 'Risk-Reward Ratio 1:3+', 'Audited Journaling']
    }
  ];

  const currentChapter = chaptersMap[activeChapterId] || smcChapter1FullData;
  const sections = currentChapter.sections || [];

  // Filter sections by search
  const filteredSections = sections.filter(sec => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      (sec.summary && sec.summary.toLowerCase().includes(q)) ||
      (sec.content && sec.content.toLowerCase().includes(q))
    );
  });

  // Current active sub-topic section for Level 3
  const currentSectionIndex = sections.findIndex(s => s.id === activeSectionId);
  const currentSection = currentSectionIndex >= 0 ? sections[currentSectionIndex] : sections[0] || null;
  const prevSection = currentSectionIndex > 0 ? sections[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sections.length - 1 ? sections[currentSectionIndex + 1] : null;

  // Level Navigation Handlers
  const handleOpenChapter = (chapterId) => {
    setActiveChapterId(chapterId);
    setViewLevel('subtopics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSubtopic = (sectionId) => {
    setActiveSectionId(sectionId);
    setViewLevel('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToChapters = () => {
    setViewLevel('chapters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSubtopics = () => {
    setViewLevel('subtopics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper theme classes
  const getThemeContainerClass = () => {
    switch (themeMode) {
      case 'light': return 'bg-[#f8fafc] text-slate-800 border-slate-200';
      case 'sepia': return 'bg-[#fbf7ee] text-[#433422] border-[#ebdcc7]';
      case 'dark':
      default: return 'bg-[#060913] text-slate-200 border-[#2a2e39]';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xs';
      case 'lg': return 'text-base sm:text-lg';
      case 'xl': return 'text-lg sm:text-xl';
      case 'base':
      default: return 'text-sm sm:text-base';
    }
  };

  // Word & PDF Handlers
  const handlePrintPdf = () => {
    window.print();
  };

  const handleExportWord = () => {
    setIsExportingWord(true);
    setTimeout(() => {
      const blob = new Blob([currentChapter.fullTextRaw || 'Nexa Institutional SMC Curriculum'], { type: 'text/plain;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${currentChapter.title.replace(/[^a-zA-Z0-9]/g, '_')}_MasterBook.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsExportingWord(false);
    }, 400);
  };

  return (
    <div className={`w-full transition-colors duration-200 ${getThemeContainerClass()} rounded-3xl border shadow-2xl overflow-hidden text-left`}>
      
      {/* 1. WALL STREET / BLOOMBERG LIVE MARKET TICKER BANNER */}
      <div className="bg-[#090d16] border-b border-[#2a2e39] px-4 py-2 text-[11px] font-mono flex items-center justify-between overflow-x-auto whitespace-nowrap gap-4 select-none">
        <div className="flex items-center gap-2 text-amber-400 font-bold shrink-0">
          <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          <span>INSTITUTIONAL TICKER:</span>
        </div>
        <div className="flex items-center gap-5 text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">EUR/USD:</span>
            <span className="text-emerald-400 font-bold">1.08542</span>
            <span className="text-emerald-400 text-[10px]">▲ +0.28%</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">GBP/USD:</span>
            <span className="text-emerald-400 font-bold">1.26410</span>
            <span className="text-emerald-400 text-[10px]">▲ +0.41%</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">USD/JPY:</span>
            <span className="text-red-400 font-bold">154.220</span>
            <span className="text-red-400 text-[10px]">▼ -0.35%</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">BTC/USD:</span>
            <span className="text-emerald-400 font-bold">$91,420</span>
            <span className="text-emerald-400 text-[10px]">▲ +2.14%</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">DXY:</span>
            <span className="text-emerald-400 font-bold">104.18</span>
            <span className="text-emerald-400 text-[10px]">▲ +0.08%</span>
          </span>
        </div>
        <div className="text-[10px] text-amber-300/80 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
          IPDA ALGORITHM: CENTRAL BANK DEALING RANGE EXPANSION
        </div>
      </div>

      {/* ===================================================================== */}
      {/* LEVEL 1: ALL RELEASED CHAPTERS OVERVIEW                               */}
      {/* ===================================================================== */}
      {viewLevel === 'chapters' && (
        <div className="p-6 sm:p-10 space-y-8 animate-fade-in">
          
          {/* Header Banner */}
          <div className="space-y-3 pb-6 border-b border-[#2a2e39]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Institutional SMC Curriculum • Wall Street Edition</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Released Chapters: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#f39228] to-amber-500">Smart Money Concepts Strategy</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Select any released chapter below to explore its comprehensive syllabus and access its sub-topics one by one. Chapters 1, 2, 3, and 4 are fully unlocked with verified institutional schematics, rule sets, and interactive market showdowns.
            </p>
          </div>

          {/* Grid of Released Chapters Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseChapters.filter(ch => ch.isReady).map((ch) => (
              <div
                key={ch.id}
                onClick={() => handleOpenChapter(ch.id)}
                className="p-6 sm:p-7 rounded-3xl bg-[#131722] border border-[#2a2e39] hover:border-amber-500/60 transition-all cursor-pointer group flex flex-col justify-between space-y-5 shadow-xl hover:shadow-amber-500/10"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold uppercase">
                      Chapter {ch.num} • Released & Verified
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{ch.subCount} Sub-topics</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {ch.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ch.description}
                  </p>

                  {/* Key Points Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ch.keyPoints.map((pt, pIdx) => (
                      <span key={pIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e2433] text-slate-300 border border-slate-700">
                        • {pt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Comprehensive Dossier + Visual Charts
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenChapter(ch.id);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#f39228] group-hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase font-mono shadow transition-all flex items-center gap-1.5"
                  >
                    <span>Explore Sub-topics</span>
                    <ArrowRight className="w-3.5 h-3.5 text-dark-950 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Roadmap Container */}
          <div className="p-6 rounded-3xl bg-[#090d16] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                Upcoming Curriculum Chapters (5 through 8)
              </span>
              <span className="text-xs font-mono text-amber-400">In Production</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {courseChapters.filter(ch => !ch.isReady).map((ch) => (
                <div key={ch.id} className="p-4 rounded-2xl bg-[#131722]/50 border border-slate-800/80 space-y-1.5 opacity-60">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">
                    Chapter {ch.num} • Upcoming
                  </span>
                  <h4 className="text-xs font-bold text-slate-300 truncate">{ch.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{ch.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ===================================================================== */}
      {/* LEVEL 2: CHAPTER SUB-TOPICS CONTAINER VIEW                            */}
      {/* ===================================================================== */}
      {viewLevel === 'subtopics' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Top Bar with Back Button & Chapter Switcher */}
          <div className="p-4 sm:px-8 bg-[#0d1117] border-b border-[#2a2e39] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBackToChapters}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22] hover:bg-slate-800 text-slate-300 hover:text-white border border-[#2a2e39] text-xs font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#f39228]" />
                <span>← Back to All Released Chapters</span>
              </button>

              <span className="text-xs font-mono text-slate-500 hidden md:inline">|</span>
              <span className="text-xs font-mono text-amber-400 font-bold hidden md:inline">
                {currentChapter.badge}: {currentChapter.title}
              </span>
            </div>

            {/* Quick Chapter Selector & Artifacts */}
            <div className="flex items-center gap-2">
              <select
                value={activeChapterId}
                onChange={(e) => setActiveChapterId(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-[#161b22] border border-[#2a2e39] text-xs font-mono text-white focus:outline-none focus:border-amber-500"
              >
                {courseChapters.filter(c => c.isReady).map(c => (
                  <option key={c.id} value={c.id}>
                    Chapter {c.num}: {c.title.replace(/^\d+\.\s*/, '')}
                  </option>
                ))}
              </select>

              <button
                onClick={handleExportWord}
                className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono flex items-center gap-1.5"
                title="Download complete chapter book"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Canva Book (.doc)</span>
              </button>

              <button
                onClick={handlePrintPdf}
                className="px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono flex items-center gap-1.5"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Chapter Hero Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#131722] border border-amber-500/40 shadow-2xl relative overflow-hidden space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold uppercase">
                  {currentChapter.badge} • Released Institutional Dossier
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Author: {currentChapter.author} • {currentChapter.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {currentChapter.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {currentChapter.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{sections.length} Released Sub-topics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Charts & Schematics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Topic-by-Topic Smooth Access</span>
                </div>
              </div>
            </div>

            {/* Sub-topics Search & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#2a2e39]">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#f39228]" />
                  <span>Chapter Sub-topics ({filteredSections.length} Lessons Available)</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click on any sub-topic container to enter its dedicated lesson reader.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search sub-topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#131722] border border-[#2a2e39] text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-2.5 text-slate-500 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* SUB-TOPICS CONTAINER LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  onClick={() => handleOpenSubtopic(sec.id)}
                  className="p-5 rounded-2xl bg-[#131722] border border-[#2a2e39] hover:border-amber-500/60 transition-all cursor-pointer group flex flex-col justify-between space-y-3 shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                        Sub-topic {sec.num || `${currentChapter.num}.${idx + 1}`}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                        Read Lesson &rarr;
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {sec.title}
                    </h4>

                    {sec.summary && (
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {sec.summary}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-[11px] text-slate-500">
                      {sec.table ? '📊 Table Included' : sec.figureId ? '📈 Schematic' : '📖 Theory & Rules'}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenSubtopic(sec.id);
                      }}
                      className="text-amber-400 font-bold text-xs flex items-center gap-1 group-hover:underline"
                    >
                      <span>Study Sub-topic</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

      {/* ===================================================================== */}
      {/* LEVEL 3: FOCUSED SUB-TOPIC LESSON READER                              */}
      {/* ===================================================================== */}
      {viewLevel === 'reader' && currentSection && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Top Bar with Back Button, Breadcrumb & Sub-topic Switcher */}
          <div className="p-4 sm:px-8 bg-[#0d1117] border-b border-[#2a2e39] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBackToSubtopics}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22] hover:bg-slate-800 text-slate-300 hover:text-white border border-[#2a2e39] text-xs font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#f39228]" />
                <span>← Back to {currentChapter.title.replace(/^\d+\.\s*/, '')} Sub-topics</span>
              </button>

              <span className="text-xs font-mono text-slate-500 hidden lg:inline">|</span>
              <span className="text-xs font-mono text-amber-400 font-bold hidden lg:inline">
                Sub-topic {currentSection.num}: {currentSection.title}
              </span>
            </div>

            {/* Jump to Another Sub-Topic Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={currentSection.id}
                onChange={(e) => handleOpenSubtopic(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-[#161b22] border border-[#2a2e39] text-xs font-mono text-white focus:outline-none focus:border-amber-500 max-w-[200px] sm:max-w-xs truncate"
              >
                {sections.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.num}. {sec.title}
                  </option>
                ))}
              </select>

              {/* Font Resizer */}
              <div className="hidden sm:flex items-center bg-[#161b22] border border-[#2a2e39] rounded-lg p-0.5 text-xs font-mono text-slate-400">
                <button
                  onClick={() => setFontSize(fontSize === 'xl' ? 'lg' : fontSize === 'lg' ? 'base' : 'sm')}
                  className="px-2 py-1 hover:text-white"
                  title="Smaller text"
                >
                  A-
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'xl')}
                  className="px-2 py-1 hover:text-white"
                  title="Larger text"
                >
                  A+
                </button>
              </div>

              {/* Theme Toggles */}
              <div className="flex items-center bg-[#161b22] border border-[#2a2e39] rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => setThemeMode('dark')}
                  className={`px-2 py-1 rounded ${themeMode === 'dark' ? 'bg-[#2a2e39] text-amber-400 font-bold' : 'text-slate-400'}`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setThemeMode('light')}
                  className={`px-2 py-1 rounded ${themeMode === 'light' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-400'}`}
                >
                  Light
                </button>
              </div>
            </div>
          </div>

          {/* Sub-topic Lesson Content Area */}
          <main className={`p-6 sm:p-10 max-w-4xl mx-auto space-y-8 ${getFontSizeClass()}`}>
            
            {/* Sub-topic Header */}
            <div className="space-y-3 pb-6 border-b border-[#2a2e39]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase">
                  {currentChapter.badge} • Sub-topic {currentSection.num} of {sections.length}
                </span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                  {currentChapter.title}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {currentSection.title}
              </h1>

              {currentSection.summary && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border-l-4 border-[#f39228] text-slate-200 text-xs sm:text-sm leading-relaxed space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block">
                    Core Learning Objective & Insight:
                  </span>
                  <p>{currentSection.summary}</p>
                </div>
              )}
            </div>

            {/* Figures for this section if present */}
            {chapterFiguresMap[activeChapterId]?.[currentSection.id] && (
              <div className="space-y-4">
                {chapterFiguresMap[activeChapterId][currentSection.id].map((fig, fIdx) => (
                  <InstitutionalRealFigureViewer
                    key={fIdx}
                    src={fig.src}
                    title={fig.title}
                    caption={fig.caption}
                    figureNum={fig.figNum}
                    rule={fig.rule}
                  />
                ))}
              </div>
            )}

            {/* Structured Table if present */}
            {currentSection.table && currentSection.table.headers && (
              <div className="overflow-x-auto my-6 rounded-2xl border border-[#2a2e39] bg-[#090d16] shadow-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="bg-[#131722] text-amber-400 border-b border-[#2a2e39] font-mono">
                      {currentSection.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 sm:p-4 font-bold uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2a2e39]/60">
                    {currentSection.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-[#090d16]' : 'bg-[#0d1117]'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={`p-3 sm:p-4 ${cIdx === 0 ? 'font-semibold text-white font-mono' : 'text-slate-300'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Main Section Content rendered cleanly */}
            <div className="space-y-6">
              <InstitutionalContentRenderer content={currentSection.content} />
            </div>

            {/* Subsections if present */}
            {currentSection.subsections && currentSection.subsections.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#2a2e39]">
                <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider block">
                  Detailed Sub-Components:
                </span>
                {currentSection.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-[#131722] border border-slate-800 space-y-3">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      {sub.title}
                    </h3>
                    <InstitutionalContentRenderer content={sub.content} />
                  </div>
                ))}
              </div>
            )}

            {/* Specialized Interactive Simulators for Key Sub-Topics */}
            {activeChapterId === 'chapter-1' && (currentSection.num === '09' || currentSection.num === '9' || currentSection.num === '10') && (
              <div className="pt-6 border-t border-slate-800">
                <SMCChapter1BacktestingGame />
              </div>
            )}

            {activeChapterId === 'chapter-2' && (currentSection.num === '08' || currentSection.num === '8' || currentSection.num === '11') && (
              <div className="pt-6 border-t border-slate-800">
                <WickVsBodyShowdown />
              </div>
            )}

            {activeChapterId === 'chapter-3' && (currentSection.num === '02' || currentSection.num === '2' || currentSection.num === '04' || currentSection.num === '4') && (
              <div className="pt-6 border-t border-slate-800">
                <MarketStateShowdown />
              </div>
            )}

            {activeChapterId === 'chapter-3' && (currentSection.num === '07' || currentSection.num === '7') && (
              <div className="pt-6 border-t border-slate-800">
                <EquilibriumZoneCalculator />
              </div>
            )}

            {activeChapterId === 'chapter-4' && (currentSection.num === '02' || currentSection.num === '2' || currentSection.num === '03' || currentSection.num === '3') && (
              <div className="pt-6 border-t border-slate-800">
                <LiquidityPoolSweepSimulator />
              </div>
            )}

            {/* Bottom Sub-topic Navigation Bar */}
            <div className="pt-8 border-t border-[#2a2e39] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              {prevSection ? (
                <button
                  type="button"
                  onClick={() => handleOpenSubtopic(prevSection.id)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#161b22] hover:bg-slate-800 text-slate-300 hover:text-white border border-[#2a2e39] flex items-center justify-center gap-2 transition-all"
                >
                  <ChevronLeft className="w-4 h-4 text-amber-400" />
                  <span className="truncate max-w-[200px]">Prev: {prevSection.title}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleBackToSubtopics}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#161b22] text-slate-400 border border-[#2a2e39]"
                >
                  ← Sub-topics Overview
                </button>
              )}

              <button
                type="button"
                onClick={handleBackToSubtopics}
                className="px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold"
              >
                All Sub-topics
              </button>

              {nextSection ? (
                <button
                  type="button"
                  onClick={() => handleOpenSubtopic(nextSection.id)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold shadow transition-all flex items-center justify-center gap-2"
                >
                  <span className="truncate max-w-[200px]">Next: {nextSection.title}</span>
                  <ChevronRight className="w-4 h-4 text-dark-950" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleBackToChapters}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>✓ Chapter Complete (Next Chapter →)</span>
                </button>
              )}
            </div>

          </main>

        </div>
      )}

    </div>
  );
}
