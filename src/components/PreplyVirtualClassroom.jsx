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
  CheckCircle2, 
  FileText, 
  Sliders, 
  Layers, 
  ExternalLink,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Sparkles
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

  // Right Screen: Screen Share & Material Share State
  const [activeShareTab, setActiveShareTab] = useState('material'); // 'material', 'desmos', 'wolfram'

  // Material Viewer State
  const [materialZoom, setMaterialZoom] = useState(100);
  const [materialPage, setMaterialPage] = useState(1);

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
          {/* RIGHT HALF (50%): SCREEN SHARE & SHARED MATERIAL                  */}
          {/* ----------------------------------------------------------------- */}
          <div className="rounded-2xl bg-[#0f172a] border border-slate-700 flex flex-col justify-between overflow-hidden shadow-inner min-h-[460px]">
            
            {/* Chrome Browser Bar */}
            <div className="bg-[#1e293b] p-2.5 border-b border-slate-700 flex items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-300 font-bold ml-1.5 truncate">
                  Chrome Screen Share: {activeShareTab === 'material' ? 'Shared Document' : activeShareTab === 'desmos' ? 'Desmos Grapher' : 'Wolfram Solver'}
                </span>
              </div>

              {/* Tab Switcher: Shared Material, Desmos Grapher, Wolfram Solver */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveShareTab('material')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                    activeShareTab === 'material'
                      ? 'bg-[#f39228] text-dark-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>Shared PDF</span>
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

            {/* Content Area for Right Half */}
            <div className="flex-1 p-3 overflow-y-auto">
              
              {/* TAB 1: SHARED MATERIAL / PDF VIEWER */}
              {activeShareTab === 'material' && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#f39228]" />
                      <span className="text-white font-bold truncate max-w-xs">{sharedDocumentName}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setMaterialZoom(prev => Math.max(70, prev - 15))}
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                        title="Zoom Out"
                      >
                        <ZoomOut className="w-3 h-3" />
                      </button>
                      <span className="px-1.5 text-[10px] text-slate-400">{materialZoom}%</span>
                      <button
                        type="button"
                        onClick={() => setMaterialZoom(prev => Math.min(150, prev + 15))}
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                        title="Zoom In"
                      >
                        <ZoomIn className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Document Simulated Sheet */}
                  <div 
                    className="p-4 rounded-xl bg-[#090d16] border border-slate-800 space-y-3 transition-transform origin-top"
                    style={{ transform: `scale(${materialZoom / 100})` }}
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                      <span className="text-amber-300 font-bold">NEXA SCHOLAR CURRICULUM SHEET</span>
                      <span>Page {materialPage} of 2</span>
                    </div>

                    <div className="space-y-3 text-slate-200 text-xs">
                      <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <strong className="text-[#f39228] block mb-1">Problem 1: Algebraic Operations</strong>
                        Solve for x in the equation: <code className="text-amber-300">3x + 9 = 24</code>
                        <div className="text-[11px] text-slate-400 mt-1">Hint: Subtract 9 from both sides, then divide by 3.</div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <strong className="text-[#f39228] block mb-1">Problem 2: Fractions & Ratios</strong>
                        A recipe calls for <code className="text-amber-300">3/4 cup</code> of sugar. If you double the recipe, how much sugar is needed?
                        <div className="text-[11px] text-slate-400 mt-1">Solution: 2 × (3/4) = 6/4 = 1 and 1/2 cups.</div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <strong className="text-[#f39228] block mb-1">Problem 3: Geometry & Perimeter</strong>
                        Calculate the perimeter of a rectangle with length <code className="text-amber-300">12 cm</code> and width <code className="text-amber-300">5 cm</code>.
                        <div className="text-[11px] text-slate-400 mt-1">Formula: P = 2(l + w) = 2(12 + 5) = 34 cm.</div>
                      </div>
                    </div>
                  </div>
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
