import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const scrollToHalaxyForm = () => {
    window.open('https://www.halaxy.com/a/online/template/40707931/9990553/Jju3t2QO1ogNeXMDerOyCC9oVG1KZlBGK1MzeXZ1ZnNQOE94dDdoNTgxQVVYU0VuTWdaZjByT3ByWUJsN2IwRnFNQ3ZtS1VJZlVXTDJndVlnTjJSL0VTQ2VIZHEzdUliMFhMMHVJMEdYcnZPODFDKzhUMXJKNTZhS0k1Rnc4cys/34101055', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pt-[80px]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-200 font-medium">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We're here to support your mental health journey. Reach out to us for consultations, 
              appointments, or any questions about our services.
            </p>
            
            {/* Scroll Down Button */}
            <div className="flex justify-center">
              <button 
                onClick={scrollToHalaxyForm}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Information</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Connect with us through multiple channels. Our team is ready to assist you with your mental health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Image */}
            <div className="relative">
              <img 
                className="w-full rounded-2xl shadow-2xl" 
                src={assets.contact_image} 
                alt="Contact Us" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Our Office
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>54709 Willms Station<br />Suite 350, Sydney, AU</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(415) 555-0132</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Psyencia@gmail.com</span>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Consultation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to start your mental health journey? Book a consultation with our expert team through our secure online platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-4-6h8m-8 6h8" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-slate-800 mb-4">
                  Secure Online Booking
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Our consultation booking system is powered by Halaxy, a trusted healthcare platform that ensures 
                  your information is secure and your booking process is seamless.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Fill Form</h4>
                  <p className="text-sm text-slate-600">Complete our secure consultation form</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Schedule</h4>
                  <p className="text-sm text-slate-600">Choose your preferred appointment time</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Confirm</h4>
                  <p className="text-sm text-slate-600">Receive confirmation and prepare for your visit</p>
                </div>
              </div>

              <div className="text-center">
              <button                    
  onClick={() => window.open('https://www.halaxy.com/a/online/template/40707931/9990553/Jju3t2QO1ogNeXMDerOyCC9oVG1KZlBGK1MzeXZ1ZnNQOE94dDdoNTgxQVVYU0VuTWdaZjByT3ByWUJsN2IwRnFNQ3ZtS1VJZlVXTDJndVlnTjJSL0VTQ2VIZHEzdUliMFhMMHVJMEdYcnZPODFDKzhUMXJKNTZhS0k1Rnc4cys/34101055', '_blank')}                   
  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"                 
>                   
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">                     
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />                   
  </svg>                   
  <span>Book Consultation Now</span>                 
</button>
                <p className="text-sm text-slate-500 mt-4">
                  You'll be redirected to our secure Halaxy booking platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Be part of a team dedicated to advancing mental health care and making a difference in people's lives.
            </p>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Explore Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
