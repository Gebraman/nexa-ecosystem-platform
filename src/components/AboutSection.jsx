import React from 'react';
import { Users, GraduationCap, Award, ShieldCheck, Sparkles, Code2, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-slate-800/80 bg-[#212529]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800/60 text-amber-400 text-xs font-mono uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-[#f39228]" />
            <span>Academic Excellence & Engineering Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Nexa Ecosystem
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Founded by university honors scholars and software engineers, Nexa Ecosystem combines high-performance full-stack web architecture, institutional SMC financial mastery, and personalized academic tutoring into one unified platform.
          </p>
        </div>

        {/* 3 Core Pillars of Nexa Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#212529] border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              Engineering-Grade Standards
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Every website and clone we ship is crafted with clean modular code, responsive Tailwind aesthetics, and enterprise cloud reliability.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Modular Architecture</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#212529] border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              Institutional Precision
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              In financial markets, we reject retail speculation. Our SMC Forex curriculum is built around strict mathematical probability, risk management, and order flow.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Interbank Liquidity & Order Flow</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#212529] border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              Dedicated Scholar Mentorship
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Our K-12 tutors are active top performers at Ethiopia’s premier universities, providing empathetic, rigorous 1-on-1 coaching for young learners globally.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1-on-1 Verified Faculty Mentors</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
