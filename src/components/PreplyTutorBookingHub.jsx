import React, { useState } from 'react';
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
  AlertCircle
} from 'lucide-react';
import PreplyVirtualClassroom from './PreplyVirtualClassroom';

export default function PreplyTutorBookingHub() {
  const [activeTab, setActiveTab] = useState('book'); // 'book', 'classroom', 'materials'

  // Booking Flow State
  const [selectedBand, setSelectedBand] = useState('middle'); // 'elementary', 'middle', 'high'
  const [selectedSpecificGrade, setSelectedSpecificGrade] = useState('Grade 7');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics & Advanced Calculus');
  const [customTopic, setCustomTopic] = useState('Grade 7 Mathematics — Fractions, Decimals & Pre-Algebra');
  const [selectedMentorId, setSelectedMentorId] = useState('m1');
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('04:00 PM EAT');

  // Contact details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studyNotes, setStudyNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);
  const [downloadNotice, setDownloadNotice] = useState(null);

  // Grade Bands and Detailed Specific Grade Levels (Grades 1 – 12)
  const gradeBands = {
    elementary: {
      id: 'elementary',
      label: 'Grades 1 – 5: Foundation Builders',
      badge: 'Elementary School',
      grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5']
    },
    middle: {
      id: 'middle',
      label: 'Grades 6 – 8: Critical Thinking & Pre-Algebra',
      badge: 'Junior Middle School',
      grades: ['Grade 6', 'Grade 7', 'Grade 8']
    },
    high: {
      id: 'high',
      label: 'Grades 9 – 12: Academic Mastery & SAT Prep',
      badge: 'High School & College Prep',
      grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'SAT Math Prep']
    }
  };

  // Subjects
  const subjects = [
    { id: 'math', name: 'Mathematics & Advanced Calculus', tag: 'Core STEM', desc: 'Pre-Algebra, Algebra I/II, Geometry, Trigonometry & AP Calculus' },
    { id: 'physics', name: 'Physics (Mechanics & Electromagnetism)', tag: 'Physical Sciences', desc: 'Kinematics, Newton’s Laws, Work-Energy & Circuit Analysis' },
    { id: 'chemistry', name: 'Chemistry (Stoichiometry & Reactions)', tag: 'Physical Sciences', desc: 'Atomic Theory, Balancing Equations, Molar Mass & Gas Laws' },
    { id: 'biology', name: 'Biology & Life Sciences (Genetics)', tag: 'Natural Sciences', desc: 'Cell Biology, Genetics, Punnett Squares & Human Physiology' },
    { id: 'english', name: 'English Literature & SAT Reading', tag: 'Humanities', desc: 'Critical Essay Writing, Vocabulary Mastery & Reading Comprehension' },
    { id: 'coding', name: 'Introductory Python & Web Coding', tag: 'Computer Science', desc: 'Variables, Loops, Data Structures & Foundational Logic' }
  ];

  // Nexa Certified Scholar Mentors & Faculty Teachers
  const mentors = [
    {
      id: 'm1',
      name: 'Ermias Tadesse',
      credentials: 'B.Sc. Electrical & Computer Engineering (Honors Graduate)',
      specialty: 'High School Calculus, Physics, SAT Math & Grades 6–8 Pre-Algebra',
      rating: '4.95',
      sessions: '140+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Senior Academic Fellow',
      rate: 'Complimentary Trial Lesson'
    },
    {
      id: 'm2',
      name: 'Dr. Bethlehem Wolde',
      credentials: 'MD Candidate & Medical Science Scholar',
      specialty: 'Biology, Chemistry & Middle School Integrated Sciences',
      rating: '4.98',
      sessions: '180+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Medical Science Fellow',
      rate: 'Complimentary Trial Lesson'
    },
    {
      id: 'm3',
      name: 'Natnael Mesfin',
      credentials: 'B.Sc. Computer Science & Software Engineering',
      specialty: 'Middle & High School Pre-Algebra, Geometry & Python Coding',
      rating: '4.90',
      sessions: '95+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa STEM Lead',
      rate: 'Complimentary Trial Lesson'
    },
    {
      id: 'm4',
      name: 'Selamawit Bekele',
      credentials: 'B.Sc. Chemical Engineering (Honors Graduate)',
      specialty: 'Organic Chemistry, General Science & Grades 1–8 Foundations',
      rating: '4.96',
      sessions: '120+ Hours Taught',
      languages: 'English & Amharic',
      badge: 'Nexa Chemistry Fellow',
      rate: 'Complimentary Trial Lesson'
    }
  ];

  const timeSlots = [
    '09:00 AM EAT (02:00 AM EST)',
    '11:00 AM EAT (04:00 AM EST)',
    '02:00 PM EAT (07:00 AM EST)',
    '04:00 PM EAT (09:00 AM EST)',
    '06:30 PM EAT (11:30 AM EST)',
    '08:00 PM EAT (01:00 PM EST)'
  ];

  const days = ['Today', 'Tomorrow', 'Saturday', 'Sunday', 'Next Tuesday'];

  const selectedMentor = mentors.find(m => m.id === selectedMentorId) || mentors[0];

  const handleBandChange = (bandId) => {
    setSelectedBand(bandId);
    setSelectedSpecificGrade(gradeBands[bandId].grades[0]);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || 'Honors Student';
    const booking = {
      id: 'NEXA-TRIAL-' + Math.floor(100000 + Math.random() * 900000),
      student: fullName,
      email: email.trim(),
      phone: phone.trim(),
      mentor: selectedMentor.name,
      mentorRole: selectedMentor.credentials,
      mentorBadge: selectedMentor.badge,
      grade: selectedSpecificGrade,
      subject: selectedSubject,
      customTopic: customTopic.trim() || selectedSubject,
      studyNotes: studyNotes.trim() || 'Parent requested initial diagnostic assessment.',
      day: selectedDay,
      time: selectedTimeSlot
    };
    setLastBooking(booking);
    setBookingConfirmed(true);
  };

  const handleLaunchClassroomFromBooking = () => {
    setActiveTab('classroom');
  };

  // Downloadable teacher-prepared PDF pack generator
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
PART 2: READING COMPREHENSION & SCIENCE EXPLORATION
--------------------------------------------------------------------------------
- Story structure: Characters, setting, problem, and resolution
- Identifying the main idea vs supporting details
- Scientific observation: The 5 senses, states of matter (Solid, Liquid, Gas)
- Ecosystems: Plants, animals, food chains, and habitats

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
3. Ratios, Proportions & Percentages:
   - Unit rates and constant of proportionality (y = kx)
   - Percent increase and decrease: Formula = (Change / Original) × 100%

