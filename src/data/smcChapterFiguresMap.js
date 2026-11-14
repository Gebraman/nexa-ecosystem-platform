// Institutional Figures Mapping for Nexa SMC Academy
// Connects real textbook drawings to sections and Word (.doc) exports

export const chapterFiguresMap = {
  'chapter-1': {
    'ch1-sec1': [
      {
        figNum: '1',
        src: '/assets/smc/ch1/image1.png',
        title: 'Smart Money Concepts: Core Law & Footprint',
        caption: 'Price moves from liquidity pool to liquidity pool (BSL <--> SSL). Retail stop losses become the liquidity Smart Money uses to fill its orders.',
        rule: 'Never trade against macro liquidity flow. Identify where the stops sit before entering.'
      }
    ],
    'ch1-sec3': [
      {
        figNum: '2',
        src: '/assets/smc/ch1/image2.png',
        title: 'Smart Money vs Retail: The $10 Billion Order Problem',
        caption: 'Large institutions cannot simply click "Market Buy" without pushing price 40% against themselves. They MUST engineer retail stop-loss sells to absorb their massive volume.',
        rule: 'Our goal as retail traders: get in where they get in, so we ride the wave with them.'
      }
    ],
    'ch1-sec4': [
      {
        figNum: '3',
        src: '/assets/smc/ch1/image3.png',
        title: 'Anatomy of Liquidity Pools (BSL vs SSL)',
        caption: 'Under every swing low there is a pool of sell orders (SSL). Above every swing high there is a pool of buy orders (BSL).',
        rule: 'Price goes from liquidity to liquidity: taking stops from longs, then taking stops from shorts.'
      }
    ],
    'ch1-sec5': [
      {
        figNum: '4',
        src: '/assets/smc/ch1/image4.png',
        title: 'The Retail Trap: Buying Support with Stops Underneath',
        caption: 'Retail traders view swing lows as strong support and place stops just beneath them. Smart Money pushes price down into that area, forcing retail to sell, then expands upwards.',
        rule: 'Your stop is their entry.'
      }
    ],
    'ch1-sec6': [
      {
        figNum: '5',
        src: '/assets/smc/ch1/image5.png',
        title: 'Manipulation Tactic 1: The Stop-Hunt Cascade (Waterfall Execution)',
        caption: 'Chain reaction: The first stop sells trigger, pushing price lower into the next tier of stops. Smart Money absorbs the entire waterfall at a deep discount before markup.',
        rule: 'Look for hammer candles with long rejection wicks indicating order absorption.'
      }
    ],
    'ch1-sec7': [
      {
        figNum: '6',
        src: '/assets/smc/ch1/image6.png',
        title: 'Wick Sweep vs Body Close: Fakeout or Valid Break?',
        caption: 'A wick through the line is a liquidity sweep. A full candle body close beyond it is a valid Break of Structure.',
        rule: 'Wick takes the cash, body breaks the path. Never enter on a wick breakout.'
      }
    ],
    'ch1-sec8': [
      {
        figNum: '7',
        src: '/assets/smc/ch1/image7.png',
        title: 'Richard Wyckoff\'s Foundation: Accumulation Schematic',
        caption: '100-year-old market psychology: The range is where institutions accumulate positions quietly, using the Spring (liquidity sweep) to trigger retail panic before the real markup move.',
        rule: 'Everything in the market is psychology designed to generate liquidity.'
      }
    ],
    'ch1-sec9': [
      {
        figNum: '8',
        src: '/assets/smc/ch1/image8.png',
        title: 'Worked Real Chart Example: 1:6.5 Risk-to-Reward Execution',
        caption: 'Daily POI arrival -> 1-Hour Liquidity Sweep -> Market Structure Shift (MSS) -> Limit Order entry on retest. Target opposite BSL.',
        rule: 'High time frame for direction, low time frame for entry.'
      }
    ],
    'ch1-sec10': [
      {
        figNum: '9',
        src: '/assets/smc/ch1/image9.png',
        title: 'The 5 Mandatory Entry Rules & Alert Architecture',
        caption: 'Do not place orders beforehand. Set Alert 1 at POI. When alerted, drop to LTF. Wait for sweep and shift. Set limit on retest.',
        rule: 'Wait for the alert, then look.'
      }
    ],
    'ch1-sec12': [
      {
        figNum: '10',
        src: '/assets/smc/ch1/image10.png',
        title: 'Points of Interest: Fair Value Gap (FVG) & Order Block (OB)',
        caption: 'Left: 3-candle FVG gap with 50% Consequent Encroachment (CE). Right: Order Block (last opposing candle before aggressive move).',
        rule: 'FVG and liquidity are the easiest and most reliable POIs to trade.'
      }
    ]
  },

  'chapter-2': {
    'ch2-sec2': [
      {
        figNum: '1',
        src: '/assets/smc/ch2/image1.png',
        title: 'The Top-Down Method in Five Steps',
        caption: 'Figure 1. 1) HTF structure -> 2) HTF POI -> 3) Price enters POI -> 4) Switch to LTF -> 5) LTF reversal pattern and entry.',
        rule: 'Real charts are messier than teaching schematics; top-down discipline keeps you safe.'
      },
      {
        figNum: '2',
        src: '/assets/smc/ch2/image2.png',
        title: 'A Bearish Fair Value Gap (FVG)',
        caption: 'Figure 2. Three candles: lowest point of Candle 1 and highest point of Candle 3 leave an untraded gap. Wait for price to fill past the 50% midline.',
        rule: 'Wait for price to fill past the middle line of the FVG for higher confidence.'
      },
      {
        figNum: '3',
        src: '/assets/smc/ch2/image3.png',
        title: 'Entering on Lower Timeframe: Smaller Stop Gives Bigger RR',
        caption: 'Figure 3. On the 15m chart, stop loss sits beyond the tight sweep high. Same price move produces 5.5:1 or 10:1 RR instead of 2:1 on 4H.',
        rule: 'Lower timeframe gives higher reward but requires accepting the risk of over-swings.'
      }
    ],
    'ch2-sec3': [
      {
        figNum: '4',
        src: '/assets/smc/ch2/image4.png',
        title: 'Structural Swing Points vs Internal Swings',
        caption: 'Figure 4. Circled swings are structural; crossed swings are internal movements. The big high is structural; small ones inside the leg are noise.',
        rule: 'Marking internal swings as reversals is the classic beginner trap.'
      }
    ],
    'ch2-sec4': [
      {
        figNum: '5',
        src: '/assets/smc/ch2/image5.png',
        title: 'The Three-Candle Structural Formation',
        caption: 'Figure 5. A and B are valid swings because the middle candle has the true extreme point. C and D are not swings.',
        rule: 'Only the extreme wick tip of the middle candle counts; open and close do not matter for swing geometry.'
      }
    ],
    'ch2-sec5': [
      {
        figNum: '6',
        src: '/assets/smc/ch2/image6.png',
        title: 'The No-Overlap Rule',
        caption: 'Figure 6. Structural swing points cannot overlap: the 3 candles of a swing high and the 3 candles of a swing low must be separate sets.',
        rule: 'Swings with distance between them are stronger and more reliable.'
      }
    ],
    'ch2-sec7': [
      {
        figNum: '7',
        src: '/assets/smc/ch2/image7.png',
        title: 'Liquidity Sits Beyond Swing Levels & Sweep Takes It',
        caption: 'Figure 7. BSL sits above swing highs; SSL sits below swing lows. A quick move below support is a liquidity sweep, not a breakdown.',
        rule: 'Structural swings mark where liquidity pools exist.'
      }
    ],
    'ch2-sec8': [
      {
        figNum: '8',
        src: '/assets/smc/ch2/image8.png',
        title: 'Potential Swing vs Validated Swing (Red Line Rule)',
        caption: 'Figure 8. Draw the Red Line at the lowest point of the swing candle. The swing is ONLY potential until a subsequent candle closes below that red line.',
        rule: 'No close below the red line base means don\'t mark a swing in haste.'
      }
    ],
    'ch2-sec10': [
      {
        figNum: '9',
        src: '/assets/smc/ch2/image9.png',
        title: 'Work Inside the Range: Wait for Price to Break Out',
        caption: 'Figure 9. Between the latest structural high and low, mark nothing. Wait for price to break out before establishing new swings.',
        rule: 'Inside the range, mark nothing.'
      }
    ],
    'ch2-sec11': [
      {
        figNum: '10',
        src: '/assets/smc/ch2/image10.png',
        title: 'Wick vs Body Close: Sweep or Break?',
        caption: 'Figure 10. A wick beyond a swing high is a liquidity sweep. A full candle body close beyond it is a genuine Break of Structure.',
        rule: 'Body decides the break; wick takes the liquidity.'
      },
      {
        figNum: '11',
        src: '/assets/smc/ch2/image11.png',
        title: 'The Extreme Point Rule',
        caption: 'Figure 11. To find a swing high between two swing lows, look strictly between them and pick the absolute highest point (extreme candle).',
        rule: 'Pick the extreme candle between the two confirmed lows.'
      }
    ],
    'ch2-sec12': [
      {
        figNum: '12',
        src: '/assets/smc/ch2/image12.png',
        title: 'The Cycle You Repeat on Every Chart',
        caption: 'Figure 12. Mark range -> Do nothing inside -> Wait for breakout -> Find extreme point -> Red line confirmation -> Mark new range and repeat.',
        rule: 'Train your eyes with boring Bar Replay on historical charts before taking any live trades.'
      }
    ]
  },

  'chapter-3': {
    'ch3-sec1': [
      {
        figNum: '1',
        src: '/assets/smc/ch3/image1.png',
        title: 'The Chapter in One Line: Conceptual Roadmap',
        caption: 'Figure 1. Swings -> States -> Range Box -> CHoCH -> Fake CHoCH -> Sweeps -> OTE Zones -> Confirmations.',
        rule: 'Market structure is the skeleton of price. If you get structure wrong, everything else fails.'
      }
    ],
    'ch3-sec2': [
      {
        figNum: '2',
        src: '/assets/smc/ch3/image2.png',
        title: 'Break of Structure (BOS): Bullish vs Bearish Trend Confirmation',
        caption: 'Figure 2. Dashed lines show where each Break of Structure happens: price closes with its body beyond the previous swing point.',
        rule: 'A trend remains active until its protecting swing is broken by a candle body close.'
      }
    ],
    'ch3-sec3': [
      {
        figNum: '3',
        src: '/assets/smc/ch3/image3.png',
        title: 'The Range: Draw a Box and Wait for Clean Breakout',
        caption: 'Figure 3. Left: Beginner trap of marking every swing inside a range. Right: Draw a box around the range and wait for a clean body close OUT of the box.',
        rule: 'RANGE: No structure inside. Dismiss every break in the box.'
      }
    ],
    'ch3-sec4': [
      {
        figNum: '4',
        src: '/assets/smc/ch3/image4.png',
        title: 'Change of Character (CHoCH): The Two-Beat Reversal Rule',
        caption: 'Figure 4. Beat 1: The CHoCH warning through the higher low. Beat 2: A second break lower confirms the new bearish trend.',
        rule: 'CHoCH is the knock; the second break is the door opening.'
      }
    ],
    'ch3-sec5': [
      {
        figNum: '5',
        src: '/assets/smc/ch3/image5.png',
        title: 'The Fake Change of Character',
        caption: 'Figure 5. Price breaks the low, then immediately makes a new high. The CHoCH was fake, and the move was just a normal higher low.',
        rule: 'If no second break confirms, the old trend remains active.'
      }
    ],
    'ch3-sec6': [
      {
        figNum: '6',
        src: '/assets/smc/ch3/image6.png',
        title: 'The Body Decides: Wick Sweep vs Body BOS',
        caption: 'Figure 6. The body decides. A wick through the line is a sweep; a body close is a BOS (with the trend) or a CHoCH (against it).',
        rule: 'The body decides. Never mark structure on wicks.'
      }
    ],
    'ch3-sec7': [
      {
        figNum: '7',
        src: '/assets/smc/ch3/image7.png',
        title: 'Premium & Discount Zones, Equilibrium (0.5) and OTE',
        caption: 'Figure 7. Look to buy in discount below 0.5; sell in premium above 0.5. The institutional sweet spot is 0.62 to 0.79.',
        rule: 'The zone is where to look, not where to click.'
      }
    ],
    'ch3-sec8': [
      {
        figNum: '8',
        src: '/assets/smc/ch3/image8.png',
        title: 'Reading a Big Chart: Slow Markets Draw Huge Structures',
        caption: 'Figure 8. A slow market draws few wide structures; a fast market draws many small ones.',
        rule: 'Patience over impatience: wait for macro structures to resolve.'
      }
    ],
    'ch3-sec9': [
      {
        figNum: '9',
        src: '/assets/smc/ch3/image9.png',
        title: 'Worked Example: The SUI Story in Six Numbered Steps',
        caption: 'Figure 9. Step 1 Range -> Step 2 Sweep Low -> Step 3 Return inside -> Step 4 Retest -> Step 5 BOS -> Step 6 Explosive Markup.',
        rule: 'Study schematic: range sweep to opposite liquidity target.'
      }
    ],
    'ch3-sec10': [
      {
        figNum: '10',
        src: '/assets/smc/ch3/image10.png',
        title: 'Extra Confirmations: RSI Divergence & Compression Flags',
        caption: 'Figure 10. Left: RSI makes lower high while price makes higher high (bearish divergence). Right: Compression builds resting liquidity pools.',
        rule: 'Indicators provide confirmation only; market structure is king.'
      }
    ],
    'ch3-sec11': [
      {
        figNum: '11',
        src: '/assets/smc/ch3/image11.png',
        title: 'Better Entry Price Gives More Reward (Asymmetric RR)',
        caption: 'Figure 11. A better entry price gives more reward for the same risk. Skip trades below about 2.5 risk-to-reward.',
        rule: 'Asymmetric reward: 1:3 RR pays for three losses.'
      }
    ],
    'ch3-sec12': [
      {
        figNum: '12',
        src: '/assets/smc/ch3/image12.png',
        title: 'The Journal Loop: Psychology of Missed Trades',
        caption: 'Figure 12. Plan -> Take or Miss -> Log in Journal -> Review -> Find Patterns -> Adjust.',
        rule: 'A missed trade costs zero dollars; a FOMO trade costs your account.'
      }
    ],
    'ch3-sec13': [
      {
        figNum: '13',
        src: '/assets/smc/ch3/image13.png',
        title: 'Balance Price Range (BPR) & Touch vs Bar-Close Alerts',
        caption: 'Figure 13. Left: two overlapping Fair Value Gaps create a Balance Price Range. Right: touch alert versus bar-close alert.',
        rule: 'Bar-close alerts prevent jumping into unfinished candles.'
      },
      {
        figNum: '14',
        src: '/assets/smc/ch3/image14.png',
        title: 'Top-Down Multi-Timeframe Alignment',
        caption: 'Figure 14. Top-down: Monthly and Weekly for the macro bias, 4 Hour for structure, 15 Minute or 1 Hour for the entry.',
        rule: 'Align all three timeframe layers before placing risk.'
      }
    ],
    'ch3-sec14': [
      {
        figNum: '15',
        src: '/assets/smc/ch3/image15.png',
        title: 'Six-Step Routine for Any Structure Puzzle',
        caption: 'Figure 15. A systematic six-step routine to analyze any structure puzzle on historical or live charts.',
        rule: 'Follow the 6 steps methodically on every chart.'
      }
    ],
    'ch3-sec16': [
      {
        figNum: '16',
        src: '/assets/smc/ch3/image16.png',
        title: 'Decision Flowchart: What to Do at a Swing Point',
        caption: 'Figure 16. What to do when price reaches a swing point: range, sweep, BOS, or CHoCH, and what each leads to.',
        rule: 'Follow the decision tree to execute with institutional discipline.'
      }
    ]
  }
};
