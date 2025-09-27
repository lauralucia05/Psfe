import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l9 5-9 5-9-5 9-5z" /></svg>
    ),
    title: 'Evidence-Based Care',
    desc: 'We use the latest research and technology to deliver the best possible outcomes for your mental health journey.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
    ),
    title: 'Personalized Approach',
    desc: 'Every patient\'s journey is unique. We tailor our treatments to your specific needs and goals.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    title: 'Compassionate Team',
    desc: 'Our staff is dedicated to supporting you with empathy, respect, and professional excellence.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Accessible Care',
    desc: 'We believe everyone deserves access to quality mental health support in a comfortable environment.'
  },
];

export default function ChooseUs() {
  return (
    <div className="bg-white py-20">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#2A5DCC]/10 backdrop-blur-sm rounded-full border border-[#2A5DCC]/20 mb-8">
            <div className="w-2 h-2 bg-[#2A5DCC] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#2A5DCC] text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] font-medium">
              Values
            </span>
            <br />
            <span className="text-slate-700 font-light">in Action</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These core principles guide everything we do, ensuring you receive the highest quality care tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="group bg-gradient-to-br from-white to-[#f7faff] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[#2A5DCC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2A5DCC]/20 transition-colors">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#2A5DCC] transition-colors">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
