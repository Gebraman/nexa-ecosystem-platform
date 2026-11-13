import React, { useState, useEffect } from 'react';
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
  Lightbulb, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle, 
  Eye, 
  RefreshCw, 
  Sparkles, 
  Award,
  Layers,
  Check,
  X,
  Maximize2,
  Minimize2,
  FileDown
} from 'lucide-react';
import { smcChapter1FullData } from '../data/smcChapter1FullData';
import { smcChapter2FullData } from '../data/smcChapter2FullData';

export default function W3SchoolsSMCAcademy({ 
  initialChapterId = 'chapter-2',
  onBackToOverview
}) {
  const [activeChapterId, setActiveChapterId] = useState(initialChapterId);
  const [fontSize, setFontSize] = useState('base'); // 'sm', 'base', 'lg', 'xl'
  const [themeMode, setThemeMode] = useState('dark'); // 'dark', 'light', 'sepia'
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Chapter 1 Interactive State
  const [ch1StructureTab, setCh1StructureTab] = useState('bullish');
  const [ch1FvgTab, setCh1FvgTab] = useState('bullish');
  const [ch1CheckedSteps, setCh1CheckedSteps] = useState({ '01': true, '02': true });
  const [ch1VocabFilter, setCh1VocabFilter] = useState('');

  // Chapter 2 "Try It Yourself" Simulator State
  const [simScenario, setSimScenario] = useState('potential-high'); // 'potential-high', 'validated-high', 'sweep', 'break'
  const [simResult, setSimResult] = useState(null);

  // Quiz States for Chapters 1 and 2
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const chaptersMap = {
    'chapter-1': smcChapter1FullData,
    'chapter-2': smcChapter2FullData
  };

  const courseChapters = [
    { id: 'chapter-1', num: '01', title: '1. What Are Smart Money Concepts', isReady: true, subCount: 27 },
    { id: 'chapter-2', num: '02', title: '2. How to Identify Structural Swing Points', isReady: true, subCount: 14 },
    { id: 'chapter-3', num: '03', title: '3. How to Identify Market Structure', isReady: false, subCount: 12 },
    { id: 'chapter-4', num: '04', title: '4. Liquidity & Price Movement', isReady: false, subCount: 10 },
    { id: 'chapter-5', num: '05', title: '5. POIs, Fibonacci & SMC Strategy', isReady: false, subCount: 11 },
    { id: 'chapter-6', num: '06', title: '6. Strategies in a Sideways Market', isReady: false, subCount: 9 },
    { id: 'chapter-7', num: '07', title: '7. Master Premium & Discount Zones', isReady: false, subCount: 8 },
    { id: 'chapter-8', num: '08', title: '8. Applying SMC Strategy in Live Markets', isReady: false, subCount: 10 }
  ];

  const currentChapter = chaptersMap[activeChapterId] || smcChapter2FullData;
  const currentChapterIndex = courseChapters.findIndex(c => c.id === activeChapterId);
  const prevChapterItem = currentChapterIndex > 0 ? courseChapters[currentChapterIndex - 1] : null;
  const nextChapterItem = currentChapterIndex < courseChapters.length - 1 ? courseChapters[currentChapterIndex + 1] : null;

  // Handle Export to Word (.doc)
  const handleExportWord = () => {
    const rawText = currentChapter.fullTextRaw || '';
    const formattedHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${currentChapter.title} - Nexa SMC Academy</title>
        <style>
          body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; line-height: 1.6; color: #1e293b; padding: 40px; }
          h1 { color: #0f172a; border-bottom: 3px solid #f59e0b; padding-bottom: 8px; font-size: 26pt; }
          h2 { color: #1e293b; margin-top: 24px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px; font-size: 18pt; }
          h3 { color: #334155; margin-top: 18px; font-size: 14pt; }
          p { margin: 10px 0; font-size: 11pt; }
          table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 10.5pt; }
          th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
          th { background-color: #f1f5f9; font-weight: bold; }
          blockquote { border-left: 4px solid #f59e0b; padding-left: 14px; color: #475569; font-style: italic; background: #fffbeb; padding: 10px 14px; margin: 14px 0; }
          .badge { background: #fef3c7; color: #92400e; padding: 4px 8px; font-weight: bold; font-size: 9pt; border-radius: 4px; }
          .metadata { font-size: 9.5pt; color: #64748b; margin-bottom: 24px; }
          pre { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; font-family: Consolas, monospace; font-size: 9.5pt; }
        </style>
      </head>
      <body>
        <span class="badge">${currentChapter.badge} • W3Schools SMC Academy</span>
        <h1>${currentChapter.title}</h1>
        <div class="metadata">
          <strong>Author:</strong> ${currentChapter.author} | 
          <strong>Date:</strong> ${currentChapter.date} | 
          <strong>Estimated Read:</strong> ${currentChapter.readTime}
        </div>
        <div>
          ${rawText
            .replace(/\n\n/g, '</p><p>')
            .replace(/# (.*?)\n/g, '<h1>$1</h1>')
            .replace(/## (.*?)\n/g, '<h2>$1</h2>')
            .replace(/### (.*?)\n/g, '<h3>$1</h3>')
            .replace(/> (.*?)\n/g, '<blockquote>$1</blockquote>')
            .replace(/```text([\s\S]*?)```/g, '<pre>$1</pre>')
          }
        </div>
        <hr style="margin-top: 40px; border: 0; border-top: 1px solid #cbd5e1;">
        <p style="font-size: 9pt; color: #94a3b8; text-align: center;">Generated from Nexa Ecosystem W3Schools SMC Academy • Study Material</p>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', formattedHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SMC_${currentChapter.id}_Study_Guide.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle Print to PDF
  const handlePrintPdf = () => {
    window.print();
  };

  // Font Size Classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xs leading-relaxed';
      case 'lg': return 'text-base leading-relaxed';
      case 'xl': return 'text-lg leading-loose';
      case 'base':
      default: return 'text-sm leading-relaxed';
    }
  };

  // Theme Classes
  const getThemeContainerClass = () => {
    switch (themeMode) {
      case 'light':
        return 'bg-slate-50 text-slate-800 border-slate-200';
      case 'sepia':
        return 'bg-[#fbf7ee] text-[#433422] border-[#ebdcc7]';
      case 'dark':
      default:
        return 'bg-dark-900 text-slate-200 border-slate-800';
    }
  };

  const getThemeCardClass = () => {
    switch (themeMode) {
      case 'light':
        return 'bg-white border-slate-200 text-slate-800 shadow-sm';
      case 'sepia':
        return 'bg-[#f4ebd9] border-[#e2d1b8] text-[#3c2f21]';
      case 'dark':
      default:
        return 'bg-dark-950 border-slate-800/80 text-slate-200';
    }
  };

  // Simulator Handler for Chapter 2
  const handleRunSimulator = (scenarioKey) => {
    setSimScenario(scenarioKey);
    switch (scenarioKey) {
      case 'potential-high':
        setSimResult({
          status: 'POTENTIAL ONLY',
          color: 'amber',
          badge: '⚠️ Awaiting Confirmation',
          explanation: 'The 3-candle shape has formed with the middle wick as the highest, but subsequent candles have NOT closed below the red line. Price can continue rising, which would invalidate this high. Do NOT mark this as confirmed structure yet.'
        });
        break;
      case 'validated-high':
        setSimResult({
          status: 'VALIDATED SWING HIGH',
          color: 'emerald',
          badge: '✅ Structural High Confirmed',
          explanation: 'A candle has closed with its BODY below the red line (the lowest point of the swing candle). The swing high is officially confirmed! You now establish this level as Buy-Side Liquidity (BSL).'
        });
        break;
      case 'sweep':
        setSimResult({
          status: 'LIQUIDITY SWEEP (NOT A BREAK)',
          color: 'purple',
          badge: '🧲 Stop Hunt Raid',
          explanation: 'Price spiked past the support/low with a sharp wick, but the candle closed back INSIDE the range. Retail stop losses were triggered and absorbed by Smart Money. This is NOT a break of structure—expect a sharp reversal.'
        });
        break;
      case 'break':
        setSimResult({
          status: 'GENUINE BREAK OF STRUCTURE (BOS)',
          color: 'cyan',
          badge: '💥 Market Structure Shift',
          explanation: 'A full candle closed with its BODY beyond the swing low. The old trading range is now completely broken and invalidated. Find the extreme candle between the two points to mark your new swing.'
        });
        break;
      default:
        setSimResult(null);
    }
  };

  // Filter sections based on search query
  const filteredSections = (currentChapter.sections || []).filter(sec => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      (sec.summary && sec.summary.toLowerCase().includes(q)) ||
      (sec.content && sec.content.toLowerCase().includes(q))
    );
  });

  return (
    <div className={`w-full transition-colors duration-200 ${getThemeContainerClass()} rounded-3xl border shadow-2xl overflow-hidden`}>
      
      {/* 1. TOP W3SCHOOLS-STYLE SUB-NAVBAR & TOOLBAR */}
      <header className="sticky top-0 z-30 px-4 sm:px-6 py-3.5 bg-dark-950/95 backdrop-blur-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Breadcrumbs & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
            title="Toggle Syllabus Sidebar"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-amber-400 font-bold hidden sm:inline">W3Schools Academy</span>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-slate-400">SMC Master Course</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold truncate max-w-[140px] sm:max-w-xs">{currentChapter.badge}</span>
          </div>
        </div>

        {/* Center: Previous / Next Chapter Buttons */}
        <div className="flex items-center gap-1.5">
          {prevChapterItem && (
            <button
              onClick={() => setActiveChapterId(prevChapterItem.id)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
              title={`Go to ${prevChapterItem.title}`}
            >
              <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Prev</span>
            </button>
          )}

          <div className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            {currentChapter.badge} / 08
          </div>

          {nextChapterItem && (
            <button
              onClick={() => {
                if (nextChapterItem.isReady) {
                  setActiveChapterId(nextChapterItem.id);
                } else {
                  alert(`Chapter ${nextChapterItem.num} is coming in the next stream update. Chapter 1 and Chapter 2 are fully unlocked!`);
                }
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                nextChapterItem.isReady
                  ? 'bg-amber-500 hover:bg-amber-400 text-dark-950 border-amber-500 font-bold'
                  : 'bg-dark-900 border-slate-800 text-slate-500 hover:text-slate-400'
              }`}
              title={nextChapterItem.isReady ? `Go to ${nextChapterItem.title}` : 'Upcoming'}
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className={`w-3.5 h-3.5 ${nextChapterItem.isReady ? 'text-dark-950' : 'text-slate-600'}`} />
            </button>
          )}
        </div>

        {/* Right: Word / PDF / Font / Theme Utilities */}
        <div className="flex items-center gap-2">
          
          {/* Export to Word (.doc) Button */}
          <button
            onClick={handleExportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-bold transition-all shadow-sm hover:scale-105"
            title="Download complete textbook as Microsoft Word (.doc) document"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Export Word</span>
          </button>

          {/* Print / Save as PDF Button */}
          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all shadow-sm hover:scale-105"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Font Resizer */}
          <div className="hidden lg:flex items-center bg-dark-900 border border-slate-800 rounded-lg p-0.5 text-xs font-mono text-slate-400">
            <button
              onClick={() => setFontSize(fontSize === 'xl' ? 'lg' : fontSize === 'lg' ? 'base' : 'sm')}
              className="px-2 py-1 hover:text-white"
              title="Decrease Font Size"
            >
              A-
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'xl')}
              className="px-2 py-1 hover:text-white"
              title="Increase Font Size"
            >
              A+
            </button>
          </div>

          {/* Theme Toggles */}
          <div className="flex items-center bg-dark-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setThemeMode('dark')}
              className={`px-2 py-1 rounded ${themeMode === 'dark' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400'}`}
              title="Dark Reader Mode"
            >
              Dark
            </button>
            <button
              onClick={() => setThemeMode('light')}
              className={`px-2 py-1 rounded ${themeMode === 'light' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-400'}`}
              title="Light Reader Mode"
            >
              Light
            </button>
            <button
              onClick={() => setThemeMode('sepia')}
              className={`px-2 py-1 rounded ${themeMode === 'sepia' ? 'bg-[#ebdcc7] text-[#433422] font-bold' : 'text-slate-400'}`}
              title="Sepia Book Mode"
            >
              Sepia
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE: SIDEBAR + CONTENT */}
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        
        {/* COLLAPSIBLE SIDEBAR: COURSE SYLLABUS & IN-CHAPTER OUTLINE */}
        {isSidebarOpen && (
          <aside className="w-full lg:w-80 shrink-0 border-r border-slate-800/80 bg-dark-950/70 p-4 space-y-5">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                placeholder="Search topics, rules, terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Course Progress Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">Course Syllabus</span>
                <span className="text-slate-400">2 / 8 Active</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-dark-900 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-1/4 rounded-full" />
              </div>
              <p className="text-[10px] text-slate-400">Chapters 01 & 02 are completely unlocked with full visual interactive textbooks.</p>
            </div>

            {/* Chapter Selector Accordion */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-2 font-bold block">
                Modules Roadmap
              </span>
              <div className="space-y-1">
                {courseChapters.map((ch) => {
                  const isActive = ch.id === activeChapterId;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        if (ch.isReady) {
                          setActiveChapterId(ch.id);
                        } else {
                          alert(`Chapter ${ch.num} will unlock in the next curriculum update. Currently studying Chapters 1 & 2.`);
                        }
                      }}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-amber-500/20 text-white font-bold border border-amber-500/40'
                          : ch.isReady
                          ? 'text-slate-300 hover:bg-dark-900 border border-transparent'
                          : 'text-slate-600 opacity-60 cursor-not-allowed border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isActive 
                            ? 'bg-amber-500 text-dark-950 font-black' 
                            : ch.isReady 
                            ? 'bg-dark-900 text-amber-400 border border-amber-500/20' 
                            : 'bg-dark-900 text-slate-600'
                        }`}>
                          {ch.num}
                        </span>
                        <span className="truncate">{ch.title.replace(/^\d+\.\s*/, '')}</span>
                      </div>
                      {ch.isReady ? (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-emerald-500/50'}`} />
                      ) : (
                        <span className="text-[9px] font-mono text-slate-600">Soon</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick In-Chapter Section Outline */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-2 font-bold block">
                {currentChapter.badge} Outline ({filteredSections.length} Sections)
              </span>
              <div className="max-h-64 overflow-y-auto pr-1 space-y-1 custom-scrollbar text-xs">
                {filteredSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-dark-900 truncate transition-colors text-[11px]"
                  >
                    <span className="text-amber-500/70 mr-1.5 font-mono">{sec.num || '•'}</span>
                    {sec.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Altrady Reference Link */}
            <div className="pt-2 border-t border-slate-800">
              <a
                href={currentChapter.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-dark-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 transition-all group"
              >
                <span>Original Syllabus Guide</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </aside>
        )}

        {/* MAIN TEXTBOOK READING COLUMN */}
        <main className={`flex-1 p-6 sm:p-10 space-y-12 max-w-5xl mx-auto ${getFontSizeClass()}`}>
          
          {/* CHAPTER HEADER & METADATA BANNER */}
          <section className="space-y-4 pb-8 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-amber-500 text-dark-950 font-mono text-xs font-black uppercase tracking-wider">
                  {currentChapter.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentChapter.readTime} • Verified Course Text
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Author: <span className="text-amber-400 font-semibold">{currentChapter.author}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {currentChapter.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              {currentChapter.subtitle}
            </p>

            {/* Quick Action Bar for Chapter */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleExportWord}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                <Download className="w-4 h-4" />
                <span>Open in Word (.doc)</span>
              </button>
              <button
                onClick={handlePrintPdf}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/20"
              >
                <Printer className="w-4 h-4" />
                <span>Print Textbook / PDF</span>
              </button>
            </div>
          </section>

          {/* ============================================================== */}
          {/* CHAPTER 1 SPECIALIZED SECTION ENGINE (ALL 27 SECTIONS COMPLETE) */}
          {/* ============================================================== */}
          {activeChapterId === 'chapter-1' && (
            <div className="space-y-12">
              
              {/* Core Law Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-dark-950 to-dark-950 border-l-4 border-amber-500 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Fundamental SMC Axiom
                </span>
                <blockquote className="text-2xl sm:text-3xl font-black text-white italic">
                  “Price moves to find liquidity.”
                </blockquote>
                <p className="text-slate-300 leading-relaxed">
                  Large institutions ($10B+) cannot simply execute at market prices because doing so would push the market against themselves. Your job is never to ask <em>“where does an indicator tell me to buy?”</em>, but:
                </p>
                <div className="p-4 rounded-xl bg-dark-900 border border-amber-500/30 text-amber-300 font-mono text-sm font-semibold">
                  “Where is liquidity, what is price doing around that liquidity, and what does the market structure tell me afterward?”
                </div>
              </div>

              {/* Render Every Section of Chapter 1 */}
              {filteredSections.map((sec) => (
                <article key={sec.id} id={sec.id} className="scroll-mt-24 space-y-5 pt-6 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Section {sec.num}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {sec.title}
                    </h2>
                  </div>

                  {sec.summary && (
                    <p className="text-xs sm:text-sm font-mono text-slate-400 bg-dark-950 p-3 rounded-xl border border-slate-800">
                      <strong>Executive Summary:</strong> {sec.summary}
                    </p>
                  )}

                  {/* Section Content with Text & Code Pre Blocks */}
                  <div className="text-slate-300 space-y-4 leading-relaxed whitespace-pre-line">
                    {sec.content}
                  </div>

                  {/* SPECIAL INTERACTIVE WIDGET FOR SECTION 7 & 8 (MARKET STRUCTURE) */}
                  {(sec.id === 'ch1-sec7' || sec.id === 'ch1-sec8') && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Interactive Diagram</span>
                        <div className="flex bg-dark-900 rounded-lg p-0.5 border border-slate-800 text-xs">
                          <button
                            onClick={() => setCh1StructureTab('bullish')}
                            className={`px-3 py-1 rounded font-bold transition-all ${ch1StructureTab === 'bullish' ? 'bg-emerald-500 text-dark-950' : 'text-slate-400'}`}
                          >
                            Bullish (HH / HL)
                          </button>
                          <button
                            onClick={() => setCh1StructureTab('bearish')}
                            className={`px-3 py-1 rounded font-bold transition-all ${ch1StructureTab === 'bearish' ? 'bg-red-500 text-white' : 'text-slate-400'}`}
                          >
                            Bearish (LH / LL)
                          </button>
                        </div>
                      </div>

                      {ch1StructureTab === 'bullish' ? (
                        <div className="p-6 rounded-xl bg-dark-900 border border-emerald-500/30 text-center font-mono space-y-3">
                          <div className="text-emerald-400 font-bold text-sm">BULLISH UPTREND STRUCTURE: Low → High → Higher Low (HL) → Higher High (HH)</div>
                          <div className="flex items-end justify-center gap-6 h-36 pt-4">
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400">HL 0</span><div className="w-5 h-8 bg-slate-700 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-emerald-400">HH 1</span><div className="w-5 h-20 bg-emerald-500 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400">HL 1</span><div className="w-5 h-12 bg-slate-700 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-emerald-400">HH 2</span><div className="w-5 h-28 bg-emerald-500 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400">HL 2</span><div className="w-5 h-16 bg-slate-700 rounded-t" /></div>
                          </div>
                          <p className="text-xs text-slate-400">Institutional Rule: A bullish trend remains valid as long as previous Higher Lows (HL) are not broken by a candle body close.</p>
                        </div>
                      ) : (
                        <div className="p-6 rounded-xl bg-dark-900 border border-red-500/30 text-center font-mono space-y-3">
                          <div className="text-red-400 font-bold text-sm">BEARISH DOWNTREND STRUCTURE: High → Low → Lower High (LH) → Lower Low (LL)</div>
                          <div className="flex items-end justify-center gap-6 h-36 pt-4">
                            <div className="flex flex-col items-center"><span className="text-[10px] text-red-400">High</span><div className="w-5 h-28 bg-red-500 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400">Low</span><div className="w-5 h-16 bg-slate-700 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-red-400">LH 1</span><div className="w-5 h-20 bg-red-500 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400">LL 1</span><div className="w-5 h-10 bg-slate-700 rounded-t" /></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-red-400">LH 2</span><div className="w-5 h-14 bg-red-500 rounded-t" /></div>
                          </div>
                          <p className="text-xs text-slate-400">Institutional Rule: A bearish trend remains valid as long as previous Lower Highs (LH) are not broken by a candle body close.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SPECIAL INTERACTIVE WIDGET FOR SECTION 16 & 17 (FAIR VALUE GAP) */}
                  {(sec.id === 'ch1-sec16' || sec.id === 'ch1-sec17') && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Fair Value Gap (FVG) Anatomy</span>
                        <div className="flex bg-dark-900 rounded-lg p-0.5 border border-slate-800 text-xs">
                          <button
                            onClick={() => setCh1FvgTab('bullish')}
                            className={`px-3 py-1 rounded font-bold transition-all ${ch1FvgTab === 'bullish' ? 'bg-emerald-500 text-dark-950' : 'text-slate-400'}`}
                          >
                            Bullish FVG
                          </button>
                          <button
                            onClick={() => setCh1FvgTab('bearish')}
                            className={`px-3 py-1 rounded font-bold transition-all ${ch1FvgTab === 'bearish' ? 'bg-red-500 text-white' : 'text-slate-400'}`}
                          >
                            Bearish FVG
                          </button>
                        </div>
                      </div>

                      {ch1FvgTab === 'bullish' ? (
                        <div className="p-6 rounded-xl bg-dark-900 border border-emerald-500/30 font-mono text-center space-y-3">
                          <div className="text-emerald-400 font-bold text-sm">BULLISH 3-CANDLE IMBALANCE: High of Candle 1 &lt; Low of Candle 3</div>
                          <div className="flex items-center justify-center gap-8 py-4">
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400 mb-1">Candle 1</span><div className="w-8 h-16 bg-slate-700 rounded" /><span className="text-[9px] text-emerald-400 mt-1">High (1)</span></div>
                            <div className="flex flex-col items-center relative"><span className="text-[10px] text-amber-400 mb-1">Candle 2 (Impulse)</span><div className="w-10 h-36 bg-emerald-500 rounded relative"><div className="absolute inset-x-[-24px] top-10 bottom-8 border-y-2 border-dashed border-amber-400 bg-amber-500/10 flex items-center justify-center text-[10px] text-amber-300 font-bold">◄── FVG GAP ──►</div></div></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400 mb-1">Candle 3</span><div className="w-8 h-16 bg-slate-700 rounded" /><span className="text-[9px] text-emerald-400 mt-1">Low (3)</span></div>
                          </div>
                          <p className="text-xs text-slate-400">The un-traded price void between Candle 1 High and Candle 3 Low is the Bullish Fair Value Gap.</p>
                        </div>
                      ) : (
                        <div className="p-6 rounded-xl bg-dark-900 border border-red-500/30 font-mono text-center space-y-3">
                          <div className="text-red-400 font-bold text-sm">BEARISH 3-CANDLE IMBALANCE: Low of Candle 1 &gt; High of Candle 3</div>
                          <div className="flex items-center justify-center gap-8 py-4">
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400 mb-1">Candle 1</span><div className="w-8 h-16 bg-slate-700 rounded" /><span className="text-[9px] text-red-400 mt-1">Low (1)</span></div>
                            <div className="flex flex-col items-center relative"><span className="text-[10px] text-amber-400 mb-1">Candle 2 (Displacement)</span><div className="w-10 h-36 bg-red-500 rounded relative"><div className="absolute inset-x-[-24px] top-10 bottom-8 border-y-2 border-dashed border-amber-400 bg-amber-500/10 flex items-center justify-center text-[10px] text-amber-300 font-bold">◄── BEARISH FVG ──►</div></div></div>
                            <div className="flex flex-col items-center"><span className="text-[10px] text-slate-400 mb-1">Candle 3</span><div className="w-8 h-16 bg-slate-700 rounded" /><span className="text-[9px] text-red-400 mt-1">High (3)</span></div>
                          </div>
                          <p className="text-xs text-slate-400">The 50% Consequent Encroachment (CE) line inside the gap acts as the primary institutional rebalance point.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SPECIAL VOCABULARY TABLE SEARCH FOR SECTION 25 */}
                  {sec.id === 'ch1-sec25' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">SMC Glossary Search</span>
                        <input
                          type="text"
                          placeholder="Filter glossary (e.g. Liquidity, BOS, FVG)..."
                          value={ch1VocabFilter}
                          onChange={(e) => setCh1VocabFilter(e.target.value)}
                          className="px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-dark-900 border-b border-slate-800 text-amber-400 font-mono">
                              <th className="p-3">Term</th>
                              <th className="p-3">Full Term</th>
                              <th className="p-3">Institutional Definition</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 font-sans">
                            {[
                              { t: "SMC", f: "Smart Money Concepts", d: "Trading framework analyzing institutional volume and order flow dynamics." },
                              { t: "Liquidity", f: "Order Density Pool", d: "Concentration of retail stop-loss orders used to fill large institutional positions." },
                              { t: "BSL", f: "Buy-Side Liquidity", d: "Stop loss buy orders located strictly above swing highs." },
                              { t: "SSL", f: "Sell-Side Liquidity", d: "Stop loss sell orders located strictly below swing lows." },
                              { t: "Sweep", f: "Liquidity Raid", d: "Brief puncture of a level to trigger stops before immediately reversing." },
                              { t: "BOS", f: "Break of Structure", d: "Candle body close beyond an established swing point indicating trend continuation." },
                              { t: "MSS", f: "Market Structure Shift", d: "The first break of structure indicating a potential macro trend reversal." },
                              { t: "FVG", f: "Fair Value Gap", d: "3-candle imbalance where aggressive displacement skipped opposing orders." },
                              { t: "OB", f: "Order Block", d: "The last opposing candle prior to an aggressive structural break." },
                              { t: "POI", f: "Point of Interest", d: "Validated institutional zone (FVG or OB) where traders wait for setup." }
                            ].filter(item => {
                              if (!ch1VocabFilter) return true;
                              const q = ch1VocabFilter.toLowerCase();
                              return item.t.toLowerCase().includes(q) || item.f.toLowerCase().includes(q) || item.d.toLowerCase().includes(q);
                            }).map(item => (
                              <tr key={item.t} className="hover:bg-dark-900/60 transition-colors">
                                <td className="p-3 font-mono font-bold text-amber-300">{item.t}</td>
                                <td className="p-3 font-semibold text-slate-200">{item.f}</td>
                                <td className="p-3 text-slate-400">{item.d}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </article>
              ))}

              {/* CHAPTER 1 KNOWLEDGE QUIZ */}
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl sm:text-2xl font-black text-white">Chapter 1 Knowledge Check</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">Test your comprehension of Smart Money Concepts before advancing to Chapter 2.</p>

                <div className="space-y-6">
                  {currentChapter.quiz.map((q, qIndex) => {
                    const isSubmitted = quizSubmitted[`ch1-${qIndex}`];
                    const selected = selectedQuizAnswers[`ch1-${qIndex}`];
                    return (
                      <div key={qIndex} className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                        <p className="text-sm font-bold text-white">
                          <span className="text-amber-400 mr-2">Q{qIndex + 1}:</span> {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            let optionClass = "bg-dark-950 border-slate-800 text-slate-300 hover:border-slate-700";
                            if (selected === optIdx) {
                              optionClass = "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold";
                            }
                            if (isSubmitted) {
                              if (optIdx === q.correctIndex) {
                                optionClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                              } else if (selected === optIdx && optIdx !== q.correctIndex) {
                                optionClass = "bg-red-500/20 border-red-500 text-red-300";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => setSelectedQuizAnswers(prev => ({ ...prev, [`ch1-${qIndex}`]: optIdx }))}
                                className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${optionClass}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {!isSubmitted ? (
                          <button
                            onClick={() => setQuizSubmitted(prev => ({ ...prev, [`ch1-${qIndex}`]: true }))}
                            disabled={selected === undefined}
                            className="mt-2 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-dark-950 text-xs font-bold transition-all"
                          >
                            Check Answer
                          </button>
                        ) : (
                          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs space-y-1">
                            <span className="text-emerald-400 font-bold font-mono">Institutional Explanation:</span>
                            <p className="text-slate-300">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* CHAPTER 2 SPECIALIZED SECTION ENGINE (ALL 14 SECTIONS COMPLETE) */}
          {/* ============================================================== */}
          {activeChapterId === 'chapter-2' && (
            <div className="space-y-12">
              
              {/* Chapter 2 Core Highlight Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-dark-950 to-dark-950 border-l-4 border-amber-500 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> The Golden Swing Rule
                </span>
                <blockquote className="text-2xl sm:text-3xl font-black text-white italic">
                  “No close, no swing. Wick is a sweep, body close is a break.”
                </blockquote>
                <p className="text-slate-300 leading-relaxed">
                  Swing points are the primary compass of Smart Money trading. If you mark them wrongly, you misread trend direction and take losing trades. Follow Roman's 3-candle rule and the Red Line validation test before marking any swing.
                </p>
              </div>

              {/* Render Every Section of Chapter 2 */}
              {filteredSections.map((sec) => (
                <article key={sec.id} id={sec.id} className="scroll-mt-24 space-y-5 pt-6 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Section {sec.num}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {sec.title}
                    </h2>
                  </div>

                  {sec.summary && (
                    <p className="text-xs sm:text-sm font-mono text-slate-400 bg-dark-950 p-3 rounded-xl border border-slate-800">
                      <strong>Executive Summary:</strong> {sec.summary}
                    </p>
                  )}

                  {/* Section Content */}
                  <div className="text-slate-300 space-y-4 leading-relaxed whitespace-pre-line">
                    {sec.content}
                  </div>

                  {/* Structured Table (if present) */}
                  {sec.table && (
                    <div className="my-4 overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-dark-900 border-b border-slate-800 text-amber-400 font-mono">
                            {sec.table.headers.map((h, i) => (
                              <th key={i} className="p-3">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-dark-900/60 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-mono font-bold text-amber-300' : 'text-slate-300'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* FIGURE 1: The Top-Down Method in Five Steps */}
                  {sec.figureId === 'fig-1' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 1. The Top-Down Method in Five Steps</span>
                        <span className="text-[10px] font-mono text-slate-500">HTF Direction → LTF Entry</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-xs inline-flex items-center justify-center">1</span>
                          <h5 className="text-xs font-bold text-white">Find Structure</h5>
                          <p className="text-[10px] text-slate-400">HTF (Daily) Bullish or Bearish</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-xs inline-flex items-center justify-center">2</span>
                          <h5 className="text-xs font-bold text-white">Mark POI</h5>
                          <p className="text-[10px] text-slate-400">FVG, Order Block or Sweep</p>
                        </div>
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center space-y-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500 text-dark-950 font-mono font-bold text-xs inline-flex items-center justify-center">3</span>
                          <h5 className="text-xs font-bold text-amber-300">WAIT For Price</h5>
                          <p className="text-[10px] text-amber-200/80 font-mono">Do Nothing</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-2">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs inline-flex items-center justify-center">4</span>
                          <h5 className="text-xs font-bold text-white">Switch to LTF</h5>
                          <p className="text-[10px] text-slate-400">1H / 4H / 15m Chart</p>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-500 text-dark-950 font-mono font-bold text-xs inline-flex items-center justify-center">5</span>
                          <h5 className="text-xs font-bold text-emerald-300">Reversal & Entry</h5>
                          <p className="text-[10px] text-emerald-200/80">Sweep + Body Close BOS</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FIGURE 4: Structural Swing vs Ordinary Internal Swing */}
                  {sec.figureId === 'fig-4' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 4. Structural Swings (Circled) vs Internal Swings (Crossed)</span>
                        <span className="text-[10px] font-mono text-slate-500">Do Not Mark Every Candle</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-dark-900 border border-red-500/30 space-y-3">
                          <h5 className="text-xs font-bold text-red-400 font-mono">BEARISH STRUCTURE (Ignore internal highs)</h5>
                          <div className="h-40 relative flex items-center justify-between px-4 pt-4 border-b border-slate-800">
                            <div className="flex flex-col items-center">
                              <span className="w-6 h-6 rounded-full border-2 border-amber-400 text-amber-400 text-[10px] font-bold flex items-center justify-center">⭕</span>
                              <span className="text-[10px] font-mono text-amber-300 mt-1">STRUCTURAL HIGH</span>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <span className="text-xs text-red-400 font-bold">❌</span>
                              <span className="text-[9px] font-mono text-slate-500">Internal</span>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <span className="text-xs text-red-400 font-bold">❌</span>
                              <span className="text-[9px] font-mono text-slate-500">Internal</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="w-6 h-6 rounded-full border-2 border-amber-400 text-amber-400 text-[10px] font-bold flex items-center justify-center">⭕</span>
                              <span className="text-[10px] font-mono text-amber-300 mt-1">SWING LOW</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Only the big swing points define the structure. Small intermediate swings are internal noise.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-dark-900 border border-emerald-500/30 space-y-3">
                          <h5 className="text-xs font-bold text-emerald-400 font-mono">BULLISH STRUCTURE (Ignore internal lows)</h5>
                          <div className="h-40 relative flex items-center justify-between px-4 pt-4 border-b border-slate-800">
                            <div className="flex flex-col items-center">
                              <span className="w-6 h-6 rounded-full border-2 border-emerald-400 text-emerald-400 text-[10px] font-bold flex items-center justify-center">⭕</span>
                              <span className="text-[10px] font-mono text-emerald-300 mt-1">STRUCTURAL LOW</span>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <span className="text-xs text-emerald-400 font-bold">❌</span>
                              <span className="text-[9px] font-mono text-slate-500">Internal</span>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <span className="text-xs text-emerald-400 font-bold">❌</span>
                              <span className="text-[9px] font-mono text-slate-500">Internal</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="w-6 h-6 rounded-full border-2 border-emerald-400 text-emerald-400 text-[10px] font-bold flex items-center justify-center">⭕</span>
                              <span className="text-[10px] font-mono text-emerald-300 mt-1">SWING HIGH</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Roman's warning: mistaking internal pullbacks for structure shifts leads to entering bad trades.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FIGURE 5: The Three-Candle Formation */}
                  {sec.figureId === 'fig-5' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 5. The Three-Candle Formation</span>
                        <span className="text-[10px] font-mono text-slate-500">Only Extreme Wick Tips Count</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-dark-900 border border-emerald-500/40 text-center space-y-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">A) SWING HIGH: YES</span>
                          <div className="flex items-end justify-center gap-2 h-28 pt-2">
                            <div className="w-4 h-12 bg-slate-700 rounded-t" />
                            <div className="w-4 h-24 bg-emerald-500 rounded-t relative">
                              <div className="w-0.5 h-6 bg-emerald-400 absolute -top-6 left-1.5" />
                            </div>
                            <div className="w-4 h-14 bg-slate-700 rounded-t" />
                          </div>
                          <p className="text-[10px] text-slate-400">Middle candle has highest point; neighbors are lower.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-dark-900 border border-emerald-500/40 text-center space-y-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">B) SWING LOW: YES</span>
                          <div className="flex items-start justify-center gap-2 h-28 pt-2">
                            <div className="w-4 h-12 bg-slate-700 rounded-b" />
                            <div className="w-4 h-24 bg-emerald-500 rounded-b relative">
                              <div className="w-0.5 h-6 bg-emerald-400 absolute -bottom-6 left-1.5" />
                            </div>
                            <div className="w-4 h-14 bg-slate-700 rounded-b" />
                          </div>
                          <p className="text-[10px] text-slate-400">Middle candle has lowest point; neighbors stay higher.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-dark-900 border border-red-500/40 text-center space-y-2">
                          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold">C) SWING HIGH: NO</span>
                          <div className="flex items-end justify-center gap-2 h-28 pt-2">
                            <div className="w-4 h-10 bg-slate-700 rounded-t" />
                            <div className="w-4 h-18 bg-slate-600 rounded-t" />
                            <div className="w-4 h-26 bg-red-500 rounded-t" />
                          </div>
                          <p className="text-[10px] text-slate-400">Price keeps rising; no lower right candle yet.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-dark-900 border border-red-500/40 text-center space-y-2">
                          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold">D) SWING HIGH: NO</span>
                          <div className="flex items-end justify-center gap-2 h-28 pt-2">
                            <div className="w-4 h-12 bg-slate-700 rounded-t" />
                            <div className="w-4 h-18 bg-red-500 rounded-t" />
                            <div className="w-4 h-24 bg-slate-600 rounded-t" />
                          </div>
                          <p className="text-[10px] text-slate-400">Right neighbor is higher; middle is not the extreme.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FIGURE 8: Validating a Swing using the Red Line Rule */}
                  {sec.figureId === 'fig-8' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 8. Validating a Swing: The Red Line Rule</span>
                        <span className="text-[10px] font-mono text-slate-500">Wait for the Candle Close</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-dark-900 border border-amber-500/30 space-y-2 text-center">
                          <span className="text-xs font-mono text-amber-400 font-bold">POTENTIAL ONLY (No Close Yet)</span>
                          <div className="h-32 flex items-center justify-center relative my-2">
                            <div className="flex items-end gap-3">
                              <div className="w-5 h-12 bg-slate-700 rounded-t" />
                              <div className="w-5 h-24 bg-amber-500 rounded-t relative">
                                <div className="absolute -bottom-1 left-[-40px] right-[-40px] h-0.5 bg-red-500 border-t border-dashed border-red-400" />
                                <span className="absolute -bottom-5 text-[9px] font-mono text-red-400">Red Line at Swing Low</span>
                              </div>
                              <div className="w-5 h-20 bg-slate-700 rounded-t" />
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Price has not closed below the red line. It can still rise and invalidate the high.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-dark-900 border border-emerald-500/30 space-y-2 text-center">
                          <span className="text-xs font-mono text-emerald-400 font-bold">VALIDATED SWING HIGH (Body Close)</span>
                          <div className="h-32 flex items-center justify-center relative my-2">
                            <div className="flex items-end gap-3">
                              <div className="w-5 h-12 bg-slate-700 rounded-t" />
                              <div className="w-5 h-24 bg-emerald-500 rounded-t relative">
                                <div className="absolute -bottom-1 left-[-40px] right-[-40px] h-0.5 bg-red-500" />
                              </div>
                              <div className="w-5 h-28 bg-emerald-600 rounded-b translate-y-8 relative">
                                <span className="absolute -bottom-5 text-[9px] font-mono text-emerald-400">Body Closes Below!</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">A candle closes below the red line. The swing high is officially confirmed!</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FIGURE 10: Wick vs Body Close (Sweep or Break) */}
                  {sec.figureId === 'fig-10' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 10. Wick vs Body Close: Sweep or Break</span>
                        <span className="text-[10px] font-mono text-slate-500">Absorption vs Structural Shift</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-dark-900 border border-purple-500/30 space-y-2 text-center">
                          <span className="text-xs font-mono text-purple-400 font-bold">ONLY THE WICK CROSSES (SWEEP)</span>
                          <div className="h-32 flex items-center justify-center relative my-2">
                            <div className="w-48 h-0.5 bg-amber-400 absolute top-10" />
                            <div className="flex items-end gap-3">
                              <div className="w-5 h-12 bg-slate-700" />
                              <div className="w-5 h-20 bg-purple-500 relative">
                                <div className="w-0.5 h-12 bg-purple-300 absolute -top-12 left-2" />
                              </div>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Wick crosses line; body closes below. This is a <strong>LIQUIDITY SWEEP</strong>, not a break of structure.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-dark-900 border border-cyan-500/30 space-y-2 text-center">
                          <span className="text-xs font-mono text-cyan-400 font-bold">BODY CLOSES BEYOND (BREAK OF STRUCTURE)</span>
                          <div className="h-32 flex items-center justify-center relative my-2">
                            <div className="w-48 h-0.5 bg-amber-400 absolute top-16" />
                            <div className="flex items-end gap-3">
                              <div className="w-5 h-12 bg-slate-700" />
                              <div className="w-5 h-28 bg-cyan-500" />
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Body closes cleanly above the swing high. This is a <strong>REAL BREAK OF STRUCTURE (BOS)</strong>.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FIGURE 12: The Cycle You Repeat on Every Chart */}
                  {sec.figureId === 'fig-12' && (
                    <div className="my-6 p-6 rounded-2xl bg-dark-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase">Figure 12. The Cycle You Repeat On Every Chart</span>
                        <span className="text-[10px] font-mono text-slate-500">The 5-Step Continuous Loop</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-1.5">
                          <span className="text-amber-400 font-mono font-bold text-xs">Step 1</span>
                          <h6 className="text-xs font-bold text-white">Mark Range</h6>
                          <p className="text-[10px] text-slate-400">Last structural high and low</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-1.5">
                          <span className="text-amber-400 font-mono font-bold text-xs">Step 2</span>
                          <h6 className="text-xs font-bold text-white">Do Nothing</h6>
                          <p className="text-[10px] text-slate-400">Inside range is internal noise</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-1.5">
                          <span className="text-cyan-400 font-mono font-bold text-xs">Step 3</span>
                          <h6 className="text-xs font-bold text-white">Breakout</h6>
                          <p className="text-[10px] text-slate-400">Wait for candle BODY close</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center space-y-1.5">
                          <span className="text-amber-400 font-mono font-bold text-xs">Step 4</span>
                          <h6 className="text-xs font-bold text-white">Extreme Point</h6>
                          <p className="text-[10px] text-slate-400">Between the two swings</p>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1.5">
                          <span className="text-emerald-400 font-mono font-bold text-xs">Step 5</span>
                          <h6 className="text-xs font-bold text-emerald-300">Red Line Close</h6>
                          <p className="text-[10px] text-emerald-200/80">Confirm new swing, repeat</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Subsections rendering */}
                  {sec.subsections && sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="p-5 rounded-2xl bg-dark-950 border border-slate-800/80 space-y-3">
                      <h4 className="text-lg font-bold text-amber-300">
                        {sub.title}
                      </h4>
                      {sub.content && (
                        <div className="text-slate-300 space-y-2 whitespace-pre-line text-xs sm:text-sm">
                          {sub.content}
                        </div>
                      )}
                      {sub.table && (
                        <div className="my-3 overflow-x-auto rounded-xl border border-slate-800">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-dark-900 border-b border-slate-800 text-amber-400 font-mono">
                                {sub.table.headers.map((h, i) => (
                                  <th key={i} className="p-2.5">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                              {sub.table.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-2.5 text-slate-300">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {sub.checklist && (
                        <div className="space-y-2 pt-2">
                          {sub.checklist.map((item, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-2.5 p-2 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                </article>
              ))}

              {/* ============================================================== */}
              {/* W3SCHOOLS "TRY IT YOURSELF": THE RED LINE SWING VALIDATOR       */}
              {/* ============================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border-2 border-amber-500/40 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> W3Schools Interactive Sandbox
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      Try It Yourself: The Red Line Swing Validator
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1 rounded-full border border-slate-800">
                    Simulator Mode
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300">
                  Select a live price scenario below to test Roman's validation rules in real-time. Learn to distinguish true swings from fake traps before trading!
                </p>

                {/* Scenario Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleRunSimulator('potential-high')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      simScenario === 'potential-high'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-lg'
                        : 'bg-dark-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario A: Potential High
                  </button>
                  <button
                    onClick={() => handleRunSimulator('validated-high')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      simScenario === 'validated-high'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-lg'
                        : 'bg-dark-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario B: Validated High
                  </button>
                  <button
                    onClick={() => handleRunSimulator('sweep')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      simScenario === 'sweep'
                        ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-lg'
                        : 'bg-dark-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario C: Wick Sweep
                  </button>
                  <button
                    onClick={() => handleRunSimulator('break')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      simScenario === 'break'
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-lg'
                        : 'bg-dark-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario D: Body Break
                  </button>
                </div>

                {/* Simulator Result Output Card */}
                {simResult && (
                  <div className="p-5 rounded-2xl bg-dark-900 border border-slate-700/80 space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                        Institutional Simulation Analysis
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-dark-950 border border-slate-800 text-white">
                        {simResult.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {simResult.status}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {simResult.explanation}
                    </p>
                  </div>
                )}
              </div>

              {/* CHAPTER 2 KNOWLEDGE QUIZ */}
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-800 space-y-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl sm:text-2xl font-black text-white">Chapter 2 Knowledge Check</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">Confirm your mastery of structural swings, validation lines, and range mechanics.</p>

                <div className="space-y-6">
                  {currentChapter.quiz.map((q, qIndex) => {
                    const isSubmitted = quizSubmitted[`ch2-${qIndex}`];
                    const selected = selectedQuizAnswers[`ch2-${qIndex}`];
                    return (
                      <div key={qIndex} className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                        <p className="text-sm font-bold text-white">
                          <span className="text-amber-400 mr-2">Q{qIndex + 1}:</span> {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            let optionClass = "bg-dark-950 border-slate-800 text-slate-300 hover:border-slate-700";
                            if (selected === optIdx) {
                              optionClass = "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold";
                            }
                            if (isSubmitted) {
                              if (optIdx === q.correctIndex) {
                                optionClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                              } else if (selected === optIdx && optIdx !== q.correctIndex) {
                                optionClass = "bg-red-500/20 border-red-500 text-red-300";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => setSelectedQuizAnswers(prev => ({ ...prev, [`ch2-${qIndex}`]: optIdx }))}
                                className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${optionClass}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {!isSubmitted ? (
                          <button
                            onClick={() => setQuizSubmitted(prev => ({ ...prev, [`ch2-${qIndex}`]: true }))}
                            disabled={selected === undefined}
                            className="mt-2 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-dark-950 text-xs font-bold transition-all"
                          >
                            Check Answer
                          </button>
                        ) : (
                          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 text-xs space-y-1">
                            <span className="text-emerald-400 font-bold font-mono">Institutional Explanation:</span>
                            <p className="text-slate-300">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* CHAPTER FOOTER NAVIGATION */}
          <footer className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevChapterItem ? (
              <button
                onClick={() => setActiveChapterId(prevChapterItem.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-amber-400" />
                <span>Previous: {prevChapterItem.title}</span>
              </button>
            ) : <div />}

            {nextChapterItem ? (
              <button
                onClick={() => {
                  if (nextChapterItem.isReady) {
                    setActiveChapterId(nextChapterItem.id);
                  } else {
                    alert(`Chapter ${nextChapterItem.num} will unlock in the next curriculum update.`);
                  }
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  nextChapterItem.isReady
                    ? 'bg-amber-500 hover:bg-amber-400 text-dark-950 shadow-lg shadow-amber-500/20'
                    : 'bg-dark-950 border border-slate-800 text-slate-500 hover:text-slate-400'
                }`}
              >
                <span>Next: {nextChapterItem.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </footer>

        </main>
      </div>

    </div>
  );
}
