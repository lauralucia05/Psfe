import React, { useEffect, useState } from 'react';
import BehindPs from '../components/BehindPs';
import ChooseUs from '../components/ChooseUs';
import Location from '../components/Location';
import ContactCta from '../components/ContactCta';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to hash if present
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      // slight timeout to ensure sections are rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="bg-[#f7faff] min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mb-3">
        {/* Background Image with Gentle Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/bwdGgjV5/Learn-more-5.png"
            alt="About Psyencia"
            className="w-full h-full object-cover"
            style={{ animation: 'gentleZoom 25s ease-in-out infinite' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
        </div>


        {/* Content */}
        <div className={`relative z-10 max-w-5xl mx-auto text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              About Us
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl md:text-2xl font-light leading-relaxed text-blue-200">
            At <span className="font-medium text-white">Psyencia TMS</span>, we are proud to provide
            transformative mental health support through advanced, non-invasive therapies. 
            Our mission is to empower you to live a happier, healthier life.
          </p>
        </div>

        {/* Custom Zoom Animation */}
        <style>{`
          @keyframes gentleZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
        `}</style>
      </section>

      {/* Behind Psyencia Section */}
        <BehindPs />

      {/* Choose Us Section */}
        <ChooseUs />

      {/* Contact CTA */}
        <ContactCta />

    </div>
  );
}