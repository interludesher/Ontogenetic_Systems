import React, { useState } from 'react';
import { INITIAL_SERVICES } from '../data/initialData';
import { ShoppingBag, Workflow, Bot, Code2, Check, ChevronRight, X, Terminal, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  ShoppingBag: ShoppingBag,
  Workflow: Workflow,
  Bot: Bot,
  Code2: Code2
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-28 pb-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-cyber-cyan mb-4">
            <Cpu className="w-4 h-4" />
            <span>ENTERPRISE SERVICE ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-brand-text tracking-tight">
            Specialized Engineering & Automation Capabilities
          </h1>
          <p className="mt-4 text-brand-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From custom PHP / Laravel POS software to n8n & Zapier workflow automations and multi-agent GenAI systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INITIAL_SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-surface-border flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-surface-card border border-surface-border flex items-center justify-center group-hover:border-cyber-emerald transition-colors">
                      <Icon className="w-7 h-7 text-cyber-emerald group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-mono text-brand-muted px-3 py-1 rounded bg-surface-card border border-surface-border">
                      SERVICE 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-brand-text group-hover:text-cyber-emerald transition-colors">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Preview */}
                  <div className="mt-6 space-y-2">
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs font-medium text-brand-text">
                        <Check className="w-3.5 h-3.5 text-cyber-emerald flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-card text-brand-muted border border-surface-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-1 text-xs font-bold text-cyber-emerald hover:text-cyber-cyan transition-colors"
                  >
                    <span>Full Spec</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-surface-border text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-text mb-3">
            Need a Custom POS System or n8n Automation Engine?
          </h3>
          <p className="text-brand-muted text-sm max-w-xl mx-auto mb-6">
            Consult with our engineering team to design custom PHP / Laravel POS backends, inventory pipelines, or Zapier automation triggers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all"
          >
            <span>Request System Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Technical Spec Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-surface-border p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald">
                {React.createElement(ICON_MAP[selectedService.iconName] || Code2, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-brand-text">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-mono text-cyber-cyan">TECHNICAL ARCHITECTURE SPEC</span>
              </div>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-emerald" />
                <span>Primary Deliverables & Scope</span>
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
                <span className="text-xs text-brand-muted font-mono">Technologies:</span>
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

    </div>
  );
}
