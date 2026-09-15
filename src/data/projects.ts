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
  // 01. SNITCH
  // ==========================================================
  {
    slug: "snitch",
    number: "01",
    archiveLabel: "01 // ARCHIVE",
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

    imageSrc: "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
    imageAlt: "SNITCH Full-Stack Commerce Platform",
  },

  // ==========================================================
  // 02. RESUME BUILDER
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