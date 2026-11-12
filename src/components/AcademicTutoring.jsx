import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Users, 
  Sparkles, 
  PenTool, 
  FileCheck2, 
  Clock, 
  Award,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function AcademicTutoring() {
  const [selectedLevelId, setSelectedLevelId] = useState('highschool');
  const [bookingGrade, setBookingGrade] = useState('Grade 10');
  const [bookingSubject, setBookingSubject] = useState('Calculus / Mathematics');
  const [bookingStudentName, setBookingStudentName] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const activeLevel = ecosystemData.academicTutoring.levels.find(l => l.id === selectedLevelId) 
    || ecosystemData.academicTutoring.levels[2];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      window.open('https://calendar.app.google/NqgKSXoBhqz163hG9', '_blank');
    }, 1200);
  };

  return (
    <section id="k12-scholars" className="py-20 border-b border-slate-800/80 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-mono uppercase mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pillar 04 // K-12 Academic Scholars Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              1-on-1 Online STEM & Academic Tutoring (Grades 1 – 12)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Empowering young scholars from elementary foundation to high school calculus, physics, and exam prep. Mentored 1-on-1 by honors university scholars from Addis Ababa University with weekly parent reports.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-dark-950 font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Diagnostic Session</span>
            </a>
          </div>
        </div>

        {/* Level Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {ecosystemData.academicTutoring.levels.map((lvl) => {
            const isSelected = selectedLevelId === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevelId(lvl.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-dark-900 border-indigo-500/80 shadow-xl shadow-indigo-950/20'
                    : 'bg-dark-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-400 font-bold">
                    {lvl.grades}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-indigo-500 text-dark-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {lvl.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {lvl.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {lvl.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Level Detail View */}
        <div className="p-8 rounded-2xl bg-dark-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                Curriculum Focus // {activeLevel.grades}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {activeLevel.name} Academic Roadmap
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {activeLevel.description}
              </p>
            </div>

            {/* Subjects List */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Subjects Offered & Core Concepts:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLevel.subjects.map((sub, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-950 border border-slate-800/80 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Format & Ideal For */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Session Format
                </span>
                <p className="text-xs text-slate-200 mt-1 font-medium">{activeLevel.format}</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400" /> Ideal For
                </span>
                <p className="text-xs text-slate-200 mt-1 font-medium">{activeLevel.idealFor}</p>
              </div>
            </div>
          </div>

          {/* Booking / Diagnostic Intake Form */}
          <div className="lg:col-span-5 bg-dark-950 p-6 rounded-2xl border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h4 className="text-base font-bold text-white">
                  Book 1-on-1 Diagnostic Session
                </h4>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Every new student receives a complimentary 30-minute concept evaluation and custom study plan.
              </p>

              {bookingSubmitted ? (
                <div className="p-6 rounded-xl bg-indigo-950/80 border border-indigo-500 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-indigo-400 mx-auto" />
                  <h5 className="text-sm font-bold text-white">Diagnostic Registered!</h5>
                  <p className="text-xs text-slate-300">
                    Redirecting you to select your preferred Google Meet time slot...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 uppercase">Student Name or Parent</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah / Parent Contact"
                      value={bookingStudentName}
                      onChange={e => setBookingStudentName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-900 border border-slate-700 text-white text-xs focus:border-indigo-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 uppercase">Target Grade</label>
                    <select
                      value={bookingGrade}
                      onChange={e => setBookingGrade(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-900 border border-slate-700 text-white text-xs focus:border-indigo-400 focus:outline-none"
                    >
                      <option value="Grade 1-3">Grade 1 – 3 (Primary Fundamentals)</option>
                      <option value="Grade 4-5">Grade 4 – 5 (Upper Elementary)</option>
                      <option value="Grade 6-8">Grade 6 – 8 (Middle School Pre-Algebra)</option>
                      <option value="Grade 9-10">Grade 9 – 10 (Geometry & Algebra II)</option>
                      <option value="Grade 11-12">Grade 11 – 12 (Pre-Calc, Calculus, Physics)</option>
                      <option value="SAT Prep">Standardized Exam / SAT Prep</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 uppercase">Priority Subject</label>
                    <select
                      value={bookingSubject}
                      onChange={e => setBookingSubject(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-900 border border-slate-700 text-white text-xs focus:border-indigo-400 focus:outline-none"
                    >
                      <option value="Mathematics">Mathematics (Foundational to Calculus)</option>
                      <option value="Physics">Physics & Applied Mechanics</option>
                      <option value="Chemistry">Chemistry & Molecular Science</option>
                      <option value="English Reading & Writing">English Reading Comprehension & Writing</option>
                      <option value="Coding & Web Dev">Coding & Computational Thinking</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-dark-950 font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm & Pick Time on Google Calendar</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-obligation trial • 100% money-back parent satisfaction policy.</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Parent Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemData.academicTutoring.tutorHighlights.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-dark-950 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                {idx === 0 ? <Award className="w-5 h-5" /> : idx === 1 ? <PenTool className="w-5 h-5" /> : <FileCheck2 className="w-5 h-5" />}
              </div>
              <h4 className="text-base font-bold text-white">{t.name}</h4>
              <p className="text-xs text-indigo-400 font-mono mt-0.5">{t.role}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
