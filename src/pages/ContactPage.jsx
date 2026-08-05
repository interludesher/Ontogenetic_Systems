import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage({ siteSettings }) {
  return (
    <div className="pt-24 pb-12 bg-canvas min-h-screen">
      <ContactSection siteSettings={siteSettings} />
    </div>
  );
}
