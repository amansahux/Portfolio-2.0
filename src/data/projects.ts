export interface ProjectFeature {
  number: string;
  title: string;
  description: string;
}

export interface ProjectMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  figureLabel?: string;
  badge?: string;
}

export interface ProjectResult {
  value: string;
  label: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  number: string;
  archiveLabel?: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;

  // CONTEXT & SCOPE
  client: string;
  timeline: string;
  role: string;
  team: string;
  year: string;
  status: string;

  // PROCESS & STRATEGY
  problem: string;
  approach: string;
  architecture?: string;
  decisions?: string[];

  // TECHNOLOGIES
  technologies: string[];

  // KEY FEATURES
  features?: ProjectFeature[];

  // VISUALS / MEDIA
  telemetryUrl?: string;
  telemetryStatus?: string;
  media: ProjectMediaItem[];

  // RESULTS & IMPACT
  results: ProjectResult[];
  outcome: string;

  // LINKS & ACCESS
  demoUrl: string;
  codeUrl: string;
  versionLabel?: string;

  // NAVIGATION
  nextProject: string;

  // COMPATIBILITY
  imageSrc: string;
  imageAlt: string;
}

export const projectsData: ProjectItem[] = [
  // ==========================================================
  // 01. Recoz Feedback
  // ==========================================================
  {
    slug: "recoz-feedback",
    number: "01",
    archiveLabel: "01 // ARCHIVE",
    category: "CUSTOMER FEEDBACK PLATFORM",
    title: "Recoz Feedback",
    subtitle: "Customer Feedback & Experience Platform",

    description:
      "A customer feedback platform built to help businesses collect responses through public surveys, measure NPS, CSAT, and CES, analyze customer sentiment and recurring topics, and manage feedback through a simple closed-loop workflow.",

    // CONTEXT & SCOPE
    client: "Personal Project",
    timeline: "Self-Directed",
    role: "Full-Stack Developer",
    team: "Solo Developer",
    year: "2026",
    status: "MVP / Production Ready",

    // PROCESS & STRATEGY
    problem:
      "Customer feedback is often scattered across forms, messages, and disconnected workflows, making it difficult for businesses to understand customer experience and act on recurring issues. The core challenge was creating one streamlined system that could collect feedback, measure experience, surface meaningful patterns, and track issues through resolution.",

    approach:
      "Engineered a modular MERN application where businesses can create dynamic feedback surveys, publish them through shareable links, QR codes, and website widgets, collect responses without requiring customer accounts, and manage resulting feedback through metrics, text analysis, status tracking, and follow-up workflows.",

    architecture:
      "The platform follows a 4-layered MERN architecture with React and React Router powering the client application, TanStack Query managing server state, Redux Toolkit handling lightweight client state, and an Express/Node.js REST API organized into routes, controllers, services, and Mongoose data models backed by MongoDB. Authentication uses an access-and-refresh-token strategy with the refresh token stored in a secure HTTP-only cookie.",

    decisions: [
      "Designed a dynamic survey system where questions are embedded within surveys and each question has its own identifier for reliable answer mapping.",
      "Used TanStack Query for server-state fetching, caching, and mutations while keeping Redux Toolkit limited to client-side global state.",
      "Implemented access-and-refresh-token authentication where a short-lived access token is sent in the response body and a long-lived refresh token is stored in a secure HTTP-only cookie, enabling silent token rotation without exposing credentials to client-side storage.",
      "Designed public survey routes that allow external customers to submit feedback without creating Recoz accounts.",
      "Built organization-level data isolation so authenticated business users only access their own surveys, customers, responses, and analytics.",
      "Implemented NPS, CSAT, and CES calculations directly from collected response data.",
      "Built a lightweight response-analysis layer for sentiment and topic detection without requiring paid external AI services.",
      "Added QR-code and website-widget distribution methods that reuse the same dynamic public survey experience.",
      "Structured feedback around a simple open → in-progress → resolved lifecycle with internal follow-up notes.",
      "Designed responsive customer-facing and business-facing interfaces using reusable React components.",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "React Router",
      "Recharts"
    ],

    features: [
      {
        number: "01",
        title: "Multi-Channel Feedback",
        description:
          "Create dynamic surveys and distribute them through public links, QR codes, and embeddable website widgets.",
      },
      {
        number: "02",
        title: "Experience Measurement",
        description:
          "Collect and calculate NPS, CSAT, and CES scores directly from customer responses with dedicated metrics and analytics views.",
      },
      {
        number: "03",
        title: "Response Analysis",
        description:
          "Analyze submitted text responses using sentiment and topic detection to surface recurring customer concerns and experience patterns.",
      },
      {
        number: "04",
        title: "Closed-Loop Feedback",
        description:
          "Review individual responses, track their status, add internal follow-up notes, and move feedback from open to in-progress and finally resolved.",
      },
    ],

    // VISUALS / MEDIA
    telemetryUrl: "",
    telemetryStatus: "",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/image_vqaRuvLok.png?updatedAt=1790876800879",
        alt: "Recoz Feedback customer feedback dashboard",
        caption: "Recoz Feedback Analytics & Customer Experience Dashboard",
        figureLabel: "FIGURE 2.1 — ANALYTICS & EXPERIENCE OVERVIEW",
        badge: "PRODUCT UI",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/image_VjYPxhRIm.png",
        alt: "Recoz Feedback survey builder and feedback workflow",
        caption: "Recoz Feedback Survey Builder & Response Management",
        figureLabel: "FIGURE 2.2 — SURVEY & FEEDBACK WORKFLOWS",
        badge: "MVP SYSTEM",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/image_Ofoe89Rxo.png",
        alt: "Recoz Feedback survey builder and feedback workflow",
        caption: "Recoz Feedback Survey Builder & Response Management",
        figureLabel: "FIGURE 2.2 — SURVEY & FEEDBACK WORKFLOWS",
        badge: "MVP SYSTEM",
      },
    ],

    // RESULTS & IMPACT
    results: [
      {
        value: "MERN",
        label: "FULL-STACK PRODUCT",
        description:
          "Built a complete feedback platform spanning authentication, survey creation, response collection, analytics, and feedback management.",
      },
      {
        value: "3",
        label: "CORE CX METRICS",
        description:
          "Implemented NPS, CSAT, and CES measurement directly from collected customer responses.",
      },
      {
        value: "3",
        label: "FEEDBACK CHANNELS",
        description:
          "Enabled customer response collection through public links, QR codes, and website widgets.",
      },
      {
        value: "100%",
        label: "RESPONSIVE EXPERIENCE",
        description:
          "Designed responsive business dashboards and mobile-first customer feedback experiences across modern breakpoints.",
      },
    ],

    outcome:
      "Strengthened full-stack product engineering skills across authentication, REST API architecture, dynamic survey systems, MongoDB data modeling, customer feedback analytics, responsive UX, and organization-scoped application design.",

    // LINKS
    demoUrl: "https://recozfeedback.up.railway.app/",
    codeUrl: "https://github.com/amansahux/Ricoz-Feedback",
    versionLabel: "VERSION 1.0.0-MVP",

    nextProject: "snitch",

    imageSrc: "https://ik.imagekit.io/sg9dyvpi0/Recoz%20Feedback%20Feature%20Grid.png",
    imageAlt: "Recoz Feedback Customer Feedback & Experience Platform",
  },

  // ==========================================================
  // 02. SNITCH
  // ==========================================================

  {
    slug: "snitch",
    number: "02",
    archiveLabel: "02 // ARCHIVE",
    category: "E-COMMERCE SHOP",
    title: "SNITCH",
    subtitle: "Full-Stack Fashion Commerce Platform",

    description:
      "A comprehensive full-stack fashion commerce platform architected with separate high-velocity buyer discovery flows and dedicated seller administration consoles, featuring atomic inventory management, real-time order tracking, and secure payment processing.",

    // CONTEXT & SCOPE
    client: "Personal Project",
    timeline: "Self-Directed",
    role: "Full-Stack Developer",
    team: "Solo Developer",
    year: "2026",
    status: "Production Live",

    // PROCESS & STRATEGY
    problem:
      "Traditional single-store setups often suffer from severe database contention between customer-facing catalog browsing and seller-side inventory mutations. Building a unified commerce application that guarantees instant checkout transactions without overselling or slow inventory synchronization was the core technical hurdle.",

    approach:
      "Engineered a modular MERN architecture with Redis-assisted data access layers to isolate heavy traffic spikes from core MongoDB transactional workflows. Built dedicated customer interfaces alongside seller dashboards for inventory control, automated order dispatch, and revenue metrics.",

    architecture:
      "The platform follows a decoupled full-stack architecture. React and Redux Toolkit manage predictive UI state, Express/Node.js micro-handlers process REST APIs, MongoDB handles persistent catalog and user data, and Redis handles fast cache queries.",

    decisions: [
      "Built reusable React components to keep UI consistent across buyer and seller workspaces.",
      "Used Redux Toolkit for predictable client-side state and optimistic cart updates.",
      "Designed REST APIs around authentication, products, orders, inventory, and wishlist operations.",
      "Used MongoDB schemas for flexible product variant, user, order, and inventory management.",
      "Integrated Redis caching for high-frequency queries and database load shedding.",
      "Integrated Razorpay SDK for instant checkout and webhook-verified order creation.",
      "Designed responsive UI across desktop, tablet, and mobile breakpoints.",
    ],

    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Redis",
      "Razorpay",
      "Passport.js",
      "Framer Motion",
    ],

    features: [
      {
        number: "01",
        title: "Buyer Experience",
        description:
          "Product discovery, product details, wishlist management, cart workflows and order tracking.",
      },
      {
        number: "02",
        title: "Seller Experience",
        description:
          "Dedicated seller workflows for managing products, inventory, orders and business information.",
      },
      {
        number: "03",
        title: "Secure Checkout",
        description:
          "Integrated checkout flow with Razorpay payment processing and order creation.",
      },
      {
        number: "04",
        title: "Inventory Management",
        description:
          "Seller-side inventory workflows for managing product availability and stock information.",
      },
    ],

    // VISUALS / MEDIA
    telemetryUrl: "snitch.commerce/telemetry-live",
    telemetryStatus: "GATEWAY: ACTIVE",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
        alt: "SNITCH full-stack fashion e-commerce platform overview",
        caption: "SNITCH Full-Stack Commerce Experience",
        figureLabel: "FIGURE 1.1 — BUYER STOREFRONT & CATALOG",
        badge: "PRODUCTION UI",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
        alt: "SNITCH seller console and inventory workflows",
        caption: "SNITCH seller console and management dashboard",
        figureLabel: "FIGURE 1.2 — ORDER & INVENTORY WORKFLOWS",
        badge: "SELLER PORTAL",
      },
    ],

    // RESULTS & IMPACT
    results: [
      {
        value: "Full-Stack",
        label: "PRODUCT SUITE",
        description: "Built a complete commerce product covering buyer and seller workflows.",
      },
      {
        value: "MERN",
        label: "ARCHITECTURE",
        description: "Decoupled backend API services with MongoDB & Redis data caching.",
      },
      {
        value: "Dual",
        label: "EXPERIENCES",
        description: "Dedicated interfaces for end customers and merchant inventory managers.",
      },
      {
        value: "100%",
        label: "RESPONSIVE UI",
        description: "Fluid cross-device experience tuned for desktop, tablet, and mobile.",
      },
    ],

    outcome:
      "Strengthened end-to-end full-stack engineering proficiency across authentication, state management, database modeling, payment gateway integrations, and high-concurrency order workflows.",

    // LINKS
    demoUrl: "https://snitch-kd3p.onrender.com",
    codeUrl: "https://github.com/amansahux/Snitch",
    versionLabel: "VERSION 1.4.0-PROD",

    nextProject: "resume-builder",

    imageSrc: "https://ik.imagekit.io/sg9dyvpi0/Snitch%20Mast.png",
    imageAlt: "SNITCH Full-Stack Commerce Platform",
  },

  // ==========================================================
  // 03. RESUME BUILDER
  // ==========================================================
  {
    slug: "resume-builder",
    number: "02",
    archiveLabel: "02 // ARCHIVE",
    category: "AI POWERED",
    title: "RESUME BUILDER",
    subtitle: "AI-Powered Resume Creation Platform",

    description:
      "An AI-augmented resume creation platform that leverages Google Gemini to synthesize ATS-optimized career profiles, combining real-time reactive DOM previewing with deterministic client-side PDF document generation.",

    // CONTEXT & SCOPE
    client: "Personal Project",
    timeline: "Self-Directed",
    role: "Full-Stack Developer",
    team: "Solo Developer",
    year: "2026",
    status: "Production Live",

    // PROCESS & STRATEGY
    problem:
      "Job seekers frequently struggle with repetitive phrasing, weak impact statements, and formatting incompatibilities with modern applicant tracking systems (ATS). Designing a system that generates impactful content while providing instant visual fidelity and template styling required real-time state synchronization.",

    approach:
      "Integrated Google Gemini AI for contextual resume bullet generation alongside structured schema validation. Constructed a dual-pane reactive editor where input modifications immediately trigger live document rendering and export-ready PDF vector mapping.",

    architecture:
      "Built with Next.js App Router and TypeScript. Leverages Gemini generative API pipelines with streaming responses, synchronized client state for real-time document canvas rendering, and modular layout presets.",

    decisions: [
      "Used Next.js and TypeScript to construct a reliable, type-safe application architecture.",
      "Integrated Google Gemini models to assist users with executive summary and bullet point generation.",
      "Engineered modular resume block components for independent section editing and reordering.",
      "Implemented zero-latency live preview for instant user feedback while editing.",
      "Added customizable ATS-tested layout templates for diverse professional industries.",
      "Engineered clean PDF export pipelines for high-resolution printable documents.",
      "Maintained full responsive usability across desktop, tablet, and mobile screens.",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Tailwind CSS",
      "Framer Motion",
      "React Hooks",
    ],

    features: [
      {
        number: "01",
        title: "AI Synthesis",
        description:
          "Leverages Google Gemini to formulate tailored professional summaries and impact bullet points.",
      },
      {
        number: "02",
        title: "Live Preview Engine",
        description:
          "Instantaneous document canvas re-renders as user inputs change.",
      },
      {
        number: "03",
        title: "ATS-Ready Templates",
        description:
          "Clean typography and structured layouts designed to score high on automated scanners.",
      },
      {
        number: "04",
        title: "Direct PDF Generation",
        description:
          "Instant export of polished, recruiter-ready PDF files directly from the browser.",
      },
    ],

    // VISUALS / MEDIA
    telemetryUrl: "resumebuilder.app/telemetry-live",
    telemetryStatus: "AI PIPELINE: READY",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",
        alt: "AI-Powered Resume Builder Interface Overview",
        caption: "AI-Powered Resume Creation Interface",
        figureLabel: "FIGURE 2.1 — AI GENERATION & LIVE PREVIEW",
        badge: "WEB APP",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",
        alt: "AI-Powered Resume Builder Templates & Export",
        caption: "Customizable templates and instant PDF export pipeline",
        figureLabel: "FIGURE 2.2 — TEMPLATE ENGINE & PDF EXPORT",
        badge: "EXPORT SUITE",
      },
    ],

    // RESULTS & IMPACT
    results: [
      {
        value: "Gemini",
        label: "AI INTEGRATION",
        description: "Contextual AI content enhancement built directly into creation forms.",
      },
      {
        value: "Real-Time",
        label: "LIVE PREVIEW",
        description: "Zero-latency synchronized canvas previewing while editing content.",
      },
      {
        value: "Vector",
        label: "PDF EXPORT",
        description: "Deterministic document export producing crisp printable resumes.",
      },
      {
        value: "Multi",
        label: "TEMPLATES",
        description: "Curated typography and layouts tailored for diverse career roles.",
      },
    ],

    outcome:
      "Deepened expertise in AI prompt orchestration, reactive document architectures, Next.js server and client boundaries, and crafting friction-free user workflows.",

    // LINKS
    demoUrl: "https://resume-builder-nu-woad-89.vercel.app",
    codeUrl: "https://github.com/amansahux/Resume-Builder",
    versionLabel: "VERSION 1.2.0-PROD",

    nextProject: "snitch",

    imageSrc: "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",
    imageAlt: "AI-Powered Resume Builder Platform",
  },

];