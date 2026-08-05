import React, { useState } from 'react';
import { Bot, Code2, Palette, Cloud, Check, ChevronRight, X, Terminal, Cpu } from 'lucide-react';

const SERVICES = [
  {
    id: 'ai-architecture',
    title: 'AI Architecture & Autonomous Systems',
    icon: Bot,
    tagline: 'Custom GenAI pipelines, Agentic workflows, and LLM integrations.',
    description: 'We design end-to-end artificial intelligence systems that automate complex business workflows, query specialized vector embeddings, and interface natively with modern enterprise infrastructure.',
    color: 'emerald',
    deliverables: [
      'Multi-Agent System Orchestration',
      'Retrieval-Augmented Generation (RAG)',
      'Fine-Tuned Vector Database Schemas',
      'Real-Time LLM Streaming APIs'
    ],
    techStack: ['Python', 'LangChain', 'Pinecone', 'FastAPI', 'Google Gemini']
  },
  {
    id: 'web-platforms',
    title: 'Next-Gen Web Platforms',
    icon: Code2,
    tagline: 'High-speed React, Vite, and Astro web applications built for scale.',
    description: 'Custom frontend software engineered with cutting-edge web APIs, dark-mode first design systems, instant page loads, and seamless serverless routing.',
    color: 'cyan',
    deliverables: [
      'Astro / React SSR Architecture',
      'Global High-Speed Cloud CDN Deployment',
      'Perfect Core Web Vitals Optimization',
      'Headless CMS Git Integration'
    ],
    techStack: ['React', 'Astro', 'Tailwind CSS', 'Vite', 'Global Cloud CDN']
  },
  {
    id: 'brand-engineering',
    title: 'Brand Engineering & UI/UX',
    icon: Palette,
    tagline: 'Futuristic design systems, kinetic visuals, and interactive prototypes.',
    description: 'We construct distinctive digital identities that command attention. From glassmorphic user interfaces to micro-interactions, we turn technical capabilities into visually captivating user experiences.',
    color: 'violet',
    deliverables: [
      'Comprehensive Design Token System',
      'Interactive Figma UI Kits',
      'Micro-Animation & Shader Effects',
      'Accessibility (WCAG 2.1 AA) Compliance'
    ],
    techStack: ['Figma', 'Framer Motion', 'GSAP', 'CSS Modules', 'Lucide Vector']
  },
  {
    id: 'cloud-edge',
    title: 'Cloud Systems & Edge Ops',
    icon: Cloud,
    tagline: 'Serverless functions, global CDN routing, and automated CI/CD pipelines.',
    description: 'Architecting resilient cloud pipelines that scale automatically under load. We streamline deployment workflows using Edge Rules, automated GitHub actions, and secure secret vaults.',
    color: 'emerald',
    deliverables: [
      'Automated Git-to-Cloud Deployments',
      'Serverless Edge Function Routers',
      'Security Headers & CSP Audit',
      'Monitoring & Log Analytics'
    ],
    techStack: ['GitHub Actions', 'Docker', 'REST / GraphQL', 'Cloud Workers']
  }
];


export default function ServicesMatrix() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-canvas relative z-10 border-b border-surface-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-xs font-mono text-cyber-cyan mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE SYSTEM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight">
            Ontogenetic Service Matrix
          </h2>
          <p className="mt-4 text-brand-muted text-base sm:text-lg">
            High-precision engineering services designed to transform digital concepts into resilient enterprise platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-surface-border cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center group-hover:border-cyber-emerald transition-colors">
                      <Icon className="w-6 h-6 text-cyber-emerald group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-mono text-brand-muted px-2.5 py-1 rounded bg-surface-card border border-surface-border">
                      CAPABILITY 0{SERVICES.indexOf(service) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-brand-text group-hover:text-cyber-emerald transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-card text-brand-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-cyber-emerald group-hover:translate-x-1 transition-transform">
                    <span>Technical Spec</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Technical Spec Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-surface-border p-6 sm:p-8 relative shadow-2xl animate-float">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald">
                <selectedService.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-brand-text">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-mono text-cyber-cyan">SPECIFICATION & DELIVERABLES</span>
              </div>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-emerald" />
                <span>Primary Deliverables</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-brand-text bg-surface-card p-3 rounded-lg border border-surface-border">
                    <Check className="w-4 h-4 text-cyber-emerald flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-muted font-mono">Tech Stack:</span>
                {selectedService.techStack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-surface-card border border-surface-border text-cyber-cyan">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-lg bg-emerald-cyan-gradient text-canvas font-bold text-xs"
              >
                Close Spec
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
