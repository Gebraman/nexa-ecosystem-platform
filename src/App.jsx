import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Background image URL state (User can paste their link here anytime)
  const [customBgImage, setCustomBgImage] = useState(
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80'
  );

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenService = (serviceId) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-dark-950 font-sans">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />
      
      <main className="flex-1">
        {/* 1. HOME & HERO SECTION WITH BACKGROUND IMAGE */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenService={handleOpenService}
          customBgImage={customBgImage}
        />

        {/* 2. ABOUT US SECTION */}
        <AboutSection />

        {/* 3. OUR SERVICES: PARENT CONTAINER CARDS (SMC, FULL-STACK, K-12) */}
        <ServicesSection 
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
        />

        {/* 4. PROJECTS LAB & CUSTOM CLIENT WEB ORDERING */}
        <ProjectsSection />

        {/* 5. CONTACT & SCOPING */}
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