--------------------------------------------------------------------------------
PART 2: PHYSICAL SCIENCES & INTRODUCTORY KINEMATICS
--------------------------------------------------------------------------------
- Newton's Three Laws of Motion:
  * 1st Law: Inertia (Objects at rest remain at rest)
  * 2nd Law: F = m × a (Force equals mass times acceleration)
  * 3rd Law: Action and reaction forces are equal and opposite
- Energy Forms: Kinetic energy (0.5mv²) vs Potential energy (mgh)

--------------------------------------------------------------------------------
TRIAL LESSON PRACTICE WORKSHEET:
--------------------------------------------------------------------------------
Problem 1: Solve for y in the equation: 4y - 12 = 20
           Step 1: Add 12 to both sides: 4y = 32
           Step 2: Divide by 4: y = 8.

Problem 2: A bicycle travels at 6 meters per second for 15 seconds. Find the distance.
           Distance = Speed × Time = 6 m/s × 15 s = 90 meters.

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
1. Functions & Graphs:
   - Polynomial, rational, exponential, and logarithmic functions
   - Quadratic vertex formula: x = -b / (2a); Discriminant Δ = b² - 4ac
2. Differential Calculus Essentials:
   - The Limit definition of a derivative: f'(x) = lim(h->0) [f(x+h) - f(x)] / h
   - Power Rule: d/dx [x^n] = n * x^(n-1)
   - Product Rule: (uv)' = u'v + uv'
   - Quotient Rule: (u/v)' = (u'v - uv') / v²
   - Chain Rule: d/dx [f(g(x))] = f'(g(x)) * g'(x)
   - Optimization: Setting f'(x) = 0 to find local maxima and minima

--------------------------------------------------------------------------------
PART 2: PHYSICS MECHANICS & KINEMATICS
--------------------------------------------------------------------------------
- The 4 Kinematic Equations:
  1) v = u + at
  2) s = ut + 0.5at²
  3) v² = u² + 2as
  4) s = ((u + v) / 2) * t
- Work-Energy Theorem: Net Work = ΔKE = 0.5m(v_final² - v_initial²)

--------------------------------------------------------------------------------
TRIAL LESSON PRACTICE WORKSHEET:
--------------------------------------------------------------------------------
Problem 1: Find the derivative of f(x) = 3x³ - 5x² + 7x - 4
           f'(x) = 9x² - 10x + 7.

