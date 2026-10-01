import React, { useState } from 'react';
import { PORTFOLIO_DATA, FloTagline } from '../data/portfolioData';

export const FloBitesDossier: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skus' | 'taglines' | 'booklet' | 'ads' | 'guerrilla'>('skus');
  const [taglineFilter, setTaglineFilter] = useState<string>('All');
  const [selectedAdIdx, setSelectedAdIdx] = useState<number>(0);
  const [copiedTagline, setCopiedTagline] = useState<number | null>(null);

  const filteredTaglines = PORTFOLIO_DATA.curatedTaglines.filter((tag) => {
    if (taglineFilter === 'All') return true;
    return tag.category === taglineFilter;
  });

  const handleCopyTagline = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedTagline(id);
    setTimeout(() => setCopiedTagline(null), 2000);
  };

  return (
    <section id="flobites-work" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#FF4D42] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            Original Creative Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            The FloBites Campaign & Copy Vault
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/85 leading-relaxed">
            Real commercial deliverables created for India’s pioneering cycle-care snack: commercial packaging microcopy, 43 taglines, 15 ad film storyboards, a 12-page educational booklet, and 40 experiential marketing activations.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('skus')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'skus'
                ? 'bg-[#FF4D42] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Product Packaging & SKUs
          </button>
          <button
            onClick={() => setActiveTab('taglines')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'taglines'
                ? 'bg-[#2D4BFF] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            The 43 Tagline Vault
          </button>
          <button
            onClick={() => setActiveTab('booklet')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'booklet'
                ? 'bg-[#FFB800] text-[#14151B] border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            12-Page Period Guide
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ads'
                ? 'bg-[#05D588] text-[#14151B] border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            15 Video Ad Storyboards
          </button>
          <button
            onClick={() => setActiveTab('guerrilla')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'guerrilla'
                ? 'bg-[#14151B] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            40 Experiential Activations
          </button>
        </div>

        {/* Tab 1: Commercial SKUs */}
        {activeTab === 'skus' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.flobitesProducts.map((sku, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#14151B] rounded-2xl p-6 shadow-pop-lg flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#FF4D42]">
                    <span>{sku.variant}</span>
                    <span className="font-mono text-base font-extrabold text-[#14151B]">{sku.price}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#14151B]">
                      {sku.name}
                    </h3>
                    <p className="text-xs text-[#14151B]/70 font-mono mt-0.5">
                      {sku.packSize} · {sku.calories}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FFF8F7] border border-[#FF4D42]/30 rounded-xl">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF4D42] mb-1">
                      Packaging Hook
                    </div>
                    <p className="text-sm font-bold text-[#14151B]">
                      “{sku.hook}”
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#14151B]/85 leading-relaxed font-medium">
                    {sku.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-[#14151B]/15">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#14151B]/60">
                      Clean Formula Callout
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-[#14151B]/80 font-medium">
                      {sku.ingredients.slice(0, 6).map((ing, i) => (
                        <span key={i} className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {ing}
                        </span>
                      ))}
                      {sku.ingredients.length > 6 && (
                        <span className="text-[11px] text-slate-500 self-center">+{sku.ingredients.length - 6} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#14151B]/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold">✓ 100% Real FMCG Copy</span>
                  <span className="text-slate-400 font-mono">FloBites D2C</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: The 43 Tagline Vault */}
        {activeTab === 'taglines' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#14151B]/15 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D4BFF]">
                  Copywriting Sprint
                </span>
                <h3 className="text-2xl font-bold font-display text-[#14151B]">
                  43 Original FloBites Taglines & Micro-Hooks
                </h3>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Empowering & Defiant', 'Sensory & Habit', 'Witty & Conversational', 'Hinglish & Cultural'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setTaglineFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                      taglineFilter === cat
                        ? 'bg-[#14151B] text-white border-[#14151B]'
                        : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Tagline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTaglines.map((tag) => (
                <div
                  key={tag.id}
                  className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] hover:bg-[#FFF8F7] transition-all flex flex-col justify-between group shadow-xs hover:shadow-pop"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4D42]">
                        {tag.category}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">#{tag.id}</span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-[#14151B] leading-snug">
                      “{tag.text}”
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#14151B]/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 italic">FloBites Sprint</span>
                    <button
                      onClick={() => handleCopyTagline(tag.text, tag.id)}
                      className="text-xs font-bold text-[#2D4BFF] hover:underline cursor-pointer"
                    >
                      {copiedTagline === tag.id ? '✓ Copied!' : 'Copy Line'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: The 12-Page Period Guide */}
        {activeTab === 'booklet' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-8">
            <div className="border-b-2 border-[#14151B]/15 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
                  Long-Form Educational Copy
                </span>
                <h3 className="text-2xl font-bold font-display text-[#14151B]">
                  FloGirl’s Guide to Periods (12-Page Booklet)
                </h3>
              </div>
              <div className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300">
                Printed & Distributed Inside FloBites Boxes
              </div>
            </div>

            {/* Opening Statement */}
            <div className="p-6 bg-[#FAF9F6] border-2 border-[#14151B] rounded-xl text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                Page 2 Opening Sentence
              </span>
              <p className="text-lg sm:text-xl font-bold font-display text-[#14151B] max-w-2xl mx-auto">
                “{PORTFOLIO_DATA.bookletExcerpt.opening}”
              </p>
            </div>

            {/* The 7.26 Litre Blood Loss Metric - Visual Highlight */}
            <div className="p-6 sm:p-8 bg-[#FFF1F0] border-2 border-[#FF4D42] rounded-2xl shadow-pop-coral grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                  Page 10: The Lifetime Blood Loss Calculation
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-[#14151B]">
                  7.26 Litres. Quietly shed. Without a single day off.
                </h4>
                <p className="text-sm sm:text-base text-[#14151B]/85 leading-relaxed font-medium">
                  {PORTFOLIO_DATA.bookletExcerpt.bloodLossFormula.example}. Menstruators are taught to apologize for low energy, yet their bodies quietly do the work of an endurance athlete every 28 days.
                </p>
                <div className="text-xs font-mono font-bold text-[#FF4D42]">
                  Formula: {PORTFOLIO_DATA.bookletExcerpt.bloodLossFormula.formula}
                </div>
              </div>

              <div className="md:col-span-4 bg-white border-2 border-[#14151B] rounded-xl p-5 text-center shadow-xs">
                <div className="text-4xl font-extrabold font-mono text-[#FF4D42]">
                  7.26 L
                </div>
                <div className="text-xs font-bold text-[#14151B] mt-1">
                  Average 10-Yr Cycle Blood Volume
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Light (40ml) · Moderate (55ml) · Heavy (80ml)
                </div>
              </div>
            </div>

            {/* Do's & Don'ts Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-emerald-50 border-2 border-emerald-300 rounded-xl space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <span>✓</span>
                  <span>Do’s (From the Guide)</span>
                </h4>
                <ul className="space-y-2 text-sm text-emerald-950 font-medium">
                  {PORTFOLIO_DATA.bookletExcerpt.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-rose-50 border-2 border-rose-300 rounded-xl space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-rose-800 flex items-center gap-2">
                  <span>✕</span>
                  <span>Don’ts (From the Guide)</span>
                </h4>
                <ul className="space-y-2 text-sm text-rose-950 font-medium">
                  {PORTFOLIO_DATA.bookletExcerpt.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Closing Manifesto */}
            <div className="p-5 bg-[#FAF9F6] border-2 border-[#14151B] rounded-xl flex items-center justify-between text-xs sm:text-sm font-bold text-[#14151B]">
              <span>Closing Line: “{PORTFOLIO_DATA.bookletExcerpt.closingPhilosophy}”</span>
              <span className="text-[#FF4D42]">Your Flo Gang</span>
            </div>
          </div>
        )}

        {/* Tab 4: 15 Video Ad Storyboards */}
        {activeTab === 'ads' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="border-b-2 border-[#14151B]/15 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05D588]">
                Video & Commercial Directing
              </span>
              <h3 className="text-2xl font-bold font-display text-[#14151B]">
                15 Real-Life Video Ad Storyboards
              </h3>
              <p className="text-xs sm:text-sm text-[#14151B]/75 mt-0.5">
                Moving past sterile commercials into raw, relatable situations women face every month.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Concept Selector */}
              <div className="lg:col-span-5 space-y-2.5">
                {PORTFOLIO_DATA.adConcepts.map((ad, idx) => (
                  <button
                    key={ad.id}
                    onClick={() => setSelectedAdIdx(idx)}
                    className={`w-full p-4 text-left border-2 rounded-xl transition-all cursor-pointer ${
                      selectedAdIdx === idx
                        ? 'bg-[#14151B] text-white border-[#14151B] shadow-pop'
                        : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                      Storyboard #{ad.id}
                    </div>
                    <div className="text-sm font-bold">
                      {ad.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Storyboard Display */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl shadow-pop space-y-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#FF4D42]">Narrative Arc</span>
                  <span className="text-[#2D4BFF] font-mono">
                    Emotion: {PORTFOLIO_DATA.adConcepts[selectedAdIdx].targetEmotion}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-slate-500">
                    Scene Action & Script
                  </div>
                  <p className="text-base sm:text-lg text-[#14151B] leading-relaxed font-medium">
                    {PORTFOLIO_DATA.adConcepts[selectedAdIdx].scenario}
                  </p>
                </div>

                <div className="p-4 bg-[#FFF8F7] border-2 border-[#FF4D42] rounded-xl">
                  <div className="text-xs font-bold text-[#FF4D42] uppercase mb-1">
                    Ending Payoff & Tagline
                  </div>
                  <p className="text-base font-bold text-[#14151B]">
                    {PORTFOLIO_DATA.adConcepts[selectedAdIdx].taglineOrResolution}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#14151B]/15 text-xs text-slate-600 flex items-center justify-between">
                  <span>Channel: Meta Reels, YouTube Pre-Roll, OTT</span>
                  <span className="font-semibold text-[#14151B]">Director’s Cut Note</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: 40 Guerrilla & Experiential Activations */}
        {activeTab === 'guerrilla' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="border-b-2 border-[#14151B]/15 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                On-Ground & Community Activations
              </span>
              <h3 className="text-2xl font-bold font-display text-[#14151B]">
                40 Experiential Marketing Ideas (Selected Highlights)
              </h3>
              <p className="text-xs sm:text-sm text-[#14151B]/75 mt-0.5">
                High-empathy physical installations that turn menstrual conversations into shared public joy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO_DATA.experientialActivations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-xs hover:shadow-pop transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00]">
                      Activation 0{idx + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#14151B]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#14151B]/80 leading-relaxed font-medium">
                      {item.concept}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#14151B]/15 text-xs text-[#2D4BFF] font-semibold">
                    <strong>Payoff:</strong> {item.payoff}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
