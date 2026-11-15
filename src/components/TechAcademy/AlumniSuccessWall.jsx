import React from 'react';
import { 
  Star, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Quote 
} from 'lucide-react';

export default function AlumniSuccessWall() {
  const alumni = [
    {
      name: "Ermias Tadesse",
      currentRole: "Full-Stack Software Engineer",
      company: "Deloitte Digital",
      location: "Washington, DC (US)",
      previousRole: "Former Logistics Coordinator",
      quote: "Before joining the Academy, I had zero coding knowledge. The step-by-step scaffolding from HTML to React and MySQL gave me real confidence. Building the production full-stack Q&A capstone was the exact reason I aced my technical interview.",
      salaryIncrease: "140% Compensation Increase",
      avatar: "ET",
      rating: 5
    },
    {
      name: "Bethlehem Wolde",
      currentRole: "Frontend React Engineer",
      company: "Safaricom Telecommunications",
      location: "Addis Ababa, Ethiopia",
      previousRole: "Former Science Graduate",
      quote: "The ability to attend live weekend lectures in East Africa Time and have dedicated local teaching assistants who spoke both Amharic and English made all the difference. The production React and MySQL project gave me a massive edge in the local job market.",
      salaryIncrease: "Hired within 45 Days of Graduation",
      avatar: "BW",
      rating: 5
    },
    {
      name: "Natnael Mesfin",
      currentRole: "Backend & Cloud Engineer",
      company: "Capital One Financial",
      location: "Richmond, VA (US)",
      previousRole: "Former Retail Associate",
      quote: "The weekday discussion shifts allowed me to keep working my daytime job while coding every evening. When interviewers saw my GitHub repository with live deployed MERN applications, they treated me as an experienced engineer.",
      salaryIncrease: "$95,000 Starting Salary",
      avatar: "NM",
      rating: 5
    },
    {
      name: "Sara Kassa",
      currentRole: "Full-Stack Software Engineer",
      company: "FinTech Innovation Lab",
      location: "Toronto, Canada",
      previousRole: "Former Healthcare Worker",
      quote: "The live Zoom classes and 1-on-1 mentor code reviews were invaluable. We deployed our full-stack apps to the cloud and learned how real engineering teams build, test, and ship software.",
      salaryIncrease: "Double Career Pivot Success",
      avatar: "SK",
      rating: 5
    }
  ];

  return (
    <section id="alumni" className="py-20 bg-dark-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Alumni Outcomes & Career Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Zero Coding to Senior Engineers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Read authentic reviews from recent alumni across the North American diaspora and East Africa who transformed their careers through our 32-week immersive bootcamp.
          </p>

          {/* Key Outcome Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">94%</span>
              <p className="text-[11px] text-slate-400 mt-1 uppercase font-mono">Employment Rate</p>
            </div>
            <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">$102K</span>
              <p className="text-[11px] text-slate-400 mt-1 uppercase font-mono">Avg US Starting Pay</p>
            </div>
            <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">12+</span>
              <p className="text-[11px] text-slate-400 mt-1 uppercase font-mono">Shipped Projects</p>
            </div>
            <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">350+</span>
              <p className="text-[11px] text-slate-400 mt-1 uppercase font-mono">Graduated Scholars</p>
            </div>
          </div>
        </div>

        {/* 4 Alumni Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alumni.map((alum, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Strip with Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(alum.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                    {alum.salaryIncrease}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{alum.quote}"
                </p>
              </div>

              {/* Alumni Footer Profile */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-dark-950 font-extrabold flex items-center justify-center text-sm shadow-md">
                    {alum.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{alum.name}</h4>
                    <p className="text-xs text-amber-400 font-medium">
                      {alum.currentRole} • <strong className="text-slate-200">{alum.company}</strong>
                    </p>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {alum.previousRole} &bull; {alum.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
