import { Link } from 'react-router-dom';
import React from 'react';
// useNavigate was imported but not used; removing to fix lint error


const mentalHealthConditions = [
  // AUSTRALIAN GOVERNMENT APPROVED CONDITIONS (Medicare covered)
  {
    title: 'Major Depressive Disorder (MDD)',
    category: 'mood',
    icon: 'mood',
    status: 'approved',
    statusText: 'Medicare Approved',
    statusColor: 'green',
    desc: `TMS was approved by the Australian Government in 2021 for Medicare coverage. Highly effective for treatment-resistant depression where medications haven't worked. Stimulates underactive brain regions to enhance neuroplasticity and rebalance neurotransmitters, providing significant mood improvements without systemic side effects.`
  },
  {
    title: 'Obsessive-Compulsive Disorder (OCD)',
    category: 'mood',
    icon: 'ocd',
    status: 'approved',
    statusText: 'Medicare Approved',
    statusColor: 'green',
    desc: `Medicare-covered TMS treatment targets brain circuits responsible for compulsive behaviors and obsessive thoughts. Particularly beneficial for those who haven't found relief from SSRIs and CBT, reducing anxiety and disruption from intrusive thoughts.`
  },
  {
    title: 'Migraines',
    category: 'neurological',
    icon: 'migraine',
    status: 'approved',
    statusText: 'Medicare Approved',
    statusColor: 'green',
    desc: `Approved TMS treatment targets brain's pain processing centers, reducing migraine frequency and intensity by modulating cortical excitability. Offers a non-invasive alternative for patients unresponsive to traditional migraine medications.`
  },
  {
    title: 'Smoking Cessation',
    category: 'neurological',
    icon: 'smoking',
    status: 'approved',
    statusText: 'Medicare Approved',
    statusColor: 'green',
    desc: `Medicare-approved TMS treatment targets addiction circuits, significantly reducing nicotine cravings and strengthening cognitive control. Particularly valuable for those who've struggled with other cessation methods.`
  },

  // CONDITIONS WITH STRONG EVIDENCE
  {
    title: 'Anxiety Disorders',
    category: 'mood',
    icon: 'anxiety',
    status: 'evidence',
    statusText: 'Strong Evidence',
    statusColor: 'blue',
    desc: `Targets hyperactive fear and worry circuits in amygdala and prefrontal cortex. Reduces excessive worry, tension, and physiological symptoms, offering a non-pharmaceutical alternative to anti-anxiety medications.`
  },
  {
    title: 'Post-Traumatic Stress Disorder (PTSD)',
    category: 'mood',
    icon: 'ptsd',
    status: 'evidence',
    statusText: 'Strong Evidence',
    statusColor: 'blue',
    desc: `Addresses trauma by targeting fear response and memory processing regions. Reduces hyperarousal, flashbacks, nightmares, and avoidance behaviors while improving sleep and emotional control.`
  },
  {
    title: 'Chronic Pain',
    category: 'neurological',
    icon: 'pain',
    status: 'evidence',
    statusText: 'Strong Evidence',
    statusColor: 'blue',
    desc: `Drug-free approach targeting brain's pain processing centers. Modulates neural pathways to "reset" pain signaling, reducing pain intensity and medication reliance for conditions like fibromyalgia.`
  },

  // CONDITIONS UNDER RESEARCH
  {
    title: 'Bipolar Disorder',
    category: 'mood',
    icon: 'bipolar',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Adjunctive treatment focusing on depressive episodes without triggering mania. Supports mood stabilization under careful clinical supervision as part of comprehensive management.`
  },
  {
    title: 'Addiction Recovery',
    category: 'neurological',
    icon: 'addiction',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Targets reward and impulse control centers to reduce cravings for substances. Strengthens cognitive control and supports long-term sobriety in comprehensive treatment programs.`
  },
  {
    title: 'Alzheimer’s & Cognitive Decline',
    category: 'neurological',
    icon: 'memory',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Shows promise in enhancing memory recall, attention, and processing speed. May slow symptom progression in early stages by stimulating memory-critical brain regions.`
  },
  {
    title: 'Brain Fog',
    category: 'neurological',
    icon: 'fog',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Enhances cognitive clarity by stimulating attention and executive function networks. Improves mental sharpness and focus, especially when related to stress or medical conditions.`
  },
  {
    title: 'Parkinson’s Disease',
    category: 'neurological',
    icon: 'parkinsons',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Supportive therapy addressing both motor symptoms (tremors, rigidity) and non-motor symptoms (depression, cognitive changes). Complements medication-based treatments.`
  },
  {
    title: 'Stroke Rehabilitation',
    category: 'neurological',
    icon: 'stroke',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Promotes neuroplasticity to aid recovery of motor skills, speech, and cognitive abilities. Most effective alongside traditional physical, occupational, and speech therapies.`
  },
  {
    title: 'Schizophrenia',
    category: 'mood',
    icon: 'schizophrenia',
    status: 'research',
    statusText: 'Under Research',
    statusColor: 'purple',
    desc: `Adjunctive treatment targeting persistent symptoms like auditory hallucinations and negative symptoms. Improves cognitive function and emotional responsiveness.`
  }
];

