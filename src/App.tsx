import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CopyLab } from './components/CopyLab';
import { CaseStudies } from './components/CaseStudies';
import { RigorSection } from './components/RigorSection';
import { BrandResearch } from './components/BrandResearch';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PORTFOLIO_DATA, CaseStudy } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectId = (id: string) => {
    const found = PORTFOLIO_DATA.caseStudies.find((s) => s.id === id);
    if (found) {
      setSelectedStudy(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#14151B] flex flex-col font-sans selection:bg-[#FF4D42] selection:text-white">
      {/* Top Bar adhering to strict 3-zone contract */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProject={handleSelectProjectId}
        />

        {/* Featured Case Studies (Bento Grid) */}
        <CaseStudies onSelectStudy={(study) => setSelectedStudy(study)} />

        {/* Interactive Copy Transformation Lab */}
        <CopyLab />

        {/* The Wall Street & Operations Rigor Edge */}
        <RigorSection />

        {/* Brand Research & Category Mapping */}
        <BrandResearch />

        {/* Experience Timeline & Academic Honors */}
        <ExperienceTimeline />

        {/* Skills Matrix, Tools & Languages */}
        <SkillsSection />

        {/* Contact & Inquiries */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Full Printable / Copyable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
