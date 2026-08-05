import React, { useState } from 'react';
import { Layers, Search, ExternalLink, Code, TrendingUp, X, ArrowUpRight } from 'lucide-react';

export default function PortfolioPage({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'POS & Enterprise Systems', 'Workflow Automations', 'AI Architecture', 'Web Applications'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-cyber-emerald mb-4">
            <Layers className="w-4 h-4" />
            <span>VERIFIED CASE STUDIES & CODE REPOSITORIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-brand-text tracking-tight">
            Client Portfolio & System Deployments
          </h1>
          <p className="mt-4 text-brand-muted text-base sm:text-lg">
            Inspect our production software deployments, enterprise POS architectures, n8n automations, and GitHub code repositories.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 glass-panel p-4 rounded-2xl border border-surface-border">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyber-emerald text-canvas font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                    : 'bg-surface-card text-brand-muted border border-surface-border hover:text-brand-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Laravel, POS, n8n, AI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-card border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 text-center py-16 glass-panel rounded-2xl border border-surface-border">
              <div className="text-brand-muted text-sm font-mono">No case studies found matching your criteria.</div>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl border border-surface-border overflow-hidden flex flex-col justify-between group"
              >
                
                {/* Visual Header */}
                <div className={`h-52 bg-gradient-to-br ${project.imageGradient || 'from-surface-card to-surface-hover'} p-6 relative flex flex-col justify-between border-b border-surface-border`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-canvas/80 text-cyber-emerald border border-surface-border">
                      {project.category}
                    </span>
                    
                    {/* Direct Links Header */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-canvas/80 text-brand-muted hover:text-cyber-cyan border border-surface-border transition-colors"
                          title="Inspect GitHub Repository"
                        >
                          <Code className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-canvas/80 text-brand-muted hover:text-cyber-emerald border border-surface-border transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-brand-muted uppercase">Client: {project.client}</div>
                    <h3 className="text-xl font-display font-bold text-brand-text mt-1 group-hover:text-cyber-emerald transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-card border border-surface-border text-brand-muted">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metric & Action */}
                    <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.metric}</span>
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-bold text-cyber-emerald hover:underline flex items-center gap-1"
                      >
                        <span>Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-surface-border p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-card text-cyber-emerald border border-surface-border mb-3 inline-block">
              {activeModalProject.category}
            </span>

            <h3 className="text-2xl font-display font-bold text-brand-text mb-1">
              {activeModalProject.title}
            </h3>
            <div className="text-xs font-mono text-brand-muted mb-6">Client: {activeModalProject.client}</div>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border mb-6">
              <div className="text-xs font-mono text-cyber-cyan mb-1">MEASURED PERFORMANCE IMPACT</div>
              <div className="text-xl font-bold text-brand-text">{activeModalProject.metric}</div>
            </div>

            <h4 className="text-sm font-bold text-brand-text mb-2">Technical Overview & Architecture</h4>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {activeModalProject.details || activeModalProject.summary}
            </p>

            {/* Direct Verification Links */}
            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-surface-card border border-surface-border mb-6">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-cyber-cyan hover:underline"
                >
                  <Code className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>
              )}
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-cyber-emerald hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Deployment</span>
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-surface-border flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-lg bg-emerald-cyan-gradient text-canvas font-bold text-xs"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
