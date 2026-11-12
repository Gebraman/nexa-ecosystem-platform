import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Calendar, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Globe2
} from 'lucide-react';

export default function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Data Operations / Spreadsheet Scrubbing');
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
      value: 'Instant 15-Min Strategy Session',
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
    <section id="contact" className="py-20 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Global Inquiries & Partnerships</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build & Collaborate
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Whether you need high-volume data operations executed, a custom full-stack clone built for your startup, access to our SMC Forex modules, or 1-on-1 K-12 academic tutoring.
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
                    className="p-4 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
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
          <div className="lg:col-span-7 p-8 rounded-2xl bg-dark-900 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send Requirement or Project Brief
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our operations desk replies within 2 hours. We sign NDAs and provide free pilot samples.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/80 border border-emerald-500 text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Project Inquiry Received!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formName}</strong>. Gman and our operations lead have received your brief and will email you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Your Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan / TechCorp"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase">Work Email Address</label>
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
                  <label className="text-xs font-mono text-slate-400 uppercase">Select Target Vertical</label>
                  <select
                    value={formService}
                    onChange={e => setFormService(e.target.value)}
                    className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Data Operations / Spreadsheet Scrubbing">Remote USD Data Operations & Spreadsheet Cleanup</option>
                    <option value="Custom Project Clone / Web Dev">Custom Web Project Clone (LMS, SaaS, E-Commerce, Fintech)</option>
                    <option value="SMC Forex Strategy & Unlisted Videos">SMC Forex Strategy, Unlisted Videos & Backtesting</option>
                    <option value="K-12 Academic Scholars Tutoring">K-12 1-on-1 STEM Academic Tutoring (Math, Calculus, Physics)</option>
                    <option value="Full Remote Retainer">Dedicated Remote Virtual Assistant / Full Team Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase">Project Details / Scope</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the volume of rows, deadlines, website features, or academic tutoring requirements..."
                    value={formMessage}
                    onChange={e => setFormMessage(e.target.value)}
                    className="mt-1 w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 text-dark-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Nexa Operations Desk</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
