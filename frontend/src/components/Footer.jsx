import React, { useCallback } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Separator = ({ className }) => (
  <div className={`border-t border-gray-600/30 ${className}`} />
)

const Footer = () => {
  const navigate = useNavigate()

  const handleNavClick = useCallback((to, isScroll = false) => {
    if (isScroll) {
      const sectionId = to.split('#')[1];
      
      if (window.location.pathname === '/') {
        // We're on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // We're on a different page, navigate to home with hash
        navigate(`/#${sectionId}`);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    } else {
      navigate(to);
    }
  }, [navigate]);

  return (
    <footer className="bg-[#262932] text-white py-16 relative overflow-hidden">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/5"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex justify-start mb-6">
              <img 
                className="h-16 w-auto" 
                src="https://i.postimg.cc/DzgG95bL/imgi-48-default.png" 
                alt="Psyencia Logo" 
              />
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Psyencia is dedicated to advancing mental health care through innovative TMS therapy. 
              We provide evidence-based treatments in a calming, professional environment to support 
              your journey to mental wellness.
            </p>
          </div>
          
          {/* Services Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('/tms-info')} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  TMS Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/services')} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  Esketamine Treatment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/services')} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  Psychedelic Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/services')} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  General Psychiatry
                </button>
              </li>
            </ul>
          </div>
          
          {/* Information Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white relative">
              Information
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-400"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('/aboutus')} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://www.halaxy.com/a/login", "_blank")} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  Patient Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/#contact', true)} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/#contact', true)} 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left text-sm group flex items-center"
                >
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white relative">
              Contact
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-purple-400"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span>+61-404-960-150</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span>Admin@psyencia.com.au</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span>Sydney, NSW</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span>Monday - Friday, 9AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; 2024 Psyencia. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-medium tracking-wide">
            Empowering Minds, Transforming Lives.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer