export const projectsData = [
  {
    slug: "snitch",
    number: "01",
    category: "E-COMMERCE SHOP",
    title: "SNITCH",
    subtitle: "Full-Stack Fashion Commerce Platform",

    description:
      "SNITCH is a full-stack fashion e-commerce platform. Designed with separate buyer and seller experiences, it offers features suchas wishlist management, secure checkout, order tracking, inventory management, seller analytics, and revenue insights. Whilebuilding SNITCH, I focused on creating a scalable architecture, reusable component systems, responsive user interfaces, andproduction-oriented backend workflows. This project strengthened my understanding of real-world application development",

    // =========================
    // CONTEXT & SCOPE
    // =========================
    client: "Personal Project",
    timeline: "Self-Directed",
    role: "Full-Stack Developer",
    team: "Solo Developer",
    year: "2026",
    status: "Production Build",

    // =========================
    // PROBLEM
    // =========================
    problem:
      "The goal was to build a complete fashion commerce experience that could support both customers and sellers within a single application. The project needed to handle product discovery, cart and wishlist flows, authentication, checkout, order management, inventory operations, and seller-side analytics without compromising usability or maintainability.",

    // =========================
    // APPROACH
    // =========================
    approach:
      "I approached SNITCH as a complete product rather than a collection of isolated screens. The application was structured around reusable React components, centralized state management, REST APIs, MongoDB data models, authentication workflows, and separate buyer and seller experiences.",

    // =========================
    // ARCHITECTURE
    // =========================
    architecture:
      "The application follows a full-stack MERN architecture. React handles the client experience, Express and Node.js power the backend APIs, MongoDB manages application data, and Redis is used where fast-access or temporary data handling is required.",

    // =========================
    // DEVELOPMENT DECISIONS
    // =========================
    decisions: [
      "Built reusable React components to keep the UI consistent across buyer and seller experiences.",
      "Used Redux Toolkit for predictable client-side state management.",
      "Designed REST APIs around authentication, products, orders, inventory, wishlist and seller operations.",
      "Used MongoDB for flexible product, user, order and inventory data.",
      "Integrated Redis for performance-sensitive application workflows and preventing unwanted request on database.",
      "Integrated Razorpay for the checkout and payment workflow.",
      "Focused on responsive interfaces across desktop, tablet and mobile devices.",
    ],

    // =========================
    // TECHNOLOGIES
    // =========================
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Redis",
      "Razorpay",
      "Imagekit",
      "Passport.js",
      "Framer Motion"
    ],

    // =========================
    // KEY FEATURES
    // =========================
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
      {
        number: "05",
        title: "Seller Analytics",
        description:
          "Revenue and sales insights designed to give sellers visibility into their store performance.",
      },
      {
        number: "06",
        title: "Responsive UI",
        description:
          "Responsive interfaces designed to provide a consistent experience across different screen sizes.",
      },
    ],

    // =========================
    // VISUALS / MEDIA
    // =========================
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
        alt: "SNITCH full-stack fashion e-commerce platform",
        caption: "SNITCH commerce experience",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
        alt: "SNITCH full-stack fashion e-commerce platform",
        caption: "SNITCH commerce experience",
      },
    ],

    // =========================
    // RESULTS & IMPACT
    // =========================
    results: [
      {
        value: "Full-Stack",
        label: "PRODUCT",
        description:
          "Built a complete commerce product covering both buyer and seller workflows.",
      },
      {
        value: "MERN",
        label: "ARCHITECTURE",
        description:
          "Implemented the application using a modern MERN-based full-stack architecture.",
      },
      {
        value: "Dual",
        label: "EXPERIENCES",
        description:
          "Created separate experiences for customers and sellers within the same platform.",
      },
      {
        value: "Responsive",
        label: "UI",
        description:
          "Designed the application to work across desktop, tablet and mobile screens.",
      },
    ],

    // =========================
    // LEARNING / OUTCOME
    // =========================
    outcome:
      "Building SNITCH strengthened my understanding of real-world full-stack application architecture, authentication, state management, database modeling, payment integration, inventory workflows, performance considerations, and the complexity of building a product beyond a simple frontend interface.",

    // =========================
    // LINKS
    // =========================
    demoUrl: "https://snitch-kd3p.onrender.com",
    codeUrl: "https://github.com/amansahux/Snitch",

    // =========================
    // NEXT PROJECT
    // =========================
    nextProject: "resume-builder",

    imageSrc:
      "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",

    imageAlt: "SNITCH",
  },

  // ==========================================================
  // RESUME BUILDER
  // ==========================================================

  {
    slug: "resume-builder",
    number: "02",
    category: "AI POWERED",
    title: "RESUME BUILDER",
    subtitle: "AI-Powered Resume Creation Platform",

    description:
      "An AI-powered Resume Builder that helps users create professional, ATS-optimized resumes through an intuitive and responsive interface. The platform combines AI-assisted content generation, customizable templates, real-time preview and PDF export into a single workflow.",

    // =========================
    // CONTEXT & SCOPE
    // =========================
    client: "Personal Project",
    timeline: "Self-Directed",
    role: "Full-Stack Developer",
    team: "Solo Developer",
    year: "2026",
    status: "Completed",

    // =========================
    // PROBLEM
    // =========================
    problem:
      "Creating a strong resume often requires users to repeatedly rewrite summaries, skills and work experience while maintaining a professional structure. The goal was to reduce that manual effort by combining guided resume creation with AI assistance while keeping the user in control of the final content.",

    // =========================
    // APPROACH
    // =========================
    approach:
      "The project was designed around a guided resume-building workflow. Users can enter their information, generate or improve content using AI assistance, preview the resume in real time, select different templates and export the final document as a PDF.",

    // =========================
    // ARCHITECTURE
    // =========================
    architecture:
      "The application uses a modern Next.js and TypeScript stack with a responsive frontend, reusable UI components, AI integration through Google Gemini, persistent resume data, customizable templates and a PDF generation workflow.",

    // =========================
    // DEVELOPMENT DECISIONS
    // =========================
    decisions: [
      "Used Next.js and TypeScript to build a structured and maintainable application.",
      "Integrated Google Gemini to assist users with resume content generation and refinement.",
      "Created reusable resume sections so users can manage different parts of their resume independently.",
      "Implemented real-time resume preview so users can immediately see changes.",
      "Added customizable templates for different visual resume styles.",
      "Implemented PDF export for generating a shareable final resume.",
      "Focused on responsive UX so resume creation remains usable across different devices.",
    ],

    // =========================
    // TECHNOLOGIES
    // =========================
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini",
      "Framer Motion",
    ],

    // =========================
    // KEY FEATURES
    // =========================
    features: [
      {
        number: "01",
        title: "AI Assistance",
        description:
          "Uses Google Gemini to help generate and improve resume summaries, skills and professional experience content.",
      },
      {
        number: "02",
        title: "Live Resume Preview",
        description:
          "Users can see their resume update in real time while editing its content.",
      },
      {
        number: "03",
        title: "Custom Templates",
        description:
          "Multiple resume templates allow users to choose a presentation style that fits their profile.",
      },
      {
        number: "04",
        title: "ATS Optimization",
        description:
          "The platform focuses on structured and professional resume content suitable for ATS-oriented applications.",
      },
      {
        number: "05",
        title: "PDF Export",
        description:
          "Users can export their completed resume into a shareable PDF document.",
      },
      {
        number: "06",
        title: "Responsive Experience",
        description:
          "The resume creation workflow adapts to desktop, tablet and mobile screen sizes.",
      },
    ],

    // =========================
    // VISUALS / MEDIA
    // =========================
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",
        alt: "AI-powered Resume Builder",
        caption: "AI-powered resume creation interface",
      },
    ],

    // =========================
    // RESULTS & IMPACT
    // =========================
    results: [
      {
        value: "AI",
        label: "ASSISTED",
        description:
          "Integrated AI assistance directly into the resume creation workflow.",
      },
      {
        value: "Live",
        label: "PREVIEW",
        description:
          "Users can instantly see how their resume changes affect the final document.",
      },
      {
        value: "PDF",
        label: "EXPORT",
        description:
          "Completed resumes can be exported into a shareable PDF format.",
      },
      {
        value: "Multi",
        label: "TEMPLATES",
        description:
          "Users can choose between different customizable resume presentation styles.",
      },
    ],

    // =========================
    // LEARNING / OUTCOME
    // =========================
    outcome:
      "This project strengthened my understanding of AI-assisted product development, Next.js application architecture, TypeScript, responsive UI systems, AI integration, document generation and the UX challenges involved in combining structured forms with real-time visual previews.",

    // =========================
    // LINKS
    // =========================
    demoUrl: "https://resume-builder-nu-woad-89.vercel.app",
    codeUrl: "https://github.com/amansahux/Resume-Builder",

    // =========================
    // NEXT PROJECT
    // =========================
    nextProject: "snitch",

    imageSrc:
      "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",

    imageAlt: "RESUME BUILDER",
  },
];