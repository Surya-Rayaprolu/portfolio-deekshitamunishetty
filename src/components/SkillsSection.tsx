import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'copy' | 'marketing' | 'ops' | 'tools'>('copy');

  return (
    <section id="skills" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#FF4D42] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            Skills, Tooling & Languages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/80 leading-relaxed">
            A cross-functional toolbelt spanning consumer brand storytelling, market research, financial reconciliation, and multi-lingual fluency.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('copy')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'copy'
                ? 'bg-[#FF4D42] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Content & Copywriting
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'marketing'
                ? 'bg-[#2D4BFF] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Brand Marketing & Research
          </button>
          <button
            onClick={() => setActiveTab('ops')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ops'
                ? 'bg-[#05D588] text-[#14151B] border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Finance & Operations Rigor
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-[#FFB800] text-[#14151B] border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Tools & Stack
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg">
          {activeTab === 'copy' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#14151B]/15 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                  Content & Copywriting Disciplines
                </h3>
                <p className="text-xs sm:text-sm text-[#14151B]/70">
                  Every sentence engineered for comprehension, tone resonance, and behavioral action.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PORTFOLIO_DATA.skills.copywriting.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs hover:shadow-pop transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#FF4D42]">{skill.level}</span>
                      <span className="text-slate-400 font-mono">0{idx + 1}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#14151B]">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#14151B]/80 leading-relaxed font-medium">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'marketing' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#14151B]/15 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                  Brand Marketing & Strategy
                </h3>
                <p className="text-xs sm:text-sm text-[#14151B]/70">
                  Deep customer psychology, competitor gap auditing, and multi-channel campaign architectures.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {PORTFOLIO_DATA.skills.marketing.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs hover:shadow-pop transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#2D4BFF]">{skill.level}</span>
                      <span className="text-slate-400 font-mono">0{idx + 1}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#14151B]">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#14151B]/80 leading-relaxed font-medium">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ops' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#14151B]/15 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                  Finance & Operations Competencies
                </h3>
                <p className="text-xs sm:text-sm text-[#14151B]/70">
                  Institutional standards derived from commercial banking and global hedge fund reporting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {PORTFOLIO_DATA.skills.operations.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs hover:shadow-pop transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-700">{skill.level}</span>
                      <span className="text-slate-400 font-mono">0{idx + 1}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#14151B]">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#14151B]/80 leading-relaxed font-medium">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#14151B]/15 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                  Software Stack & Daily Workflow Tools
                </h3>
                <p className="text-xs sm:text-sm text-[#14151B]/70">
                  High proficiency across creative visual tooling, spreadsheet analytics, and collaboration suites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.skills.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#14151B]">
                        {tool.name}
                      </div>
                      <div className="text-xs text-[#14151B]/70">
                        {tool.category}
                      </div>
                    </div>
                    <span className="text-base">✦</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Languages Strip - Zero Pill Discipline */}
        <div className="mt-8 bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-7 shadow-pop flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
              Linguistic Fluency
            </div>
            <h4 className="text-lg font-bold font-display text-[#14151B] mt-0.5">
              Languages Spoken & Written
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#14151B]">
            {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#14151B]" />
                <span className="font-bold">{lang.name}:</span>
                <span className="text-[#14151B]/75 font-normal">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
