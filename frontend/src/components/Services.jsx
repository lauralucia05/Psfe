import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icon Components
const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Card Components
const Card = ({ className, onClick, children }) => (
  <div className={`bg-white rounded-lg border ${className}`} onClick={onClick}>
    {children}
  </div>
);

const CardHeader = ({ className, children }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div className={`px-6 pb-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className, children }) => (
  <h3 className={`font-semibold ${className}`}>
    {children}
  </h3>
);

const Badge = ({ variant, className, children }) => {
  const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
  const variantClasses = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-700"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Separator = () => (
  <hr className="border-gray-200" />
);

const Button = ({ className, children, onClick }) => (
  <button 
    className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Services data with route mapping
const services = [
  {
    id: 1,
    title: 'TMS Therapy',
    description: 'Non-invasive, drug-free neuromodulation that targets brain regions involved in mood regulation. Strong evidence for depression.',
    details: 'Transcranial Magnetic Stimulation (TMS) is a non-invasive procedure that uses magnetic fields to stimulate nerve cells in the brain to improve symptoms of depression. It\'s typically used when other depression treatments haven\'t been effective.',
    efficacy: '60% - 70% Success Rate',
    benefits: ['FDA and TGA Approved Treatment', 'Non-invasive procedure', 'Minimal side effects', 'Outpatient care', 'For treatment-resistant depression'],
    category: 'Neuromodulation',
    route: '/tms-info',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Esketamine Treatment',
    description: 'FDA-approved nasal spray option for treatment-resistant depression that can provide rapid symptom relief.',
    details: 'Esketamine (Spravato) is a breakthrough treatment for treatment-resistant depression and major depressive disorder with suicidal ideation. It works differently than traditional antidepressants and can provide rapid relief.',
    efficacy: '70% Response Rate',
    benefits: ['FDA Approved Treatment', 'Rapid onset of action', 'Supervised clinical sessions', 'For treatment-resistant depression'],
    category: 'Pharmacotherapy',
    route: '/esketamine-info',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Psychedelic-Assisted Therapy',
    description: 'Structured psychotherapy combined with psychedelic medicines for trauma and depression in controlled settings.',
    details: 'Psychedelic-assisted therapy combines carefully administered psychedelic compounds with psychotherapy in a controlled clinical setting. This innovative approach shows promise for PTSD, depression, and other mental health conditions.',
    efficacy: 'Emerging Evidence',
    benefits: ['Breakthrough therapy designation', 'Guided therapeutic sessions', 'Holistic treatment approach', 'Potential long-term benefits'],
    category: 'Innovative Therapy',
    route: '/psychedelic-therapy-info',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'General Psychiatry',
    description: 'Personalized comprehensive mental health care and assessment, leading the fight against complex psychiatric conditions.',
    details: 'Our general psychiatry services provide comprehensive mental health evaluation and personalized treatment strategies. We specialize in treating depression, anxiety, PTSD, OCD, ADHD, chronic pain, and tinnitus using evidence-based approaches tailored to each individual\'s unique needs.',
    efficacy: 'Personalized Care',
    benefits: ['Comprehensive mental health assessment', 'Personalized treatment approaches', 'Multi-condition expertise', 'Integrated care coordination'],
    category: 'General Psychiatry',
    route: '/general-psychiatry-info',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

  const handleServiceClick = useCallback((index) => {
    setActiveService(index);
  }, []);

  const handleLearnMore = useCallback(() => {
    const currentService = services[activeService];
    navigate(currentService.route);
  }, [activeService, navigate]);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Innovative Treatment Options
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Our clinic specializes in advanced, evidence-based treatments designed to address 
            treatment-resistant conditions with personalized care plans.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg ${
                  activeService === index 
                    ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200' 
                    : 'hover:border-blue-300 border-gray-200'
                }`}
                onClick={() => handleServiceClick(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        activeService === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900">
                          {service.title}
                        </CardTitle>
                        <Badge 
                          variant={activeService === index ? "default" : "secondary"} 
                          className="text-xs mt-1"
                        >
                          {service.efficacy}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Active Service Details */}
          <div className="animate-fade-in">
            <Card className="shadow-lg h-full border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-600 text-white">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">
                      {services[activeService].title}
                    </CardTitle>
                    <p className="text-sm text-blue-600 font-medium">
                      {services[activeService].category}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {services[activeService].details}
                </p>
                <Separator />
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button className="w-full" onClick={handleLearnMore}>
                    Learn More About {services[activeService].title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;