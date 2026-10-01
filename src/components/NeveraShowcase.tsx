import React, { useState } from 'react';

export const NeveraShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'livechat' | 'socialwidgets'>('overview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: '👋 Hey there! Welcome to nevara.top. Looking for custom web design, brand copy, or integrations?',
      time: 'Just now',
    },
  ]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    const newMessages = [
      ...chatMessages,
      { sender: 'user' as const, text: userMsg, time: 'Just now' },
    ];
    setChatMessages(newMessages);
    setChatInput('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thanks for messaging! Deekshita configured this live chat integration to capture visitor inquiries 24/7. Check out the live deployment at nevara.top!`,
          time: 'Just now',
        },
      ]);
    }, 600);
  };

  return (
    <section id="nevara-showcase" className="py-16 md:py-24 border-b-2 border-[#14151B] bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#7C3AED] text-white border-2 border-[#14151B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 shadow-pop">
              Live Web Design & Integrations
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14151B] font-display text-balance">
              nevara.top — WordPress Architecture & Live Widgets
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#14151B]/85 leading-relaxed">
              Designed, customized, and published by Deekshita on WordPress. Features real-time social media widgets, live customer chat engagement, and responsive mobile-first UI architecture.
            </p>
          </div>

          <a
            href="https://nevara.top"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#7C3AED] hover:bg-[#6D28D9] border-2 border-[#14151B] rounded-xl shadow-pop cursor-pointer whitespace-nowrap self-start md:self-auto inline-flex items-center gap-2 group transition-all"
          >
            <span>nevara.top</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#7C3AED] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Site Architecture & Live View
          </button>
          <button
            onClick={() => setActiveTab('livechat')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'livechat'
                ? 'bg-[#05D588] text-[#14151B] border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Live Chat Integration (Interactive)
          </button>
          <button
            onClick={() => setActiveTab('socialwidgets')}
            className={`px-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'socialwidgets'
                ? 'bg-[#FF4D42] text-white border-[#14151B] shadow-pop'
                : 'bg-white text-[#14151B] border-[#14151B] hover:bg-slate-100 shadow-xs'
            }`}
          >
            Live Social Widgets & Feeds
          </button>
        </div>

        {/* Tab 1: Site Architecture & Live View */}
        {activeTab === 'overview' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-8">
            {/* Top Bar with Browser Mockup Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#14151B]/15 pb-5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF4D42] border border-[#14151B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFB800] border border-[#14151B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#05D588] border border-[#14151B]" />
                </div>
                <div className="ml-3 px-3 py-1 bg-slate-100 border border-slate-300 rounded-lg text-xs font-mono text-slate-700 flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">🔒</span>
                  <span>https://nevara.top</span>
                </div>
              </div>

              {/* Viewport Toggles */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14151B]/60">
                  Preview Frame:
                </span>
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border cursor-pointer ${
                    deviceView === 'desktop'
                      ? 'bg-[#14151B] text-white border-[#14151B]'
                      : 'bg-slate-100 text-[#14151B] border-slate-300'
                  }`}
                >
                  Desktop View
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border cursor-pointer ${
                    deviceView === 'mobile'
                      ? 'bg-[#14151B] text-white border-[#14151B]'
                      : 'bg-slate-100 text-[#14151B] border-slate-300'
                  }`}
                >
                  Mobile View
                </button>
              </div>
            </div>

            {/* Interactive Browser Frame */}
            <div className="flex justify-center">
              <div
                className={`transition-all duration-300 bg-[#FAF9F6] border-2 border-[#14151B] rounded-xl overflow-hidden shadow-pop ${
                  deviceView === 'desktop' ? 'w-full' : 'w-full max-w-sm'
                }`}
              >
                {/* Mockup Header */}
                <div className="p-4 sm:p-6 bg-white border-b-2 border-[#14151B] flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display font-extrabold text-xl sm:text-2xl text-[#7C3AED]">
                    <span>Nevara</span>
                    <span className="text-xs font-mono px-2 py-0.5 bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] rounded">
                      WordPress
                    </span>
                  </div>
                  <a
                    href="https://nevara.top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#7C3AED] hover:underline"
                  >
                    Open Live Site ↗
                  </a>
                </div>

                {/* Mockup Body Content */}
                <div className="p-6 sm:p-10 space-y-6">
                  <div className="max-w-xl space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#F5F3FF] px-2.5 py-1 rounded border border-[#DDD6FE]">
                      WordPress Web Engineering
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#14151B]">
                      Modern, Responsive & Conversion-Focused
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14151B]/80 leading-relaxed font-medium">
                      Built by Deekshita to demonstrate full-funnel digital ownership: from WordPress theme customization and layout hierarchy to live social proof and customer chat capture.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-1">
                      <div className="text-lg">💬</div>
                      <div className="text-xs font-bold text-[#14151B]">Live Chat Module</div>
                      <div className="text-[11px] text-[#14151B]/70">Automated lead triggers & instant replies</div>
                    </div>
                    <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-1">
                      <div className="text-lg">📱</div>
                      <div className="text-xs font-bold text-[#14151B]">Social Feed Widgets</div>
                      <div className="text-[11px] text-[#14151B]/70">Real-time dynamic community proof</div>
                    </div>
                    <div className="p-4 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-1">
                      <div className="text-lg">⚡</div>
                      <div className="text-xs font-bold text-[#14151B]">Mobile-First Speed</div>
                      <div className="text-[11px] text-[#14151B]/70">Fast loading with clean responsive UX</div>
                    </div>
                  </div>

                  {/* CTA Banner inside preview */}
                  <div className="p-4 bg-[#F5F3FF] border-2 border-[#7C3AED] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#7C3AED]">Ready to see it in action?</div>
                      <div className="text-[11px] text-[#14151B]/70">Deployed live at https://nevara.top</div>
                    </div>
                    <a
                      href="https://nevara.top"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-bold bg-[#7C3AED] text-white rounded-lg border border-[#14151B] shadow-xs hover:bg-[#6D28D9]"
                    >
                      Visit nevara.top ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t-2 border-[#14151B]/15">
              <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF9F6]">
                <div className="text-xs font-bold text-slate-500 uppercase">Platform</div>
                <div className="text-sm font-extrabold text-[#14151B] mt-0.5">WordPress CMS</div>
                <div className="text-xs text-slate-600 mt-1">Custom template & blocks</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF9F6]">
                <div className="text-xs font-bold text-slate-500 uppercase">Live Engagement</div>
                <div className="text-sm font-extrabold text-[#14151B] mt-0.5">Live Chat Integration</div>
                <div className="text-xs text-slate-600 mt-1">Real-time visitor messaging</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF9F6]">
                <div className="text-xs font-bold text-slate-500 uppercase">Social Connectivity</div>
                <div className="text-sm font-extrabold text-[#14151B] mt-0.5">Dynamic Social Feeds</div>
                <div className="text-xs text-slate-600 mt-1">Live embed widgets</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF9F6]">
                <div className="text-xs font-bold text-slate-500 uppercase">Mobile Optimization</div>
                <div className="text-sm font-extrabold text-[#14151B] mt-0.5">100% Responsive</div>
                <div className="text-xs text-slate-600 mt-1">Cross-device fluidity & speed</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Chat Integration (Interactive Simulator) */}
        {activeTab === 'livechat' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="border-b-2 border-[#14151B]/15 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#05D588]">
                  Customer Engagement Architecture
                </span>
                <h3 className="text-2xl font-bold font-display text-[#14151B]">
                  Live Chat Integration & Automated Lead Capture
                </h3>
              </div>
              <div className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Chat Module</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Chat Simulator */}
              <div className="lg:col-span-7 bg-[#FFFDF9] border-2 border-[#14151B] rounded-2xl shadow-pop overflow-hidden flex flex-col h-[420px]">
                {/* Chat Top Bar */}
                <div className="p-4 bg-[#7C3AED] text-white flex items-center justify-between border-b-2 border-[#14151B]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white text-[#7C3AED] font-bold flex items-center justify-center text-sm border border-[#14151B]">
                      DM
                    </div>
                    <div>
                      <div className="text-sm font-bold">nevara.top Live Support</div>
                      <div className="text-[11px] text-purple-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Online · Instant reply</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-purple-200 font-mono">WordPress Live Chat</span>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF9F6]">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm font-medium border-2 border-[#14151B] shadow-xs ${
                          msg.sender === 'user'
                            ? 'bg-[#FFE838] text-[#14151B] rounded-br-none'
                            : 'bg-white text-[#14151B] rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                        {msg.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={handleSendChat}
                  className="p-3 bg-white border-t-2 border-[#14151B] flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type a test message to the live widget..."
                    className="flex-1 px-3.5 py-2 text-xs sm:text-sm border-2 border-[#14151B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#7C3AED] text-white text-xs font-bold uppercase rounded-xl border-2 border-[#14151B] shadow-xs hover:bg-[#6D28D9] cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Right Column: Strategic Implementation Value */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#7C3AED]">
                    1. Zero-Friction Visitor Conversion
                  </h4>
                  <p className="text-xs sm:text-sm text-[#14151B]/80 leading-relaxed font-medium">
                    Traditional contact forms lose up to 70% of potential leads. Integrating live chat directly on WordPress catches visitors while their purchase or inquiry intent is at its highest.
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#05D588]">
                    2. Automated Welcome & Lead Triggers
                  </h4>
                  <p className="text-xs sm:text-sm text-[#14151B]/80 leading-relaxed font-medium">
                    Configured with smart delay triggers and custom greetings based on page depth, prompting hesitant readers with friendly, non-intrusive microcopy.
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#14151B] rounded-xl shadow-xs space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF4D42]">
                    3. Mobile & WhatsApp Bridge
                  </h4>
                  <p className="text-xs sm:text-sm text-[#14151B]/80 leading-relaxed font-medium">
                    Designed to seamlessly bridge desktop visitors into direct mobile channels (WhatsApp business chats and live email alerts), preventing lost leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Live Social Widgets & Feeds */}
        {activeTab === 'socialwidgets' && (
          <div className="bg-white border-2 border-[#14151B] rounded-2xl p-6 sm:p-8 shadow-pop-lg space-y-6">
            <div className="border-b-2 border-[#14151B]/15 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D42]">
                Real-Time Proof Architecture
              </span>
              <h3 className="text-2xl font-bold font-display text-[#14151B]">
                Live Social Media Widgets & Community Embeds
              </h3>
              <p className="text-xs sm:text-sm text-[#14151B]/75 mt-0.5">
                Static websites feel abandoned; embedding dynamic, live social feeds proves active ongoing brand health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Instagram Feed Widget Simulation */}
              <div className="p-5 rounded-2xl border-2 border-[#14151B] bg-[#FFF8F7] shadow-pop space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#FF4D42]">Instagram Feed Widget</span>
                  <span className="text-[11px] font-mono text-slate-500">Live API Embed</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-white border border-[#14151B] rounded-lg p-3 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#FF4D42]">#Design</span>
                    <span className="text-[10px] text-[#14151B]/70">WordPress layout release</span>
                  </div>
                  <div className="aspect-square bg-white border border-[#14151B] rounded-lg p-3 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#2D4BFF]">#Widgets</span>
                    <span className="text-[10px] text-[#14151B]/70">Live feed sync tested</span>
                  </div>
                  <div className="aspect-square bg-white border border-[#14151B] rounded-lg p-3 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#7C3AED]">#Launch</span>
                    <span className="text-[10px] text-[#14151B]/70">nevara.top published</span>
                  </div>
                  <div className="aspect-square bg-white border border-[#14151B] rounded-lg p-3 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#05D588]">#LiveChat</span>
                    <span className="text-[10px] text-[#14151B]/70">Inquiry module live</span>
                  </div>
                </div>
                <p className="text-xs text-[#14151B]/80 font-medium">
                  Automatically pulls latest media posts without manual website redesigns.
                </p>
              </div>

              {/* Live Reviews / Social Proof Carousel */}
              <div className="p-5 rounded-2xl border-2 border-[#14151B] bg-[#F5F3FF] shadow-pop space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#7C3AED]">Social Proof Widget</span>
                  <span className="text-[11px] font-mono text-slate-500">Live Testimonials</span>
                </div>
                <div className="bg-white border-2 border-[#14151B] rounded-xl p-4 space-y-2 shadow-xs">
                  <div className="flex text-[#FFB800] text-xs">★★★★★</div>
                  <p className="text-xs text-[#14151B] font-semibold italic">
                    “The live chat responded in 15 seconds, and the site loaded instantly on mobile!”
                  </p>
                  <div className="text-[11px] font-mono text-slate-500">— Verified Site Visitor</div>
                </div>
                <p className="text-xs text-[#14151B]/80 font-medium">
                  Displays live social ratings that build instant buyer trust before checkout.
                </p>
              </div>

              {/* Floating Social Action Bar */}
              <div className="p-5 rounded-2xl border-2 border-[#14151B] bg-[#FFFDF9] shadow-pop space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#05D588]">Omni-Channel Bar</span>
                  <span className="text-[11px] font-mono text-slate-500">Floating Embed</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 bg-white border border-[#14151B] rounded-lg flex items-center justify-between text-xs font-bold text-[#14151B]">
                    <span>💬 WhatsApp Floating Direct</span>
                    <span className="text-emerald-600">Active</span>
                  </div>
                  <div className="p-2.5 bg-white border border-[#14151B] rounded-lg flex items-center justify-between text-xs font-bold text-[#14151B]">
                    <span>📸 Instagram Channel Sync</span>
                    <span className="text-purple-600">Active</span>
                  </div>
                </div>
                <p className="text-xs text-[#14151B]/80 font-medium">
                  Allows visitors to connect through their preferred platform with 1 tap.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
