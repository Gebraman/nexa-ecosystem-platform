import React from 'react';
import { Users, GraduationCap, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function TeamSection() {
  return (
    <section className="py-20 border-b border-slate-800/80 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Leadership // University Scholars & Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Minds Driving Nexa Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Founded by high-achieving scholars from Addis Ababa University & Bahir Dar University combining engineering precision, financial modeling, and global client execution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemData.team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
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
                <span>Verified Lead</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
