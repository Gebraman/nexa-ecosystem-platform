import React from 'react';
import { 
  TableProperties, 
  Code2, 
  TrendingUp, 
  GraduationCap, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Globe2,
  Sparkles
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function Hero({ onSelectPillar }) {
  const pillars = [
    {
      id: 'digital-ops',
      title: 'Digital Operations & USD Sheet',
      subtitle: 'Data Entry, Spreadsheets & BPO',
      description: 'High-speed data scrubbing, CRM lead enrichment, and automated Excel/Sheets workflows for global businesses.',
      tag: 'Agency Division',
      icon: TableProperties,
      accent: 'cyan',
      cta: 'Explore USD Sheet Demo',
    },
    {
      id: 'clone-lab',
      title: 'Full-Stack Project Clone Lab',
      subtitle: 'Custom Web Dev for Clients',
      description: 'Live interactive clones of SaaS, LMS, E-Commerce, and Fintech dashboards ready to customize and deploy.',
      tag: 'Developer Lab',
      icon: Code2,
      accent: 'emerald',
      cta: 'Inspect Working Clones',
    },
    {
      id: 'smc-forex',
      title: 'SMC Forex & Tech Academy',
      subtitle: 'Order Blocks & Unlisted Videos',
      description: 'Master institutional price action (SMC), liquidity sweeps, and full-stack coding with unlisted video modules & backtest logs.',
      tag: 'Markets & Tech',
      icon: TrendingUp,
      accent: 'amber',
      cta: 'View Backtest Journal',
    },
    {
      id: 'k12-scholars',
      title: 'K-12 Academic Scholars',
      subtitle: 'Elementary to Grade 12 STEM',
      description: '1-on-1 personalized academic tutoring in Mathematics, Calculus, Physics, and English led by university honors scholars.',
      tag: 'Tutoring Network',
      icon: GraduationCap,
      accent: 'indigo',
      cta: 'Find Tutor / Book Session',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/10 to-emerald-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-12 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide">
              NEXA ECOSYSTEM V2.0 // EXPANDED MULTI-VERTICAL PLATFORM
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
              Active
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Elite Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">Digital Operations</span>, Web Clones & Academies
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Nexa is an integrated multi-tier powerhouse: executing high-volume remote contracts (USD data entry & research), coding production-grade web project clones, training institutional SMC Forex traders, and mentoring K-12 academic scholars worldwide.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onSelectPillar('digital-ops')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-dark-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-all transform hover:-translate-y-0.5"
            >
              <TableProperties className="w-4 h-4" />
              <span>Launch Live USD Sheet Demo</span>
            </button>

            <button
              onClick={() => onSelectPillar('clone-lab')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 transition-all hover:border-slate-500 transform hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Inspect Web Project Clones</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 bg-dark-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
          <div className="text-center p-3 border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              {ecosystemData.stats.totalDataEntriesCleaned}
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Data Rows Processed</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              {ecosystemData.stats.tasksCompleted}
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Bids & Tasks Executed</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              {ecosystemData.stats.avgSmcRiskReward}
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Avg SMC Risk:Reward</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
              Grades 1–12
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">STEM Scholars Tutored</p>
          </div>
        </div>

        {/* 4 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => onSelectPillar(p.id)}
                className="group relative cursor-pointer rounded-2xl bg-dark-900/70 border border-slate-800/90 p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 uppercase">
                      {p.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {p.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <span>{p.cta}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
