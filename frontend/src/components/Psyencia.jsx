import React from 'react';

const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Psyencia = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Psyencia</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a bold, motivated and innovative company delivering state-of-the-art, 
              evidence-based care that is deeply personalised to each individual's needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combining years of clinical experience with the latest in neuroscience, 
              technological breakthroughs and human empathy to support your journey towards wellness.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Evidence-Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Personalized Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Innovation Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Compassionate</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-500">Raising the bar for mental health treatment</p>
                </div>
              </div>
              <p className="text-gray-600">
                To usher in a new era of mental health care by combining cutting-edge treatments 
                with precision diagnostics, digital health tools, and integrative therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psyencia;