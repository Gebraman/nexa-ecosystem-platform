import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  ArrowLeft, 
  Play, 
  Video, 
  Clock, 
  Code2, 
  CheckCircle2, 
  BookOpen, 
  Terminal, 
  Layers, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  Award,
  Search,
  Filter,
  MonitorPlay,
  RotateCcw
} from 'lucide-react';
import { evangadiFullStackPhasesData } from '../../data/evangadiFullStackPhasesData';

export default function EvangadiFullStackCurriculumViewer({ onBackToOverview }) {
  // Navigation Hierarchy: 'outline' (Level 1: 4 Phases) | 'phase' (Level 2: Phase Topics) | 'lesson' (Level 3: Video Studio)
  const [viewLevel, setViewLevel] = useState('outline');
  const [activePhaseId, setActivePhaseId] = useState('phase-1');
  const [activeModuleId, setActiveModuleId] = useState('p1-m1');

  // Video Player state inside Level 3
  const [activeVideo, setActiveVideo] = useState({
    title: 'HTML Part 1 Masterclass - Zoom Full Session',
    duration: '3:14:08',
    youtubeId: 'M8dQpAeqsbY',
    isZoomMaster: true,
    category: 'zoom'
  });

  const [activeLessonTab, setActiveLessonTab] = useState('videos'); // 'videos', 'notes', 'code', 'homework'
  const [copiedCode, setCopiedCode] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  // Find active phase and module
  const currentPhase = evangadiFullStackPhasesData.find(p => p.id === activePhaseId) || evangadiFullStackPhasesData[0];
  const currentModule = currentPhase?.modules?.find(m => m.id === activeModuleId) || currentPhase?.modules?.[0];

  // Handlers for smooth navigation
  const handleSelectPhase = (phaseId) => {
    setActivePhaseId(phaseId);
    const phase = evangadiFullStackPhasesData.find(p => p.id === phaseId);
    if (phase?.modules?.length > 0) {
      setActiveModuleId(phase.modules[0].id);
      // If Phase 1, auto-select first Zoom video
      if (phase.modules[0].zoomClasses?.[0]) {
        const firstZ = phase.modules[0].zoomClasses[0];
        setActiveVideo({
          title: firstZ.title,
          duration: firstZ.duration,
          youtubeId: firstZ.youtubeId,
          isZoomMaster: true,
          category: 'zoom'
        });
      }
    }
    setViewLevel('phase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModuleStudio = (moduleId) => {
    setActiveModuleId(moduleId);
    const mod = currentPhase?.modules?.find(m => m.id === moduleId);
    if (mod?.zoomClasses?.[0]) {
      const z = mod.zoomClasses[0];
      setActiveVideo({
        title: z.title,
        duration: z.duration,
        youtubeId: z.youtubeId,
        isZoomMaster: true,
        category: 'zoom'
      });
    } else if (mod?.shortVideos?.[0]) {
      const s = mod.shortVideos[0];
      setActiveVideo({
        title: s.title,
        duration: s.duration,
        youtubeId: s.youtubeId,
        isZoomMaster: false,
        category: 'short'
      });
    }
    setViewLevel('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectVideo = (video, isZoom = false, category = 'short') => {
    setActiveVideo({
      title: video.title,
      duration: video.duration,
      youtubeId: video.youtubeId,
      isZoomMaster: isZoom,
      category: category
    });
    // Ensure we are in lesson view
    if (viewLevel !== 'lesson') {
      setViewLevel('lesson');
    }
  };

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Render Phase Icon matching Evangadi badge styling
  const renderPhaseIcon = (iconType, phaseNum) => {
    switch (iconType) {
      case 'html':
        return (
          <div className="w-14 h-14 rounded-full border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-black text-dark-950 text-xs">
              &lt;/&gt;
            </div>
          </div>
        );
      case 'js':
        return (
          <div className="w-14 h-14 rounded-full border-2 border-cyan-400 bg-cyan-500/10 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center font-black text-dark-950 text-xs">
              JS
            </div>
          </div>
        );
      case 'react':
        return (
          <div className="w-14 h-14 rounded-full border-2 border-blue-500 bg-blue-500/10 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-white text-xs">
              ⚛
            </div>
          </div>
        );
      case 'project':
      default:
        return (
          <div className="w-14 h-14 rounded-full border-2 border-[#f39228] bg-amber-500/10 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f39228] to-amber-400 flex items-center justify-center font-black text-dark-950 text-xs">
              🚀
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-[#1e293b]/30 py-8 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ------------------------------------------------------------- */}
        {/* TOP BREADCRUMB / HIERARCHY NAVIGATION BAR */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-dark-900 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => setViewLevel('outline')}
              className={`hover:text-[#f39228] transition-colors ${
                viewLevel === 'outline' ? 'text-[#f39228] font-bold' : 'text-slate-400'
              }`}
            >
              Course Outline
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => setViewLevel('phase')}
              className={`hover:text-[#f39228] transition-colors truncate max-w-[200px] sm:max-w-xs ${
                viewLevel === 'phase' ? 'text-[#f39228] font-bold' : 'text-slate-400'
              }`}
            >
              {currentPhase.shortTitle}
            </button>
            {viewLevel === 'lesson' && currentModule && (
              <>
                <span className="text-slate-600">/</span>
                <span className="text-amber-400 font-bold truncate max-w-[200px] sm:max-w-xs">
                  {currentModule.title}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {viewLevel !== 'outline' && (
              <button
                onClick={() => {
                  if (viewLevel === 'lesson') setViewLevel('phase');
                  else setViewLevel('outline');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#f39228]" />
                <span>Back</span>
              </button>
            )}

            {onBackToOverview && (
              <button
                onClick={onBackToOverview}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 text-xs transition-colors"
              >
                <span>Full Academy Overview</span>
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 1: COURSE OUTLINE DETAILS (EVANGADI STYLE - EXACT MATCH) */}
        {/* ------------------------------------------------------------- */}
        {viewLevel === 'outline' && (
          <div className="space-y-8 animate-fade-in">
            {/* Evangadi Centered Header */}
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Course Outline
                <br />
                <span className="text-white">Details</span>
              </h2>
              {/* Iconic Evangadi Orange Double Line Bar */}
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="w-12 h-1 bg-[#f39228] rounded-full inline-block" />
                <span className="w-4 h-1 bg-[#f39228] rounded-full inline-block" />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto pt-2">
                Click any phase below to explore its comprehensive syllabus, live Zoom masterclasses, and nested bite-sized sub-topic video lessons.
              </p>
            </div>

            {/* 4 Phase Cards (Container Stack) */}
            <div className="space-y-5 max-w-4xl mx-auto">
              {evangadiFullStackPhasesData.map((phase) => (
                <div
                  key={phase.id}
                  onClick={() => handleSelectPhase(phase.id)}
                  className="group relative cursor-pointer bg-dark-900/95 hover:bg-dark-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Badge / Circular Icon */}
                    {renderPhaseIcon(phase.iconType, phase.phaseNumber)}

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f39228] transition-colors flex items-center gap-2">
                          <span>{phase.title}</span>
                        </h3>
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${phase.badgeColor}`}>
                          {phase.duration}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 group-hover:text-slate-200">
                        {phase.description}
                      </p>

                      {/* Footer Metadata & Action Pill */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                          <span>⚡ {phase.stats.modulesCount} Modules</span>
                          <span>•</span>
                          <span>🎥 {phase.stats.zoomHours}</span>
                          <span>•</span>
                          <span>🎬 {phase.stats.shortVideosCount} Videos</span>
                        </div>

                        <div className="flex items-center gap-1 text-[#f39228] font-bold text-xs group-hover:translate-x-1 transition-transform">
                          <span>Explore Topics & Videos</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Diagnostic Banner */}
            <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-950 to-dark-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-amber-500/20 text-[#f39228] font-bold">
                  Cohort Mentorship
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  Want 1-on-1 Help Navigating the Curriculum?
                </h4>
                <p className="text-xs text-slate-400">
                  Book a free 30-minute diagnostic session with our academic advisory team.
                </p>
              </div>

              <a
                href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
              >
                Book Diagnostic Meet
              </a>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 2: PHASE DEEP-DIVE (TOPICS & SUB-TOPICS CONTAINER) */}
        {/* ------------------------------------------------------------- */}
        {viewLevel === 'phase' && currentPhase && (
          <div className="space-y-8 animate-fade-in">
            {/* Phase Header Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#f39228]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#f39228] text-dark-950">
                      {currentPhase.phaseNumber}
                    </span>
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border font-bold ${currentPhase.badgeColor}`}>
                      {currentPhase.duration}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {currentPhase.techStack}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currentPhase.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    {currentPhase.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="text-amber-400 font-bold">🎯 Capstone:</span>
                    <span className="text-slate-200">{currentPhase.capstone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                  <button
                    onClick={() => setViewLevel('outline')}
                    className="px-4 py-2 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all text-center"
                  >
                    ← All 4 Phases
                  </button>
                  <a
                    href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs transition-all text-center shadow-md shadow-amber-500/20"
                  >
                    Admissions Diagnostic
                  </a>
                </div>
              </div>
            </div>

            {/* Phase Modules / Topics List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#f39228]" />
                  <span>Modules & Topics in {currentPhase.phaseNumber}</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {currentPhase.modules.length} Core Modules
                </span>
              </div>

              <div className="space-y-4">
                {currentPhase.modules.map((module) => {
                  const hasZoom = module.zoomClasses && module.zoomClasses.length > 0;
                  const hasShorts = module.shortVideos && module.shortVideos.length > 0;

                  return (
                    <div
                      key={module.id}
                      className="p-5 sm:p-6 rounded-2xl bg-dark-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 space-y-4"
                    >
                      {/* Module Title Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-lg bg-dark-950 border border-slate-800 text-amber-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            {module.number}
                          </span>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white">
                              {module.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {module.tagline}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleOpenModuleStudio(module.id)}
                          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/10"
                        >
                          <MonitorPlay className="w-3.5 h-3.5" />
                          <span>Open Studio & Videos</span>
                        </button>
                      </div>

                      {/* Master Zoom Class Highlight (If available, e.g. Phase 1) */}
                      {hasZoom && (
                        <div className="p-3.5 rounded-xl bg-dark-950 border border-amber-500/20 space-y-2">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">
                            Live Master Zoom Recordings
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                            {module.zoomClasses.map((zoom) => (
                              <div
                                key={zoom.id}
                                onClick={() => {
                                  setActiveModuleId(module.id);
                                  handleSelectVideo(zoom, true, 'zoom');
                                }}
                                className="group cursor-pointer p-2.5 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 flex items-center justify-between gap-3 transition-colors"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                    <Video className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-white group-hover:text-amber-400 truncate">
                                      {zoom.title}
                                    </p>
                                    <span className="text-[10px] font-mono text-slate-400">
                                      Duration: {zoom.duration}
                                    </span>
                                  </div>
                                </div>
                                <Play className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 shrink-0" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Nested Short Bite-Sized Videos Container */}
                      {hasShorts && (
                        <div className="pt-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#f39228]" />
                              <span>{module.shortVideos.length} Bite-Sized Short Videos Included in this Topic:</span>
                            </span>
                            <button
                              onClick={() => handleOpenModuleStudio(module.id)}
                              className="text-xs text-[#f39228] hover:underline font-mono"
                            >
                              View All Videos →
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                            {module.shortVideos.slice(0, 4).map((short) => (
                              <div
                                key={short.id}
                                onClick={() => {
                                  setActiveModuleId(module.id);
                                  handleSelectVideo(short, false, 'short');
                                }}
                                className="group cursor-pointer p-2.5 rounded-lg bg-dark-950 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 transition-colors"
                              >
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="text-[10px] font-mono text-amber-400 font-bold">
                                    #{short.number}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-500">
                                    {short.duration}
                                  </span>
                                </div>
                                <p className="text-xs font-medium text-slate-200 group-hover:text-white line-clamp-1">
                                  {short.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* For Phases 2, 3, 4: Display Topics List */}
                      {module.topics && (
                        <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80">
                          <p className="text-xs font-mono text-slate-400 mb-2">
                            Syllabus & Learning Competencies:
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                            {module.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#f39228] font-bold">✓</span>
                                <span className="line-clamp-1">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 3: INTERACTIVE VIDEO STUDIO & LESSON VIEWER */}
        {/* ------------------------------------------------------------- */}
        {viewLevel === 'lesson' && currentModule && (
          <div className="space-y-6 animate-fade-in">
            {/* Studio Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-dark-900 border border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewLevel('phase')}
                  className="p-2 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Back to Phase Modules"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      Module {currentModule.number}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {currentPhase.shortTitle}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentModule.title}
                  </h3>
                </div>
              </div>

              {/* Module Switcher dropdown / buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewLevel('outline')}
                  className="px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors"
                >
                  All 4 Phases
                </button>
              </div>
            </div>

            {/* Split Screen / Video Player Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left / Top: Interactive YouTube Player Stage */}
              <div className="lg:col-span-8 space-y-4">
                <div className="rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl relative aspect-video">
                  {activeVideo.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                      title={activeVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400">
                      <Video className="w-12 h-12 text-slate-600 mb-2" />
                      <p className="text-sm font-bold text-slate-300">
                        Select a video lesson from the playlist to start learning
                      </p>
                    </div>
                  )}
                </div>

                {/* Active Video Title & Metadata */}
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {activeVideo.isZoomMaster ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold uppercase">
                          🎥 Master Zoom Class Recording
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold uppercase">
                          🎬 Nested Bite-Sized Short Video
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{activeVideo.duration}</span>
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {activeVideo.title}
                    </h4>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-slate-700 text-xs text-slate-300 hover:text-white font-mono transition-colors"
                  >
                    <span>Open in YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Lesson Deep Dive Tabs: Notes, Code, Homework */}
                <div className="p-5 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs font-mono">
                    <button
                      onClick={() => setActiveLessonTab('notes')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                        activeLessonTab === 'notes'
                          ? 'bg-amber-500 text-dark-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Topic Notes & Takeaways
                    </button>
                    <button
                      onClick={() => setActiveLessonTab('code')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                        activeLessonTab === 'code'
                          ? 'bg-amber-500 text-dark-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Syntax & Code Example
                    </button>
                    <button
                      onClick={() => setActiveLessonTab('homework')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                        activeLessonTab === 'homework'
                          ? 'bg-amber-500 text-dark-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Homework & Exercises
                    </button>
                  </div>

                  {/* Tab 1: Notes */}
                  {activeLessonTab === 'notes' && (
                    <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                      <p className="font-semibold text-white">
                        {currentModule.tagline}
                      </p>
                      <p>
                        This module covers production engineering concepts. Follow along with the masterclass recordings on a second monitor while typing each example inside VS Code to reinforce muscle memory.
                      </p>
                      <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800">
                        <span className="font-mono text-amber-400 block mb-1 font-bold">
                          Key Takeaway:
                        </span>
                        <span>
                          Never copy-paste code during initial phases. Typing HTML tags, CSS properties, and JavaScript syntax cements syntactic intuition and prepares you for real technical coding challenges.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Code Syntax */}
                  {activeLessonTab === 'code' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>Starter Code Snippet</span>
                        <button
                          onClick={() => handleCopyCode(currentModule.codeSnippet || '// No code snippet')}
                          className="flex items-center gap-1 hover:text-white"
                        >
                          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                        </button>
                      </div>
                      <pre className="p-4 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto">
                        <code>{currentModule.codeSnippet || '// Select a module with code snippet'}</code>
                      </pre>
                    </div>
                  )}

                  {/* Tab 3: Homework */}
                  {activeLessonTab === 'homework' && (
                    <div className="p-4 rounded-xl bg-dark-950 border border-amber-500/20 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-amber-400 font-mono font-bold">
                        <Award className="w-4 h-4" />
                        <span>Practical Coding Assignment:</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {currentModule.homework || "Complete the practice challenge and commit your progress to your personal GitHub repository."}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right / Sidebar: Playlist of Master Zoom Class + Nested Short Videos */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Video className="w-4 h-4 text-[#f39228]" />
                      <span>Module Video Lessons</span>
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {(currentModule.zoomClasses?.length || 0) + (currentModule.shortVideos?.length || 0)} Total
                    </span>
                  </div>

                  {/* Section 1: Zoom Master Classes */}
                  {currentModule.zoomClasses && currentModule.zoomClasses.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block pt-1">
                        Master Zoom Classes (Full Recordings)
                      </span>
                      {currentModule.zoomClasses.map((zoom) => {
                        const isPlaying = activeVideo.youtubeId === zoom.youtubeId;

                        return (
                          <div
                            key={zoom.id}
                            onClick={() => handleSelectVideo(zoom, true, 'zoom')}
                            className={`p-3 rounded-xl cursor-pointer transition-all border ${
                              isPlaying
                                ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-500/10'
                                : 'bg-dark-950 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-[10px] font-mono font-bold text-amber-400">
                                FULL ZOOM SESSION
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">
                                {zoom.duration}
                              </span>
                            </div>
                            <p className={`text-xs font-bold leading-tight ${isPlaying ? 'text-amber-300' : 'text-white'}`}>
                              {zoom.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Section 2: Nested Bite-Sized Short Videos */}
                  {currentModule.shortVideos && currentModule.shortVideos.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                        Included Short Bite-Sized Videos ({currentModule.shortVideos.length})
                      </span>
                      <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                        {currentModule.shortVideos.map((short) => {
                          const isPlaying = activeVideo.youtubeId === short.youtubeId;

                          return (
                            <div
                              key={short.id}
                              onClick={() => handleSelectVideo(short, false, 'short')}
                              className={`p-2.5 rounded-xl cursor-pointer transition-all border flex items-center justify-between gap-2 ${
                                isPlaying
                                  ? 'bg-cyan-500/10 border-cyan-500/60 shadow-md shadow-cyan-500/10'
                                  : 'bg-dark-950 border-slate-800/80 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className={`text-[10px] font-mono font-bold shrink-0 ${isPlaying ? 'text-cyan-400' : 'text-slate-500'}`}>
                                  #{short.number}
                                </span>
                                <p className={`text-xs truncate ${isPlaying ? 'text-cyan-300 font-bold' : 'text-slate-300'}`}>
                                  {short.title}
                                </p>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500 shrink-0">
                                {short.duration}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Section 3: Extra Computer Fundamentals (If Module 5) */}
                  {currentModule.extraMasterclasses && currentModule.extraMasterclasses.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">
                        Computer Architecture & OS Setup
                      </span>
                      <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                        {currentModule.extraMasterclasses.map((extra) => {
                          const isPlaying = activeVideo.youtubeId === extra.youtubeId;

                          return (
                            <div
                              key={extra.id}
                              onClick={() => handleSelectVideo(extra, true, 'extra')}
                              className={`p-2 rounded-xl cursor-pointer transition-all border flex items-center justify-between gap-2 ${
                                isPlaying
                                  ? 'bg-purple-500/10 border-purple-500/60'
                                  : 'bg-dark-950 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <p className={`text-xs truncate ${isPlaying ? 'text-purple-300 font-bold' : 'text-slate-300'}`}>
                                {extra.title}
                              </p>
                              <span className="text-[10px] font-mono text-slate-500 shrink-0">
                                {extra.duration}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
