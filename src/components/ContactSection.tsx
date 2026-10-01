import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [inquiryType, setInquiryType] = useState<string>('Full-Time Role');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copyToast, setCopyToast] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyToast(`Copied ${label}!`);
    setTimeout(() => setCopyToast(null), 2500);
  };

  const handleQuickTemplate = (type: string) => {
    setInquiryType(type);
    if (type === 'Full-Time Role') {
      setMessage(`Hi Deekshita, we came across your portfolio and love your blend of creative copy and financial discipline. We have a Content/Marketing Writer role on our team and would love to chat!`);
    } else if (type === 'Contract / Freelance') {
      setMessage(`Hi Deekshita, we are preparing an upcoming product launch/campaign and need high-converting landing page copy and consumer messaging. Can you share your timeline and availability?`);
    } else {
      setMessage(`Hi Deekshita, impressed by your work on FloBites and MyCaptain. Would love to connect for 15 minutes to talk brand strategy and copy.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail) return;

    // Simulate instant form transmission with mailto fallback
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFFDF9] border-t-2 border-[#14151B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Notification */}
        {copyToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#14151B] text-white px-4 py-2.5 rounded-xl border-2 border-[#FFE838] shadow-pop text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-bounce">
            <span className="text-[#05D588]">✓</span>
            <span>{copyToast}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-[#FF4D42] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-pop">
              Let’s Make Magic
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
              Need words that actually convert? Let’s talk.
            </h2>

            <p className="text-base sm:text-lg text-[#14151B]/80 leading-relaxed font-normal">
              Whether you are launching a new consumer brand, refining an existing funnel, or looking for a full-time content writer who never misses a deadline — I would love to hear from you.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-pop flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#14151B]/60">
                    Email Directly
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-sm sm:text-base font-bold text-[#14151B] hover:text-[#FF4D42] truncate block"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'Email address')}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-[#FFE838] hover:bg-[#fedb00] border-2 border-[#14151B] rounded-lg cursor-pointer shrink-0 shadow-xs"
                >
                  Copy
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-pop flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#14151B]/60">
                    Phone & WhatsApp
                  </div>
                  <a
                    href="tel:+918019570617"
                    className="text-sm sm:text-base font-bold text-[#14151B] hover:text-[#FF4D42]"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'Phone number')}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-white hover:bg-slate-100 border-2 border-[#14151B] rounded-lg cursor-pointer shrink-0 shadow-xs"
                >
                  Copy
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-pop flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#14151B]/60">
                    Current Location & Mobility
                  </div>
                  <div className="text-sm font-semibold text-[#14151B]">
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#14151B] bg-[#FFF8F7] hover:bg-[#FFEFEF] border-2 border-[#14151B] rounded-xl shadow-pop text-center cursor-pointer transition-colors"
              >
                View Full Printable Resume Document →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Collaboration Inquiry Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg relative">
            <div className="border-b-2 border-[#14151B]/15 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D4BFF]">
                Send a Message
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#14151B] mt-0.5">
                Start a Conversation
              </h3>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-[#F0FDF4] border-2 border-[#05D588] rounded-xl shadow-xs">
                <div className="w-14 h-14 rounded-full bg-[#05D588] border-2 border-[#14151B] text-white flex items-center justify-center text-2xl mx-auto shadow-pop">
                  ✓
                </div>
                <h4 className="text-xl font-bold font-display text-[#14151B]">
                  Message Ready to Dispatch!
                </h4>
                <p className="text-sm text-[#14151B]/80 max-w-md mx-auto">
                  Thank you, <strong>{senderName}</strong>. You can also trigger an immediate email to{' '}
                  <span className="font-mono font-semibold">{PORTFOLIO_DATA.personal.email}</span> with one click:
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
                      `[Portfolio Inquiry - ${inquiryType}] From ${senderName}`
                    )}&body=${encodeURIComponent(
                      `Hi Deekshita,\n\nName: ${senderName}\nBrand/Company: ${brandName}\nInquiry: ${inquiryType}\n\nMessage:\n${message}\n\nBest,\n${senderName} (${senderEmail})`
                    )}`}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF4D42] border-2 border-[#14151B] rounded-lg shadow-pop cursor-pointer"
                  >
                    Open in Your Email Client →
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#14151B] bg-white border-2 border-[#14151B] rounded-lg cursor-pointer hover:bg-slate-50"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14151B]/70 mb-2">
                    What are you looking to collaborate on?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Full-Time Role', 'Contract / Freelance', 'Brand Consultation'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleQuickTemplate(type)}
                        className={`p-2.5 text-xs font-bold rounded-lg border-2 text-center transition-all cursor-pointer whitespace-nowrap ${
                          inquiryType === type
                            ? 'bg-[#14151B] text-white border-[#14151B] shadow-xs'
                            : 'bg-[#FAF9F6] text-[#14151B] border-[#14151B]/20 hover:border-[#14151B]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14151B]/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] border-2 border-[#14151B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D42] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14151B]/70 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] border-2 border-[#14151B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D42] shadow-xs"
                    />
                  </div>
                </div>

                {/* Company / Brand Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14151B]/70 mb-1">
                    Company / Brand (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. FloBites, Early-stage D2C, Agency"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] border-2 border-[#14151B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D42] shadow-xs"
                  />
                </div>

                {/* Message Box */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14151B]/70">
                      Message / Project Details *
                    </label>
                    <button
                      type="button"
                      onClick={() => handleQuickTemplate(inquiryType)}
                      className="text-[11px] font-bold text-[#FF4D42] hover:underline cursor-pointer"
                    >
                      Fill Template Text
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the campaign, role, or messaging challenge you want to solve..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] border-2 border-[#14151B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D42] shadow-xs"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4D42] hover:bg-[#e63c32] border-2 border-[#14151B] rounded-xl shadow-pop shadow-pop-hover cursor-pointer transition-all"
                >
                  Send Inquiry to Deekshita →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Editorial Footer adhering to anti-slop rules */}
        <div className="mt-20 pt-8 border-t-2 border-[#14151B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#14151B]/70">
          <div>
            © {new Date().getFullYear()} Deekshita Munishetty · Content & Copy · Hyderabad, India
          </div>
          <div className="flex items-center gap-6 font-semibold text-[#14151B]">
            <a
              href="mailto:deekshita10munishetty@gmail.com"
              className="hover:text-[#FF4D42] transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+918019570617"
              className="hover:text-[#FF4D42] transition-colors"
            >
              +91 8019570617
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#FF4D42] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
