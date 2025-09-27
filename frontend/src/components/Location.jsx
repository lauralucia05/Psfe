import React from 'react';

export default function Location() {
  return (
    <div className="bg-gradient-to-br from-[#f7faff] via-white to-[#e8f2ff] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#2A5DCC]/10 backdrop-blur-sm rounded-full border border-[#2A5DCC]/20 mb-8">
            <div className="w-2 h-2 bg-[#2A5DCC] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#2A5DCC] text-sm font-medium">Our Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            TMS Therapy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] font-medium">
              Sydney, NSW
            </span>
            <br />
            <span className="text-slate-700 font-light">Australia</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Visit us for compassionate, innovative TMS therapy in a welcoming environment.
          </p>
        </div>

        {/* Interactive Map - Centered */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#2A5DCC]/5 to-[#6bb6ff]/10 rounded-2xl p-6 border border-[#2A5DCC]/20 shadow-lg">
              <div className="mb-4 text-center">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Interactive Map</h4>
                <p className="text-slate-600 text-sm">
                  Located in the heart of Annandale, easily accessible by public transport and car.
                </p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.123456789!2d151.123456789!3d-33.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b123456789ab%3A0x123456789abcdef0!2s189%20Johnston%20St%2C%20Annandale%20NSW%202038%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
                
                {/* Map Overlay with Brand Colors */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#2A5DCC] rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-700">Psyencia TMS</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=189+Johnston+St,+Annandale+NSW+2038,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#2A5DCC] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#17408b] transition-colors text-center text-sm"
                >
                  Get Directions
                </a>
                <a
                  href="https://www.google.com/maps/place/189+Johnston+St,+Annandale+NSW+2038,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-[#2A5DCC] text-[#2A5DCC] px-4 py-3 rounded-lg font-medium hover:bg-[#2A5DCC] hover:text-white transition-colors text-center text-sm"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Address & Contact */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#2A5DCC]/5 to-[#6bb6ff]/10 rounded-2xl p-8 border border-[#2A5DCC]/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2A5DCC]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    189 Johnston St, Annandale<br />
                    NSW 2038, Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-[#6bb6ff]/10 to-[#2A5DCC]/5 rounded-2xl p-6 border border-[#6bb6ff]/30 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[#2A5DCC]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                </div>
                <a 
                  href="tel:+61404960150" 
                  className="text-[#2A5DCC] font-medium hover:text-[#17408b] transition-colors"
                >
                  +61 404960150
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-[#2A5DCC]/10 to-[#6bb6ff]/5 rounded-2xl p-6 border border-[#2A5DCC]/30 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[#2A5DCC]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                </div>
                <a 
                  href="mailto:admin@psyencia.com.au" 
                  className="text-[#2A5DCC] font-medium hover:text-[#17408b] transition-colors"
                >
                  admin@psyencia.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Opening Hours */}
          <div className="space-y-8">
            {/* Opening Hours Card */}
            <div className="bg-gradient-to-br from-[#6bb6ff]/10 to-[#2A5DCC]/5 rounded-2xl p-8 border border-[#6bb6ff]/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2A5DCC]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Opening Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 px-4 bg-[#2A5DCC]/10 rounded-lg border border-[#2A5DCC]/20">
                      <span className="text-slate-700 font-medium">Monday to Friday</span>
                      <span className="font-semibold text-[#2A5DCC]">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-4">
                    Closed weekends & public holidays
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

       
      </div>
    </div>
  );
}
