import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Code2, 
  GraduationCap, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Calendar,
  AlertCircle,
  Check,
  ArrowRight,
  Globe,
  Layers
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function Hero({ onSelectView, customBgImage }) {
  const bgImage = customBgImage || ecosystemData.hero.backgroundImage;

  // Evangadi-style Lead & Diagnostic Registration Form State
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
      newErrors.phone = 'Enter a valid phone number';
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
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-dark-950">
      
      {/* Background Image Container with Deep Evangadi Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Nexa Ecosystem Background"
          className="w-full h-full object-cover object-center filter brightness-35 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/90 to-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/70 to-dark-950/95" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        
        {/* Evangadi Admissions Hotline Banner */}
        <div className="mb-8 p-3.5 rounded-2xl bg-[#212529]/90 border border-amber-500/30 backdrop-blur-md shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#f39228] uppercase tracking-wider">
              Cohort Enrollment Open
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-slate-300 text-xs hidden sm:inline">
              Forex SMC, Full-Stack Web Dev & K-12 Scholars Mentorship
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

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & 4 Service Navigation Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEXA ACADEMY & 1-ON-1 SCHOLAR MENTORSHIP NETWORK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              Empowering Futures Through High-Impact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#f39228] to-amber-500">
                Education & Mentorship
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Nexa connects institutional financial market trading (Forex SMC), full-stack software development, and K-12 academic excellence—led by verified university honors scholars and senior engineers.
            </p>

            {/* 4 Interactive Service Entry Cards (Isolated View Triggers) */}
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                Explore Dedicated Academies & Verticals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {/* 1. Forex SMC */}
                <div
                  onClick={() => onSelectView('forex-trading')}
                  className="cursor-pointer p-4 rounded-2xl bg-[#212529] border border-slate-800 hover:border-[#f39228] transition-all group flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#f39228] group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#f39228] font-bold uppercase">Vertical 01</p>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300">Forex SMC Trading</h4>
                      <p className="text-[10px] text-slate-400">Institutional Strategy & Chapters</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f39228] transition-colors" />
                </div>

                {/* 2. Full-Stack Web Dev */}
                <div
                  onClick={() => onSelectView('fullstack-dev')}
                  className="cursor-pointer p-4 rounded-2xl bg-[#212529] border border-slate-800 hover:border-[#f39228] transition-all group flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#f39228] group-hover:scale-105 transition-transform">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#f39228] font-bold uppercase">Vertical 02</p>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300">Full-Stack Web Dev</h4>
                      <p className="text-[10px] text-slate-400">32-Week Immersive & Zoom Labs</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f39228] transition-colors" />
                </div>

                {/* 3. K-12 Scholars Tutoring */}
                <div
                  onClick={() => onSelectView('k12-scholars')}
                  className="cursor-pointer p-4 rounded-2xl bg-[#212529] border border-slate-800 hover:border-[#f39228] transition-all group flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#f39228] group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#f39228] font-bold uppercase">Vertical 03</p>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300">K-12 Scholars Tutoring</h4>
                      <p className="text-[10px] text-slate-400">1-on-1 Preply-Style Mentorship</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f39228] transition-colors" />
                </div>

                {/* 4. Web Lab & Clones */}
                <div
                  onClick={() => onSelectView('projects')}
                  className="cursor-pointer p-4 rounded-2xl bg-[#212529] border border-slate-800 hover:border-[#f39228] transition-all group flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#f39228] group-hover:scale-105 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#f39228] font-bold uppercase">Vertical 04</p>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300">Web Lab & Clones</h4>
                      <p className="text-[10px] text-slate-400">Production SaaS & Software Portfolio</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f39228] transition-colors" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Evangadi-Style Floating Lead Acquisition Card (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="relative rounded-3xl bg-[#212529]/95 border border-amber-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase tracking-wider">
                  Admissions & Enrollment
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  Start Your Journey Today
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
                    Thank you, <strong>{firstName}</strong>! Our academic admissions team has received your registration for <strong>{selectedProgram === 'forex-trading' ? 'Forex Trading' : selectedProgram === 'fullstack-dev' ? 'Full-Stack Web Dev' : 'K-12 Scholars'}</strong>.
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

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Select Desired Track <span className="text-[#f39228]">*</span>
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white focus:border-[#f39228] focus:outline-none"
                    >
                      <option value="fullstack-dev">Full-Stack Web Development Academy (32-Week Immersive)</option>
                      <option value="forex-trading">Nexa Forex Trading Academy (Institutional SMC)</option>
                      <option value="k12-scholars">K-12 Academic Scholars Tutoring Network (Grades 1–12)</option>
                    </select>
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
    </section>
  );
}
