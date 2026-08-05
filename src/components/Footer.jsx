import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, Lock, Globe, Terminal } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="bg-canvas border-t border-surface-border pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-border">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-cyber-emerald">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-brand-text tracking-tight">
                  ONTOGENETIC
                </span>
                <span className="font-mono text-[10px] text-cyber-cyan tracking-widest uppercase -mt-1">
                  SYSTEMS
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
              Pioneering self-assembling digital architecture, autonomous GenAI applications, PHP / Laravel POS platforms, and resilient enterprise web infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-brand-text uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-xs font-medium text-brand-muted">
              <li><Link to="/services" className="hover:text-cyber-emerald transition-colors">Services Matrix</Link></li>
              <li><Link to="/work" className="hover:text-cyber-emerald transition-colors">Selected Case Studies</Link></li>
              <li><Link to="/process" className="hover:text-cyber-emerald transition-colors">System Methodology</Link></li>
              <li><Link to="/contact" className="hover:text-cyber-emerald transition-colors">Initiate Project</Link></li>
            </ul>
          </div>

          {/* Admin & System Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-brand-text uppercase tracking-wider">Admin & System</div>
            <div className="space-y-2">
              <Link
                to="/admin-dashboard"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-card border border-surface-border text-xs font-mono text-cyber-cyan hover:border-cyber-cyan transition-colors"
              >
                <Lock className="w-4 h-4" />
                <span>Passkey Admin Portal</span>
              </Link>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="text-xs font-mono text-brand-muted hover:text-cyber-emerald transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>Live Customizer Drawer</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted">
          <div>
            &copy; {new Date().getFullYear()} Ontogenetic Systems. All rights reserved. Engineered for production deployment.
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
              <span>Global Production Edge Active</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

