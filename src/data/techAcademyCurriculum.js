export const techAcademyCurriculum = {
  title: "AI-Powered Full-Stack Software Engineering",
  subtitle: "32-Week Career-Transforming Immersive Bootcamp",
  tagline: "From zero coding background to building production-grade, AI-integrated web applications deployed to the cloud.",
  stats: {
    totalWeeks: 32,
    phasesCount: 4,
    liveHours: "200+ Live Hours",
    projectsCount: "12+ Real-World Projects",
    jobReadinessRate: "94% Employment Rate",
  },
  phases: [
    {
      id: "phase-1",
      number: "Phase 1",
      title: "Web Development Foundations",
      subtitle: "Semantic HTML5, Modern CSS3, Flexbox, Grid & Bootstrap 5",
      duration: "Weeks 1 – 8 (8 Weeks)",
      badge: "Foundations",
      badgeColor: "bg-emerald-950/80 text-emerald-400 border-emerald-800",
      accentColor: "#10b981",
      overview: "Establish rock-solid frontend fundamentals. Learn to construct accessible, semantic web documents, master responsive design using modern CSS3 (Flexbox & Grid), and build production-ready layouts with Bootstrap 5.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Bootstrap 5", "Git & GitHub", "Command Line", "Responsive Design"],
      capstoneProject: "Apple Website Fully Responsive Clone",
      weeks: [
        {
          week: "Week 1",
          title: "Course Orientation, Git/GitHub & Semantic HTML5",
          topics: [
            "Dev environment setup: VS Code, Git CLI, and browser developer tools",
            "Git version control fundamentals: init, commit, branching, merging, and remote push",
            "HTML document anatomy, <!DOCTYPE html>, head metadata, and body structure",
            "Semantic markup: header, nav, main, section, article, aside, and footer",
            "Accessible forms, input types, labels, tables, and multimedia integration"
          ],
          exercise: "Construct a multi-page semantic portfolio structure with working navigation and accessible contact form."
        },
        {
          week: "Week 2",
          title: "Modern CSS3 Fundamentals & The Box Model",
          topics: [
            "CSS syntax, selectors (class, id, attribute, pseudo-classes, pseudo-elements)",
            "The Cascade, Inheritance, Specificity calculations, and !important risks",
            "The Box Model: content, padding, border, margin, and box-sizing: border-box",
            "Typography styling: Google Fonts, web-safe fonts, font-weight, line-height, letter-spacing",
            "Color formats: HEX, RGB, HSL, RGBA, and modern CSS custom variables (--root-vars)"
          ],
          exercise: "Style a multi-section landing page with custom CSS variables and custom typography."
        },
        {
          week: "Week 3",
          title: "CSS Layouts: Flexbox Deep Dive",
          topics: [
            "Flex containers vs flex items: parent and child properties",
            "Main axis vs Cross axis alignment: justify-content, align-items, align-content",
            "Flex sizing: flex-grow, flex-shrink, and flex-basis mechanics",
            "Flex wrapping, column directions, and building responsive navigation bars",
            "Common Flexbox patterns: centered heroes, card rows, and sticky footers"
          ],
          exercise: "Build a responsive navigation header and a 4-column product feature showcase using pure Flexbox."
        },
        {
          week: "Week 4",
          title: "CSS Layouts: CSS Grid Systems",
          topics: [
            "CSS Grid vs Flexbox: when to use 1D vs 2D layout systems",
            "Grid tracks, fractional units (fr), repeat(), and minmax() functions",
            "Responsive grid columns with auto-fit and auto-fill without media queries",
            "Named grid areas: grid-template-areas and seamless responsive restructuring",
            "Implicit vs explicit grid lines, gap properties, and nested grids"
          ],
          exercise: "Construct an editorial magazine / dashboard layout with header, sidebar, main feed, and widgets using CSS Grid."
        },
        {
          week: "Week 5",
          title: "Mobile-First Responsive Web Design",
          topics: [
            "Mobile-first philosophy vs desktop-first legacy workflows",
            "Viewport meta tag configuration and viewport units (vw, vh, dvh, svh)",
            "Media queries: min-width, max-width, orientation, and prefers-color-scheme",
            "Responsive images: srcset, sizes attribute, and picture element art-direction",
            "Debugging mobile viewports using Chrome DevTools device mode and remote debugging"
          ],
          exercise: "Refactor a multi-column desktop template into a seamless mobile-first responsive experience across 375px, 768px, and 1440px."
        },
        {
          week: "Week 6",
          title: "Bootstrap 5 Framework & Component Library",
          topics: [
            "Bootstrap 5 architecture: 12-column flexbox grid system and container breakpoints",
            "Utility-first classes: spacing (m, p), display (d-flex, d-none), text, and flexbox utilities",
            "Interactive UI components: Navbar, Accordion, Cards, Modal, Carousel, and Tooltips",
            "Customizing Bootstrap with CSS overrides and CSS variables",
            "Clean component structuring without bloat or selector collisions"
          ],
          exercise: "Rapidly scaffold a SaaS landing page using Bootstrap 5 grid and components."
        },
        {
          week: "Week 7",
          title: "Phase 1 Major Project: Apple Website Responsive Clone",
          topics: [
            "Deconstructing apple.com: navigation bar, video teasers, and dual-column product banners",
            "Pixel-perfect replication of Apple's iconic typography, spacing, and image framing",
            "Interactive collapsible sub-nav on mobile screens using pure CSS / lightweight JS",
            "Cross-browser testing across Chrome, Safari, Firefox, and Edge",
            "Performance optimization: image compression and webp conversion"
          ],
          exercise: "Complete submission of the Apple Homepage responsive clone hosted on GitHub Pages."
        },
        {
          week: "Week 8",
          title: "Phase 1 Bonus Week: Personal Developer Portfolio & Review",
          topics: [
            "Personal developer branding: crafting an impressive software engineering portfolio",
            "Deploying production sites to GitHub Pages, Netlify, and Vercel",
            "Phase 1 comprehensive code review and 1-on-1 diagnostic evaluation",
            "Preparation for Phase 2: programming mindset and computational thinking"
          ],
          exercise: "Deploy your personal developer portfolio showcasing your Phase 1 projects."
        }
      ]
    },
    {
      id: "phase-2",
      number: "Phase 2",
      title: "Modern JavaScript & DOM Architecture",
      subtitle: "ES6+, Scopes, Closures, Asynchronous JS, APIs & Event Loop",
      duration: "Weeks 9 – 16 (8 Weeks)",
      badge: "Core Logic",
      badgeColor: "bg-amber-950/80 text-amber-400 border-amber-800",
      accentColor: "#f59e0b",
      overview: "Transition from styling to genuine computer science and programming. Master the JavaScript runtime, variable scopes, functional programming array methods, asynchronous promises, Fetch API, and the browser DOM.",
      skills: ["JavaScript ES6+", "DOM Manipulation", "Event Loop", "Promises & Async/Await", "Fetch API", "REST APIs", "LocalStorage", "JSON"],
      capstoneProject: "Interactive Netflix Clone & Live Weather Dashboard",
      weeks: [
        {
          week: "Week 9",
          title: "JavaScript Fundamentals & Core Grammar",
          topics: [
            "Variable declarations: var vs let vs const, temporal dead zone (TDZ)",
            "Data types: Primitives (string, number, boolean, null, undefined, symbol, bigint) vs Reference types",
            "Operators: arithmetic, assignment, logical (&&, ||, ?? nullish coalescing), comparison (== vs ===)",
            "Type conversion vs implicit type coercion pitfalls",
            "String methods and template literals (`${expression}`)"
          ],
          exercise: "Build an interactive tip and tax calculator script running in Node and the browser console."
        },
        {
          week: "Week 10",
          title: "Control Flow, Functions & Scope Chain",
          topics: [
            "Conditional statements: if/else, switch case, ternary operators",
            "Loops: for, while, do-while, for...of, and for...in",
            "Function declarations vs function expressions vs ES6 arrow functions",
            "Execution contexts, the Call Stack, and lexical scoping",
            "Closures in JavaScript: how closures retain state and practical use cases (data privacy, memoization)"
          ],
          exercise: "Create a stateful banking ledger module using closures that protects private account balances."
        },
        {
          week: "Week 11",
          title: "Arrays, Objects & Modern ES6+ Features",
          topics: [
            "Array mutation vs immutability: push, pop, slice, splice",
            "Higher-order array methods: map(), filter(), reduce(), find(), some(), every()",
            "Object anatomy: keys, values, methods, and Object.keys(), Object.values(), Object.entries()",
            "Destructuring assignment for arrays and objects with default values and renaming",
            "Spread operator (...) and Rest parameters in function signatures"
          ],
          exercise: "Write an e-commerce shopping cart calculation engine using map, filter, and reduce."
        },
        {
          week: "Week 12",
          title: "DOM Manipulation & Event Architecture",
          topics: [
            "The Document Object Model (DOM) tree structure: nodes, elements, attributes",
            "Selecting elements: querySelector, querySelectorAll, getElementById",
            "Creating, inserting, and deleting elements dynamically in the DOM",
            "Modifying classes, inline styles, and HTML attributes (classList.add/remove/toggle)",
            "Event listeners: click, submit, keydown, change, and the Event object (e.target, e.preventDefault)",
            "Event propagation: bubbling, capturing, and event delegation patterns for high performance"
          ],
          exercise: "Build an interactive Todo application with filtering, completion status, and dynamic DOM deletion."
        },
        {
          week: "Week 13",
          title: "Asynchronous JavaScript: Callbacks, Promises & Timers",
          topics: [
            "Synchronous blocking code vs asynchronous non-blocking I/O",
            "JavaScript timers: setTimeout and setInterval mechanics",
            "Callback pattern and the perils of 'Callback Hell' (Pyramid of Doom)",
            "ES6 Promises: Promise states (Pending, Fulfilled, Rejected)",
            "Chaining promises with .then(), .catch(), and .finally()",
            "Promise combinators: Promise.all(), Promise.allSettled(), Promise.race()"
          ],
          exercise: "Simulate a multi-step user checkout process with staged promises and error recovery."
        },
        {
          week: "Week 14",
          title: "Async / Await & Consuming REST APIs with Fetch",
          topics: [
            "Async / Await syntax as syntactic sugar over Promises",
            "Error handling in async/await using try / catch / finally blocks",
            "HTTP protocol basics: URLs, headers, status codes (200, 201, 400, 401, 404, 500)",
            "HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (destroy)",
            "The Fetch API: making requests, parsing JSON responses with response.json()",
            "Handling network failures, timeout limits, and rendering loading skeletons"
          ],
          exercise: "Build a live cryptocurrency price tracker that fetches real-time market data from CoinGecko API."
        },
        {
          week: "Week 15",
          title: "The JavaScript Event Loop & Browser Web APIs",
          topics: [
            "How JavaScript works under the hood: Single-threaded runtime, Call Stack, Web APIs",
            "Macrotask Queue (setTimeout, setInterval, I/O) vs Microtask Queue (Promises, queueMicrotask)",
            "Event Loop execution priorities and avoiding UI blocking",
            "Browser storage APIs: LocalStorage, SessionStorage, and Cookies",
            "Serializing and deserializing data using JSON.stringify() and JSON.parse()"
          ],
          exercise: "Persist user settings, theme preferences, and cart data across browser refreshes using LocalStorage."
        },
        {
          week: "Week 16",
          title: "Phase 2 Capstone: Interactive Netflix Clone & Weather Hub",
          topics: [
            "Integrating with TMDB (The Movie Database) API to fetch trending, top rated, and genre rows",
            "Dynamic video trailer playback using YouTube embed API upon clicking a movie card",
            "Responsive hero banner with dynamic backdrop image and movie synopsis",
            "Debounced search bar to query movies with live instant results",
            "Code modularization, clean error banners, and production deployment"
          ],
          exercise: "Deploy completed Netflix movie viewer with trailer modals to production."
        }
      ]
    },
    {
      id: "phase-3",
      number: "Phase 3",
      title: "Full-Stack & MERN Engineering",
      subtitle: "Node.js, Express.js REST APIs, MySQL Database & React.js",
      duration: "Weeks 17 – 24 (8 Weeks)",
      badge: "Full-Stack",
      badgeColor: "bg-cyan-950/80 text-cyan-400 border-cyan-800",
      accentColor: "#06b6d4",
      overview: "Become a true full-stack engineer. Build robust, secure REST APIs with Node.js and Express, architect relational databases with MySQL, implement JWT authentication, and build dynamic single-page applications with React.",
      skills: ["Node.js", "Express.js", "MySQL", "Relational DB", "REST APIs", "JWT Auth", "bcrypt", "React.js", "React Hooks"],
      capstoneProject: "Evangadi / Nexa Q&A Discussion Forum (Full-Stack)",
      weeks: [
        {
          week: "Week 17",
          title: "Node.js Runtime & Server Fundamentals",
          topics: [
            "Introduction to Node.js: V8 JavaScript engine outside the browser",
            "CommonJS (require/module.exports) vs ES Modules (import/export)",
            "Core modules: path, fs (file system read/write), os, and http",
            "npm (Node Package Manager): package.json, dependencies vs devDependencies, semantic versioning",
            "Creating your first basic HTTP server without third-party frameworks"
          ],
          exercise: "Build a CLI file organizer tool that reads directories and categorizes files by extension."
        },
        {
          week: "Week 18",
          title: "Express.js Backend Framework & REST APIs",
          topics: [
            "Why Express.js: routing, middleware pipeline, and request/response cycle",
            "Request parameters: req.params (route variables), req.query (filters), req.body (payloads)",
            "Middleware in Express: built-in (express.json()), custom logger, and third-party (cors, morgan)",
            "Architecting clean RESTful routes: Router modularization and controller pattern",
            "Centralized error handling middleware with custom error classes"
          ],
          exercise: "Build a modular REST API for a bookstore with full CRUD operations and input validation."
        },
        {
          week: "Week 19",
          title: "Relational Database Design with MySQL",
          topics: [
            "Relational database concepts: Tables, Rows, Columns, Primary Keys, Foreign Keys",
            "SQL syntax: DDL (CREATE, ALTER, DROP) vs DML (SELECT, INSERT, UPDATE, DELETE)",
            "Database normalization: 1st, 2nd, and 3rd Normal Forms (1NF, 2NF, 3NF)",
            "SQL Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, and aggregated queries (GROUP BY, HAVING)",
            "Using MySQL Workbench or Beekeeper Studio to model entity relationships (ERDs)"
          ],
          exercise: "Design and implement a normalized relational schema for an e-commerce platform with users, orders, and products."
        },
        {
          week: "Week 20",
          title: "Connecting Express to MySQL & Secure Queries",
          topics: [
            "Connecting Node.js to MySQL using mysql2 library with Promise support",
            "Connection pools vs single connections: handling concurrent requests safely",
            "SQL Injection vulnerabilities: why string concatenation in queries is catastrophic",
            "Parameterized queries with prepared statements (?) for total security",
            "Executing complex multi-table JOIN queries inside Express controller functions"
          ],
          exercise: "Connect the bookstore REST API to a live MySQL database using connection pooling and prepared statements."
        },
        {
          week: "Week 21",
          title: "User Authentication & Authorization with JWT",
          topics: [
            "Authentication (who you are) vs Authorization (what permissions you have)",
            "Secure password storage: salt rounds and one-way hashing with bcrypt.js",
            "JSON Web Tokens (JWT): Header, Payload, and Signature anatomy",
            "Generating and signing JWT access tokens on login and registration",
            "Protecting routes with an authMiddleware that verifies Bearer tokens from request headers"
          ],
          exercise: "Implement complete user registration and login endpoints with bcrypt hashing and JWT token verification."
        },
        {
          week: "Week 22",
          title: "React.js Component Architecture & Props",
          topics: [
            "Single Page Applications (SPAs) vs traditional multi-page websites",
            "JSX syntax: writing HTML-like markup inside JavaScript functions",
            "Components as pure functions: reusability, composition, and props passing",
            "Managing reactive state with the useState hook",
            "Conditional rendering and rendering lists of data using the map() method with unique keys"
          ],
          exercise: "Scaffold a multi-component interactive product dashboard with filter tabs and search state."
        },
        {
          week: "Week 23",
          title: "React Hooks, Context API & React Router",
          topics: [
            "The useEffect hook: handling side effects, API fetching, dependency arrays, and cleanup functions",
            "Client-side routing with React Router v6: BrowserRouter, Routes, Route, Link, useNavigate",
            "Dynamic routes with useParams() and protected routes with Navigate",
            "State management without prop drilling: React Context API (createContext, useContext, Provider)",
            "Building custom reusable hooks (useFetch, useAuth, useLocalStorage)"
          ],
          exercise: "Build an authenticated multi-page frontend that stores user login state in Context and redirects unauthenticated visitors."
        },
        {
          week: "Week 24",
          title: "Phase 3 Capstone: Evangadi / Nexa Q&A Forum",
          topics: [
            "Full-stack architecture: React frontend talking to Express/MySQL backend",
            "User accounts: sign-up, sign-in, token refresh, and avatar display",
            "Question module: post question, search by keywords, view question detail",
            "Answer module: submit answers, upvote/downvote answers, mark accepted solution",
            "End-to-end deployment of database and server to Render / Railway"
          ],
          exercise: "Deploy the complete full-stack Q&A forum platform to production with live database."
        }
      ]
    },
    {
      id: "phase-4",
      number: "Phase 4",
      title: "AI-Powered Application Development & Capstone",
      subtitle: "OpenAI API, Prompt Engineering, Vector DBs, RAG & Abe Garage",
      duration: "Weeks 25 – 32 (8 Weeks)",
      badge: "AI Engineering",
      badgeColor: "bg-purple-950/80 text-purple-400 border-purple-800",
      accentColor: "#a855f7",
      overview: "Step into the future of software engineering. Learn how to augment full-stack web applications with Large Language Models (LLMs), build semantic vector search engines, construct Retrieval-Augmented Generation (RAG) pipelines, and ship the flagship Abe Garage capstone.",
      skills: ["OpenAI API", "Prompt Engineering", "Vector Embeddings", "RAG Systems", "Pinecone / Chroma", "LangChain basics", "AI Diagnostics", "Cloud Deployment"],
      capstoneProject: "Abe Garage: AI-Powered Auto Repair Management Platform",
      weeks: [
        {
          week: "Week 25",
          title: "Foundations of Modern AI & Large Language Models",
          topics: [
            "How LLMs work: Transformer architecture, tokenization, context windows, and hallucinations",
            "API keys, security best practices (never leak keys to client-side code), and environment variables",
            "Calling the OpenAI API from Node.js: models (gpt-4o, gpt-4o-mini), temperature, and max_tokens",
            "Message roles: system (instructions/personality), user (input), and assistant (history)",
            "Streaming responses using Server-Sent Events (SSE) for ChatGPT-style real-time typewriter effects"
          ],
          exercise: "Build a backend endpoint that streams AI code explanation responses directly to a React frontend."
        },
        {
          week: "Week 26",
          title: "Structured Prompt Engineering & Function Calling",
          topics: [
            "Prompt engineering patterns: Few-shot prompting, Chain-of-Thought (CoT), role-based prompts",
            "Preventing prompt injection attacks and setting strict guardrails",
            "OpenAI Function Calling / Tool Calling: teaching LLMs to execute backend database queries",
            "Structured Outputs with JSON Schema: guaranteeing exact JSON response contracts from AI",
            "Handling API rate limits, backoff retry logic, and token cost budgeting"
          ],
          exercise: "Create an AI customer service agent that extracts user intent into strict JSON and queries a mock order database."
        },
        {
          week: "Week 27",
          title: "Vector Embeddings & Semantic Search",
          topics: [
            "What are embeddings? Representing text as high-dimensional numerical vectors (1536 dimensions)",
            "Generating embeddings using OpenAI's text-embedding-3-small and text-embedding-3-large",
            "Mathematical similarity: Cosine similarity vs Euclidean distance vs Dot product",
            "Keyword search (SQL LIKE / Full-text) vs Semantic meaning search (understanding intent)",
            "Storing and querying vector embeddings in vector databases (Pinecone / ChromaDB / pgvector)"
          ],
          exercise: "Build a semantic search engine over a knowledge base of technical manuals that finds answers even with zero matching keywords."
        },
        {
          week: "Week 28",
          title: "Retrieval-Augmented Generation (RAG) Pipelines",
          topics: [
            "The RAG architecture: Retrieval -> Context Injection -> Generation",
            "Document ingestion pipeline: parsing PDFs, markdown, and web pages",
            "Text chunking strategies: fixed size, sentence splitting, recursive character chunking, and chunk overlap",
            "Building a complete RAG system: fetching relevant chunks and injecting them into the LLM system prompt",
            "Source attribution: ensuring the AI cites exact documents and line references for its answers"
          ],
          exercise: "Construct a complete RAG information bot capable of answering complex questions from an uploaded company handbook."
        },
        {
          week: "Week 29",
          title: "Abe Garage Capstone Project – Architecture & DB Modeling",
          topics: [
            "Abe Garage project overview: A modern full-stack auto repair shop management system",
            "Stakeholders & user roles: Customer, Service Advisor, Mechanic, and Shop Owner / Admin",
            "Database schema modeling in MySQL: customers, vehicles (VIN, make, model, year), repair orders, parts, and invoices",
            "Designing REST API contracts and secure JWT role-based access control (RBAC)",
            "Integrating the AI Vehicle Trouble Code Analyzer pipeline"
          ],
          exercise: "Set up the complete Abe Garage backend schema and seed initial vehicle repair data."
        },
        {
          week: "Week 30",
          title: "Abe Garage Capstone – Core Management Features",
          topics: [
            "Customer intake workflow: vehicle registration, mileage log, and initial issue description",
            "Repair order lifecycle: Pending -> In Progress -> Waiting for Parts -> Completed -> Invoiced",
            "Mechanic task assignment and technician labor hour tracking",
            "Parts inventory management and automated invoice generation with tax calculation",
            "Responsive React admin dashboard with status badges and KPI metrics"
          ],
          exercise: "Implement the repair order management interface with live status updates."
        },
        {
          week: "Week 31",
          title: "Abe Garage Capstone – AI Diagnostic Integration",
          topics: [
            "Building the AI OBD-II Diagnostic Assistant: analyzing mechanic symptoms and error codes (e.g. P0300)",
            "Injecting manufacturer service bulletins into a localized RAG vector store",
            "Generating automated plain-English repair estimates and recommended fixes for customers",
            "Customer SMS/Email notification hooks for status updates",
            "End-to-end integration testing of the entire Abe Garage ecosystem"
          ],
          exercise: "Connect the AI diagnostic modal so technicians can input symptoms and receive step-by-step diagnostic procedures."
        },
        {
          week: "Week 32",
          title: "Production Deployment, CI/CD & Career Readiness",
          topics: [
            "Production deployment: hosting frontend on Render/Vercel and backend on Render/AWS",
            "Setting up automated CI/CD pipelines with GitHub Actions",
            "Environment configuration, secrets management, CORS security, and database connection pooling in production",
            "Technical resume engineering: framing boot-camp projects as commercial software engineering experience",
            "Mock technical interviews: data structures, live coding challenges, and behavioral STAR method coaching"
          ],
          exercise: "Deploy the final Abe Garage full-stack application with custom domain and participate in your graduation capstone presentation."
        }
      ]
    }
  ]
};
