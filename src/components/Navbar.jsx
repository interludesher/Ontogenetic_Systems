import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cpu, Lock, ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ siteSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = ({ isActive }) =>
    `text-xs font-mono tracking-wider transition-colors ${
      isActive ? 'text-cyber-emerald font-bold border-b-2 border-cyber-emerald pb-1' : 'text-brand-muted hover:text-cyber-emerald'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass-panel border-b border-surface-border shadow-2xl' : 'py-5 bg-canvas/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center overflow-hidden group-hover:border-cyber-emerald transition-colors">
              <div className="absolute inset-0 bg-cyber-gradient opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Cpu className="w-5 h-5 text-cyber-emerald relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-brand-text tracking-tight group-hover:text-cyber-emerald transition-colors">
                ONTOGENETIC
              </span>
              <span className="font-mono text-[10px] text-cyber-cyan tracking-widest uppercase -mt-1">
                SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navItemClass} end>
              HOME
            </NavLink>
            <NavLink to="/services" className={navItemClass}>
              SERVICES
            </NavLink>
            <NavLink to="/work" className={navItemClass}>
              PORTFOLIO
            </NavLink>
            <NavLink to="/process" className={navItemClass}>
              METHODOLOGY
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              CONTACT
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Availability Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-brand-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
              </span>
              <span>{siteSettings?.availability || 'Available Q3/Q4'}</span>
            </div>

            {/* Passkey Secured Admin Portal */}
            <Link
              to="/admin-dashboard"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-card border border-surface-border text-xs font-mono text-brand-text hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
              title="Passkey Secured Admin Portal"
            >
              <Lock className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Admin Portal</span>
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/admin-dashboard"
              className="p-2 rounded-lg bg-surface-card border border-surface-border text-cyber-cyan"
            >
              <Lock className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-card border border-surface-border text-brand-text"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-surface-border px-6 py-6 mt-3 space-y-4">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-brand-text hover:text-cyber-emerald"
          >
            HOME
          </Link>
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-brand-text hover:text-cyber-emerald"
          >
            SERVICES MATRIX
          </Link>
          <Link
            to="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-brand-text hover:text-cyber-emerald"
          >
            CASE STUDIES & PORTFOLIO
          </Link>
          <Link
            to="/process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-brand-text hover:text-cyber-emerald"
          >
            METHODOLOGY
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-brand-text hover:text-cyber-emerald"
          >
            CONTACT US
          </Link>
          <Link
            to="/admin-dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-xs font-mono text-cyber-cyan pt-2 border-t border-surface-border"
          >
            <Lock className="w-4 h-4" />
            <span>Passkey Secured Admin Portal</span>
          </Link>
        </div>
      )}
    </header>
  );
}
