import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Calendar,
  X,
  Building2,
  Globe2
} from 'lucide-react';
import { techAcademyPricing } from '../../data/techAcademyPricing';

export default function TuitionCalculator({ onAddToCart }) {
  const [selectedRegionKey, setSelectedRegionKey] = useState('outsideEthiopia');
  const [selectedPlanForModal, setSelectedPlanForModal] = useState(null);

  const activeRegionData = techAcademyPricing.regions[selectedRegionKey];

  const handleEnrollClick = (plan) => {
    if (onAddToCart) {
      onAddToCart({ ...plan, currency: activeRegionData.currency });
    } else {
      setSelectedPlanForModal(plan);
    }
  };

  const closeEnrollModal = () => {
    setSelectedPlanForModal(null);
  };

  return (
    <section id="pricing" className="py-20 bg-dark-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Transparent Dual-Region Tuition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {techAcademyPricing.header.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {techAcademyPricing.header.subtitle}
          </p>

          {/* Region Switcher Buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-dark-950 border border-slate-700/80 shadow-xl">
            <button
              onClick={() => setSelectedRegionKey('outsideEthiopia')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                selectedRegionKey === 'outsideEthiopia'
                  ? 'bg-amber-500 text-dark-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Outside Ethiopia (USD $)</span>
            </button>

            <button
              onClick={() => setSelectedRegionKey('insideEthiopia')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                selectedRegionKey === 'insideEthiopia'
                  ? 'bg-emerald-500 text-dark-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Inside Ethiopia (CBE Birr Subsidized)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {activeRegionData.plans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-dark-900 to-dark-950 border-2 border-amber-500/60 shadow-2xl shadow-amber-500/10'
                    : 'bg-dark-900/80 border border-slate-800'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-amber-500 text-dark-950 text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                      {plan.savings}
                    </span>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${plan.discountedPrice}
                    </span>
                    <span className="text-xl text-slate-500 line-through">
                      ${plan.originalPrice}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      / {plan.billingCadence}
                    </span>
                  </div>

                  {plan.birrApprox && (
                    <p className="text-xs text-emerald-400 font-mono mb-2">
                      {plan.birrApprox}
                    </p>
                  )}

                  <p className="text-xs font-mono text-amber-400/90 mb-4">
                    {plan.installmentOption}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed pb-6 border-b border-slate-800">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Included with this package:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-amber-400' : 'text-emerald-400'
                        }`} />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleEnrollClick(plan)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                      isFeatured
                        ? 'bg-amber-500 hover:bg-amber-400 text-dark-950 shadow-amber-500/20'
                        : 'bg-dark-950 hover:bg-slate-800 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-slate-500 font-mono mt-2">
                    {plan.ctaSubtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table (Designed as a Clean Modern Card Matrix) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-dark-900 border border-slate-800 p-6 sm:p-8 overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-4">
            Feature Comparison: In-Class Live vs Self-Paced
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase">
                  <th className="py-3 px-4">Curriculum & Mentorship Feature</th>
                  <th className="py-3 px-4 text-center">In-Class Live Mentorship</th>
                  <th className="py-3 px-4 text-center">Self-Paced Material</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Live Zoom Weekend Workshops (Saturday & Sunday)</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Included (Live)</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">Recorded Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Weekday Group Discussions (4 Shift Options)</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Yes (Assigned Group)</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">Self-Organized</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Dedicated Teaching Assistant & Code Reviews</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">1-on-1 Assigned TA</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">Community Forum</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Phase 4 AI Application & RAG Specialization</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Full Live Training</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Full Video Access</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Abe Garage Full-Stack Real-World Capstone</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Instructor Graded</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">Self-Evaluated</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Resume Engineering & Technical Mock Interviews</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Included</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Enroll Modal */}
      {selectedPlanForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-dark-900 border border-slate-700 p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={closeEnrollModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-dark-950 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase">
              Enrollment Diagnostic
            </span>

            <h3 className="text-2xl font-bold text-white mt-2">
              {selectedPlanForModal.name}
            </h3>

            <p className="text-xs text-slate-300 mt-1">
              Tuition: <strong className="text-white text-base">${selectedPlanForModal.discountedPrice}</strong> ({selectedPlanForModal.billingCadence})
            </p>

            <div className="mt-4 p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Upfront Payment Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                You will not be charged today. We first conduct a complimentary 30-minute diagnostic session to assess your learning pace, discuss schedule compatibility, and verify payment terms.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm & Select Diagnostic Slot</span>
              </a>

              <a
                href="tel:+12023862702"
                className="w-full py-3 px-4 rounded-xl bg-dark-950 hover:bg-dark-800 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Speak to Admissions: (202) 386 2702</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
