import React, { useState } from 'react';

export const BrandResearch: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<number>(0);

  const marketInsights = [
    {
      title: 'The "Craving Guilt" Reframe',
      category: 'Consumer Perception',
      problem: 'Women feel shame or guilt about intense sugar cravings during the luteal phase, leading to binge-and-regret cycles.',
      insight: 'Progesterone synthesis drastically increases metabolic burn and depletes magnesium reserves. The craving is biological, not a lack of willpower.',
      copyAngle: 'Stop fighting your biology. Feed the craving with cacao and bioavailable magnesium that calms the storm naturally.'
    },
    {
      title: 'The Clinical vs. Indulgent Gap',
      category: 'Category Positioning',
      problem: 'Existing menstrual products in India are either clinical pharmaceuticals (antispasmodics) or generic dry granola bars with zero hormonal benefits.',
      insight: 'Indian women do not want to swallow another medicine pill for mild to moderate period discomfort; they want an indulgent, comforting treat that actually does the work.',
      copyAngle: 'The indulgence of premium Belgian chocolate with the efficacy of clinical adaptogens. Medicine disguised as ritual.'
    },
    {
      title: 'The PR & De-stigmatization Angle',
      category: 'Earned Media Strategy',
      problem: 'Menstrual nutrition is still treated gingerly by mainstream media, often relegated to hushed hygiene columns.',
      insight: 'Lifestyle, wellness, and food editors are eager for modern FMCG stories that celebrate female physiology with unapologetic joy and aesthetic packaging.',
      copyAngle: 'Positioning FloBites not as a menstrual remedy, but as essential luxury cycle-care, winning coverage across culture and wellness desks.'
    }
  ];

  return (
    <section id="research" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#FFB800] text-[#14151B] border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            Category Whitespace
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            Brand Research & Category Mapping
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/80 leading-relaxed">
            Writing compelling copy starts long before opening a text editor.
            Here is a look at the competitor whitespace and consumer psychology research I run for brands like FloBites.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Competitor Quadrant Map */}
          <div className="lg:col-span-6 bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#14151B]/15 pb-4 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#14151B]">
                    The Indian Wellness Snack Matrix
                  </h3>
                  <p className="text-xs text-[#14151B]/70">
                    Category Whitespace Identification (FloBites Research)
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold bg-[#FFE838] px-2 py-1 rounded border border-[#14151B]">
                  Uncharted Space
                </span>
              </div>

              {/* Matrix Canvas Box */}
              <div className="relative aspect-square max-w-md mx-auto bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl p-6 flex items-center justify-center my-2 shadow-xs">
                {/* Axes */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#14151B]/30" />
                <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-[#14151B]/30" />

                {/* Axis Labels */}
                <span className="absolute top-2 text-[10px] font-bold uppercase tracking-wider text-[#14151B]/70">
                  ↑ Functional / Cycle Efficacy
                </span>
                <span className="absolute bottom-2 text-[10px] font-bold uppercase tracking-wider text-[#14151B]/70">
                  ↓ Generic Nutrition
                </span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-wider text-[#14151B]/70 origin-center whitespace-nowrap">
                  ← Sterile / Clinical
                </span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold uppercase tracking-wider text-[#14151B]/70 origin-center whitespace-nowrap">
                  Indulgent & Crave-Worthy →
                </span>

                {/* Quadrant 1: FloBites (The Sweet Spot) */}
                <div className="absolute top-8 right-8 z-10 text-center animate-bounce">
                  <div className="bg-[#FF4D42] text-white text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-[#14151B] shadow-pop whitespace-nowrap">
                    ★ FloBites (The Target)
                  </div>
                  <div className="text-[10px] font-semibold text-[#14151B] mt-1 bg-white/90 px-1.5 rounded">
                    Cycle-Specific + Irresistible
                  </div>
                </div>

                {/* Quadrant 2: Clinical Pharmaceuticals */}
                <div className="absolute top-8 left-8 text-center opacity-75">
                  <div className="bg-slate-200 text-slate-800 text-[11px] font-bold px-2 py-1 rounded border border-slate-400 whitespace-nowrap">
                    OTC Pain Pills
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5">High efficacy, Zero delight</div>
                </div>

                {/* Quadrant 3: Generic Health Bars */}
                <div className="absolute bottom-8 left-8 text-center opacity-75">
                  <div className="bg-slate-200 text-slate-800 text-[11px] font-bold px-2 py-1 rounded border border-slate-400 whitespace-nowrap">
                    Diet Protein Bars
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5">Chalky taste, No cycle care</div>
                </div>

                {/* Quadrant 4: Comfort Candy / Junk */}
                <div className="absolute bottom-8 right-8 text-center opacity-75">
                  <div className="bg-slate-200 text-slate-800 text-[11px] font-bold px-2 py-1 rounded border border-slate-400 whitespace-nowrap">
                    Commercial Chocolate
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5">High sugar, Post-crash guilt</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#14151B]/15 text-xs text-[#14151B]/75 leading-relaxed">
              <strong>The Strategic Opportunity:</strong> FloBites owns the top-right quadrant where biological relief meets self-care indulgence.
            </div>
          </div>

          {/* Right Column: Interactive Consumer Insights Tab */}
          <div className="lg:col-span-6 bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#14151B]/15 pb-4 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#14151B]">
                    Consumer Perception Insights
                  </h3>
                  <p className="text-xs text-[#14151B]/70">
                    Turning behavioral friction into messaging hooks
                  </p>
                </div>
                <span className="text-xs font-bold text-[#FF4D42]">
                  3 Key Discoveries
                </span>
              </div>

              {/* Selector buttons */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                {marketInsights.map((insight, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedInsight(idx)}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border-2 transition-all cursor-pointer whitespace-nowrap ${
                      selectedInsight === idx
                        ? 'bg-[#14151B] text-white border-[#14151B] shadow-xs'
                        : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                    }`}
                  >
                    Insight 0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Insight Detail Card */}
              <div className="p-5 bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl space-y-4 shadow-pop-gold">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00]">
                    {marketInsights[selectedInsight].category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#14151B] mt-0.5">
                    {marketInsights[selectedInsight].title}
                  </h4>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase text-slate-500">
                    The Behavioral Friction:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {marketInsights[selectedInsight].problem}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase text-[#2D4BFF]">
                    The Research Finding:
                  </div>
                  <p className="text-xs sm:text-sm text-[#14151B] font-medium">
                    {marketInsights[selectedInsight].insight}
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFF8F7] border border-[#FF4D42]/30 rounded-lg">
                  <div className="text-xs font-bold text-[#FF4D42] uppercase mb-1">
                    Copy Strategy Execution:
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#14151B] italic">
                    “{marketInsights[selectedInsight].copyAngle}”
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#14151B]/15 flex items-center justify-between text-xs text-[#14151B]/70">
              <span>Method: Consumer interviews & competitor audits</span>
              <span className="font-semibold text-[#14151B]">B.Com International Business Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
