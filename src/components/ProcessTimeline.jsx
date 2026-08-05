import React from 'react';
import { Search, Compass, Terminal, Rocket, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Mapping',
    icon: Search,
    description: 'We analyze target user flows, system boundaries, and performance benchmarks to construct a detailed technical architecture proposal.',
    highlights: ['System Requirements Specs', 'UX Wireframes', 'Core Stack Selection']
  },
  {
    step: '02',
    title: 'Architectural Engineering',
    icon: Compass,
    description: 'Constructing reusable design tokens, glassmorphic UI components, and configuring headless CMS schemas for non-technical content management.',
    highlights: ['Design System Tokens', 'CMS Schema Blueprint', 'High-Speed CDN Edge Routing']
  },
  {
    step: '03',
    title: 'Autonomous Development',
    icon: Terminal,
    description: 'Building high-speed React & Astro component islands, integrating GenAI agent pipelines, and ensuring zero layout shifts.',
    highlights: ['React Island Hydration', 'API Integration', 'Zero Emoji Graphic Audit']
  },
  {
    step: '04',
    title: 'Edge Deployment & Launch',
    icon: Rocket,
    description: 'Deploying to high-availability global CDN infrastructure with automated CI/CD pipelines, security header policies, and Core Web Vitals performance tuning.',
    highlights: ['Global Production CDN Launch', 'LCP < 1.2s Audit', 'Automated Form & Webhook Verification']
  }
];


export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-canvas relative z-10 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-xs font-mono text-cyber-violet mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>ONTOGENETIC METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight">
            System Evolution Process
          </h2>
          <p className="mt-4 text-brand-muted text-base sm:text-lg">
            Our structured 4-phase lifecycle transforms ideas into high-performance enterprise digital software.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="glass-panel p-6 rounded-2xl border border-surface-border relative group hover:border-cyber-emerald transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-cyber-emerald">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-brand-text mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-surface-border">
                  {step.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-[11px] font-mono text-brand-text">
                      <CheckCircle className="w-3.5 h-3.5 text-cyber-emerald flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
