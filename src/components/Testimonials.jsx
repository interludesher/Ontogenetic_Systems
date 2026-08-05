import React from 'react';
import { Star, ShieldCheck, Quote, Building2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'FinTech Global Systems',
    initials: 'MV',
    rating: 5,
    quote: 'Ontogenetic Systems engineered our AI agent infrastructure with incredible precision. Our transaction pipeline speed increased by 310% with absolute reliability.',
    tag: 'Enterprise Client'
  },
  {
    id: 2,
    name: 'Dr. Elena Rostova',
    role: 'Head of Digital Products',
    company: 'Aura BioLabs',
    initials: 'ER',
    rating: 5,
    quote: 'The dark-mode glassmorphic interface and high-speed global CDN setup transformed our web platform. Our global page load times dropped to sub-second speeds.',
    tag: 'SaaS Client'
  },
  {
    id: 3,
    name: 'David K. Thorne',
    role: 'Founder & CEO',
    company: 'Lumina Security',
    initials: 'DT',
    rating: 5,
    quote: 'Having the intuitive admin control center combined with custom design tokens allowed our marketing team to publish case studies independently without touching code.',
    tag: 'Cybersecurity Client'
  }
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-canvas relative z-10 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-xs font-mono text-cyber-emerald mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CLIENT VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight">
            Client Endorsements
          </h2>
          <p className="mt-4 text-brand-muted text-base sm:text-lg">
            Feedback from technology executives and enterprise partners who rely on Ontogenetic Systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 rounded-2xl border border-surface-border flex flex-col justify-between group hover:border-cyber-cyan transition-all"
            >
              <div>
                {/* Header & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-cyber-emerald">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyber-emerald" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface-card border border-surface-border text-brand-muted">
                    {item.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-cyber-cyan/30 mb-4" />

                <p className="text-sm text-brand-text leading-relaxed font-normal mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-surface-border flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-surface-card border border-cyber-emerald/40 flex items-center justify-center font-mono font-bold text-cyber-emerald text-sm">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-text">
                    {item.name}
                  </h3>
                  <div className="text-xs text-brand-muted">
                    {item.role}
                  </div>
                  <div className="text-[11px] font-mono text-cyber-cyan flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
