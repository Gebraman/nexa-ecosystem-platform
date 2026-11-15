import React, { useState } from 'react';
import { 
  MonitorPlay, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  BookOpen, 
  FolderGit2, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  Award, 
  Check, 
  Play, 
  UploadCloud, 
  Send,
  AlertCircle,
  HelpCircle,
  UserCheck
} from 'lucide-react';

export default function StudentLaunchpadDashboard() {
  const [activeModuleId, setActiveModuleId] = useState('week-28');
  const [githubUrl, setGithubUrl] = useState('');
  const [deployedUrl, setDeployedUrl] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'submitting', 'submitted'
  const [activeDiscussionTab, setActiveDiscussionTab] = useState('all');

  const modules = [
    {
      id: 'week-28',
      week: 'Week 28',
      title: 'Retrieval-Augmented Generation (RAG) Pipelines & Vector DBs',
      phase: 'Phase 4: AI Engineering',
      videoId: 'M8dQpAeqsbY', // Default placeholder or lecture video
      duration: '2h 15m',
      instructor: 'Lead AI Engineer',
      resources: [
        { name: 'Starter Code: Pinecone RAG Repo', link: 'https://github.com' },
        { name: 'Lecture Slides & Notes (PDF)', link: '#' },
        { name: 'OpenAI Embeddings Cheatsheet', link: '#' }
      ]
    },
    {
      id: 'week-27',
      week: 'Week 27',
      title: 'Vector Embeddings, High-Dimensional Spaces & Semantic Search',
      phase: 'Phase 4: AI Engineering',
      videoId: 'M8dQpAeqsbY',
      duration: '1h 50m',
      instructor: 'Lead AI Engineer',
      resources: [
        { name: 'Cosine Similarity Demo Script', link: 'https://github.com' },
        { name: 'Embedding Math Visualizer', link: '#' }
      ]
    },
    {
      id: 'week-24',
      week: 'Week 24',
      title: 'Evangadi / Nexa Q&A Full-Stack Forum Deployment',
      phase: 'Phase 3: MERN Stack',
      videoId: 'M8dQpAeqsbY',
      duration: '2h 45m',
      instructor: 'Senior Full-Stack Mentor',
      resources: [
        { name: 'MySQL Schema SQL Dump', link: 'https://github.com' },
        { name: 'Express Auth Middleware Boilerplate', link: 'https://github.com' }
      ]
    },
    {
      id: 'week-16',
      week: 'Week 16',
      title: 'Netflix Clone: TMDB API Integration & Video Trailer Modals',
      phase: 'Phase 2: JavaScript ES6+',
      videoId: 'M8dQpAeqsbY',
      duration: '2h 10m',
      instructor: 'Frontend Specialist',
      resources: [
        { name: 'TMDB API Key Setup Guide', link: '#' },
        { name: 'YouTube Embed Hook Repository', link: 'https://github.com' }
      ]
    }
  ];

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl.trim()) return;

    setSubmissionStatus('submitting');
    setTimeout(() => {
      setSubmissionStatus('submitted');
    }, 900);
  };

  return (
    <div className="py-12 bg-dark-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Student Welcome Banner & Live Status Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-900 to-amber-950/20 border border-slate-800 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-dark-950 font-extrabold flex items-center justify-center text-xl shadow-lg shrink-0">
              ET
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Active Scholar
                </span>
                <span className="text-xs font-mono text-slate-400">ID: NXA-2026-881</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Welcome to Student Launchpad, Ermias
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Track: <strong className="text-amber-400">AI-Powered Full-Stack Application Development</strong> • Week 28 of 32
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-4 self-start lg:self-auto">
            <div className="px-4 py-2.5 rounded-2xl bg-dark-950 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Curriculum Progress</span>
              <span className="text-lg font-bold text-amber-400 font-mono">87.5%</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-dark-950 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Class Attendance</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">96%</span>
            </div>
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Join Live Zoom / Meet Class</span>
            </a>
          </div>
        </div>

        {/* 2-Column Student Workplace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Lecture Theater Player & Module List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                    <MonitorPlay className="w-4 h-4" /> {activeModule.phase}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeModule.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {activeModule.week} • Duration: {activeModule.duration} • Instructor: {activeModule.instructor}
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[11px] font-mono font-bold shrink-0">
                  HD Recording
                </span>
              </div>

              {/* Responsive Video Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${activeModule.videoId}`}
                  title={activeModule.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Lesson Resource Links */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-2">
                  Lesson Materials & Repositories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModule.resources.map((res, rIdx) => (
                    <a
                      key={rIdx}
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-700 hover:border-slate-600 text-xs text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{res.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Modules Playlist Drawer */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Launchpad Lecture Archives</span>
              </h4>

              <div className="space-y-2">
                {modules.map((m) => {
                  const isCurrent = m.id === activeModuleId;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setActiveModuleId(m.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isCurrent
                          ? 'bg-dark-950 border-amber-500 shadow-md'
                          : 'bg-dark-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-slate-400 font-bold">
                            {m.week}
                          </span>
                          <h5 className="text-xs font-bold text-white">{m.title}</h5>
                        </div>
                        <p className="text-[10px] font-mono text-slate-500 mt-1">
                          {m.phase} • {m.duration}
                        </p>
                      </div>

                      <div className={`px-2.5 py-1 rounded text-[11px] font-bold flex items-center gap-1 ${
                        isCurrent ? 'bg-amber-500 text-dark-950' : 'text-slate-400'
                      }`}>
                        <Play className="w-3 h-3" />
                        <span>{isCurrent ? 'Playing' : 'Load'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Homework Submitter & Peer Help Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Homework Assignment Submission Portal */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800 font-bold uppercase">
                  Assignment Submitter
                </span>
                <span className="text-[11px] font-mono text-amber-400 font-bold">
                  Due: Friday 11:59 PM EST
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">
                Capstone Submission: Abe Garage AI Vehicle Diagnostic Module
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect your GitHub repository and live deployment link. Your assigned Teaching Assistant will provide automated lint checks and personal code feedback within 48 hours.
              </p>

              {submissionStatus === 'submitted' ? (
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h5 className="text-sm font-bold text-white">Assignment Submitted Successfully!</h5>
                  <p className="text-xs text-slate-300">
                    Your code has been queued for TA evaluation. Status: <strong className="text-emerald-400">In Review</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmissionStatus(null);
                      setGithubUrl('');
                      setDeployedUrl('');
                    }}
                    className="text-[11px] text-slate-400 hover:text-white underline pt-1"
                  >
                    Submit an updated commit URL
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAssignmentSubmit} className="space-y-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      GitHub Repository URL <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/your-username/abe-garage-ai"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Live Cloud URL (Render, Vercel, Netlify)
                    </label>
                    <input
                      type="url"
                      value={deployedUrl}
                      onChange={(e) => setDeployedUrl(e.target.value)}
                      placeholder="https://abe-garage-ai.onrender.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20"
                  >
                    {submissionStatus === 'submitting' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Validating Repo...</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4" />
                        <span>Submit for TA Grading</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Peer Community Help Desk */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Cohort Q&A Community</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-500">Live Feed</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-white">Yohannes M. (Toronto)</span>
                    <span className="text-slate-500 font-mono">15m ago</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    "Question on Week 28: Should we use chunk overlap of 50 tokens or 100 tokens when parsing the vehicle service manuals for the Pinecone vector index?"
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-cyan-400">
                    <span className="text-emerald-400 font-bold">Answered by Mentor Bethlehem:</span>
                    <span className="text-slate-400">100 tokens recommended for technical specs to preserve context.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-white">Sara K. (Addis Ababa)</span>
                    <span className="text-slate-500 font-mono">1h ago</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    "Meeting in Discord Study Room #3 at 6:00 PM EAT for anyone who wants to debug the Express-MySQL prepared statements together!"
                  </p>
                  <span className="text-[10px] font-mono text-amber-400">4 classmates attending</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
