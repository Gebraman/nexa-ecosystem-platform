import React from 'react';
import { Layers } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="py-12 bg-dark-950 border-t border-slate-900 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center">
            <Layers className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <span className="text-white font-bold tracking-tight">NEXA ECOSYSTEM</span>
            <span className="text-slate-400 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-slate-400">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">
            About
          </button>
          <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors">
            Our Services
          </button>
          <button onClick={() => onNavigate('projects')} className="hover:text-emerald-400 transition-colors">
            Projects & Clones
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">
            Contact
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
