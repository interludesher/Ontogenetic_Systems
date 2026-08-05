import React, { useState } from 'react';
import { Sliders, X, ShieldCheck, RefreshCw, Save, Sparkles, Check, Globe } from 'lucide-react';

export default function AdminDrawer({ isOpen, onClose, siteSettings, onUpdateSettings }) {
  const [formData, setFormData] = useState({
    heroHeadline: siteSettings?.heroHeadline || '',
    heroSubtitle: siteSettings?.heroSubtitle || '',
    contactEmail: siteSettings?.contactEmail || '',
    availability: siteSettings?.availability || ''
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-canvas/70 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel border-l border-surface-border p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-surface-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-cyber-cyan">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-brand-text">
                    Admin Site Customizer
                  </h3>
                  <span className="text-[11px] font-mono text-cyber-emerald">LIVE PREVIEW MODE</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Decap CMS Link Banner */}
            <div className="mt-6 p-4 rounded-xl bg-surface-card border border-cyber-cyan/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-brand-text flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
                  <span>Decap CMS Git Gateway</span>
                </div>
                <div className="text-[11px] text-brand-muted mt-0.5">
                  Full git-backed admin dashboard at /admin
                </div>
              </div>
              <a
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-cyber-cyan text-canvas font-bold text-xs hover:opacity-90 flex items-center gap-1"
              >
                <span>Launch</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Customization Form */}
            <form onSubmit={handleSave} className="mt-6 space-y-5">
              
              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">
                  Hero Headline Text
                </label>
                <input
                  type="text"
                  name="heroHeadline"
                  value={formData.heroHeadline}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">
                  Hero Subtitle Paragraph
                </label>
                <textarea
                  name="heroSubtitle"
                  rows={3}
                  value={formData.heroSubtitle}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">
                  Availability Status Pill
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">
                  Agency Contact Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all flex items-center justify-center gap-2"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Live Changes Applied!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Apply Live Preview Changes</span>
                  </>
                )}
              </button>

            </form>
          </div>

          <div className="pt-6 border-t border-surface-border text-center text-xs font-mono text-brand-muted">
            Ontogenetic Systems Admin Engine v1.0.0
          </div>

        </div>
      </div>
    </div>
  );
}
