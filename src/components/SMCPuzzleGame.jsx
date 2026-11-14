import React, { useState } from 'react';
import { Target, CheckCircle2, XCircle, Sparkles, Award, RotateCcw, Trophy, ArrowRight, ShieldCheck, HelpCircle, Moon, Sun, Image as ImageIcon } from 'lucide-react';

export default function SMCPuzzleGame({ chapterId = 'chapter-1' }) {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [unlockedTricks, setUnlockedTricks] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [invertImage, setInvertImage] = useState(false);

  // Chapter 1 Puzzles with Real Drawings
  const chapter1Puzzles = [
    {
      id: 1,
      title: "Puzzle 01: Where Are the Retail Stops Hiding?",
      concept: "Liquidity Pools & The Retail Trap (Figure 4)",
      realImage: "/assets/smc/ch1/image4.png",
      caption: "Figure 4. Retail traders buy obvious support and cluster stop-loss sell orders just beneath it. Smart Money sweeps these stops to fill large institutional orders.",
      scenario: "EUR/USD forms an obvious double bottom support level. Thousands of retail traders enter long. Smart Money needs to accumulate a massive $10 Billion buy order. Where must they drive price to harvest the necessary liquidity?",
      options: [
        { id: 'A', text: "Above the resistance high where breakout buyers are waiting.", correct: false, reason: "Above the high is Buy-Side Liquidity (BSL). Institutions wanting to BUY need SELLER stops (sell-side liquidity)." },
        { id: 'B', text: "Below the support level where retail stop-loss SELL orders are clustered.", correct: true, reason: "CORRECT! Retail buyers place stop losses below support. A stop loss on a buy is a SELL order. Institutions drive price here to absorb these sells at a discount!" },
        { id: 'C', text: "Exactly in the middle at equilibrium.", correct: false, reason: "The midpoint has low liquidity density. Institutions need massive stop clusters located beyond extremes." }
      ],
      memoryTrick: "“Your stop is their entry.”"
    },
    {
      id: 2,
      title: "Puzzle 02: Stop Hunt Cascade vs. Real Breakdown",
      concept: "The Cascade Waterfall (Figure 5)",
      realImage: "/assets/smc/ch1/image5.png",
      caption: "Figure 5. Chain reaction: Each triggered sell stop becomes a market order that knocks price into the next tier of stops until institutions absorb all volume.",
      scenario: "Price punches below the swing low. The first stop losses trigger as market sell orders, knocking price into the next cluster. What is this phenomenon and who is buying?",
      options: [
        { id: 'A', text: "It is normal market panic; nobody is buying.", correct: false, reason: "Every trade has two sides. While retail stops are executing as forced market sells, institutions are quietly absorbing them." },
        { id: 'B', text: "It is an engineered stop-hunt cascade: Smart Money places passive limit buy orders to absorb all panic sell volume.", correct: true, reason: "CORRECT! This order cascade clears the order book. Smart Money buys huge volume at the lowest prices, setting up the markup rally!" },
        { id: 'C', text: "It means the cryptocurrency has reached zero value.", correct: false, reason: "Liquidity sweeps happen on healthy, active institutional markets like Bitcoin and Forex every single day." }
      ],
      memoryTrick: "“Price moves from liquidity to liquidity.”"
    },
    {
      id: 3,
      title: "Puzzle 03: Wick Sweep vs Body Close (Fakeout vs BOS)",
      concept: "Validation Mechanics (Figure 6)",
      realImage: "/assets/smc/ch1/image6.png",
      caption: "Figure 6. The body decides. A wick through the line is a sweep; a full candle body close beyond it is a valid Break of Structure.",
      scenario: "A candle pierces through a key resistance level with a long wick, but the candle BODY closes firmly back below the line. How does an institutional SMC trader classify this?",
      options: [
        { id: 'A', text: "A confirmed breakout! Buy with maximum leverage immediately.", correct: false, reason: "Entering on a wick breakout is the number one beginner trap. The body failed to close above!" },
        { id: 'B', text: "A Liquidity Sweep (Fakeout): Smart Money triggered buy-stops and is preparing to reverse downwards.", correct: true, reason: "100% CORRECT! 'Wick takes the cash, body breaks the path.' A wick beyond the line without a body close is a sweep, not a break." },
        { id: 'C', text: "A Fair Value Gap.", correct: false, reason: "An FVG is a 3-candle imbalance void, not a single wick pierce." }
      ],
      memoryTrick: "“Wick is a sweep, close is a break — wait for the body for safety's sake.”"
    },
    {
      id: 4,
      title: "Puzzle 04: The 3-Candle Fair Value Gap (FVG)",
      concept: "Points of Interest (Figure 10)",
      realImage: "/assets/smc/ch1/image10.png",
      caption: "Figure 10. Fair Value Gap (FVG) between Candle 1 High and Candle 3 Low, featuring the 50% Consequent Encroachment (CE) midline.",
      scenario: "During an aggressive bullish rally, three candles form consecutively. Between which two points does the institutional Fair Value Gap (FVG) exist?",
      options: [
        { id: 'A', text: "Between the High of Candle 1 and the Low of Candle 3.", correct: true, reason: "PERFECT! The untraded void between Candle 1's high and Candle 3's low is the Bullish Fair Value Gap. Price often retraces to the 50% CE line before continuing." },
        { id: 'B', text: "Between the open and close of the middle candle.", correct: false, reason: "Candle 2's body is the displacement candle, but the gap is the space left untraded between Candle 1 and Candle 3." },
        { id: 'C', text: "Across the entire 10-candle range.", correct: false, reason: "An FVG is strictly a 3-candle imbalance." }
      ],
      memoryTrick: "“Candle 1 and Candle 3 don't meet — Smart Money fills the empty street.”"
    }
  ];

  // Chapter 2 Puzzles with Real Drawings
  const chapter2Puzzles = [
    {
      id: 1,
      title: "Puzzle 01: The Three-Candle Structural Formation",
      concept: "Geometry of Swings (Figure 5)",
      realImage: "/assets/smc/ch2/image5.png",
      caption: "Figure 5. The three-candle formation. A and B are valid swings because the middle candle has the extreme point. C and D are not swings.",
      scenario: "Look at the four formations A, B, C, and D in the real drawing. Why are A and B valid swing points while C and D are invalid?",
      options: [
        { id: 'A', text: "Because A and B have green candles only.", correct: false, reason: "Candle color does NOT matter. Only the extreme wick tip matters." },
        { id: 'B', text: "Because in A and B, the middle candle has the true extreme point (highest high or lowest low) compared to both neighbours.", correct: true, reason: "CORRECT! Rule: A swing requires three candles where the middle candle has the extreme high (swing high) or extreme low (swing low)." },
        { id: 'C', text: "Because C and D are inside an order block.", correct: false, reason: "Structure takes precedence over order blocks. C and D fail the 3-candle geometry test." }
      ],
      memoryTrick: "“Three candles, extreme in the middle.”"
    },
    {
      id: 2,
      title: "Puzzle 02: The Red Line Validation Theorem",
      concept: "Potential vs Validated Swings (Figure 8)",
      realImage: "/assets/smc/ch2/image8.png",
      caption: "Figure 8. Potential swing versus validated swing using the red line. For a swing high, you must see a body close below the lowest point of the swing candle.",
      scenario: "A 3-candle swing high shape has printed on the 4-hour chart. You draw the Red Line at the lowest point of the swing candle. When does this candidate officially become a VALIDATED swing high?",
      options: [
        { id: 'A', text: "Immediately as soon as Candle 3 finishes printing.", correct: false, reason: "No! Until price closes below the red line, price can keep rising and invalidate the candidate high." },
        { id: 'B', text: "When a wick pokes below the red line.", correct: false, reason: "A wick touch is only a test, not a confirmation." },
        { id: 'C', text: "Only after a subsequent candle closes with its full BODY below the red line.", correct: true, reason: "100% CORRECT! Roman's rule: 'No close below the red line, no swing.' This removes 90% of retail false swing markings." }
      ],
      memoryTrick: "“No close below the red line base means don't you mark a swing in haste.”"
    },
    {
      id: 3,
      title: "Puzzle 03: The Range: Trading Inside vs Waiting for Escape",
      concept: "Dealing Ranges (Figure 9)",
      realImage: "/assets/smc/ch2/image9.png",
      caption: "Figure 9. Work inside the range. Wait for price to break out of it. Internal wiggles are not structural swings.",
      scenario: "Price breaks below a swing low, defining a new structural dealing range. While price stays inside this range, several small peaks and valleys form. What should you mark?",
      options: [
        { id: 'A', text: "Mark every peak as a new structural swing high.", correct: false, reason: "Beginner trap! Those are internal movements, not structural swings." },
        { id: 'B', text: "Mark nothing inside the range. Wait for price to break cleanly OUT of the range boundaries.", correct: true, reason: "PERFECT! Roman and the host both emphasized: 'Inside the range, mark nothing.' You trade only when price breaks out or into POIs." },
        { id: 'C', text: "Switch to 1-minute and take 50 scalps.", correct: false, reason: "Overtrading internal range noise destroys capital and causes emotional tilt." }
      ],
      memoryTrick: "“Inside the range, mark nothing.”"
    },
    {
      id: 4,
      title: "Puzzle 04: The Extreme Point Rule",
      concept: "Finding the Valid Swing High (Figure 11)",
      realImage: "/assets/smc/ch2/image11.png",
      caption: "Figure 11. To find a swing high between two swing lows, look ONLY between those two lows and pick the highest extreme candle.",
      scenario: "Price breaks down and establishes a new swing low. To locate the valid structural swing high between the old low and the new low, what is the exact rule?",
      options: [
        { id: 'A', text: "Pick the candle with the highest trading volume.", correct: false, reason: "Volume does not define structural swing location." },
        { id: 'B', text: "Look strictly between the two swing lows and pick the absolute highest point (extreme candle).", correct: true, reason: "CORRECT! The extreme point rule states that the structural swing high is the absolute highest candle between the two lows." },
        { id: 'C', text: "Guess based on the 50% Fibonacci mark.", correct: false, reason: "Fibonacci is for measuring premium/discount, not for finding structural swing anchors." }
      ],
      memoryTrick: "“Extreme point between the lows defines the swing that Roman knows.”"
    }
  ];

  const puzzles = chapterId === 'chapter-2' ? chapter2Puzzles : chapter1Puzzles;
  const currentPuzzle = puzzles[currentPuzzleIndex];

  const handleSelectOption = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (opt.correct) {
      setScore(prev => prev + 1);
      if (currentPuzzle.memoryTrick && !unlockedTricks.includes(currentPuzzle.memoryTrick)) {
        setUnlockedTricks(prev => [...prev, currentPuzzle.memoryTrick]);
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

  const handleRestart = () => {
    setCurrentPuzzleIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setGameCompleted(false);
  };

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-[#090d16] border-2 border-amber-500/40 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2a2e39]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
              {chapterId === 'chapter-2' ? 'Chapter 02 Backtesting Challenge' : 'Chapter 01 Backtesting Challenge'}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Puzzle {currentPuzzleIndex + 1} of {puzzles.length}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-amber-400" />
            <span>{currentPuzzle.title}</span>
          </h3>
          <p className="text-xs font-mono text-amber-300/80">
            {currentPuzzle.concept}
          </p>
        </div>

        {/* Score & Reset */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setInvertImage(!invertImage)}
            className="px-3 py-1.5 rounded-xl bg-[#131722] border border-[#2a2e39] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5"
          >
            {invertImage ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{invertImage ? 'Paper' : 'Dark'}</span>
          </button>
          
          <div className="px-3.5 py-1.5 rounded-xl bg-[#131722] border border-[#2a2e39] text-center font-mono">
            <span className="text-[9px] text-slate-400 uppercase block">Score</span>
            <span className="text-sm font-black text-amber-400">{score} / {puzzles.length}</span>
          </div>

          <button
            onClick={handleRestart}
            className="p-2 rounded-xl bg-[#131722] hover:bg-slate-800 border border-[#2a2e39] text-slate-300 hover:text-white"
            title="Restart Challenge"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scenario & Real Drawing Card */}
      <div className="space-y-4">
        <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#131722] p-3.5 rounded-xl border border-[#2a2e39]">
          <strong className="text-amber-400">Trading Situation:</strong> {currentPuzzle.scenario}
        </p>

        {/* Real Drawing Image Card */}
        <div className="rounded-2xl bg-[#060913] border border-[#2a2e39] overflow-hidden">
          <div className="p-3 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between text-xs font-mono">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" /> Official Textbook Drawing
            </span>
            <span className="text-slate-400 text-[11px] font-mono">Study the labels and price action carefully</span>
          </div>

          <div className={`p-4 flex items-center justify-center min-h-[220px] transition-colors ${invertImage ? 'bg-white' : 'bg-[#070b12]'}`}>
            <img
              src={currentPuzzle.realImage}
              alt={currentPuzzle.title}
              className={`max-w-full max-h-[300px] object-contain rounded transition-all ${
                invertImage ? 'filter-none' : 'filter invert hue-rotate-180 brightness-95 contrast-125'
              }`}
            />
          </div>

          <div className="p-3 bg-[#0d121f] border-t border-[#2a2e39] text-[11px] font-mono text-slate-400">
            {currentPuzzle.caption}
          </div>
        </div>
      </div>

      {/* Options Selection */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#131722] border border-[#2a2e39] space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Select the Institutional Trade Decision:</span>
        </div>

        <div className="space-y-2.5">
          {currentPuzzle.options.map((opt) => {
            const isSelected = selectedOption?.id === opt.id;
            let btnClass = "bg-[#090d16] border-[#2a2e39] text-slate-300 hover:bg-[#1a202e] hover:border-amber-500/40";

            if (isAnswered) {
              if (opt.correct) {
                btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
              } else if (isSelected && !opt.correct) {
                btnClass = "bg-red-500/20 border-red-500 text-red-300 font-bold";
              } else {
                btnClass = "bg-[#090d16] border-[#2a2e39] text-slate-500 opacity-50";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt)}
                disabled={isAnswered}
                className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-sans flex items-start gap-3 transition-all ${btnClass}`}
              >
                <span className={`w-6 h-6 rounded-lg font-mono font-bold flex items-center justify-center shrink-0 text-xs ${
                  isAnswered && opt.correct
                    ? 'bg-emerald-500 text-dark-950 font-black'
                    : isAnswered && isSelected && !opt.correct
                    ? 'bg-red-500 text-white'
                    : 'bg-[#131722] text-amber-400 border border-[#2a2e39]'
                }`}>
                  {opt.id}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isAnswered && (
          <div className="space-y-4 pt-3 animate-fadeIn">
            <div className={`p-4 rounded-xl border ${
              selectedOption.correct 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
                : 'bg-red-500/10 border-red-500/40 text-red-300'
            }`}>
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase mb-1">
                {selectedOption.correct ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>✓ Correct Institutional Analysis!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span>⚠️ Retail Execution Trap Detected</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-200">
                {selectedOption.reason}
              </p>

              {currentPuzzle.memoryTrick && (
                <div className="mt-3 p-3 rounded-lg bg-[#090d16] border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Memory Trick Unlocked:</strong> {currentPuzzle.memoryTrick}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleNextPuzzle}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-dark-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>{currentPuzzleIndex < puzzles.length - 1 ? 'Next Puzzle' : 'Claim Mastery Trophy'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Unlocked Tricks Vault */}
      {unlockedTricks.length > 0 && (
        <div className="p-4 rounded-xl bg-[#060913] border border-[#2a2e39] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Unlocked Memory Rhymes ({unlockedTricks.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {unlockedTricks.map((trick, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-[#131722] border border-amber-500/30 text-amber-300 text-xs font-mono">
                {trick}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {gameCompleted && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-[#090d16] border-2 border-amber-500 text-center space-y-5 shadow-2xl animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Institutional Challenge Completed!
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              You scored <strong className="text-amber-400 font-mono">{score} out of {puzzles.length}</strong> using real textbook chart drawings.
            </p>
            <button
              onClick={handleRestart}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-black text-xs uppercase tracking-wider transition-all"
            >
              Replay Challenge
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
