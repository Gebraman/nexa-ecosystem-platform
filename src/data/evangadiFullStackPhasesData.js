export const evangadiFullStackPhasesData = [
  {
    id: "phase-1",
    phaseNumber: "Phase 1",
    title: "Phase 1: Building static websites using HTML, CSS & Bootstrap",
    shortTitle: "Building Static Websites",
    techStack: "HTML5 • CSS3 • Flexbox • Grid • Bootstrap 5",
    duration: "Weeks 1 – 8 (8 Weeks)",
    badgeColor: "border-amber-500/50 text-[#f39228] bg-amber-500/10",
    iconType: "html",
    description: "In this phase, you'll learn about the underlying structure of the web - HTML. You'll also learn how to apply styling to a website through CSS. To help you build websites faster and easier, you will learn the Bootstrap framework. Along the way, you'll also learn about VS Code editor and Chrome's Developer Tools.",
    capstone: "Apple Website Responsive Clone & Personal Engineering Portfolio",
    stats: {
      modulesCount: 5,
      zoomHours: "20+ Live Zoom Masterclass Hours",
      shortVideosCount: 55,
      totalExercises: 12
    },
    modules: [
      {
        id: "p1-m1",
        number: "01",
        title: "HTML5 Foundations & Semantic Web Architecture",
        tagline: "Master the fundamental skeletal architecture of the web, semantic elements, tables, forms, and accessibility.",
        zoomClasses: [
          {
            id: "z-html-1",
            title: "HTML Part 1 Masterclass - Zoom Full Session",
            duration: "3:14:08",
            youtubeId: "M8dQpAeqsbY",
            url: "https://youtu.be/M8dQpAeqsbY",
            description: "Deep dive into web fundamentals, dev environment setup (VS Code & Chrome DevTools), HTML document anatomy, headings, paragraphs, links, images, lists, and layout containers."
          },
          {
            id: "z-html-2",
            title: "HTML Part 2 Masterclass - Zoom Full Session",
            duration: "3:23:53",
            youtubeId: "NDLCZ_r58MY",
            url: "https://www.youtube.com/watch?v=NDLCZ_r58MY",
            description: "Comprehensive coverage of semantic HTML5 tags (header, nav, main, section, article, footer), HTML tables, complex forms, inputs, validation, and accessibility best practices."
          }
        ],
        shortVideos: [
          {
            id: "s-html-1",
            number: "01",
            title: "HTML Document Structure & Setup",
            duration: "12:40",
            youtubeId: "OicbXZ5tfow",
            url: "https://youtu.be/OicbXZ5tfow",
            summary: "Setting up a standard HTML5 starter file, understanding <!DOCTYPE html>, <html>, <head>, and <body> anatomy."
          },
          {
            id: "s-html-2",
            number: "02",
            title: "Head Metadata, Title & Character Encoding",
            duration: "10:15",
            youtubeId: "0eWdKTQE_ok",
            url: "https://youtu.be/0eWdKTQE_ok",
            summary: "Configuring <meta charset='UTF-8'>, viewport tags for mobile responsiveness, page titles, and favicon linking."
          },
          {
            id: "s-html-3",
            number: "03",
            title: "Headings (H1 to H6) & Paragraph Typography",
            duration: "11:20",
            youtubeId: "IPpON4L_rLg",
            url: "https://youtu.be/IPpON4L_rLg",
            summary: "Hierarchical heading usage for SEO and accessibility, paragraph tags <p>, line breaks <br>, and thematic breaks <hr>."
          },
          {
            id: "s-html-4",
            number: "04",
            title: "Inline Text Formatting & Emphasis Tags",
            duration: "09:45",
            youtubeId: "LiBFQNQ6Fks",
            url: "https://youtu.be/LiBFQNQ6Fks",
            summary: "Semantic difference between <strong> vs <b>, <em> vs <i>, <mark>, <small>, <sub>, and <sup>."
          },
          {
            id: "s-html-5",
            number: "05",
            title: "Hyperlinks, Anchor Tags & Navigation Targets",
            duration: "14:10",
            youtubeId: "6KLmXFCFnAw",
            url: "https://youtu.be/6KLmXFCFnAw",
            summary: "Anchor <a> tags, absolute vs relative URLs, target='_blank' with rel='noopener noreferrer', and section jump links."
          },
          {
            id: "s-html-6",
            number: "06",
            title: "Images, Responsive Attributes & Alt Text",
            duration: "13:30",
            youtubeId: "LoGakIQaB2A",
            url: "https://youtu.be/LoGakIQaB2A",
            summary: "The <img> tag, correct image paths, alt accessibility descriptions, width/height aspect ratios, and figure/figcaption."
          },
          {
            id: "s-html-7",
            number: "07",
            title: "Lists: Unordered, Ordered & Definition Lists",
            duration: "11:50",
            youtubeId: "JCREpmcB58k",
            url: "https://youtu.be/JCREpmcB58k",
            summary: "Building structured navigation and menus with <ul>, ordered step sequences with <ol>, and key-value terms with <dl>."
          },
          {
            id: "s-html-8",
            number: "08",
            title: "HTML Tables: Rows, Columns & Header Cells",
            duration: "18:25",
            youtubeId: "MwnZsTbkQXc",
            url: "https://youtu.be/MwnZsTbkQXc",
            summary: "Constructing tabular data using <table>, <thead>, <tbody>, <tr>, <th>, <td>, colspan, and rowspan attributes."
          },
          {
            id: "s-html-9",
            number: "09",
            title: "Semantic HTML5 Structural Tags",
            duration: "16:40",
            youtubeId: "NDLCZ_r58MY",
            url: "https://youtu.be/NDLCZ_r58MY",
            summary: "Why modern web standards replace generic <div> tags with <header>, <nav>, <main>, <article>, <section>, and <footer>."
          },
          {
            id: "s-html-10",
            number: "10",
            title: "HTML Form Foundations & Form Architecture",
            duration: "15:10",
            youtubeId: "zjaYRntdDGE",
            url: "https://youtu.be/zjaYRntdDGE",
            summary: "The <form> element, action and method attributes (GET vs POST), labeling inputs properly with <label for='...'>."
          },
          {
            id: "s-html-11",
            number: "11",
            title: "Form Input Types & User Controls",
            duration: "14:55",
            youtubeId: "IDibaq1AkaE",
            url: "https://youtu.be/IDibaq1AkaE",
            summary: "Working with text, email, password, number, tel, date, color, checkbox, and radio button inputs."
          },
          {
            id: "s-html-12",
            number: "12",
            title: "Drop-downs, Multi-line Text & Buttons",
            duration: "13:20",
            youtubeId: "ht5vkTm33_w",
            url: "https://youtu.be/ht5vkTm33_w",
            summary: "Creating dropdown selections with <select> and <option>, large message fields with <textarea>, and <button type='submit'>."
          },
          {
            id: "s-html-13",
            number: "13",
            title: "HTML5 Client-Side Form Validation",
            duration: "12:15",
            youtubeId: "nO3gomTl9Ng",
            url: "https://youtu.be/nO3gomTl9Ng",
            summary: "Validating user input natively using required, minlength, maxlength, pattern regex, and custom placeholder prompts."
          },
          {
            id: "s-html-14",
            number: "14",
            title: "Embedding Video, Audio & YouTube Iframes",
            duration: "15:40",
            youtubeId: "LuywXru29nM",
            url: "https://youtu.be/LuywXru29nM",
            summary: "The HTML5 <video controls> and <audio> elements, fallback sources, and embedding external media securely via <iframe>."
          },
          {
            id: "s-html-15",
            number: "15",
            title: "Block vs Inline Display & Containers",
            duration: "12:50",
            youtubeId: "bHGvq11p5zY",
            url: "https://youtu.be/bHGvq11p5zY",
            summary: "Understanding the natural browser rendering flow: block-level elements taking 100% width vs inline elements taking content width."
          },
          {
            id: "s-html-16",
            number: "16",
            title: "HTML Entities, Accessibility & Best Practices",
            duration: "14:15",
            youtubeId: "6kgcIsvRD80",
            url: "https://youtu.be/6kgcIsvRD80",
            summary: "Writing special characters with entities (&copy;, &nbsp;), W3C validation tools, and structuring clean code for production."
          }
        ],
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexa Academy - Semantic HTML5</title>
</head>
<body>
  <header>
    <nav>
      <a href="#home">Home</a>
      <a href="#courses">Courses</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <section id="hero">
      <h1>Learn Full-Stack Web Development</h1>
      <p>Master frontend and backend with senior engineering mentors.</p>
    </section>

    <section id="contact">
      <h2>Inquiry Form</h2>
      <form action="/submit" method="POST">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Enroll Now</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Nexa Ecosystem. All rights reserved.</p>
  </footer>
</body>
</html>`,
        homework: "Build a complete multi-page semantic website for a local tech service with working navigation, a table comparing service tiers, and an accessible contact form with required validation."
      },
      {
        id: "p1-m2",
        number: "02",
        title: "CSS3 Fundamentals, Selectors & Properties Deep Dive",
        tagline: "Transform raw HTML with modern CSS3 styling, the Box Model, typography, positioning, transitions, and CSS variables.",
        zoomClasses: [
          {
            id: "z-css-1",
            title: "Basics of CSS Masterclass - Zoom Full Session",
            duration: "3:08:48",
            youtubeId: "WBbF0HJJOYc",
            url: "https://youtu.be/WBbF0HJJOYc",
            description: "CSS syntax, inline vs internal vs external stylesheets, element/class/ID selectors, colors, backgrounds, the Box Model (margin, padding, border), and box-sizing."
          },
          {
            id: "z-css-2",
            title: "CSS Properties Masterclass - Zoom Full Session",
            duration: "3:32:19",
            youtubeId: "o-HwLnSDTDY",
            url: "https://youtu.be/o-HwLnSDTDY",
            description: "Comprehensive deep dive into typography, web fonts, display (block, inline, inline-block, none), positioning (relative, absolute, fixed, sticky), z-index, pseudo-classes, pseudo-elements, transitions, transforms, and CSS custom variables."
          }
        ],
        shortVideos: [
          {
            id: "s-css-1",
            number: "01",
            title: "Introduction to CSS & Syntax Rules",
            duration: "10:30",
            youtubeId: "SzgchikrLr4",
            url: "https://youtu.be/SzgchikrLr4",
            summary: "What is CSS, rule-set anatomy: selectors, declarations, properties, and values."
          },
          {
            id: "s-css-2",
            number: "02",
            title: "Three Ways to Add CSS: Inline, Internal & External",
            duration: "11:45",
            youtubeId: "vIyL4BfwSos",
            url: "https://youtu.be/vIyL4BfwSos",
            summary: "Comparing inline style attributes, <style> tags, and external .css files with <link rel='stylesheet'>."
          },
          {
            id: "s-css-3",
            number: "03",
            title: "Basic Selectors: Element, Class & ID",
            duration: "13:20",
            youtubeId: "SN30JK-5PsM",
            url: "https://youtu.be/SN30JK-5PsM",
            summary: "Targeting elements by tag name, class names (.btn), and unique IDs (#header), plus specificity weights."
          },
          {
            id: "s-css-4",
            number: "04",
            title: "Grouping, Combinators & Descendant Selectors",
            duration: "12:15",
            youtubeId: "86QjDzEd1oQ",
            url: "https://youtu.be/86QjDzEd1oQ",
            summary: "Grouping selectors with commas, descendant selectors (div p), child selectors (ul > li), and sibling combinators."
          },
          {
            id: "s-css-5",
            number: "05",
            title: "CSS Colors: Named, HEX, RGB, RGBA & HSL",
            duration: "14:10",
            youtubeId: "J90pTe0bBMw",
            url: "https://youtu.be/J90pTe0bBMw",
            summary: "Understanding color formats, hexadecimal values, alpha transparency with rgba(), and modern hsl()."
          },
          {
            id: "s-css-6",
            number: "06",
            title: "CSS Backgrounds: Color, Image, Repeat & Size",
            duration: "15:40",
            youtubeId: "Uuzb8yjaU4w",
            url: "https://youtu.be/Uuzb8yjaU4w",
            summary: "background-image, background-size: cover/contain, background-position, and linear gradients."
          },
          {
            id: "s-css-7",
            number: "07",
            title: "The CSS Box Model: Margin, Border, Padding & Content",
            duration: "16:50",
            youtubeId: "u_Jv94RJFig",
            url: "https://youtu.be/u_Jv94RJFig",
            summary: "The fundamental layout model of every HTML element: content box, padding space, border line, and outer margin."
          },
          {
            id: "s-css-8",
            number: "08",
            title: "Box Sizing Property: border-box vs content-box",
            duration: "12:30",
            youtubeId: "zmu_VhNLx8c",
            url: "https://youtu.be/zmu_VhNLx8c",
            summary: "Why * { box-sizing: border-box; } is the universal gold standard for predictable web layouts."
          },
          {
            id: "s-css-rec",
            number: "08+",
            title: "Recommended: Chrome DevTools CSS Inspection & Debugging",
            duration: "17:15",
            youtubeId: "x4q86IjJFag",
            url: "https://youtu.be/x4q86IjJFag",
            summary: "Using Chrome DevTools Elements panel, Computed styles tab, Box Model inspector, and live CSS property toggling."
          },
          {
            id: "s-css-p1",
            number: "09",
            title: "CSS Text Properties: Alignment, Decoration & Transform",
            duration: "13:40",
            youtubeId: "uh-jcIl_m8k",
            url: "https://youtu.be/uh-jcIl_m8k",
            summary: "text-align, text-decoration, text-transform (uppercase, capitalize), line-height, and letter-spacing."
          },
          {
            id: "s-css-p2",
            number: "10",
            title: "CSS Font Properties & Google Web Fonts Integration",
            duration: "14:25",
            youtubeId: "oGdQ7aM-qRM",
            url: "https://youtu.be/oGdQ7aM-qRM",
            summary: "font-family fallback stacks, font-weight, @import vs <link> for Google Fonts like Inter and Poppins."
          },
          {
            id: "s-css-p3",
            number: "11",
            title: "CSS Display: Block, Inline, Inline-Block & None",
            duration: "15:10",
            youtubeId: "QVRCtX1yKdA",
            url: "https://youtu.be/QVRCtX1yKdA",
            summary: "Controlling element rendering behavior: making span accept margins/padding with inline-block, hiding elements with display: none."
          },
          {
            id: "s-css-p4",
            number: "12",
            title: "CSS Positioning: Static, Relative, Absolute, Fixed & Sticky",
            duration: "19:30",
            youtubeId: "szKfeNI-mvI",
            url: "https://youtu.be/szKfeNI-mvI",
            summary: "Absolute positioning relative to parent containers, fixed navigation headers, and sticky scroll banners."
          },
          {
            id: "s-css-p5",
            number: "13",
            title: "Z-Index & Stacking Contexts Explained",
            duration: "11:55",
            youtubeId: "pwaCADnx_Iw",
            url: "https://youtu.be/pwaCADnx_Iw",
            summary: "Layering elements along the 3D Z-axis, creating modal overlays, and troubleshooting stacking context traps."
          },
          {
            id: "s-css-p6",
            number: "14",
            title: "CSS Overflow: Visible, Hidden, Scroll & Auto",
            duration: "10:45",
            youtubeId: "teRjI-jfeS0",
            url: "https://youtu.be/teRjI-jfeS0",
            summary: "Handling overflowing text, creating custom scroll containers, and single-line text truncation with text-overflow: ellipsis."
          },
          {
            id: "s-css-p7",
            number: "15",
            title: "CSS Floats & Clearfix Mechanics",
            duration: "12:10",
            youtubeId: "o63_SjND94Q",
            url: "https://youtu.be/o63_SjND94Q",
            summary: "Historical float layouts (float: left), text wrapping around images, and the classic ::after clearfix hack."
          },
          {
            id: "s-css-p8",
            number: "16",
            title: "CSS Pseudo-Classes: :hover, :active, :focus & :nth-child",
            duration: "16:20",
            youtubeId: "AnF7ahG4Iww",
            url: "https://youtu.be/AnF7ahG4Iww",
            summary: "Interactive hover states, accessible :focus outlines, and styling alternating table rows with :nth-child(even)."
          },
          {
            id: "s-css-p9",
            number: "17",
            title: "CSS Pseudo-Elements: ::before & ::after",
            duration: "14:40",
            youtubeId: "FMaP6epuC8k",
            url: "https://youtu.be/FMaP6epuC8k",
            summary: "Generating decorative icons, background accents, and tooltips using content: '' without adding extra HTML nodes."
          },
          {
            id: "s-css-p10",
            number: "18",
            title: "CSS Transitions & Smooth Micro-Animations",
            duration: "15:05",
            youtubeId: "ZDYS78UtTYI",
            url: "https://youtu.be/ZDYS78UtTYI",
            summary: "Animating color changes, transforms, and opacity smoothly with transition-property, duration, and ease-in-out curves."
          },
          {
            id: "s-css-p11",
            number: "19",
            title: "CSS 2D Transforms: Translate, Rotate, Scale & Skew",
            duration: "14:50",
            youtubeId: "dfmh6HpfjKQ",
            url: "https://youtu.be/dfmh6HpfjKQ",
            summary: "transform: translateY(-4px) on card hovers, rotating icons, scale zoom effects, and centering tricks."
          },
          {
            id: "s-css-p12",
            number: "20",
            title: "CSS Box Shadows & Modern Card Glow Effects",
            duration: "13:15",
            youtubeId: "KWyNscGiIzs",
            url: "https://youtu.be/KWyNscGiIzs",
            summary: "box-shadow horizontal, vertical, blur radius, spread, and rgba colors for elevation and realistic soft shadows."
          },
          {
            id: "s-css-p13",
            number: "21",
            title: "Modern CSS Custom Properties / Variables (--root)",
            duration: "16:30",
            youtubeId: "QgEwfGVgBqo",
            url: "https://youtu.be/QgEwfGVgBqo",
            summary: "Declaring global theme variables with :root { --primary-color: #f39228; } and consuming with var() for instant dark mode."
          }
        ],
        codeSnippet: `:root {
  --brand-orange: #f39228;
  --dark-bg: #0b0f19;
  --card-bg: #111827;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --radius-lg: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--dark-bg);
  color: var(--text-main);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid rgba(243, 146, 40, 0.2);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand-orange);
}`,
        homework: "Style the semantic website built in Module 1 with a cohesive dark/light color palette using CSS variables, custom Google Fonts, responsive card components with hover micro-transitions, and a fixed navigation header."
      },
      {
        id: "p1-m3",
        number: "03",
        title: "Responsive Web Development & Media Queries",
        tagline: "Build fluid, mobile-first websites that look stunning across mobile phones, tablets, laptops, and ultra-wide screens.",
        zoomClasses: [
          {
            id: "z-resp-1",
            title: "Responsive Web Development Masterclass - Zoom Full Session",
            duration: "2:27:44",
            youtubeId: "vSJv0RFtuv8",
            url: "https://youtu.be/vSJv0RFtuv8",
            description: "Mobile-first philosophy, fluid grid layouts, flexible images, relative units (rem, em, vw, vh), and mastering CSS media queries across standard device breakpoints."
          },
          {
            id: "z-resp-2",
            title: "Responsive Web Development Media Query Demo - Zoom Full Session",
            duration: "2:12:13",
            youtubeId: "ZlcUD0-zQhk",
            url: "https://youtu.be/ZlcUD0-zQhk",
            description: "Live step-by-step coding demo refactoring a fixed desktop website into a fully responsive multi-device experience, mobile navigation toggling, and layout rearrangement."
          }
        ],
        shortVideos: [
          {
            id: "s-resp-1",
            number: "01",
            title: "What is Responsive Web Design & Mobile-First Strategy",
            duration: "11:15",
            youtubeId: "0h4iFDW_7EY",
            url: "https://youtu.be/0h4iFDW_7EY",
            summary: "Why designing for mobile first produces cleaner code, faster performance, and better user experience."
          },
          {
            id: "s-resp-2",
            number: "02",
            title: "The Viewport Meta Tag & Fluid Layout Math",
            duration: "13:20",
            youtubeId: "CoSIHn03KOY",
            url: "https://youtu.be/CoSIHn03KOY",
            summary: "How <meta name='viewport' content='width=device-width, initial-scale=1.0'> works and calculating percentage widths."
          },
          {
            id: "s-resp-3",
            number: "03",
            title: "Relative vs Absolute Units: rem, em, %, vh, vw",
            duration: "15:45",
            youtubeId: "z9HxQcszHyo",
            url: "https://youtu.be/z9HxQcszHyo",
            summary: "Why pixels fail on accessibility: mastering rem (root element font size) and dynamic viewport units."
          },
          {
            id: "s-resp-4",
            number: "04",
            title: "CSS Media Query Syntax & Industry Standard Breakpoints",
            duration: "18:10",
            youtubeId: "5e0Z6rbejac",
            url: "https://youtu.be/5e0Z6rbejac",
            summary: "Writing @media (min-width: 768px) and (min-width: 1024px) media queries cleanly."
          },
          {
            id: "s-resp-c1",
            number: "05",
            title: "Class Video: Live Responsive Layout Walkthrough",
            duration: "24:30",
            youtubeId: "rF2_3XrmPPo",
            url: "https://youtu.be/rF2_3XrmPPo",
            summary: "Instructor walkthrough building a multi-section responsive landing page from scratch."
          },
          {
            id: "s-resp-c2",
            number: "06",
            title: "Class Video: Building a Responsive Mobile Navigation Drawer",
            duration: "21:15",
            youtubeId: "5ydEIKc7wmA",
            url: "https://youtu.be/5ydEIKc7wmA",
            summary: "Creating a hamburger menu icon that toggles a mobile navigation drawer smoothly."
          },
          {
            id: "s-resp-c3",
            number: "07",
            title: "Class Video: Multi-Column to Single-Column Responsive Refactoring",
            duration: "19:40",
            youtubeId: "UjvZZR_w6W8",
            url: "https://youtu.be/UjvZZR_w6W8",
            summary: "Transforming 3-column desktop product grids into stacked 1-column mobile layouts."
          },
          {
            id: "s-resp-c4",
            number: "08",
            title: "Class Video: Responsive Images & Art Direction with <picture>",
            duration: "17:50",
            youtubeId: "6I2IyAzCWzk",
            url: "https://youtu.be/6I2IyAzCWzk",
            summary: "Serving different resolution images using srcset and the HTML5 <picture> element to save mobile bandwidth."
          }
        ],
        codeSnippet: `/* Mobile-First Base Styles (Default for small screens) */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}

/* Tablet Breakpoint (768px and up) */
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
}

/* Desktop Breakpoint (1024px and up) */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
}`,
        homework: "Refactor a multi-column desktop template into a seamless mobile-first responsive experience tested and verified across 375px (iPhone), 768px (iPad), and 1440px (Desktop)."
      },
      {
        id: "p1-m4",
        number: "04",
        title: "Responsive Web Development using Bootstrap 5",
        tagline: "Rapidly build modern, production-grade responsive websites with the world's most popular CSS framework.",
        zoomClasses: [
          {
            id: "z-boot-1",
            title: "Responsive Web Development with Bootstrap - Zoom Full Session",
            duration: "2:51:16",
            youtubeId: "1HLQMplhFy0",
            url: "https://youtu.be/1HLQMplhFy0",
            description: "Introduction to Bootstrap 5, CDN setup, the 12-column grid system, container types, responsive breakpoints (sm, md, lg, xl, xxl), and utility classes."
          },
          {
            id: "z-boot-2",
            title: "Bootstrap Demo Class & Component Integration - Zoom Full Session",
            duration: "1:42:14",
            youtubeId: "QRnO29MRw_I",
            url: "https://youtu.be/QRnO29MRw_I",
            description: "Practical live demo building an interactive corporate landing page with Bootstrap Navbar, Accordion, Carousel, Cards, and custom CSS overrides."
          }
        ],
        shortVideos: [
          {
            id: "s-boot-1",
            number: "01",
            title: "Introduction to Bootstrap 5 & CDN Integration",
            duration: "12:40",
            youtubeId: "5kd1lSSjEU8",
            url: "https://youtu.be/5kd1lSSjEU8",
            summary: "Linking Bootstrap 5 CSS & JS bundle via CDN, container vs container-fluid differences."
          },
          {
            id: "s-boot-2",
            number: "02",
            title: "The Bootstrap 12-Column Grid System & Containers",
            duration: "18:30",
            youtubeId: "sCnXDO3lOZU",
            url: "https://youtu.be/sCnXDO3lOZU",
            summary: "Mastering .row, .col-12, .col-md-6, .col-lg-4, gutters (.g-3), and responsive column wrapping."
          },
          {
            id: "s-boot-c1",
            number: "03",
            title: "Class Video: Bootstrap Navigation Bar & Mobile Collapse",
            duration: "22:15",
            youtubeId: "mXsmXcq7c6A",
            url: "https://youtu.be/mXsmXcq7c6A",
            summary: "Creating a responsive navbar with brand logo, nav links, dropdown menus, and automated hamburger toggling."
          },
          {
            id: "s-boot-c2",
            number: "04",
            title: "Class Video: Bootstrap Spacing, Typography & Utility Classes",
            duration: "19:45",
            youtubeId: "TBl3v5HZo90",
            url: "https://youtu.be/TBl3v5HZo90",
            summary: "Rapid UI layout using margin/padding utilities (m-3, py-4), text colors, and d-flex alignment."
          },
          {
            id: "s-boot-c3",
            number: "05",
            title: "Class Video: Bootstrap Cards, Badges, Hero Sections & Buttons",
            duration: "20:50",
            youtubeId: "ouD44sWtqqU",
            url: "https://youtu.be/ouD44sWtqqU",
            summary: "Assembling modern UI cards with card-header, card-body, badges, and responsive action buttons."
          },
          {
            id: "s-boot-c4",
            number: "06",
            title: "Class Video: Bootstrap Interactive Modals, Carousels & Accordions",
            duration: "24:10",
            youtubeId: "ykMiGvNF4bU",
            url: "https://youtu.be/ykMiGvNF4bU",
            summary: "Integrating JavaScript-powered UI components: image sliders (Carousel), FAQ accordions, and popup modal dialogs."
          }
        ],
        codeSnippet: `<!-- Bootstrap 5 Responsive Grid & Card Example -->
