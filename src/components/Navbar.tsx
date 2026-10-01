import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md border-[#14151B]/15 shadow-xs'
          : 'bg-[#FFFDF9] border-[#14151B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#14151B] font-display hover:text-[#FF4D42] transition-colors whitespace-nowrap shrink-0"
        >
          Deekshita Munishetty
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#14151B]/80">
          <a
            href="#work"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            Work
          </a>
          <a
            href="#copy-lab"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            Copy Lab
          </a>
          <a
            href="#the-rigor"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            The Rigor
          </a>
          <a
            href="#research"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            Research
          </a>
          <a
            href="#experience"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-[#FF4D42] hover:underline underline-offset-4 decoration-2 decoration-[#FF4D42] transition-colors whitespace-nowrap"
          >
            Skills
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg shadow-pop shadow-pop-hover cursor-pointer whitespace-nowrap shrink-0"
          >
            Resume
          </button>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF4D42] border-2 border-[#14151B] rounded-lg shadow-pop shadow-pop-hover cursor-pointer whitespace-nowrap shrink-0 hover:bg-[#e63c32]"
          >
            Get in Touch
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#14151B] border-2 border-[#14151B] rounded-lg bg-white shadow-pop cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#14151B] bg-[#FFFDF9] px-6 py-4 space-y-3">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            Featured Work
          </a>
          <a
            href="#copy-lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            Interactive Copy Lab
          </a>
          <a
            href="#the-rigor"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            The Operations Rigor
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            Brand Research
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            Experience & Education
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#14151B] hover:text-[#FF4D42]"
          >
            Skills Matrix
          </a>
          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg shadow-pop"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#FF4D42] border-2 border-[#14151B] rounded-lg shadow-pop"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
