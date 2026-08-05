export const INITIAL_SERVICES = [
  {
    id: 'pos-laravel-systems',
    title: 'POS & Enterprise Management Systems',
    iconName: 'ShoppingBag',
    tagline: 'Custom Point of Sale, inventory tracking, and ERP systems built on PHP / Laravel.',
    description: 'We architect robust enterprise management software, custom POS billing platforms, multi-branch inventory tracking engines, and financial reconciliation modules engineered with PHP / Laravel backends and modern reactive frontends.',
    color: 'emerald',
    deliverables: [
      'Multi-Terminal POS Billing Interfaces',
      'Real-Time Inventory & Stock Sync',
      'PHP / Laravel RESTful API Architecture',
      'Role-Based Staff Access & Audit Logs'
    ],
    techStack: ['PHP', 'Laravel', 'MySQL / PostgreSQL', 'Vue.js / React', 'Tailwind CSS']
  },
  {
    id: 'workflow-automations',
    title: 'Daily Business Automations (n8n & Zapier)',
    iconName: 'Workflow',
    tagline: 'Automating daily repetitive business workflows, CRM integrations, and webhooks.',
    description: 'Eliminate manual data entry and operational bottlenecks. We construct custom automation pipelines using self-hosted n8n workflows and Zapier integrations that connect your CRM, accounting tools, cloud databases, and notification channels.',
    color: 'cyan',
    deliverables: [
      'Self-Hosted n8n Workflow Orchestration',
      'Zapier Enterprise Webhook Integrations',
      'Automated Lead Ingestion & CRM Routing',
      'Automated Invoice & Document Generation'
    ],
    techStack: ['n8n', 'Zapier', 'Webhooks', 'REST APIs', 'Node.js']
  },
  {
    id: 'ai-architecture',
    title: 'AI Architecture & Autonomous Systems',
    iconName: 'Bot',
    tagline: 'Custom GenAI pipelines, Agentic workflows, and specialized LLM integrations.',
    description: 'We design end-to-end artificial intelligence systems that automate complex business workflows, query specialized vector embeddings, and interface natively with modern enterprise infrastructure.',
    color: 'violet',
    deliverables: [
      'Multi-Agent System Orchestration',
      'Retrieval-Augmented Generation (RAG)',
      'Fine-Tuned Vector Database Schemas',
      'Real-Time LLM Streaming APIs'
    ],
    techStack: ['Python', 'Google Gemini API', 'Pinecone', 'FastAPI', 'LangChain']
  },
  {
    id: 'web-platforms',
    title: 'Next-Gen Web Platforms & Cloud Systems',
    iconName: 'Code2',
    tagline: 'High-speed React, Vite, and Astro applications built for high conversion and scale.',
    description: 'Custom frontend software engineered with cutting-edge web APIs, dark-mode first design systems, instant page loads, and seamless serverless global cloud routing.',
    color: 'emerald',
    deliverables: [
      'Astro / React SSR Architecture',
      'Global High-Speed Cloud CDN Infrastructure',
      'Perfect Core Web Vitals Optimization',
      'Git-Backed Headless CMS Integration'
    ],
    techStack: ['React', 'Astro', 'Tailwind CSS', 'Vite', 'Global Cloud CDN']
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'project-pos-enterprise',
    title: 'Vanguard Retail POS & Inventory Suite',
    client: 'Omnichannel Retail Network',
    category: 'POS & Enterprise Systems',
    metric: '99.98% Transaction Accuracy',
    summary: 'Multi-branch point of sale software with real-time barcode scanning, automated stock level alerts, and offline sync capability.',
    details: 'Constructed using a robust PHP / Laravel backend architecture paired with an offline-capable reactive frontend. Integrated receipt printer hardware webhooks and automated daily financial ledger reconciliations.',
    tech: ['PHP', 'Laravel', 'MySQL', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ontogenetic-systems/vanguard-pos-laravel',
    liveUrl: 'https://vanguard-pos.ontogeneticsystems.com',
    imageGradient: 'from-cyber-emerald/20 to-cyber-cyan/10'
  },
  {
    id: 'project-n8n-automation',
    title: 'Enterprise Workflow Engine (n8n & Zapier)',
    client: 'Logistics & Supply Chain Co.',
    category: 'Workflow Automations',
    metric: '180+ Hours Saved / Month',
    summary: 'Automated operational pipeline orchestrating lead ingestion, CRM status updates, PDF invoice generation, and Slack team alerts.',
    details: 'Engineered self-hosted n8n workflows and Zapier Webhook routers to automate raw logistics order processing. Reduced order fulfillment delay from 6 hours to 45 seconds.',
    tech: ['n8n', 'Zapier', 'Node.js', 'REST APIs', 'Cloud Functions'],
    githubUrl: 'https://github.com/ontogenetic-systems/n8n-supplychain-automations',
    liveUrl: 'https://automations.ontogeneticsystems.com',
    imageGradient: 'from-cyber-cyan/20 to-cyber-violet/20'
  },
  {
    id: 'project-nexus-ai',
    title: 'Nexus Autonomous Agent Grid',
    client: 'FinTech Enterprise',
    category: 'AI Architecture',
    metric: '+310% Pipeline Throughput',
    summary: 'Multi-agent orchestration system querying low-latency vector embeddings for automated fraud risk detection.',
    details: 'Built using specialized Python multi-agent subroutines, Google Gemini APIs, and high-performance serverless cloud workers. Processed over 2.4 million transactions per day with zero downtime.',
    tech: ['Python', 'Google Gemini API', 'Cloud Edge Workers', 'Vector DB'],
    githubUrl: 'https://github.com/ontogenetic-systems/nexus-ai-agent-grid',
    liveUrl: 'https://nexus-ai.ontogeneticsystems.com',
    imageGradient: 'from-cyber-violet/20 to-cyber-emerald/20'
  },
  {
    id: 'project-hyper-scale',
    title: 'Aura Cloud Design System',
    client: 'SaaS Unicorn Platform',
    category: 'Web Applications',
    metric: '99.99% Global Uptime',
    summary: 'A futuristic dark-mode web application platform with zero-JS static SSR rendering and glassmorphic micro-interactions.',
    details: 'Migrated legacy monolith to Astro + React island architecture deployed globally on a high-availability cloud CDN. Reduced LCP load times from 4.2s to 0.8s globally.',
    tech: ['Astro', 'React', 'Tailwind CSS', 'Headless CMS'],
    githubUrl: 'https://github.com/ontogenetic-systems/aura-cloud-design-system',
    liveUrl: 'https://aura-cloud.ontogeneticsystems.com',
    imageGradient: 'from-cyber-emerald/20 to-cyber-violet/20'
  }
];

export const SDLC_STAGES = [
  {
    step: '01',
    title: 'Requirements Gathering & Feasibility Analysis',
    iconName: 'Search',
    subtitle: 'Comprehensive Project Scope & System Discovery',
    description: 'We conduct rigorous stakeholder interviews, document operational bottlenecks, define data schemas, and evaluate technical feasibility before writing a single line of code.',
    deliverables: [
      'Functional & Technical Specifications (FDS)',
      'Database Entity-Relationship Diagrams (ERD)',
      'Security Compliance & Risk Audit'
    ]
  },
  {
    step: '02',
    title: 'Architecture Blueprinting & System Design',
    iconName: 'Compass',
    subtitle: 'High-Availability Architecture & UX Modeling',
    description: 'Architecting scalable backend infrastructure (Laravel/Node), designing reusable UI tokens, planning API contracts, and modeling n8n/Zapier automation workflows.',
    deliverables: [
      'Interactive Figma Design Systems & Wireframes',
      'API Contract Schemas (REST / GraphQL)',
      'High-Speed Global Cloud Infrastructure Topology'
    ]
  },
  {
    step: '03',
    title: 'Agile Development & Pipeline Automation',
    iconName: 'Code',
    subtitle: 'Iterative Engineering & CI/CD Deployment',
    description: 'Executing two-week sprint cycles with continuous integration, automated unit testing, headless CMS configuration, and n8n webhook automation wiring.',
    deliverables: [
      'Clean Modular Codebase (Git Verified)',
      'Automated Test Suites & Static Analysis',
      'Automated CI/CD Build & Deployment Integration'
    ]
  },
  {
    step: '04',
    title: 'Security Auditing, QA & Production Release',
    iconName: 'ShieldCheck',
    subtitle: 'Production Hardening & Performance Optimization',
    description: 'Performing vulnerability scans, load testing, Core Web Vitals optimization, staff training for admin controls, and zero-downtime production deployment.',
    deliverables: [
      'Penetration Testing & Security CSP Audit',
      'Core Web Vitals Performance Sign-Off (<1.2s LCP)',
      'Admin Dashboard & Staff Training Handover'
    ]
  }
];

