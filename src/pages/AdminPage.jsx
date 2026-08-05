import React, { useState } from 'react';
import { Lock, ShieldCheck, Plus, Trash2, Edit3, Save, X, Globe, Check, Code, ExternalLink, RefreshCw } from 'lucide-react';

const DEFAULT_PASSKEY = 'ontogenetic2026';

export default function AdminPage({ siteSettings, onUpdateSettings, projects, onAddProject, onUpdateProject, onDeleteProject }) {
  const [passkeyInput, setPasskeyInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState({
    heroHeadline: siteSettings?.heroHeadline || '',
    heroSubtitle: siteSettings?.heroSubtitle || '',
    contactEmail: siteSettings?.contactEmail || '',
    availability: siteSettings?.availability || ''
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // CRUD Project Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    client: '',
    category: 'POS & Enterprise Systems',
    metric: '',
    summary: '',
    details: '',
    tech: '',
    githubUrl: '',
    liveUrl: ''
  });

  // Handle Auth Submit
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (passkeyInput.trim() === DEFAULT_PASSKEY) {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  // Handle Save Settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    onUpdateSettings(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  // Open Modal for Add
  const handleOpenAdd = () => {
    setEditingProjectId(null);
    setProjectForm({
      title: '',
      client: '',
      category: 'POS & Enterprise Systems',
      metric: '',
      summary: '',
      details: '',
      tech: 'PHP, Laravel, MySQL, React',
      githubUrl: 'https://github.com/ontogenetic-systems/new-project',
      liveUrl: 'https://demo.ontogeneticsystems.com'
    });
    setIsModalOpen(true);
  };


  // Open Modal for Edit
  const handleOpenEdit = (project) => {
    setEditingProjectId(project.id);
    setProjectForm({
      title: project.title,
      client: project.client,
      category: project.category,
      metric: project.metric,
      summary: project.summary,
      details: project.details || '',
      tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech,
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || ''
    });
    setIsModalOpen(true);
  };

  // Handle Project Form Submit (Add or Edit)
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const formattedTech = projectForm.tech.split(',').map(t => t.trim()).filter(Boolean);

    const projectData = {
      id: editingProjectId || `project-${Date.now()}`,
      title: projectForm.title,
      client: projectForm.client,
      category: projectForm.category,
      metric: projectForm.metric,
      summary: projectForm.summary,
      details: projectForm.details,
      tech: formattedTech,
      githubUrl: projectForm.githubUrl,
      liveUrl: projectForm.liveUrl,
      imageGradient: 'from-cyber-emerald/20 to-cyber-cyan/20'
    };

    if (editingProjectId) {
      onUpdateProject(projectData);
    } else {
      onAddProject(projectData);
    }

    setIsModalOpen(false);
  };

  // If Not Authenticated, show Passkey Challenge Screen
  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 bg-canvas min-h-screen flex items-center justify-center p-4">
        <div className="glass-panel w-full max-w-md p-8 rounded-2xl border border-surface-border text-center shadow-2xl">
          
          <div className="w-16 h-16 rounded-2xl bg-surface-card border border-cyber-cyan/40 mx-auto flex items-center justify-center text-cyber-cyan mb-6">
            <Lock className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-display font-bold text-brand-text mb-2">
            Restricted Admin Portal
          </h1>
          <p className="text-xs text-brand-muted mb-6">
            Enter administrative passkey to access full site management controls and project CRUD system.
          </p>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Passkey (Default: ontogenetic2026)"
                value={passkeyInput}
                onChange={(e) => setPasskeyInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#11131f] border border-surface-border text-brand-text text-sm text-center focus:outline-none focus:border-cyber-emerald"
              />
              {authError && (
                <div className="text-xs text-red-400 font-mono mt-2">
                  Invalid Passkey. Hint: ontogenetic2026
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate & Access Dashboard</span>
            </button>
          </form>

        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="pt-28 pb-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 glass-panel p-6 rounded-2xl border border-surface-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-emerald mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>AUTHENTICATED ADMINISTRATIVE SESSION</span>
            </div>
            <h1 className="text-3xl font-display font-bold text-brand-text">
              Ontogenetic Admin Management Center
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-card border border-cyber-cyan text-cyber-cyan font-mono text-xs hover:bg-cyber-cyan hover:text-canvas transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>View Public Live Site</span>
            </a>


            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2.5 rounded-xl bg-surface-card border border-surface-border text-brand-muted text-xs font-mono hover:text-brand-text"
            >
              Lock Session
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: General Site Settings */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-surface-border">
              <h2 className="text-lg font-display font-bold text-brand-text mb-4 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-cyber-emerald" />
                <span>Global Site Settings</span>
              </h2>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Hero Headline</label>
                  <input
                    type="text"
                    value={settingsForm.heroHeadline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroHeadline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Hero Subtitle</label>
                  <textarea
                    rows={3}
                    value={settingsForm.heroSubtitle}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroSubtitle: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Availability Status</label>
                  <input
                    type="text"
                    value={settingsForm.availability}
                    onChange={(e) => setSettingsForm({ ...settingsForm, availability: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={settingsForm.contactEmail}
                    onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-xs tracking-wide flex items-center justify-center gap-2"
                >
                  {settingsSaved ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Settings Applied Live!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save Global Settings</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

          {/* Right Column: Case Studies & Portfolio CRUD */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-surface-border">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-display font-bold text-brand-text">
                    Portfolio & Project Management
                  </h2>
                  <p className="text-xs text-brand-muted">Add, Edit, and Delete projects with GitHub repositories.</p>
                </div>

                <button
                  onClick={handleOpenAdd}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-emerald text-canvas font-bold text-xs hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>

              {/* Projects List */}
              <div className="space-y-4">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-[#11131f] border border-surface-border flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-card text-cyber-cyan border border-surface-border">
                          {p.category}
                        </span>
                        <h3 className="text-sm font-bold text-brand-text">{p.title}</h3>
                      </div>
                      <div className="text-xs text-brand-muted mt-1">Client: {p.client} | Metric: {p.metric}</div>
                      {p.githubUrl && (
                        <div className="text-[11px] font-mono text-brand-muted mt-1 flex items-center gap-1">
                          <Code className="w-3 h-3 text-cyber-emerald" />
                          <span className="truncate max-w-xs">{p.githubUrl}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEdit(p)}
                        className="p-2 rounded-lg bg-surface-card border border-surface-border text-cyber-cyan hover:border-cyber-cyan"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDeleteProject(p.id)}
                        className="p-2 rounded-lg bg-surface-card border border-surface-border text-red-400 hover:border-red-400"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Add / Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-surface-border p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-surface-card border border-surface-border text-brand-muted hover:text-brand-text"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-display font-bold text-brand-text mb-6">
              {editingProjectId ? 'Edit Case Study Project' : 'Add New Case Study Project'}
            </h3>

            <form onSubmit={handleProjectSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.client}
                    onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Category</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  >
                    <option value="POS & Enterprise Systems" className="bg-[#11131f] text-[#f8fafc]">POS & Enterprise Systems</option>
                    <option value="Workflow Automations" className="bg-[#11131f] text-[#f8fafc]">Workflow Automations</option>
                    <option value="AI Architecture" className="bg-[#11131f] text-[#f8fafc]">AI Architecture</option>
                    <option value="Web Applications" className="bg-[#11131f] text-[#f8fafc]">Web Applications</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Impact Metric *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 99.98% Accuracy / +310% Speed"
                    value={projectForm.metric}
                    onChange={(e) => setProjectForm({ ...projectForm, metric: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">GitHub Repository URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/org/repo"
                    value={projectForm.githubUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Live Deployment URL</label>
                  <input
                    type="url"
                    placeholder="https://demo.ontogeneticsystems.com"
                    value={projectForm.liveUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                  />

                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Summary Paragraph *</label>
                <textarea
                  rows={2}
                  required
                  value={projectForm.summary}
                  onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Detailed Technical Breakdown</label>
                <textarea
                  rows={3}
                  value={projectForm.details}
                  onChange={(e) => setProjectForm({ ...projectForm, details: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted uppercase mb-1">Tech Stack (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="PHP, Laravel, MySQL, React"
                  value={projectForm.tech}
                  onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#11131f] border border-surface-border text-xs text-brand-text focus:outline-none focus:border-cyber-emerald"
                />
              </div>

              <div className="pt-4 border-t border-surface-border flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-surface-card border border-surface-border text-xs font-mono text-brand-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-emerald-cyan-gradient text-canvas font-bold text-xs"
                >
                  {editingProjectId ? 'Save Project Changes' : 'Create & Publish Project'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