<div class="container my-5">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 bg-dark text-white border-secondary">
        <div class="card-body">
          <span class="badge bg-warning text-dark mb-2">Phase 1</span>
          <h5 class="card-title">Bootstrap 5 Grid</h5>
          <p class="card-text text-muted">Build responsive layouts in minutes using standard 12-column mechanics.</p>
          <a href="#" class="btn btn-outline-warning btn-sm">Explore Lesson</a>
        </div>
      </div>
    </div>
  </div>
</div>`,
        homework: "Scaffold and build a complete multi-section SaaS product landing page with Bootstrap 5: featuring a responsive navbar, hero section, 3-tier pricing card grid, accordion FAQ, and contact footer."
      },
      {
        id: "p1-m5",
        number: "05",
        title: "Portfolio Website Building, Git Version Control & Cloud Deployment",
        tagline: "Build your personal software engineering portfolio from scratch, commit to GitHub, and launch it live to the global internet.",
        zoomClasses: [
          {
            id: "z-port-1",
            title: "Building Portfolio Website Masterclass - Zoom Full Session",
            duration: "3:12:39",
            youtubeId: "7kZHkhaFeHc",
            url: "https://youtu.be/7kZHkhaFeHc",
            description: "Step-by-step engineering of an industry-standard developer portfolio website: wireframing, semantic HTML structure, responsive CSS Grid styling, project showcases, and contact integration."
          },
          {
            id: "z-port-2",
            title: "Launching & Deploying Portfolio Website - Zoom Full Session",
            duration: "2:48:02",
            youtubeId: "po9jZu0Xuas",
            url: "https://youtu.be/po9jZu0Xuas",
            description: "Mastering Git CLI version control, creating a GitHub repository, remote push, hosting on GitHub Pages, Netlify, and Render, custom domains, SSL HTTPS encryption, and SEO audits."
          }
        ],
        shortVideos: [
          {
            id: "s-port-b1",
            number: "01",
            title: "Portfolio Architecture, Wireframing & Asset Setup",
            duration: "14:20",
            youtubeId: "TzuHAC7Y3Z4",
            url: "https://youtu.be/TzuHAC7Y3Z4",
            summary: "Planning sections: Hero, About Me, Skills, Projects Grid, Testimonials, and Contact channels."
          },
          {
            id: "s-port-b2",
            number: "02",
            title: "Coding Portfolio Hero, About & Skills Showcase",
            duration: "21:40",
            youtubeId: "ZBNRCu6Lz1g",
            url: "https://youtu.be/ZBNRCu6Lz1g",
            summary: "Writing clean HTML and CSS for a high-converting hero header with call-to-actions and interactive tech badges."
          },
          {
            id: "s-port-b3",
            number: "03",
            title: "Showcasing Projects Grid with Live Links & Modals",
            duration: "19:15",
            youtubeId: "yHF7XK0h52A",
            url: "https://youtu.be/yHF7XK0h52A",
            summary: "Displaying project cards with preview screenshots, live demo URLs, GitHub repository links, and tech tags."
          },
          {
            id: "s-port-b4",
            number: "04",
            title: "Contact Form, Social Links & Responsive Polish",
            duration: "16:50",
            youtubeId: "xHqr8Vr5vKU",
            url: "https://youtu.be/xHqr8Vr5vKU",
            summary: "Integrating working contact forms, social media icon links (GitHub, LinkedIn, Twitter), and cross-browser testing."
          },
          {
            id: "s-port-d1",
            number: "05",
            title: "Git Version Control Setup & Local Repository Commit",
            duration: "15:30",
            youtubeId: "ZiWcqB3BheU",
            url: "https://youtu.be/ZiWcqB3BheU",
            summary: "Initializing git repository with git init, staging files with git add ., creating clean commits with git commit -m."
          },
          {
            id: "s-port-d2",
            number: "06",
            title: "Creating GitHub Repository & Pushing Source Code",
            duration: "13:45",
            youtubeId: "kAWm3rKDQxg",
            url: "https://youtu.be/kAWm3rKDQxg",
            summary: "Creating a public GitHub repo, linking remote origin with git remote add origin, and pushing code with git push -u origin main."
          },
          {
            id: "s-port-d3",
            number: "07",
            title: "Deploying to GitHub Pages - Free Live Web Hosting",
            duration: "14:10",
            youtubeId: "UEzNQJEH-7c",
            url: "https://youtu.be/UEzNQJEH-7c",
            summary: "Enabling GitHub Pages in repository settings and accessing your live website via username.github.io/portfolio."
          },
          {
            id: "s-port-d4",
            number: "08",
            title: "Deploying to Netlify / Vercel with Continuous Deployment",
            duration: "17:20",
            youtubeId: "XoVeIqVBwQg",
            url: "https://youtu.be/XoVeIqVBwQg",
            summary: "Connecting GitHub account to Netlify / Vercel for automatic live rebuilds on every git commit push."
          },
          {
            id: "s-port-d5",
            number: "09",
            title: "Deploying Static Sites & Apps to Render Cloud Platform",
            duration: "16:05",
            youtubeId: "ZxIHrXF_0dw",
            url: "https://youtu.be/ZxIHrXF_0dw",
            summary: "Deploying a static web service on Render with automated build commands and free cloud infrastructure."
          },
          {
            id: "s-port-d6",
            number: "10",
            title: "Custom Domain Linking & DNS Configuration",
            duration: "18:40",
            youtubeId: "fvIayfWegqI",
            url: "https://youtu.be/fvIayfWegqI",
            summary: "Purchasing a custom domain (e.g. yourname.dev) and pointing CNAME / A Records to hosting servers."
          },
          {
            id: "s-port-d7",
            number: "11",
            title: "SSL HTTPS Security Certificate Activation",
            duration: "11:25",
            youtubeId: "oOAndkrxb3E",
            url: "https://youtu.be/oOAndkrxb3E",
            summary: "Verifying Let's Encrypt automated SSL certificate issuance to ensure the secure padlock icon on all browsers."
          },
          {
            id: "s-port-d8",
            number: "12",
            title: "SEO Meta Tags, Open Graph Previews & Favicons",
            duration: "15:50",
            youtubeId: "L9fwB4txY2Y",
            url: "https://youtu.be/L9fwB4txY2Y",
            summary: "Adding Open Graph og:image and Twitter card tags so portfolio links generate rich visual previews on LinkedIn and Slack."
          },
          {
            id: "s-port-d9",
            number: "13",
            title: "Google Lighthouse Performance & Mobile Optimization Audit",
            duration: "14:35",
            youtubeId: "1FFPtFthmTQ",
            url: "https://youtu.be/1FFPtFthmTQ",
            summary: "Auditing page load speed, accessibility scores, best practices, and SEO with Chrome DevTools Lighthouse to score 95+."
          }
        ],
        extraMasterclasses: [
          {
            id: "comp-fund-1",
            title: "Introduction to Computers & Software Engineering",
            duration: "1:35:36",
            youtubeId: "C_0ptaTCFvQ",
            url: "https://youtu.be/C_0ptaTCFvQ",
            summary: "How computers execute code, CPU, RAM, storage, operating systems, and binary logic."
          },
          {
            id: "comp-fund-2",
            title: "The Making of the Internet & Network Protocols",
            duration: "2:13:21",
            youtubeId: "I7IchkA2cvo",
            url: "https://youtu.be/I7IchkA2cvo",
            summary: "How the global internet works: IP addresses, DNS resolution, TCP/IP packets, HTTP/HTTPS client-server cycle."
          },
          {
            id: "comp-fund-3",
            title: "Windows OS Developer Environment Setup & Terminal",
            duration: "35:00",
            youtubeId: "C_0ptaTCFvQ",
            url: "#",
            summary: "Configuring PowerShell, environment variables, PATH settings, and terminal shortcuts."
          },
          {
            id: "comp-fund-4",
            title: "Mac OS Developer Environment Setup & Homebrew",
            duration: "45:00",
            youtubeId: "I7IchkA2cvo",
            url: "#",
            summary: "Configuring Zsh terminal, Homebrew package manager, Xcode command line tools, and SSH keys."
          },
          {
            id: "comp-fund-5",
            title: "WordPress CMS Web Development Scaffolding",
            duration: "1:15:00",
            youtubeId: "PLI9XwyrALE",
            url: "https://youtu.be/PLI9XwyrALE",
            summary: "Understanding Content Management Systems, themes, plugins, and comparing CMS to custom coded applications."
          }
        ],
        codeSnippet: `# Git Deployment Commands
