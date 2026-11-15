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
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <K12AcademicScholarsStudio />
      </div>
    </div>
  );
}
