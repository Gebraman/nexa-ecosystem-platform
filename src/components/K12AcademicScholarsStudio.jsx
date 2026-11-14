import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  UserCheck, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function K12AcademicScholarsStudio() {
  const [selectedGradeBand, setSelectedGradeBand] = useState('high-school');
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [hoursPerWeek, setHoursPerWeek] = useState(4);
  const [revealedSolutions, setRevealedSolutions] = useState({});

  const mentors = [
    {
      id: 'm1',
      name: 'Ermias Tadesse',
      credentials: 'B.Sc. Electrical & Computer Engineering (Honors), AAU',
      specialty: 'High School Calculus, Physics & SAT Math Prep',
      rating: '4.95',
      sessions: '140+ Hours',
      languages: 'English & Amharic',
      badge: 'AAU Top 1% Scholar'
    },
    {
      id: 'm2',
      name: 'Dr. Bethlehem Wolde',
      credentials: 'MD Candidate, AAU School of Medicine',
      specialty: 'Biology, Chemistry & Middle School Sciences',
      rating: '4.98',
      sessions: '180+ Hours',
      languages: 'English & Amharic',
      badge: 'Academic Medalist'
    },
    {
      id: 'm3',
      name: 'Natnael Mesfin',
      credentials: 'B.Sc. Computer Science & Software Engineering, AAU',
      specialty: 'Middle & High School Pre-Algebra, Geometry & Python Coding',
      rating: '4.90',
      sessions: '95+ Hours',
      languages: 'English & Amharic',
      badge: 'STEM Youth Lead'
    }
  ];

  const practiceProblems = [
    {
      id: 'p1',
      grade: 'High School (Grades 9-12)',
      subject: 'Algebra & Calculus',
      question: 'Solve for x in the quadratic equation: 2x² - 8x + 6 = 0',
      hint: 'Divide the entire equation by 2 first, then apply factoring or the quadratic formula.',
      steps: [
        'Step 1: Simplify by dividing all terms by 2: x² - 4x + 3 = 0',
        'Step 2: Factor into binomials: (x - 3)(x - 1) = 0',
        'Step 3: Set each factor to zero: x - 3 = 0 => x = 3; x - 1 = 0 => x = 1',
        'Final Solution: x = 1, x = 3'
      ]
    },
    {
      id: 'p2',
      grade: 'Middle School (Grades 7-8)',
      subject: 'Physics & Kinematics',
      question: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration and total distance covered?',
      hint: 'Use the kinematic formulas: a = (v - u) / t and s = ut + 0.5at².',
      steps: [
        'Step 1: Identify given variables: Initial velocity u = 0, Final velocity v = 20 m/s, Time t = 5 s.',
        'Step 2: Calculate acceleration: a = (20 - 0) / 5 = 4 m/s².',
        'Step 3: Calculate distance: s = (0)(5) + 0.5(4)(5²) = 0.5 * 4 * 25 = 50 meters.',
        'Final Solution: Acceleration = 4 m/s², Distance = 50 meters.'
      ]
    }
  ];

  const toggleSolution = (id) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      
      {/* 1. INTERACTIVE TUTORING PLAN CALCULATOR */}
      <div className="rounded-3xl bg-[#090d16] border border-[#2a2e39] p-5 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#2a2e39]">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> Customized Learning Plan Estimator
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Design Your Scholar's 1-on-1 Academic Roadmap
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Select your student's grade level and target subjects to calculate recommended weekly mentorship frequency.
            </p>
          </div>

          <a
            href="https://calendar.app.google/NqgKSXoBhqz163hG9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all self-start sm:self-auto shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free 30-Min Diagnostic</span>
          </a>
        </div>

        {/* Diagnostic Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Grade Band */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase">1. Grade Level Band:</label>
            <div className="space-y-2">
              {[
                { id: 'elementary', label: 'Grades 1–6 (Elementary Foundations)' },
                { id: 'middle', label: 'Grades 7–8 (Middle School Mastery)' },
                { id: 'high-school', label: 'Grades 9–12 (High School & SAT)' }
              ].map(b => (
                <button
                  key={b.id}
                  onClick={() => setSelectedGradeBand(b.id)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    selectedGradeBand === b.id 
                      ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                      : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Focus */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase">2. Core Subject Focus:</label>
            <div className="space-y-2">
              {[
                { id: 'math', label: 'Mathematics & Advanced Calculus' },
                { id: 'physics', label: 'Physics, Chemistry & Sciences' },
                { id: 'english', label: 'English Literature & Reading' },
                { id: 'coding', label: 'Introductory Python & Web Coding' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubject(s.id)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    selectedSubject === s.id 
                      ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                      : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Hours Recommendation */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase">3. Weekly Tutoring Intensity:</label>
            <div className="p-4 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Paced Hours:</span>
                <span className="text-indigo-400 font-bold text-sm">{hoursPerWeek} Hours / Week</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="2"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2 hrs (Paced)</span>
                <span>4 hrs (Standard)</span>
                <span>8 hrs (Intensive)</span>
              </div>

              <div className="pt-3 border-t border-[#2a2e39] text-xs space-y-1">
                <div className="text-white font-bold font-mono">Included in Roadmap:</div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  • 1-on-1 Dedicated AAU Honors Mentor<br />
                  • Weekly Written Diagnostic Progress Report<br />
                  • Homework Assistance + Competition Math Prep
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. AAU HONORS SCHOLAR MENTOR DIRECTORY */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            Verified Addis Ababa University Honors Mentors
          </h4>
          <span className="text-xs font-mono text-indigo-400 hidden sm:inline">100% Background-Checked Academic Leaders</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mentors.map((m) => (
            <div 
              key={m.id}
              className="p-5 rounded-2xl bg-[#131722] border border-[#2a2e39] hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 uppercase font-bold">
                    {m.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{m.rating}</span>
                  </div>
                </div>

                <h5 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {m.name}
                </h5>
                <p className="text-xs text-indigo-400 font-mono mt-0.5">
                  {m.credentials}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {m.specialty}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2a2e39] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{m.sessions}</span>
                <span className="text-emerald-400">{m.languages}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. INTERACTIVE STEM PRACTICE PROBLEMS */}
      <div className="rounded-3xl bg-[#090d16] border border-[#2a2e39] p-5 sm:p-7 space-y-5 shadow-2xl">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h4 className="text-lg sm:text-xl font-bold text-white">
            Interactive Scholar Practice Problem Sandbox
          </h4>
        </div>
        <p className="text-xs text-slate-400 max-w-2xl">
          See how AAU Scholar Mentors break down complex curriculum problems into intuitive, step-by-step principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {practiceProblems.map((prob) => {
            const isRevealed = revealedSolutions[prob.id];

            return (
              <div key={prob.id} className="p-5 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-indigo-400 font-bold">{prob.grade}</span>
                  <span className="text-slate-500">{prob.subject}</span>
                </div>

                <p className="text-sm font-bold text-white leading-snug">
                  {prob.question}
                </p>
                <p className="text-xs text-slate-400 italic">
                  <strong>Mentor Hint:</strong> {prob.hint}
                </p>

                <div className="pt-2 border-t border-[#2a2e39]">
                  <button
                    onClick={() => toggleSolution(prob.id)}
                    className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>{isRevealed ? 'Hide Step-by-Step Solution' : 'Show Step-by-Step Solution →'}</span>
                  </button>

                  {isRevealed && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#090d16] border border-indigo-500/30 text-xs font-mono space-y-1.5 text-slate-200 animate-fade-in">
                      {prob.steps.map((st, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
