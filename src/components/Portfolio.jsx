import React, { useState } from 'react';
import { ExternalLink, Layers, TrendingUp, ShieldCheck, Cpu, ArrowUpRight, X } from 'lucide-react';

const INITIAL_PROJECTS = [
  {
    id: 'project-nexus-ai',
    title: 'Nexus Autonomous Agent Grid',
    client: 'FinTech Enterprise',
    category: 'AI Architecture',
    metric: '+310% Pipeline Throughput',
    summary: 'Multi-agent orchestration system querying low-latency vector embeddings for automated fraud risk detection.',
    details: 'Built using specialized Python multi-agent subroutines, Google Gemini APIs, and serverless cloud edge workers. Processed over 2.4 million transactions per day with zero downtime.',
    tech: ['Python', 'Google Gemini API', 'Cloud Edge Workers', 'Vector DB'],
    imageGradient: 'from-cyber-emerald/20 to-cyber-cyan/10'
  },
  {
    id: 'project-hyper-scale',
    title: 'Aura Cloud Design System',
    client: 'SaaS Unicorn Platform',
    category: 'Web Apps',
    metric: '99.99% Global Uptime',
    summary: 'A futuristic dark-mode web application platform with zero-JS static SSR rendering and glassmorphic micro-interactions.',
    details: 'Migrated legacy monolith to Astro + React island architecture deployed globally on high-availability CDN. Reduced LCP load times from 4.2s to 0.8s globally.',
    tech: ['Astro', 'React', 'Tailwind CSS', 'Headless CMS'],
    imageGradient: 'from-cyber-cyan/20 to-cyber-violet/20'
  },
  {
    id: 'project-quant-edge',
    title: 'Quantum Edge Data Mesh',
    client: 'BioTech Research Labs',
    category: 'Cloud Systems',
    metric: '< 45ms Edge Response',
    summary: 'Distributed serverless data pipeline integrating real-time telemetry streaming and strict security compliance.',
    details: 'Leveraged Serverless Edge Functions and strict Content Security Policies to ingest, sanitize, and visualize genomic telemetry data in real time.',
    tech: ['Edge Workers', 'TypeScript', 'D3.js', 'REST API'],
    imageGradient: 'from-cyber-violet/20 to-cyber-emerald/20'
  },
  {
    id: 'project-lumina-brand',
    title: 'Lumina Brand & Web Engine',
    client: 'Cybersecurity Firm',
    category: 'Brand Engineering',
    metric: '4.8x Lead Conversion',
    summary: 'Complete brand engineering overhaul, kinetic web presentation, and integrated automated proposal submission pipeline.',
    details: 'Constructed an ultra-minimalist, typography-driven digital identity featuring dynamic scroll animations and instant lead routing.',
    tech: ['React', 'Framer Motion', 'Webhook Pipeline', 'Design Tokens'],
    imageGradient: 'from-cyber-emerald/20 to-cyber-violet/20'
  }
];


export default function Portfolio({ caseStudies = INITIAL_PROJECTS }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'AI Architecture', 'Web Apps', 'Brand Engineering', 'Cloud Systems'];

  const filteredProjects = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-canvas relative z-10 border-b border-surface-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-xs font-mono text-cyber-emerald mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>PROVEN DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight">
              Selected Case Studies
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyber-emerald text-canvas font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                    : 'bg-surface-card text-brand-muted border border-surface-border hover:text-brand-text hover:border-surface-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="glass-panel glass-panel-hover rounded-2xl border border-surface-border overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              
              {/* Project Preview Graphic */}
              <div className={`h-52 bg-gradient-to-br ${project.imageGradient || 'from-surface-card to-surface-hover'} p-6 relative flex flex-col justify-between overflow-hidden border-b border-surface-border`}>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-canvas/80 text-cyber-emerald border border-surface-border">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-canvas/80 flex items-center justify-center text-brand-text group-hover:text-cyber-cyan transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-brand-muted uppercase tracking-wider">Client: {project.client}</div>
                  <div className="text-xl font-display font-bold text-brand-text mt-1 group-hover:text-cyber-emerald transition-colors">
                    {project.title}
                  </div>
                </div>

              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.metric}</span>
                  </div>
                  <span className="text-xs font-semibold text-brand-muted group-hover:text-brand-text">
                    Read Spec →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-surface-border p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-surface-card text-cyber-emerald border border-surface-border mb-3">
              {activeProjectModal.category}
            </div>

            <h3 className="text-2xl font-display font-bold text-brand-text mb-1">
              {activeProjectModal.title}
            </h3>
            <div className="text-xs font-mono text-brand-muted mb-6">Client: {activeProjectModal.client}</div>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border mb-6">
              <div className="text-xs font-mono text-cyber-cyan mb-1">KEY IMPACT METRIC</div>
              <div className="text-xl font-bold text-brand-text">{activeProjectModal.metric}</div>
            </div>

            <h4 className="text-sm font-bold text-brand-text mb-2">Technical Overview & Architecture</h4>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {activeProjectModal.details || activeProjectModal.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProjectModal.tech?.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded bg-surface-card border border-surface-border text-brand-text">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-surface-border flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-lg bg-emerald-cyan-gradient text-canvas font-bold text-xs"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
