import React from 'react';
import { GraduationCap, ArrowLeft, Sparkles, Calendar, BookOpen, ShieldCheck } from 'lucide-react';
import K12AcademicScholarsStudio from './K12AcademicScholarsStudio';

export default function K12ScholarsView({ onBackToHome }) {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header Bar */}
      <div className="bg-[#212529] border-b border-slate-800 sticky top-20 z-30 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#f39228]" />
            <span>← Back to Home / Services</span>
          </button>
          
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase hidden sm:inline">
            Isolated Track
          </span>
          <span className="text-sm font-bold text-white hidden md:inline">
            Nexa K-12 Academic Scholars Tutoring Network
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://calendar.app.google/NqgKSXoBhqz163hG9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free 30-Min Diagnostic</span>
          </a>
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Track Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#212529] border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-mono uppercase font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f39228]" />
              <span>1-on-1 Online Academic Mentorship</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              Nexa K-12 Academic Scholars Network
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Empowering next-generation scholars: personalized 1-on-1 online academic coaching from verified senior university scholars and certified teachers for Grades 1–12 in Math, Sciences, and Programming.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-950 p-3 rounded-2xl border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>100% Background-Checked Academic Faculty</span>
          </div>
        </div>

        {/* Studio Body */}
        <K12AcademicScholarsStudio />
      </div>
    </div>
  );
}
