import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#2D4BFF] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            Experience & Proven Milestones
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/80 leading-relaxed">
            A deliberate evolution: starting in creative grassroots marketing, building uncompromising discipline in
            global finance, and returning to marketing with rare operational precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Experience Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {PORTFOLIO_DATA.experience.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;
              const isFloBites = exp.company.includes('FloBites');
              const isFinance = exp.company.includes('Wells') || exp.company.includes('D.E. Shaw');

              return (
                <div
                  key={idx}
                  className={`border-2 border-[#14151B] rounded-2xl transition-all overflow-hidden ${
                    isExpanded ? 'bg-white shadow-pop-lg' : 'bg-[#FAF9F6] hover:bg-white shadow-pop'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#14151B]/70">
                        <span className="font-bold text-[#14151B]">{exp.company}</span>
                        <span aria-hidden="true">·</span>
                        <span>{exp.type}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px]">{exp.period}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#14151B]/80 font-medium">
                        {exp.highlight}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      {isFloBites && (
                        <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#FF4D42] border border-[#14151B] rounded-md shadow-xs">
                          FMCG & Copy
                        </span>
                      )}
                      {isFinance && (
                        <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#14151B] bg-[#05D588] border border-[#14151B] rounded-md shadow-xs">
                          Finance Ops
                        </span>
                      )}
                      <div
                        className={`w-8 h-8 rounded-lg border-2 border-[#14151B] flex items-center justify-center font-bold text-sm bg-white transition-transform ${
                          isExpanded ? 'rotate-180 bg-[#FFE838]' : ''
                        }`}
                      >
                        ↓
                      </div>
                    </div>
                  </button>

                  {/* Accordion Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t-2 border-[#14151B]/10 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#14151B]/60">
                        Key Responsibilities & Deliverables
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#14151B] font-medium leading-relaxed">
                            <span className="text-[#FF4D42] font-bold shrink-0">→</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Education & Academic Honors */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education Card */}
            <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-7 shadow-pop-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB800]/15 rounded-bl-full pointer-events-none" />

              <div className="inline-block bg-[#FFB800] border-2 border-[#14151B] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-[#14151B] mb-3 shadow-xs">
                Academic Foundation
              </div>

              <h3 className="text-xl font-bold font-display text-[#14151B] leading-tight">
                {PORTFOLIO_DATA.education.degree}
              </h3>

              <div className="text-sm font-semibold text-[#14151B]/80 mt-1">
                {PORTFOLIO_DATA.education.institution}
              </div>

              <div className="mt-4 p-4 bg-[#FAF9F6] border-2 border-[#14151B] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#14151B]/60 tracking-wider">
                    Academic Standing
                  </div>
                  <div className="text-xs text-[#14151B]/80">
                    {PORTFOLIO_DATA.education.timeline}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#2D4BFF]">
                  {PORTFOLIO_DATA.education.gpa}
                </div>
              </div>

              <p className="mt-4 text-xs text-[#14151B]/75 leading-relaxed">
                {PORTFOLIO_DATA.education.notes}
              </p>
            </div>

            {/* Quick Relocation & Availability Card */}
            <div className="bg-[#FFF8F7] border-2 border-[#FF4D42] rounded-2xl p-6 shadow-pop-coral space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF4D42] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D42] animate-ping" />
                <span>Availability Status</span>
              </div>
              <h4 className="text-base font-bold text-[#14151B] leading-snug">
                Immediate Joining & Open to Relocate
              </h4>
              <p className="text-xs text-[#14151B]/80 leading-relaxed">
                Currently based in <strong>Hyderabad</strong>. Actively open to on-site, hybrid, or remote roles in Mumbai, Bengaluru, Delhi NCR, or global teams.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-[#14151B]">
                deekshita10munishetty@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
