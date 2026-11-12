import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Calendar, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Custom Web Development / Clone Commission');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 6000);
  };

  const contactChannels = [
    {
      icon: Calendar,
      title: 'Google Meet',
      value: 'Instant 15-Min Scoping Session',
      link: 'https://calendar.app.google/NqgKSXoBhqz163hG9',
      accent: 'text-cyan-400',
    },
    {
      icon: Mail,
      title: 'Direct Email',
      value: 'nexadigitalteamhq@gmail.com',
      link: 'mailto:nexadigitalteamhq@gmail.com',
      accent: 'text-emerald-400',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Nexa Digital Team',
      link: 'https://www.linkedin.com/in/nexa-digitalteamhq-354a1840b/',
      accent: 'text-indigo-400',
    },
    {
      icon: Github,
      title: 'GitHub Repositories',
      value: 'github.com/nexadigitalteamhq-design',
      link: 'https://github.com/nexadigitalteamhq-design',
      accent: 'text-slate-300',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Client Inquiries & Academy Admissions</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build & Collaborate
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Whether you want to commission a custom web application for your brand, enroll in our SMC Forex & Full-Stack academies, or book 1-on-1 academic tutoring for your student.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {contactChannels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${c.accent}`} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {c.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {c.value}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Intake Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send Project Brief or Consultation Request
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Gman and our engineering lead reply directly within 2 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Inquiry Transmitted!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formName}</strong>. Our team has received your brief and will respond directly to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Your Name / Company</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan / TechBrand"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase">Area of Interest / Service</label>
                  <select
                    value={formService}
                    onChange={e => setFormService(e.target.value)}
                    className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Custom Web Development / Clone Commission">Custom Web Development / Website Clone Commission</option>
                    <option value="Forex Trading Academy & Mentorship">Nexa Forex Trading Academy & Video Mentorship</option>
                    <option value="Full-Stack Web Dev Academy">Full-Stack Web Development Academy Cohort</option>
                    <option value="K-12 1-on-1 Academic Tutoring">K-12 1-on-1 Academic STEM Tutoring (Math, Calculus, Physics)</option>
                    <option value="General Collaboration">General Innovation / Educational Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase">Project Scope / Specific Requirements</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your desired website features, student's target grade level, or questions about our SMC curriculum..."
                    value={formMessage}
                    onChange={e => setFormMessage(e.target.value)}
                    className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 text-dark-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief to Nexa Leadership</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
