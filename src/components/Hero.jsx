import React from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Code2, 
  GraduationCap, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function Hero({ onNavigate, onOpenService, customBgImage }) {
  // Uses customBgImage if provided by user, otherwise uses high-end default tech wallpaper
  const bgImage = customBgImage || ecosystemData.hero.backgroundImage;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80">
      
      {/* Background Image Container with Deep Multi-Layer Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Nexa Ecosystem Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
        />
        {/* Darkening & Color Gradients for Maximum Text Contrast and Modern Tech Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-dark-950/70 to-dark-950" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-xl shadow-cyan-950/30">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold text-slate-200 tracking-wide font-mono">
            {ecosystemData.hero.badge}
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
            Live
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.14]">
            {ecosystemData.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-400">
              {ecosystemData.hero.titleGradient}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {ecosystemData.hero.description}
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-dark-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:brightness-110 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Our Services</span>
            <ChevronRight className="w-4 h-4 text-dark-950" />
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-dark-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 backdrop-blur-md transition-all hover:border-cyan-500/50 transform hover:-translate-y-0.5 shadow-xl"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Browse Web Clones & Order Build</span>
          </button>
        </div>

        {/* 3 Quick-Launch Interactive Service Pills */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div
            onClick={() => onOpenService('smc-forex')}
            className="cursor-pointer p-4 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-amber-500/50 backdrop-blur-md transition-all group flex items-center justify-between shadow-lg hover:shadow-amber-950/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-amber-400 font-bold uppercase">Academy 01</p>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300">SMC Forex Mastery</h4>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div
            onClick={() => onOpenService('fullstack-dev')}
            className="cursor-pointer p-4 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-md transition-all group flex items-center justify-between shadow-lg hover:shadow-cyan-950/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-cyan-400 font-bold uppercase">Academy 02</p>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300">Full-Stack Web Dev</h4>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div
            onClick={() => onOpenService('k12-scholars')}
            className="cursor-pointer p-4 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all group flex items-center justify-between shadow-lg hover:shadow-indigo-950/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-indigo-400 font-bold uppercase">Academy 03</p>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300">K-12 Scholars Tutoring</h4>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 bg-dark-900/70 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
          {ecosystemData.hero.stats.map((s, idx) => (
            <div key={idx} className="text-center p-2 border-r border-slate-800/70 last:border-none">
              <p className="text-2xl font-extrabold text-cyan-400 font-mono">{s.value}</p>
              <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
