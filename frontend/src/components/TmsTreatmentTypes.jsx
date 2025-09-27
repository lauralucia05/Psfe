import React from 'react';

const TmsTreatmentTypes = () => {

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - TMS Video */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex items-center justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ugwQbe-q3E8?si=W4sWK-LtKxiDfQFo&autoplay=1&mute=1&loop=1&playlist=ugwQbe-q3E8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl w-full h-[220px] md:h-[315px]"
          ></iframe>
        </div>
      </div>

      {/* Right Column - TMS Information Redesigned */}
      <div className="flex flex-col gap-8">
        <div className="bg-gradient-to-br from-blue-900/80 to-slate-800/80 rounded-3xl p-8 border border-blue-700 shadow-xl">
          <h4 className="text-3xl font-bold text-white mb-8 tracking-tight" style={{textShadow: '0 2px 12px rgba(0,0,0,0.5)'}}>Types of TMS Treatments</h4>
          <div className="grid md:grid-cols-1 gap-6">
            {/* rTMS */}
            <div className="flex items-center gap-5 bg-blue-800/60 rounded-2xl p-5 border border-blue-500 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white mb-1">Repetitive TMS (rTMS)</h5>
                <p className="text-white/90 text-base">The most widely used and researched protocol. Delivers repeated magnetic pulses to stimulate brain areas involved in mood regulation. Strong clinical evidence and Medicare support.</p>
              </div>
            </div>
            {/* TBS */}
            <div className="flex items-center gap-5 bg-slate-800/60 rounded-2xl p-5 border border-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white mb-1">Theta Burst Stimulation (TBS)</h5>
                <p className="text-white/90 text-base">A faster, more efficient form of TMS that delivers multiple pulses in rapid succession for shorter treatment times.</p>
              </div>
            </div>
            {/* dTMS */}
            <div className="flex items-center gap-5 bg-blue-800/60 rounded-2xl p-5 border border-blue-500 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white mb-1">Deep TMS (dTMS)</h5>
                <p className="text-white/90 text-base">Advanced technology that reaches deeper brain structures for enhanced treatment effectiveness and broader applications.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Treatment Benefits Redesigned */}
        <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-3xl p-8 border border-slate-700 shadow-xl">
          <h4 className="text-2xl font-bold text-white mb-6 tracking-tight" style={{textShadow: '0 2px 12px rgba(0,0,0,0.5)'}}>Treatment Benefits</h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium text-base">Non-invasive procedure</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium text-base">No anesthesia required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium text-base">Minimal side effects</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium text-base">Quick treatment sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TmsTreatmentTypes;
