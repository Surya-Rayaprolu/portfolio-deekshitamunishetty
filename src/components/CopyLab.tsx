import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CopyLab: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [selectedSampleIdx, setSelectedSampleIdx] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeStudy = PORTFOLIO_DATA.caseStudies[selectedCaseIdx];
  const activeSample = PORTFOLIO_DATA.copySamples[selectedSampleIdx];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="copy-lab" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#FFE838] border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[#14151B] mb-3 shadow-pop">
            Live Interactive Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            The Copy Transformation Lab
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/80 leading-relaxed">
            Great copywriting is not decorative fluff. It is translating complex features, clinical ingredients,
            and steep pricing into words that make someone say: <span className="font-semibold text-[#14151B]">“Yes, this is built for me.”</span>
          </p>
        </div>

        {/* Feature 1: Before vs After Transformation Engine */}
        <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#14151B]/15 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                Interactive Demonstration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B] mt-0.5">
                Before ➔ After Copy Surgery
              </h3>
            </div>

            {/* Segmented Control for Case Selection */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#14151B]/5 border border-[#14151B]/20 rounded-xl">
              {PORTFOLIO_DATA.caseStudies.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    selectedCaseIdx === idx
                      ? 'bg-[#14151B] text-white shadow-xs'
                      : 'text-[#14151B]/70 hover:text-[#14151B] hover:bg-white/60'
                  }`}
                >
                  {study.brand}
                </button>
              ))}
            </div>
          </div>

          {/* Transformation Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* The "Before" Column */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    ✕ {activeStudy.transformation.beforeLabel}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Low emotional hook
                  </span>
                </div>
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-mono bg-white p-4 rounded-lg border border-slate-200">
                  “{activeStudy.transformation.beforeText}”
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                <strong>The Issue:</strong> Stiff, clinical, or passive. Focuses entirely on the seller rather than what the reader desires or fears.
              </div>
            </div>

            {/* The "After" Column - Deekshita's Version */}
            <div className="bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl p-6 flex flex-col justify-between shadow-pop-coral relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4D42]/10 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#FF4D42] px-2.5 py-1 rounded border border-[#14151B] shadow-xs">
                    ✓ {activeStudy.transformation.afterLabel}
                  </span>
                  <button
                    onClick={() => handleCopy(activeStudy.transformation.afterText, `study-${activeStudy.id}`)}
                    className="text-xs font-semibold text-[#14151B] bg-white border border-[#14151B] px-2.5 py-1 rounded hover:bg-[#FFE838] transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    {copiedKey === `study-${activeStudy.id}` ? (
                      <span className="text-emerald-700 font-bold">✓ Copied!</span>
                    ) : (
                      <span>Copy Text</span>
                    )}
                  </button>
                </div>

                <div className="text-base sm:text-lg text-[#14151B] font-semibold leading-relaxed bg-[#FFF8F7] p-4.5 rounded-lg border-2 border-[#FF4D42]/30">
                  “{activeStudy.transformation.afterText}”
                </div>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-[#14151B]/10 space-y-1">
                <div className="text-xs font-bold text-[#FF4D42] uppercase tracking-wider">
                  Strategic Insight
                </div>
                <p className="text-xs sm:text-sm text-[#14151B]/85 font-medium">
                  {activeStudy.transformation.insight}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Context Strip */}
          <div className="mt-6 pt-5 border-t border-[#14151B]/15 flex flex-wrap items-center justify-between gap-3 text-xs text-[#14151B]/70">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#14151B]">Brand Target:</span>
              <span>{activeStudy.clientSubtitle}</span>
              <span aria-hidden="true">·</span>
              <span>{activeStudy.timeline}</span>
            </div>
            <div className="font-semibold text-[#2D4BFF]">
              Key Impact: {activeStudy.keyMetric} ({activeStudy.keyMetricLabel})
            </div>
          </div>
        </div>

        {/* Feature 2: Multi-Format Copy Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D4BFF]">
                Versatility across touchpoints
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#14151B] mt-0.5">
                Channel-Native Copy Sampler
              </h3>
            </div>
            <p className="text-sm text-[#14151B]/70 max-w-md">
              From landing page hooks and WhatsApp conversational loops to editorial PR pitches.
            </p>
          </div>

          {/* Format selector buttons */}
          <div className="flex overflow-x-auto pb-2 gap-2 mb-6 scrollbar-none">
            {PORTFOLIO_DATA.copySamples.map((sample, idx) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSampleIdx(idx)}
                className={`px-4 py-2.5 rounded-xl border-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all ${
                  selectedSampleIdx === idx
                    ? 'bg-[#2D4BFF] text-white border-[#14151B] shadow-pop'
                    : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
                }`}
              >
                <span>{sample.format}</span>
                <span className="ml-1.5 opacity-75">· {sample.brand}</span>
              </button>
            ))}
          </div>

          {/* Active Sample Card */}
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg relative">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#14151B]/15 pb-4 mb-5">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[#FF4D42] uppercase tracking-wider">
                  {activeSample.brand} · {activeSample.context}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#14151B]">
                  {activeSample.hook}
                </h4>
              </div>

              {activeSample.metric && (
                <span className="text-xs font-mono font-bold text-[#14151B] bg-[#FFE838] border-2 border-[#14151B] px-3 py-1 rounded-md shadow-xs">
                  {activeSample.metric}
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6 bg-[#FAF9F6] border-2 border-[#14151B]/20 rounded-xl mb-6">
              <p className="text-base sm:text-lg text-[#14151B] leading-relaxed font-medium">
                {activeSample.copy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-between pt-2">
              <div className="md:col-span-8 flex items-start gap-2.5">
                <span className="font-bold text-xs uppercase tracking-wider text-[#2D4BFF] shrink-0 pt-0.5">
                  Why It Works:
                </span>
                <span className="text-xs sm:text-sm text-[#14151B]/80 font-normal">
                  {activeSample.strategyNote}
                </span>
              </div>

              <div className="md:col-span-4 flex justify-end">
                <button
                  onClick={() => handleCopy(activeSample.copy, `sample-${activeSample.id}`)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg shadow-pop shadow-pop-hover cursor-pointer"
                >
                  {copiedKey === `sample-${activeSample.id}` ? '✓ Copied to Clipboard' : 'Copy Sample Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
