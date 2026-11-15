import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageCircle, 
  PhoneCall, 
  Calendar 
} from 'lucide-react';

export default function TechAcademyFAQ() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0); // First item open by default

  const faqs = [
    {
      q: "Do I need prior coding, computer science, or mathematics background to join?",
      a: "Absolutely not. Over 75% of our students come from completely non-technical backgrounds—including healthcare, hospitality, logistics, business, and humanities. Our curriculum is scaffolded from zero: Phase 1 teaches clean document markup and styling before Phase 2 introduces programmatic logic in JavaScript."
    },
    {
      q: "What hardware and computer equipment do I need for the course?",
      a: "You need a standard laptop or desktop running Windows 10/11, macOS, or modern Linux with at least 8GB RAM (16GB recommended) and stable internet. You will also need a functional microphone and webcam for live Zoom weekend lectures and interactive group discussion shifts."
    },
    {
      q: "How do the weekend live classes and weekday discussion shifts work?",
      a: "Core live lectures take place every Saturday and Sunday from 10:00 AM – 12:00 PM EST (5:00 PM – 7:00 PM EAT / ETH Local Time ማታ 11:00 – 1:00 ሰዓት). On Tuesdays and Thursdays, students join small peer study groups choosing from 4 flexible shifts (Morning, Afternoon, Evening, or Night) that fit their personal job schedules."
    },
    {
      q: "What happens if I miss a live class due to work or family obligations?",
      a: "Every live lecture is recorded in 1080p HD and uploaded to your Student Launchpad dashboard within 4 hours. You can watch the full workshop replay, download the instructor's slides, and pull the starter repository from GitHub at any time."
    },
    {
      q: "How does subsidized tuition work for students living inside Ethiopia?",
      a: "Students physically residing in Ethiopia qualify for heavily subsidized local tuition ($600 for In-Class Live or $300 for Self-Paced) payable in Ethiopian Birr via Commercial Bank of Ethiopia (CBE) or Telebirr at the prevailing official bank rate. Eligibility is verified via Ethiopian National ID or Kebele card."
    },
    {
      q: "What is the Phase 4 Abe Garage AI Capstone Project?",
      a: "Abe Garage is our flagship commercial SaaS project spanning 10 intensive sessions. Students build a complete auto repair shop management system connecting MySQL relational databases, JWT authenticated mechanic dashboards, parts inventory deduction, and an OpenAI OBD-II diagnostic trouble code assistant."
    },
    {
      q: "Does the Academy provide career placement coaching and mock interviews?",
      a: "Yes. Phase 4 concludes with comprehensive career coaching: technical resume engineering, LinkedIn branding, GitHub code portfolio audits, and simulated live coding technical interviews covering algorithms and system architecture."
    },
    {
      q: "Why is no upfront payment required to submit an application?",
      a: "We believe in transparency and student fit. We first conduct a complimentary 30-minute diagnostic session via Google Meet to evaluate your goals, discuss your timezone schedule, and ensure the program is the right match before any financial commitment is made."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-dark-900/60 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about prerequisites, schedules, tuition or career coaching? Find clear, direct answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-dark-950 border-amber-500/50 shadow-lg shadow-amber-500/5' 
                    : 'bg-dark-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  onClick={() => toggleFaq(idx)}
                  className="p-5 sm:p-6 cursor-pointer select-none flex items-center justify-between gap-4"
                >
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Admissions Hotline Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-dark-950 to-dark-950 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">Still have questions about joining?</h4>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with our academic admissions advisors. We will help you select the ideal schedule shift.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+12023862702"
              className="px-4 py-2.5 rounded-xl bg-dark-900 border border-amber-500/40 text-amber-400 font-bold text-xs flex items-center gap-2 hover:bg-dark-800 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>(202) 386 2702</span>
            </a>
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Diagnostic</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
