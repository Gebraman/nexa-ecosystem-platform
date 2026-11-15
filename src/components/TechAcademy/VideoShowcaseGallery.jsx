import React, { useState } from 'react';
import { 
  Play, 
  X, 
  MonitorPlay, 
  Clock, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function VideoShowcaseGallery() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const videoLibrary = [
    {
      id: 'v1',
      title: "Do you think I am capable to learn coding from zero background?",
      category: "Admissions Orientation",
      duration: "14:22",
      speaker: "Lead Academic Instructor",
      badge: "Must Watch for Beginners",
      badgeColor: "bg-amber-950 text-amber-400 border-amber-800",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "A comprehensive breakdown addressing imposter syndrome, mathematical prerequisites, and how our 32-week scaffolded methodology takes non-technical students to production engineers."
    },
    {
      id: 'v2',
      title: "Complete Curriculum Walkthrough: AI-Powered Full-Stack Engineering",
      category: "Course Deep Dive",
      duration: "22:45",
      speaker: "Senior Curriculum Architect",
      badge: "32-Week Breakdown",
      badgeColor: "bg-cyan-950 text-cyan-400 border-cyan-800",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "Phase 1 to Phase 4 detailed roadmap: HTML5, CSS3, modern JavaScript ES6+, Express REST APIs, MySQL normalization, and modern OpenAI RAG architectures."
    },
    {
      id: 'v3',
      title: "In-Class Live Mentorship vs. Self-Paced: Which Fits Your Goals?",
      category: "Tuition & Format",
      duration: "11:18",
      speaker: "Admissions Director",
      badge: "Format Comparison",
      badgeColor: "bg-emerald-950 text-emerald-400 border-emerald-800",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "Comparing live Zoom weekend classes, dedicated TA office hours, and weekday discussion shifts against independent self-paced recorded study."
    },
    {
      id: 'v4',
      title: "Multi-Timezone Scheduling: How Our 4 Discussion Shifts Work",
      category: "Cohort Operations",
      duration: "09:34",
      speaker: "Student Success Coordinator",
      badge: "Timezone Guide",
      badgeColor: "bg-indigo-950 text-indigo-400 border-indigo-800",
      thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "How students across North America (EST/PST), Europe, and East Africa (EAT / Ethiopian Local Time ማታ 11:00-1:00 ሰዓት) synchronize seamlessly."
    },
    {
      id: 'v5',
      title: "Inside the Abe Garage AI Capstone: Building a Commercial SaaS",
      category: "Capstone Project",
      duration: "18:50",
      speaker: "Principal Software Engineer",
      badge: "Phase 4 Flagship",
      badgeColor: "bg-purple-950 text-purple-400 border-purple-800",
      thumbnail: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "Deconstructing the 10-session automotive repair shop management platform: MySQL schemas, work order status flows, and OBD-II AI vehicle diagnostics."
    },
    {
      id: 'v6',
      title: "Alumni Journey: Landing Software Engineering Roles from Addis Ababa & US",
      category: "Career & Outcomes",
      duration: "26:12",
      speaker: "Alumni Panel & Career Coach",
      badge: "Career Success",
      badgeColor: "bg-amber-950 text-amber-400 border-amber-800",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      videoId: "M8dQpAeqsbY",
      description: "Recent graduates share their journey through technical resumes, GitHub portfolios, and whiteboard interviews leading to senior software engineering offers."
    }
  ];

  return (
    <section id="video-lessons" className="py-20 bg-dark-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>Admissions & Masterclass Video Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Learn What to Expect Inside the Academy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Watch our foundational overview videos covering student readiness, curriculum depth, schedule shifts, and alumni success. Click any video to play instantly in HD.
          </p>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLibrary.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="group rounded-3xl bg-dark-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-amber-500/10 transform hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-dark-950/90 text-white font-mono text-[10px] font-bold flex items-center gap-1 border border-slate-700">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{video.duration}</span>
                </div>

                {/* Centered Glowing Play Button (Evangadi Style) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-dark-950 flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-dark-950 ml-0.5" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border uppercase ${video.badgeColor}`}>
                    {video.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    {video.category} • Speaker: {video.speaker}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mt-1.5 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span className="flex items-center gap-1">
                    <span>Watch Masterclass</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">1080p HD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Video Player Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="w-full max-w-4xl rounded-3xl bg-dark-900 border border-slate-700 overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-dark-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase">
                  {activeVideoModal.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {activeVideoModal.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-9 h-9 rounded-full bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal.videoId}?autoplay=1`}
                title={activeVideoModal.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-dark-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {activeVideoModal.description}
              </p>
              <a
                href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0 text-center"
              >
                Book 1-on-1 Diagnostic
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
