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
    'ch1-sec2': [
      {
        figNum: '2',
        src: '/assets/smc/ch1/image2.png',
        title: 'Smart Money vs Retail: The $10 Billion Order Problem',
        caption: 'Large institutions cannot simply click "Market Buy" without pushing price 40% against themselves. They MUST engineer retail stop-loss sells to absorb their massive volume.',
        rule: 'Our goal as retail traders: get in where they get in, so we ride the wave with them.'
      }
    ],
    'ch1-sec3': [
      {
        figNum: '2',
        src: '/assets/smc/ch1/image2.png',
        title: 'Institutional Order Flow Absorption Mechanism',
        caption: 'How algorithms push price down to create panic selling, absorbing retail supply before the real markup move.',
        rule: 'Price is engineered to create counter-party volume.'
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
        caption: '100-year-old market psychology: The range is where institutions quietly build their position using retail panic as liquidity before marking up price.',
        rule: 'The spring is a liquidity sweep of the range low. It creates the springboard for the markup.'
      }
    ],
    'ch1-sec9': [
      {
        figNum: '8',
        src: '/assets/smc/ch1/image8.png',
        title: 'Roman\'s 4-Step Master Sequence: Sweep, Shift, Retest, Entry',
        caption: 'Live chart sequence: 1. Higher timeframe liquidity swept -> 2. Lower timeframe structure shifts -> 3. Price pulls back to POI/FVG -> 4. Disciplined entry.',
        rule: 'Wait for the alert, confirm the shift, and let price return to discount.'
      }
    ],
    'ch1-sec10': [
      {
        figNum: '9',
        src: '/assets/smc/ch1/image9.png',
        title: 'Institutional Risk Rules: Why No DCA on Futures',
        caption: 'On leveraged futures contracts, Dollar-Cost Averaging into a losing trade leads to catastrophic margin liquidation. SMC requires strict stop losses and defined invalidation.',
        rule: 'Never average down on leverage. Accept the loss, collect statistics, and preserve capital.'
      }
    ],
    'ch1-sec11': [
      {
        figNum: '11',
        src: '/assets/smc/ch1/image11.png',
        title: 'Asymmetric Expectancy: The 1 to 3 Risk-to-Reward Math',
        caption: 'With 1:3 RR, a trader losing 55 out of 100 trades still generates +$8,000 net profit. Trade math, not ego.',
        rule: 'Aim for at least 1:3 RR on every setup. Never enter if target cannot deliver 3R.'
      }
    ],
    'ch1-sec12': [
      {
        figNum: '10',
        src: '/assets/smc/ch1/image10.png',
        title: 'Points of Interest: Order Blocks & Fair Value Gaps',
        caption: 'An Order Block is the last opposite candle before an aggressive expansion that broke structure. A Fair Value Gap is the 3-candle imbalance left behind.',
        rule: 'The 50% Consequent Encroachment (C.E.) of a Fair Value Gap is a prime entry trigger.'
      },
      {
        figNum: '12',
        src: '/assets/smc/ch1/image12.png',
        title: 'Fair Value Gap 3-Candle Imbalance Anatomy',
        caption: 'Clear gap between Candle 1 High and Candle 3 Low, representing algorithmic price inefficiency.',
        rule: 'Algorithms return to rebalance inefficient price delivery.'
      }
    ],
    'ch1-sec13': [
      {
        figNum: '13',
        src: '/assets/smc/ch1/image13.png',
        title: 'Top-Down Multi-Timeframe Alignment Matrix',
        caption: 'Matching HTF trend with LTF entry execution (Daily + 1H, 4H + 15m, 1H + 5m).',
        rule: 'High timeframe for direction, low timeframe for execution.'
      }
    ],
    'ch1-sec15': [
      {
        figNum: '14',
        src: '/assets/smc/ch1/image14.png',
        title: 'Institutional Pre-Trade Execution Checklist',
        caption: 'All 6 conditions must be satisfied before risking capital: HTF Structure, Key POI, Liquidity Sweep, LTF Shift, Retest, and RR >= 1:3.',
        rule: 'If all 6 criteria are not met, there is no trade. Discipline equals survival.'
      }
    ]
  },
  'chapter-2': {
    'ch2-sec1': [
      {
        figNum: '1',
        src: '/assets/smc/ch2/image1.png',
        title: 'Swing High & Swing Low Core Structure Definition',
        caption: 'Official Textbook Drawing 1: A Swing High requires a higher high flanked by two lower highs. A Swing Low requires a lower low flanked by two higher lows.',
        rule: 'Never mark a single candle high as a swing point without the left and right candle confirmation.'
      }
    ],
    'ch2-sec2': [
      {
        figNum: '2',
        src: '/assets/smc/ch2/image2.png',
        title: 'The Minimum 3-Candle Swing Formation Rule',
        caption: 'Official Textbook Drawing 2: The exact 3-candle rule for Swing Low and Swing High. Candle 2 forms the extreme point.',
        rule: 'Candle 2 must have its high strictly higher (or low strictly lower) than both Candle 1 and Candle 3.'
      }
    ],
    'ch2-sec3': [
      {
        figNum: '3',
        src: '/assets/smc/ch2/image3.png',
        title: 'Validating Structural Swings vs Internal Noise',
        caption: 'Official Textbook Drawing 3: Distinguishing major structural boundaries from minor noise within the swing legs.',
        rule: 'Ignore sub-structure swings that develop inside the parent swing leg range.'
      }
    ],
    'ch2-sec4': [
      {
        figNum: '4',
        src: '/assets/smc/ch2/image4.png',
        title: 'The Red Line Test: Verifying Swing Low Viability',
        caption: 'Official Textbook Drawing 4: Drawing a horizontal reference line at the candle close to test for valid structural integrity.',
        rule: 'If candle body closes beyond the red line, the swing point is confirmed.'
      }
    ],
    'ch2-sec5': [
      {
        figNum: '5',
        src: '/assets/smc/ch2/image5.png',
        title: 'The Red Line Test: Verifying Swing High Viability',
        caption: 'Official Textbook Drawing 5: Upward swing high red line test confirming buyer exhaustion and seller displacement.',
        rule: 'A valid swing high must displace lower with follow-through volume.'
      }
    ],
    'ch2-sec6': [
      {
        figNum: '6',
        src: '/assets/smc/ch2/image6.png',
        title: 'Equal Highs (EQH) and Equal Lows (EQL) Liquidity Magnets',
        caption: 'Official Textbook Drawing 6: Double tops and double bottoms represent engineered liquidity targets for institutional sweeps.',
        rule: 'Equal highs and lows are not support/resistance to trade from; they are targets to trade TOWARD.'
      }
    ],
    'ch2-sec7': [
      {
        figNum: '7',
        src: '/assets/smc/ch2/image7.png',
        title: 'Multi-Candle Complex Swing Formations',
        caption: 'Official Textbook Drawing 7: Multi-candle rounded tops and bottoms with nested structural swings.',
        rule: 'Complex consolidations resolve into single HTF swing points when zoomed out.'
      }
    ],
    'ch2-sec8': [
      {
        figNum: '8',
        src: '/assets/smc/ch2/image8.png',
        title: 'Live Chart Analysis: Identifying Swings on BTC/USD',
        caption: 'Official Textbook Drawing 8: Real-market structural swing mapping on Bitcoin 1-Hour chart.',
        rule: 'Always begin swing point mapping on the daily or 4-hour before executing on the 15-minute.'
      }
    ],
    'ch2-sec9': [
      {
        figNum: '9',
        src: '/assets/smc/ch2/image9.png',
        title: 'Break of Structure (BOS): Wick Sweep vs Candle Body Close',
        caption: 'Official Textbook Drawing 9: Clean illustration comparing a false wick break against a confirmed candle body close.',
        rule: 'No candle body close = no valid Break of Structure.'
      }
    ],
    'ch2-sec10': [
      {
        figNum: '10',
        src: '/assets/smc/ch2/image10.png',
        title: 'Change of Character (CHoCH): Early Trend Reversal Signal',
        caption: 'Official Textbook Drawing 10: First break of opposite swing structure signaling early trend shift.',
        rule: 'CHoCH is an early warning. Wait for a retest before committing capital.'
      }
    ],
    'ch2-sec11': [
      {
        figNum: '11',
        src: '/assets/smc/ch2/image11.png',
        title: 'Internal Sub-Structure vs Major Swing Legs',
        caption: 'Official Textbook Drawing 11: The relationship between micro internal swings and macro external structure.',
        rule: 'Do not confuse internal retracement swings with external trend direction.'
      }
    ],
    'ch2-sec12': [
      {
        figNum: '12',
        src: '/assets/smc/ch2/image12.png',
        title: 'Summary Checklist: Valid Structural Swing Criteria',
        caption: 'Official Textbook Drawing 12: Visual summary matrix of all mandatory swing point rules.',
        rule: 'Confirm: 3-candle rule, body close validation, and clear HTF context.'
      }
    ]
  },
  'chapter-3': {
    'ch3-sec1': [
      {
        figNum: '1',
        src: '/assets/smc/ch3/image1.png',
        title: 'The Two Market Conditions: Trending vs Ranging Consolidation',
        caption: 'Author Textbook Drawing 1: Left: Trending market with clear directional swings. Right: Sideways range with trapped retail liquidity.',
        rule: 'Never trade trend-continuation setups in a sideways market.'
      }
    ],
    'ch3-sec2': [
      {
        figNum: '2',
        src: '/assets/smc/ch3/image2.png',
        title: 'Uptrend Structure (HH / HL) and Downtrend Structure (LH / LL)',
        caption: 'Author Textbook Drawing 2: The anatomical definitions of Bullish Higher Highs and Bearish Lower Lows.',
        rule: 'A trend is valid until a swing point of the opposite type is closed beyond by a candle body.'
      }
    ],
    'ch3-sec3': [
      {
        figNum: '3',
        src: '/assets/smc/ch3/image3.png',
        title: 'The Danger of Sideways Ranges & The Beginner Trap',
        caption: 'Author Textbook Drawing 3: Highlighting how beginner traders over-trade and get chopped up inside consolidation boxes.',
        rule: 'Put a box around the range and step away until price breaks cleanly out.'
      }
    ],
    'ch3-sec4': [
      {
        figNum: '4',
        src: '/assets/smc/ch3/image4.png',
        title: 'Break of Structure (BOS): Bullish & Bearish Continuation',
        caption: 'Author Textbook Drawing 4: Demonstrating valid BOS where price closes beyond the previous structural swing point.',
        rule: 'A valid BOS confirms the trend is healthy and continuation is expected.'
      }
    ],
    'ch3-sec5': [
      {
        figNum: '5',
        src: '/assets/smc/ch3/image5.png',
        title: 'Candle Body Close vs Wick: The Golden BOS Rule',
        caption: 'Author Textbook Drawing 5: Comparing a wick poke against a definitive candle body close above the swing line.',
        rule: 'A wick past a high is a liquidity sweep. A full body close is a valid Break of Structure.'
      }
    ],
    'ch3-sec6': [
      {
        figNum: '6',
        src: '/assets/smc/ch3/image6.png',
        title: 'Change of Character (CHoCH): Trend Reversal Anatomy',
        caption: 'Author Textbook Drawing 6: Illustrating how the first break of the opposing swing low/high indicates an institutional shift.',
        rule: 'CHoCH is the first warning sign that the existing trend has ended.'
      }
    ],
    'ch3-sec7': [
      {
        figNum: '7',
        src: '/assets/smc/ch3/image7.png',
        title: 'Confirmed Swing Points: The Structural Validation Process',
        caption: 'Author Textbook Drawing 7: How a swing point becomes permanently locked only AFTER the subsequent BOS occurs.',
        rule: 'A Higher Low is only confirmed once price successfully breaks above the previous Higher High.'
      }
    ],
    'ch3-sec8': [
      {
        figNum: '8',
        src: '/assets/smc/ch3/image8.png',
        title: 'Major Swing Structure vs Minor Internal Structure',
        caption: 'Author Textbook Drawing 8: Highlighting the major swing legs in bold vs the noisy internal candles inside.',
        rule: 'Trade in the direction of the major swing structure; do not get blinded by internal chop.'
      }
    ],
    'ch3-sec9': [
      {
        figNum: '9',
        src: '/assets/smc/ch3/image9.png',
        title: 'Dealing Ranges & 50% Equilibrium (Discount vs Premium)',
        caption: 'Author Textbook Drawing 9: The 0.5 Fibonacci Equilibrium separating the Premium (expensive) from Discount (cheap) zones.',
        rule: 'Only buy in the Discount zone (below 50%); only sell in the Premium zone (above 50%).'
      }
    ],
    'ch3-sec10': [
      {
        figNum: '10',
        src: '/assets/smc/ch3/image10.png',
        title: 'Liquidity Sweeps Masquerading as False BOS',
        caption: 'Author Textbook Drawing 10: How institutions wick above equal highs to induce breakout buyers, then collapse.',
        rule: 'Beware of breakouts without strong impulse candle closes.'
      }
    ],
    'ch3-sec11': [
      {
        figNum: '11',
        src: '/assets/smc/ch3/image11.png',
        title: 'Multi-Timeframe Structural Cascades',
        caption: 'Author Textbook Drawing 11: How a 15-minute CHoCH acts as an internal pullback on the 4-Hour trend.',
        rule: 'Always align LTF reversals with HTF Points of Interest (POIs).'
      }
    ],
    'ch3-sec12': [
      {
        figNum: '12',
        src: '/assets/smc/ch3/image12.png',
        title: 'Step-by-Step Market Structure Mapping Protocol',
        caption: 'Author Textbook Drawing 12: The exact sequence: Identify HTF range -> Mark valid swings -> Identify BOS -> Locate Discount POI.',
        rule: 'Follow the protocol systematically on every asset.'
      }
    ],
    'ch3-sec13': [
      {
        figNum: '13',
        src: '/assets/smc/ch3/image13.png',
        title: 'Live Market Structure Walkthrough on EUR/USD',
        caption: 'Author Textbook Drawing 13: Real-world structure mapping application on live forex price action.',
        rule: 'Real charts are messy. Rely on the 3-candle rule and body close confirmation.'
      }
    ],
    'ch3-sec14': [
      {
        figNum: '14',
        src: '/assets/smc/ch3/image14.png',
        title: 'Structure Mapping Protocol & Trade Invalidation',
        caption: 'Author Textbook Drawing 14: Clear demarcation of structural invalidation levels.',
        rule: 'If the confirmed Higher Low is broken by a candle body close, your long bias is completely invalidated.'
      }
    ],
    'ch3-sec15': [
      {
        figNum: '15',
        src: '/assets/smc/ch3/image15.png',
        title: 'Common Structure Mistakes & How to Avoid Them',
        caption: 'Author Textbook Drawing 15: Visual guide to the top 5 mistakes: Marking wicks as BOS, trading inside ranges, and confusing internal swings.',
        rule: 'Audit your chart before placing an order.'
      }
    ],
    'ch3-sec16': [
      {
        figNum: '16',
        src: '/assets/smc/ch3/image16.png',
        title: 'Master Market Structure Summary Matrix',
        caption: 'Author Textbook Drawing 16: Complete reference taxonomy of all structure terminology, rules, and execution criteria.',
        rule: 'Memorize the core axioms: Wick sweeps, body breaks. Buy discount, sell premium.'
      }
    ]
  }
};
