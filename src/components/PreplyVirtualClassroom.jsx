import React, { useState, useRef, useEffect } from 'react';
import { 
  PenTool, 
  Eraser, 
  RotateCcw, 
  Download, 
  Trash2, 
  Grid, 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  ScreenShare, 
  Monitor, 
  Maximize2, 
  Minimize2, 
  MessageSquare, 
  Send, 
  FileText, 
  CheckCircle2, 
  Clock, 
  User, 
  Sparkles, 
  X, 
  Share2, 
  HelpCircle,
  Square,
  Circle,
  Minus,
  Palette
} from 'lucide-react';

export default function PreplyVirtualClassroom({ 
  mentorName = 'Ermias Tadesse', 
  mentorRole = 'B.Sc. Electrical & Computer Engineering (Honors), AAU',
  subject = 'Mathematics & Advanced Calculus', 
  gradeLevel = 'Grades 9–12 (High School & Prep)',
  onCloseClassroom 
}) {
  // Canvas State
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen'); // 'pen', 'highlighter', 'line', 'rectangle', 'circle', 'eraser'
  const [color, setColor] = useState('#ffffff');
  const [lineWidth, setLineWidth] = useState(3);
  const [boardTheme, setBoardTheme] = useState('chalkboard'); // 'chalkboard', 'grid', 'dots', 'clean'
  const [history, setHistory] = useState([]);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Media Call State
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const screenVideoRef = useRef(null);
  const [activeLayout, setActiveLayout] = useState('blackboard'); // 'blackboard', 'screenshare', 'dual'

  // Timer State (50 min session)
  const [timeLeft, setTimeLeft] = useState(3000); // 50 mins = 3000 sec
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Chat State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'mentor',
      name: mentorName,
      time: 'Just now',
      text: `Hello and welcome! I have set up our interactive blackboard for ${subject}. Let's write out the problem steps together!`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeSidebarTab, setActiveSidebarTab] = useState('chat'); // 'chat', 'notes', 'problems'
  const [sharedNotes, setSharedNotes] = useState(
`### 1-on-1 Lesson Notes & Formulas
- Topic: ${subject} (${gradeLevel})
- Key Takeaways:
  1. Derivative Power Rule: d/dx [x^n] = n * x^(n-1)
  2. Product Rule: d/dx [u*v] = u'*v + u*v'
  3. Chain Rule: d/dx [f(g(x))] = f'(g(x)) * g'(x)
- Homework Problem: Differentiate f(x) = (3x^2 + 2x)^4 for next Thursday.`
  );

  // Math Stamps
  const mathStamps = [
    { label: 'dy/dx', symbol: 'dy/dx' },
    { label: '∫ f(x)dx', symbol: '∫ f(x)dx' },
    { label: 'lim(x→0)', symbol: 'lim(x→0)' },
    { label: 'x = (-b±√Δ)/2a', symbol: 'x = (-b ± √b² - 4ac) / 2a' },
    { label: 'F = m·a', symbol: 'F = m · a' },
    { label: 'E = mc²', symbol: 'E = mc²' },
    { label: 'PV = nRT', symbol: 'P · V = n · R · T' },
    { label: 'y = mx + b', symbol: 'y = mx + b' }
  ];

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      // Only resize if different to avoid clearing
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        // Save current contents
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (imgData.width > 0) {
          ctx.putImageData(imgData, 0, 0);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Drawing Handlers
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
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

  const startDrawing = (e) => {
    const { x, y } = getCoordinates(e);
    setIsDrawing(true);
    setStartPos({ x, y });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Save state for undo
    setHistory(prev => [...prev.slice(-15), canvas.toDataURL()]);

    if (tool === 'pen' || tool === 'highlighter' || tool === 'eraser') {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : tool === 'highlighter' ? lineWidth * 3 : lineWidth;
    ctx.strokeStyle = tool === 'eraser' ? '#090d16' : color;
    ctx.globalAlpha = tool === 'highlighter' ? 0.35 : 1.0;

    if (tool === 'pen' || tool === 'highlighter' || tool === 'eraser') {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    if (tool === 'line') {
      ctx.beginPath();
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === 'rectangle') {
      ctx.beginPath();
      ctx.rect(startPos.x, startPos.y, x - startPos.x, y - startPos.y);
      ctx.stroke();
    } else if (tool === 'circle') {
      const radius = Math.sqrt(Math.pow(x - startPos.x, 2) + Math.pow(y - startPos.y, 2));
      ctx.beginPath();
      ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    ctx.closePath();
    ctx.globalAlpha = 1.0;
    setIsDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const undoLast = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = previousState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  const stampMathSymbol = (symbol) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 20px "Courier New", monospace';
    ctx.fillStyle = color;
    ctx.fillText(symbol, 80 + Math.random() * 200, 100 + Math.random() * 200);
  };

  const downloadBoardImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `AAU_Mentorship_Blackboard_${subject.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  // Screen Sharing Toggle
  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop());
      }
      setScreenStream(null);
      setIsScreenSharing(false);
      setActiveLayout('blackboard');
    } else {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
          const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
          setScreenStream(stream);
          setIsScreenSharing(true);
          setActiveLayout('screenshare');
          if (screenVideoRef.current) {
            screenVideoRef.current.srcObject = stream;
          }
          stream.getVideoTracks()[0].onended = () => {
            setIsScreenSharing(false);
            setScreenStream(null);
            setActiveLayout('blackboard');
          };
        } else {
          // Fallback to simulated presentation mode
          setIsScreenSharing(true);
          setActiveLayout('screenshare');
        }
      } catch (err) {
        console.warn('Screen share cancelled or unsupported, using presentation slide view:', err);
        setIsScreenSharing(true);
        setActiveLayout('screenshare');
      }
    }
  };

  // Chat message send
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'student',
      name: 'You (Student)',
      time: 'Just now',
      text: inputMessage
    };
    setChatMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    // Simulated mentor automated reply
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'mentor',
          name: mentorName,
          time: 'Just now',
          text: `Got it! Let's examine step 2 on the blackboard together.`
        }
      ]);
    }, 1500);
  };

  return (
    <div className="rounded-3xl bg-[#070a12] border border-[#2a2e39] overflow-hidden shadow-2xl flex flex-col h-[820px] max-h-[90vh]">
      
      {/* 1. TOP PREPLY-STYLE SESSION HEADER */}
      <div className="px-4 py-3 sm:px-6 bg-[#0e131f] border-b border-[#2a2e39] flex flex-wrap items-center justify-between gap-3">
        {/* Left: Mentor Info & Subject */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-black text-sm">
              {mentorName.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0e131f] absolute -bottom-0.5 -right-0.5" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-white leading-none">
                {mentorName}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 uppercase font-bold hidden sm:inline">
                AAU Honors
              </span>
            </div>
            <p className="text-xs text-indigo-400 font-mono mt-0.5 truncate max-w-xs">
              {subject} • {gradeLevel}
            </p>
          </div>
        </div>

        {/* Center: Live Timer & Mode Pills */}
        <div className="flex items-center gap-2">
          {/* Active 50-Min Session Countdown */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141b2d] border border-[#2a2e39] text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400 hidden sm:inline">Session Time:</span>
            <span className="text-white font-bold">{formatTime(timeLeft)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[10px] font-mono text-slate-500 hover:text-white ml-1"
            >
              {isTimerRunning ? 'Pause' : 'Resume'}
            </button>
          </div>

          {/* Layout Mode Selector */}
          <div className="hidden md:flex bg-[#0a0d16] p-0.5 rounded-xl border border-[#2a2e39] text-xs font-mono">
            <button
              onClick={() => setActiveLayout('blackboard')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayout === 'blackboard' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Blackboard
            </button>
            <button
              onClick={() => setActiveLayout('screenshare')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayout === 'screenshare' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Screen Share
            </button>
            <button
              onClick={() => setActiveLayout('dual')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayout === 'dual' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Dual Stage
            </button>
          </div>
        </div>

        {/* Right: Close / Leave Classroom */}
        <div className="flex items-center gap-2">
          <button
            onClick={downloadBoardImage}
            title="Download Blackboard as PNG Image"
            className="p-2 rounded-xl bg-[#141b2d] border border-[#2a2e39] text-slate-300 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>

          {onCloseClassroom && (
            <button
              onClick={onCloseClassroom}
              className="px-3.5 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-bold border border-rose-500/30 flex items-center gap-1.5 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Leave Classroom</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN VIRTUAL CLASSROOM WORKSPACE */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* LEFT / CENTER: INTERACTIVE BLACKBOARD & SCREEN SHARE STAGE (8 or 9 Cols) */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col border-r border-[#2a2e39] relative bg-[#090d16]">
          
          {/* Blackboard Toolbar */}
          <div className="p-2.5 bg-[#0d121e] border-b border-[#2a2e39] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            {/* Drawing Tools */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTool('pen')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'pen' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Pen"
              >
                <PenTool className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('highlighter')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'highlighter' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Highlighter"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('line')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'line' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Straight Line"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('rectangle')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'rectangle' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Rectangle"
              >
                <Square className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('circle')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'circle' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Circle"
              >
                <Circle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('eraser')}
                className={`p-2 rounded-lg transition-colors ${
                  tool === 'eraser' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-[#151c2c]'
                }`}
                title="Eraser"
              >
                <Eraser className="w-4 h-4" />
              </button>
            </div>

            {/* Color Palette */}
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#131929] rounded-lg border border-[#2a2e39]">
              {['#ffffff', '#38bdf8', '#fbbf24', '#34d399', '#fb7185', '#c084fc'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-5 h-5 rounded-full border transition-transform ${
                    color === c ? 'scale-125 border-white shadow' : 'border-transparent hover:scale-110'
                  }`}
                  style={{ backgroundColor: c }}
                  title={`Select Color ${c}`}
                />
              ))}
            </div>

            {/* Brush Size */}
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-[10px] text-slate-500">Width:</span>
              {[2, 5, 10].map(w => (
                <button
                  key={w}
                  onClick={() => setLineWidth(w)}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    lineWidth === w ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {w}px
                </button>
              ))}
            </div>

            {/* Board Background Grid Toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setBoardTheme(boardTheme === 'grid' ? 'chalkboard' : 'grid')}
                className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 text-[11px] ${
                  boardTheme === 'grid' ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-[#2a2e39] text-slate-400 hover:text-white'
                }`}
                title="Toggle Math Graph Paper Grid"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Math Grid</span>
              </button>
              <button
                onClick={undoLast}
                className="p-1.5 rounded-lg border border-[#2a2e39] text-slate-400 hover:text-white transition-colors"
                title="Undo Stroke"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={clearBoard}
                className="p-1.5 rounded-lg border border-[#2a2e39] text-rose-400 hover:bg-rose-950/40 transition-colors"
                title="Clear Entire Blackboard"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Math / STEM Stamps Bar */}
          <div className="px-3 py-1.5 bg-[#0a0e17] border-b border-[#2a2e39] flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-thin">
            <span className="text-slate-500 text-[10px] uppercase shrink-0">STEM Stamps:</span>
            {mathStamps.map((st, i) => (
              <button
                key={i}
                onClick={() => stampMathSymbol(st.symbol)}
                className="px-2 py-0.5 rounded-md bg-[#131929] hover:bg-indigo-950 border border-[#2a2e39] hover:border-indigo-500/40 text-indigo-300 hover:text-white shrink-0 transition-colors"
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* The Active Stage Canvas / Screen Share Area */}
          <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center">
            
            {/* View 1: Blackboard Canvas */}
            <div className={`w-full h-full relative ${activeLayout === 'screenshare' ? 'hidden' : 'block'}`}>
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className={`w-full h-full cursor-crosshair ${
                  boardTheme === 'grid'
                    ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] bg-[#090d16]'
                    : 'bg-[#090d16]'
                }`}
              />

              {/* Watermark Label */}
              <div className="absolute bottom-4 left-4 pointer-events-none select-none text-[10px] font-mono text-slate-700">
                AAU HONORS DIGITAL BLACKBOARD • LIVE SYNC ACTIVE
              </div>
            </div>

            {/* View 2: Live Screen Share Stage */}
            {activeLayout === 'screenshare' && (
              <div className="w-full h-full bg-[#050810] p-4 flex flex-col items-center justify-center space-y-4">
                <div className="w-full max-w-4xl h-[420px] rounded-2xl bg-[#0b101d] border border-[#2a2e39] flex flex-col overflow-hidden shadow-2xl relative">
                  
                  {/* Screen Share Chrome Bar */}
                  <div className="px-4 py-2 bg-[#12192c] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <ScreenShare className="w-4 h-4" />
                      <span>{mentorName} is sharing curriculum slide deck</span>
                    </span>
                    <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      LIVE 1080p
                    </span>
                  </div>

                  {/* Screen Share Content (Slide / Problem Mockup) */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0b101d] to-[#070a13]">
                    <div className="p-5 rounded-2xl bg-[#131b2e] border border-indigo-500/30 space-y-3">
                      <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                        High School Advanced Calculus Problem Sheet • Unit 3
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Optimization & Tangent Lines: Finding Maximum Area
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        A farmer has 2,400 feet of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river. What are the dimensions of the field that has the largest area?
                      </p>
                      <div className="p-3 rounded-xl bg-[#0a0e19] border border-[#2a2e39] text-xs font-mono text-cyan-300">
                        Primary Formula: Area A(x) = x * (2400 - 2x) = 2400x - 2x²<br />
                        Derivative: A'(x) = 2400 - 4x = 0  =&gt;  x = 600 ft
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0f1524] border border-[#2a2e39] text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Screen share active. Switch back to "Blackboard" tab to solve step-by-step.</span>
                      <button
                        onClick={() => setActiveLayout('blackboard')}
                        className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold text-xs"
                      >
                        Open Chalkboard &rarr;
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Picture-in-Picture Webcam Feeds Overlay (Bottom Right) */}
            <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2.5 z-20 pointer-events-auto">
              
              {/* Mentor Video Feed */}
              <div className="w-36 sm:w-44 h-24 sm:h-28 rounded-xl bg-[#0f1526] border border-indigo-500/40 overflow-hidden shadow-xl relative flex flex-col justify-between p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-indigo-300 font-bold px-1.5 py-0.5 rounded bg-indigo-950/80">
                    AAU Mentor
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-400">Live</span>
                  </div>
                </div>

                {/* Animated Voice Waveform */}
                <div className="flex items-center justify-center gap-1 my-auto">
                  <div className="w-1 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-6 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 h-5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="text-[10px] text-slate-300 font-mono ml-1 font-bold">Speaking...</span>
                </div>

                <div className="text-[10px] font-mono text-white font-bold truncate">
                  {mentorName}
                </div>
              </div>

              {/* Student Self Feed */}
              <div className="w-36 sm:w-44 h-24 sm:h-28 rounded-xl bg-[#0f1526] border border-[#2a2e39] overflow-hidden shadow-xl relative flex flex-col justify-between p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-400 font-bold px-1.5 py-0.5 rounded bg-[#182033]">
                    You (Student)
                  </span>
                  <div className="flex items-center gap-1">
                    {isMicOn ? <Mic className="w-3 h-3 text-emerald-400" /> : <MicOff className="w-3 h-3 text-rose-400" />}
                    {isVideoOn ? <Video className="w-3 h-3 text-emerald-400" /> : <VideoOff className="w-3 h-3 text-rose-400" />}
                  </div>
                </div>

                {/* Video On/Off state */}
                <div className="flex flex-col items-center justify-center my-auto text-slate-500">
                  {isVideoOn ? (
                    <User className="w-6 h-6 text-slate-400" />
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">Camera Off</span>
                  )}
                </div>

                <div className="text-[10px] font-mono text-slate-300 truncate">
                  Grade Level: {gradeLevel.split(' ')[0]}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Preply Call Controls Dock */}
          <div className="p-3 bg-[#0d121e] border-t border-[#2a2e39] flex items-center justify-center gap-3">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-3 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isMicOn
                  ? 'bg-[#141b2d] border-[#2a2e39] text-white hover:border-slate-500'
                  : 'bg-rose-500/20 border-rose-500 text-rose-400'
              }`}
            >
              {isMicOn ? <Mic className="w-4 h-4 text-emerald-400" /> : <MicOff className="w-4 h-4 text-rose-400" />}
              <span className="hidden sm:inline">{isMicOn ? 'Mute' : 'Unmuted'}</span>
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-3 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isVideoOn
                  ? 'bg-[#141b2d] border-[#2a2e39] text-white hover:border-slate-500'
                  : 'bg-rose-500/20 border-rose-500 text-rose-400'
              }`}
            >
              {isVideoOn ? <Video className="w-4 h-4 text-emerald-400" /> : <VideoOff className="w-4 h-4 text-rose-400" />}
              <span className="hidden sm:inline">{isVideoOn ? 'Stop Video' : 'Start Video'}</span>
            </button>

            <button
              onClick={toggleScreenShare}
              className={`p-3 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isScreenSharing
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#141b2d] border-[#2a2e39] text-white hover:border-cyan-500/40'
              }`}
            >
              <ScreenShare className="w-4 h-4 text-cyan-400" />
              <span>{isScreenSharing ? 'Stop Screen Share' : 'Share Screen'}</span>
            </button>

            <button
              onClick={() => setActiveLayout(activeLayout === 'blackboard' ? 'screenshare' : 'blackboard')}
              className="p-3 rounded-2xl bg-[#141b2d] border border-[#2a2e39] text-indigo-400 hover:text-white transition-all text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <PenTool className="w-4 h-4" />
              <span className="hidden sm:inline">Chalkboard / Slides</span>
            </button>
          </div>

        </div>

        {/* RIGHT: PREPLY-STYLE SIDEBAR (Chat, Notes, Shared Problems) (3 or 4 Cols) */}
        <div className="lg:col-span-4 xl:col-span-3 bg-[#0a0d16] flex flex-col h-full border-t lg:border-t-0">
          
          {/* Sidebar Tabs */}
          <div className="flex border-b border-[#2a2e39] bg-[#0d121f]">
            <button
              onClick={() => setActiveSidebarTab('chat')}
              className={`flex-1 py-3 text-xs font-mono font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'chat'
                  ? 'border-indigo-500 text-indigo-300 bg-[#141c2e]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>In-Call Chat</span>
            </button>
            <button
              onClick={() => setActiveSidebarTab('notes')}
              className={`flex-1 py-3 text-xs font-mono font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'notes'
                  ? 'border-indigo-500 text-indigo-300 bg-[#141c2e]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lesson Notes</span>
            </button>
          </div>

          {/* Tab 1: Live Chat Thread */}
          {activeSidebarTab === 'chat' && (
            <div className="flex-1 flex flex-col justify-between p-3.5 overflow-hidden">
              <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded-2xl text-xs space-y-1 ${
                      msg.sender === 'mentor'
                        ? 'bg-[#131b2e] border border-indigo-500/30 text-slate-200'
                        : 'bg-[#162138] border border-cyan-500/30 text-white ml-4'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className={msg.sender === 'mentor' ? 'text-indigo-400 font-bold' : 'text-cyan-400 font-bold'}>
                        {msg.name}
                      </span>
                      <span className="text-slate-500">{msg.time}</span>
                    </div>
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Message Input Form */}
              <form onSubmit={handleSendMessage} className="mt-3 pt-2 border-t border-[#2a2e39] flex gap-2">
                <input
                  type="text"
                  placeholder="Ask mentor a formula or question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-[#131929] border border-[#2a2e39] rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* Tab 2: Shared Collaborative Notes */}
          {activeSidebarTab === 'notes' && (
            <div className="flex-1 p-3.5 flex flex-col overflow-hidden space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Shared Homework & Notes Pad</span>
                <span className="text-emerald-400">Auto-Saved</span>
              </div>
              <textarea
                value={sharedNotes}
                onChange={(e) => setSharedNotes(e.target.value)}
                className="flex-1 w-full bg-[#111624] border border-[#2a2e39] rounded-2xl p-3 text-xs font-mono text-slate-200 resize-none focus:outline-none focus:border-indigo-500 leading-relaxed"
                spellCheck="false"
              />
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
