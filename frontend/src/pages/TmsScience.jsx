import React, { useRef } from 'react';
import TMSProcedure from '../components/TMSProcedure';


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

export default function TmsScience() {
    
  // Group conditions by status
  const approvedConditions = mentalHealthConditions.filter(cond => cond.status === 'approved');
  const evidenceConditions = mentalHealthConditions.filter(cond => cond.status === 'evidence');
  const researchConditions = mentalHealthConditions.filter(cond => cond.status === 'research');
  
  // Group candidates by category
  const approvedCandidates = candidateGroups.filter(candidate => candidate.status === 'approved');
  const evidenceCandidates = candidateGroups.filter(candidate => candidate.status === 'evidence');
  const generalCandidates = candidateGroups.filter(candidate => candidate.status === 'general');
  const occupationCandidates = candidateGroups.filter(candidate => candidate.status === 'occupation');

  const procedureRef = useRef(null);
  return (
    <div className="bg-gradient-to-br from-[#f7faff] to-[#e8f2ff] min-h-screen pb-16 pt-10 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2A5DCC] to-[#1e4bb8] bg-clip-text text-transparent">
          Mental Health Conditions Treated with Transcranial Magnetic Stimulation (TMS)
          </h1>
         
        </div>
      </div>


        {/* Australian Approved Conditions */}
        <div className="container mb-16">
     
        <div className="section-header">
          ✅ Australian Government Approved Conditions (Medicare Covered)
        </div>
        <div className="conditions-grid">
          {approvedConditions.map(condition => (
            <div key={condition.title} className={`condition-card card-${condition.status}`}>
              <span className={`status-badge status-${condition.status}`}>
                {condition.statusText}
              </span>
              <span className="condition-icon">{condition.icon}</span>
              <h3 className="text-xl font-semibold text-dark mb-3">{condition.title}</h3>
              <p className="text-light">{condition.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence-Based Conditions */}
      <div className="container mb-16">
        <div className="section-header">
          🔬 Conditions with Strong Evidence (Private Treatment)
        </div>
        <div className="conditions-grid">
          {evidenceConditions.map(condition => (
            <div key={condition.title} className={`condition-card card-${condition.status}`}>
              <span className={`status-badge status-${condition.status}`}>
                {condition.statusText}
              </span>
              <span className="condition-icon">{condition.icon}</span>
              <h3 className="text-xl font-semibold text-dark mb-3">{condition.title}</h3>
              <p className="text-light">{condition.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Conditions */}
      <div className="container mb-16">
        <div className="section-header">
          🧪 Conditions Under Research
        </div>
        <div className="conditions-grid">
          {researchConditions.map(condition => (
            <div key={condition.title} className={`condition-card card-${condition.status}`}>
              <span className={`status-badge status-${condition.status}`}>
                {condition.statusText}
              </span>
              <span className="condition-icon">{condition.icon}</span>
              <h3 className="text-xl font-semibold text-dark mb-3">{condition.title}</h3>
              <p className="text-light">{condition.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Groups */}
      <div className="container mb-16">
        <div className="section-header">
          👥 Ideal Candidates for TMS Treatment
        </div>

        {/* Approved Condition Candidates */}
        <h3 className="text-2xl font-semibold text-primary mb-6">For Medicare-Covered Conditions</h3>
        <div className="candidate-grid">
          {approvedCandidates.map(candidate => (
            <div key={candidate.title} className="candidate-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{candidate.icon}</span>
                <h4 className="text-lg font-semibold text-dark">{candidate.title}</h4>
              </div>
              <p className="text-light mb-2">{candidate.desc}</p>
              <span className="coverage-badge">✅ Medicare Covered</span>
            </div>
          ))}
        </div>

        {/* Evidence-Based Candidates */}
        <h3 className="text-2xl font-semibold text-primary mb-6 mt-12">For Evidence-Based Conditions</h3>
        <div className="candidate-grid">
          {evidenceCandidates.map(candidate => (
            <div key={candidate.title} className="candidate-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{candidate.icon}</span>
                <h4 className="text-lg font-semibold text-dark">{candidate.title}</h4>
              </div>
              <p className="text-light mb-2">{candidate.desc}</p>
              <span className="coverage-badge">💼 Private Treatment</span>
            </div>
          ))}
        </div>

        {/* General Candidates */}
        <h3 className="text-2xl font-semibold text-primary mb-6 mt-12">General Candidate Groups</h3>
        <div className="candidate-grid">
          {generalCandidates.map(candidate => (
            <div key={candidate.title} className="candidate-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{candidate.icon}</span>
                <h4 className="text-lg font-semibold text-dark">{candidate.title}</h4>
              </div>
              <p className="text-light">{candidate.desc}</p>
            </div>
          ))}
        </div>

        {/* Occupational Candidates */}
        <h3 className="text-2xl font-semibold text-primary mb-6 mt-12">Occupational Groups</h3>
        <div className="candidate-grid">
          {occupationCandidates.map(candidate => (
            <div key={candidate.title} className="candidate-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{candidate.icon}</span>
                <h4 className="text-lg font-semibold text-dark">{candidate.title}</h4>
              </div>
              <p className="text-light">{candidate.desc}</p>
            </div>
          ))}
        </div>
      </div>



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

    

     

<div ref={procedureRef}>
        <TMSProcedure />
      </div>

      
    </div>
  );
} 