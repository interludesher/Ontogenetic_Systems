import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Cpu, ShieldCheck, ArrowRight, Layers, Compass, Mail, ShoppingBag, Workflow, Bot, Code2, CheckCircle2 } from 'lucide-react';

export default function HomePage({ siteSettings }) {
  return (
    <div>
      {/* Hero Section */}
      <Hero siteSettings={siteSettings} />

      {/* About Us & Agency Identity Section */}
      <section className="py-24 bg-canvas relative z-10 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-cyber-emerald">
                <Cpu className="w-4 h-4" />
                <span>ABOUT ONTOGENETIC SYSTEMS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight">
                We Architect Evolving Digital Systems for Enterprise Scale.
              </h2>

              <p className="text-brand-muted text-base leading-relaxed">
                <strong className="text-brand-text">Ontogenetic Systems</strong> is a modern digital engineering consultancy. The word <em>ontogenetic</em> originates from biology and systems theory, describing organic structural development and self-assembling growth.
              </p>

              <p className="text-brand-muted text-base leading-relaxed">
                We apply this principle to software engineering — constructing robust POS platforms on PHP / Laravel, self-hosted n8n & Zapier workflow automations, autonomous GenAI agent pipelines, and high-performance React/Astro web software that evolves with your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-xl border border-surface-border flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyber-emerald flex-shrink-0" />
                  <span className="text-xs font-medium text-brand-text">100% Code Transparency & GitHub Repos</span>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-surface-border flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyber-cyan flex-shrink-0" />
                  <span className="text-xs font-medium text-brand-text">Global High-Speed Cloud CDN Infrastructure</span>
                </div>

              </div>
            </div>

            {/* Right Card / Philosophy */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-8 rounded-2xl border border-surface-border relative shadow-2xl space-y-6">
                <h3 className="text-xl font-display font-bold text-brand-text border-b border-surface-border pb-4">
                  Engineering Principles
                </h3>

                <div className="space-y-4 text-xs font-mono text-brand-muted">
                  <div className="p-3 rounded-lg bg-[#11131f] border border-surface-border">
                    <span className="text-cyber-emerald font-bold block mb-1">01. ZERO EMULATION OVERHEAD</span>
                    Direct, high-performance clean code with zero unnecessary dependencies.
                  </div>
                  <div className="p-3 rounded-lg bg-[#11131f] border border-surface-border">
                    <span className="text-cyber-cyan font-bold block mb-1">02. VERIFIABLE REPOSITORIES</span>
                    Open code availability on GitHub so clients can verify architectural quality.
                  </div>
                  <div className="p-3 rounded-lg bg-[#11131f] border border-surface-border">
                    <span className="text-cyber-violet font-bold block mb-1">03. AUTOMATED OPERATIONS</span>
                    Daily tasks automated via n8n & Zapier to minimize operational drag.
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Explore Agency Modules Navigation Hub */}
      <section className="py-24 bg-canvas relative z-10 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-text tracking-tight">
              Explore Our Specialized Agency Modules
            </h2>
            <p className="mt-3 text-brand-muted text-sm sm:text-base">
              Navigate directly to dedicated modules for services, case studies, methodology, and proposal requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Services Card */}
            <Link
              to="/services"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-surface-border group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-text group-hover:text-cyber-emerald transition-colors">
                  Services Matrix
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  PHP/Laravel POS systems, n8n/Zapier automations, GenAI agent grids, and web platforms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-bold text-cyber-emerald">
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Portfolio Card */}
            <Link
              to="/work"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-surface-border group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-cyan mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-text group-hover:text-cyber-cyan transition-colors">
                  Case Studies & GitHub
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Inspect verified client deployments and open GitHub repository code links.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-bold text-cyber-cyan">
                <span>Inspect Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Process Card */}
            <Link
              to="/process"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-surface-border group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-violet mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-text group-hover:text-cyber-violet transition-colors">
                  SDLC Methodology
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Industry-standard SDLC from requirements discovery to production release.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-bold text-cyber-violet">
                <span>Our Methodology</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Contact Card */}
            <Link
              to="/contact"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-surface-border group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-text group-hover:text-cyber-emerald transition-colors">
                  Proposal Request
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Submit your technical brief and request an enterprise engineering proposal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-bold text-cyber-emerald">
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}
