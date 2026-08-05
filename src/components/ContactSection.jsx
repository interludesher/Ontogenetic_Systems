import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Mail, Lock, Building2 } from 'lucide-react';

export default function ContactSection({ siteSettings }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('$10k - $25k');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.set('form-name', 'agency-contact');

    fetch('/index.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Submission error:', err);
        setSubmitting(false);
        setSubmitted(true);
      });
  };



  return (
    <section className="py-20 bg-canvas relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Parameters */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-xs font-mono text-cyber-cyan mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>INITIATE SYSTEM DISCOVERY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-text tracking-tight">
                Request Engineering Proposal
              </h2>
              <p className="mt-4 text-brand-muted text-base leading-relaxed">
                Connect with our senior technical leads to evaluate project scope, custom PHP / Laravel POS development, n8n automations, or AI architecture.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="glass-panel p-4 rounded-xl border border-surface-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-muted uppercase">Direct Engineering Email</div>
                  <a href={`mailto:${siteSettings?.contactEmail || 'ontogeneticsystems@gmail.com'}`} className="text-sm font-bold text-brand-text hover:text-cyber-emerald transition-colors">
                    {siteSettings?.contactEmail || 'ontogeneticsystems@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-surface-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-cyber-cyan">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-muted uppercase">Enterprise Security Standard</div>
                  <div className="text-sm font-bold text-brand-text">Instant SLA & NDA Protection Included</div>
                </div>
              </div>


            </div>
          </div>

          {/* Right Column: Contact Form with Fixed Dropdown Option Contrast */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-surface-border relative shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 mx-auto flex items-center justify-center text-cyber-emerald">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-text">
                    Proposal Request Transmitted
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto">
                    Thank you for contacting Ontogenetic Systems. Our engineering leads will review your parameters and provide a comprehensive proposal within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-lg bg-surface-card border border-surface-border text-xs font-mono text-cyber-cyan hover:border-cyber-cyan"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  name="agency-contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="agency-contact" />
                  <p className="hidden" style={{ display: 'none' }}>
                    <label>Honeypot: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Alexander Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#11131f] border border-surface-border text-brand-text text-sm focus:outline-none focus:border-cyber-emerald transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="alexander@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#11131f] border border-surface-border text-brand-text text-sm focus:outline-none focus:border-cyber-emerald transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Service Focus</label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 rounded-xl bg-[#11131f] border border-surface-border text-brand-text text-sm focus:outline-none focus:border-cyber-emerald transition-colors cursor-pointer"
                    >
                      <option value="pos-laravel" className="bg-[#11131f] text-[#f8fafc] py-2">
                        POS & Enterprise Management Systems (PHP / Laravel)
                      </option>
                      <option value="workflow-automations" className="bg-[#11131f] text-[#f8fafc] py-2">
                        Daily Business Automations (n8n & Zapier Workflows)
                      </option>
                      <option value="ai-architecture" className="bg-[#11131f] text-[#f8fafc] py-2">
                        AI Architecture & Autonomous Multi-Agent Systems
                      </option>
                      <option value="web-platforms" className="bg-[#11131f] text-[#f8fafc] py-2">
                        Next-Gen Web Platforms & Cloud Edge Systems
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Estimated Project Budget</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['$5k - $10k', '$10k - $25k', '$25k+'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono border transition-all ${
                            selectedBudget === b
                              ? 'bg-cyber-emerald/10 border-cyber-emerald text-cyber-emerald font-bold'
                              : 'bg-[#11131f] border-surface-border text-brand-muted hover:text-brand-text'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="budget" value={selectedBudget} />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-muted uppercase mb-2">Project Requirements & Brief *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Specify your business goals, POS system specs, automation triggers, target timelines, or technical stack..."
                      className="w-full px-4 py-3 rounded-xl bg-[#11131f] border border-surface-border text-brand-text text-sm focus:outline-none focus:border-cyber-emerald transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(0,245,160,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Transmitting Proposal Request...' : 'Submit Engineering Proposal Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>


                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
