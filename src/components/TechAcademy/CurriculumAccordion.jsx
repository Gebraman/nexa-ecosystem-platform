import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Terminal, 
  Cpu, 
  FolderGit2, 
  Check, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { techAcademyCurriculum } from '../../data/techAcademyCurriculum';

export default function CurriculumAccordion() {
  // Allow multiple phases to be open or single open. Default to Phase 1 and Phase 4 open for maximum impact.
  const [openPhases, setOpenPhases] = useState({
    'phase-1': true,
    'phase-2': false,
    'phase-3': false,
    'phase-4': true,
  });

  const togglePhase = (phaseId) => {
    setOpenPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const expandAll = () => {
    setOpenPhases({
      'phase-1': true,
      'phase-2': true,
      'phase-3': true,
      'phase-4': true,
    });
  };

  const collapseAll = () => {
    setOpenPhases({
      'phase-1': false,
      'phase-2': false,
      'phase-3': false,
      'phase-4': false,
    });
  };

  return (
    <section id="curriculum" className="py-20 bg-dark-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Comprehensive 32-Week Syllabus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Curriculum Roadmap by Phase
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Carefully structured into 4 foundational and specialized phases. Each week combines weekend live instructor workshops with hands-on coding exercises.
            </p>
          </div>

          {/* Quick Expand / Collapse Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-lg bg-dark-900 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Expand All Phases
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-lg bg-dark-900 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* 4 Phases Accordion Stack */}
        <div className="space-y-6">
          {techAcademyCurriculum.phases.map((phase) => {
            const isOpen = !!openPhases[phase.id];

            return (
              <div 
                key={phase.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-dark-900/95 border-slate-700 shadow-2xl' 
                    : 'bg-dark-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion Header Bar */}
                <div 
                  onClick={() => togglePhase(phase.id)}
                  className="p-6 sm:p-8 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-dark-800/40"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shrink-0 text-sm shadow-md"
                      style={{ backgroundColor: `${phase.accentColor}25`, color: phase.accentColor, border: `1px solid ${phase.accentColor}50` }}
                    >
                      {phase.number.replace('Phase ', 'P')}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border uppercase ${phase.badgeColor}`}>
                          {phase.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {phase.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <span>{phase.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Header Right Trigger */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="hidden lg:block text-right">
                      <span className="text-[11px] font-mono text-slate-500 block">Capstone Project</span>
                      <span className="text-xs font-semibold text-slate-300">{phase.capstoneProject}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-transform">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-slate-800/80 pt-6 space-y-6 animate-fade-in">
                    
                    {/* Phase Overview & Skills */}
                    <div className="p-5 rounded-2xl bg-dark-950/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="max-w-3xl">
                        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Phase Overview
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {phase.overview}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">Technologies & Tooling</span>
                        <div className="flex flex-wrap gap-1.5 max-w-sm">
                          {phase.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-dark-900 border border-slate-700 text-[11px] font-mono text-slate-300 font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Capstone Project Card */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-dark-950 to-dark-950 border border-amber-500/30 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-amber-400 shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Phase Capstone Project</span>
                          <h5 className="text-sm font-bold text-white">{phase.capstoneProject}</h5>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-dark-900 text-amber-400 border border-amber-500/30 font-bold shrink-0">
                        Evaluated for Graduation
                      </span>
                    </div>

                    {/* Weeks Grid */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-cyan-400" />
                        <span>Weekly Syllabus Breakdown</span>
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.weeks.map((weekItem, wIdx) => (
                          <div 
                            key={wIdx}
                            className="p-5 rounded-2xl bg-dark-950 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-cyan-400">
                                  {weekItem.week}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500">Live Workshop</span>
                              </div>

                              <h5 className="text-sm font-bold text-white mb-3">
                                {weekItem.title}
                              </h5>

                              {/* Topics List */}
                              <ul className="space-y-1.5 text-xs text-slate-300">
                                {weekItem.topics.map((topic, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2">
                                    <span className="text-amber-400 text-xs mt-0.5 leading-none">•</span>
                                    <span className="leading-snug text-slate-300">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Weekly Practice Exercise */}
                            {weekItem.exercise && (
                              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                                <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-slate-300">Hands-on Exercise: </strong>
                                  <span>{weekItem.exercise}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
