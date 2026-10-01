import React, { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (study) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#14151B]/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#FFFDF9] border-3 border-[#14151B] rounded-2xl shadow-pop-xl my-8 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-6 sm:p-8 border-b-2 border-[#14151B] bg-white flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14151B]/70 mb-1">
              <span>{study.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{study.timeline}</span>
              <span aria-hidden="true">·</span>
              <span>{study.location}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14151B] font-display">
              {study.title}
            </h2>
            <p className="text-sm font-semibold text-[#FF4D42] mt-0.5">
              Role: {study.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white border-2 border-[#14151B] text-[#14151B] hover:bg-[#FF4D42] hover:text-white transition-colors flex items-center justify-center font-bold text-lg shadow-pop cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Key Metric & Tagline Banner */}
          <div className="p-5 rounded-xl border-2 border-[#14151B] bg-white shadow-pop flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14151B]/60">
                Core Value Hook
              </span>
              <p className="text-base sm:text-lg font-semibold text-[#14151B]">
                {study.tagline}
              </p>
            </div>
            <div className="sm:border-l-2 sm:border-[#14151B]/15 sm:pl-6 shrink-0">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF4D42]">
                {study.keyMetric}
              </div>
              <div className="text-xs font-semibold text-[#14151B]/75 max-w-[140px]">
                {study.keyMetricLabel}
              </div>
            </div>
          </div>

          {/* Challenge & Strategic Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14151B]">
                  The Challenge
                </h3>
              </div>
              <p className="text-sm text-[#14151B]/85 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14151B]">
                  The Strategic Solution
                </h3>
              </div>
              <p className="text-sm text-[#14151B]/85 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Resume Bullets (Direct Evidence) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-display text-[#14151B] uppercase tracking-wide">
              Key Responsibilities & Proven Results
            </h3>
            <div className="bg-white border-2 border-[#14151B] rounded-xl p-5 shadow-xs space-y-3">
              {study.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#FF4D42] font-bold text-base leading-tight">→</span>
                  <p className="text-sm text-[#14151B] leading-relaxed font-medium">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Highlight */}
          <div className="p-6 bg-[#FAF9F6] border-2 border-[#14151B] rounded-xl shadow-pop space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4BFF]">
              Transformation Spotlight
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-300 rounded-lg">
                <div className="text-xs font-bold text-rose-700 uppercase mb-1">
                  ✕ {study.transformation.beforeLabel}
                </div>
                <p className="text-xs sm:text-sm font-mono text-slate-700">
                  “{study.transformation.beforeText}”
                </p>
              </div>
              <div className="p-4 bg-[#FFF8F7] border-2 border-[#FF4D42] rounded-lg">
                <div className="text-xs font-bold text-[#FF4D42] uppercase mb-1">
                  ✓ {study.transformation.afterLabel}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#14151B]">
                  “{study.transformation.afterText}”
                </p>
              </div>
            </div>
            <p className="text-xs text-[#14151B]/75 italic pt-1">
              <strong>Takeaway:</strong> {study.transformation.insight}
            </p>
          </div>

          {/* Deliverables & Tags */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-display text-[#14151B] uppercase tracking-wide">
              Deliverables & Collateral Produced
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border-2 border-[#14151B] rounded-lg text-xs font-bold text-[#14151B] shadow-xs"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t-2 border-[#14151B] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-medium text-[#14151B]/70 text-center sm:text-left">
            Want to see how this approach applies to your brand or upcoming campaign?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#14151B] bg-slate-100 hover:bg-slate-200 border-2 border-[#14151B] rounded-lg cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF4D42] hover:bg-[#e63c32] border-2 border-[#14151B] rounded-lg shadow-pop cursor-pointer"
            >
              Discuss a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
