import React, { useState } from 'react';
import { PORTFOLIO_DATA, CompetitorTeardown } from '../data/portfolioData';

export const BrandResearch: React.FC = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<'matrix' | 'swot' | 'campaigns'>('matrix');
  const [selectedCompetitorIdx, setSelectedCompetitorIdx] = useState<number>(0);

  const activeCompetitor: CompetitorTeardown = PORTFOLIO_DATA.competitorTeardowns[selectedCompetitorIdx];

  return (
    <section id="research" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#FFB800] text-[#14151B] border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            Category Whitespace & Brand Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            Category Research Across E-Commerce & Quick Commerce
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/80 leading-relaxed">
            Writing compelling copy starts long before opening a text editor.
            Here is a deep look into the 25-brand quick-commerce audits, strategic SWOT teardowns (CRED, SuperYou, The Whole Truth), and 50 iconic Indian advertising analyses I executed.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedSubTab('matrix')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedSubTab === 'matrix'
                ? 'bg-[#14151B] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            25-Brand Quick Commerce Audit
          </button>
          <button
            onClick={() => setSelectedSubTab('swot')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedSubTab === 'swot'
                ? 'bg-[#2D4BFF] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Strategic Teardowns (CRED, SuperYou, Whole Truth)
          </button>
          <button
            onClick={() => setSelectedSubTab('campaigns')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedSubTab === 'campaigns'
                ? 'bg-[#FF4D42] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            50 Indian Brand Campaign Analyses
          </button>
        </div>

        {/* View 1: 25-Brand Quick Commerce Audit */}
        {selectedSubTab === 'matrix' && (
          <div className="space-y-8">
            {/* The Foundational Insight Banner */}
            <div className="p-6 sm:p-8 bg-[#14151B] text-white rounded-2xl border-2 border-[#14151B] shadow-pop-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4D42]/20 rounded-bl-full pointer-events-none" />
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
                  Core Category Research Conclusion
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  “No brand in this deck owns period week nutrition. Every brand sells to her. None of them sell for her week. FloBites does.”
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 pt-1">
                  From the FloBites 29-Slide Category Research Deck covering Blinkit, Instamart, Zepto, and Amazon India.
                </p>
              </div>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.researchedBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border-2 transition-all ${
                    brand.name === 'FloBites'
                      ? 'bg-[#FFF8F7] border-[#FF4D42] shadow-pop-coral'
                      : 'bg-white border-[#14151B] shadow-xs hover:shadow-pop'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#14151B] text-base">{brand.name}</span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        brand.name === 'FloBites'
                          ? 'bg-[#FF4D42] text-white border-[#14151B]'
                          : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {brand.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#FF4D42] mb-1">
                    {brand.category}
                  </div>
                  <p className="text-xs text-[#14151B]/80 leading-relaxed font-medium">
                    {brand.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 2: Strategic SWOT Teardowns */}
        {selectedSubTab === 'swot' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#14151B]/15 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D4BFF]">
                  Strategic Business Frameworks
                </span>
                <h3 className="text-2xl font-bold font-display text-[#14151B]">
                  Deep Competitor Teardowns & Architecture
                </h3>
              </div>

              {/* Competitor Selector */}
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.competitorTeardowns.map((comp, idx) => (
                  <button
                    key={comp.brand}
                    onClick={() => setSelectedCompetitorIdx(idx)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      selectedCompetitorIdx === idx
                        ? 'bg-[#2D4BFF] text-white border-[#14151B] shadow-xs'
                        : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                    }`}
                  >
                    {comp.brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Teardown Card */}
            <div className="p-6 bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl shadow-pop space-y-6">
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#14151B]/15 pb-4">
                <div>
                  <h4 className="text-2xl font-extrabold text-[#14151B] font-display">
                    {activeCompetitor.brand}
                  </h4>
                  <p className="text-xs font-semibold text-[#2D4BFF]">
                    {activeCompetitor.category}
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
                  Traction: {activeCompetitor.yearsToTraction}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What is it?
                </span>
                <p className="text-sm sm:text-base text-[#14151B] font-medium leading-relaxed">
                  {activeCompetitor.whatIsIt}
                </p>
              </div>

              {/* 4-Box SWOT Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg space-y-1">
                  <span className="text-xs font-bold uppercase text-emerald-800">
                    Strengths
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 font-medium">
                    {activeCompetitor.strengths}
                  </p>
                </div>

                <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg space-y-1">
                  <span className="text-xs font-bold uppercase text-rose-800">
                    Weaknesses
                  </span>
                  <p className="text-xs sm:text-sm text-rose-950 font-medium">
                    {activeCompetitor.weaknesses}
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-1">
                  <span className="text-xs font-bold uppercase text-blue-800">
                    Opportunities
                  </span>
                  <p className="text-xs sm:text-sm text-blue-950 font-medium">
                    {activeCompetitor.opportunities}
                  </p>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg space-y-1">
                  <span className="text-xs font-bold uppercase text-amber-800">
                    Threats
                  </span>
                  <p className="text-xs sm:text-sm text-amber-950 font-medium">
                    {activeCompetitor.threats}
                  </p>
                </div>
              </div>

              {/* Major Branding Move Highlight */}
              <div className="p-4 bg-[#FFF8F7] border-2 border-[#FF4D42] rounded-xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                  Major Branding Move & Architecture
                </span>
                <p className="text-sm font-bold text-[#14151B]">
                  {activeCompetitor.brandingMove}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View 3: 50 Indian Brand Campaign Analyses */}
        {selectedSubTab === 'campaigns' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="border-b-2 border-[#14151B]/15 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                Advertising Anthropology
              </span>
              <h3 className="text-2xl font-bold font-display text-[#14151B]">
                50 Iconic Indian Campaigns Deconstructed
              </h3>
              <p className="text-xs sm:text-sm text-[#14151B]/75 mt-0.5">
                From Whisper’s taboo-breaking “Touch the Pickle” to Fevicol’s unbreakable emotional bond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.campaignTeardownSamples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs hover:shadow-pop transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#FF4D42] text-base">{item.brand}</span>
                    <span className="font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300">
                      “{item.campaign}”
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#14151B]/85 leading-relaxed font-medium pt-1">
                    {item.insight}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between">
              <span>Full dossier includes all 50 brands (Nike, Amul, Maggi, Swiggy, Cadbury, Tata Tea, etc.)</span>
              <span className="font-bold text-[#14151B]">B.Com Research Foundation</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
