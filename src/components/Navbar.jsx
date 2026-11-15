import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  Code2, 
  Calendar, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap,
  TrendingUp,
  User,
  LogOut,
  ArrowLeft,
  Home
} from 'lucide-react';

export default function Navbar({ 
  currentView = 'home', 
  onNavigateView, 
  currentUser, 
  onSignOut,
  onOpenAuth 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (viewId, sectionId) => {
    if (viewId === 'home') {
      onNavigateView('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      onNavigateView(viewId);
    }
    setMobileMenuOpen(false);
  };

  const isIsolatedView = currentView !== 'home';

  return (
    <header className="sticky top-0 z-50 bg-[#212529]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-[#f39228] to-amber-600 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <div className="w-full h-full bg-[#212529] rounded-[10px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#f39228] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-[#f39228] transition-colors">
                  NEXA
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-950/80 text-amber-400 border border-amber-800/80 font-bold">
                  ECOSYSTEM
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 uppercase font-mono">
                Academy • Web Lab • Scholar Mentorship
              </p>
            </div>
          </div>

          {/* If In Isolated View: Show Back to Home Pill */}
          {isIsolatedView ? (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
              >
                <ArrowLeft className="w-4 h-4 text-[#f39228]" />
                <span>Return to Nexa Home</span>
              </button>

              <div className="h-5 w-px bg-slate-800" />

              {/* Quick Jump Switchers between Verticals */}
              <button
                onClick={() => handleNavClick('forex-trading')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'forex-trading'
                    ? 'bg-[#f39228] text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Forex SMC
              </button>
              <button
                onClick={() => handleNavClick('fullstack-dev')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'fullstack-dev'
                    ? 'bg-[#f39228] text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Full-Stack Dev
              </button>
              <button
                onClick={() => handleNavClick('k12-scholars')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'k12-scholars'
                    ? 'bg-[#f39228] text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                K-12 Scholars
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'projects'
                    ? 'bg-[#f39228] text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Web Lab
              </button>
            </div>
          ) : (
            /* Desktop Nav on Home */
            <nav className="hidden md:flex items-center gap-1 bg-dark-950/70 border border-slate-800 p-1.5 rounded-2xl">
              <button
                onClick={() => handleNavClick('home', 'home')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white hover:bg-slate-800/80 transition-all"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('home', 'about')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('forex-trading')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                Forex SMC
              </button>
              <button
                onClick={() => handleNavClick('fullstack-dev')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                Full-Stack Academy
              </button>
              <button
                onClick={() => handleNavClick('k12-scholars')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                K-12 Scholars
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                Web Lab & Clones
              </button>
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                Contact
              </button>
            </nav>
          )}

          {/* Right Action Area: User Badge / Sign In & Book Meet */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs">
                  <User className="w-3.5 h-3.5 text-[#f39228]" />
                  <span className="font-semibold text-white max-w-[120px] truncate">{currentUser.name}</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800/60">
                    {currentUser.role || 'Scholar'}
                  </span>
                </div>

                <button
                  onClick={onSignOut}
                  title="Sign Out"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-colors border border-slate-700"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 shadow-md shadow-amber-500/20 transition-all"
              >
                <User className="w-3.5 h-3.5 text-dark-950" />
                <span>Scholar Sign In</span>
              </button>
            )}

            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all hover:border-amber-500/40"
            >
              <Calendar className="w-3.5 h-3.5 text-[#f39228]" />
              <span>Book Meet</span>
            </a>
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
        <div className="md:hidden bg-[#212529] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {isIsolatedView && (
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] font-bold text-xs flex items-center gap-2 mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Nexa Home</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('home', 'home')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('forex-trading')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            Forex SMC Trading
          </button>
          <button
            onClick={() => handleNavClick('fullstack-dev')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            Full-Stack Academy
          </button>
          <button
            onClick={() => handleNavClick('k12-scholars')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            K-12 Scholars Tutoring
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
          >
            Web Lab & Clones
          </button>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {currentUser ? (
              <div className="flex items-center justify-between p-2 rounded-xl bg-dark-950 border border-slate-800 text-xs">
                <span className="font-semibold text-white">{currentUser.name}</span>
                <button
                  onClick={onSignOut}
                  className="text-rose-400 font-mono text-[11px] underline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 rounded-xl bg-[#f39228] text-dark-950 text-sm font-bold shadow-md"
              >
                Scholar Sign In / Register
              </button>
            )}

            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#f39228]" />
              Schedule 15-Min Meeting
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