Problem 2: An arrow is shot vertically upward with initial velocity u = 40 m/s.
           Assuming g = 9.8 m/s², what is the maximum height reached?
           At max height, v = 0.
           v² = u² - 2gh => 0 = 40² - 2(9.8)h => h = 1600 / 19.6 ≈ 81.63 meters.

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
      
      {/* 0. OFFICIAL NEXA ACADEMIC ANNOUNCEMENT BANNER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#212529] border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f39228] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Announcing to All Parents & Students Globally (Grades 1 – 12)</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#f39228] to-amber-500">Nexa Academic</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              We provide dedicated 1-on-1 academic mentorship for students in <strong>every grade from Grade 1 through Grade 12</strong>. Book a <strong>Free 30-Minute Trial Lesson & Diagnostic</strong> anytime. Our teachers review your student's school curriculum, prepare tailored PDF materials, and reach out based on your schedule. Join live inside our in-browser Virtual Classroom with digital blackboard and Chrome screen share. If comfortable, continue with regular weekly mentorship!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Grades 1 – 12 Full Coverage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Trial Lesson</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Custom PDF Learning Packs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live In-Browser Blackboard</span>
              </div>
            </div>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => setActiveTab('book')}
              className="px-5 py-3 rounded-2xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-dark-950" />
              <span>Book Free Trial Lesson</span>
            </button>

            <button
              onClick={() => setActiveTab('classroom')}
              className="px-5 py-3 rounded-2xl bg-dark-950 hover:bg-slate-900 text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-emerald-400" />
              <span>Launch Virtual Classroom 🟢</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. THREE-WAY MODE SWITCHER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-[#212529] border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('book')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'book'
                ? 'bg-[#f39228] text-dark-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>1. Book Free Trial Lesson</span>
          </button>

          <button
            onClick={() => setActiveTab('classroom')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'classroom'
                ? 'bg-[#f39228] text-dark-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PenTool className="w-4 h-4 text-emerald-400" />
            <span>2. Live Virtual Classroom 🟢</span>
          </button>

          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'materials'
                ? 'bg-[#f39228] text-dark-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>3. Teacher PDF Lesson Packs</span>
          </button>
        </div>

        <span className="text-xs font-mono text-slate-400 px-3 hidden md:inline">
          Trial Lesson • No upfront payment
        </span>
      </div>

      {/* ===================================================================== */}
      {/* TAB 1: COMPREHENSIVE TRIAL LESSON BOOKING WIZARD                      */}
      {/* ===================================================================== */}
      {activeTab === 'book' && (
        <div className="space-y-6">
          
          {/* Active Booking Banner if submitted */}
          {bookingConfirmed && lastBooking && (
            <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-800 space-y-4 shadow-2xl animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                      1-on-1 Trial Lesson Confirmed • Pass #{lastBooking.id}
                    </span>
                    <h4 className="text-base sm:text-xl font-serif font-bold text-white">
                      {lastBooking.grade} {lastBooking.subject} with {lastBooking.mentor}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      Student: <strong>{lastBooking.student}</strong> • Slot: <strong>{lastBooking.day} at {lastBooking.time}</strong>
                    </p>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      Topic: <em>"{lastBooking.customTopic}"</em>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleLaunchClassroomFromBooking}
                    className="px-5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all shrink-0"
                  >
                    <Video className="w-4 h-4 text-dark-950" />
                    <span>Enter Virtual Classroom Now &rarr;</span>
                  </button>

                  <a
                    href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4 text-[#f39228]" />
                    <span>Add to Google Calendar</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Interactive 5-Step Trial Inquiry Wizard */}
          <div className="rounded-3xl bg-[#212529] border border-amber-500/30 p-5 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Step 1: Grade Level Selection (Grades 1 – 12) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#f39228] text-dark-950 font-mono text-xs font-black flex items-center justify-center">
                  1
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Select Student's Exact Grade Band & Grade Level (Grades 1 – 12)
                </h4>
              </div>

              {/* Band Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.values(gradeBands).map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleBandChange(b.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedBand === b.id
                        ? 'bg-amber-500/15 border-amber-500 shadow-md text-white'
                        : 'bg-dark-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300 uppercase font-bold">
                      {b.badge}
                    </span>
                    <h5 className="text-sm font-bold mt-2 text-white">{b.label}</h5>
                  </button>
                ))}
              </div>

              {/* Exact Grade Level Pills */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400">
                  Choose Exact Grade Level in {gradeBands[selectedBand].badge}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {gradeBands[selectedBand].grades.map((gr) => (
                    <button
                      key={gr}
                      onClick={() => setSelectedSpecificGrade(gr)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                        selectedSpecificGrade === gr
                          ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                          : 'bg-[#1a202c] border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {gr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Subject & Custom Topic Focus */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#f39228] text-dark-950 font-mono text-xs font-black flex items-center justify-center">
                  2
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Select Core Subject Focus & Specific Learning Topic
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subjects.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedSubject(sub.name);
                      setCustomTopic(`${selectedSpecificGrade} ${sub.name}`);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedSubject === sub.name
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow'
                        : 'bg-dark-950 border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#f39228] font-bold">{sub.tag}</span>
                      <h5 className="text-xs sm:text-sm font-bold mt-1 text-white">{sub.name}</h5>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{sub.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Specific Topic Description */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-2">
                <label className="block text-xs font-mono text-slate-300 uppercase font-semibold">
                  What specific concept or chapter do you want your teacher to prepare?
                </label>
                <input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="e.g. Grade 7 Fractions & Pre-Algebra, Grade 10 Stoichiometry, SAT Math Functions..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                />
              </div>
            </div>

            {/* Step 3: Choose Nexa Faculty Mentor */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#f39228] text-dark-950 font-mono text-xs font-black flex items-center justify-center">
                  3
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Choose Your Nexa Certified Academic Teacher
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {mentors.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMentorId(m.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                      selectedMentorId === m.id
                        ? 'bg-amber-500/15 border-amber-500 shadow-xl'
                        : 'bg-dark-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold uppercase">
                          {m.badge}
                        </span>
                        <div className="flex items-center gap-1 text-[#f39228] text-xs font-bold font-mono">
                          <Star className="w-3.5 h-3.5 fill-[#f39228]" />
                          <span>{m.rating}</span>
                        </div>
                      </div>

                      <h5 className="text-sm font-bold text-white">{m.name}</h5>
                      <p className="text-[11px] text-[#f39228] font-mono mt-0.5">{m.credentials}</p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{m.specialty}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>{m.sessions}</span>
                      <span className="text-emerald-400 font-bold">{m.languages}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Schedule Day & Time Slot */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#f39228] text-dark-950 font-mono text-xs font-black flex items-center justify-center">
                  4
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Pick Your Live Schedule & Time Slot
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Available Days:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {days.map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDay(d)}
                        className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                          selectedDay === d
                            ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                            : 'bg-dark-950 border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Available Slots (50-Min Period):</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((ts) => (
                      <button
                        key={ts}
                        onClick={() => setSelectedTimeSlot(ts)}
                        className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition-all truncate text-left ${
                          selectedTimeSlot === ts
                            ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                            : 'bg-dark-950 border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Complete Scholar Inquiry Form */}
            <form onSubmit={handleConfirmBooking} className="p-5 sm:p-6 rounded-2xl bg-dark-950 border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-[#f39228] text-dark-950 font-mono text-xs font-black flex items-center justify-center">
                  5
                </span>
                <h4 className="text-base font-bold text-white">
                  Parent & Scholar Contact Details
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    First Name <span className="text-[#f39228]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. Ermias or Parent Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Last Name <span className="text-[#f39228]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g. Tadesse"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-[#f39228]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="scholar@example.com (we send link here)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number (WhatsApp Ready) <span className="text-[#f39228]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 202... or +251 911..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Homework Notes / Textbook Links (Optional)
                </label>
                <input
                  type="text"
                  value={studyNotes}
                  onChange={(e) => setStudyNotes(e.target.value)}
                  placeholder="Paste homework questions, textbook chapter, or target goals for your trial lesson"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-black text-xs font-mono uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <CheckCircle2 className="w-4 h-4 text-dark-950" />
                <span>Confirm Free 30-Min Trial Lesson with {selectedMentor.name}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Trial Lesson • We reach out based on your schedule • No payment required</span>
              </div>
            </form>

          </div>

        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: LIVE VIRTUAL CLASSROOM (BLACKBOARD + CHROME SCREEN SHARE)       */}
      {/* ===================================================================== */}
      {activeTab === 'classroom' && (
        <div className="space-y-4 animate-fade-in">
          <div className="p-4 rounded-2xl bg-[#212529] border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white">
                Live Studio Connected: {lastBooking ? `${lastBooking.grade} ${lastBooking.subject} with ${lastBooking.mentor}` : `1-on-1 Session with ${selectedMentor.name}`}
              </span>
            </div>

            <button
              onClick={() => setActiveTab('book')}
              className="text-xs font-mono text-[#f39228] hover:text-amber-300 underline"
            >
              ← Back to Booking Details
            </button>
          </div>

          <PreplyVirtualClassroom
            mentorName={lastBooking?.mentor || selectedMentor.name}
            mentorRole={lastBooking?.mentorRole || selectedMentor.credentials}
            mentorBadge={lastBooking?.mentorBadge || selectedMentor.badge}
            subject={lastBooking?.customTopic || selectedSubject}
            gradeLevel={lastBooking?.grade || selectedSpecificGrade}
            onCloseClassroom={() => setActiveTab('book')}
          />
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 3: DOWNLOADABLE TEACHER PDF LESSON PACKS                          */}
      {/* ===================================================================== */}
      {activeTab === 'materials' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 rounded-3xl bg-[#212529] border border-amber-500/30">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookCheck className="w-5 h-5 text-[#f39228]" />
              Teacher-Prepared PDF Learning Material & Curriculum Packs
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Every Nexa Teacher prepares structured worksheets, formula reference sheets, and trial lesson practice decks before every session. Download your student's grade-specific pack below:
            </p>
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
      )}

    </div>
  );
}
