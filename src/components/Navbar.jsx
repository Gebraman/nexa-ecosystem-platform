import React from 'react';
import { 
  Layers, 
  Calendar, 
  User, 
  LogOut, 
  ArrowLeft
} from 'lucide-react';

export default function Navbar({ 
  currentView = 'home', 
  onNavigateView, 
  currentUser, 
  onSignOut,
  onOpenAuth 
}) {
  const isIsolatedView = currentView !== 'home';

  const handleReturnHome = () => {
    onNavigateView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#212529]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Logo & Optional Isolated Return Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div 
              onClick={handleReturnHome} 
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
              title="Return to Nexa Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-[#f39228] to-amber-600 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
                <div className="w-full h-full bg-[#212529] rounded-[10px] flex items-center justify-center">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#f39228] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-[#f39228] transition-colors">
                    NEXA
                  </span>
                  <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-950/80 text-amber-400 border border-amber-800/80 font-bold">
                    ECOSYSTEM
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] tracking-wider text-slate-400 uppercase font-mono hidden xs:block">
                  Academy • Web Lab • Mentorship
                </p>
              </div>
            </div>

            {/* If in Isolated View: Quick Back to Home Button */}
            {isIsolatedView && (
              <button
                onClick={handleReturnHome}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all ml-1 sm:ml-2 shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#f39228]" />
                <span className="hidden sm:inline">← Back to Home</span>
                <span className="sm:hidden">Home</span>
              </button>
            )}
          </div>

          {/* Right Action Area: User Account & Book Meet */}
          <div className="flex items-center gap-2 sm:gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs">
                  <User className="w-3.5 h-3.5 text-[#f39228]" />
                  <span className="font-semibold text-white max-w-[100px] sm:max-w-[130px] truncate">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800/60 hidden sm:inline">
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
                className="flex items-center gap-1.5 text-xs font-bold px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 shadow-md shadow-amber-500/20 transition-all"
              >
                <User className="w-3.5 h-3.5 text-dark-950" />
                <span>Sign In</span>
              </button>
            )}

            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all hover:border-amber-500/40"
            >
              <Calendar className="w-3.5 h-3.5 text-[#f39228]" />
              <span className="hidden sm:inline">Book Meet</span>
              <span className="sm:hidden">Meet</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
