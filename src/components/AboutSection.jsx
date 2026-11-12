import React from 'react';
import { Users, GraduationCap, Award, ShieldCheck, Sparkles, BookOpen, Code2 } from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-slate-800/80 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Excellence & Engineering Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Nexa Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Founded by honors scholars from Addis Ababa University & Bahir Dar University, combining software architecture, financial market mastery, and personalized academic mentorship into one cohesive innovation hub.
          </p>
        </div>

        {/* 3 Core Pillars of Nexa Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-dark-900 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Engineering-Grade Standards</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Every website and clone we ship is crafted with clean modular code, responsive Tailwind aesthetics, and enterprise cloud reliability.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-900 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Institutional Precision</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              In financial markets, we reject retail speculation. Our SMC Forex curriculum is built around strict mathematical probability, risk management, and order flow.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-900 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Dedicated Scholar Mentorship</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Our K-12 tutors are active top performers at Ethiopia’s premier universities, providing empathetic, rigorous 1-on-1 coaching for young learners globally.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemData.team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-slate-800 to-indigo-500/20 border border-slate-700 flex items-center justify-center font-bold font-mono text-cyan-400 text-lg mb-5 group-hover:scale-105 transition-transform">
                  {member.name.slice(0, 2).toUpperCase()}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-xs font-semibold text-cyan-400 mt-1">
                  {member.role}
                </p>

                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{member.background}</span>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Scholar</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
