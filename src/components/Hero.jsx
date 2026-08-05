import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, Zap, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero({ siteSettings }) {
  const canvasRef = useRef(null);

  // Interactive Particle Grid Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#00F5A0' : '#00D2FF',
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 160, ${1 - dist / 130 * 0.8})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-radial-glow border-b border-surface-border">
      
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
      />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyber-emerald/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyber-violet/20 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* System Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card border border-surface-border mb-8 shadow-xl">
          <Sparkles className="w-4 h-4 text-cyber-emerald" />
          <span className="text-xs font-mono tracking-wider text-brand-muted uppercase">
            Ontogenetic Engineering & System Design
          </span>
        </div>

        {/* Dynamic Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-brand-text tracking-tight max-w-5xl mx-auto leading-[1.1]">
          {siteSettings?.heroHeadline || (
            <>
              Self-Assembling <span className="text-gradient">Digital Architecture</span> & AI Engineering
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto font-normal leading-relaxed">
          {siteSettings?.heroSubtitle || (
            "We construct evolving web software, autonomous AI applications, PHP / Laravel POS platforms, and resilient digital infrastructure engineered for global enterprise scale."
          )}
        </p>

        {/* CTA Button Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(0,245,160,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <span>Initiate System Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/work"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-card border border-surface-border text-brand-text font-semibold text-sm hover:border-cyber-cyan hover:text-cyber-cyan transition-all flex items-center justify-center gap-3"
          >
            <Layers className="w-4 h-4 text-cyber-cyan" />
            <span>Explore Case Studies</span>
          </Link>
        </div>


        {/* Metric Counter Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="glass-panel p-6 rounded-2xl border border-surface-border text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyber-emerald">
              <Zap className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">Performance</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-text">
              &lt; 1.2s
            </div>
            <div className="text-xs text-brand-muted mt-1">Largest Contentful Paint</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-surface-border text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyber-cyan">
              <Activity className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">Reliability</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-text">
              99.99%
            </div>
            <div className="text-xs text-brand-muted mt-1">Edge Availability Standard</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-surface-border text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyber-violet">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">Deployments</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-text">
              40+
            </div>
            <div className="text-xs text-brand-muted mt-1">Enterprise Systems Launched</div>
          </div>

        </div>

      </div>
    </section>
  );
}
