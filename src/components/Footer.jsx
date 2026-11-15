import React from 'react';
import { Layers } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleClick = (id) => {
    if (onNavigate) onNavigate(id);
  };

  return (
    <footer className="py-12 bg-[#212529] border-t border-slate-800 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-dark-950 border border-amber-500/30 flex items-center justify-center">
            <Layers className="w-4 h-4 text-[#f39228]" />
          </div>
          <div>
            <span className="text-white font-bold tracking-tight">NEXA ECOSYSTEM</span>
            <span className="text-slate-500 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-slate-300">
          <button onClick={() => handleClick('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => handleClick('forex-trading')} className="hover:text-[#f39228] transition-colors">
            Forex SMC
          </button>
          <button onClick={() => handleClick('fullstack-dev')} className="hover:text-[#f39228] transition-colors">
            Full-Stack Academy
          </button>
          <button onClick={() => handleClick('k12-scholars')} className="hover:text-[#f39228] transition-colors">
            K-12 Scholars
          </button>
          <button onClick={() => handleClick('projects')} className="hover:text-[#f39228] transition-colors">
            Web Lab & Clones
          </button>
        </div>

        {/* Developer Credit */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Engineered & Developed by</span>
          <span className="text-[#f39228] font-bold tracking-wider">Gman</span>
        </div>

      </div>
    </footer>
  );
}
