import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Layers, 
  Check, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Eye, 
  X, 
  ChevronRight, 
  Database, 
  Server, 
  Cpu, 
  Calendar 
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function CloneShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [orderModalProject, setOrderModalProject] = useState(null);

  const categories = ['All', 'SaaS & LMS', 'Fintech & Crypto', 'E-Commerce', 'Operations & CRM', 'Landing Pages'];

  const filteredProjects = selectedFilter === 'All'
    ? ecosystemData.projectClones
    : ecosystemData.projectClones.filter(p => p.category === selectedFilter);

  return (
    <section id="clone-lab" className="py-20 border-b border-slate-800/80 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono uppercase mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Pillar 02 // Developer Web Lab & Clone Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production-Grade Project Clones & Custom Web Builds
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore our live repository of full-stack clones. Every clone is built with clean architecture, enterprise databases, and responsive UX. Want a similar platform built for your startup? Test the sample and order your custom build below.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/NqgKSXoBhqz163hG9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss Custom Build</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 ${
                selectedFilter === cat
                  ? 'bg-emerald-500 text-dark-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-dark-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-dark-950 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/20 transform hover:-translate-y-1"
            >
              <div>
                {/* Image & Badge Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-dark-950/90 text-emerald-400 border border-emerald-500/40 uppercase tracking-wider backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-900/90 text-slate-300 border border-slate-700 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Price & Actions */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs py-3 border-t border-slate-800/80 text-slate-400 mb-4 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.deliveryTimeline}</span>
                  </div>
                  <div className="text-emerald-400 font-bold">
                    {project.startingEstimate}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inspect Specs</span>
                  </button>

                  <button
                    onClick={() => setOrderModalProject(project)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/10"
                  >
                    <span>Order Clone</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specs & Architecture Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 uppercase">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeModalProject.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-medium text-emerald-400 mt-1">
                {activeModalProject.subtitle}
              </p>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {activeModalProject.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Production Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Breakdown */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Modular Capabilities Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Pricing */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-mono text-emerald-300 uppercase">Estimated Delivery Timeline</p>
                  <p className="text-sm font-bold text-white">{activeModalProject.deliveryTimeline}</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-emerald-300 uppercase">Turnkey Project Price</p>
                  <p className="text-lg font-bold text-emerald-400">{activeModalProject.startingEstimate}</p>
                </div>
                <button
                  onClick={() => {
                    setOrderModalProject(activeModalProject);
                    setActiveModalProject(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs"
                >
                  Request This Clone
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Clone Modal */}
        {orderModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg bg-dark-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setOrderModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white">
                Commission a Custom Build
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Project Baseline: <span className="text-emerald-400 font-semibold">{orderModalProject.title}</span>
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p>
                    🚀 <strong className="text-white">How Nexa Delivers:</strong> We fork this verified codebase, customize your branding, integrate your preferred payment gateway (Stripe/PayPal/Chapa), configure cloud databases, and deploy live on your custom domain.
                  </p>
                  <p className="font-mono text-cyan-400">
                    Typical turnaround: {orderModalProject.deliveryTimeline}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule 15-Min Scoping Call on Google Meet</span>
                  </a>

                  <a
                    href="mailto:nexadigitalteamhq@gmail.com?subject=Custom%20Web%20Clone%20Inquiry%20-%20Nexa"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700"
                  >
                    Email Direct Requirement Document
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
