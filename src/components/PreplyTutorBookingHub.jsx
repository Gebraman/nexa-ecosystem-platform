import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Video, 
  Sparkles, 
  Download, 
  UploadCloud, 
  Bell, 
  Timer,
  ChevronDown
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
  
  // Academic Selection (Clean Grade 1 – 12 numbers only & Free-text subject)
  const [selectedGrade, setSelectedGrade] = useState('Grade 7');
  const [subject, setSubject] = useState('Mathematics');
  const [customTopic, setCustomTopic] = useState('Fractions, Decimals & Linear Equations');
  
  // Assigned Teacher (Name Only)
  const [selectedTeacherName, setSelectedTeacherName] = useState('Ermias Tadesse');
  
  // Real Day and Date calculation
  const generateRealCalendarDays = () => {
    const days = [];
    const baseDate = new Date(); // Current date
    for (let i = 0; i < 7; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthName = d.toLocaleDateString('en-US', { month: 'short' });
      const dayNum = d.getDate();
      days.push({
        id: `day-${i}`,
        fullDateStr: d.toISOString().split('T')[0],
        label: i === 0 ? `Today (${dayName}, ${monthName} ${dayNum})` : `${dayName}, ${monthName} ${dayNum}`
      });
    }
    return days;
  };

  const realDays = generateRealCalendarDays();
  const [selectedDayObj, setSelectedDayObj] = useState(realDays[0]);
  const [customDatePicker, setCustomDatePicker] = useState(realDays[0].fullDateStr);

  // 24/7 Round-the-Clock Time Slots
  const timeSlots247 = [
    '08:00 AM EAT (01:00 AM EST)',
    '10:00 AM EAT (03:00 AM EST)',
    '12:00 PM EAT (05:00 AM EST)',
    '02:00 PM EAT (07:00 AM EST)',
    '04:00 PM EAT (09:00 AM EST)',
    '06:30 PM EAT (11:30 AM EST)',
    '08:30 PM EAT (01:30 PM EST)',
    '11:00 PM EAT (04:00 PM EST)',
    '02:00 AM EAT (07:00 PM EST - Late Night 24/7)'
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('04:00 PM EAT (09:00 AM EST)');

  // Shared Material File
  const [attachedFileName, setAttachedFileName] = useState('Grade7_Math_Unit4_Fractions_Homework.pdf');
  
  // Confirmed Booking State & Real-time Countdown
  const [isBooked, setIsBooked] = useState(true);
  const [bookingRef, setBookingRef] = useState('NEXA-SCHOLAR-892415');

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

  // Grade Options: Numbers only! (Grade 1 through Grade 12)
  const gradeOptions = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  // Teacher Names Only
  const teacherNames = [
    'Ermias Tadesse',
    'Bethlehem Wolde',
    'Natnael Mesfin',
    'Selamawit Bekele'
  ];

  // Handle Form Submission / Re-booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newRef = 'NEXA-SCHOLAR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(newRef);
    setIsBooked(true);
    // Reset timer to 14m 30s to demonstrate the countdown & 15m alert
    setTimeLeftSeconds(14 * 60 + 30);
    setIsTimerRunning(true);
    if (classroomSectionRef.current) {
      classroomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToClassroom = () => {
    if (classroomSectionRef.current) {
      classroomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // File Upload Simulator
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
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
              We provide dedicated 1-on-1 online academic coaching for elementary, middle school, and high school students globally—with specialized curriculum support for both international and Ethiopian diaspora learners. Book your <strong>Free 30-Minute Trial Lesson & Diagnostic</strong> or register for a <strong>Full Academic Subscription</strong>. Meet 24/7 on our split-screen laptop virtual classroom with digital blackboard and live Chrome screen share!
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
                <span>Split Screen Laptop Classroom (Blackboard & Screen Share)</span>
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
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. REGISTRATION & 24/7 BOOKING CARD (SIMPLIFIED & UNCLUTTERED)        */}
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
              Fill in your student information, write down your subject, select your teacher, and choose your 24/7 date and time.
            </p>
          </div>

          {/* Program Type Selector */}
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

          {/* Row 2: Grade Level (Numbers Only), Free-Text Subject, Teacher Name Only */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Grade Level: Grade 1 through Grade 12 only */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Student Grade Level <span className="text-[#f39228]">*</span>
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              >
                {gradeOptions.map((g) => (
                  <option key={g} value={g} className="bg-[#1a202c] text-white">
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject: Free text input based on what the student wants */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Subject You Want to Study <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Write subject: e.g. Mathematics, Physics, Chemistry, English, Amharic, Python..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            {/* Assigned Nexa Teacher: Name Only */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Assigned Nexa Teacher <span className="text-[#f39228]">*</span>
              </label>
              <select
                value={selectedTeacherName}
                onChange={(e) => setSelectedTeacherName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              >
                {teacherNames.map((name) => (
                  <option key={name} value={name} className="bg-[#1a202c] text-white">
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Specific Topic & Material Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Specific Topic or Chapter to Prepare <span className="text-[#f39228]">*</span>
              </label>
              <input
                type="text"
                required
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="e.g. Fractions & Linear Equations, Stoichiometry, Mechanics, Python loops..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a202c] border border-slate-700 text-white font-mono text-xs focus:border-[#f39228] focus:outline-none"
              />
            </div>

            {/* Homework / Syllabus PDF Upload */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Attach Student Homework / Textbook PDF
              </label>
              <div className="flex items-center gap-2">
                <label className="flex-1 px-3.5 py-2 rounded-xl bg-[#1a202c] border border-dashed border-slate-600 hover:border-amber-500 cursor-pointer text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="truncate">{attachedFileName || 'Choose PDF / Homework Document...'}</span>
                  <UploadCloud className="w-4 h-4 text-[#f39228] shrink-0 ml-2" />
                  <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Row 4: 24/7 Scheduling (Real Day and Date + 24/7 Slots) */}
          <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-[#f39228] uppercase flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 24/7 Round-the-Clock Schedule (Real Day & Date)
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800">
                ● 24/7 Teacher Availability
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Day & Date selection */}
              <div className="md:col-span-6 space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-slate-400">Select Day & Date:</label>
                  <input 
                    type="date"
                    value={customDatePicker}
                    onChange={(e) => {
                      setCustomDatePicker(e.target.value);
                      const d = new Date(e.target.value);
                      if (!isNaN(d.getTime())) {
                        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                        const monthName = d.toLocaleDateString('en-US', { month: 'short' });
                        setSelectedDayObj({
                          id: 'custom-date',
                          fullDateStr: e.target.value,
                          label: `${dayName}, ${monthName} ${d.getDate()}`
                        });
                      }
                    }}
                    className="text-[11px] font-mono bg-[#1a202c] text-amber-300 px-2 py-0.5 rounded border border-slate-700"
                  />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {realDays.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        setSelectedDayObj(d);
                        setCustomDatePicker(d.fullDateStr);
                      }}
                      className={`p-2 rounded-xl text-xs font-mono font-bold border transition-all text-center truncate ${
                        selectedDayObj.fullDateStr === d.fullDateStr
                          ? 'bg-[#f39228] border-amber-400 text-dark-950 shadow'
                          : 'bg-[#1a202c] border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 24/7 Time Slots */}
              <div className="md:col-span-6 space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400">Available 24/7 Time Slot:</label>
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
                  ? `Confirm Free 30-Min Trial Lesson with ${selectedTeacherName}` 
                  : `Confirm Academic Term Subscription with ${selectedTeacherName}`}
              </span>
            </button>
            <p className="text-center text-[11px] text-slate-400 font-mono mt-2">
              {bookingType === 'trial' 
                ? '✓ 100% Free Trial Lesson • Teacher prepares lesson based on your subject' 
                : '✓ Dedicated Weekly 1-on-1 Mentorship • 24/7 Flexible Rescheduling'}
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
                  {selectedGrade} {subject} • 1-on-1 with {selectedTeacherName}
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
              <span className="text-slate-400 block text-[10px] uppercase">Assigned Nexa Teacher:</span>
              <span className="text-amber-300 font-bold">{selectedTeacherName}</span>
              <span className="text-slate-400 block text-[11px] mt-0.5">1-on-1 Dedicated Mentor</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Confirmed 24/7 Schedule:</span>
              <span className="text-emerald-400 font-bold">{selectedDayObj.label}</span>
              <span className="text-slate-300 block text-[11px] mt-0.5">{selectedTimeSlot}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Shared Homework PDF:</span>
              <span className="text-[#f39228] font-bold truncate block">{attachedFileName}</span>
              <span className="text-emerald-400 text-[10px] block mt-0.5">✓ Ready on Screen Share</span>
            </div>
          </div>

          {/* Specific Topic Focus Bar */}
          <div className="p-3.5 rounded-xl bg-[#1a202c] border border-amber-500/20 text-xs font-mono flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
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
                  <span>Real-Time Countdown to Live Class:</span>
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
      {/* 4. LIVE VIRTUAL CLASSROOM (SPLIT SCREEN LAPTOP VIEW)                  */}
      {/* ===================================================================== */}
      <div ref={classroomSectionRef} className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono text-[#f39228] font-bold uppercase tracking-wider">
              Nexa 1-on-1 Virtual Classroom
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Live Session with {selectedTeacherName} ({selectedGrade} • {subject})
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-emerald-400">● 50% Blackboard</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400">50% Screen & Material Share</span>
          </div>
        </div>

        <PreplyVirtualClassroom
          mentorName={selectedTeacherName}
          subject={subject}
          gradeLevel={selectedGrade}
          sharedDocumentName={attachedFileName}
          onCloseClassroom={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

    </div>
  );
}
