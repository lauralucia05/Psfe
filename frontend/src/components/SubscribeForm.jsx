import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const BACKEND_URL = '/api/user/subscribe-tms'; // Update if needed
const TMS_INFO_SHEET_URL = '/tms-info-sheet.txt'; // Australian-compliant info sheet
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Replace with your real site key

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      return;
    }
    setIsSubmitting(true);
    try {
      // Send data to backend
      await axios.post(BACKEND_URL, {
        name: formData.name,
        email: formData.email,
        captchaToken
      });
      setSubmitted(true);
      // Download the info sheet
      const link = document.createElement('a');
      link.href = TMS_INFO_SHEET_URL;
      link.download = 'TMS-Info-Sheet-AU.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Reset form
      setFormData({ name: '', email: '' });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } catch (err) {
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 border border-blue-200 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
          Subscribe To Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">TMS Info Sheet</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Get comprehensive information about Transcranial Magnetic Stimulation (TMS) therapy in Australia. 
          Download our detailed guide and stay informed about this revolutionary treatment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={setCaptchaToken}
            className="transform scale-90 md:scale-100"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-12 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              'Download TMS Info Sheet (Australia)'
            )}
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-2">Thank you for subscribing!</h3>
          <p className="text-slate-600 mb-4">Your download should begin automatically.</p>
          <a
            href={TMS_INFO_SHEET_URL}
            download="TMS-Info-Sheet-AU.txt"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Click here if download didn't start
          </a>
        </div>
      )}

      <div className="mt-8 p-6 bg-slate-50 rounded-xl text-sm text-slate-600 leading-relaxed">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-slate-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <strong className="text-slate-700">Privacy & Disclaimer:</strong> Your information is collected in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles. This resource is for informational purposes only and does not constitute medical advice. For diagnosis or treatment, consult an Australian-registered healthcare professional. TMS is regulated by the Therapeutic Goods Administration (TGA) in Australia.{' '}
            <a href="https://www.tga.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
              Learn more
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
 