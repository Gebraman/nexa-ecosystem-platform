import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Terminal, 
  Play, 
  Laptop, 
  Server, 
  Check, 
  Globe 
} from 'lucide-react';

export default function NexaFullStackCapstoneShowcase() {
  const [activeProjectKey, setActiveProjectKey] = useState('project-qa');

  const capstones = [
    {
      id: 'project-qa',
      title: 'Nexa Q&A Community Knowledge Forum',
      discipline: 'Full-Stack MERN / PERN Architecture',
      duration: 'Phase 3 & 4 Flagship Project',
      badge: 'Full-Stack Capstone',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      description: 'A production-grade developer discussion and question-and-answer platform where members can post technical inquiries, write markdown solutions, vote on responses, and select verified answers.',
      stack: ['React 19', 'Node.js', 'Express.js', 'MySQL Relational DB', 'JWT Auth', 'bcrypt', 'Tailwind CSS'],
      highlights: [
        'Relational Database Schema: Normalized MySQL tables for users, questions, answers, and vote tallies.',
        'Secure Authentication: Password hashing with bcrypt and route protection with JSON Web Tokens (JWT).',
        'Optimistic State Updates: Real-time vote incrementing and instant markdown solution preview.',
        'Production Deployment: Frontend hosted on Vercel/Render with cloud-connected managed MySQL database.'
      ],
      previewStats: [
        { label: 'Relational Tables', value: '6 Tables' },
        { label: 'REST Endpoints', value: '18 Routes' },
        { label: 'Lighthouse Score', value: '98/100' }
      ]
    },
    {
      id: 'project-netflix',
      title: 'Netflix Interactive Movie Showcase & Trailer Player',
      discipline: 'Modern JavaScript ES6+ & REST APIs',
      duration: 'Phase 2 Frontend Capstone',
      badge: 'API Engineering',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      description: 'An interactive streaming movie portal consuming live data from The Movie Database (TMDB) API with dynamic video trailer playback, responsive hero backdrops, and debounced category search.',
      stack: ['JavaScript ES6+', 'Async / Await', 'Fetch API', 'DOM Architecture', 'YouTube Iframe API', 'CSS Grid'],
      highlights: [
        'Live REST API Consumption: Asynchronous HTTP requests using Fetch and Promises to stream trending movies.',
        'Dynamic Trailer Modal: Embedded YouTube player that loads official trailers when clicking movie cards.',
        'Debounced Search Filter: Instant search query execution with zero lag or duplicate API calls.',
        'Mobile-First Layout: Fluid horizontal scrolling rows and adaptive movie posters across all devices.'
      ],
      previewStats: [
        { label: 'API Queries', value: 'Live TMDB' },
        { label: 'Async Latency', value: '<120ms' },
        { label: 'Mobile Responsive', value: '100% Fluid' }
      ]
    },
    {
      id: 'project-apple',
      title: 'Apple Homepage Pixel-Perfect Responsive Clone',
      discipline: 'Semantic HTML5, CSS3, Flexbox & Grid',
      duration: 'Phase 1 Frontend Foundations',
      badge: 'Responsive Layouts',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      description: 'A pixel-perfect recreation of Apple\'s official homepage, demonstrating master-level grasp of semantic HTML document anatomy, typography scales, Flexbox alignments, and multi-breakpoint media queries.',
      stack: ['HTML5 Semantic Markup', 'Modern CSS3', 'Flexbox', 'CSS Grid', 'Bootstrap 5 Utilities', 'Git Pages'],
      highlights: [
        'Micro-Typography & Spacing: Precision replication of Apple’s San Francisco typeface metrics and spacing.',
        'Responsive Video & Media: Fluid picture element art-direction and responsive hero video frames.',
        'Collapsible Mobile Nav: Custom toggle menu built with clean, accessible interactions.',
        'Cross-Browser Verified: Pixel testing across Safari, Chrome, Firefox, and mobile WebKit.'
      ],
      previewStats: [
        { label: 'CSS Media Queries', value: '6 Breakpoints' },
        { label: 'Semantic Elements', value: '100% WCAG' },
        { label: 'Bundle Size', value: 'Zero Bloat' }
      ]
    }
  ];

  const currentProject = capstones.find(p => p.id === activeProjectKey) || capstones[0];

  return (
    <section id="fullstack-projects" className="py-20 bg-dark-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Real-World Commercial Web Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Full-Stack Capstone Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Students do not just write exercises—they build and deploy commercial-grade web applications to showcase in their engineering portfolios. Explore the three milestone projects built across our 32-week curriculum:
          </p>
        </div>

        {/* 3 Project Selector Tabs (Evangadi Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {capstones.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveProjectKey(cap.id)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeProjectKey === cap.id
                  ? 'bg-dark-900 border-amber-500 shadow-xl shadow-amber-500/10'
                  : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">
                {cap.duration}
              </span>
              <h4 className="text-sm font-bold text-white">{cap.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1">{cap.discipline}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Project Details Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border uppercase ${currentProject.badgeColor}`}>
                {currentProject.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                {currentProject.discipline} • {currentProject.duration}
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              {currentProject.previewStats.map((stat, sIdx) => (
                <div key={sIdx} className="px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">{stat.label}</span>
                  <span className="text-xs font-bold text-amber-400 font-mono">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {currentProject.description}
          </p>

          {/* Highlights & Architecture Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Engineering Highlights & Competencies Demonstrated:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentProject.highlights.map((h, hIdx) => (
                <div key={hIdx} className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/90 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              {currentProject.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-dark-950 border border-slate-700 text-[11px] font-mono text-slate-200 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Schedule 1-on-1 Code Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
