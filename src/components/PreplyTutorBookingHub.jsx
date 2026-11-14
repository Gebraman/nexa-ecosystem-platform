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
  ExternalLink
} from 'lucide-react';
import PreplyVirtualClassroom from './PreplyVirtualClassroom';

export default function PreplyTutorBookingHub() {
  const [activeTab, setActiveTab] = useState('book'); // 'book', 'classroom'

  // Booking Flow State
  const [selectedBand, setSelectedBand] = useState('high'); // 'elementary', 'middle', 'high'
  const [selectedSpecificGrade, setSelectedSpecificGrade] = useState('Grade 11');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics & Advanced Calculus');
  const [selectedMentorId, setSelectedMentorId] = useState('m1');
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('04:00 PM EAT');
  const [studentName, setStudentName] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  // Grade Bands and Detailed Specific Grade Levels
  const gradeBands = {
    elementary: {
      id: 'elementary',
      label: 'Grades 1 – 5: Foundation Builders',
      badge: 'Elementary School',
      grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5']
    },
    middle: {
      id: 'middle',
      label: 'Grades 6 – 8: Critical Thinking',
      badge: 'Junior Middle School',
      grades: ['Grade 6', 'Grade 7', 'Grade 8']
    },
    high: {
      id: 'high',
      label: 'Grades 9 – 12: Academic Mastery',
      badge: 'High School & SAT Prep',
      grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'SAT Math Prep']
    }
  };

  // Subjects
  const subjects = [
    { id: 'math', name: 'Mathematics & Advanced Calculus', tag: 'Core STEM' },
    { id: 'physics', name: 'Physics (Mechanics, Electricity & Magnetism)', tag: 'Physical Sciences' },
    { id: 'chemistry', name: 'Chemistry (Stoichiometry & Reactions)', tag: 'Physical Sciences' },
    { id: 'biology', name: 'Biology & Life Sciences (Genetics & Anatomy)', tag: 'Natural Sciences' },
    { id: 'english', name: 'English Literature & SAT Reading', tag: 'Humanities' },
    { id: 'coding', name: 'Introductory Python & Web Coding', tag: 'Computer Science' }
  ];

  // AAU Honors Mentors
  const mentors = [
    {
      id: 'm1',
      name: 'Ermias Tadesse',
      credentials: 'B.Sc. Electrical & Computer Engineering (Honors), AAU',
      specialty: 'High School Calculus, Physics & SAT Math Prep',
      rating: '4.95',
      sessions: '140+ Hours',
      languages: 'English & Amharic',
      badge: 'AAU Top 1% Scholar',
      rate: 'Complimentary Diagnostic'
    },
    {
      id: 'm2',
      name: 'Dr. Bethlehem Wolde',
      credentials: 'MD Candidate, AAU School of Medicine',
      specialty: 'Biology, Chemistry & Middle School Sciences',
      rating: '4.98',
      sessions: '180+ Hours',
      languages: 'English & Amharic',
      badge: 'Academic Medalist',
      rate: 'Complimentary Diagnostic'
    },
    {
      id: 'm3',
      name: 'Natnael Mesfin',
      credentials: 'B.Sc. Computer Science & Software Engineering, AAU',
      specialty: 'Middle & High School Pre-Algebra, Geometry & Python Coding',
      rating: '4.90',
      sessions: '95+ Hours',
      languages: 'English & Amharic',
      badge: 'STEM Youth Lead',
      rate: 'Complimentary Diagnostic'
    },
    {
      id: 'm4',
      name: 'Selamawit Bekele',
      credentials: 'B.Sc. Chemical Engineering (Honors), AAU',
      specialty: 'Organic Chemistry, General Science & Grades 6-10 Math',
      rating: '4.96',
      sessions: '120+ Hours',
      languages: 'English & Amharic',
      badge: 'AAU Honors Fellow',
      rate: 'Complimentary Diagnostic'
    }
  ];

  const timeSlots = [
    '09:00 AM EAT',
    '11:00 AM EAT',
    '02:00 PM EAT',
    '04:00 PM EAT',
    '06:30 PM EAT',
    '08:00 PM EAT'
  ];

  const days = ['Today', 'Tomorrow', 'Saturday', 'Sunday', 'Next Tuesday'];

  const selectedMentor = mentors.find(m => m.id === selectedMentorId) || mentors[0];

  const handleBandChange = (bandId) => {
    setSelectedBand(bandId);
    setSelectedSpecificGrade(gradeBands[bandId].grades[0]);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const booking = {
      id: 'NEXA-' + Math.floor(100000 + Math.random() * 900000),
      student: studentName.trim() || 'Honors Student',
      mentor: selectedMentor.name,
      mentorRole: selectedMentor.credentials,
      grade: selectedSpecificGrade,
      subject: selectedSubject,
      day: selectedDay,
      time: selectedTimeSlot
    };
    setLastBooking(booking);
    setBookingConfirmed(true);
  };

  const handleLaunchClassroomFromBooking = () => {
    setActiveTab('classroom');
  };

  return (
    <div className="space-y-6">
      
      {/* Navigation Switcher: Book 1-on-1 vs Launch Virtual Classroom */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c1017] border border-[#2a2e39]">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Preply-Style 1-on-1 Mentorship Platform
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
            Personalized Academic Tutoring & Virtual Classroom Suite
          </h3>
        </div>

        <div className="flex bg-[#07090e] p-1 rounded-xl border border-[#2a2e39] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('book')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'book'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>1. Book 1-on-1 Mentor</span>
          </button>
          <button
            onClick={() => setActiveTab('classroom')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'classroom'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 text-cyan-400" />
            <span>2. Live Virtual Classroom 🟢</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: PREPLY-STYLE 1-on-1 TUTOR BOOKING FLOW */}
      {activeTab === 'book' && (
        <div className="space-y-6">
          
          {/* Active Booking Banner if already booked */}
          {bookingConfirmed && lastBooking && (
            <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-[#0e1626] to-[#0e1626] border border-emerald-500/40 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                      1-on-1 Session Confirmed • Booking #{lastBooking.id}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {lastBooking.grade} {lastBooking.subject} with {lastBooking.mentor}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono">
                      Scheduled for: <strong>{lastBooking.day} at {lastBooking.time}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLaunchClassroomFromBooking}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-dark-950 font-black text-xs font-mono uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all self-start sm:self-auto shrink-0"
                >
                  <Video className="w-4 h-4 fill-dark-950" />
                  <span>Launch Live Classroom Now &rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* Interactive Step-by-Step Booking Wizard */}
          <div className="rounded-3xl bg-[#090d16] border border-[#2a2e39] p-5 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Step 1: Grade Level Selection (Section by Section) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Select Student Grade Level (Section by Section)
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
                        ? 'bg-indigo-600/20 border-indigo-500 shadow-lg text-white'
                        : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                      {b.badge}
                    </span>
                    <h5 className="text-sm font-bold mt-2 text-white">{b.label}</h5>
                  </button>
                ))}
              </div>

              {/* Specific Grade Pills for Selected Band */}
              <div className="p-3.5 rounded-2xl bg-[#0e131e] border border-[#2a2e39] space-y-2">
                <span className="text-[11px] font-mono text-slate-400">
                  Choose Exact Grade in {gradeBands[selectedBand].badge}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {gradeBands[selectedBand].grades.map((gr) => (
                    <button
                      key={gr}
                      onClick={() => setSelectedSpecificGrade(gr)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                        selectedSpecificGrade === gr
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow'
                          : 'bg-[#141b2d] border-[#2a2e39] text-slate-300 hover:text-white'
                      }`}
                    >
                      {gr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Specific Subject Selection */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Select Specific Subject Focus
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subjects.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubject(sub.name)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedSubject === sub.name
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow'
                        : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">{sub.tag}</span>
                    <h5 className="text-xs sm:text-sm font-bold mt-1 text-white">{sub.name}</h5>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Choose AAU Honors Mentor */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Choose Your Addis Ababa University Honors Mentor
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {mentors.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMentorId(m.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                      selectedMentorId === m.id
                        ? 'bg-indigo-600/20 border-indigo-500 shadow-xl'
                        : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold uppercase">
                          {m.badge}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold font-mono">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{m.rating}</span>
                        </div>
                      </div>

                      <h5 className="text-sm font-bold text-white">{m.name}</h5>
                      <p className="text-[11px] text-indigo-400 font-mono mt-0.5">{m.credentials}</p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{m.specialty}</p>
                    </div>

                    <div className="pt-2 border-t border-[#2a2e39] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>{m.sessions}</span>
                      <span className="text-emerald-400">{m.languages}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Schedule Interactive Time Slot */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Pick Your Live Schedule & Time Slot (East Africa Time)
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Day selector */}
                <div className="md:col-span-5 space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Available Days:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {days.map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDay(d)}
                        className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                          selectedDay === d
                            ? 'bg-indigo-600 border-indigo-400 text-white'
                            : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot selector */}
                <div className="md:col-span-7 space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Available Time Slots (50-Min Session):</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((ts) => (
                      <button
                        key={ts}
                        onClick={() => setSelectedTimeSlot(ts)}
                        className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                          selectedTimeSlot === ts
                            ? 'bg-indigo-600 border-indigo-400 text-white'
                            : 'bg-[#131722] border-[#2a2e39] text-slate-300 hover:text-white'
                        }`}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Booking Confirmation Form */}
            <form onSubmit={handleConfirmBooking} className="p-5 rounded-2xl bg-[#0e131e] border border-indigo-500/30 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase">Student Name or Parent Contact:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student or parent name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-[#2a2e39] text-white font-mono text-xs focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm 1-on-1 Session with {selectedMentor.name}</span>
                  </button>
                </div>
              </div>
            </form>

          </div>

        </div>
      )}

      {/* VIEW 2: THE PREPLY-STYLE VIRTUAL CLASSROOM (BLACKBOARD & SCREEN SHARE) */}
      {activeTab === 'classroom' && (
        <div className="space-y-4 animate-fade-in">
          <PreplyVirtualClassroom
            mentorName={lastBooking?.mentor || selectedMentor.name}
            mentorRole={lastBooking?.mentorRole || selectedMentor.credentials}
            subject={lastBooking?.subject || selectedSubject}
            gradeLevel={lastBooking?.grade || selectedSpecificGrade}
            onCloseClassroom={() => setActiveTab('book')}
          />
        </div>
      )}

    </div>
  );
}
