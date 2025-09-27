import React, { useEffect, useState } from 'react'

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false)
  const relaxingImageUrl = 'https://i.postimg.cc/d1qS8YBL/pexels-mao-li-168781267-11823805.jpg'
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    {
      title: "Calming Environment",
      description: "Experience TMS therapy in our serene, relaxing treatment rooms designed for your comfort and peace of mind."
    },
    {
      title: "Healing starts here",
      subtitle: "The right answers the first time",
      description: "Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges."
    },
    {
      title: "Medical-free treatment",
      description: "Using transcranial magnetic stimulation (TMS). A medical and mental treatment breakthrough made possible by new technology advancements."
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 5000) // Change message every 5 seconds

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[80px]">
      {/* Background Image with Relaxing Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={relaxingImageUrl}
          alt="Relaxing Mental Health Environment"
          className="w-full h-full object-cover"
          style={{
            animation: 'gentleZoom 25s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-800/50 to-slate-900/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-[80px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 pt-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-700/30 backdrop-blur-sm rounded-full border border-blue-400/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-200 text-sm font-medium">Welcome to Psyencia</span>
            </div>

            {/* Main Heading - Keeping Original Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                Your Journey to
              </span>
              <br />
              <span className="text-white font-medium">
                Mental Wellness
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-300 text-4xl md:text-5xl">
                Begins Here
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed max-w-lg font-light">
              Experience advanced TMS therapy in a serene, calming environment. 
              Where science meets tranquility for your mental health journey.
            </p>

            {/* Key Benefits with Relaxing Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-blue-800/20 backdrop-blur-sm rounded-lg border border-blue-700/30">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-300 font-medium">FDA Approved</div>
                  <div className="text-blue-400 text-sm">Safe & Effective</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-blue-800/20 backdrop-blur-sm rounded-lg border border-blue-700/30">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-300 font-medium">Non-Invasive</div>
                  <div className="text-blue-400 text-sm">No Surgery Required</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-blue-800/20 backdrop-blur-sm rounded-lg border border-blue-700/30">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-300 font-medium">Quick Sessions</div>
                  <div className="text-blue-400 text-sm">20-30 Minutes</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-blue-800/20 backdrop-blur-sm rounded-lg border border-blue-700/30">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-300 font-medium">Expert Care</div>
                  <div className="text-blue-400 text-sm">Professional Team</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button
              onClick={() => {
                const element = document.getElementById('psyencia');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                Learn More
              </button>
              
              <button
                onClick={() => {
                  window.location.href = '/doctors'
                }}
                className="px-10 py-5 border-2 border-slate-300 text-slate-200 font-medium rounded-xl hover:bg-slate-700/50 hover:border-slate-200 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Book Consultation
            </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-12">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-300 text-sm font-medium">FDA and TGA Approved</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-300 text-sm font-medium">Safe & Effective</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-300 text-sm font-medium">Proven Results</span>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-700/50">
                <div className="text-center space-y-6">
                  {/* Heart Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  {/* Carousel Content */}
                  <div className="min-h-[120px] flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {messages[currentMessage].title}
                    </h3>
                    {messages[currentMessage].subtitle && (
                      <p className="text-blue-200 text-lg mb-3">
                        {messages[currentMessage].subtitle}
                      </p>
                    )}
                    <p className="text-blue-300 text-lg leading-relaxed">
                      {messages[currentMessage].description}
                    </p>
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="flex justify-center space-x-3">
                    {messages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMessage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentMessage 
                            ? 'bg-blue-400' 
                            : 'bg-blue-300/50 hover:bg-blue-300/75'
                        }`}
            />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom CSS for gentle background animation */}
      <style>{`
        @keyframes gentleZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      </section>
  )
}

export default Intro
