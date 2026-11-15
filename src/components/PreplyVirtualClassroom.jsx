import React, { useState, useRef, useEffect } from 'react';
import { 
  PenTool, 
  Eraser, 
  RotateCcw, 
  Trash2, 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  ScreenShare, 
  Maximize2, 
  Minimize2, 
  Sliders, 
  Sparkles,
  ExternalLink,
  Monitor,
  StopCircle,
  FileText
} from 'lucide-react';

export default function PreplyVirtualClassroom({ 
  mentorName = 'Ermias Tadesse', 
  subject = 'Mathematics', 
  gradeLevel = 'Grade 7',
  sharedDocumentName = 'Grade7_Math_Unit4_Fractions_Homework.pdf',
  onCloseClassroom 
}) {
  // Canvas State (Left Screen: Digital Blackboard)
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen'); // 'pen', 'eraser'
  const [color, setColor] = useState('#ffffff');
  const [lineWidth, setLineWidth] = useState(3);
  const [history, setHistory] = useState([]);

  // Media Controls
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Right Screen: Screen Share & Math Tools State
  const [activeShareTab, setActiveShareTab] = useState('screenshare'); // 'screenshare', 'desmos', 'wolfram'
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const screenVideoRef = useRef(null);

  // Desmos Interactive Grapher Parameters
  const [graphA, setGraphA] = useState(1);
  const [graphB, setGraphB] = useState(-4);
  const [graphC, setGraphC] = useState(3);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const targetWidth = Math.max(Math.floor(rect.width), 320);
      const targetHeight = Math.max(Math.floor(rect.height), 420);
      
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        let imgData = null;
        try {
          if (canvas.width > 0 && canvas.height > 0) {
            imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          }
        } catch (e) {
          // ignore read error
        }
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (imgData) {
          ctx.putImageData(imgData, 0, 0);
        }
      }
    };

    updateCanvasSize();
    const timer = setTimeout(updateCanvasSize, 100);
    window.addEventListener('resize', updateCanvasSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Screen Stream binding
  useEffect(() => {
    if (screenVideoRef.current && screenStream) {
      screenVideoRef.current.srcObject = screenStream;
    }
  }, [screenStream, isScreenSharing]);

  // Real Web Screen Share Handlers
  const handleStartScreenShare = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
        setScreenStream(stream);
        setIsScreenSharing(true);
        if (screenVideoRef.current) {
          screenVideoRef.current.srcObject = stream;
        }
        stream.getVideoTracks()[0].onended = () => {
          setIsScreenSharing(false);
          setScreenStream(null);
        };
      } else {
        // Fallback simulation state
        setIsScreenSharing(true);
      }
    } catch (err) {
      console.log('Screen share cancelled or not allowed', err);
    }
  };

  const handleStopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
    }
    setIsScreenSharing(false);
  };

  // Open PDF in dedicated new window/tab outside the classroom
  const handleOpenPdfWindow = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${sharedDocumentName} - Nexa Academic PDF Viewer</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 32px 20px;
      background: #0b0f19;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .toolbar {
      width: 100%;
      max-width: 820px;
      background: #1e293b;
      border: 1px solid #334155;
      padding: 12px 20px;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .badge {
      background: #f39228;
      color: #0b0f19;
      font-weight: bold;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 6px;
      text-transform: uppercase;
      font-family: monospace;
    }
    .doc-page {
      width: 100%;
      max-width: 820px;
      background: #ffffff;
      color: #0f172a;
      border-radius: 12px;
      padding: 48px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .doc-header {
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 16px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .doc-title {
      font-size: 22px;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }
    .doc-meta {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .btn {
      background: #f39228;
      color: #0b0f19;
      border: none;
      padding: 8px 16px;
      font-weight: bold;
      font-size: 12px;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn:hover { background: #e0821e; }
    .section-title {
      font-size: 15px;
      font-weight: 700;
      color: #1e293b;
      border-left: 4px solid #f39228;
      padding-left: 10px;
      margin: 24px 0 12px 0;
    }
    .question-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }
    code {
      background: #e2e8f0;
      color: #0f172a;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <div>
      <span class="badge">Nexa Academic PDF Viewer</span>
      <strong style="margin-left: 8px; font-size: 14px;">${sharedDocumentName}</strong>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="btn" onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <div class="doc-page">
    <div class="doc-header">
      <div>
        <div class="doc-title">${sharedDocumentName.replace('.pdf', '')}</div>
        <div class="doc-meta">Curriculum Document • ${gradeLevel} • ${subject}</div>
      </div>
      <div style="text-align: right; font-size: 11px; color: #64748b;">
        Nexa Academic Mentorship<br>
        Assigned Teacher: ${mentorName}
      </div>
    </div>

    <div class="section-title">Section A: Student Homework & Diagnostic Exercises</div>
    <div class="question-box">
      <strong>Problem 1: Simplifying Equations & Variable Operations</strong>
      <p style="margin: 6px 0 0 0;">Solve for <em>x</em> in: <code>3x + 9 = 24</code></p>
    </div>
    <div class="question-box">
      <strong>Problem 2: Fractions & Ratios</strong>
      <p style="margin: 6px 0 0 0;">A recipe calls for 3/4 cup of sugar. If you double the recipe, how much sugar is needed?</p>
    </div>
    <div class="question-box">
      <strong>Problem 3: Geometry & Perimeter</strong>
      <p style="margin: 6px 0 0 0;">Find the perimeter of a rectangle with length 12 cm and width 5 cm.</p>
    </div>

    <div class="section-title">Section B: Classroom Screen Share Instructions</div>
    <p style="font-size: 13px; color: #475569;">
      This window is open outside the classroom tab. You can now click <strong>"Start Screen Share"</strong> in the Nexa Virtual Classroom to share this window or any PDF reader directly with Teacher ${mentorName}!
    </p>
  </div>
</body>
</html>
    `;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  // Redraw Grapher Curve
  const graphCanvasRef = useRef(null);
  useEffect(() => {
    if (activeShareTab !== 'desmos') return;
    const canvas = graphCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 460;
    const height = canvas.height = 300;

    // Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Axes
    const originX = width / 2;
    const originY = height / 2;
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Plot Parabola: y = a*x^2 + b*x + c
    const scale = 25;
    ctx.strokeStyle = '#f39228';
    ctx.lineWidth = 3;
    ctx.beginPath();
    let started = false;

    for (let px = 0; px < width; px++) {
      const x = (px - originX) / scale;
      const y = graphA * (x * x) + graphB * x + graphC;
      const py = originY - (y * scale);

      if (py >= 0 && py <= height) {
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
    }
    ctx.stroke();

    // Plot Vertex
    const vx = -graphB / (2 * graphA);
    const vy = graphA * (vx * vx) + graphB * vx + graphC;
    const pvx = originX + (vx * scale);
    const pvy = originY - (vy * scale);

    if (pvx >= 0 && pvx <= width && pvy >= 0 && pvy <= height) {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(pvx, pvy, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.fillText(`Vertex (${vx.toFixed(1)}, ${vy.toFixed(1)})`, pvx + 8, pvy - 8);
    }
  }, [activeShareTab, graphA, graphB, graphC]);

  // Coordinates helper
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Drawing Handlers
  const startDrawing = (e) => {
    const { x, y } = getCoordinates(e);
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Save state for undo
    setHistory(prev => [...prev.slice(-15), ctx.getImageData(0, 0, canvas.width, canvas.height)]);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = tool === 'eraser' ? '#14231e' : color;
    ctx.lineWidth = tool === 'eraser' ? 24 : lineWidth;
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prev = history[history.length - 1];
    ctx.putImageData(prev, 0, 0);
    setHistory(history.slice(0, -1));
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    setHistory(prev => [...prev.slice(-15), ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Wolfram Solver calculations
  const discriminant = (graphB * graphB) - (4 * graphA * graphC);
  const root1 = discriminant >= 0 ? ((-graphB + Math.sqrt(discriminant)) / (2 * graphA)).toFixed(2) : null;
  const root2 = discriminant >= 0 ? ((-graphB - Math.sqrt(discriminant)) / (2 * graphA)).toFixed(2) : null;

  return (
    <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-[#0f172a] p-4 overflow-y-auto' : ''}`}>
      
      {/* ===================================================================== */}
      {/* LAPTOP CHASSIS & SCREEN FRAME                                         */}
      {/* ===================================================================== */}
      <div className="rounded-3xl bg-[#1e293b] border-2 border-slate-700 p-2 sm:p-3 shadow-2xl">
        
        {/* Laptop Display Top Bezel with Webcam */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/60 bg-[#162032] rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white">
              Nexa 1-on-1 Virtual Classroom Laptop View
            </span>
          </div>

          {/* Centered Laptop Webcam Dot */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">HD Cam Active</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span>Teacher: <strong className="text-amber-400">{mentorName}</strong></span>
            <span className="text-slate-600">|</span>
            <span>{gradeLevel}</span>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 50 / 50 LAPTOP SPLIT SCREEN                                           */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
          
          {/* ----------------------------------------------------------------- */}
          {/* LEFT HALF (50%): COOL DIGITAL BLACKBOARD                          */}
          {/* ----------------------------------------------------------------- */}
          <div className="rounded-2xl bg-[#14231e] border border-emerald-900/60 flex flex-col justify-between overflow-hidden shadow-inner relative min-h-[460px]">
            
            {/* Blackboard Top Status Bar */}
            <div className="p-3 bg-[#0e1915] border-b border-emerald-900/40 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Digital Blackboard
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 text-[11px]">{mentorName} (Teacher) & You</span>
              </div>

              {/* Necessary Tools: Pen, Eraser, Colors, Thickness, Undo, Clear */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setTool('pen')}
                  className={`p-1.5 rounded-lg border transition-all ${
                    tool === 'pen' 
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' 
                      : 'bg-[#162923] border-emerald-900/60 text-slate-300 hover:text-white'
                  }`}
                  title="Pen Tool"
                >
                  <PenTool className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setTool('eraser')}
                  className={`p-1.5 rounded-lg border transition-all ${
                    tool === 'eraser' 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold' 
                      : 'bg-[#162923] border-emerald-900/60 text-slate-300 hover:text-white'
                  }`}
                  title="Eraser Tool"
                >
                  <Eraser className="w-3.5 h-3.5" />
                </button>

                {/* Chalk Color Palette */}
                <div className="flex items-center gap-1 pl-1 border-l border-emerald-900/60">
                  {[
                    { hex: '#ffffff', title: 'Chalk White' },
                    { hex: '#f39228', title: 'Nexa Amber' },
                    { hex: '#38bdf8', title: 'Cyan' },
                    { hex: '#facc15', title: 'Yellow' }
                  ].map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => {
                        setColor(c.hex);
                        setTool('pen');
                      }}
                      className={`w-4 h-4 rounded-full border transition-transform ${
                        color === c.hex && tool === 'pen' ? 'scale-125 border-white ring-2 ring-white/40' : 'border-black/40'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.title}
                    />
                  ))}
                </div>

                {/* Thickness */}
                <div className="flex items-center gap-1 pl-1 border-l border-emerald-900/60">
                  {[2, 4, 8].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setLineWidth(size)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                        lineWidth === size ? 'bg-amber-500 text-dark-950 font-bold border-amber-400' : 'bg-[#162923] border-emerald-900/40 text-slate-300'
                      }`}
                    >
                      {size}px
                    </button>
                  ))}
                </div>

                {/* Undo & Clear */}
                <button
                  type="button"
                  onClick={handleUndo}
                  className="p-1.5 rounded-lg bg-[#162923] border border-emerald-900/60 text-slate-300 hover:text-white"
                  title="Undo Last Stroke"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 rounded-lg bg-[#162923] border border-emerald-900/60 text-rose-400 hover:text-rose-300"
                  title="Clear Blackboard"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Blackboard Canvas Drawing Area */}
            <div className="flex-1 relative cursor-crosshair w-full h-full min-h-[380px]">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-full block"
              />

              {/* Watermark subtle indicator */}
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-800 pointer-events-none select-none">
                Nexa Digital Chalkboard • Draw anywhere
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------------------- */}
          {/* RIGHT HALF (50%): SCREEN SHARE & LIVE WINDOW (CHROME / DESMOS)     */}
          {/* ----------------------------------------------------------------- */}
          <div className="rounded-2xl bg-[#0f172a] border border-slate-700 flex flex-col justify-between overflow-hidden shadow-inner min-h-[460px]">
            
            {/* Chrome Browser Bar with Direct Open PDF Button */}
            <div className="bg-[#1e293b] p-2.5 border-b border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-300 font-bold ml-1 truncate">
                  Chrome Screen Share Stage
                </span>
              </div>

              {/* Action: Open PDF in New Window out of share tab */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleOpenPdfWindow}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-[#f39228] text-[11px] font-bold flex items-center gap-1 transition-all"
                  title="Open PDF in a separate window/tab"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open PDF in New Window ↗</span>
                </button>

                {/* Tab Switcher: Screen Share, Desmos Grapher, Wolfram Solver */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveShareTab('screenshare')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                      activeShareTab === 'screenshare'
                        ? 'bg-[#f39228] text-dark-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ScreenShare className="w-3 h-3" />
                    <span>Screen Share</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveShareTab('desmos')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                      activeShareTab === 'desmos'
                        ? 'bg-[#f39228] text-dark-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sliders className="w-3 h-3" />
                    <span>Desmos Graph</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveShareTab('wolfram')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                      activeShareTab === 'wolfram'
                        ? 'bg-[#f39228] text-dark-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Wolfram</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area for Right Half */}
            <div className="flex-1 p-3 overflow-y-auto">
              
              {/* TAB 1: LIVE SCREEN SHARE / APPLICATION WINDOW */}
              {activeShareTab === 'screenshare' && (
                <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
                  {isScreenSharing ? (
                    <div className="w-full h-full flex flex-col items-center justify-between space-y-3">
                      <div className="w-full flex items-center justify-between p-2 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs font-mono text-emerald-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Live Screen Stream Active • Sharing to Classroom
                        </span>
                        <button
                          type="button"
                          onClick={handleStopScreenShare}
                          className="px-2.5 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold flex items-center gap-1"
                        >
                          <StopCircle className="w-3 h-3" />
                          <span>Stop Share</span>
                        </button>
                      </div>

                      <div className="w-full flex-1 min-h-[300px] rounded-xl overflow-hidden bg-black border border-slate-800 relative flex items-center justify-center">
                        <video
                          ref={screenVideoRef}
                          autoPlay
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto space-y-4 my-auto">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f39228] flex items-center justify-center mx-auto shadow-lg">
                        <Monitor className="w-8 h-8" />
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">
                          Live Chrome & Window Screen Share
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Share your open PDF reader, Acrobat, Chrome tab, or any application window on your laptop directly with {mentorName}.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                        <button
                          type="button"
                          onClick={handleStartScreenShare}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#f39228] hover:bg-[#e0821e] text-dark-950 font-bold text-xs uppercase font-mono shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
                        >
                          <ScreenShare className="w-4 h-4 text-dark-950" />
                          <span>Start Screen Share</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleOpenPdfWindow}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#f39228]" />
                          <span>Open PDF in New Window ↗</span>
                        </button>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                        📎 Staged Document: <span className="text-amber-300">{sharedDocumentName}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: DESMOS STEM GRAPHER */}
              {activeShareTab === 'desmos' && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">Desmos Parabola Plotter</span>
                    <span className="text-[#f39228] font-bold">f(x) = {graphA}x² + ({graphB})x + ({graphC})</span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-800 flex justify-center bg-[#0f172a]">
                    <canvas ref={graphCanvasRef} className="w-full max-w-full h-auto block" />
                  </div>

                  {/* Range Sliders for a, b, c */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>a (Curve):</span>
                        <span className="text-amber-300 font-bold">{graphA}</span>
                      </div>
                      <input
                        type="range"
                        min="-3"
                        max="3"
                        step="0.5"
                        value={graphA}
                        onChange={(e) => setGraphA(parseFloat(e.target.value) || 1)}
                        className="w-full accent-amber-500 mt-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>b (Shift):</span>
                        <span className="text-amber-300 font-bold">{graphB}</span>
                      </div>
                      <input
                        type="range"
                        min="-6"
                        max="6"
                        step="1"
                        value={graphB}
                        onChange={(e) => setGraphB(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 mt-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>c (Intercept):</span>
                        <span className="text-amber-300 font-bold">{graphC}</span>
                      </div>
                      <input
                        type="range"
                        min="-5"
                        max="5"
                        step="1"
                        value={graphC}
                        onChange={(e) => setGraphC(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: WOLFRAM ALGEBRAIC SOLVER */}
              {activeShareTab === 'wolfram' && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-white font-bold">Wolfram Exact Solver</span>
                    <span className="text-emerald-400 font-bold">Equation: {graphA}x² + ({graphB})x + ({graphC}) = 0</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-amber-300 block">Step 1: Compute Discriminant (Δ)</strong>
                      <code>Δ = b² - 4ac = ({graphB})² - 4({graphA})({graphC}) = {discriminant}</code>
                      <span className={`block text-[11px] mt-1 ${discriminant >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {discriminant > 0 ? '✓ Δ > 0: Two Distinct Real Roots' : discriminant === 0 ? '✓ Δ = 0: Exactly One Real Root' : '✗ Δ < 0: Complex Roots'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-amber-300 block">Step 2: Quadratic Formula</strong>
                      <code>x = (-b ± √Δ) / (2a)</code>
                      {root1 !== null ? (
                        <div className="text-emerald-300 font-bold mt-1">
                          Roots: x₁ = {root1}, x₂ = {root2}
                        </div>
                      ) : (
                        <div className="text-rose-300 mt-1">No real solutions (Δ &lt; 0).</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Laptop Bottom Chin Controls (Mic, Video, Fullscreen) */}
        <div className="flex items-center justify-between px-4 py-2.5 mt-2 bg-[#162032] border-t border-slate-700/60 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                isMicOn ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}
            >
              {isMicOn ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
              <span>{isMicOn ? 'Mic On' : 'Muted'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                isVideoOn ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}
            >
              {isVideoOn ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
              <span>{isVideoOn ? 'Camera On' : 'Camera Off'}</span>
            </button>
          </div>

          <div className="text-xs font-mono text-slate-400 hidden sm:inline">
            Split Screen Laptop View • 50% Blackboard | 50% Screen Share
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-slate-700"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
