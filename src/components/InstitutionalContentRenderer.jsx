import React from 'react';
import { Terminal, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Table as TableIcon } from 'lucide-react';

export default function InstitutionalContentRenderer({ content }) {
  if (!content) return null;

  // Split content by blocks: code blocks, blockquotes, markdown tables, headers, paragraphs
  // Regex matches ```text...```, blockquotes > ..., and markdown tables starting with |
  const rawBlocks = content.split(/(```text[\s\S]*?```|> [^\n]+(?:\n> [^\n]+)*|\n(?:\|[^\n]+\|\n)+)/g);

  return (
    <div className="space-y-4 text-slate-300 leading-relaxed text-xs sm:text-sm">
      {rawBlocks.map((block, idx) => {
        if (!block || !block.trim()) return null;

        // 1. Code Block with ASCII / Schematic
        if (block.startsWith('```text')) {
          const codeText = block.replace(/^```text\n?/, '').replace(/\n?```$/, '');
          return (
            <div key={idx} className="my-5 rounded-2xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-xl">
              {/* Terminal Title Bar */}
              <div className="px-4 py-2 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-semibold text-amber-300/90 ml-1.5">INSTITUTIONAL SCHEMATIC ARCHITECTURE</span>
                </div>
                <span className="text-[10px] text-slate-500 hidden sm:inline">MONOSPACE VECTOR MODEL</span>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-cyan-300 leading-relaxed overflow-x-auto select-all">
                {codeText}
              </pre>
            </div>
          );
        }

        // 2. Blockquote
        if (block.startsWith('>')) {
          const quoteLines = block.split('\n').map(l => l.replace(/^>\s*/, '').trim()).filter(Boolean).join(' ');
          return (
            <div key={idx} className="my-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#0d1117] to-[#0d1117] border-l-4 border-amber-500 border-y border-r border-[#2a2e39]/60 shadow-lg space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Institutional Axiom
              </span>
              <p className="text-white font-semibold text-xs sm:text-base italic leading-relaxed">
                "{quoteLines.replace(/^\*+|\*+$/g, '')}"
              </p>
            </div>
          );
        }

        // 3. Markdown Table Parser (Replaces raw pipes with human styled responsive table!)
        if (block.trim().startsWith('|') && block.includes('---')) {
          const tableRows = block
            .trim()
            .split('\n')
            .filter(r => r.trim().startsWith('|'))
            .map(r => r.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1));

          if (tableRows.length >= 2) {
            const headers = tableRows[0];
            const dataRows = tableRows.slice(2); // Skip separator row

            return (
              <div key={idx} className="my-5 rounded-2xl bg-[#090d16] border border-[#2a2e39] overflow-hidden shadow-xl">
                <div className="px-4 py-2 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <TableIcon className="w-3.5 h-3.5" /> Structured Institutional Data Matrix
                  </span>
                  <span className="text-[10px] text-slate-500 sm:hidden">Swipe to explore →</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#131722] border-b border-[#2a2e39] text-amber-300 font-mono">
                        {headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold">{h || 'Metric'}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2a2e39]/50">
                      {dataRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#131722]/60 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className={`p-3.5 ${
                                cIdx === 0 
                                  ? 'font-mono font-bold text-amber-300 whitespace-nowrap' 
                                  : cIdx === 1 
                                  ? 'text-emerald-300' 
                                  : 'text-slate-300'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
        }

        // 4. Regular paragraphs, subheadings, and lists
        const lines = block.split('\n');
        return (
          <div key={idx} className="space-y-3">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              // Ignore standalone separator lines with pipes that might have leaked
              if (/^\|[\s:-|]+\|$/.test(trimmed)) return null;

              // If single row with pipes
              if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                const cells = trimmed.split('|').map(c => c.trim()).filter(Boolean);
                return (
                  <div key={lIdx} className="my-2 p-3 rounded-xl bg-[#131722] border border-[#2a2e39] grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                    {cells.map((c, ci) => (
                      <span key={ci} className={ci === 0 ? 'text-amber-400 font-bold' : 'text-slate-200'}>
                        {c}
                      </span>
                    ))}
                  </div>
                );
              }

              // H3 Subheading
              if (trimmed.startsWith('### ')) {
                const title = trimmed.replace(/^###\s*/, '');
                return (
                  <div key={lIdx} className="pt-3 pb-1 flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded bg-amber-500 inline-block" />
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {title}
                    </h4>
                  </div>
                );
              }

              // H2 Subheading
              if (trimmed.startsWith('## ')) {
                const title = trimmed.replace(/^##\s*/, '');
                return (
                  <h3 key={lIdx} className="text-lg sm:text-xl font-extrabold text-amber-300 pt-4 pb-1">
                    {title}
                  </h3>
                );
              }

              // Bullet item
              if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                const text = trimmed.replace(/^[-*]\s*/, '');
                return (
                  <div key={lIdx} className="flex items-start gap-2.5 ml-2 text-slate-300 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{parseInlineMarkdown(text)}</span>
                  </div>
                );
              }

              // Numbered list item
              if (/^\d+\.\s/.test(trimmed)) {
                const num = trimmed.match(/^(\d+)\./)[1];
                const text = trimmed.replace(/^\d+\.\s*/, '');
                return (
                  <div key={lIdx} className="flex items-start gap-3 ml-2 text-slate-300 text-xs sm:text-sm">
                    <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-slate-800 text-amber-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">
                      {num}
                    </span>
                    <span>{parseInlineMarkdown(text)}</span>
                  </div>
                );
              }

              // Normal paragraph
              return (
                <p key={lIdx} className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {parseInlineMarkdown(trimmed)}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// Inline Markdown Parser for bold, italic, and inline code
function parseInlineMarkdown(text) {
  if (!text) return '';
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);

  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="text-amber-200/90 italic">{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-dark-950 border border-slate-800 font-mono text-amber-300 text-[11px]">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
