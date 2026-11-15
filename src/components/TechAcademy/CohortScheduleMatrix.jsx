import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Globe, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  MapPin 
} from 'lucide-react';
import { cohortScheduleData } from '../../data/techAcademyPricing';

export default function CohortScheduleMatrix() {
  const [selectedShiftId, setSelectedShiftId] = useState('shift-evening');

  const selectedShift = cohortScheduleData.weekdayDiscussionShifts.shifts.find(
    s => s.id === selectedShiftId
  ) || cohortScheduleData.weekdayDiscussionShifts.shifts[2];

  return (
    <section id="schedule" className="py-20 bg-dark-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Multi-Timezone Synchronization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {cohortScheduleData.header.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {cohortScheduleData.header.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Part 1: Weekend Live Sessions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase">
                  Weekend Live Workshops
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  Saturday & Sunday
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Core Live Instructor Lectures
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Live code demonstrations, architectural walkthroughs, and direct student Q&A with senior software engineers.
              </p>

              {/* Synchronized Timezone Cards Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cohortScheduleData.weekendLiveSessions[0].timezones.map((tz, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-dark-950 border border-slate-800/90 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                        <span>{tz.zone}</span>
                        <MapPin className="w-3 h-3 text-cyan-400" />
                      </div>
                      <h4 className="text-base font-bold text-white font-mono">
                        {tz.time}
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-2 block">
                      {tz.location}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  All live sessions recorded for asynchronous review
                </span>
                <span className="font-mono text-[11px]">2 Hours / Session</span>
              </div>
            </div>
          </div>

          {/* Part 2: Weekday Discussion Shifts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold uppercase">
                  Weekday Labs
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  Tuesday & Thursday
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Small Group Discussion Shifts
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Choose the peer group shift that matches your personal schedule:
              </p>

              {/* Shift Selector Radios */}
              <div className="mt-4 space-y-2.5">
                {cohortScheduleData.weekdayDiscussionShifts.shifts.map((shift) => {
                  const isSelected = selectedShiftId === shift.id;

                  return (
                    <div
                      key={shift.id}
                      onClick={() => setSelectedShiftId(shift.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-dark-950 border-cyan-500 shadow-lg shadow-cyan-950/20'
                          : 'bg-dark-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                          <h4 className="text-xs font-bold text-white">{shift.name}</h4>
                        </div>
                        <p className="text-[11px] font-mono text-cyan-400 mt-1">
                          {shift.estTime} • {shift.ethTime}
                        </p>
                      </div>

                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-cyan-500 border-cyan-400 text-dark-950' : 'border-slate-700'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Shift Details Highlight */}
              <div className="mt-5 p-3.5 rounded-xl bg-dark-950 border border-cyan-500/20 text-xs text-slate-300">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                  Selected Shift Recommendation:
                </span>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {selectedShift.bestFor}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