git init
git add .
git commit -m "feat: complete responsive portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/my-portfolio.git
git push -u origin main`,
        homework: "Deploy your completed responsive developer portfolio to GitHub Pages and Render, verify 100% mobile responsiveness, and submit your live production URL."
      }
    ]
  },
  {
    id: "phase-2",
    phaseNumber: "Phase 2",
    title: "Phase 2: Learn coding with JavaScript",
    shortTitle: "Coding with JavaScript",
    techStack: "JavaScript (ES6+) • DOM API • Async JS • Fetch API",
    duration: "Weeks 9 – 16 (8 Weeks)",
    badgeColor: "border-cyan-500/50 text-cyan-400 bg-cyan-500/10",
    iconType: "js",
    description: "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites. In this phase of your course, you will learn programming fundamentals using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment.",
    capstone: "Interactive Web Application with LocalStorage & Dynamic Filtering",
    stats: {
      modulesCount: 7,
      zoomHours: "35+ Live Hours",
      shortVideosCount: 40,
      totalExercises: 16
    },
    modules: [
      {
        id: "p2-m1",
        number: "01",
        title: "JavaScript Fundamentals, Variables & Data Types",
        tagline: "Master JavaScript variables, primitive and reference types, operators, and type coercion.",
        topics: [
          "Understanding the JavaScript engine: execution context and call stack",
          "Variable declarations: var vs let vs const (block scoping)",
          "Data types: string, number, boolean, null, undefined, symbol, BigInt, and object",
          "Operators: arithmetic, assignment, comparison (== vs ===), and logical operators",
          "Type conversion vs type coercion and common pitfalls"
        ]
      },
      {
        id: "p2-m2",
        number: "02",
        title: "Control Flow, Conditionals & Loops",
        tagline: "Master programmatic decision-making and repetitive task automation in JavaScript.",
        topics: [
          "Conditional statements: if, else if, else, and the ternary operator (? :)",
          "Switch statements and multiple condition evaluations",
          "Iteration loops: for loop, while loop, and do-while loop",
          "Iterating over arrays and objects: for...of and for...in",
          "Loop controls: break and continue statements"
        ]
      },
      {
        id: "p2-m3",
        number: "03",
        title: "Functions, Scope & Higher-Order Functions",
        tagline: "Build modular, reusable code with modern JavaScript function architectures.",
        topics: [
          "Function declarations vs function expressions vs arrow functions",
          "Parameters, default arguments, and rest parameters (...args)",
          "Global scope, function scope, block scope, and lexical scoping",
          "Closures: how functions retain access to their outer lexical environment",
          "Higher-order functions and functional methods: map(), filter(), reduce(), forEach()"
        ]
      },
      {
        id: "p2-m4",
        number: "04",
        title: "DOM Manipulation & Browser Event Handling",
        tagline: "Bring static HTML and CSS to life with dynamic Document Object Model interactions.",
        topics: [
          "The DOM tree: selecting elements with querySelector and querySelectorAll",
          "Modifying DOM elements: textContent, innerHTML, style, classList (add, remove, toggle)",
          "Creating, appending, and removing elements dynamically",
          "Event listeners: click, submit, change, keydown, and scroll events",
          "Event propagation: capturing, bubbling, and event.stopPropagation() / preventDefault()"
        ]
      },
      {
        id: "p2-m5",
        number: "05",
        title: "Modern ES6+ Features & Syntax Mastery",
        tagline: "Write clean, idiomatic modern JavaScript using ES6 to ES2024 specifications.",
        topics: [
          "Destructuring assignment for arrays and objects",
          "Spread syntax (...) for array cloning and object merging",
          "Template literals with embedded expressions and multi-line strings",
          "Enhanced object literals and optional chaining (?.) with nullish coalescing (??)",
          "ES6 Modules: import and export syntax"
        ]
      },
      {
        id: "p2-m6",
        number: "06",
        title: "Asynchronous JavaScript, Promises & Fetch API",
        tagline: "Master non-blocking asynchronous programming, REST API consumption, and error handling.",
        topics: [
          "Synchronous vs Asynchronous execution and the JavaScript Event Loop",
          "Callback functions and the callback hell dilemma",
          "Promises: Pending, Fulfilled, and Rejected states with .then() and .catch()",
          "Modern async/await syntax and robust try/catch error handling",
          "Consuming REST APIs using the browser Fetch API with headers and JSON serialization"
        ]
      },
      {
        id: "p2-m7",
        number: "07",
        title: "Phase 2 Capstone: Interactive Web Application with LocalStorage",
        tagline: "Build a production-style dynamic CRUD application with browser persistent storage.",
        topics: [
          "Architecture planning and state management without frontend frameworks",
          "Persisting user data across sessions using window.localStorage",
          "Dynamic search bar with real-time debounced filtering",
          "Form validation with interactive error badges",
          "Deploying the interactive application to GitHub Pages"
        ]
      }
    ]
  },
  {
    id: "phase-3",
    phaseNumber: "Phase 3",
    title: "Phase 3: Node, Express, MySql and React.js",
    shortTitle: "Node, Express, MySQL & React",
    techStack: "Node.js • Express.js • MySQL • React.js • JWT Auth",
    duration: "Weeks 17 – 24 (8 Weeks)",
    badgeColor: "border-blue-500/50 text-blue-400 bg-blue-500/10",
    iconType: "react",
    description: "React is a JavaScript library, developed in 2013 by Facebook. It is very popular and used on major sites including on Facebook, Netflix, Khan Academy and many others. In this phase, we will start from the fundamentals and go all the way up to building full applications with custom styling. Along the way, you'll also learn about npm, ES6, Node.js, Express and MySQL.",
    capstone: "Full-Stack Authenticated Web Application with Express, MySQL & React",
    stats: {
      modulesCount: 7,
      zoomHours: "40+ Live Hours",
      shortVideosCount: 45,
      totalExercises: 18
    },
    modules: [
      {
        id: "p3-m1",
        number: "01",
        title: "Node.js Runtime & NPM Package Ecosystem",
        tagline: "Execute JavaScript on the server, utilize core Node modules, and manage dependencies with NPM.",
        topics: [
          "Introduction to Node.js: V8 engine, non-blocking I/O, and server-side JavaScript",
          "Node core modules: fs (file system), path, os, and http",
          "NPM package manager: package.json, dependencies vs devDependencies, and scripts",
          "Environment variables with dotenv and secure configuration management",
          "Building a basic HTTP server without third-party frameworks"
        ]
      },
      {
        id: "p3-m2",
        number: "02",
        title: "Express.js REST API Architecture",
        tagline: "Build scalable, production-ready RESTful web services with Express routing and middleware.",
        topics: [
          "Express framework architecture and request/response life cycle",
          "HTTP verbs: GET, POST, PUT, PATCH, DELETE with standard HTTP status codes",
          "Routing with express.Router() and URL route parameters (:id) & query params",
          "Middleware mechanics: custom logging, body-parser, and CORS configuration",
          "Centralized error handling middleware and graceful server shutdowns"
        ]
      },
      {
        id: "p3-m3",
        number: "03",
        title: "Relational Database Modeling with MySQL",
        tagline: "Design normalized relational database schemas, tables, relationships, and queries.",
        topics: [
          "Relational databases vs NoSQL: ACID compliance and data integrity",
          "SQL syntax: CREATE TABLE, SELECT, INSERT, UPDATE, DELETE",
          "Primary keys, Foreign keys, AUTO_INCREMENT, and constraint rules",
          "Relational Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN across multiple tables",
          "Database indexing, performance optimization, and schema migrations"
        ]
      },
      {
        id: "p3-m4",
        number: "04",
        title: "Database Integration & Node Connection Pooling",
        tagline: "Connect your Express application securely to MySQL with connection pools and parameterized queries.",
        topics: [
          "Using the mysql2 library with Promise wrappers for async/await",
          "Connection pools: why persistent single connections fail in production",
          "Preventing SQL Injection vulnerabilities with parameterized prepared statements",
          "Repository pattern: separating database queries from route controller logic",
          "Handling database errors, timeouts, and reconnect strategies"
        ]
      },
      {
        id: "p3-m5",
        number: "05",
        title: "User Authentication & Authorization with JWT & Bcrypt",
        tagline: "Secure web APIs with salted password hashing and stateless JSON Web Token auth.",
        topics: [
          "Password security: salting and hashing using bcrypt.js",
          "JSON Web Tokens (JWT): header, payload, signature, and expiration times",
          "Building /register, /login, and /me user authentication endpoints",
          "Writing authMiddleware to verify Bearer tokens on protected API routes",
          "Role-based access control (Admin vs Standard Member privileges)"
        ]
      },
      {
        id: "p3-m6",
        number: "06",
        title: "React.js Core Fundamentals & Component Architecture",
        tagline: "Master modern React 18: JSX, props, functional components, hooks, and reactive UI state.",
        topics: [
          "Why React? Virtual DOM, declarative UI, and Single Page Application (SPA) architecture",
          "JSX syntax, functional components, and props passing",
          "Managing component state with the useState hook",
          "Side effects, data fetching, and lifecycle management with the useEffect hook",
          "Conditional rendering, rendering lists with keys, and controlled form inputs"
        ]
      },
      {
        id: "p3-m7",
        number: "07",
        title: "Full-Stack Integration: React Frontend to Express/MySQL Backend",
        tagline: "Connect your React client to your Express REST API with Axios, routing, and global auth context.",
        topics: [
          "Client-side routing with React Router v6 (BrowserRouter, Routes, Route, Link)",
          "Protected Routes: redirecting unauthenticated users to login",
          "Global state management with React Context API (AuthContext)",
          "Consuming REST API endpoints using Axios with interceptors",
          "Deploying backend to Render/Railway and frontend to Netlify/Render"
        ]
      }
    ]
  },
  {
    id: "phase-4",
    phaseNumber: "Phase 4",
    title: "Phase 4: Project Work",
    shortTitle: "Project Work & Production Deployment",
    techStack: "Enterprise Capstones • Git Teamwork • CI/CD • Cloud Architecture",
    duration: "Weeks 25 – 32 (8 Weeks)",
    badgeColor: "border-amber-500/50 text-[#f39228] bg-amber-500/10",
    iconType: "project",
    description: "In this phase, you will synthesize your complete full-stack mastery into production capstone project work. You will design, develop, and deploy enterprise-grade real-world applications with authentic architecture, Git teamwork collaboration, database schemas, and cloud deployment.",
    capstone: "Commercial Enterprise Capstone Application Deployed to Cloud with CI/CD",
    stats: {
      modulesCount: 6,
      zoomHours: "45+ Live Engineering Hours",
      shortVideosCount: 30,
      totalExercises: 8
    },
    modules: [
      {
        id: "p4-m1",
        number: "01",
        title: "Capstone System Architecture & Database Schema Design",
        tagline: "Plan production-grade software architecture, Entity-Relationship Diagrams (ERD), and API contracts.",
        topics: [
          "Deconstructing product requirements and user stories into technical specifications",
          "Database schema architecture: normalization, table relationships, and index strategy",
          "REST API contract specification with OpenAPI / Swagger definitions",
          "UI/UX wireframing and design token alignment",
          "Monorepo vs polyrepo repository scaffolding with Git"
        ]
      },
      {
        id: "p4-m2",
        number: "02",
        title: "Agile Sprints, Git Feature Branching & Team Pull Requests",
        tagline: "Work like a professional engineering squad with GitHub issues, branch protection, and code reviews.",
        topics: [
          "Agile Scrum methodology: sprint planning, daily standups, and backlog grooming",
          "Git branch strategy: feature branches, release branches, and hotfix workflows",
          "Writing informative Pull Requests with before/after screenshots and testing steps",
          "Conducting peer code reviews and addressing pull request comments",
          "Merge conflict resolution and rebasing practices"
        ]
      },
      {
        id: "p4-m3",
        number: "03",
        title: "Flagship Capstone 1: Enterprise Q&A Knowledge Forum",
        tagline: "Build a production-grade interactive forum: questions, answers, voting, search, and user profiles.",
        topics: [
          "User authentication: secure signup, login, session tokens, and password reset",
          "Question posting with rich markdown editor and category tag chips",
          "Real-time answer posting with optimistic UI updates and instant feedback",
          "Interactive upvoting/downvoting system with vote deduplication in MySQL",
          "Full-text search querying questions, answers, and tags with debouncing"
        ]
      },
      {
        id: "p4-m4",
        number: "04",
        title: "Flagship Capstone 2: Full-Stack E-Commerce & Subscription Engine",
        tagline: "Build an end-to-end commercial shop with product catalog, cart, checkout, and webhook handling.",
        topics: [
          "Product catalog with category filters, sorting, and pagination",
          "Persistent shopping cart state with Context API and localStorage",
          "Payment gateway integration (Stripe / PayPal sandbox environment)",
          "Server-side payment verification and order status database persistence",
          "Customer order history dashboard and printable invoice generation"
        ]
      },
      {
        id: "p4-m5",
        number: "05",
        title: "Production Cloud Deployment, HTTPS & CI/CD Automation",
        tagline: "Deploy full-stack applications with production databases, environment secrets, and automated testing.",
        topics: [
          "Production frontend build optimization with Vite minification and code splitting",
          "Hosting Node/Express APIs on cloud platforms (Render, Railway, AWS EC2)",
          "Hosting managed production MySQL databases with automated backup snapshots",
          "Automated GitHub Actions CI/CD workflows running tests on git push",
          "Custom domain routing, DNS configuration, and automated SSL/TLS encryption"
        ]
      },
      {
        id: "p4-m6",
        number: "06",
        title: "Engineering Portfolio, GitHub Showcase & Technical Interview Readiness",
        tagline: "Prepare for your engineering career with recruiter-ready GitHub repositories, resume engineering, and mock interviews.",
        topics: [
          "Crafting production-grade GitHub README documentation with architecture diagrams and live demo URLs",
          "Engineering your technical resume: framing bootcamp capstones as commercial software projects",
          "Technical interview preparation: data structures, algorithmic problem solving, and system design",
          "Behavioral interview mastery using the STAR method (Situation, Task, Action, Result)",
          "Live capstone presentation to senior engineers, alumni, and tech recruiters"
        ]
      }
    ]
  }
];
