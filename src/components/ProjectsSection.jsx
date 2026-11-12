import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Check, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Eye, 
  X, 
  ChevronRight, 
  Cpu, 
  Calendar, 
  Layers, 
  Sliders, 
  Send,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [orderModalProject, setOrderModalProject] = useState(null);
  const [showCustomOrderBuilder, setShowCustomOrderBuilder] = useState(false);

  // Custom order builder form state
  const [customProjectTitle, setCustomProjectTitle] = useState('');
  const [customClientEmail, setCustomClientEmail] = useState('');
  const [customTimeline, setCustomTimeline] = useState('1 to 2 Weeks');
  const [customFeatures, setCustomFeatures] = useState({
    auth: true,
    database: true,
    payments: false,
    ai: false,
    adminDashboard: true,
  });
  const [customOrderSent, setCustomOrderSent] = useState(false);

  const categories = ['All', 'SaaS & LMS', 'Fintech & Crypto', 'E-Commerce', 'Operations & CRM', 'Landing Pages'];

  const filteredProjects = selectedFilter === 'All'
    ? ecosystemData.projectClones
    : ecosystemData.projectClones.filter(p => p.category === selectedFilter);

  const toggleFeature = (key) => {
    setCustomFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCustomOrderSubmit = (e) => {
    e.preventDefault();
    setCustomOrderSent(true);
    setTimeout(() => {
      setCustomOrderSent(false);
      setShowCustomOrderBuilder(false);
    }, 4000);
  };

  return (
    <section id="projects" className="py-24 border-b border-slate-800/80 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono uppercase mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Developer Web Lab // Clones & Custom Builds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Client Project Showcase & Custom Web Builds
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore our live repository of full-stack project clones. Select a verified template to customize, or commission a completely custom web application tailored to your business needs.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowCustomOrderBuilder(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:brightness-110 text-dark-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Sparkles className="w-4 h-4 text-dark-950" />
              <span>Order Custom Website From Scratch</span>
            </button>
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
              className="group rounded-3xl bg-dark-950 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/20 transform hover:-translate-y-1"
            >
              <div>
                {/* Image Header */}
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

                  {/* Tech tags */}
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

                  {/* Features */}
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

        {/* Modal: Project Specs & Architecture Inspector */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 uppercase font-bold">
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
                  <p className="text-[11px] font-mono text-emerald-300 uppercase">Estimated Turnaround</p>
                  <p className="text-sm font-bold text-white">{activeModalProject.deliveryTimeline}</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-emerald-300 uppercase">Project Investment</p>
                  <p className="text-lg font-bold text-emerald-400">{activeModalProject.startingEstimate}</p>
                </div>
                <button
                  onClick={() => {
                    setOrderModalProject(activeModalProject);
                    setActiveModalProject(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs"
                >
                  Order This Clone
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Order Selected Clone */}
        {orderModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg bg-dark-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setOrderModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white">
                Commission a Build Based on Clone
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Template: <span className="text-emerald-400 font-semibold">{orderModalProject.title}</span>
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p>
                    🚀 <strong className="text-white">What Nexa Delivers:</strong> We fork this verified repository, apply your branding, integrate your payment processors (Stripe/PayPal/Chapa), link your cloud database, and deploy live on your custom domain.
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
                    <span>Schedule 15-Min Scoping Session (Google Meet)</span>
                  </a>

                  <a
                    href={`mailto:nexadigitalteamhq@gmail.com?subject=Custom%20Web%20Clone%20Inquiry%20-%20${encodeURIComponent(orderModalProject.title)}`}
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700"
                  >
                    Send Direct Project Brief via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Request Custom Website From Scratch */}
        {showCustomOrderBuilder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-xl bg-dark-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowCustomOrderBuilder(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">
                  Commission a Custom Website From Scratch
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Tell us about the web application or platform you need built. We provide end-to-end architecture, UI design, database setup, and cloud hosting.
              </p>

              {customOrderSent ? (
                <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Project Scope Received!</h4>
                  <p className="text-xs text-slate-300">
                    Gman and our engineering team will review your specifications and email you an itemized technical proposal within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Website Concept / Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AI-Powered Medical Appointment Booking System"
                      value={customProjectTitle}
                      onChange={e => setCustomProjectTitle(e.target.value)}
                      className="mt-1 w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Your Email / WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="client@company.com or +1 (555) 000-0000"
                      value={customClientEmail}
                      onChange={e => setCustomClientEmail(e.target.value)}
                      className="mt-1 w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase mb-2 block">Required Platform Features:</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={customFeatures.auth}
                          onChange={() => toggleFeature('auth')}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span>Auth & User Roles</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={customFeatures.database}
                          onChange={() => toggleFeature('database')}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span>Cloud Database</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={customFeatures.payments}
                          onChange={() => toggleFeature('payments')}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span>Payment Gateway</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={customFeatures.ai}
                          onChange={() => toggleFeature('ai')}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span>AI Assistant / LLM</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Target Delivery Deadline</label>
                    <select
                      value={customTimeline}
                      onChange={e => setCustomTimeline(e.target.value)}
                      className="mt-1 w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="Urgent (3 to 5 Days)">Urgent Sprint (3 to 5 Days)</option>
                      <option value="1 to 2 Weeks">Standard Build (1 to 2 Weeks)</option>
                      <option value="1 Month+ Enterprise">Full Enterprise Platform (1 Month+)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Build Request & Get Quote</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
