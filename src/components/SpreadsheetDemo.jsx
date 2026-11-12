import React, { useState } from 'react';
import { 
  TableProperties, 
  FileSpreadsheet, 
  Download, 
  Sparkles, 
  Filter, 
  CheckCircle, 
  RefreshCw, 
  Plus, 
  DollarSign, 
  ShieldAlert, 
  CheckCheck,
  TrendingUp,
  Cpu,
  Zap
} from 'lucide-react';
import { ecosystemData } from '../data/ecosystemData';

export default function SpreadsheetDemo() {
  const [rows, setRows] = useState(ecosystemData.spreadsheetDemo);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDeduplicating, setIsDeduplicating] = useState(false);
  const [dedupSuccessMsg, setDedupSuccessMsg] = useState('');
  const [isAddingRow, setIsAddingRow] = useState(false);

  // New row form state
  const [newClient, setNewClient] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('E-Commerce');
  const [newRawCount, setNewRawCount] = useState(3000);
  const [newUnitRate, setNewUnitRate] = useState(0.08);

  const categories = ['All', 'Healthcare', 'E-Commerce', 'Finance/B2B', 'Real Estate', 'Logistics'];

  const filteredRows = selectedCategory === 'All' 
    ? rows 
    : rows.filter(r => r.category === selectedCategory);

  // Summary tallies
  const totalRaw = filteredRows.reduce((acc, r) => acc + r.rawCount, 0);
  const totalCleaned = filteredRows.reduce((acc, r) => acc + r.cleanedCount, 0);
  const totalDuplicates = filteredRows.reduce((acc, r) => acc + r.duplicatesFound, 0);
  const totalBilledUSD = filteredRows.reduce((acc, r) => acc + r.totalUsd, 0);

  // Deduplication simulation
  const handleRunDeduplication = () => {
    setIsDeduplicating(true);
    setDedupSuccessMsg('');
    setTimeout(() => {
      const updated = rows.map(r => {
        const extraDedupe = Math.floor(Math.random() * 8) + 2;
        const newCleaned = Math.max(10, r.cleanedCount - extraDedupe);
        const rateNum = parseFloat(r.unitRate.replace('$', ''));
        return {
          ...r,
          duplicatesFound: r.duplicatesFound + extraDedupe,
          cleanedCount: newCleaned,
          accuracy: '100%',
          status: 'Verified & Exported',
          totalUsd: parseFloat((newCleaned * rateNum).toFixed(2))
        };
      });
      setRows(updated);
      setIsDeduplicating(false);
      setDedupSuccessMsg('Automated AI Deduplication Complete! Purged corrupt duplicates across active records.');
      setTimeout(() => setDedupSuccessMsg(''), 5000);
    }, 900);
  };

  // Export real CSV in browser
  const handleExportCSV = () => {
    const headers = ['ID,Client,Task,Category,Raw_Count,Cleaned_Count,Duplicates_Removed,Accuracy,Unit_Rate,Total_USD,Status,Date\n'];
    const csvContent = filteredRows.map(r => 
      `"${r.id}","${r.client}","${r.task}","${r.category}",${r.rawCount},${r.cleanedCount},${r.duplicatesFound},"${r.accuracy}","${r.unitRate}",${r.totalUsd},"${r.status}","${r.date}"`
    ).join('\n');

    const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Nexa_Data_Ops_Clean_Worksheet_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add new row submit
  const handleAddNewBatch = (e) => {
    e.preventDefault();
    if (!newClient || !newTask) return;

    const duplicates = Math.floor(newRawCount * 0.02);
    const cleaned = newRawCount - duplicates;
    const total = parseFloat((cleaned * newUnitRate).toFixed(2));

    const newRecord = {
      id: `NEX-${1046 + rows.length}`,
      client: newClient,
      task: newTask,
      category: newCategory,
      rawCount: parseInt(newRawCount),
      cleanedCount: cleaned,
      duplicatesFound: duplicates,
      accuracy: "99.8%",
      unitRate: `$${newUnitRate.toFixed(2)}`,
      totalUsd: total,
      status: "In Quality Review",
      lead: "Nexa Ops Team",
      date: new Date().toISOString().slice(0, 10),
    };

    setRows([newRecord, ...rows]);
    setIsAddingRow(false);
    setNewClient('');
    setNewTask('');
  };

  return (
    <section id="digital-ops" className="py-20 border-b border-slate-800/80 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase mb-3">
              <TableProperties className="w-3.5 h-3.5" />
              <span>Pillar 01 // Remote Digital Operations & BPO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive USD Data Operations & Spreadsheet Demo
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              We bid on, win, and execute high-precision data entry, CRM hygiene, web research, and spreadsheet automation tasks for global clients with zero tolerance for errors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRunDeduplication}
              disabled={isDeduplicating}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-all disabled:opacity-50"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isDeduplicating ? 'animate-spin' : ''}`} />
              <span>{isDeduplicating ? 'Running Scrub Script...' : 'Simulate AI Deduplication'}</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-dark-950 text-xs font-bold shadow-md shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Verified CSV</span>
            </button>

            <button
              onClick={() => setIsAddingRow(!isAddingRow)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <Plus className="w-3.5 h-3.5 text-cyan-400" />
              <span>Test New Batch Input</span>
            </button>
          </div>
        </div>

        {/* Deduplication Toast Message */}
        {dedupSuccessMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
            <CheckCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{dedupSuccessMsg}</span>
          </div>
        )}

        {/* Add Row Form Modal / Drawer */}
        {isAddingRow && (
          <form onSubmit={handleAddNewBatch} className="mb-8 p-6 rounded-2xl bg-dark-900 border border-cyan-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400" />
                Simulate Client Job Intake & Batch Processing
              </h4>
              <button 
                type="button" 
                onClick={() => setIsAddingRow(false)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                Cancel
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase">Client Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Biotech Inc"
                  value={newClient}
                  onChange={e => setNewClient(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase">Task Scope</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LinkedIn Executive Scrub"
                  value={newTask}
                  onChange={e => setNewTask(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase">Industry Category</label>
                <select
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                >
                  {categories.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase">Raw Input Rows</label>
                <input
                  type="number"
                  min="100"
                  step="100"
                  value={newRawCount}
                  onChange={e => setNewRawCount(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-dark-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs transition-all"
                >
                  Insert & Process
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Live Workbook Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono uppercase">Total Raw Intake</span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
              {totalRaw.toLocaleString()} <span className="text-xs text-slate-500 font-normal">rows</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono uppercase">Scrubbed & Verified</span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mt-1">
              {totalCleaned.toLocaleString()} <span className="text-xs text-cyan-600 font-normal">active</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono uppercase">Corrupt Duplicates Purged</span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-amber-400 mt-1">
              {totalDuplicates.toLocaleString()} <span className="text-xs text-amber-600 font-normal">removed</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-mono uppercase">Calculated Batch USD Value</span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-1">
              ${totalBilledUSD.toFixed(2)} <span className="text-xs text-emerald-600 font-normal">billed</span>
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 text-xs">
          <span className="text-slate-500 flex items-center gap-1 font-mono uppercase shrink-0">
            <Filter className="w-3.5 h-3.5" /> Sector Filter:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-dark-950 font-bold'
                  : 'bg-dark-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Live Interactive Spreadsheet Table */}
        <div className="rounded-2xl border border-slate-800 bg-dark-900/90 overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Top Spreadsheet Window Chrome */}
          <div className="px-4 py-3 bg-dark-850 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 pl-3 border-l border-slate-700/80">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-medium text-slate-300">
                  Nexa_Operations_USD_Master_Worksheet.xlsx [Live Telemetry]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Sync</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-dark-800/90 text-slate-300 uppercase font-mono tracking-wider text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Batch ID</th>
                  <th className="py-3 px-4">Client & Project</th>
                  <th className="py-3 px-4">Industry</th>
                  <th className="py-3 px-4 text-right">Raw Rows</th>
                  <th className="py-3 px-4 text-right">Scrubbed</th>
                  <th className="py-3 px-4 text-center">Duplicates</th>
                  <th className="py-3 px-4 text-center">Accuracy</th>
                  <th className="py-3 px-4 text-right">Unit Rate</th>
                  <th className="py-3 px-4 text-right">Total USD</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 font-mono text-slate-300">
                {filteredRows.map((row) => (
                  <tr 
                    key={row.id} 
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    <td className="py-3.5 px-4 font-bold text-cyan-400 whitespace-nowrap">
                      {row.id}
                    </td>
                    <td className="py-3.5 px-4 font-sans whitespace-nowrap">
                      <p className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {row.client}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-xs font-normal">
                        {row.task}
                      </p>
                    </td>
                    <td className="py-3.5 px-4 font-sans whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-400 whitespace-nowrap">
                      {row.rawCount.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-white whitespace-nowrap">
                      {row.cleanedCount.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-center text-amber-400 whitespace-nowrap">
                      -{row.duplicatesFound}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800">
                        {row.accuracy}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-400 whitespace-nowrap">
                      {row.unitRate}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-emerald-400 whitespace-nowrap">
                      ${row.totalUsd.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold flex items-center justify-center gap-1.5 ${
                        row.status === 'Verified & Exported' 
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' 
                          : row.status === 'Processing Live'
                          ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800 animate-pulse'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-800'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Bar */}
          <div className="px-4 py-3 bg-dark-850 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              Showing {filteredRows.length} of {rows.length} production batches • Double QA verified prior to client invoice
            </div>
            <div className="font-mono text-cyan-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Nexa Automated Workflow Script v2.4 Active</span>
            </div>
          </div>
        </div>

        {/* Why Clients Choose Nexa for Data Operations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              100% Quality Assurance Guarantee
            </h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Every data set goes through a dual-gate pipeline: automated script cleansing followed by manual cell-by-cell inspection by our QA Lead. Zero flawed rows reach the client.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              Rapid Turnaround (SOP-Driven)
            </h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              We operate across flexible shifts to ensure overnight turnaround for US, European, and Middle Eastern clients. High-urgency batches delivered in as fast as 4 hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-400" />
              Transparent USD Rates & Milestone Retainers
            </h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Fair, competitive pricing whether you need per-row pricing (\$0.05–\$0.15/row), hourly rates (\$12–\$20/hr), or full monthly dedicated virtual assistant seats.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
