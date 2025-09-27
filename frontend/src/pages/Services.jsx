import React from 'react';
import { Link } from 'react-router-dom';

// Small, accessible brain diagram component
const BrainDiagram = ({ variant = 'healthy', label }) => {
  const dotColor = {
    healthy: '#6B6FC5', // indigo
    depression: '#C53030', // red
    tms: '#2A5DCC', // blue
  }[variant];

  return (
    <figure aria-label={label} className="flex flex-col items-center" role="img">
      <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="45" rx="50" ry="40" fill="#F3F4F6" />
        <ellipse cx="80" cy="35" rx="15" ry="10" fill="#B4B8D7" />
        <ellipse cx="60" cy="45" rx="8" ry="6" fill={dotColor} />
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
};

const treatments = [
  {
    id: 1,
    title: 'TMS Therapy',
    description:
      'Non-invasive, drug-free neuromodulation that targets brain regions involved in mood regulation. Strong evidence for depression.',
    benefits: ['Non-invasive', 'Minimal side effects', 'Outpatient care', 'Evidence-based'],
    category: 'Neuromodulation',
    to: '/tms-info',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Esketamine Treatment',
    description:
      'FDA-approved nasal spray option for treatment-resistant depression that can provide rapid symptom relief.',
    benefits: ['Rapid onset', 'Supervised sessions', 'For TRD', 'Adjunct to therapy'],
    category: 'Pharmacotherapy',
    to: '/services',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Psychedelic-Assisted Psychotherapy',
    description:
      'Structured psychotherapy combined with psychedelic medicines for trauma and depression in controlled settings.',
    benefits: ['Guided sessions', 'Emerging evidence', 'Holistic approach', 'Potential long-term benefits'],
    category: 'Innovative Therapy',
    to: '/services',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'ADHD Treatment',
    description:
      'Comprehensive assessment and personalized treatment plans using evidence-based interventions and medication management.',
    benefits: ['Thorough assessment', 'Medication oversight', 'Behavioral strategies', 'Ongoing support'],
    category: 'Behavioral Health',
    to: '/services',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const TreatmentCard = ({ item }) => (
  <article className="h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="shrink-0">{item.icon}</div>
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-600/80 font-medium">{item.category}</p>
          <h3 className="text-xl font-semibold text-slate-800 mt-1">{item.title}</h3>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
      <ul className="space-y-2 mb-6">
        {item.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
            <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {b}
          </li>
        ))}
      </ul>
      <Link
        to={item.to}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors"
        aria-label={`Learn more about ${item.title}`}
      >
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </article>
);

const Services = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Services & Treatments</h1>
              <p className="mt-4 text-slate-700 text-lg">
                Evidence-based care for depression and related conditions, delivered by specialists using modern,
                patient-friendly approaches.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  'Non-invasive options',
                  'Outpatient treatment',
                  'Personalised plans',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="flex items-center gap-6">
                <BrainDiagram variant="healthy" label="Healthy brain state" />
                <BrainDiagram variant="depression" label="Depression state" />
                <BrainDiagram variant="tms" label="TMS stimulation target" />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Specialized Treatments (concise, scannable) */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-blue-700 text-sm font-medium">Our Expertise</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">Specialized Treatments</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Innovative, evidence-based therapies for complex mental health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((t) => (
              <TreatmentCard key={t.id} item={t} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              View available specialists
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
