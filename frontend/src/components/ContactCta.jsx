import React, { useEffect, useRef } from 'react'

// Icon Components
const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const Card = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${className || ''}`}>
    {children}
  </div>
)

const CardHeader = ({ className, children }) => (
  <div className={`p-6 ${className || ''}`}>
    {children}
  </div>
)

const CardContent = ({ className, children }) => (
  <div className={`px-6 pb-6 ${className || ''}`}>
    {children}
  </div>
)

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900">
    {children}
  </h3>
)

const Button = ({ size = 'default', className, children, ...props }) => {
  const sizeClasses = {
    default: 'px-6 py-2',
    lg: 'px-8 py-4'
  }
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-full font-semibold bg-[#2A5DCC] text-white hover:bg-[#1e4fb5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce-in ${sizeClasses[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

const ContactCta = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take the First Step Towards Healing Today
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg group">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-[#2A5DCC] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Available Monday to Friday</p>
                <p className="font-semibold mt-2 text-slate-800">+61 404 960 150</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg group">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-[#2A5DCC] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">We'll respond within 24 hours</p>
                <p className="font-semibold mt-2 text-slate-800">admin@psyencia.com.au</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg group">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-[#2A5DCC] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Brisbane, Queensland</p>
                <p className="font-semibold mt-2 text-slate-800">Coming Soon</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925905098!2d152.99842284179686!3d-27.46836800436854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0a4d2d8d9d%3A0x5017d681632ca520!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Psyencia Location - Sydney, NSW, Australia"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.open('https://www.halaxy.com/a/online/template/40707931/9990553/Jju3t2QO1ogNeXMDerOyCC9oVG1KZlBGK1MzeXZ1ZnNQOE94dDdoNTgxQVVYU0VuTWdaZjByT3ByWUJsN2IwRnFNQ3ZtS1VJZlVXTDJndVlnTjJSL0VTQ2VIZHEzdUliMFhMMHVJMEdYcnZPODFDKzhUMXJKNTZhS0k1Rnc4cys/34101055', '_blank')} 
              size="lg" 
              className="shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactCta