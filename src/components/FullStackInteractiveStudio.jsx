import React, { useState } from 'react';
import { 
  Code2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Copy, 
  Check, 
  Monitor, 
  Smartphone, 
  Layers, 
  ExternalLink,
  BookOpen,
  FileCode,
  Layout,
  Palette,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function FullStackInteractiveStudio() {
  const [activeTemplateKey, setActiveTemplateKey] = useState('card');
  const [copied, setCopied] = useState(false);
  const [devicePreview, setDevicePreview] = useState('responsive'); // 'responsive', 'mobile'

  const templates = {
    card: {
      name: 'Semantic Card with Modern CSS Glow',
      category: 'HTML & CSS Styling',
      html: `<div class="card">
  <div class="badge">PRO COURSE</div>
  <h2>Full-Stack Web Dev</h2>
  <p>Learn semantic HTML5, modern CSS3 Grid, Flexbox, and React state management.</p>
  <button class="btn">Start Learning</button>
</div>`,
      css: `body {
  margin: 0;
  padding: 24px;
  background-color: #0b0f19;
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
}
.card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 16px;
  padding: 24px;
  max-width: 320px;
  width: 100%;
  color: #f3f4f6;
  box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2);
  transition: transform 0.2s, border-color 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  border-color: #06b6d4;
}
.badge {
  display: inline-block;
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
  border: 1px solid rgba(6, 182, 212, 0.3);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 12px;
}
h2 {
  margin: 0 0 8px 0;
  font-size: 20px;
}
p {
  color: #9ca3af;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.btn {
  background: #06b6d4;
  color: #0b0f19;
  border: none;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}
.btn:hover {
  background: #22d3ee;
}`
    },
    flexbox: {
      name: 'CSS Flexbox Navigation Bar',
      category: 'Flexbox Layout',
      html: `<nav class="navbar">
  <div class="logo">⚡ NEXA DEV</div>
  <ul class="nav-links">
    <li><a href="#html">HTML5</a></li>
    <li><a href="#css">CSS3</a></li>
    <li><a href="#js">JavaScript</a></li>
  </ul>
  <button class="nav-btn">Sign In</button>
</nav>`,
      css: `body {
  margin: 0;
  padding: 16px;
  background-color: #0b0f19;
  font-family: system-ui, sans-serif;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #1f2937;
  flex-wrap: wrap;
  gap: 12px;
}
.logo {
  font-weight: 800;
  color: #06b6d4;
  letter-spacing: 1px;
}
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}
.nav-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #ffffff;
}
.nav-btn {
  background: #06b6d4;
  color: #0b0f19;
  border: none;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
}`
    },
    grid: {
      name: 'CSS Grid Responsive 2-Column Cards',
      category: 'CSS Grid',
      html: `<div class="grid-container">
  <div class="grid-item">
    <h3>Semantic HTML</h3>
    <p>Using &lt;header&gt;, &lt;main&gt;, and &lt;article&gt; for accessible structure.</p>
  </div>
  <div class="grid-item">
    <h3>CSS Grid</h3>
    <p>Creating dynamic 2-dimensional grid column tracks effortlessly.</p>
  </div>
</div>`,
      css: `body {
  margin: 0;
  padding: 20px;
  background-color: #0b0f19;
  font-family: system-ui, sans-serif;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
.grid-item {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 16px;
  color: #e5e7eb;
}
.grid-item h3 {
  margin-top: 0;
  color: #38bdf8;
  font-size: 15px;
}
.grid-item p {
  color: #9ca3af;
  font-size: 12px;
  margin: 0;
  line-height: 1.4;
}`
    }
  };

  const [currentHtml, setCurrentHtml] = useState(templates.card.html);
  const [currentCss, setCurrentCss] = useState(templates.card.css);

  const handleSelectTemplate = (key) => {
    setActiveTemplateKey(key);
    setCurrentHtml(templates[key].html);
    setCurrentCss(templates[key].css);
  };

  const handleReset = () => {
    setCurrentHtml(templates[activeTemplateKey].html);
    setCurrentCss(templates[activeTemplateKey].css);
  };

  const handleCopyCode = () => {
    const combined = `<!-- HTML -->\n${currentHtml}\n\n/* CSS */\n${currentCss}`;
    navigator.clipboard.writeText(combined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const combinedSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${currentCss}</style>
      </head>
      <body>
        ${currentHtml}
      </body>
    </html>
  `;

  return (
    <div className="rounded-3xl bg-[#090d16] border border-[#2a2e39] p-4 sm:p-7 space-y-6 shadow-2xl">
      
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#2a2e39]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
              Interactive Dev Studio • W3Schools Style
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">• Live HTML & CSS Playground</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Interactive Code Sandbox & "Try It Yourself"</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Edit HTML and CSS in real-time. Practice the concepts taught in the 13+ hours of Zoom recordings and inspect instant live browser rendering.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#131722] hover:bg-slate-800 text-slate-300 text-xs font-mono border border-[#2a2e39] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#131722] hover:bg-slate-800 text-cyan-400 text-xs font-mono border border-[#2a2e39] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
          
          {/* Device Preview Toggle */}
          <div className="flex items-center bg-[#131722] p-0.5 rounded-xl border border-[#2a2e39]">
            <button
              onClick={() => setDevicePreview('responsive')}
              className={`p-1.5 rounded-lg transition-all ${devicePreview === 'responsive' ? 'bg-cyan-500 text-dark-950 font-bold' : 'text-slate-400'}`}
              title="Desktop / Wide View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDevicePreview('mobile')}
              className={`p-1.5 rounded-lg transition-all ${devicePreview === 'mobile' ? 'bg-cyan-500 text-dark-950 font-bold' : 'text-slate-400'}`}
              title="Mobile Device View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preset Code Templates */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono">
        <span className="text-slate-500 text-[11px] uppercase mr-1 shrink-0">Templates:</span>
        {Object.entries(templates).map(([key, t]) => (
          <button
            key={key}
            onClick={() => handleSelectTemplate(key)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border ${
              activeTemplateKey === key
                ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300'
                : 'bg-[#131722] border-[#2a2e39] text-slate-400 hover:text-white'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Code Editor and Live Preview Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Code Inputs (HTML + CSS) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* HTML Editor */}
          <div className="rounded-2xl bg-[#131722] border border-[#2a2e39] overflow-hidden">
            <div className="px-4 py-2 bg-[#090d16] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <FileCode className="w-3.5 h-3.5" /> HTML5 Source
              </span>
              <span className="text-[10px] text-slate-500">Live Editable</span>
            </div>
            <textarea
              value={currentHtml}
              onChange={(e) => setCurrentHtml(e.target.value)}
              rows={6}
              className="w-full p-3.5 bg-transparent text-xs font-mono text-slate-200 resize-y focus:outline-none focus:ring-1 focus:ring-cyan-500"
              spellCheck="false"
            />
          </div>

          {/* CSS Editor */}
          <div className="rounded-2xl bg-[#131722] border border-[#2a2e39] overflow-hidden">
            <div className="px-4 py-2 bg-[#090d16] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Palette className="w-3.5 h-3.5" /> CSS3 Stylesheet
              </span>
              <span className="text-[10px] text-slate-500">Live Editable</span>
            </div>
            <textarea
              value={currentCss}
              onChange={(e) => setCurrentCss(e.target.value)}
              rows={8}
              className="w-full p-3.5 bg-transparent text-xs font-mono text-slate-200 resize-y focus:outline-none focus:ring-1 focus:ring-cyan-500"
              spellCheck="false"
            />
          </div>

        </div>

        {/* Right Column: Live Browser Render */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="rounded-2xl bg-[#131722] border border-[#2a2e39] overflow-hidden flex-1 flex flex-col">
            
            {/* Browser Mockup Chrome Header */}
            <div className="px-4 py-2.5 bg-[#090d16] border-b border-[#2a2e39] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-[#131722] border border-[#2a2e39] text-[10px] font-mono text-slate-400">
                  localhost:3000/preview
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Output
              </span>
            </div>

            {/* Sandbox iframe Container */}
            <div className={`flex-1 p-2 bg-[#0b0f19] flex justify-center items-center min-h-[340px] ${
              devicePreview === 'mobile' ? 'max-w-[340px] mx-auto border-x border-[#2a2e39]' : ''
            }`}>
              <iframe
                title="Interactive Live Preview"
                srcDoc={combinedSrcDoc}
                sandbox="allow-scripts"
                className="w-full h-full min-h-[340px] rounded-xl bg-transparent border-0"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
