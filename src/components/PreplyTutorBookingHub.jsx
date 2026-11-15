import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  GraduationCap, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Video, 
  ScreenShare, 
  PenTool, 
  Sparkles, 
  BookOpen, 
  Check, 
  HelpCircle, 
  ExternalLink, 
  Award, 
  ShieldCheck,
  Download,
  Phone,
  Mail,
  FileText,
  FileCheck2,
  BookCheck,
  AlertCircle,
  Bell,
  Timer,
  UploadCloud,
  ChevronDown,
  Layers,
  RotateCcw
} from 'lucide-react';
import PreplyVirtualClassroom from './PreplyVirtualClassroom';

export default function PreplyTutorBookingHub() {
  // Booking Type: 'trial' (Free 30-Min Trial) or 'subscription' (Full Term Academic Subscription)
  const [bookingType, setBookingType] = useState('trial');

  // Client Details
  const [studentName, setStudentName] = useState('Yohannes Bekele');
  const [parentName, setParentName] = useState('Abebech Tadesse');
  const [email, setEmail] = useState('yohannes.scholar@nexa.edu');
  const [phone, setPhone] = useState('+251 911 234 567');
  
  // Academic Selection (Grades 1 – 12)
  const [selectedGrade, setSelectedGrade] = useState('Grade 7');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics & Advanced Calculus');
  const [customTopic, setCustomTopic] = useState('Grade 7 Mathematics — Fractions, Decimals & Pre-Algebra');
  const [selectedTeacherId, setSelectedTeacherId] = useState('m1');
  
  // 24/7 Scheduling
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('04:00 PM EAT (09:00 AM EST)');

  // Materials & Upload
  const [attachedFileName, setAttachedFileName] = useState('Grade7_Math_Unit4_Fractions_Homework.pdf');
  const [studyNotes, setStudyNotes] = useState('Please review chapter 4 homework problems and pre-algebra diagnostic test.');
  
  // Confirmed Booking State & Real-time Countdown
  const [isBooked, setIsBooked] = useState(true);
  const [bookingRef, setBookingRef] = useState('NEXA-SCHOLAR-892415');
  const [downloadNotice, setDownloadNotice] = useState(null);

  // Countdown Timer State (Default to 14 mins 35 secs so <15 min alert is immediately visible & testable)
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(14 * 60 + 35);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Reference for smooth scroll to classroom
  const classroomSectionRef = useRef(null);

  // Ticking countdown effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeftSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeftSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeftSeconds]);

  // Format countdown time
  const hours = Math.floor(timeLeftSeconds / 3600);
  const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
  const seconds = timeLeftSeconds % 60;
  const isFifteenMinAlert = timeLeftSeconds <= 15 * 60 && timeLeftSeconds > 0;

  // Grade Options covering Grade 1 through Grade 12
  const allGrades = [
    { label: 'Grade 1 (Elementary Foundations)', value: 'Grade 1' },
    { label: 'Grade 2 (Elementary Foundations)', value: 'Grade 2' },
    { label: 'Grade 3 (Elementary Foundations)', value: 'Grade 3' },
    { label: 'Grade 4 (Elementary Foundations)', value: 'Grade 4' },
    { label: 'Grade 5 (Elementary Foundations)', value: 'Grade 5' },
    { label: 'Grade 6 (Middle School Pre-Algebra)', value: 'Grade 6' },
    { label: 'Grade 7 (Middle School Pre-Algebra)', value: 'Grade 7' },
    { label: 'Grade 8 (Middle School Pre-Algebra)', value: 'Grade 8' },
    { label: 'Grade 9 (High School Mastery)', value: 'Grade 9' },
    { label: 'Grade 10 (High School Mastery)', value: 'Grade 10' },
    { label: 'Grade 11 (High School & Pre-Calculus)', value: 'Grade 11' },
    { label: 'Grade 12 (High School & Calculus)', value: 'Grade 12' },
    { label: 'SAT Math & College Board Prep', value: 'SAT Math Prep' }
  ];

  // Core Subjects
  const allSubjects = [
    'Mathematics & Advanced Calculus',
    'Physics (Mechanics & Electromagnetism)',
    'Chemistry (Stoichiometry & Reactions)',
    'Biology & Life Sciences (Genetics)',
    'English Literature & SAT Reading',
    'Introductory Python & Web Coding'
  ];

  // Nexa Certified Scholar Mentors
  const mentors = [
    {
      id: 'm1',
      name: 'Ermias Tadesse',
      credentials: 'B.Sc. Electrical & Computer Engineering (Honors Graduate)',
      specialty: 'High School Calculus, Physics, SAT Math & Grades 6–8 Pre-Algebra',
      rating: '4.95',
      sessions: '140+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Senior Academic Fellow'
    },
    {
      id: 'm2',
      name: 'Dr. Bethlehem Wolde',
      credentials: 'MD Candidate & Medical Science Scholar',
      specialty: 'Biology, Chemistry & Middle School Integrated Sciences',
      rating: '4.98',
      sessions: '180+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Medical Science Fellow'
    },
    {
      id: 'm3',
      name: 'Natnael Mesfin',
      credentials: 'B.Sc. Computer Science & Software Engineering',
      specialty: 'Middle & High School Pre-Algebra, Geometry & Python Coding',
      rating: '4.90',
      sessions: '95+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa STEM Lead'
    },
    {
      id: 'm4',
      name: 'Selamawit Bekele',
      credentials: 'B.Sc. Chemical Engineering (Honors Graduate)',
      specialty: 'Organic Chemistry, General Science & Grades 1–8 Foundations',
      rating: '4.96',
      sessions: '120+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Chemistry Fellow'
    }
  ];

  // 24/7 Round-the-Clock Time Slots
  const timeSlots247 = [
    '08:00 AM EAT (01:00 AM EST)',
    '10:00 AM EAT (03:00 AM EST)',
    '01:00 PM EAT (06:00 AM EST)',
    '04:00 PM EAT (09:00 AM EST)',
    '06:30 PM EAT (11:30 AM EST)',
    '08:30 PM EAT (01:30 PM EST)',
    '11:00 PM EAT (04:00 PM EST)',
    '02:00 AM EAT (07:00 PM EST - Late Night 24/7)'
  ];

  const availableDays = ['Today', 'Tomorrow', 'Saturday', 'Sunday', 'Next Tuesday', 'Next Thursday'];

  const selectedTeacher = mentors.find(m => m.id === selectedTeacherId) || mentors[0];

  // Handle Form Submission / Re-booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newRef = 'NEXA-SCHOLAR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(newRef);
    setIsBooked(true);
    // Reset timer to 14m 30s to demonstrate the countdown & 15m alert
    setTimeLeftSeconds(14 * 60 + 30);
    setIsTimerRunning(true);
  };

  const handleScrollToClassroom = () => {
    if (classroomSectionRef.current) {
      classroomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock file attachment
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  // Downloadable Teacher Lesson Pack generator
  const handleDownloadCurriculumPack = (level) => {
    let packTitle = '';
    let content = '';

    if (level === 'elementary') {
      packTitle = 'Nexa_Academic_Grades_1-5_Foundations_Pack.txt';
      content = `
================================================================================
          NEXA ACADEMIC SCHOLARS NETWORK • GRADES 1 – 5 CURRICULUM PACK
               FOUNDATIONAL MATHEMATICS, READING & SCIENCE EXPLORATION
================================================================================

Target Audience: Elementary Scholars (Grades 1 to 5)
Prepared by: Nexa Academic Faculty & Certified Elementary Mentors
Contact & Tutoring Hotline: US (202) 386 2702 | Addis Ababa +251 911 234 567

--------------------------------------------------------------------------------
PART 1: MATHEMATICS & NUMBER SENSE ROADMAP
--------------------------------------------------------------------------------
1. Grade 1 – 2 Foundations:
   - Place value mastery (Ones, Tens, Hundreds)
   - Addition & Subtraction fact fluency (Sums within 20)
   - Introduction to skip counting (2s, 5s, 10s) and measurement units
2. Grade 3 – 5 Multiplication & Fractions:
   - Conceptual multiplication (arrays, equal groups, times tables 1-12)
   - Division as fair sharing and inverse operation
   - Fractions introduction: Numerator, denominator, visual pizza slices
   - Comparing and adding fractions with common denominators

--------------------------------------------------------------------------------
TRIAL LESSON PRACTICE WORKSHEET:
--------------------------------------------------------------------------------
Problem 1: Sarah has 24 colored pencils. She wants to divide them equally among 4 friends.
           How many pencils does each friend receive?
           Solution: 24 ÷ 4 = 6 pencils each.

Problem 2: Convert the mixed number 2 and 3/4 into an improper fraction.
           Solution: (2 × 4 + 3) / 4 = 11/4.

================================================================================
Nexa Academic Mentorship • Book Free 30-Min Diagnostic at https://nexa-ecosystem-platform.onrender.com/
================================================================================
      `;
    } else if (level === 'middle') {
      packTitle = 'Nexa_Academic_Grades_6-8_PreAlgebra_STEM_Pack.txt';
      content = `
================================================================================
          NEXA ACADEMIC SCHOLARS NETWORK • GRADES 6 – 8 CURRICULUM PACK
               PRE-ALGEBRA, GEOMETRY & INTEGRATED PHYSICAL SCIENCES
================================================================================

Target Audience: Junior Middle School Scholars (Grades 6 to 8)
Prepared by: Nexa STEM Faculty & Certified Teachers

--------------------------------------------------------------------------------
PART 1: PRE-ALGEBRA & RATIONAL NUMBERS
--------------------------------------------------------------------------------
1. Integers & Absolute Value:
   - Rules of signs: Positive and negative operations
   - Absolute value as distance from zero: |-7| = 7
2. Algebraic Expressions & Equations:
   - Combining like terms: 3x + 5 - x + 2 = 2x + 7
   - Solving one-step and two-step linear equations: 2x + 6 = 18 => x = 6
   - Distributive property: a(b + c) = ab + ac

--------------------------------------------------------------------------------
TRIAL LESSON PRACTICE WORKSHEET:
--------------------------------------------------------------------------------
Problem 1: Solve for y in the equation: 4y - 12 = 20
           Step 1: Add 12 to both sides: 4y = 32
           Step 2: Divide by 4: y = 8.

================================================================================
Nexa Academic Mentorship • 1-on-1 Dedicated Virtual Classroom
================================================================================
      `;
    } else {
      packTitle = 'Nexa_Academic_Grades_9-12_Calculus_Physics_SAT_Pack.txt';
      content = `
================================================================================
          NEXA ACADEMIC SCHOLARS NETWORK • GRADES 9 – 12 CURRICULUM PACK
            DIFFERENTIAL CALCULUS, PHYSICS MECHANICS & SAT MATH PREP
================================================================================

Target Audience: High School & College Prep Scholars (Grades 9 to 12)
Prepared by: Senior Nexa Academic Engineering & Mathematics Fellows

--------------------------------------------------------------------------------
PART 1: ALGEBRA II, PRE-CALCULUS & DIFFERENTIAL CALCULUS
--------------------------------------------------------------------------------
1. Differential Calculus Essentials:
   - Power Rule: d/dx [x^n] = n * x^(n-1)
   - Product Rule: (uv)' = u'v + uv'
   - Quotient Rule: (u/v)' = (u'v - uv') / v²
   - Chain Rule: d/dx [f(g(x))] = f'(g(x)) * g'(x)

--------------------------------------------------------------------------------
TRIAL LESSON PRACTICE WORKSHEET:
--------------------------------------------------------------------------------
Problem 1: Find the derivative of f(x) = 3x³ - 5x² + 7x - 4
           f'(x) = 9x² - 10x + 7.

================================================================================
Nexa Academic Mentorship • Interactive Digital Blackboard & Screen Share Suite
================================================================================
      `;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', packTitle);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotice(packTitle);
    setTimeout(() => setDownloadNotice(null), 5000);
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* ===================================================================== */}
      {/* 1. TOP ANNOUNCEMENT BANNER (WITH WELCOMING AMHARIC PHRASE)             */}
      {/* ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#212529] border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            
            {/* Amharic Welcome Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#f39228]" />
              <span>እንኳን ወደ ኔክሳ አካዳሚክ በደህና መጡ! • Welcome to Nexa Academic</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Personalized 1-on-1 Academic Mentorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#f39228] to-amber-500">for Grades 1 through 12</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              We provide dedicated 1-on-1 online academic coaching for elementary, middle school, and high school students globally—with specialized curriculum support for both international and Ethiopian diaspora learners. Book your <strong>Free 30-Minute Trial Lesson & Diagnostic</strong> or register for a <strong>Full Academic Subscription</strong>. Our verified teachers review your syllabus, prepare tailored PDF materials, and meet 24/7 on our in-browser digital blackboard and Chrome screen share suite!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Grades 1 – 12 Universal Coverage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Trial & Subscription Options</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Flexible Round-The-Clock Slots</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live Digital Blackboard & Chrome Share</span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={handleScrollToClassroom}
              className="px-5 py-3 rounded-2xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-dark-950" />
              <span>Launch Live Virtual Classroom 🟢</span>
            </button>

            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-dark-950 hover:bg-slate-900 text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#f39228]" />
              <span>Google Calendar Sync</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. REGISTRATION & 24/7 BOOKING CARD (TRIAL OR SUBSCRIPTION)           */}
      {/* ===================================================================== */}
      <div className="rounded-3xl bg-[#212529] border border-amber-500/30 p-5 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#f39228] uppercase tracking-widest flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Nexa Academic Enrollment & Booking
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Register & Schedule Your 1-on-1 Academic Session
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Select your enrollment plan, student grade, core subject, assigned teacher, and flexible 24/7 schedule.
            </p>
          </div>

          {/* Program Type Selector Dropdown / Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-dark-950 border border-slate-800">
            <button
              type="button"
              onClick={() => setBookingType('trial')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                bookingType === 'trial'
                  ? 'bg-[#f39228] text-dark-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Free 30-Min Trial Lesson
            </button>
            <button
              type="button"
              onClick={() => setBookingType('subscription')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                bookingType === 'subscription'
                  ? 'bg-[#f39228] text-dark-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Academic Term Subscription
            </button>
          </div>
        </div>

        <form onSubmit={handleBookingSubmit} className="space-y-6">
          
          {/* Row 1: Student & Parent Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Student Full Name <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Yohannes Bekele"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Parent / Guardian Name <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Abebech Tadesse"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="scholar@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone / WhatsApp <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 911... or +1 202..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Grade Level & Subject Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Grade Level Dropdown (Grades 1 – 12) */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Student Grade Level (Grades 1 – 12) <span className="text-[#f39228]">*</span>
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => {
                  setSelectedGrade(e.target.value);
                  setCustomTopic(`${e.target.value} ${selectedSubject}`);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              >
                {allGrades.map((g) => (
                  <option key={g.value} value={g.value} className="bg-[#1a202c] text-white">
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Core Subject Focus Dropdown */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Core Subject Focus <span className="text-[#f39228]">*</span>
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setCustomTopic(`${selectedGrade} ${e.target.value}`);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              >
                {allSubjects.map((s) => (
                  <option key={s} value={s} className="bg-[#1a202c] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Assigned Nexa Certified Teacher */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Assigned Nexa Teacher Specialist <span className="text-[#f39228]">*</span>
              </label>
              <select
                value={selectedTeacherId}
                onChange={(e) => setSelectedTeacherId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              >
                {mentors.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#1a202c] text-white">
                    {m.name} ({m.badge} • ★ {m.rating})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Specific Learning Concept & Material Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Specific Concept / Chapter to Prepare <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="text"
                required
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="e.g. Grade 7 Fractions & Decimals, Grade 11 Calculus Derivatives, SAT Algebra..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            {/* Homework / Syllabus PDF Upload */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Share Student Homework / Syllabus PDF (Optional)
              </label>
              <div className="flex items-center gap-2">
                <label className="flex-1 px-3.5 py-2 rounded-xl bg-[#1a202c] border border-dashed border-slate-600 hover:border-amber-500 cursor-pointer text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="truncate">{attachedFileName || 'Choose PDF / Textbook Document...'}</span>
                  <UploadCloud className="w-4 h-4 text-[#f39228] shrink-0 ml-2" />
                  <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Row 4: 24/7 Scheduling (Day & Round-the-Clock Time Slots) */}
          <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-[#f39228] uppercase flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 24/7 Round-the-Clock Flexible Schedule
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800">
                ● 24/7 Live Teacher Availability
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Day selection */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400">Select Date:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {availableDays.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-2 rounded-xl text-xs font-mono font-bold border transition-all text-center ${
                        selectedDate === d
                          ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                          : 'bg-[#1a202c] border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div className="md:col-span-7 space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400">Available 24/7 Slot (50-Min Session):</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {timeSlots247.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-2 rounded-xl text-[11px] font-mono font-bold border transition-all text-left truncate ${
                        selectedTimeSlot === slot
                          ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                          : 'bg-[#1a202c] border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-black text-xs font-mono uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-dark-950" />
              <span>
                {bookingType === 'trial' 
                  ? `Confirm Free 30-Min Trial Lesson with ${selectedTeacher.name}` 
                  : `Confirm Academic Term Subscription with ${selectedTeacher.name}`}
              </span>
            </button>
            <p className="text-center text-[11px] text-slate-400 font-mono mt-2">
              {bookingType === 'trial' 
                ? '✓ 100% Free Trial Lesson • Diagnostic Included • Teacher reviews materials before session' 
                : '✓ Dedicated Weekly 1-on-1 Mentorship • Flexible Rescheduling • Diagnostic Progress Reports'}
            </p>
          </div>
        </form>
      </div>

      {/* ===================================================================== */}
      {/* 3. CONFIRMED CLIENT & SCHEDULE DASHBOARD (COUNTDOWN & 15-MIN ALERT)    */}
      {/* ===================================================================== */}
      {isBooked && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#212529] via-[#1a202c] to-[#212529] border border-amber-500/50 shadow-2xl space-y-6">
          
          {/* Header & Pass Reference */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-[#f39228] flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold uppercase">
                    Session Confirmed & Scheduled
                  </span>
                  <span className="text-xs font-mono text-slate-400">Pass #{bookingRef}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5">
                  {selectedGrade} {selectedSubject} • 1-on-1 with {selectedTeacher.name}
                </h3>
              </div>
            </div>

            <button
              onClick={handleScrollToClassroom}
              className="px-5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all self-start sm:self-auto shrink-0"
            >
              <Video className="w-4 h-4 text-dark-950" />
              <span>Enter Live Classroom Now 🟢</span>
            </button>
          </div>

          {/* Client & Session Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-dark-950 border border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Student & Parent:</span>
              <span className="text-white font-bold">{studentName}</span>
              <span className="text-slate-400 block text-[11px] mt-0.5">Parent: {parentName}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Assigned Nexa Mentor:</span>
              <span className="text-amber-300 font-bold">{selectedTeacher.name}</span>
              <span className="text-slate-400 block text-[11px] mt-0.5">{selectedTeacher.badge}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Confirmed 24/7 Time Slot:</span>
              <span className="text-emerald-400 font-bold">{selectedDate}</span>
              <span className="text-slate-300 block text-[11px] mt-0.5">{selectedTimeSlot}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Shared Curriculum Material:</span>
              <span className="text-[#f39228] font-bold truncate block">{attachedFileName}</span>
              <span className="text-emerald-400 text-[10px] block mt-0.5">✓ Ready for Teacher Prep</span>
            </div>
          </div>

          {/* Specific Topic Focus Bar */}
          <div className="p-3.5 rounded-xl bg-[#1a202c] border border-amber-500/20 text-xs font-mono flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-4 h-4 text-[#f39228] shrink-0" />
              <span className="text-slate-400">Class Topic:</span>
              <span className="text-amber-300 font-bold truncate">"{customTopic}"</span>
            </div>
            <span className="text-emerald-400 font-bold shrink-0 hidden sm:inline">
              Mode: {bookingType === 'trial' ? 'Free 30-Min Trial' : 'Weekly Subscription'}
            </span>
          </div>

          {/* REAL-TIME COUNTDOWN TIMER & 15-MINUTE ALERT BANNER */}
          <div className="space-y-3">
            
            {/* 15-Minute Alert Banner (Appears when <= 15 minutes left) */}
            {isFifteenMinAlert && (
              <div className="p-4 rounded-2xl bg-amber-500/15 border-2 border-[#f39228] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f39228] text-dark-950 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
                      ⚠️ Class Starting in Less Than 15 Minutes!
                    </h5>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Please be prepared for class (Both Teacher & Student). Check your microphone, camera, and homework materials.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleScrollToClassroom}
                  className="px-4 py-2 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs font-mono shrink-0"
                >
                  Join Classroom Now &rarr;
                </button>
              </div>
            )}

            {/* Live Digital Countdown Card */}
            <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Timer className="w-4 h-4 text-[#f39228]" />
                  <span>Real-Time Session Countdown to Live Class:</span>
                </div>
                <div className="flex items-center gap-2 font-mono font-black text-2xl sm:text-3xl text-white">
                  <div className="px-3 py-1.5 rounded-xl bg-[#1a202c] border border-slate-700 text-[#f39228]">
                    {String(hours).padStart(2, '0')}h
                  </div>
                  <span>:</span>
                  <div className="px-3 py-1.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white">
                    {String(minutes).padStart(2, '0')}m
                  </div>
                  <span>:</span>
                  <div className="px-3 py-1.5 rounded-xl bg-[#1a202c] border border-slate-700 text-emerald-400">
                    {String(seconds).padStart(2, '0')}s
                  </div>
                </div>
              </div>

              {/* Interactive Countdown Simulation Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setTimeLeftSeconds(14 * 60 + 30)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold transition-all"
                  title="Simulate < 15 Minute Alert"
                >
                  ⚡ Set to 14m (Show Alert)
                </button>
                <button
                  onClick={() => setTimeLeftSeconds(60 * 60 + 45)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-mono transition-all"
                  title="Set to 1 Hour"
                >
                  Set to 1h
                </button>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-mono transition-all"
                >
                  {isTimerRunning ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ===================================================================== */}
      {/* 4. LIVE VIRTUAL CLASSROOM (DIGITAL BLACKBOARD + CHROME SCREEN SHARE)    */}
      {/* ===================================================================== */}
      <div ref={classroomSectionRef} className="space-y-4 pt-4">
        <div className="p-4 rounded-2xl bg-[#212529] border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold text-white">
              Nexa Live Virtual Classroom Studio • Connected with {selectedTeacher.name} ({selectedGrade} {selectedSubject})
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-emerald-400">● Live Audio & Video Ready</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400">Blackboard & Desmos Synced</span>
          </div>
        </div>

        <PreplyVirtualClassroom
          mentorName={selectedTeacher.name}
          mentorRole={selectedTeacher.credentials}
          mentorBadge={selectedTeacher.badge}
          subject={customTopic || selectedSubject}
          gradeLevel={selectedGrade}
          onCloseClassroom={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      {/* ===================================================================== */}
      {/* 5. CURRICULUM MATERIAL SHARE & TEACHER PDF LESSON PACKS               */}
      {/* ===================================================================== */}
      <div className="space-y-6 pt-4">
        <div className="p-6 rounded-3xl bg-[#212529] border border-amber-500/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookCheck className="w-5 h-5 text-[#f39228]" />
                Curriculum Material Share & Teacher-Prepared PDF Packs
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Nexa teachers prepare structured worksheets, formula reference cheat sheets, and trial lesson decks before every session. Download your student's grade-specific pack below:
              </p>
            </div>

            {/* Uploaded Material Pill */}
            {attachedFileName && (
              <div className="p-3 rounded-2xl bg-dark-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2 self-start sm:self-auto shrink-0">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Shared: <strong>{attachedFileName}</strong></span>
              </div>
            )}
          </div>
        </div>

        {downloadNotice && (
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong>{downloadNotice}</strong> generated and downloaded to your device successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Elementary Pack */}
          <div className="p-6 rounded-3xl bg-[#212529] border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold uppercase">
                Grades 1 – 5
              </span>
              <h4 className="text-base font-bold text-white mt-2">
                Elementary Foundations Pack
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Includes Number Sense, Fact Fluency, Multiplication Tables (1-12), Visual Fractions, Reading Comprehension questions, and Science Explorers unit.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>• Practice Worksheet with Solutions</div>
                <div>• Visual Fraction Bar Cheat Sheet</div>
                <div>• Reading Comprehension Rubric</div>
              </div>
            </div>

            <button
              onClick={() => handleDownloadCurriculumPack('elementary')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase font-mono shadow transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-dark-950" />
              <span>Download Grades 1–5 Pack</span>
            </button>
          </div>

          {/* Middle School Pack */}
          <div className="p-6 rounded-3xl bg-[#212529] border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold uppercase">
                Grades 6 – 8
              </span>
              <h4 className="text-base font-bold text-white mt-2">
                Middle School Pre-Algebra & STEM Pack
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Includes Rational Numbers, Distributive Property, Multi-Step Linear Equations, Ratios & Rates, and Newton's Laws of Motion with kinematics exercises.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>• 20 Pre-Algebra Diagnostic Exercises</div>
                <div>• Newton's 3 Laws Summary Sheet</div>
                <div>• Step-by-Step Equation Solving Guide</div>
              </div>
            </div>

            <button
              onClick={() => handleDownloadCurriculumPack('middle')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase font-mono shadow transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-dark-950" />
              <span>Download Grades 6–8 Pack</span>
            </button>
          </div>

          {/* High School & SAT Pack */}
          <div className="p-6 rounded-3xl bg-[#212529] border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold uppercase">
                Grades 9 – 12
              </span>
              <h4 className="text-base font-bold text-white mt-2">
                High School & SAT Mastery Pack
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Includes Differential Calculus derivative rules (Power, Product, Chain Rules), Quadratic Optimization, Kinematic Formulas, and SAT Math tricks.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>• Complete Calculus Derivative Sheet</div>
                <div>• Kinematics & Energy Master Table</div>
                <div>• SAT Math High-Frequency Formula Pack</div>
              </div>
            </div>

            <button
              onClick={() => handleDownloadCurriculumPack('high')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase font-mono shadow transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-dark-950" />
              <span>Download Grades 9–12 Pack</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
