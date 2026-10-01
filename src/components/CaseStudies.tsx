import React, { useState } from 'react';
import { PORTFOLIO_DATA, CaseStudy } from '../data/portfolioData';

interface CaseStudiesProps {
  onSelectStudy: (study: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectStudy }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fmcg' | 'edtech' | 'cause' | 'finance'>('all');

  const filteredStudies = PORTFOLIO_DATA.caseStudies.filter((study) => {
    if (activeFilter === 'all') return true;
    return study.category === activeFilter;
  });

  return (
    <section id="work" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block bg-[#FF4D42] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
              Selected Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
              Where Creative Words Drive Real Numbers
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#14151B]/80 max-w-2xl">
              Campaigns, website narratives, and operational milestones built with uncompromising discipline.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border-2 border-[#14151B] rounded-xl shadow-pop">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#14151B] text-white'
                  : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-slate-100'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.caseStudies.length})
            </button>
            <button
              onClick={() => setActiveFilter('fmcg')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'fmcg'
                  ? 'bg-[#FF4D42] text-white'
                  : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-slate-100'
              }`}
            >
              Wellness FMCG
            </button>
            <button
              onClick={() => setActiveFilter('edtech')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'edtech'
                  ? 'bg-[#2D4BFF] text-white'
                  : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-slate-100'
              }`}
            >
              Ed-Tech
            </button>
            <button
              onClick={() => setActiveFilter('cause')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'cause'
                  ? 'bg-[#FF8A00] text-white'
                  : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-slate-100'
              }`}
            >
              Cause Outreach
            </button>
            <button
              onClick={() => setActiveFilter('finance')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'finance'
                  ? 'bg-[#05D588] text-[#14151B]'
                  : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-slate-100'
              }`}
            >
              Finance Rigor
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {filteredStudies.map((study) => {
            const isFlobites = study.id === 'flobites';
            const isMyCaptain = study.id === 'mycaptain';
            const isStreetCause = study.id === 'streetcause';
            const isOps = study.id === 'operations-rigor';

            // Calculate responsive bento spans
            let colSpan = 'md:col-span-6 lg:col-span-6';
            if (activeFilter === 'all') {
              if (isFlobites) colSpan = 'md:col-span-12 lg:col-span-7';
              if (isMyCaptain) colSpan = 'md:col-span-12 lg:col-span-5';
              if (isStreetCause) colSpan = 'md:col-span-12 lg:col-span-5';
              if (isOps) colSpan = 'md:col-span-12 lg:col-span-7';
            }

            return (
              <div
                key={study.id}
                className={`${colSpan} bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg hover:shadow-pop-xl transition-all flex flex-col justify-between relative group`}
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 pointer-events-none"
                  style={{ backgroundColor: study.themeColor }}
                />

                <div>
                  {/* Card Metadata Bar - Zero pill discipline, clean separators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#14151B]/70 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#14151B]">{study.brand}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.clientSubtitle}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#14151B]/60">{study.timeline}</span>
                  </div>

                  {/* Card Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14151B] font-display mb-2">
                    {study.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#14151B]/85 leading-relaxed mb-6 font-medium">
                    {study.tagline}
                  </p>

                  {/* Key Quantitative Proof Metric */}
                  <div className="p-4 rounded-xl border-2 border-[#14151B]/15 bg-[#FAF9F6] mb-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase font-bold text-[#14151B]/60 tracking-wider">
                        Key Result / Focus
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#14151B]">
                        {study.keyMetricLabel}
                      </div>
                    </div>
                    <div
                      className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums shrink-0"
                      style={{ color: study.themeColor }}
                    >
                      {study.keyMetric}
                    </div>
                  </div>

                  {/* Sample Transformation Snippet */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#14151B]/60">
                      Live Copy Transformation
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                      <div className="text-rose-700 font-bold mb-1">✕ {study.transformation.beforeLabel}:</div>
                      <p className="text-slate-600 line-through italic">
                        {study.transformation.beforeText.slice(0, 90)}...
                      </p>
                    </div>
                    <div
                      className="p-3.5 border-2 rounded-lg text-xs"
                      style={{ borderColor: study.themeColor, backgroundColor: study.accentBg }}
                    >
                      <div className="font-bold mb-1" style={{ color: study.themeColor }}>
                        ✓ {study.transformation.afterLabel}:
                      </div>
                      <p className="font-semibold text-[#14151B]">
                        {study.transformation.afterText.slice(0, 110)}...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t-2 border-[#14151B]/10 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#14151B]/60">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span key={i}>
                        {tag}{i < 2 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectStudy(study)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg shadow-pop shadow-pop-hover cursor-pointer group-hover:bg-[#FFE838] transition-colors whitespace-nowrap shrink-0"
                  >
                    Deep Dive →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
