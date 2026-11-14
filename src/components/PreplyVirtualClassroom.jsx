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
  Palette,
  Columns,
  Layers,
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function PreplyVirtualClassroom({ 
  mentorName = 'Ermias Tadesse', 
  mentorRole = 'B.Sc. Electrical & Computer Engineering (Honors Graduate)',
  mentorBadge = 'Nexa Senior Academic Fellow',
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
  const [boardTheme, setBoardTheme] = useState('chalkboard-green'); // 'chalkboard-green', 'chalkboard-slate', 'grid'
  const [history, setHistory] = useState([]);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Media & Screen Sharing State
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const screenVideoRef = useRef(null);
  const [activeLayout, setActiveLayout] = useState('split'); // 'blackboard', 'screenshare', 'split'
  const [screenShareSourceType, setScreenShareSourceType] = useState('chrome-window'); // 'chrome-window', 'slides', 'grapher'
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  // Grapher Simulation Parameters
  const [graphA, setGraphA] = useState(1);
  const [graphB, setGraphB] = useState(-4);
  const [graphC, setGraphC] = useState(3);

  // Timer State (50 min academic period)
  const [timeLeft, setTimeLeft] = useState(3000); // 50 mins = 3000 sec
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Chat & Notes State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'mentor',
      name: mentorName,
      time: 'Just now',
      text: `Welcome to your Nexa 1-on-1 Academic Session for ${subject}! I have prepared our interactive blackboard and problem curriculum sheet. Let's begin!`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeSidebarTab, setActiveSidebarTab] = useState('chat'); // 'chat', 'notes', 'theorems'
  const [sharedNotes, setSharedNotes] = useState(
`### Nexa Academic 1-on-1 Lesson Notes
- Student: Nexa Scholar
- Mentor: ${mentorName} (${mentorBadge})
- Course: ${subject} (${gradeLevel})

Key Mathematical Principles:
1. Differential Power Rule: d/dx [x^n] = n * x^(n-1)
2. Chain Rule: d/dx [f(g(x))] = f'(g(x)) * g'(x)
3. Critical Points: Set f'(x) = 0 and solve for x.
4. Second Derivative Concavity Test: f''(x) > 0 => Local Minimum; f''(x) < 0 => Local Maximum.

Assigned Practice:
- Differentiate f(x) = (2x^3 - 5x)^4 and verify local extrema on [0, 5].`
  );

  // Academic STEM Slides Bank
  const academicSlides = [
    {
      id: 'calc-opt',
      title: 'Calculus: Area Optimization & Tangents',
      badge: 'High School & Prep Unit 3',
      question: 'A rectangular pasture is bounded on one side by a straight river and by 2,400 feet of fencing on the other three sides. What dimensions enclose maximum area?',
      formula: 'Area A(x) = x(2400 - 2x) = 2400x - 2x²',
      derivative: "A'(x) = 2400 - 4x = 0  =>  x = 600 ft, Length = 1200 ft",
      maxArea: 'Maximum Area = 600 × 1200 = 720,000 sq ft',
      highlight: 'Notice how setting the first derivative to zero directly pinpointed the global maximum.'
    },
    {
      id: 'physics-kin',
      title: 'Physics Mechanics: Uniform Acceleration & Vectors',
      badge: 'STEM Physical Sciences',
      question: 'A vehicle accelerates uniformly from rest at 4.0 m/s² for 8 seconds. Determine final velocity and displacement.',
      formula: 'Kinematics: v = u + at  and  s = ut + ½at²',
      derivative: 'v = 0 + (4.0)(8) = 32 m/s',
      maxArea: 'Displacement s = 0 + 0.5(4.0)(8²) = 128 meters',
      highlight: 'Displacement is the definite integral of velocity over the time interval [0, 8].'
    },
    {
      id: 'chem-stoich',
      title: 'General Chemistry: Stoichiometry & Combustion',
      badge: 'Chemical Sciences',
      question: 'Calculate grams of carbon dioxide produced when 44g of propane (C3H8) undergoes complete combustion.',
      formula: 'Balanced Reaction: C3H8 + 5O2 -> 3CO2 + 4H2O',
      derivative: 'Molar Mass C3H8 = 44.1 g/mol  =>  44g ≈ 1.00 mol',
      maxArea: '1 mol C3H8 yields 3 mol CO2 => 3 × 44.01g = 132g CO2',
      highlight: 'Molar conservation guarantees mass balance across reactants and products.'
    },
    {
      id: 'sat-algebra',
      title: 'SAT Advanced Math: Parabola Vertex & Discriminant',
      badge: 'SAT & College Prep',
      question: 'Find the vertex and number of real roots for f(x) = 2x² - 8x + 6.',
      formula: 'Discriminant Δ = b² - 4ac = (-8)² - 4(2)(6) = 64 - 48 = 16 > 0 (2 Real Roots)',
      derivative: 'Vertex x-coordinate: h = -b / (2a) = 8 / 4 = 2',
      maxArea: 'Vertex Coordinates: (2, f(2)) = (2, -2)',
      highlight: 'Since a > 0, the vertex is an absolute minimum at (2, -2).'
    }
  ];

  // STEM Math Stamps
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

  // Chalk Colors (Academic Palette)
  const chalkPalette = [
    { label: 'Chalk White', hex: '#ffffff' },
    { label: 'Academic Gold', hex: '#fbbf24' },
    { label: 'Cambridge Cyan', hex: '#67e8f9' },
    { label: 'Ivy Emerald', hex: '#86efac' },
    { label: 'Coral Rose', hex: '#fda4af' }
  ];

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const targetWidth = Math.max(Math.floor(rect.width), 480);
      const targetHeight = Math.max(Math.floor(rect.height), 420);
      
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        let imgData = null;
        try {
          if (canvas.width > 0 && canvas.height > 0) {
            imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          }
        } catch (e) {
          // Ignore read error on empty canvas
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
    const timer = setTimeout(updateCanvasSize, 120);
    window.addEventListener('resize', updateCanvasSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [activeLayout, boardTheme]);

  // Keep screen stream attached to video element if active
  useEffect(() => {
    if (screenVideoRef.current && screenStream) {
      screenVideoRef.current.srcObject = screenStream;
    }
  }, [screenStream, isScreenSharing, activeLayout, screenShareSourceType]);

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

  const startDrawing = (e) => {
    const { x, y } = getCoordinates(e);
    setIsDrawing(true);
    setStartPos({ x, y });

    const canvas = canvasRef.current;
    if (!canvas) return;
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
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    const isGreenBoard = boardTheme === 'chalkboard-green';
    const bgEraserColor = isGreenBoard ? '#091b15' : '#0a1020';

    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : tool === 'highlighter' ? lineWidth * 3 : lineWidth;
    ctx.strokeStyle = tool === 'eraser' ? bgEraserColor : color;
    ctx.globalAlpha = tool === 'highlighter' ? 0.35 : 1.0;

    if (tool === 'pen' || tool === 'highlighter' || tool === 'eraser') {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const undoLast = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));

    const canvas = canvasRef.current;
    if (!canvas) return;
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
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 22px "Times New Roman", serif';
    ctx.fillStyle = color;
    ctx.fillText(symbol, 60 + Math.random() * 150, 80 + Math.random() * 150);
  };

  const downloadBoardImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Nexa_Academic_Blackboard_${subject.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  // Real Chrome Screen Sharing Handler
  const toggleScreenShare = async () => {
    if (isScreenSharing && screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
      setIsScreenSharing(false);
      setScreenShareSourceType('slides');
    } else {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
          const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
              cursor: 'always',
              displaySurface: 'browser'
            },
            audio: false
          });

          setScreenStream(stream);
          setIsScreenSharing(true);
          setScreenShareSourceType('chrome-window');
          if (activeLayout === 'blackboard') {
            setActiveLayout('split');
          }

          if (screenVideoRef.current) {
            screenVideoRef.current.srcObject = stream;
          }

          const videoTrack = stream.getVideoTracks()[0];
          if (videoTrack) {
            videoTrack.onended = () => {
              setIsScreenSharing(false);
              setScreenStream(null);
              setScreenShareSourceType('slides');
            };
          }
        } else {
          // Fallback to integrated academic slide deck
          setIsScreenSharing(true);
          setScreenShareSourceType('slides');
          if (activeLayout === 'blackboard') setActiveLayout('split');
        }
      } catch (err) {
        console.warn('Chrome screen sharing dialog dismissed or permission not granted. Showing interactive STEM slide deck:', err);
        setIsScreenSharing(true);
        setScreenShareSourceType('slides');
        if (activeLayout === 'blackboard') setActiveLayout('split');
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
      name: 'You (Nexa Scholar)',
      time: 'Just now',
      text: inputMessage
    };
    setChatMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    // Simulated mentor automated pedagogical reply
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'mentor',
          name: mentorName,
          time: 'Just now',
          text: `Insightful question! Look at how we set up the derivative on the blackboard. When we compute f'(x) = 0, notice that the slope of the tangent line becomes strictly horizontal.`
        }
      ]);
    }, 1400);
  };

  return (
    <div className="rounded-3xl bg-[#060a16] border border-[#1e293b] overflow-hidden shadow-2xl flex flex-col h-[850px] max-h-[92vh]">
      
      {/* 1. TOP PRESTIGIOUS ACADEMIC SESSION HEADER */}
      <div className="px-4 py-3 sm:px-6 bg-[#0a1128] border-b border-[#1e293b] flex flex-wrap items-center justify-between gap-3">
        {/* Left: Nexa Faculty Info & Subject */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 flex items-center justify-center text-[#0a1128] font-serif font-black text-base shadow-md shadow-amber-900/30">
              {mentorName.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0a1128] absolute -bottom-1 -right-1" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-serif font-bold text-white leading-none tracking-wide">
                {mentorName}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/80 font-bold uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                {mentorBadge}
              </span>
            </div>
            <p className="text-xs text-amber-200/80 font-mono mt-1 truncate max-w-sm">
              {subject} • <span className="text-slate-400">{gradeLevel}</span>
            </p>
          </div>
        </div>

        {/* Center: Live Collegiate Timer & Stage Layout Switcher */}
        <div className="flex items-center gap-2">
          {/* Active 50-Min Session Countdown */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f172a] border border-amber-900/30 text-xs font-mono shadow-inner">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400 hidden sm:inline">Collegiate Period:</span>
            <span className="text-amber-300 font-bold tracking-widest">{formatTime(timeLeft)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[10px] font-mono text-slate-500 hover:text-white ml-1 underline"
            >
              {isTimerRunning ? 'Pause' : 'Resume'}
            </button>
          </div>

          {/* Layout Mode Selector (Blackboard / Split Dual / Screen Share) */}
          <div className="hidden md:flex items-center bg-[#0d1527] border border-[#1e293b] rounded-xl p-0.5 text-xs font-mono">
            <button
              onClick={() => setActiveLayout('blackboard')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeLayout === 'blackboard'
                  ? 'bg-amber-500/20 text-amber-300 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PenTool className="w-3 h-3" />
              <span>Chalkboard</span>
            </button>

            <button
              onClick={() => setActiveLayout('split')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeLayout === 'split'
                  ? 'bg-amber-500/20 text-amber-300 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Columns className="w-3 h-3" />
              <span>Dual Studio</span>
            </button>

            <button
              onClick={() => setActiveLayout('screenshare')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeLayout === 'screenshare'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3 h-3" />
              <span>Screen / Slides</span>
            </button>
          </div>
        </div>

        {/* Right: Quick Action Controls & Close */}
        <div className="flex items-center gap-2">
          <button
            onClick={downloadBoardImage}
            title="Download high-resolution blackboard drawing as PNG"
            className="p-2 rounded-xl bg-[#0f172a] border border-[#1e293b] text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all text-xs flex items-center gap-1"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span className="hidden xl:inline text-xs font-mono">Save Board</span>
          </button>

          {onCloseClassroom && (
            <button
              onClick={onCloseClassroom}
              className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white transition-all text-xs font-bold"
              title="Leave Virtual Classroom"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN INTERACTIVE STAGE & COLLABORATIVE WORKSPACE */}
      <div className="flex-1 min-h-[600px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* LEFT / CENTER: ACTIVE STAGE (Blackboard, Chrome Screen Share, or Dual Studio) */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col h-full min-h-[580px] bg-[#050814] border-r border-[#1e293b] relative overflow-hidden">
          
          {/* Top Academic Toolbar: Blackboard Instruments */}
          <div className="px-3 sm:px-5 py-2 bg-[#090f20] border-b border-[#1e293b] flex flex-wrap items-center justify-between gap-2 z-10 text-xs font-mono">
            
            {/* Drawing Tools */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider mr-1 hidden sm:inline">
                Chalk:
              </span>

              <button
                onClick={() => setTool('pen')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border transition-all flex items-center gap-1 ${
                  tool === 'pen'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="White/Colored Chalk Pen"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Pen</span>
              </button>

              <button
                onClick={() => setTool('highlighter')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border transition-all flex items-center gap-1 ${
                  tool === 'highlighter'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="Luminous STEM Highlighter"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">Highlight</span>
              </button>

              <button
                onClick={() => setTool('line')}
                className={`p-1.5 sm:px-2 sm:py-1 rounded-lg border transition-all ${
                  tool === 'line'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="Draw Straight Axis / Vector"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setTool('rectangle')}
                className={`p-1.5 sm:px-2 sm:py-1 rounded-lg border transition-all ${
                  tool === 'rectangle'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="Draw Box / Optimization Boundary"
              >
                <Square className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setTool('circle')}
                className={`p-1.5 sm:px-2 sm:py-1 rounded-lg border transition-all ${
                  tool === 'circle'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="Draw Circle / Orbit / Atom"
              >
                <Circle className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setTool('eraser')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border transition-all flex items-center gap-1 ${
                  tool === 'eraser'
                    ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                    : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                }`}
                title="Chalk Duster Eraser"
              >
                <Eraser className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Eraser</span>
              </button>

              {/* Chalk Palette Swatches */}
              <div className="flex items-center gap-1 pl-1 ml-1 border-l border-[#1e293b]">
                {chalkPalette.map((cp) => (
                  <button
                    key={cp.hex}
                    onClick={() => setColor(cp.hex)}
                    style={{ backgroundColor: cp.hex }}
                    title={cp.label}
                    className={`w-4 h-4 rounded-full transition-transform ${
                      color === cp.hex ? 'scale-125 ring-2 ring-amber-400 ring-offset-1 ring-offset-[#090f20]' : 'hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Board Background Texture Selector & Clear */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setBoardTheme(boardTheme === 'chalkboard-green' ? 'chalkboard-slate' : 'chalkboard-green')}
                className="px-2 py-1 rounded-lg bg-[#0f172a] border border-[#1e293b] text-[11px] text-slate-300 hover:text-amber-300 flex items-center gap-1"
                title="Toggle Oxford Slate Green vs Cambridge Midnight Slate"
              >
                <div 
                  className={`w-2.5 h-2.5 rounded-full ${boardTheme === 'chalkboard-green' ? 'bg-emerald-600' : 'bg-slate-700'}`} 
                />
                <span className="hidden sm:inline">
                  {boardTheme === 'chalkboard-green' ? 'Oxford Green' : 'Midnight Slate'}
                </span>
              </button>

              <button
                onClick={undoLast}
                disabled={history.length === 0}
                className={`p-1 sm:px-2 sm:py-1 rounded-lg border text-[11px] flex items-center gap-1 ${
                  history.length > 0
                    ? 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:text-white'
                    : 'opacity-40 border-[#1e293b] text-slate-600 cursor-not-allowed'
                }`}
                title="Undo last chalk stroke"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Undo</span>
              </button>

              <button
                onClick={clearBoard}
                className="p-1 sm:px-2 sm:py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 text-[11px] flex items-center gap-1"
                title="Clear entire blackboard"
              >
                <Trash2 className="w-3 h-3 text-rose-400" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>

          </div>

          {/* Quick Mathematical & STEM Stamp Bar */}
          <div className="px-3 sm:px-5 py-1.5 bg-[#070b18] border-b border-[#1e293b] flex items-center gap-1.5 overflow-x-auto scrollbar-none z-10 text-[11px] font-serif">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-amber-400" />
              Formula Stamps:
            </span>
            {mathStamps.map((st) => (
              <button
                key={st.label}
                onClick={() => stampMathSymbol(st.symbol)}
                className="px-2 py-0.5 rounded-md bg-[#0f172a] border border-[#1e293b] text-slate-300 hover:text-amber-300 hover:border-amber-500/40 shrink-0 transition-colors"
                title={`Stamp ${st.symbol} onto board`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Active Work Area: Supports Split Studio, Full Blackboard, or Full Screen Share */}
          <div className="relative flex-1 min-h-[500px] w-full h-full overflow-hidden flex flex-col md:flex-row">
            
            {/* STAGE PANE A: CHROME SCREEN SHARE & ACADEMIC SLIDES (Visible in 'screenshare' or 'split') */}
            {(activeLayout === 'screenshare' || activeLayout === 'split') && (
              <div className={`${activeLayout === 'split' ? 'w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#1e293b]' : 'w-full'} h-full min-h-[460px] flex flex-col bg-[#050914] overflow-hidden`}>
                
                {/* Screen Share Stage Navigation Header */}
                <div className="px-3 py-2 bg-[#0a1124] border-b border-[#1e293b] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    {/* Live streaming status pill */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 font-bold text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{isScreenSharing && screenStream ? 'LIVE CHROME TAB STREAM' : 'ACADEMIC SLIDE DECK'}</span>
                    </div>

                    {isScreenSharing && screenStream && (
                      <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                        1080p 60fps
                      </span>
                    )}
                  </div>

                  {/* Sub-view switcher tabs for the presentation area */}
                  <div className="flex items-center gap-1 text-[10px]">
                    <button
                      onClick={() => setScreenShareSourceType('slides')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        screenShareSourceType === 'slides'
                          ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Problem Slides
                    </button>
                    <button
                      onClick={() => setScreenShareSourceType('grapher')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        screenShareSourceType === 'grapher'
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      STEM Grapher
                    </button>
                    {screenStream && (
                      <button
                        onClick={() => setScreenShareSourceType('chrome-window')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          screenShareSourceType === 'chrome-window'
                            ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Chrome Window
                      </button>
                    )}
                  </div>
                </div>

                {/* Sub-View 1: Real Chrome Screen Feed Video */}
                {screenShareSourceType === 'chrome-window' && screenStream ? (
                  <div className="flex-1 w-full h-full bg-black flex flex-col items-center justify-center relative p-2">
                    <video
                      ref={screenVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-[#0a1124]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2">
                      <ScreenShare className="w-3.5 h-3.5" />
                      <span>Streaming Chrome Window • Click "Chalkboard" to annotate</span>
                    </div>
                  </div>
                ) : screenShareSourceType === 'grapher' ? (
                  /* Sub-View 2: Interactive Dynamic STEM Function Plotter */
                  <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#060b18]">
                    <div className="p-4 rounded-2xl bg-[#0a1124] border border-cyan-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" />
                          Interactive Parabolic Plotter: f(x) = ax² + bx + c
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Vertex: ({-graphB / (2 * graphA || 1)}, {graphC - (graphB * graphB) / (4 * graphA || 1)})</span>
                      </div>

                      {/* Dynamic SVG Plot */}
                      <div className="w-full h-44 rounded-xl bg-[#040711] border border-slate-800 relative flex items-center justify-center overflow-hidden">
                        <svg className="w-full h-full" viewBox="-10 -10 20 20">
                          {/* Grid Lines */}
                          <line x1="-10" y1="0" x2="10" y2="0" stroke="#1e293b" strokeWidth="0.3" />
                          <line x1="0" y1="-10" x2="0" y2="10" stroke="#1e293b" strokeWidth="0.3" />
                          
                          {/* Parabola Curve Points */}
                          <path
                            d={(() => {
                              const points = [];
                              for (let x = -5; x <= 5; x += 0.2) {
                                const y = -(graphA * x * x + graphB * x + graphC); // inverted for SVG coordinate space
                                points.push(`${x === -5 ? 'M' : 'L'} ${x * 1.8} ${y * 0.8}`);
                              }
                              return points.join(' ');
                            })()}
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="0.6"
                          />
                        </svg>
                        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">
                          Formula: f(x) = {graphA}x² {graphB >= 0 ? `+ ${graphB}x` : `${graphB}x`} {graphC >= 0 ? `+ ${graphC}` : `${graphC}`}
                        </div>
                      </div>

                      {/* Interactive Sliders */}
                      <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                        <div>
                          <label className="text-slate-400 text-[10px] block">Coefficient a: {graphA}</label>
                          <input
                            type="range"
                            min="-3"
                            max="3"
                            step="0.5"
                            value={graphA}
                            onChange={(e) => setGraphA(parseFloat(e.target.value) || 1)}
                            className="w-full accent-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-[10px] block">Coefficient b: {graphB}</label>
                          <input
                            type="range"
                            min="-8"
                            max="8"
                            step="1"
                            value={graphB}
                            onChange={(e) => setGraphB(parseFloat(e.target.value) || 0)}
                            className="w-full accent-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-[10px] block">Constant c: {graphC}</label>
                          <input
                            type="range"
                            min="-10"
                            max="10"
                            step="1"
                            value={graphC}
                            onChange={(e) => setGraphC(parseFloat(e.target.value) || 0)}
                            className="w-full accent-cyan-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Sub-View 3: Curated Academic Problem Slides Bank */
                  <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#050914] scrollbar-thin">
                    {/* Slide Selector Buttons */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {academicSlides.map((sl, idx) => (
                        <button
                          key={sl.id}
                          onClick={() => setSelectedSlideIndex(idx)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                            selectedSlideIndex === idx
                              ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow'
                              : 'bg-[#0d1424] border-[#1e293b] text-slate-400 hover:text-white'
                          }`}
                        >
                          Slide {idx + 1}: {sl.title.split(':')[0]}
                        </button>
                      ))}
                    </div>

                    {/* Active Slide Card */}
                    {(() => {
                      const slide = academicSlides[selectedSlideIndex];
                      return (
                        <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0c1428] to-[#070c1b] border border-amber-900/40 space-y-3.5 shadow-xl">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800/80 font-bold">
                              {slide.badge}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              Slide {selectedSlideIndex + 1} of {academicSlides.length}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                            {slide.title}
                          </h3>

                          <div className="p-3.5 rounded-xl bg-[#080d1e] border border-[#1e293b] text-xs text-slate-300 leading-relaxed font-sans">
                            <span className="font-bold text-amber-300 block mb-1">Problem Statement:</span>
                            {slide.question}
                          </div>

                          <div className="p-3 rounded-xl bg-[#050814] border border-cyan-900/30 text-xs font-mono space-y-1">
                            <div className="text-cyan-400 font-bold">{slide.formula}</div>
                            <div className="text-slate-300 text-[11px]">{slide.derivative}</div>
                            <div className="text-emerald-400 font-bold text-[11px] pt-1 border-t border-slate-800">{slide.maxArea}</div>
                          </div>

                          <p className="text-[11px] text-amber-200/70 italic font-serif">
                            ★ Nexa Mentor Tip: {slide.highlight}
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                )}

              </div>
            )}

            {/* STAGE PANE B: DIGITAL BLACKBOARD (Visible in 'blackboard' or 'split') */}
            {(activeLayout === 'blackboard' || activeLayout === 'split') && (
              <div className={`${activeLayout === 'split' ? 'w-full md:w-1/2' : 'w-full'} h-full min-h-[460px] relative flex items-center justify-center overflow-hidden`}>
                
                {/* Chalkboard Outer Wooden Frame Trim with Walnut Gradient */}
                <div className="w-full h-full min-h-[440px] p-2 sm:p-3 bg-gradient-to-br from-[#2a1708] via-[#1b1007] to-[#0d0703] flex items-center justify-center">
                  
                  {/* Chalkboard Slate Canvas Frame */}
                  <div className={`w-full h-full min-h-[400px] rounded-2xl relative overflow-hidden border-[3px] border-[#3d2311] shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] ${
                    boardTheme === 'chalkboard-green' 
                      ? 'bg-[#091b15]' 
                      : boardTheme === 'grid'
                      ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] bg-[#070d18]'
                      : 'bg-[#0a1020]'
                  }`}>
                    
                    <canvas
                      ref={canvasRef}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="w-full h-full min-h-[400px] cursor-crosshair touch-none"
                    />

                    {/* Classic Collegiate Slate Watermark */}
                    <div className="absolute bottom-3 left-4 pointer-events-none select-none text-[10px] font-serif text-slate-400/40 tracking-wider">
                      NEXA ACADEMIC NETWORK • LIVE COLLABORATIVE CLASSROOM
                    </div>

                    {/* Quick Expand Toggle for Split View */}
                    {activeLayout === 'split' && (
                      <button
                        onClick={() => setActiveLayout('blackboard')}
                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 hover:bg-black text-slate-400 hover:text-white transition-all text-[10px] font-mono border border-slate-700/60"
                        title="Maximize Blackboard to Full Width"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                  </div>
                </div>

              </div>
            )}

            {/* Picture-in-Picture Floating Webcam Feeds (Teacher & Student) */}
            <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2.5 z-20 pointer-events-auto">
              
              {/* Nexa Faculty Mentor Video Feed */}
              <div className="w-36 sm:w-44 h-24 sm:h-28 rounded-2xl bg-[#0a1224] border border-amber-500/40 overflow-hidden shadow-2xl relative flex flex-col justify-between p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-amber-300 font-bold px-1.5 py-0.5 rounded bg-amber-950/90 border border-amber-800">
                    Nexa Mentor
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-300 font-bold">Live</span>
                  </div>
                </div>

                {/* Animated Voice Waveform */}
                <div className="flex items-center justify-center gap-1 my-auto">
                  <div className="w-1 h-3.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-6 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 h-5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="text-[10px] text-amber-200 font-mono ml-1 font-bold">Speaking</span>
                </div>

                <div className="text-[10px] font-serif text-white font-bold truncate">
                  {mentorName}
                </div>
              </div>

              {/* Student Self Feed */}
              <div className="w-36 sm:w-44 h-24 sm:h-28 rounded-2xl bg-[#090f20] border border-[#1e293b] overflow-hidden shadow-xl relative flex flex-col justify-between p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-300 font-bold px-1.5 py-0.5 rounded bg-[#131b2e]">
                    You (Scholar)
                  </span>
                  <div className="flex items-center gap-1">
                    {isMicOn ? <Mic className="w-3 h-3 text-emerald-400" /> : <MicOff className="w-3 h-3 text-rose-400" />}
                    {isVideoOn ? <Video className="w-3 h-3 text-emerald-400" /> : <VideoOff className="w-3 h-3 text-rose-400" />}
                  </div>
                </div>

                {/* Video Avatar */}
                <div className="flex flex-col items-center justify-center my-auto text-slate-500">
                  {isVideoOn ? (
                    <User className="w-6 h-6 text-slate-300" />
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">Video Paused</span>
                  )}
                </div>

                <div className="text-[10px] font-mono text-slate-400 truncate">
                  {gradeLevel.split(' ')[0]} Active
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Call Controls Dock */}
          <div className="p-2.5 sm:p-3 bg-[#080e1e] border-t border-[#1e293b] flex items-center justify-center gap-2.5 flex-wrap z-10">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`px-3 py-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isMicOn
                  ? 'bg-[#0f172a] border-[#1e293b] text-white hover:border-slate-500'
                  : 'bg-rose-500/20 border-rose-500 text-rose-300'
              }`}
            >
              {isMicOn ? <Mic className="w-4 h-4 text-emerald-400" /> : <MicOff className="w-4 h-4 text-rose-400" />}
              <span className="hidden sm:inline">{isMicOn ? 'Mute' : 'Unmuted'}</span>
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`px-3 py-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isVideoOn
                  ? 'bg-[#0f172a] border-[#1e293b] text-white hover:border-slate-500'
                  : 'bg-rose-500/20 border-rose-500 text-rose-300'
              }`}
            >
              {isVideoOn ? <Video className="w-4 h-4 text-emerald-400" /> : <VideoOff className="w-4 h-4 text-rose-400" />}
              <span className="hidden sm:inline">{isVideoOn ? 'Stop Camera' : 'Start Camera'}</span>
            </button>

            <button
              onClick={toggleScreenShare}
              className={`px-3.5 py-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isScreenSharing
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#0f172a] border-[#1e293b] text-white hover:border-cyan-500/50'
              }`}
            >
              <ScreenShare className="w-4 h-4 text-cyan-400" />
              <span>{isScreenSharing ? 'Stop Screen Share' : 'Share Chrome Screen'}</span>
            </button>

            <button
              onClick={() => setActiveLayout(activeLayout === 'split' ? 'blackboard' : 'split')}
              className="px-3.5 py-2 rounded-xl bg-[#0f172a] border border-amber-900/40 text-amber-300 hover:text-white transition-all text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <Columns className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">{activeLayout === 'split' ? 'Full Blackboard' : 'Dual Studio'}</span>
            </button>
          </div>

        </div>

        {/* RIGHT: PREPLY-STYLE COLLABORATIVE SIDEBAR (Chat, Lesson Notes, Quick Reference) */}
        <div className="lg:col-span-4 xl:col-span-3 bg-[#070c1a] flex flex-col h-full border-t lg:border-t-0">
          
          {/* Sidebar Tabs */}
          <div className="flex border-b border-[#1e293b] bg-[#0a1124]">
            <button
              onClick={() => setActiveSidebarTab('chat')}
              className={`flex-1 py-3 text-xs font-mono font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'chat'
                  ? 'border-amber-400 text-amber-300 bg-[#0f172a]'
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
                  ? 'border-amber-400 text-amber-300 bg-[#0f172a]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lesson Notes</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab('theorems')}
              className={`flex-1 py-3 text-xs font-mono font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'theorems'
                  ? 'border-amber-400 text-amber-300 bg-[#0f172a]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theorems</span>
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
                        ? 'bg-[#0d162d] border border-amber-900/40 text-slate-200'
                        : 'bg-[#101e38] border border-cyan-800/40 text-white ml-4'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className={msg.sender === 'mentor' ? 'text-amber-400 font-bold' : 'text-cyan-400 font-bold'}>
                        {msg.name}
                      </span>
                      <span className="text-slate-500">{msg.time}</span>
                    </div>
                    <p className="leading-relaxed font-sans">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Message Input Form */}
              <form onSubmit={handleSendMessage} className="mt-3 pt-2 border-t border-[#1e293b] flex gap-2">
                <input
                  type="text"
                  placeholder="Ask mentor a formula or theorem question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-[#0a1122] border border-[#1e293b] rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white transition-colors"
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
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Auto-Saved
                </span>
              </div>
              <textarea
                value={sharedNotes}
                onChange={(e) => setSharedNotes(e.target.value)}
                className="flex-1 w-full bg-[#0a1122] border border-[#1e293b] rounded-2xl p-3 text-xs font-mono text-slate-200 resize-none focus:outline-none focus:border-amber-500 leading-relaxed"
                spellCheck="false"
              />
            </div>
          )}

          {/* Tab 3: Quick Theorem & Formula Bank */}
          {activeSidebarTab === 'theorems' && (
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 scrollbar-thin">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                Quick Formula & Theorem Card
              </div>

              <div className="p-3 rounded-xl bg-[#0a1122] border border-[#1e293b] text-xs font-mono space-y-1.5">
                <div className="text-amber-300 font-bold">1. Derivative Power Rule</div>
                <div className="text-slate-300 text-[11px]">d/dx [xⁿ] = n · xⁿ⁻¹</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0a1122] border border-[#1e293b] text-xs font-mono space-y-1.5">
                <div className="text-amber-300 font-bold">2. Fundamental Theorem of Calculus</div>
                <div className="text-slate-300 text-[11px]">∫ₐᵇ f(x)dx = F(b) - F(a)</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0a1122] border border-[#1e293b] text-xs font-mono space-y-1.5">
                <div className="text-amber-300 font-bold">3. Quadratic Equation Roots</div>
                <div className="text-slate-300 text-[11px]">x = (-b ± √(b² - 4ac)) / 2a</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0a1122] border border-[#1e293b] text-xs font-mono space-y-1.5">
                <div className="text-amber-300 font-bold">4. Kinematic Motion Under Gravity</div>
                <div className="text-slate-300 text-[11px]">v² = u² + 2as  |  s = ut + ½at²</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0a1122] border border-[#1e293b] text-xs font-mono space-y-1.5">
                <div className="text-amber-300 font-bold">5. Ideal Gas Equation</div>
                <div className="text-slate-300 text-[11px]">P · V = n · R · T (R = 8.314 J/(mol·K))</div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
