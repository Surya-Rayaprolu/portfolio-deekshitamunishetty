import React, { useState } from 'react';

export const RigorSection: React.FC = () => {
  const [activeConstraint, setActiveConstraint] = useState<number>(0);

  const constraints = [
    {
      title: 'Zero-Tolerance FMCG & Health Claims',
      issue: 'Writing about adaptogens or wellness without triggering regulatory or misleading-advertising penalties.',
      howISolve: 'Trained at D.E. Shaw in legal review cycles. I write high-converting copy that celebrates product benefits while remaining strictly compliant with advertising guidelines and verified ingredients.',
      proofMetric: 'FloBites Wellness Copy'
    },
    {
      title: 'Hard, Non-Negotiable Launch Deadlines',
      issue: 'Marketing launches delayed for days because copywriters are waiting for "inspiration."',
      howISolve: 'At Wells Fargo and D.E. Shaw, missing a reporting cutoff meant immediate regulatory escalation. I operate on rigorous sprints, clear milestone tracking, and deliver early.',
      proofMetric: '100% On-Time Reporting Cycles'
    },
    {
      title: 'High-Velocity Data & Conversion Tracking',
      issue: 'Writers who fall in love with their words and refuse to rewrite underperforming hooks.',
      howISolve: 'At MyCaptain, I tracked daily replies and conversions across 10+ courses, ruthlessly cutting phrases that failed to convert and rewriting copy against numbers until we hit +200 sign-ups above quota.',
      proofMetric: '+200 Sign-ups Above Target'
    },
    {
      title: 'Cross-Functional Team Friction',
      issue: 'Marketing copy that clashes with operations, product compliance, and finance expectations.',
      howISolve: 'Honed cross-functional reconciliation across 3 internal banking teams. I know how to speak to legal, finance, and creative stakeholders without friction.',
      proofMetric: 'Cross-Team Operational Fluency'
    }
  ];

  return (
    <section id="the-rigor" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#05D588] text-[#14151B] border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
            The Competitive Moat
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
            The Wall Street & Operations Edge
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#14151B]/85 leading-relaxed">
            Most writers dread spreadsheets, compliance checks, and hard constraints.
            I spent two years inside them at <span className="font-semibold text-[#14151B]">Wells Fargo</span> and{' '}
            <span className="font-semibold text-[#14151B]">The D.E. Shaw Group</span>. Here is why that makes me the most dependable writer your team will ever hire.
          </p>
        </div>

        {/* Head-to-Head Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-stretch">
          {/* Column A: The Standard Writer Pitfall */}
          <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">
                The Typical Early-Career Writer
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Flexible Deadlines:</strong> Treats launch dates as soft targets, causing cascading project delays.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Allergic to Data:</strong> Writes on intuition alone; struggles to interpret funnel analytics or customer research.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Sloppy Fact-Checking:</strong> Requires multiple review rounds to eliminate inaccurate claims or mismatched specs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Resists Constraints:</strong> Views regulatory, character, or channel limits as creative roadblocks.</span>
              </li>
            </ul>
          </div>

          {/* Column B: The Deekshita Standard */}
          <div className="bg-[#FFFDF9] border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 space-y-5 shadow-pop-coral relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05D588]/15 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#05D588]" />
              <h3 className="text-base font-bold uppercase tracking-wider text-[#14151B]">
                The Deekshita Standard (Finance-Trained)
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-[#14151B] font-medium">
              <li className="flex items-start gap-3">
                <span className="text-[#05D588] font-bold text-base shrink-0">✓</span>
                <span><strong>Immovable Delivery:</strong> Honed under fixed legal reporting deadlines at D.E. Shaw. When I promise a date, it is delivered.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#05D588] font-bold text-base shrink-0">✓</span>
                <span><strong>99% Accuracy Baseline:</strong> Reconciled high-volume commercial loan data at Wells Fargo where single errors were compliance violations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#05D588] font-bold text-base shrink-0">✓</span>
                <span><strong>Numbers-Driven Iteration:</strong> Validated by 200+ student sign-ups at MyCaptain by rewriting copy directly against conversion drops.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#05D588] font-bold text-base shrink-0">✓</span>
                <span><strong>Creative inside Constraints:</strong> Thrives under tight word counts, strict regulatory boundaries, and complex domain concepts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Constraint Solver Tabs */}
        <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#14151B]/15 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D4BFF]">
                Real-World Scenarios
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B]">
                How I Solve High-Stakes Brand Constraints
              </h3>
            </div>
            <span className="text-xs text-[#14151B]/60">
              Click a constraint to explore the tactical solution
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Buttons list */}
            <div className="lg:col-span-5 space-y-2">
              {constraints.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveConstraint(idx)}
                  className={`w-full p-4 text-left border-2 rounded-xl transition-all cursor-pointer ${
                    activeConstraint === idx
                      ? 'bg-[#14151B] text-white border-[#14151B] shadow-pop'
                      : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-75">
                    Constraint 0{idx + 1}
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    {c.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Tactical Solution View */}
            <div className="lg:col-span-7 p-6 sm:p-7 bg-[#FFFDF9] border-2 border-[#14151B] rounded-xl shadow-pop space-y-5">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-[#FF4D42]">The Operational Hurdle</span>
                <span className="text-[#2D4BFF] font-mono">{constraints[activeConstraint].proofMetric}</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 italic">
                “{constraints[activeConstraint].issue}”
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#05D588]">
                  How Deekshita Tackles It
                </div>
                <p className="text-sm sm:text-base text-[#14151B] leading-relaxed font-medium">
                  {constraints[activeConstraint].howISolve}
                </p>
              </div>

              <div className="pt-3 border-t border-[#14151B]/15 flex items-center justify-between text-xs text-[#14151B]/70">
                <span>Result: Rapid stakeholder sign-off</span>
                <span className="font-semibold text-[#14151B]">Zero-rework copy standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
