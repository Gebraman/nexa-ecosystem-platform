import React from 'react';
import { Layers, Heart } from 'lucide-react';

export default function Footer({ onSelectTab }) {
  return (
    <footer className="py-12 bg-dark-950 border-t border-slate-900 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div>
            <span className="text-white font-bold tracking-tight">NEXA ECOSYSTEM</span>
            <span className="text-slate-400 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-slate-400">
          <button onClick={() => onSelectTab('digital-ops')} className="hover:text-cyan-400 transition-colors">
            USD Data Operations
          </button>
          <button onClick={() => onSelectTab('clone-lab')} className="hover:text-emerald-400 transition-colors">
            Developer Clone Lab
          </button>
          <button onClick={() => onSelectTab('smc-forex')} className="hover:text-amber-400 transition-colors">
            SMC Forex Academy
          </button>
          <button onClick={() => onSelectTab('k12-scholars')} className="hover:text-indigo-400 transition-colors">
            K-12 Scholars
          </button>
          <button onClick={() => onSelectTab('workflow')} className="hover:text-white transition-colors">
            Job Workflow
          </button>
        </div>

        {/* Gman Developer Credit */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Engineered & Developed by</span>
          <span className="text-cyan-400 font-bold tracking-wider">Gman</span>
        </div>

      </div>
    </footer>
  );
}
