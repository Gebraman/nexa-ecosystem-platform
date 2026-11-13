import React, { useState } from 'react';
import { Target, CheckCircle2, XCircle, Sparkles, Award, RefreshCw, Trophy, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function SMCPuzzleGame({ chapterId = 'chapter-1' }) {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [unlockedTricks, setUnlockedTricks] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  const puzzles = [
    {
      id: 1,
      title: "Puzzle 01: Where Are the Retail Stops Hiding?",
      scenario: "EUR/USD is forming a support level around 1.08400. Thousands of retail traders bought this bounce. An institutional desk wants to accumulate a $10 Billion long position. Where must they drive price to harvest the liquidity?",
      chartSvg: (
        <svg viewBox="0 0 500 180" className="w-full h-full">
          <line x1="20" y1="50" x2="480" y2="50" stroke="#1f2430" strokeDasharray="3 3" />
          <text x="440" y="46" fill="#64748b" fontSize="9" fontFamily="monospace">1.09200 (BSL)</text>
          
          <line x1="20" y1="130" x2="480" y2="130" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="400" y="124" fill="#fbbf24" fontSize="9" fontFamily="monospace">1.08400 (Support)</text>

          {/* Price line bouncing off support */}
          <path d="M 40 70 L 90 130 L 140 80 L 190 130 L 250 85 L 300 130 L 340 100" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          
          {/* Target Zone Box */}
          <rect x="180" y="135" width="220" height="35" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
          <text x="290" y="157" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            ZONE X: Below Support Lows
          </text>
        </svg>
      ),
      options: [
        { id: 'A', text: "Above the 1.09200 resistance high where breakout buyers are waiting.", correct: false, reason: "Above the high is Buy-Side Liquidity (BSL). Institutions wanting to BUY need SELLER stops (sell-side liquidity)." },
        { id: 'B', text: "Below the 1.08400 support level where retail stop-loss SELL orders are clustered.", correct: true, reason: "CORRECT! Retail buyers place stop losses below support. A stop loss on a buy is a SELL order. Institutions drive price here to absorb these sells at a discount!" },
        { id: 'C', text: "Exactly in the middle at 1.08800 equilibrium.", correct: false, reason: "The midpoint has low liquidity density. Institutions need massive stop clusters located beyond extremes." }
      ],
      memoryTrick: "“Your stop is their entry.”"
    },
    {
      id: 2,
      title: "Puzzle 02: Stop Hunt Cascade vs. Real Breakdown",
      scenario: "Price violently pierces below the 1.08400 support level. A long hammer rejection wick forms, and the candle closes back INSIDE the range at 1.08450. What is your institutional action?",
      chartSvg: (
        <svg viewBox="0 0 500 180" className="w-full h-full">
          <line x1="20" y1="100" x2="480" y2="100" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="400" y="94" fill="#fbbf24" fontSize="9" fontFamily="monospace">1.08400 (Support)</text>

          {/* Candle 1 & 2 */}
          <line x1="120" y1="70" x2="120" y2="100" stroke="#64748b" strokeWidth="1.5" />
          <rect x="110" y="75" width="20" height="20" fill="#64748b" rx="1" />
          
          {/* Hammer Candle with Long Rejection Wick */}
          <line x1="220" y1="80" x2="220" y2="160" stroke="#10b981" strokeWidth="2.5" />
          <rect x="208" y="85" width="24" height="25" fill="#10b981" rx="2" />
          
          <polygon points="220,165 215,155 225,155" fill="#ef4444" />
          <text x="220" y="175" fill="#f87171" fontSize="9" fontFamily="monospace" textAnchor="middle">
            LIQUIDITY RAID WICK
          </text>
        </svg>
      ),
      options: [
        { id: 'A', text: "Sell immediately with a market order because the support level was pierced.", correct: false, reason: "This is the classic breakout trap! Breakout sellers are now trapped on the wrong side." },
        { id: 'B', text: "Recognize the liquidity raid! Drop to 15m/5m, wait for a Market Structure Break (BOS body close) and enter on the retest.", correct: true, reason: "EXCELLENT! The long wick proves order book absorption. You confirm buyer control with a lower-timeframe BOS before entering safely." },
        { id: 'C', text: "DCA down with multiple orders without a stop loss.", correct: false, reason: "DCA on futures without confirmation is strictly prohibited in professional risk management." }
      ],
      memoryTrick: "“Sweep, shift, retest, enter.”"
    },
    {
      id: 3,
      title: "Puzzle 03: The 3-Candle Fair Value Gap (FVG)",
      scenario: "During an aggressive displacement drop, three candles print consecutively. Between which two points does the institutional Fair Value Gap (FVG) exist?",
      chartSvg: (
        <svg viewBox="0 0 500 180" className="w-full h-full">
          {/* C1 */}
          <line x1="120" y1="30" x2="120" y2="90" stroke="#f23645" strokeWidth="1.5" />
          <rect x="110" y="40" width="20" height="35" fill="#f23645" rx="1" />
          <line x1="100" y1="75" x2="140" y2="75" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="105" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">C1 Low</text>

          {/* C2 Displacement */}
          <line x1="220" y1="60" x2="220" y2="165" stroke="#f23645" strokeWidth="2" />
          <rect x="208" y="75" width="24" height="80" fill="#f23645" rx="2" />

          {/* C3 */}
          <line x1="320" y1="120" x2="320" y2="175" stroke="#f23645" strokeWidth="1.5" />
          <rect x="310" y="135" width="20" height="35" fill="#f23645" rx="1" />
          <line x1="300" y1="120" x2="340" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="320" y="112" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">C3 High</text>

          {/* Shaded Gap */}
          <rect x="140" y="75" width="160" height="45" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
          <text x="220" y="102" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            IMBALANCE GAP
          </text>
        </svg>
      ),
      options: [
        { id: 'A', text: "Between the Low of Candle 1 and the High of Candle 3.", correct: true, reason: "PERFECT! The untraded void between Candle 1's lowest point and Candle 3's highest point is the Bearish Fair Value Gap." },
        { id: 'B', text: "Between the Open and Close of Candle 2.", correct: false, reason: "Candle 2's body is the displacement candle, but the FVG is the empty distance between the first and third candles." },
        { id: 'C', text: "Between the High of Candle 1 and the Low of Candle 3.", correct: false, reason: "That spans the entire range, not the unfilled imbalance." }
      ],
      memoryTrick: "“Liquidity to liquidity.”"
    },
    {
      id: 4,
      title: "Puzzle 04: The Red Line Validation Rule",
      scenario: "A 3-candle swing high forms at 1.09200. You draw the Red Line at the lowest point of the swing candle (1.08700). When is this structural swing officially validated?",
      chartSvg: (
        <svg viewBox="0 0 500 180" className="w-full h-full">
          {/* Swing Candle */}
          <line x1="160" y1="30" x2="160" y2="110" stroke="#10b981" strokeWidth="2" />
          <rect x="148" y="45" width="24" height="50" fill="#10b981" rx="2" />
          <circle cx="160" cy="30" r="4" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="160" y="22" fill="#fbbf24" fontSize="9" fontFamily="monospace" textAnchor="middle">Swing High</text>

          {/* Red Line */}
          <line x1="80" y1="110" x2="420" y2="110" stroke="#ef4444" strokeWidth="2" />
          <text x="360" y="104" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="bold">RED LINE (Low)</text>

          {/* Candle Closing Below */}
          <line x1="260" y1="90" x2="260" y2="155" stroke="#f23645" strokeWidth="2" />
          <rect x="248" y="105" width="24" height="35" fill="#f23645" rx="2" />
          <text x="260" y="170" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            BODY CLOSES BELOW
          </text>
        </svg>
      ),
      options: [
        { id: 'A', text: "As soon as the peak candle wick prints at the top.", correct: false, reason: "No! Until price breaks lower, the market can keep rising, invalidating the candidate." },
        { id: 'B', text: "When a wick briefly touches or pokes through the red line.", correct: false, reason: "A wick touch is only a sweep or test, not a confirmation." },
        { id: 'C', text: "Only after a subsequent candle closes with its full BODY below the red line.", correct: true, reason: "100% CORRECT! Roman's rule: 'No close, no swing. Wick is a sweep, body close is a break.'" }
      ],
      memoryTrick: "“No close, no swing. Wick is a sweep, body close is a break.”"
    }
  ];

  const current = puzzles[currentPuzzleIndex];

  const handleSelectOption = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (opt.correct) {
      setScore(prev => prev + 1);
      if (!unlockedTricks.includes(current.memoryTrick)) {
        setUnlockedTricks(prev => [...prev, current.memoryTrick]);
      }
    }
  };

  const handleNextPuzzle = () => {
    if (currentPuzzleIndex < puzzles.length - 1) {
      setCurrentPuzzleIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameCompleted(true);
    }
  };

  const handleResetGame = () => {
    setCurrentPuzzleIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUnlockedTricks([]);
    setGameCompleted(false);
  };

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-[#090d16] border-2 border-amber-500/40 space-y-6 shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2a2e39] pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Interactive Chart Backtesting Game
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Institutional Memory & Tactical Puzzle Arena
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-[#131722] border border-[#2a2e39] font-mono text-xs text-slate-300">
            Score: <span className="text-amber-400 font-bold">{score}</span> / {puzzles.length}
          </div>
          <button
            onClick={handleResetGame}
            className="p-2 rounded-xl bg-[#131722] hover:bg-slate-800 border border-[#2a2e39] text-slate-400 hover:text-white"
            title="Reset Arena"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!gameCompleted ? (
        <div className="space-y-6">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Puzzle {currentPuzzleIndex + 1} of {puzzles.length}</span>
            <span className="text-amber-400 font-bold">Level {currentPuzzleIndex + 1}: Tactical IQ</span>
          </div>
          <div className="w-full h-1.5 bg-[#131722] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300" 
              style={{ width: `${((currentPuzzleIndex + 1) / puzzles.length) * 100}%` }}
            />
          </div>

          {/* Scenario Text */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#131722] p-4 rounded-xl border border-[#2a2e39]">
              {current.scenario}
            </p>
          </div>

          {/* Interactive Chart Canvas */}
          <div className="relative h-56 w-full bg-[#060913] rounded-2xl border border-[#2a2e39] overflow-hidden flex items-center justify-center p-2">
            {current.chartSvg}
          </div>

          {/* Options */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Select Your Institutional Move:
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {current.options.map((opt) => {
                let btnStyle = "bg-[#131722] border-[#2a2e39] text-slate-300 hover:border-slate-700";
                if (selectedOption?.id === opt.id) {
                  btnStyle = opt.correct 
                    ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10" 
                    : "bg-red-950/40 border-red-500 text-red-300 font-bold";
                } else if (isAnswered && opt.correct) {
                  btnStyle = "bg-emerald-950/20 border-emerald-500 text-emerald-300";
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="px-2 py-0.5 rounded bg-[#090d16] font-mono text-xs font-bold shrink-0 mt-0.5">
                      {opt.id}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Next Step */}
          {isAnswered && (
            <div className={`p-5 rounded-2xl border space-y-3 animate-fade-in ${
              selectedOption?.correct ? 'bg-emerald-950/20 border-emerald-500/50' : 'bg-red-950/20 border-red-500/50'
            }`}>
              <div className="flex items-center gap-2">
                {selectedOption?.correct ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="text-sm font-bold text-white">
                  {selectedOption?.correct ? "Institutional Solution Verified!" : "Retail Trap Detected!"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedOption?.reason}
              </p>

              {selectedOption?.correct && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold flex items-center gap-2">
                  <span>🧠 Memory Trick Unlocked:</span>
                  <span>{current.memoryTrick}</span>
                </div>
              )}

              <button
                onClick={handleNextPuzzle}
                className="mt-3 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg shadow-amber-500/20"
              >
                <span>{currentPuzzleIndex < puzzles.length - 1 ? 'Next Tactical Puzzle' : 'Complete Arena'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Game Completed Trophy Screen */
        <div className="py-8 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Backtesting Arena Completed!
            </h4>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              You scored <span className="text-amber-400 font-bold">{score} / {puzzles.length}</span>. Your institutional eye is calibrated to detect retail traps before risking capital.
            </p>
          </div>

          {/* Unlocked Memory Rhymes Card */}
          <div className="p-6 rounded-2xl bg-[#131722] border border-[#2a2e39] max-w-xl mx-auto text-left space-y-3">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
              🏆 Mastered Memory Rhymes:
            </span>
            <div className="space-y-2">
              {[
                "“Your stop is their entry.”",
                "“Sweep, shift, retest, enter.”",
                "“Liquidity to liquidity.”",
                "“No close, no swing. Wick is a sweep, body close is a break.”",
                "“High time frame for direction, low time frame for entry.”"
              ].map((rhyme, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#090d16] border border-[#2a2e39] text-xs font-mono text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{rhyme}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleResetGame}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-black text-xs transition-all shadow-xl shadow-amber-500/20"
          >
            Play Backtesting Arena Again
          </button>
        </div>
      )}

    </div>
  );
}
