import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  Code2, 
  Calendar, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Our Services' },
    { id: 'projects', label: 'Projects & Clones' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-amber-500 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  NEXA
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-bold">
                  ECOSYSTEM
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 uppercase font-mono">
                Academy • Web Lab • Mentorship
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/70 border border-slate-800/80 p-1.5 rounded-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 transition-all hover:border-cyan-500/40"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Book Meet</span>
            </a>
            
            <button
              onClick={() => handleNavClick('projects')}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-dark-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Order Website</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-cyan-500 text-dark-950 font-bold' 
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              Schedule 15-Min Meeting
            </a>
            <button
              onClick={() => handleNavClick('projects')}
              className="w-full text-center py-2.5 rounded-xl bg-cyan-500 text-dark-950 text-sm font-bold shadow-md shadow-cyan-500/20"
            >
              Explore Projects & Order Build
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
