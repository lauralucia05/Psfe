import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TmsWorks() {
  const [currentCondition, setCurrentCondition] = useState(0);
  const conditions = ['Brain Fog', 'Anxiety', 'OCD', 'PTSD', 'Chronic Pain'];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCondition((prev) => (prev + 1) % conditions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f7faff] py-16 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1 max-w-lg">
          <p className="uppercase text-[#2A5DCC] font-semibold tracking-widest mb-2 text-sm">What is TMS used for?</p>
          <h2 className="text-4xl font-bold text-[#2A5DCC] mb-2">TMS Therapy<br />For <span className="bg-[rgba(42,93,204,0.10)] px-2 py-1 rounded transition-all duration-1000">{conditions[currentCondition]}</span></h2>
        
          <p className="text-gray-600 mb-6">
            This innovative therapy has shown promising results for various conditions including depression, anxiety, PTSD, OCD, and chronic pain. It's particularly effective for <span className="bg-[rgba(42,93,204,0.10)] px-1 rounded">treatment-resistant depression</span>.
          </p>
         
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#2A5DCC] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2A5DCC]">What To Expect</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Learn about the TMS treatment process and what to expect during your sessions.</p>
              <button className="text-[#2A5DCC] font-semibold text-sm hover:underline" onClick={() => navigate('/tms-science')}>LEARN MORE</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#2A5DCC] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2A5DCC]">What are the types of TMS?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Discover the science behind TMS and how it stimulates brain activity and TMS types to treat different conditions.</p>
              <button className="text-[#2A5DCC] font-semibold text-sm hover:underline" onClick={() => navigate('/tms-types')}>LEARN MORE</button>
            </div>
          </div>
         
        </div>
        
      </div>
      
    </div>
  );
} 