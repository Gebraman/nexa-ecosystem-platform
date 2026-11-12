import React, { useState } from 'react';
import { 
  Layers, 
  TableProperties, 
  Code2, 
  TrendingUp, 
  GraduationCap, 
  Workflow, 
  Calendar, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'all', label: 'Ecosystem Overview', icon: Layers },
    { id: 'digital-ops', label: 'Data Ops & USD Sheet', icon: TableProperties, badge: 'Live Demo' },
    { id: 'clone-lab', label: 'Dev Clones Lab', icon: Code2, badge: 'Samples' },
    { id: 'smc-forex', label: 'SMC Forex & Tech', icon: TrendingUp },
    { id: 'k12-scholars', label: 'K-12 Scholars', icon: GraduationCap },
    { id: 'workflow', label: 'Bidding & Workflow', icon: Workflow },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('all')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-emerald-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  NEXA
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                  ECOSYSTEM
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 uppercase font-mono">
                Operations • Clones • Academy
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-dark-900/60 border border-slate-800/60 p-1.5 rounded-2xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive 
                      ? 'bg-cyan-500 text-dark-950 font-semibold shadow-md shadow-cyan-500/25' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-dark-950' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono uppercase ${
                      isActive ? 'bg-dark-950/30 text-dark-950' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {link.badge}
                    </span>
                  )}
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
            
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Hire Team</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-dark-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-cyan-500 text-dark-950 font-bold' 
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {link.badge}
                  </span>
                )}
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
              Schedule Google Meet
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-cyan-500 text-dark-950 text-sm font-bold shadow-md shadow-cyan-500/20"
            >
              Hire Nexa Digital Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
