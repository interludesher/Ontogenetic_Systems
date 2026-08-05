import React from 'react';
import { SDLC_STAGES } from '../data/initialData';
import { Compass, Search, Code, ShieldCheck, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  Search: Search,
  Compass: Compass,
  Code: Code,
  ShieldCheck: ShieldCheck
};

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-cyber-violet mb-4">
            <Compass className="w-4 h-4" />
            <span>ENTERPRISE SDLC METHODOLOGY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-brand-text tracking-tight">
            Industry-Standard Software Engineering Lifecycle
          </h1>
          <p className="mt-4 text-brand-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Our disciplined, 4-phase enterprise methodology ensures full requirement alignment, rigorous architectural design, continuous test automation, and zero-downtime releases.
          </p>
        </div>

        {/* Stage Timeline Cards */}
        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {SDLC_STAGES.map((stage, index) => {
            const Icon = ICON_MAP[stage.iconName] || Compass;
            return (
              <div
                key={stage.step}
                className="glass-panel p-8 rounded-2xl border border-surface-border relative overflow-hidden flex flex-col md:flex-row gap-8 items-start group hover:border-cyber-emerald transition-all"
              >
                
                {/* Step Number & Icon Column */}
                <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-auto gap-4 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-cyber-cyan">
                    STAGE {stage.step}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-cyber-emerald uppercase tracking-wider">
                      {stage.subtitle}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-brand-text mt-1">
                      {stage.title}
                    </h2>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Primary Deliverables */}
                  <div className="pt-4 border-t border-surface-border">
                    <div className="text-xs font-mono text-brand-text uppercase mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyber-emerald" />
                      <span>Stage Artifacts & Deliverables</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {stage.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs font-medium text-brand-text bg-surface-card p-3 rounded-xl border border-surface-border">
                          <CheckCircle2 className="w-4 h-4 text-cyber-emerald flex-shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-surface-border text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-text mb-3">
            Ready to Begin Phase 1 Discovery & Requirements Mapping?
          </h3>
          <p className="text-brand-muted text-sm max-w-xl mx-auto mb-6">
            Initiate a discovery session with our lead architects to scope your enterprise POS software, automation engine, or web platform.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all"
          >
            <span>Initiate Phase 1 Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
