import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const plainResume = `DEEKSHITA MUNISHETTY
Content & Copy · Brand Research · Campaign Marketing
+91 8019570617 · deekshita10munishetty@gmail.com · Hyderabad (open to relocate)

PROFILE:
${PORTFOLIO_DATA.personal.bio}

MARKETING EXPERIENCE:
- Marketing Intern | The Hormone Essentials (FloBites) (Jun 2026 - Present)
  Write and refine website copy for a period-week snack brand; run consumer and category research; support PR.
- Marketing & Sales Intern | MyCaptain (Jul - Aug 2022)
  Wrote platform-native Instagram captions and WhatsApp copy; 200+ student sign-ups above intern target.
- Core Team, Marketing & Outreach | Street Cause NGO (Sep 2021 - Sep 2022)
  Wrote fundraising copy for Instagram & WhatsApp; co-organised event with 2,000+ people.

FINANCE & OPERATIONS EXPERIENCE:
- Legal Admin (Contract) | The D.E. Shaw Group (Mar - Sep 2024)
  Produced and circulated stakeholder reports across global teams to legal review cycles.
- Loan Documentation Specialist | Wells Fargo (Jul 2023 - Mar 2024)
  Reconciled high-volume commercial loan data at 99% accuracy; coordinated with 3 teams under daily deadlines.

EDUCATION:
B.Com, International Business (Apr 2023) | St. Francis College for Women · GPA 9.03 / 10

SKILLS:
Content & Copy · Consumer & Competitor Research · Financial Reconciliation & Reporting
Tools: Canva · Google Sheets / Excel · PowerPoint · SharePoint
Languages: English (fluent) · Hindi (fluent) · Telugu (native)`;

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#14151B]/75 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-4xl bg-white border-3 border-[#14151B] rounded-2xl shadow-pop-xl my-8 overflow-hidden max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Bar (hidden when printing) */}
        <div className="p-4 sm:p-6 border-b-2 border-[#14151B] bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-3 print:hidden sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF4D42]" />
            <h3 className="font-bold font-display text-base text-[#14151B]">
              Verified Resume Document
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg shadow-xs hover:bg-slate-100 cursor-pointer"
            >
              {copied ? '✓ Copied Plaintext' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#14151B] border-2 border-[#14151B] rounded-lg shadow-xs hover:bg-slate-800 cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white border-2 border-[#14151B] text-[#14151B] hover:bg-[#FF4D42] hover:text-white transition-colors flex items-center justify-center font-bold text-sm shadow-xs cursor-pointer ml-1"
              aria-label="Close resume modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans text-[#14151B] space-y-7 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-[#14151B] pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#14151B]">
              DEEKSHITA MUNISHETTY
            </h1>
            <p className="text-sm font-semibold tracking-wider uppercase text-[#FF4D42]">
              Content & Copy · Brand Research · Campaign Marketing
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#14151B]/80 font-mono">
              <a href="tel:+918019570617" className="hover:underline">+91 8019570617</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:deekshita10munishetty@gmail.com" className="hover:underline">deekshita10munishetty@gmail.com</a>
              <span aria-hidden="true">·</span>
              <span>Hyderabad (open to relocate)</span>
              <span aria-hidden="true">·</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#14151B] border-b border-[#14151B]/20 pb-1">
              P R O F I L E
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#14151B]/90 font-normal">
              Marketing and content writer with a finance and operations background. Currently writing website copy, running category research, and supporting PR for FloBites, a period-week snack brand in a near-empty Indian category. I started in marketing: fundraising copy at Street Cause, and Instagram and WhatsApp campaigns at MyCaptain that converted 200+ students, past intern target. Two years at Wells Fargo and D.E. Shaw followed, in reconciliation and stakeholder reporting, where accuracy was not negotiable and the deadline never moved. The move back to marketing is deliberate. What I bring that most early-career writers do not is the discipline to do creative work inside real constraints.
            </p>
          </div>

          {/* Marketing Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#14151B] border-b border-[#14151B]/20 pb-1">
              M A R K E T I N G &nbsp; E X P E R I E N C E
            </h2>

            {/* FloBites */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <span className="font-bold text-[#14151B]">Marketing Intern</span>
                <span className="font-mono text-xs text-[#14151B]/70">Jun 2026 - Present</span>
              </div>
              <div className="text-xs italic text-[#14151B]/80 font-medium">
                The Hormone Essentials (FloBites) · Women’s Wellness · Remote
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#14151B]/90">
                <li>Write and refine website copy for a period-week snack brand, turning clinical ingredient benefits into warm, accessible language for a women-first audience.</li>
                <li>Run consumer and category research: mapping the women’s wellness snack space, identifying competitor gaps, and surfacing perception insights.</li>
                <li>Support PR and brand communications in a category with almost no established Indian competition.</li>
              </ul>
            </div>

            {/* MyCaptain */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <span className="font-bold text-[#14151B]">Marketing & Sales Intern</span>
                <span className="font-mono text-xs text-[#14151B]/70">Jul - Aug 2022</span>
              </div>
              <div className="text-xs italic text-[#14151B]/80 font-medium">
                MyCaptain · Ed-tech · Remote
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#14151B]/90">
                <li>Wrote platform-native Instagram captions and personalised WhatsApp copy across 10+ courses, generating 200+ student sign-ups above intern target.</li>
                <li>Ran campaigns end to end (audience segmentation, messaging cadence, conversion tracking), then rewrote underperforming copy against the numbers.</li>
              </ul>
            </div>

            {/* Street Cause NGO */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <span className="font-bold text-[#14151B]">Core Team, Marketing & Outreach</span>
                <span className="font-mono text-xs text-[#14151B]/70">Sep 2021 - Sep 2022</span>
              </div>
              <div className="text-xs italic text-[#14151B]/80 font-medium">
                Street Cause NGO · Student-run · Hyderabad
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#14151B]/90">
                <li>Wrote fundraising copy for Instagram and WhatsApp that converted cold audiences into donors, with no budget and no brand recognition behind it.</li>
                <li>Co-organised a fundraising event attended by 2,000+ people, owning outreach copy and promotional content.</li>
              </ul>
            </div>
          </div>

          {/* Finance & Operations Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#14151B] border-b border-[#14151B]/20 pb-1">
              F I N A N C E &nbsp; &amp; &nbsp; O P E R A T I O N S &nbsp; E X P E R I E N C E
            </h2>

            {/* D.E. Shaw */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <span className="font-bold text-[#14151B]">Legal Admin (Contract)</span>
                <span className="font-mono text-xs text-[#14151B]/70">Mar - Sep 2024</span>
              </div>
              <div className="text-xs italic text-[#14151B]/80 font-medium">
                The D.E. Shaw Group · Hyderabad
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#14151B]/90">
                <li>Produced and circulated stakeholder reports across a global team, working to legal review cycles and fixed reporting deadlines.</li>
              </ul>
            </div>

            {/* Wells Fargo */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <span className="font-bold text-[#14151B]">Loan Documentation Specialist</span>
                <span className="font-mono text-xs text-[#14151B]/70">Jul 2023 - Mar 2024</span>
              </div>
              <div className="text-xs italic text-[#14151B]/80 font-medium">
                Wells Fargo · Commercial Loan Operations · Hyderabad
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#14151B]/90">
                <li>Reconciled high-volume commercial loan data against source databases at 99% accuracy, identifying and clearing breaks before they reached downstream reporting.</li>
                <li>Coordinated with three internal teams to resolve exceptions under daily deadlines, in an environment where a single mismatched field is a compliance problem.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#14151B] border-b border-[#14151B]/20 pb-1">
              E D U C A T I O N
            </h2>
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div>
                <span className="font-bold text-[#14151B]">B.Com, International Business</span>
                <div className="text-xs text-[#14151B]/80">St. Francis College for Women · GPA 9.03 / 10</div>
              </div>
              <span className="font-mono text-xs text-[#14151B]/70">Apr 2023</span>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#14151B] border-b border-[#14151B]/20 pb-1">
              S K I L L S
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <div>
                <strong>Content & Copy:</strong> Website and landing page copy · Explainers · Email sequences · Social copy · Brand voice
              </div>
              <div>
                <strong>Marketing:</strong> Consumer and competitor research · Brand positioning · Segmentation · PR outreach
              </div>
              <div>
                <strong>Finance & Ops:</strong> Reconciliation · Stakeholder and MIS reporting · Data accuracy · Cross-functional coordination
              </div>
              <div>
                <strong>Tools:</strong> Canva · Google Sheets / Excel · PowerPoint · SharePoint · AI-assisted drafting
              </div>
              <div>
                <strong>Languages:</strong> English, Hindi (fluent) · Telugu (native)
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-6 border-t-2 border-[#14151B] bg-[#FAF9F6] flex items-center justify-between print:hidden">
          <span className="text-xs text-[#14151B]/70">
            Available for full-time and high-impact contract roles.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF4D42] hover:bg-[#e63c32] border-2 border-[#14151B] rounded-lg shadow-pop cursor-pointer"
          >
            Hire Deekshita →
          </button>
        </div>
      </div>
    </div>
  );
};
