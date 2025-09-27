import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TmsGuide({ scrollToHow }) {
  const navigate = useNavigate();
  const handleHowItWorks = () => {
    if (scrollToHow) {
      scrollToHow();
    } else {
      navigate('/tms-info');
    }
  };
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Embedded Video */}
        <div className="flex-1 relative">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-xl mx-auto w-full">
            <div className="relative w-full rounded-xl overflow-hidden" style={{paddingTop:'56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cHQ4LLd8qQA?rel=0&modestbranding=1&loop=1&playlist=cHQ4LLd8qQA&autoplay=1&mute=1&playsinline=1"
                title="What is TMS (looped)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* Right Side - Content */}
        <div className="flex-1 max-w-lg">
          <p className="uppercase text-[#ff8b7b] font-semibold tracking-widest mb-2 text-sm">A GUIDE TO</p>
          <h2 className="text-4xl font-bold text-[#54586a] mb-6">TMS Treatment</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Transcranial Magnetic Stimulation (or TMS) is a non-invasive form of brain stimulation that targets specific areas of the brain that are directly associated with controlling mood and depression.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              onClick={handleHowItWorks}
            >
              <span>HOW IT WORKS</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            </button>
            <button className="border-2 border-[#ff8b7b] text-[#ff8b7b] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8b7b] hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>DOWNLOAD GUIDE</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 