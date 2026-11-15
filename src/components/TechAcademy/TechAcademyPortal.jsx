import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  CreditCard, 
  Clock, 
  MonitorPlay, 
  GraduationCap, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import TechAcademyHero from './TechAcademyHero';
import CurriculumAccordion from './CurriculumAccordion';
import TuitionCalculator from './TuitionCalculator';
import CohortScheduleMatrix from './CohortScheduleMatrix';
import StudentLaunchpadDashboard from './StudentLaunchpadDashboard';

export default function TechAcademyPortal({ onClose }) {
  // View mode: 'admissions' (Public landing page with 32-week curriculum & pricing) or 'launchpad' (Student LMS Dashboard)
  const [activeViewMode, setActiveViewMode] = useState('admissions');

  const scrollToSection = (id) => {
    setActiveViewMode('admissions');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="w-full bg-dark-950 text-slate-100 min-h-screen">
      
      {/* Sticky Secondary Navigation Header for Tech Academy */}
      <div className="sticky top-0 z-30 bg-dark-900/95 border-b border-slate-800 backdrop-blur-md px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand & Mode Switcher */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase tracking-wider">
            Nexa Tech Academy
          </span>

          <div className="flex items-center p-1 rounded-xl bg-dark-950 border border-slate-700 text-xs">
            <button
              onClick={() => setActiveViewMode('admissions')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeViewMode === 'admissions'
                  ? 'bg-amber-500 text-dark-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Admissions & Curriculum
            </button>
            <button
              onClick={() => setActiveViewMode('launchpad')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeViewMode === 'launchpad'
                  ? 'bg-cyan-500 text-dark-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>Student Launchpad</span>
            </button>
          </div>
        </div>

        {/* Section Quick Jump Anchors (Visible when in Admissions view) */}
        {activeViewMode === 'admissions' && (
          <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-300">
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="hover:text-amber-400 transition-colors"
            >
              Curriculum (Phases 1-4)
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-amber-400 transition-colors"
            >
              Tuition (USD / Birr)
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="hover:text-amber-400 transition-colors"
            >
              Class Schedule & Shifts
            </button>
          </div>
        )}

        {/* Diagnostic Booking CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://calendar.app.google/NqgKSXoBhqz163hG9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Diagnostic</span>
          </a>
        </div>

      </div>

      {/* Main Content Area */}
      {activeViewMode === 'admissions' ? (
        <div className="space-y-0">
          
          {/* 1. Hero with Admissions Lead Capture Card */}
          <TechAcademyHero 
            onExploreCurriculum={() => scrollToSection('curriculum')}
            onBookDiagnostic={() => window.open('https://calendar.app.google/NqgKSXoBhqz163hG9', '_blank')}
          />

          {/* 2. 4-Phase Curriculum Accordion */}
          <CurriculumAccordion />

          {/* 3. Dual-Region Tuition Calculator */}
          <TuitionCalculator />

          {/* 4. Multi-Timezone Cohort Schedule Matrix */}
          <CohortScheduleMatrix />

          {/* 5. Bottom Admissions CTA Strip */}
          <div className="py-16 bg-gradient-to-t from-dark-950 via-dark-900 to-dark-950 text-center border-t border-slate-800">
            <div className="max-w-3xl mx-auto px-4 space-y-6">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800 uppercase font-bold">
                Limited Cohort Seats
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                Ready to Accelerate Your Engineering Career?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Schedule a 30-minute diagnostic session with our academic advisory team to review your baseline experience and reserve your seat.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free 30-Min Diagnostic</span>
                </a>
                <button
                  onClick={() => setActiveViewMode('launchpad')}
                  className="px-6 py-3.5 rounded-2xl bg-dark-900 hover:bg-dark-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2"
                >
                  <MonitorPlay className="w-4 h-4 text-cyan-400" />
                  <span>Preview Student Launchpad Portal</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* Student Launchpad LMS Dashboard View */
        <StudentLaunchpadDashboard />
      )}

    </div>
  );
}
