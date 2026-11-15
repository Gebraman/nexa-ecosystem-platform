import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Car, 
  FileText, 
  ChevronRight, 
  Bot, 
  Play, 
  Check, 
  AlertTriangle 
} from 'lucide-react';

export default function AbeGarageShowcase() {
  const [activePart, setActivePart] = useState('part-3'); // 'part-1', 'part-2', 'part-3'
  const [selectedErrorCode, setSelectedErrorCode] = useState('P0300');
  const [isSimulatingAi, setIsSimulatingAi] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState({
    code: 'P0300',
    title: 'Random/Multiple Cylinder Misfire Detected',
    severity: 'High - Catalytic Converter Risk',
    probableCauses: [
      'Worn spark plugs or damaged ignition coils',
      'Low fuel pressure or clogged fuel injectors',
      'Intake manifold vacuum leak or faulty mass air flow (MAF) sensor',
      'Weak cylinder compression'
    ],
    recommendedFix: 'Perform cylinder balance test, inspect coil pack resistances, check fuel trim data (STFT/LTFT), and inspect spark plug gap.',
    estimatedLaborHours: '1.5 - 2.5 Hours'
  });

  const errorPresets = [
    {
      code: 'P0300',
      title: 'Random/Multiple Cylinder Misfire',
      desc: 'Multiple cylinders misfiring under load.',
      result: {
        code: 'P0300',
        title: 'Random/Multiple Cylinder Misfire Detected',
        severity: 'High - Catalytic Converter Risk',
        probableCauses: [
          'Worn spark plugs or damaged ignition coils',
          'Low fuel pressure or clogged fuel injectors',
          'Intake manifold vacuum leak or faulty mass air flow (MAF) sensor',
          'Weak cylinder compression'
        ],
        recommendedFix: 'Perform cylinder balance test, inspect coil pack resistances, check fuel trim data (STFT/LTFT), and inspect spark plug gap.',
        estimatedLaborHours: '1.5 - 2.5 Hours'
      }
    },
    {
      code: 'P0420',
      title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
      desc: 'Catalytic converter operating below target efficiency.',
      result: {
        code: 'P0420',
        title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
        severity: 'Medium - Emissions Non-Compliance',
        probableCauses: [
          'Degraded catalytic converter substrate',
          'Defective downstream heated oxygen sensor (O2S)',
          'Exhaust pipe leak ahead of catalytic converter',
          'Engine running rich due to leaking fuel injector'
        ],
        recommendedFix: 'Monitor upstream vs downstream O2 sensor waveforms with live oscilloscope; inspect for pre-cat exhaust leaks before replacing converter.',
        estimatedLaborHours: '2.0 - 3.0 Hours'
      }
    },
    {
      code: 'P0171',
      title: 'System Too Lean (Bank 1)',
      desc: 'Air-fuel mixture has excess oxygen.',
      result: {
        code: 'P0171',
        title: 'Fuel Trim System Too Lean (Bank 1)',
        severity: 'Medium - Poor Fuel Economy & Stumbling',
        probableCauses: [
          'Unmetered vacuum leak (cracked PCV hose or intake gasket)',
          'Dirty or contaminated Mass Air Flow (MAF) sensor element',
          'Clogged fuel filter or failing fuel pump',
          'Faulty positive crankcase ventilation valve'
        ],
        recommendedFix: 'Perform smoke test on intake tract to detect vacuum leaks, clean MAF sensor with dedicated solvent, and verify rail fuel pressure.',
        estimatedLaborHours: '1.0 - 2.0 Hours'
      }
    }
  ];

  const handleSelectCode = (preset) => {
    setSelectedErrorCode(preset.code);
    setIsSimulatingAi(true);
    setTimeout(() => {
      setAiAnalysisResult(preset.result);
      setIsSimulatingAi(false);
    }, 400);
  };

  return (
    <section id="abe-garage" className="py-20 bg-dark-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-purple-400" />
            <span>Phase 4 Flagship Production Capstone</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Abe Garage: AI-Powered Auto Repair SaaS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            In the final phase of our bootcamp, students build a commercial-grade, multi-role garage management application with relational MySQL databases, role-based JWT security, and <strong>live OpenAI OBD-II diagnostic AI integration</strong> across 10 intensive sessions.
          </p>
        </div>

        {/* 3-Part Milestones Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <button
            onClick={() => setActivePart('part-1')}
            className={`p-5 rounded-2xl border text-left transition-all ${
              activePart === 'part-1'
                ? 'bg-dark-900 border-amber-500 shadow-xl shadow-amber-500/10'
                : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">Sessions I – IV</span>
            <h4 className="text-sm font-bold text-white">Part 1: Architecture & Intake</h4>
            <p className="text-[11px] text-slate-400 mt-1">Vehicle VIN records, customer profiles & MySQL relational ERD.</p>
          </button>

          <button
            onClick={() => setActivePart('part-2')}
            className={`p-5 rounded-2xl border text-left transition-all ${
              activePart === 'part-2'
                ? 'bg-dark-900 border-cyan-500 shadow-xl shadow-cyan-500/10'
                : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-cyan-400 block mb-1">Sessions V – VII</span>
            <h4 className="text-sm font-bold text-white">Part 2: Work Orders & Parts</h4>
            <p className="text-[11px] text-slate-400 mt-1">Mechanic status flows, inventory deduction & labor tracking.</p>
          </button>

          <button
            onClick={() => setActivePart('part-3')}
            className={`p-5 rounded-2xl border text-left transition-all ${
              activePart === 'part-3'
                ? 'bg-dark-900 border-purple-500 shadow-xl shadow-purple-500/10'
                : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-purple-400 block mb-1">Sessions VIII – X</span>
            <h4 className="text-sm font-bold text-white">Part 3: AI OBD-II Diagnostics</h4>
            <p className="text-[11px] text-slate-400 mt-1">OpenAI API trouble code diagnosis & automated PDF billing.</p>
          </button>
        </div>

        {/* Dynamic Part Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Architectural Specs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded bg-purple-950 text-purple-400 border border-purple-800 font-bold uppercase">
                  {activePart === 'part-1' && 'Database & Auth Layer'}
                  {activePart === 'part-2' && 'Business Logic & State Machine'}
                  {activePart === 'part-3' && 'AI & LLM Integration Layer'}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">Production Ready</span>
              </div>

              {activePart === 'part-1' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white">
                    Part 1: Customer Intake & Relational Data Modeling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Students construct a normalized MySQL relational schema connecting customers, vehicle registrations, and service records using prepared SQL statements to prevent injection.
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Role-Based Access Control:</strong> Customer, Service Advisor, Mechanic, and Admin roles via JWT tokens.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Vehicle VIN Decoder:</strong> Automated auto make, model, year extraction from 17-character VINs.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>MySQL Connection Pool:</strong> High-concurrency database queries with zero memory leaks.</span>
                    </div>
                  </div>
                </div>
              )}

              {activePart === 'part-2' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white">
                    Part 2: Work Order Lifecycle & Parts Inventory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Build a comprehensive repair order tracking engine that coordinates shop mechanics, parts stock deduction, and real-time repair progress statuses.
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Order State Machine:</strong> Intake &rarr; Diagnosis &rarr; In Progress &rarr; Waiting for Parts &rarr; Ready for Pickup.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Mechanic Task Board:</strong> Drag-and-drop Kanban workflow showing assigned vehicle bays.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Real-Time Parts Inventory:</strong> Deducts filters, brake pads, and fluids from database stock upon job assignment.</span>
                    </div>
                  </div>
                </div>
              )}

              {activePart === 'part-3' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white">
                    Part 3: AI OBD-II Diagnostics & Automated Invoicing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Incorporate OpenAI Function Calling and custom prompt engineering so technicians can enter standard OBD-II check engine codes to receive instant, plain-English repair recommendations and labor estimates.
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>AI Diagnostic Prompt Engine:</strong> Queries OpenAI gpt-4o with structured JSON schema outputs.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>RAG Knowledge Base:</strong> Enriches AI prompts with manufacturer technical service bulletins (TSBs).</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Automated Customer Invoice:</strong> Generates itemized tax invoices with labor rates and parts subtotals.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700 text-cyan-400">React.js</span>
                  <span className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700 text-emerald-400">Node.js / Express</span>
                  <span className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700 text-blue-400">MySQL 8.0</span>
                  <span className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700 text-purple-400">OpenAI API</span>
                  <span className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700 text-amber-400">JWT Auth</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Live AI Diagnostic Simulator (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-purple-500/40 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-400" />
                  <h4 className="text-base font-bold text-white">Live AI Diagnostic Simulator</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold uppercase">
                  Interactive Demo
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Click any OBD-II diagnostic trouble code below to simulate the AI mechanic assistance workflow built by students in Phase 4:
              </p>

              {/* Error Code Presets */}
              <div className="grid grid-cols-3 gap-2">
                {errorPresets.map((preset) => (
                  <button
                    key={preset.code}
                    onClick={() => handleSelectCode(preset)}
                    className={`py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedErrorCode === preset.code
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : 'bg-dark-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {preset.code}
                  </button>
                ))}
              </div>

              {/* AI Diagnostic Output Terminal */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800 text-slate-400">
                  <span>Target OBD-II: <strong className="text-purple-400">{selectedErrorCode}</strong></span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    AI Engine Online
                  </span>
                </div>

                {isSimulatingAi ? (
                  <div className="py-8 text-center text-slate-400 space-y-2">
                    <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-[11px]">Generating AI Diagnostic Assessment...</p>
                  </div>
                ) : (
                  <div className="space-y-3 animate-fade-in font-sans">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Identified Diagnostic Issue</span>
                      <h5 className="text-sm font-bold text-white">{aiAnalysisResult.title}</h5>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold">{aiAnalysisResult.severity}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Most Probable Causes</span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {aiAnalysisResult.probableCauses.map((cause, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-purple-400">•</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Recommended Procedure</span>
                      <p className="text-xs text-slate-300 mt-0.5 leading-snug">{aiAnalysisResult.recommendedFix}</p>
                      <span className="text-[11px] font-mono text-cyan-400 mt-1 block">Est. Labor Time: {aiAnalysisResult.estimatedLaborHours}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
