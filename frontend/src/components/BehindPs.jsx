import React from 'react'

const BehindPs = () => {
  return (
    <section className="relative py-8 bg-white overflow-hidden">
     

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" id="dr-bryson">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full border border-blue-600/20 mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 text-sm font-medium">Meet the team</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">
                Dr Bryson
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl text-slate-700 font-light mb-6">
            Co-Founder
            </h3>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Dr. Bryson's Image */}
            <div className="relative">
              <div className="relative max-w-xs mx-auto lg:mx-0">
                {/* Main Image */}
                <img 
                  src="https://i.postimg.cc/KzpgzsLv/db.png" 
                  alt="Dr.  B" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-20"></div>
              </div>
              
                             {/* Credentials + Languages/Telehealth */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Credentials Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Credentials</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">General Adult Psychiatrist</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Fellow of RANZCP</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Innovative Interventional Psychiatrist</span>
                    </div>
                  </div>
                </div>
                {/* Languages & Telehealth */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Languages & Telehealth</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Languages</p>
                      <p className="text-slate-700">English, Spanish</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Telehealth</p>
                      <p className="text-slate-700">Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

                         {/* Right Column - Professional Background */}
             <div className="space-y-6">
               {/* Experience Overview */}
               <div className="space-y-4">
                 <p className="text-xl text-slate-600 leading-relaxed">
                   Dr  B is a general adult psychiatrist and Fellow of the Royal Australian and New Zealand College of Psychiatrists. Dr Bryson has been fortunate to work in twelve different hospitals, both public and private, over a span of more than a decade and in so doing gain a very wide range of experience.
                 </p>
                 
                 <p className="text-xl text-slate-600 leading-relaxed">
                   This experience covers many areas of psychiatry as diverse as psychosis, mood disorders, adolescent and young adult mental health, forensic psychiatry, consultation-liaison psychiatry, eating disorders, military and veteran psychiatry, peri-natal psychiatry, psychotherapy, psychedelic and ketamine assisted psychotherapy, neurodevelopmental disorders and neurostimulation.
                 </p>
               </div>
             </div>
          </div>

          {/* Lower Content Area - Four Boxes in Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Future Vision */}
             <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
               <h4 className="text-2xl font-semibold text-slate-800 mb-4">Future Vision</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Thinking to the future, Dr. Bryson is also in the process of building patient centred systems for patient psychoeducation, and to improve the efficiency of current healthcare systems. He is also keen to try and integrate AI into data sets to further subanalyse patient data to ensure accurate diagnosis and treatment procedure to ensure the best outcomes for patients in as efficient a manner as possible.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If successful this could further augment current treatment strategies to reduce patient suffering and improve their functional outcomes and quality of life.
              </p>
            </div>

                         {/* Current Specializations */}
             <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200 shadow-lg">
               <h4 className="text-2xl font-semibold text-slate-800 mb-4">Current Specializations</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Over the years, Dr Bryson has begun to subspecialise and now sees patients primarily with:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Treatment Resistant Depressive Disorder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Bipolar Disorder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Military & Veteran Psychiatry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Post-Traumatic Stress Disorder (PTSD)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Addictive Disorders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Anxiety Disorders</span>
                </div>
              </div>
            </div>

                         {/* Beyond Psychiatry */}
             <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
               <h4 className="text-2xl font-semibold text-slate-800 mb-4">Beyond Psychiatry</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dr. Bryson probably works too much, but when he is not working he enjoys spending time with family and friends, composing and playing music, watching comedy and playing the odd video game.
              </p>
              <p className="text-slate-600 leading-relaxed italic">
                "He is not sure if this makes him wholesome, boring, or if that's a tautology, but he'll leave that up to you to find out!"
              </p>
            </div>

                         {/* Pioneering New Treatments */}
             <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
               <h4 className="text-2xl font-semibold text-slate-800 mb-4">Pioneering New Treatments</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dr. Bryson has been called an innovative interventional psychiatrist and now primarily works with pioneering new treatments:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Trans-Cranial Magnetic Stimulation (TMS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Intranasal Es-ketamine (Sprivato)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Psychedelic Assisted Psychotherapy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Ketamine Assisted Psychotherapy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lucia Arias Section */}
        <div className="mt-24" id="lucia-arias">
          {/* Header Section */}
          <div className="text-center mb-16">
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">
                Lucia Arias
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl text-slate-700 font-light mb-6">
              Business Manager & TMS Clinician
            </h3>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Lucia's Image */}
            <div className="relative">
              <div className="relative max-w-xs mx-auto lg:mx-0">
                {/* Main Image */}
                <img 
                  src="https://i.postimg.cc/3NRPhqmk/lucia.png" 
                  alt="Lucia Arias" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-20"></div>
              </div>
              
              {/* Credentials + Specializations */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Credentials Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Background</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Software Developer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">TMS Clinician</span>
                    </div>
                   
                  </div>
                </div>
                {/* Specializations */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Interests</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Focus Areas</p>
                      <p className="text-slate-700">Mental Health & AI Integration</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Specialization</p>
                      <p className="text-slate-700">TMS Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Background */}
            <div className="space-y-6">
              {/* Experience Overview */}
              <div className="space-y-4">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Lucia Arias is a software developer and TMS clinician with a keen interest in mental health, neuromodulation and the integration of mental health and AI going into the future. She is excited to help build these systems into Psyencia over the next few years and help to streamline the patient experience and improve clinical outcomes for patients.
                </p>
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  With a background in engineering and software development Lucia came to Psyencia from an industry background and then specialised as a clinician in the use of TMS. She brings to the team a compassionate, patient-centered approach to every session, ensuring that each individual feels supported and empowered throughout their treatment journey.
                </p>
              </div>
            </div>
          </div>

          {/* Lower Content Area - Personal Touch */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Qualities */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h4 className="text-2xl font-semibold text-slate-800 mb-4">Personal Touch</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Always smiling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Plant caretaker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Loves a good joke</span>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200 shadow-lg">
              <h4 className="text-2xl font-semibold text-slate-800 mb-4">Future Vision</h4>
             
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">AI Integration in Mental Health</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Streamlined Patient Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Improved Clinical Outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Technology-Enhanced Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Specialists Section */}
        <div className="mt-24" id="specialists">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">
                Specialists
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We work with an incredible team of specialist support who help bring Psyencia to life. Our team is dedicated to transforming mental health care through innovative treatments and a compassionate, patient-centered approach.
            </p>
          </div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Psychiatrists */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Psychiatrists</h3>
              <p className="text-slate-600 text-sm">MBBS, FRANZCP</p>
            </div>

            {/* TMS Clinicians */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">TMS Clinicians</h3>
              <p className="text-slate-600 text-sm">Specialized TMS Treatment</p>
            </div>

            {/* Psychologists */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Psychologists</h3>
              <p className="text-slate-600 text-sm">Health Psychologist Registrars</p>
            </div>

            {/* Social Workers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Social Workers</h3>
              <p className="text-slate-600 text-sm">Support & Advocacy</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Get in Touch</h3>
              <p className="text-slate-600 mb-6">Ready to start your mental health journey? Contact our team today.</p>
              <a 
                href="mailto:admin@psyencia.com.au" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-lg"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                admin@psyencia.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BehindPs
