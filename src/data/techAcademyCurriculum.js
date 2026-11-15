export const techAcademyCurriculum = {
  title: "Full-Stack Software Engineering Academy",
  subtitle: "32-Week Career-Transforming Immersive Bootcamp",
  tagline: "From zero coding background to building production-grade, commercial web applications deployed to the cloud with dedicated 1-on-1 mentor guidance.",
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
      title: "Building static websites using HTML, CSS & Bootstrap",
      subtitle: "Semantic HTML5, Modern CSS3, Flexbox, Grid & Bootstrap 5",
      duration: "Weeks 1 – 8 (8 Weeks)",
      badge: "Foundations",
      badgeColor: "bg-amber-950/80 text-amber-400 border-amber-800",
      accentColor: "#f39228",
      overview: "In this phase, you'll learn about the underlying structure of the web - HTML. You'll also learn how to apply styling to a website through CSS. To help you build websites faster and easier, you will learn the Bootstrap framework. Along the way, you'll also learn about VS Code editor and Chrome's Developer Tools.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Bootstrap 5", "Git & GitHub", "Command Line", "Responsive Design"],
      capstoneProject: "Apple Website Fully Responsive Clone & Personal Portfolio",
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
      title: "Learn coding with JavaScript",
      subtitle: "ES6+, Scopes, Closures, Asynchronous JS, APIs & DOM Manipulation",
      duration: "Weeks 9 – 16 (8 Weeks)",
      badge: "Core Logic",
      badgeColor: "bg-cyan-950/80 text-cyan-400 border-cyan-800",
      accentColor: "#22d3ee",
      overview: "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites. In this phase of your course, you will learn programming fundamentals using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment.",
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
      title: "Node, Express, MySql and React.js",
      subtitle: "Node.js, Express.js REST APIs, MySQL Database & React Fundamentals",
      duration: "Weeks 17 – 24 (8 Weeks)",
      badge: "Full-Stack Dev",
      badgeColor: "bg-blue-950/80 text-blue-400 border-blue-800",
      accentColor: "#3b82f6",
      overview: "React is a JavaScript library, developed in 2013 by Facebook. It is very popular and used on major sites including on Facebook, Netflix, Khan Academy and many others. In this phase, we will start from the fundamentals and go all the way up to building full applications with custom styling. Along the way, you'll also learn about npm, ES6, Node.js, Express and MySQL.",
      skills: ["Node.js", "Express.js", "MySQL", "Relational DB", "REST APIs", "JWT Auth", "bcrypt", "Prepared Queries"],
      capstoneProject: "Nexa Full-Stack Q&A Forum Backend API",
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
          title: "Database Indexing, Transactions & Connection Optimization",
          topics: [
            "Database indexes: Clustered vs non-clustered, performance tradeoffs",
            "SQL Transactions: ACID properties (Atomicity, Consistency, Isolation, Durability)",
            "Handling multi-step financial operations with BEGIN, COMMIT, and ROLLBACK",
            "Pagination patterns: LIMIT and OFFSET vs Keyset cursor-based pagination",
            "Designing audit logs and soft delete mechanics in relational schemas"
          ],
          exercise: "Implement transactional money transfer logic between two bank accounts in MySQL."
        },
        {
          week: "Week 23",
          title: "API Validation, Security Headers & Rate Limiting",
          topics: [
            "Input validation middleware using Joi or Zod schemas",
            "Sanitizing HTML payloads to protect against XSS (Cross-Site Scripting)",
            "Protecting against brute force with express-rate-limit",
            "Security HTTP headers with Helmet.js",
            "Configuring CORS (Cross-Origin Resource Sharing) properly for production"
          ],
          exercise: "Harden your Express server against common OWASP top 10 vulnerabilities."
        },
        {
          week: "Week 24",
          title: "Phase 3 Capstone: Nexa Q&A Forum Backend API",
          topics: [
            "Architecting the complete backend schema: users, questions, answers, votes",
            "Implementing user registration, login, and profile management",
            "CRUD operations for asking questions and submitting markdown answers",
            "Voting system with upvote/downvote tallies and accepted answer selection",
            "Automated API documentation with Swagger / Postman collections"
          ],
          exercise: "Deploy complete production-ready REST API to cloud with live MySQL database."
        }
      ]
    },
    {
      id: "phase-4",
      number: "Phase 4",
      title: "Project Work",
      subtitle: "Enterprise Capstone Production, Cloud Deployment & Recruiter Portfolios",
      duration: "Weeks 25 – 32 (8 Weeks)",
      badge: "Project Work",
      badgeColor: "bg-amber-950/80 text-amber-400 border-amber-800",
      accentColor: "#f39228",
      overview: "In this phase, you will synthesize your complete full-stack mastery into production capstone project work. You will design, develop, and deploy enterprise-grade real-world applications with authentic architecture, Git teamwork collaboration, database schemas, and cloud deployment.",
      skills: ["Enterprise Architecture", "Git Collaboration", "CI/CD", "Cloud Hosting", "MySQL Optimization", "Portfolio Engineering", "Technical Interviews"],
      capstoneProject: "Commercial Full-Stack Capstone Web Application Deployed to Cloud",
      weeks: [
        {
          week: "Week 25",
          title: "React.js Architecture, JSX & Functional Components",
          topics: [
            "Single Page Applications (SPAs) vs traditional server-rendered websites",
            "JSX syntax: writing HTML-like markup inside JavaScript functions",
            "Components as pure functions: reusability, composition, and props passing",
            "Managing reactive state with the useState hook",
            "Conditional rendering and rendering lists of data using map() with keys"
          ],
          exercise: "Scaffold a multi-component interactive dashboard with search filters."
        },
        {
          week: "Week 26",
          title: "React Lifecycle, useEffect & API Consumption",
          topics: [
            "The useEffect hook: handling side effects, API fetching, dependency arrays, and cleanup functions",
            "Consuming Express backend APIs using Axios and Fetch",
            "Rendering loading spinners, skeleton screens, and graceful error banners",
            "Handling user forms with controlled components and input validation",
            "Optimizing re-renders with useMemo and useCallback"
          ],
          exercise: "Connect a React frontend to your Phase 3 Express API to display live data."
        },
        {
          week: "Week 27",
          title: "Client-Side Routing with React Router v6",
          topics: [
            "Setting up BrowserRouter, Routes, and Route in modern React Router",
            "Dynamic routes with useParams() (e.g. /questions/:questionId)",
            "Programmatic navigation with useNavigate() and active link styling",
            "Building Protected Routes that check JWT token existence before rendering private views",
            "404 Not Found pages and nested layouts with Outlet"
          ],
          exercise: "Build a multi-page authenticated web application with protected dashboards."
        },
        {
          week: "Week 28",
          title: "Global State Management with Context API",
          topics: [
            "Prop drilling challenges in complex React component hierarchies",
            "React Context API: createContext, Provider, and the useContext hook",
            "Building an AuthContext to manage global login state, user tokens, and logout",
            "Building a ThemeContext / CartContext for application-wide settings",
            "Custom hooks: creating useAuth() and useFetch() for clean code reusability"
          ],
          exercise: "Centralize user authentication state across all application routes using Context API."
        },
        {
          week: "Week 29",
          title: "Nexa Capstone Project: Architecture & Frontend Scaffolding",
          topics: [
            "Project kickoff: The Nexa Production Q&A and Knowledge Platform",
            "Deconstructing user stories: Guest, Registered Member, and Moderator",
            "Designing UI mockups and translating them into modular React components",
            "Setting up global state, API service layers, and route guards",
            "Responsive layout testing across mobile, tablet, and desktop viewports"
          ],
          exercise: "Complete the frontend scaffolding and routing for the full-stack capstone."
        },
        {
          week: "Week 30",
          title: "Nexa Capstone Project: Full-Stack Integration & Testing",
          topics: [
            "Wiring React frontend to Express/MySQL backend authentication",
            "Posting questions with tags and rich markdown preview",
            "Submitting answers in real-time with optimistic UI updates",
            "Interactive voting logic (preventing duplicate votes per user)",
            "Search filtering by keyword, unanswered status, and topic tags"
          ],
          exercise: "Connect the full frontend and backend data cycle with live MySQL database."
        },
        {
          week: "Week 31",
          title: "Production Deployment, HTTPS & CI/CD Pipelines",
          topics: [
            "Building production bundles: vite build / webpack optimization and minification",
            "Hosting backend on Render / Railway / AWS EC2 with environment secrets",
            "Hosting frontend on Render / Vercel with custom domain configuration",
            "Setting up automated GitHub Actions workflow to run tests on git push",
            "Database backups and connection pool tuning in production"
          ],
          exercise: "Deploy your live production full-stack application with custom domain and SSL."
        },
        {
          week: "Week 32",
          title: "Technical Resume, GitHub Showcase & Mock Interviews",
          topics: [
            "Engineering your technical resume: framing bootcamp projects as commercial work",
            "GitHub profile optimization: README documentation, architecture diagrams, live demo links",
            "Technical whiteboard coding interviews: data structures, array algorithms, problem solving",
            "Behavioral interview mastery: the STAR method (Situation, Task, Action, Result)",
            "Graduation capstone presentation to alumni and tech recruiters"
          ],
          exercise: "Conduct your mock technical interview and present your deployed full-stack capstone."
        }
      ]
    }
  ]
};
