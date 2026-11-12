import React, { useState } from 'react';
import { 
  Workflow, 
  Search, 
  Send, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileCode,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function WorkflowSection() {
  const [copiedProposal, setCopiedProposal] = useState(false);

  const sampleProposal = `Hi [Client Name],

I noticed your requirement for high-volume data cleaning & spreadsheet formatting. At Nexa Digital Team, we specialize in error-free USD data operations, CRM deduplication, and automated Google Sheets/Excel infrastructure.

Here is how our 3-person squad will execute your task:
1. Intake & Validation: We inspect your raw sheet, run automated regex scripts to flag duplicate emails/addresses/SKUs.
2. Cell-by-Cell Scrubbing: Standardize capitalization, remove whitespace, and verify syntax against your rubric.
3. Dual-Gate QA: A dedicated QA Lead audits 100% of rows before final delivery.

Live Proof of Work: You can inspect our interactive live spreadsheet demo and test a sample CSV export directly on our platform: https://nexa-portfolio-theta.vercel.app/

We can complete your batch of [e.g. 5,000 rows] within 24 hours at 99.9% guaranteed accuracy.

Ready to start immediately.
Best regards,
Gman | Operations Lead, Nexa Digital Team`;

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(sampleProposal);
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 3000);
  };

  return (
    <section id="workflow" className="py-20 border-b border-slate-800/80 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Operational Engine // Job Bidding & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Nexa Finds, Wins & Executes Remote Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            From automated job feed alerts to double-checked QA verification. Our battle-tested workflow ensures every remote contract is won fast and delivered with zero friction.
          </p>
        </div>

        {/* 5-Step Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {ecosystemData.workflowSteps.map((step, idx) => (
            <div 
              key={step.step}
              className="relative p-6 rounded-2xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < ecosystemData.workflowSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-dark-950 border border-slate-700 flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The Winning Bidding Blueprint & Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-2xl font-bold text-white">
              The Nexa High-Converting Bidding Blueprint
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Most freelancers fail on Upwork and freelance platforms because they write generic "Sir I will do this" proposals. Nexa uses a scientific, value-first bidding structure:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Sub-15 Minute Submission:</strong> We respond before clients are overwhelmed with 50+ applicants.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Live Interactive Proof:</strong> We include direct links to our live USD worksheet simulator so clients can test our data capabilities right away.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Risk-Reversal Guarantee:</strong> Free sample scrub of 20 client rows prior to contract kickoff.
                </div>
              </div>
            </div>
          </div>

          {/* Proposal Code/Text Inspector Box */}
          <div className="lg:col-span-7 rounded-2xl bg-dark-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-dark-850 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">
                  Nexa_Winning_Upwork_Proposal_Template.md
                </span>
              </div>
              <button
                onClick={handleCopyProposal}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-all"
              >
                {copiedProposal ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedProposal ? 'Copied!' : 'Copy Script'}</span>
              </button>
            </div>

            <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed bg-dark-950/60 max-h-[380px]">
              {sampleProposal}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