const candidateGroups = [
  {
    title: 'For Approved Conditions',
    type: 'header',
    category: 'approved'
  },
  {
    title: 'Medication-Resistant Depression',
    icon: '💊',
    status: 'approved',
    desc: 'Patients who haven\'t responded to multiple antidepressants',
    conditions: ['Major Depressive Disorder'],
    coverage: 'Medicare Covered'
  },
  {
    title: 'OCD Patients',
    icon: '🔄',
    status: 'approved',
    desc: 'Individuals with compulsive behaviors and intrusive thoughts',
    conditions: ['OCD'],
    coverage: 'Medicare Covered'
  },
  {
    title: 'Chronic Migraine Sufferers',
    icon: '🤕',
    status: 'approved',
    desc: 'Those unresponsive to conventional migraine treatments',
    conditions: ['Migraines'],
    coverage: 'Medicare Covered'
  },
  {
    title: 'Smokers Seeking Help',
    icon: '🚭',
    status: 'approved',
    desc: 'Individuals struggling with nicotine addiction',
    conditions: ['Smoking Cessation'],
    coverage: 'Medicare Covered'
  },

  {
    title: 'For Evidence-Based Conditions',
    type: 'header',
    category: 'evidence'
  },
  {
    title: 'Anxiety Patients',
    icon: '😰',
    status: 'evidence',
    desc: 'Those with generalized anxiety, panic, or social anxiety',
    conditions: ['Anxiety Disorders'],
    coverage: 'Private Treatment'
  },
  {
    title: 'PTSD Survivors',
    icon: '🎗️',
    status: 'evidence',
    desc: 'Individuals recovering from trauma experiences',
    conditions: ['PTSD'],
    coverage: 'Private Treatment'
  },
  {
    title: 'Chronic Pain Patients',
    icon: '🩹',
    status: 'evidence',
    desc: 'People with long-term pain conditions seeking alternatives',
    conditions: ['Chronic Pain'],
    coverage: 'Private Treatment'
  },

  {
    title: 'General Candidate Groups',
    type: 'header',
    category: 'general'
  },
  {
    title: 'Adults (18-65 Years)',
    icon: '👨‍💼',
    status: 'general',
    desc: 'Seeking non-pharmacological alternatives to traditional treatments',
    conditions: ['Multiple Conditions'],
    coverage: 'Varies'
  },
  {
    title: 'Older Adults (65+ Years)',
    icon: '👵',
    status: 'general',
    desc: 'Avoiding medication complications and polypharmacy issues',
    conditions: ['Multiple Conditions'],
    coverage: 'Varies'
  },
  {
    title: 'Pregnant & Postpartum Women',
    icon: '🤰',
    status: 'general',
    desc: 'Seeking medication-free mental health treatment',
    conditions: ['Depression', 'Anxiety'],
    coverage: 'Varies'
  },
  {
    title: 'Medication-Sensitive Individuals',
    icon: '⚡',
    status: 'general',
    desc: 'Those who experience intolerable medication side effects',
    conditions: ['Multiple Conditions'],
    coverage: 'Varies'
  },

  {
    title: 'Occupational Groups',
    type: 'header',
    category: 'occupation'
  },
  {
    title: 'Healthcare Workers',
    icon: '👨‍⚕️',
    status: 'occupation',
    desc: 'Facing burnout and trauma from demanding work conditions',
    conditions: ['Burnout', 'PTSD', 'Depression'],
    coverage: 'Varies'
  },
  {
    title: 'First Responders',
    icon: '🚒',
    status: 'occupation',
    desc: 'Exposed to critical incidents and chronic stress',
    conditions: ['PTSD', 'Anxiety', 'Depression'],
    coverage: 'Varies'
  },
  {
    title: 'Military & Veterans',
    icon: '🎖️',
    status: 'occupation',
    desc: 'Dealing with combat-related mental health challenges',
    conditions: ['PTSD', 'Depression', 'Anxiety'],
    coverage: 'Varies'
  },
  {
    title: 'High-Stress Professionals',
    icon: '💼',
    status: 'occupation',
    desc: 'Needing cognitive performance without medication side effects',
    conditions: ['Stress', 'Anxiety', 'Burnout'],
    coverage: 'Varies'
  }
];

