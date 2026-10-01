import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onSelectProject: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume, onSelectProject }) => {
  const [activeTabSnippet, setActiveTabSnippet] = useState<'creative' | 'rigor'>('creative');

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b-2 border-[#14151B] bg-grid-dots overflow-hidden">
      {/* Decorative Poppy Graphic Accents */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#FFE838]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 left-1/4 w-80 h-80 bg-[#FF4D42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top unboxed kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#14151B]/80 mb-6">
          <span className="inline-flex items-center gap-1.5 text-[#05D588] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#05D588]" />
            Available for Full-Time & Contract Roles
          </span>
          <span aria-hidden="true" className="text-[#14151B]/40">·</span>
          <span>Content & Copywriting</span>
          <span aria-hidden="true" className="text-[#14151B]/40">·</span>
          <span className="text-[#FF4D42] font-semibold">FloBites FMCG</span>
          <span aria-hidden="true" className="text-[#14151B]/40">·</span>
          <span className="text-[#7C3AED] font-semibold">WordPress (nevara.top)</span>
          <span aria-hidden="true" className="text-[#14151B]/40">·</span>
          <span className="text-[#2D4BFF]">Finance Rigor</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Explosive Typographic Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#14151B] font-display text-balance">
              Creative copy that sells.{' '}
              <span className="inline-block bg-[#FF4D42] text-white px-3 py-0.5 rounded-md -rotate-1 shadow-pop">
                Financial rigor
              </span>{' '}
              that never misses a deadline.
            </h1>

            <p className="text-lg sm:text-xl text-[#14151B]/85 leading-relaxed max-w-2xl font-normal">
              I turn raw adaptogen ingredients, complex user funnels, and data spreadsheets into
              warm, punchy copy that converts cold audiences. Authored commercial packaging, 43 taglines, and 25-brand category research at <strong className="font-semibold text-[#14151B]">FloBites</strong>, backed by two years in commercial operations at{' '}
              <strong className="font-semibold text-[#14151B]">Wells Fargo</strong> and{' '}
              <strong className="font-semibold text-[#14151B]">The D.E. Shaw Group</strong>.
            </p>

            {/* Signature quote highlight banner */}
            <div className="p-4 sm:p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-pop relative">
              <div className="absolute -top-3 left-4 bg-[#FFB800] border-2 border-[#14151B] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-[#14151B]">
                The Deekshita Differentiator
              </div>
              <p className="text-sm sm:text-base italic text-[#14151B] pt-1">
                “{PORTFOLIO_DATA.personal.quote}”
              </p>
              <div className="mt-2 text-xs font-semibold text-[#14151B]/70 flex items-center gap-2">
                <span>Deekshita Munishetty</span>
                <span aria-hidden="true">·</span>
                <span>Hyderabad (Open to relocate)</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#flobites-work"
                className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF4D42] border-2 border-[#14151B] rounded-xl shadow-pop shadow-pop-hover cursor-pointer inline-flex items-center gap-2 hover:bg-[#e63c32]"
              >
                <span>FloBites Vault</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#nevara-showcase"
                className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#7C3AED] border-2 border-[#14151B] rounded-xl shadow-pop shadow-pop-hover cursor-pointer inline-flex items-center gap-2 hover:bg-[#6D28D9]"
              >
                <span>nevara.top Showcase</span>
                <span>↗</span>
              </a>

              <a
                href="#copy-lab"
                className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14151B] bg-[#FFE838] border-2 border-[#14151B] rounded-xl shadow-pop shadow-pop-hover cursor-pointer inline-flex items-center gap-2 hover:bg-[#fedb00]"
              >
                <svg className="w-4 h-4 text-[#14151B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Copy Lab</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-xl shadow-pop shadow-pop-hover cursor-pointer hover:bg-slate-50"
              >
                Contact
              </button>
            </div>

            {/* Proof Metrics Strip - Tabular numbers */}
            <div className="pt-6 border-t-2 border-[#14151B]/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-[#14151B]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#14151B]/75 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact Vibrant Editorial Bento Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Poppy decorative badge tag pinned on top */}
              <div className="absolute -top-4 -right-2 z-20 bg-[#2D4BFF] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-lg border-2 border-[#14151B] shadow-pop rotate-3">
                Creative ✕ Analytical
              </div>

              {/* Main Card Container */}
              <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 shadow-pop-lg relative overflow-hidden">
                {/* Header within card */}
                <div className="flex items-center justify-between border-b-2 border-[#14151B]/15 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FF4D42] border-2 border-[#14151B] flex items-center justify-center text-white font-display font-extrabold text-xl shadow-pop">
                      DM
                    </div>
                    <div>
                      <h2 className="font-bold font-display text-base text-[#14151B] leading-tight">
                        Deekshita Munishetty
                      </h2>
                      <p className="text-xs text-[#14151B]/70">
                        Content, Copy & Brand Marketing
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-300">
                    Open to Relocate
                  </span>
                </div>

                {/* Interactive Snippet Switcher */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 p-1 bg-[#14151B]/5 border border-[#14151B]/20 rounded-lg">
                    <button
                      onClick={() => setActiveTabSnippet('creative')}
                      className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                        activeTabSnippet === 'creative'
                          ? 'bg-[#FF4D42] text-white shadow-xs'
                          : 'text-[#14151B]/70 hover:text-[#14151B]'
                      }`}
                    >
                      Consumer Voice (FloBites)
                    </button>
                    <button
                      onClick={() => setActiveTabSnippet('rigor')}
                      className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                        activeTabSnippet === 'rigor'
                          ? 'bg-[#2D4BFF] text-white shadow-xs'
                          : 'text-[#14151B]/70 hover:text-[#14151B]'
                      }`}
                    >
                      Financial Rigor (Wells Fargo)
                    </button>
                  </div>

                  {activeTabSnippet === 'creative' ? (
                    <div className="p-4 bg-[#FFF1F0] border-2 border-[#FF4D42] rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#FF4D42]">
                        <span>Women’s Wellness FMCG</span>
                        <span>Tone: Empathetic & Indulgent</span>
                      </div>
                      <p className="text-sm font-medium text-[#14151B] italic">
                        “Cravings with a conscience. Velvety rich dark chocolate, soothing magnesium, and pure botanical adaptogens that calm the cramps before they start.”
                      </p>
                      <div className="text-[11px] text-[#14151B]/70 pt-1 border-t border-[#FF4D42]/20">
                        → Rewritten from dry biochemical clinical claims into crave-worthy habit copy.
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-[#EEF2FF] border-2 border-[#2D4BFF] rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#2D4BFF]">
                        <span>Commercial Loan Operations</span>
                        <span>Standard: 99% Zero-Break</span>
                      </div>
                      <p className="text-sm font-medium text-[#14151B] italic">
                        “Reconciled high-volume commercial loan data against source databases at 99% accuracy, clearing breaks before downstream reporting under immovable legal deadlines.”
                      </p>
                      <div className="text-[11px] text-[#14151B]/70 pt-1 border-t border-[#2D4BFF]/20">
                        → Why clients never worry about missed deadlines, sloppy fact-checking, or regulatory risk.
                      </div>
                    </div>
                  )}

                  {/* Quick Project Previews */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#14151B]/60">
                      Recent Engagements
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProject('flobites')}
                        className="p-2.5 text-left border-2 border-[#14151B] rounded-lg bg-[#FAF9F6] hover:bg-[#FFE838] transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#14151B] group-hover:text-[#14151B]">
                          FloBites (Wellness)
                        </div>
                        <div className="text-[11px] text-[#14151B]/70 truncate">
                          Website & PR Copy
                        </div>
                      </button>
                      <button
                        onClick={() => onSelectProject('mycaptain')}
                        className="p-2.5 text-left border-2 border-[#14151B] rounded-lg bg-[#FAF9F6] hover:bg-[#C7D2FE] transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#14151B] group-hover:text-[#14151B]">
                          MyCaptain (Ed-Tech)
                        </div>
                        <div className="text-[11px] text-[#14151B]/70 truncate">
                          +200 Sign-ups Above Target
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="pt-3 border-t-2 border-[#14151B]/15 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14151B]/80 font-mono">
                      +91 8019570617
                    </span>
                    <button
                      onClick={onOpenResume}
                      className="font-bold text-[#FF4D42] hover:underline cursor-pointer"
                    >
                      View Full Resume →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
