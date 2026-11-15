import React from 'react';
import { Layers, ArrowLeft, Sparkles, Code2, Calendar } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

export default function ProjectsView({ onBackToHome }) {
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
            Nexa Developer Web Lab & Production Clones
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
            <span>Schedule Scoping Call</span>
          </a>
        </div>
      </div>

      {/* Main Lab Area */}
      <div className="flex-1 w-full">
        <ProjectsSection />
      </div>
    </div>
  );
}
