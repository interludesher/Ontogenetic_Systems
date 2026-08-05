import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

import defaultSettings from './content/settings/general.json';
import { INITIAL_PROJECTS } from './data/initialData';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [siteSettings, setSiteSettings] = useState(defaultSettings);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const handleUpdateSettings = (newSettings) => {
    setSiteSettings((prev) => ({
      ...prev,
      ...newSettings
    }));
  };

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-canvas text-brand-text relative overflow-x-hidden selection:bg-cyber-emerald selection:text-canvas flex flex-col justify-between">
        
        {/* Multi-Page Header Navbar */}
        <Navbar siteSettings={siteSettings} />

        {/* Route Engine */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage siteSettings={siteSettings} projects={projects} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<PortfolioPage projects={projects} />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage siteSettings={siteSettings} />} />
            <Route
              path="/admin-dashboard"
              element={
                <AdminPage
                  siteSettings={siteSettings}
                  onUpdateSettings={handleUpdateSettings}
                  projects={projects}
                  onAddProject={handleAddProject}
                  onUpdateProject={handleUpdateProject}
                  onDeleteProject={handleDeleteProject}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}
