import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Award, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function AboutSection({ onNavigateView }) {
  const quickTracks = [
    {
      id: 'forex-trading',
      label: 'Forex SMC Trading',
      subtitle: 'Institutional Price Action',
      icon: TrendingUp,
      badge: 'Chapter 01 - 04'
    },
    {
      id: 'fullstack-dev',
      label: 'Full-Stack Academy',
      subtitle: '32-Week Immersive Roadmap',
      icon: Code2,
      badge: 'Phases 1 - 4'
    },
    {
      id: 'k12-scholars',
      label: 'K-12 Scholars Tutoring',
      subtitle: '1-on-1 Online Mentorship',
      icon: GraduationCap,
      badge: 'Grades 1 - 12'
    },
    {
      id: 'projects',
      label: 'Developer Web Lab',
      subtitle: 'Production Web Clones',
      icon: Layers,
      badge: 'Custom Builds'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 border-b border-slate-800/80 bg-dark-950 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/5 via-[#f39228]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ------------------------------------------------------------- */}
        {/* QUICK TRACK SELECTOR (INSTANT 1-CLICK ACCESS FOR DESKTOP & PHONE) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-amber-500/10 text-[#f39228] border border-amber-500/30 uppercase font-bold tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Desired Program</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Explore Nexa Academies & Innovation Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
              Tap any vertical below to immediately launch its comprehensive syllabus, live masterclasses, and interactive workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickTracks.map(({ id, label, subtitle, icon: IconComponent, badge }) => (
              <div
                key={id}
                onClick={() => onNavigateView && onNavigateView(id)}
                className="group cursor-pointer p-4 rounded-2xl bg-dark-900/90 hover:bg-dark-800/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 flex items-center justify-between gap-3 transform hover:-translate-y-1 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#f39228] group-hover:scale-105 transition-transform shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-dark-950 text-amber-400 border border-amber-500/20 uppercase">
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f39228] transition-colors truncate">
                      {label}
                    </h3>
                    <p className="text-[10px] text-slate-400 truncate">
                      {subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#f39228] group-hover:border-amber-500/40 transition-colors shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ABOUT NEXA ECOSYSTEM: PHILOSOPHY & PILLARS */}
        {/* ------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4 border-t border-slate-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Excellence & Engineering Leadership</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            About Nexa Ecosystem
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5">
            Founded by university honors scholars and software engineers, Nexa Ecosystem combines high-performance full-stack web architecture, institutional SMC financial mastery, and personalized academic tutoring into one unified platform.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Full-Stack */}
          <div 
            onClick={() => onNavigateView && onNavigateView('fullstack-dev')}
            className="cursor-pointer p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f39228] transition-colors">
                Engineering-Grade Standards
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Every website and clone we ship is crafted with clean modular code, responsive Tailwind aesthetics, and enterprise cloud reliability.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Full-Stack Academy</span>
              </span>
              <span className="text-[#f39228] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 2: Forex SMC */}
          <div 
            onClick={() => onNavigateView && onNavigateView('forex-trading')}
            className="cursor-pointer p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f39228] transition-colors">
                Institutional Precision
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                In financial markets, we reject retail speculation. Our SMC Forex curriculum is built around strict mathematical probability, risk management, and order flow.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Forex SMC Trading</span>
              </span>
              <span className="text-[#f39228] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 3: K-12 Mentorship */}
          <div 
            onClick={() => onNavigateView && onNavigateView('k12-scholars')}
            className="cursor-pointer p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f39228] transition-colors">
                Dedicated Scholar Mentorship
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Our K-12 tutors are active top performers at Ethiopia’s premier universities, providing empathetic, rigorous 1-on-1 coaching for young learners globally.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>K-12 Mentorship</span>
              </span>
              <span className="text-[#f39228] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Book Teacher</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