const tmsTypes = [
  {
    title: 'Repetitive Transcranial Magnetic Stimulation (rTMS)',
    duration: '20-40 minutes',
    course: '4-6 weeks',
    conditions: ['Anxiety Disorders', 'Depression', 'Obsessive-Compulsive Disorder (OCD)', 'Post-Traumatic Stress Disorder (PTSD)', 'Treatment-Resistant Depression'],
    description: 'Repetitive transcranial magnetic stimulation (rTMS) stands out as a widely used form of treatment among the types of TMS machines, known for its precision and effectiveness in managing mood disorders. Our Gemini TMS team mainly uses rTMS to treat patients. Unlike other types of TMS systems, rTMS delivers repeated magnetic pulses to specific brain regions that regulate mood, without the need for invasive procedures or sedation. This non-invasive treatment is structured over a course of daily sessions spanning four to six weeks, with each session lasting approximately 20 to 40 minutes.'
  },
  {
    title: 'Deep Transcranial Magnetic Stimulation (dTMS)',
    duration: '20 minutes',
    course: '4-5 weeks',
    conditions: ['Addiction', 'Anxiety Disorders', 'Bipolar Disorder', 'Chronic Pain', 'Major Depressive Disorder (MDD)'],
    description: 'Deep transcranial magnetic stimulation distinguishes itself through its ability to reach deeper brain structures, enhancing its effectiveness. Deep TMS utilizes a specialized coil to deliver magnetic pulses that penetrate further into the brain, targeting areas that are otherwise difficult to influence. This non-invasive treatment is structured as daily sessions over four to five weeks, with each session lasting approximately 20 minutes.'
  },
  {
    title: 'Intermittent Theta Burst Stimulation (iTBS)',
    duration: '3-10 minutes',
    course: '4-6 weeks',
    conditions: ['Depression', 'Obsessive-Compulsive Disorder (OCD)', 'Post-Traumatic Stress Disorder (PTSD)', 'Schizophrenia'],
    description: 'Intermittent theta burst stimulation offers a cutting-edge approach with its efficiency and rapid session times. iTBS uses short bursts of magnetic pulses at a high frequency to stimulate brain activity. This innovative method delivers effective treatment in significantly less time, with each session lasting only three to ten minutes. The accelerated course typically spans four to six weeks.'
  },
  {
    title: 'Navigated Transcranial Magnetic Stimulation (nTMS)',
    duration: '30-60 minutes',
    course: 'Varies',
    conditions: ['Brain Tumors', 'Epilepsy', 'Motor Disorders', 'Speech Disorders'],
    description: 'Navigated transcranial magnetic stimulation stands out for its precision and application in pre-surgical mapping. nTMS utilizes advanced imaging techniques to accurately target specific brain areas, making it an invaluable tool in preparing for neurosurgical procedures. Each session ranges from 30 to 60 minutes.'
  },
  {
    title: 'Accelerated Transcranial Magnetic Stimulation (aTMS)',
    duration: '3-10 minutes',
    course: '5-10 days',
    conditions: ['Anxiety Disorders', 'Bipolar Disorder', 'Depression', 'Obsessive-Compulsive Disorder (OCD)', 'Post-Traumatic Stress Disorder (PTSD)'],
    description: 'Accelerated transcranial magnetic stimulation revolutionizes the approach with its rapid and efficient treatment delivery. aTMS compresses the treatment schedule into a condensed timeframe, sometimes achieving significant results in as little as a week. This is made possible through multiple short sessions lasting just three to ten minutes each, conducted throughout the day.'
  }
];

