import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  Users, 
  Code2, 
  Check, 
  AlertCircle 
} from 'lucide-react';

export default function TechAcademyHero({ onBookDiagnostic, onExploreCurriculum }) {
  // Lead form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('fullstack-dev');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.trim().length < 7) {
      newErrors.phone = 'Enter a valid phone number (e.g. +1 202... or +251 911...)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-dark-950 via-[#212529]/60 to-dark-950 pt-8 pb-16 border-b border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Top Admissions Hotline Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-2xl bg-[#212529] border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#f39228] uppercase tracking-wider">
              Cohort Enrollment Open
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-slate-300 text-xs hidden sm:inline">
              Zero coding experience required to start.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a 
              href="tel:+12023862702" 
              className="flex items-center gap-1.5 text-[#f39228] hover:text-amber-300 transition-colors font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>US Hotline: (202) 386 2702</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a 
              href="tel:+251911234567" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>Addis Ababa: +251 911 234 567</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>32-WEEK IMMERSIVE FULL-STACK ENGINEERING BOOTCAMP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#f39228] to-amber-500">Production</span> Full-Stack Software Engineer
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Master modern frontend architecture (HTML5, CSS3, Flexbox, Grid, Bootstrap 5, React), robust backend engineering (Node.js, Express, MySQL), and relational database modeling. Taught live 1-on-1 with dedicated senior engineer mentors for North America, Europe, and Ethiopia.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#212529] border border-slate-800 flex items-start gap-3 shadow-md">
                <Users className="w-5 h-5 text-[#f39228] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">100% Live Instruction</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Real-time weekend classes + daily office hours</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#212529] border border-slate-800 flex items-start gap-3 shadow-md">
                <Code2 className="w-5 h-5 text-[#f39228] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Real-World Projects</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Apple Clone, Netflix Clone & Full-Stack Capstone</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#212529] border border-slate-800 flex items-start gap-3 shadow-md">
                <GraduationCap className="w-5 h-5 text-[#f39228] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Career Placement</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Resume polish & technical mock interviews</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreCurriculum}
                className="px-6 py-3.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Explore 32-Week Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookDiagnostic}
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#f39228]" />
                <span>Book 30-Min Diagnostic</span>
              </button>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#212529]/95 border border-amber-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase tracking-wider">
                  Full-Stack Admissions
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  Apply for the Upcoming Cohort
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the 4-step inquiry below. <strong className="text-[#f39228]">No payment is required</strong> at this stage.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong>{firstName}</strong>! Our academic admissions team has received your registration for the <strong>Nexa Full-Stack Web Development Academy</strong>.
                  </p>
                  <a
                    href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs shadow-lg transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Select Free Diagnostic Slot</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFirstName('');
                      setLastName('');
                      setEmail('');
                      setPhone('');
                    }}
                    className="block mx-auto text-[11px] text-slate-400 hover:text-white underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        First Name <span className="text-[#f39228]">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Ermias"
                        className={`w-full px-3.5 py-2 rounded-xl bg-dark-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-500' : 'border-slate-700 focus:border-[#f39228]'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Last Name <span className="text-[#f39228]">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Tadesse"
                        className={`w-full px-3.5 py-2 rounded-xl bg-dark-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-500' : 'border-slate-700 focus:border-[#f39228]'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address <span className="text-[#f39228]">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. scholar@example.com"
                      className={`w-full px-3.5 py-2 rounded-xl bg-dark-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-700 focus:border-[#f39228]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number (WhatsApp Ready) <span className="text-[#f39228]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 202 386 2702 or +251 911 234 567"
                      className={`w-full px-3.5 py-2 rounded-xl bg-dark-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-slate-700 focus:border-[#f39228]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] disabled:bg-amber-700 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No upfront payment. Free 30-min diagnostic included.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
