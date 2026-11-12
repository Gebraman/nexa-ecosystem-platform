import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpreadsheetDemo from './components/SpreadsheetDemo';
import CloneShowcase from './components/CloneShowcase';
import SMCForexAcademy from './components/SMCForexAcademy';
import AcademicTutoring from './components/AcademicTutoring';
import WorkflowSection from './components/WorkflowSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const scrollToPillar = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-dark-950">
      <Navbar activeTab={activeTab} setActiveTab={scrollToPillar} />
      
      <main className="flex-1">
        <Hero onSelectPillar={scrollToPillar} />
        <SpreadsheetDemo />
        <CloneShowcase />
        <SMCForexAcademy />
        <AcademicTutoring />
        <WorkflowSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer onSelectTab={scrollToPillar} />
    </div>
  );
}
