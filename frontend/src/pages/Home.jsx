import React, { useEffect } from 'react'
import Intro from '../components/Intro'
import Psyencia from '../components/Psyencia'
import BehindPs from '../components/BehindPs'
import Team from '../components/Team'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import TmsTreatmentTypes from '../components/TmsTreatmentTypes'
import SubscribeForm from '../components/SubscribeForm'
import AccountCreation from '../components/AccountCreation'
import Services from '../components/Services'

import Hero from '../components/Hero'
import ContactCta from '../components/ContactCta'

const Home = () => {
  // Basic SEO tags and JSON-LD
  useEffect(() => {
    document.title = 'Psyencia | The Future of Mental Health Care';

    const ensureTag = (selector, create) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    const desc = ensureTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    });
    desc.setAttribute('content', 'Psyencia offers advanced TMS therapy and compassionate, evidence-based mental health care. Book consultations, explore specialists, and learn about treatment options.');

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    });
    canonical.setAttribute('href', window.location.origin + '/');

    // Structured data (Organization + WebSite)
    const existingLd = document.getElementById('ld-json-home');
    if (existingLd) existingLd.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'ld-json-home';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Psyencia',
      url: window.location.origin,
      sameAs: [],
      logo: window.location.origin + '/favicon.svg'
    });
    document.head.appendChild(ld);

    const ldSite = document.createElement('script');
    ldSite.type = 'application/ld+json';
    ldSite.id = 'ld-json-website';
    ldSite.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Psyencia',
      url: window.location.origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: window.location.origin + '/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });
    document.head.appendChild(ldSite);
  }, []);

  // Minimal animation system
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 200);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSpeciality = () => {
    const specialitySection = document.getElementById('speciality-section');
    if (specialitySection) {
      specialitySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero */}
      <div className="fade-in">
        <Hero />
      </div>

      {/* Psyencia Company Introduction */}
      <section id="about" className="scroll-fade">
        <div className="container mx-auto px-4">
          <Psyencia />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-fade">
        <Team />
      </section>

      {/* Services */}
      <section id="services" className="scroll-fade">
        <div className="container mx-auto px-4">
          <Services />
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-fade py-20 bg-white">
        <div className="container mx-auto px-4">
          <ContactCta />
        </div>
      </section>

      <style jsx>{`
        .scroll-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease-out;
        }
        
        .scroll-fade.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Home