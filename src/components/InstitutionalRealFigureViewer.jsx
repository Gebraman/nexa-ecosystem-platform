import React, { useState } from 'react';
import { Eye, ZoomIn, ZoomOut, Maximize2, Moon, Sun, ShieldCheck } from 'lucide-react';

export default function InstitutionalRealFigureViewer({ 
  src, 
  title, 
  caption, 
  figureNum,
  rule
}) {
  const [isInverted, setIsInverted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="my-8 rounded-2xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-2xl transition-all">
      {/* 1. Header Toolbar */}
      <div className="bg-[#131722] border-b border-[#2a2e39] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
            FIGURE {figureNum || '•'}
          </span>
          <h4 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
            {title}
          </h4>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsInverted(!isInverted)}
            title="Toggle Light Paper vs High-Contrast Dark Terminal"
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all border ${
              isInverted 
                ? 'bg-amber-500 text-dark-950 border-amber-400' 
                : 'bg-[#090d16] text-slate-300 border-[#2a2e39] hover:text-white hover:border-slate-500'
            }`}
          >
            {isInverted ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>{isInverted ? 'Paper Mode' : 'Dark Mode'}</span>
          </button>

          <button
            onClick={() => setIsZoomed(true)}
            title="Inspect Full-Resolution Chart"
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#090d16] text-slate-300 border border-[#2a2e39] hover:text-amber-400 hover:border-amber-500/40 flex items-center gap-1.5 transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full View</span>
          </button>
        </div>
      </div>

      {/* 2. Real Drawing Canvas Viewport */}
      <div className={`p-4 sm:p-6 transition-colors duration-200 flex items-center justify-center ${
        isInverted ? 'bg-white' : 'bg-[#070b12]'
      }`}>
        <img
          src={src}
          alt={title}
          className={`max-w-full h-auto max-h-[520px] object-contain rounded-lg transition-all duration-300 ${
            isInverted 
              ? 'filter-none shadow-md' 
              : 'filter invert hue-rotate-180 brightness-95 contrast-125'
          }`}
          loading="lazy"
        />
      </div>

      {/* 3. Institutional Caption & Rule Callout */}
      <div className="p-4 bg-[#0d121f] border-t border-[#2a2e39] space-y-2">
        {caption && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            <strong className="text-amber-400 font-mono">Drawing Rationale:</strong> {caption}
          </p>
        )}
        {rule && (
          <div className="flex items-start gap-2 pt-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
            <span><strong>Mandatory Rule:</strong> {rule}</span>
          </div>
        )}
      </div>

      {/* Full Resolution Zoom Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
        >
          <div className="relative max-w-6xl max-h-[90vh] bg-[#0d121f] rounded-2xl border border-amber-500/40 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-3 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-bold">FIGURE {figureNum}: {title}</span>
              <span className="text-slate-400">Click anywhere to close</span>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-[#070b12]">
              <img
                src={src}
                alt={title}
                className={`max-w-full max-h-[80vh] object-contain rounded ${
                  isInverted ? 'filter-none' : 'filter invert hue-rotate-180 brightness-95 contrast-125'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