export default function TmsTypes() {
  return (
    <div className="bg-gradient-to-br from-[#f7faff] to-[#e8f2ff] min-h-screen pb-16 pt-10 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2A5DCC] to-[#1e4bb8] bg-clip-text text-transparent">
            Overview of Transcranial Magnetic Stimulation (TMS)
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            TMS is a non-pharmacological, non-invasive treatment that provides relief from chronic{' '}
            <span className="text-[#2A5DCC] font-semibold">depression</span>,{' '}
            <span className="text-[#2A5DCC] font-semibold">anxiety</span>,{' '}
            <span className="text-[#2A5DCC] font-semibold">PTSD</span>,{' '}
            <span className="text-[#2A5DCC] font-semibold">OCD</span>,{' '}
            <span className="text-[#ff6f61] font-semibold">chronic pain</span>, and much more!
          </p>
        </div>
      </div>

       {/* TMS Overview */}
       <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What is TMS?</h2>
            <p className="mt-4 text-slate-700">
              <span className="font-semibold text-blue-700">Transcranial Magnetic Stimulation (TMS)</span> uses targeted
              magnetic pulses to adjust brain activity linked to mood. A coil placed above the head stimulates
              specific regions safely and painlessly.
            </p>
            <p className="mt-4 text-slate-700">
              Depending on the protocol, stimulation can increase or decrease neural activity to normalise
              communication between brain networks.
            </p>
            <div className="mt-6">
              <Link to="/tms-info" className="text-blue-700 font-medium hover:underline">
                Learn about TMS protocols →
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <BrainDiagram variant="healthy" label="Healthy brain activity diagram" />
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-12 md:py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What can TMS treat?</h2>
            <p className="mt-4 text-slate-700">TMS has the strongest evidence base for major depressive disorder.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {['Depression (MDD)', 'Treatment-resistant depression (TRD)', 'Adjunct to psychotherapy'].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <BrainDiagram variant="depression" label="Depression state diagram" />
          </div>
        </div>
      </section>

      {/* Other therapies in TRD */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Other therapies in TRD</h2>
            <p className="mt-4 text-slate-700">
              In treatment-resistant depression, <span className="font-semibold text-blue-700">TMS has comparable
              efficacy to ECT or further medication trials</span>. ECT is reserved for the most severe cases; medication
              strategies may involve switching or combining medicines.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <BrainDiagram variant="depression" label="Alternative TRD therapies diagram" />
          </div>
        </div>
      </section>

      {/* How TMS Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">How TMS works</h2>
              <p className="mt-3 text-slate-700">
                Discover the science behind Transcranial Magnetic Stimulation and how it supports recovery.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Repetitive TMS (rTMS)</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    The most studied protocol. Delivers repeated pulses to areas involved in mood regulation. Widely
                    supported by Medicare for its effectiveness.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Theta Burst Stimulation (TBS)</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    Time-efficient bursts of stimulation that can shorten session duration while maintaining benefits.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Deep TMS (dTMS)</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    Uses specialised coils to reach deeper brain structures—an option where standard TMS is insufficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-56 h-56 md:w-64 md:h-64 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-blue-500 text-sm font-medium">TMS Diagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mental Health Conditions Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            Mental Health Conditions Treated with TMS
          </h2>
          
          {/* Quick Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mentalHealthConditions.map((condition, idx) => (
              <div key={condition.title} className="bg-gradient-to-br from-white to-[#f8faff] rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff6f61]"></div>
                  <div className="text-xs text-gray-500 font-medium">#{idx + 1}</div>
      </div>
                <h3 className="text-lg font-bold text-[#2A5DCC] mb-3">{condition.title}</h3>
                <div className="w-8 h-1 bg-gradient-to-r from-[#ff6f61] to-[#ff8a80] rounded mb-3"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{condition.desc}</p>
          </div>
        ))}
      </div>

          
          </div>
        </div>


      {/* TMS Candidate Groups Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            TMS Treatment Candidates
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Explore the suitability of Transcranial Magnetic Stimulation (TMS) for various candidates. 
            From those with medication-resistant depression to individuals suffering from anxiety, OCD, PTSD, 
            chronic pain and more! TMS offers an alternative solution for diverse needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidateGroups.map((group, idx) => (
              <div key={group.title} className="bg-gradient-to-br from-[#f0f8ff] to-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#2A5DCC]"></div>
                  <div className="text-xs text-gray-500 font-medium">#{idx + 1}</div>
          </div>
                <h3 className="text-lg font-bold text-[#2A5DCC] mb-3">{group.title}</h3>
                <div className="w-8 h-1 bg-gradient-to-r from-[#2A5DCC] to-[#4a7cff] rounded mb-3"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{group.desc}</p>
          </div>
            ))}
          </div>

        </div>
      </div>

      {/* Types of TMS Therapy Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            Types of TMS Therapy
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Explore the different types of Transcranial Magnetic Stimulation approaches like rTMS, dTMS, iTBS, nTMS, and aTMS. 
            Understand how each TMS method offers unique benefits and treatment timelines depending on your unique health circumstances and goals.
          </p>

          <div className="space-y-8">
            {tmsTypes.map((type, idx) => (
              <div key={type.title} className="bg-gradient-to-r from-[#f8faff] to-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#2A5DCC]">{type.title}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-[#e0eaff] text-[#2A5DCC] px-3 py-1 rounded-full font-semibold">
                      {type.duration} per session
                    </span>
                    <span className="bg-[#fff0e6] text-[#ff6f61] px-3 py-1 rounded-full font-semibold">
                      {type.course} course
                    </span>
      </div>
      </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-[#2A5DCC] mb-3">Conditions treated with {type.title.split(' ')[0]}:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {type.conditions.map((condition, conditionIdx) => (
                      <div key={conditionIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#2A5DCC]"></div>
                        <span className="text-gray-700 text-sm">{condition}</span>
          </div>
                    ))}
            </div>
          </div>
        </div>
            ))}
          </div>
        </div>
      </div>

       {/* TMS Treatment Types Comparison Table */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            TMS Treatment Types in Australia
          </h2>
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-xl overflow-hidden">
            <thead>
                <tr className="bg-gradient-to-r from-[#2A5DCC] to-[#1e4bb8] text-white">
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Type of TMS</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Covered by Medicare</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Session Duration</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Full Course Duration</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Precision of Treatment</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Side Effect Potential</th>
                  <th className="border border-gray-300 px-4 py-4 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-4 font-semibold text-[#2A5DCC]">rTMS (Repetitive TMS)</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-green-600 font-semibold">✅ Yes</span>
                  <div className="text-xs text-gray-600 mt-1">(with psychiatrist referral & treatment-resistant depression diagnosis)</div>
                </td>
                  <td className="border border-gray-300 px-4 py-4">~19 minutes</td>
                  <td className="border border-gray-300 px-4 py-4">20–35 sessions over 4–6 weeks</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-blue-600 font-semibold">+</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-green-600 font-semibold">Low</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4 text-sm">Most established and widely used. Supported by Medicare in eligible patients.</td>
              </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-4 font-semibold text-[#2A5DCC]">iTBS (Intermittent Theta Burst)</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-green-600 font-semibold">✅ Yes</span>
                  <div className="text-xs text-gray-600 mt-1">(as variation of rTMS)</div>
                </td>
                  <td className="border border-gray-300 px-4 py-4">~3 minutes</td>
                  <td className="border border-gray-300 px-4 py-4">20–35 sessions over 4–6 weeks</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-blue-600 font-semibold">+</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-yellow-600 font-semibold">Moderate</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4 text-sm">Shorter sessions with similar effectiveness to rTMS. Often used under Medicare-covered rTMS protocol.</td>
              </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-4 font-semibold text-[#2A5DCC]">dTMS (Deep TMS)</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-red-600 font-semibold">❌ Not typically covered</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">~20 minutes</td>
                  <td className="border border-gray-300 px-4 py-4">20–30 sessions over 4–6 weeks</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-red-600 font-semibold">-</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-yellow-600 font-semibold">Moderate to high</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4 text-sm">Reaches deeper brain regions; used in select clinics. Private pay usually required.</td>
              </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-4 font-semibold text-[#2A5DCC]">nTMS (Navigated TMS)</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-red-600 font-semibold">❌ No</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">Varies depending on TMS used</td>
                  <td className="border border-gray-300 px-4 py-4">Same as selected protocol</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-green-600 font-semibold">++</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-green-600 font-semibold">Low</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4 text-sm">Offers more precise targeting using brain imaging. Not widely available in Australia.</td>
              </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-4 font-semibold text-[#2A5DCC]">aTMS (Accelerated TMS)</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-red-600 font-semibold">❌ No</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4">Often uses iTBS: 3 mins per session, multiple per day</td>
                  <td className="border border-gray-300 px-4 py-4">As short as 5–10 days</td>
                  <td className="border border-gray-300 px-4 py-4">Varies</td>
                  <td className="border border-gray-300 px-4 py-4">
                  <span className="text-yellow-600 font-semibold">Moderate</span>
                </td>
                  <td className="border border-gray-300 px-4 py-4 text-sm">Intensive treatment format not currently supported by Medicare. May involve 5+ sessions per day.</td>
              </tr>
            </tbody>
          </table>
        </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-[#2A5DCC]">
          <p className="text-gray-700 text-sm">
            <strong>Note:</strong> Medicare coverage and availability may vary. Always consult with your healthcare provider and check current Medicare guidelines for the most up-to-date information about TMS treatment coverage in Australia.
          </p>
        </div>
      </div>
      </div>

       {/* Side Effects Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            Possible rTMS Therapy Side Effects
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            What are the side effects of TMS? This is a common question for individuals considering this form of treatment. 
            While repetitive transcranial magnetic stimulation is safe and well-tolerated, as with any medical procedure, 
            there are potential pros and cons of TMS.
          </p>
          <p className="text-gray-700 mb-6">
            The good news is that magnetic therapy side effects are temporary and usually resolve on their own. 
            Serious repetitive transcranial magnetic stimulation TMS side effects are exceedingly rare, especially when 
            conducted by trained professionals in a controlled environment.
          </p>
          <p className="text-gray-700 mb-8">
            Also, because there are no TMS long-term side effects, many people are choosing this non-invasive, 
            pain-free approach to mental health treatment. Because TMS side effects long-term have not been reported, 
            it is a safe option for patients seeking sustainable relief from their symptoms.
          </p>
       
        {/* Benefits Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">
            Benefits of TMS for Different Conditions
          </h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#f0f8ff] to-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#2A5DCC] mb-3">Mental Health Conditions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-bold text-[#2A5DCC]">Addiction:</span> Supportive treatment by modulating brain circuits involved in cravings and impulse control.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Alzheimer's Disease:</span> Explored for enhancing cognitive function and slowing progression.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Anxiety:</span> Alleviates symptoms by modulating mood/stress brain areas with minimal side effects.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Bipolar Disorders:</span> Stabilizes mood and reduces depressive episodes.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Brain Fog:</span> Enhances cognitive function and mental clarity.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Depression:</span> Well-established for treatment-resistant depression.</li>
                  <li><span className="font-bold text-[#2A5DCC]">OCD:</span> Targets brain circuits for compulsive behaviors/intrusive thoughts.</li>
                  <li><span className="font-bold text-[#2A5DCC]">PTSD:</span> Regulates fear/emotional processing brain regions.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Schizophrenia:</span> Addresses negative symptoms/cognitive deficits.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Treatment-Resistant Depression:</span> Highly effective for difficult cases.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#fff5f5] to-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#ff6f61] mb-3">Physical & Neurological Conditions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-bold text-[#ff6f61]">Chronic Pain:</span> Alters pain perception pathways, reducing pain intensity/frequency.</li>
                  <li><span className="font-bold text-[#ff6f61]">Parkinson's Disease:</span> Improves motor function and reduces tremors.</li>
                  <li><span className="font-bold text-[#ff6f61]">Stroke Rehabilitation:</span> Promotes recovery of motor/cognitive functions by enhancing neuroplasticity.</li>
            </ul>
          </div>
              <div className="bg-gradient-to-r from-[#f0f8ff] to-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#2A5DCC] mb-3">Special Populations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-bold text-[#2A5DCC]">Older Adults:</span> Non-invasive alternative for mood regulation without long-term medication complications.</li>
                  <li><span className="font-bold text-[#2A5DCC]">Medication Sensitivities:</span> Safe/effective for those who cannot tolerate or wish to avoid drugs.</li>
                  <li><span className="font-bold text-[#2A5DCC]">High-Stress Professions:</span> Improves mood/cognitive function without medication side effects.</li>
            </ul>
          </div>
        </div>
          </div>
          <p className="text-gray-700 mt-8 text-center font-semibold text-lg">
            Overall, repetitive transcranial magnetic stimulation's adaptability in addressing the diverse needs of different groups underscores its potential as a transformative approach to mental health care.
          </p>
        </div>
      </div>

      
    </div>
  );
}

// Minimal placeholder to avoid undefined component errors
function BrainDiagram({ variant, label }) {
  return (
    <div aria-label={label} className="w-56 h-56 md:w-64 md:h-64 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
      <span className="text-blue-500 text-sm font-medium">{variant === 'healthy' ? 'Healthy' : 'Diagram'}</span>
    </div>
  )
}