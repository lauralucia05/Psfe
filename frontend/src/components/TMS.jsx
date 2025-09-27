import React, { useEffect, useRef, useState } from 'react';
import TmsFaq from './TmsFaq';
import TmsWorks from './TmsWorks';

export default function TMS() {
  const [currentCondition, setCurrentCondition] = useState(0);
  const conditions = ['Brain Fog', 'Anxiety', 'OCD', 'PTSD', 'Chronic Pain'];
  const worksRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCondition((prev) => (prev + 1) % conditions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

 const handleScrollToWorks = () => {
  const section = document.getElementById("tms-info");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fff7f6] px-8 py-30 relative">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 mx-auto">
        
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#54586a] mb-2">TMS Therapy</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ff8b7b] mb-4">Psyencia TMS</h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-md">
            Transcranial Magnetic Stimulation (or TMS) is a non-invasive <a href="https://www.tga.gov.au/standards-guidelines-publications-medical-devices-ivds" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TGA</a> approved treatment that offers hope for long lasting relief from depression and many other neurological conditions.
            </p>
           
            {/* Google Calendar Appointment Button - Hero Section */}
            <div className="mt-6">
              <div id="google-calendar-hero"></div>
            </div>

            
            <button className="mt-8 flex flex-col items-center group" onClick={handleScrollToWorks} aria-label="Scroll down">
              <span className="text-gray-400 text-xs mb-1">Scroll to learn more</span>
              <svg className="w-7 h-7 text-[#ff8b7b] animate-bounce group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          {/* Right Side */}
          <div className="flex-1 relative">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-xl mx-auto w-full">
            <div className="relative w-full rounded-xl overflow-hidden" style={{paddingTop:'56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cHQ4LLd8qQA?rel=0&modestbranding=1&loop=1&playlist=cHQ4LLd8qQA&autoplay=1&mute=1&playsinline=1"
                title="What is TMS (looped)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

        </div>
        </div>
      </div>

      {/* Detailed TMS Information */}
      <section className="max-w-6xl mx-auto px-4 py-0 space-y-12">
        {/* What is TMS */}
        <div id="tms-info" className="bg-white rounded-2xl shadow p-10 border border-gray-100">
      
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">Depression and Treatment Landscape</h2>
        <p className="text-gray-700 mb-4">
          Depression is one of the most common mental health conditions in Australia, affecting people between the ages of 15 and 70. While many effective treatments exist, first-line approaches such as antidepressant medication and psychotherapy do not work for everyone. In fact, research shows that around two-thirds of people with depression do not experience adequate relief from their first prescribed antidepressant. Even after two months of treatment, many continue to experience symptoms, and each additional medication trial tends to be less effective than the previous one.
        </p>
        <p className="text-gray-700 mb-4">
          So what options are available for people who do not respond to first-line treatments?
        </p>
        <p className="text-gray-700 mb-4">
          For several decades, electroconvulsive therapy (ECT) (commonly referred to as "shock therapy") has been considered the most certain standard for treatment-resistant depression. ECT remains one of the most effective treatments available and is still widely used across Australia. However, its invasive nature and potential side effects, particularly on memory and cognition, make it difficult for many people to tolerate.
        </p>
        <p className="text-gray-700 mb-6">
          In recent years, a newer option has emerged: transcranial magnetic stimulation (TMS). TMS is a non-invasive procedure that uses magnetic fields to stimulate nerve cells in targeted areas of the brain, helping to reduce symptoms of major depression. This treatment provides hope for individuals who have not found relief through traditional methods and is increasingly being recognised as a safe and effective alternative.
        </p>

          {/* Public service announcement */}
          <div className="bg-[#fff7f6] border-l-4 rounded-2xl border border-[#ff8b7b]/30 p-6 mb-10">
          <h3 className="text-2xl font-semibold text-[#ff8b7b] mb-3">Public service announcement</h3>
          <p className="text-[#54586a] leading-relaxed mb-4">
            Please do NOT confuse Transcranial magnetic stimulation which is incredibly safe and quite effective with Electrocovulsive therapy or "shock therapy", which is also used in treatment resistant depression but which requires anaesthetic, triggers a controlle seizure and while even more effective on average has a much greater side effect burden.
          </p>
          <div className="flex justify-center mt-4">
            <img
              src="https://i.postimg.cc/7L9tNjcZ/tms-vs-ect.png"
              alt="TMS vs ECT Comparison"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

      
       
      

         
        </div>

      

        {/* How does TMS work */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-3">What is TMS?</h2>
        <p className="text-gray-700 mb-3">
          Transcranial Magnetic Stimulation (TMS) is a non-invasive, drug-free treatment designed to help people with depression and other mood disorders. TMS uses focused electromagnetic pulses to modulate the activity of neurons (nerve cells) in the brain, most commonly the dorsolateral prefrontal cortex (DLPFC), an area involved in mood regulation, attention, and decision-making. It was first invented in 1985 by Dr. Anthony Barker and has been used clinically for over 30 years.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-3">How does TMS work?</h2>
        <p className="text-gray-700 mb-3">
          TMS uses electromagnetic pulses, in the same way an MRI scanner might use them, but in this case they are focussed onto the scalp. The electromagnetic pulses do not travel far, going on several centimetres and exponentially decreasing in strength over distance and thus only significantly affect a very small portion of brain tissue in a targeted manner. This allows for neuromodulation of the brain in a very safe way and depending on the parameters used can either increase or decrease activity of different brain regions.
        </p>
        <p className="text-gray-700 mb-3">
          TMS devices are entirely non-invasive, operating outside the body while influencing central nervous system activity through carefully applied magnetic fields. By stimulating brain regions linked to depression, TMS can improve symptoms without the need for anaesthesia. Compared with medications and electroconvulsive therapy (ECT), it is generally very well tolerated.
        </p>
        <div className="flex justify-center mt-10 mb-10">
            <div className="relative w-full max-w-2xl" style={{paddingTop:'56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/GSu9r48xDA0?rel=0&modestbranding=1"
                title="How does TMS work video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
         
        </div>
       


        {/* Where do they target */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
         
        <h3 className="text-xl md:text-2xl font-semibold text-[#2A5DCC] mb-3">Where do they target?</h3>
        <p className="text-gray-700 mb-3">
          Classically, when undergoing TMS a qualified psychiatrist will find your motor cortex and elicit a reflex in your contralateral (opposing) hand. From this the lowest effective dose can be established. The head is measured to plot the position of the Dorsolateral prefrontal cortex (DLPFC) which is fortuitously very superficial and easily accessible. It is this area of the brain that is classically stimulated during most TMS procedures to improve its activity.
        </p>

 {/* DLPFC functions */}
        <h3 className="text-xl md:text-2xl font-semibold text-[#2A5DCC] mb-3">What does the Dorsolateral Prefrontal Cortex (DLPFC) do?</h3>
        <p className="text-gray-700 mb-3">The DLPFC is responsible for many important functions in the brain but in particular regulates:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong>Mood and emotional regulation</strong> - improved emotional processing, reduced emotional bias, improved mood</li>
          <li><strong>Motivation</strong> - Drive and reward seeking</li>
          <li><strong>Executive function</strong> - working memory, cognitive control, planning and decisions making, cognitive flexibility</li>
          <li><strong>Directing focus and attention</strong></li>
        </ul>
        <div className="flex justify-center mt-10 mb-20">
            <img
              src="https://i.postimg.cc/FzZngHWb/Learn-more-6.png"
              alt="DLPFC functions"
              className="max-w-full h-auto rounded-lg "
            />
          </div>

        </div>

       
  

     

      {/* Safety and Side Effects Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">How Safe Is TMS?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Tens of millions of TMS treatments have shown that it's safe.</li>
          <li>It does have some side effects such as scalp discomfort, headaches, and a very rare risk of seizures (1 of 30,000).</li>
          <li>In contrast with TMS, psychiatric medications distribute chemicals throughout the body, so their side effects may be more severe (such as: Gastrointestinal, Weight changes, Sexual side effects, Sleep disturbances) and longer lasting.</li>
        </ul>
         {/* Stats Row */}
         <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">10 years</div>
            <div className="text-gray-700 text-sm">TMS has been used for over 10 years and is FDA-approved for treating depression. <span className="text-xs">- National Institutes of Health</span></div>
          </div>
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">5%</div>
            <div className="text-gray-700 text-sm">Less than 5% of TMS patients experience any side effects at all. <span className="text-xs">- NeuroPsych Wellness Center</span></div>
          </div>
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">0.003%</div>
            <div className="text-gray-700 text-sm">Less than 0.003% of patients have experienced seizures during TMS treatment, which is lower than the risk of experiencing a seizure while taking medication for depression. <span className="text-xs">- National Institutes of Health</span></div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">What about TMS side effects?</h2>
        <p className="text-gray-700 mb-4">
          Thankfully, TMS has very few side effects and they are usually mild and self-limiting. They are as follows:
        </p>

        
        
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-orange-400 p-4">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Dizziness</h3>
            <p className="text-orange-700">
            Patients may experience a sensation of dizziness during or shortly after TMS sessions. This occurs as the magnetic pulses stimulate the brain, occasionally affecting the inner ear's balance mechanisms. Typically, it is mild and subsides quickly, allowing patients to continue their daily activities without interruption.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Subtle scalp discomfort</h3>
            <p className="text-red-700">
              About 33% of patients report that the treatment feels mildly uncomfortable at first, like a tapping and tingling sensation on the scalp. This can be slightly annoying but patients rarely report it as painful. Patients reliably seem to get used to it and it doesn't bother them anymore after the first 3-5 treatments.
            </p>
          </div>

          
          
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Twitching of facial muscles during treatment</h3>
            <p className="text-orange-700">
              May occur in up to 30% of patients - occasionally the TMS magnetic field will stimulate a local nerve to a muscle, classically the frontalis muscle above the eye or the masseter of the jaw. These muscles can spasm if they are being activated. This is not dangerous, but can be slightly uncomfortable. This is usually very easily solved by just slightly angling the TMS machine to still treat the active treatment site but not affect the nearby nerve. 20% may experience this but it is transient during treatment and usually able to be corrected by repositioning.
            </p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Headaches</h3>
            <p className="text-yellow-700">
              About 30% of patients receiving TMS report headaches,- likely due to the stimulation of superficial nerves and muscle contractions in the scalp, usually mild in character, and these classically improve after 1-2 weeks of treatment. If you are prone to particularly bad or regular headaches your chances may be slightly higher.
            </p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Fatigue</h3>
            <p className="text-blue-700">
              About 30% of patients receiving TMS report temporary fatigue that usually lasts only for the first 1-2 weeks of treatment. In rare cases (0.1%) this can continue for a longer period during treatment but resolves once treatment finishes and usually self resolves before completion of treatment.
            </p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">Initial mild worsening of depressive or anxious symptoms</h3>
            <p className="text-purple-700">
              Sometimes called a "TMS Dip" - This has been quoted to happen in up to as much as 20% of patients but there are no reliable studies supporting this or data available for analysis. In clinical experience, just 1 out of 1000 patients claims this happened, and it appears to almost always resolve within 2 weeks of treatment initiation.
            </p>
          </div>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Hypomanic or manic episodes</h3>
            <p className="text-indigo-700">
              About 0.1% higher than placebo treatment thus a rate of (1/1000) - The rate is so low it is generally not considered <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8394688/">linked.</a>
            </p>
          </div>
          
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Seizures</h3>
            <p className="text-gray-700">
              0.003% or 1/30,000 risk of seizures (increases to 0.02% or 1/2000 with iTBS) - incredibly rare, likely underlying vulnerabilities exist, more likely if a history of seizures or alcohol or drug use and withdrawal is present.
            </p>
          </div>
          
          <div className="bg-pink-50 border-l-4 border-pink-400 p-4">
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Retinal detachment</h3>
            <p className="text-pink-700">
              Considered an incredibly rare, but potentially serious complication of TMS, the available data hints at a rate of perhaps 1 in a million. It appears patients with Treatment Resistant Depression may have changes in their eyes prior to TMS treatment, and TMS treatment did not appear to worsen this so this risk may actually be independent of TMS according to one study.- “TRD patients exhibited significant changes in choroid and RNFL thickness, as measured by OCT imaging. TMS treatment did not result in significant alterations in these retinal measurements overall”.
            </p>
          </div>
        </div>
      </div>
{/* What is TMS Used For? */}
<div ref={worksRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A5DCC] mt-16 mb-4">What is TMS Used For?</h2>
        <TmsWorks />
      </div>

         {/* Indications */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">Conditions with Growing Evidence</h2>
        <p className="text-gray-700 mb-4">
          Given it stimulates the DLPFC quite effectively and safely it has growing evidence for the treatment of a variety of psychiatric and neurological conditions including:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-3">Psychiatric Conditions</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Major Depressive Disorder (MDD)</strong> - approximately 70% efficacy (58-83%)</li>
              <li><strong>Generalised Anxiety Disorder (GAD)</strong> - approximately 55% efficacy</li>
              <li><strong>Post Traumatic Stress Disorder (PTSD)</strong> - approximately 50% efficacy</li>
              <li><strong>Obsessive Compulsive Disorder (OCD)</strong> - approximately 40% efficacy</li>
              <li><strong>Substance Dependence</strong> - still in research phase</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-3">Neurological Conditions</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Neuropathic pain</strong> - level A 42% efficacy</li>
              <li><strong>Post-Stroke Recovery</strong> - Level A</li>
              <li><strong>Chronic Pain/Fibromyalgia</strong> - Level B</li>
              <li><strong>Multiple Sclerosis</strong> - Level B</li>
              <li><strong>Parkinson's Disease</strong> - ?</li>
              <li><strong>Alzheimer's disease/ Mild Cognitive impairment</strong> - ?</li>
              <li><strong>Tinnitus</strong> - 43% (but some mixed evidence)</li>
            </ul>
          </div>
        </div>
        </div>




 {/* Efficacy and Comparison Section */}
 <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">Does TMS work?</h2>
        <p className="text-gray-700 mb-4">
          Approximately 60% to 70% of people with depression who have tried and failed to receive benefit from medications experience a clinically meaningful response with TMS. About one-third of these individuals experience a full remission, meaning that their symptoms go away completely. While results are not permanent and recurrence can occur, most TMS patients feel better for many months after treatment stops, with the average response lasting a little more than a year. Some will opt to return for subsequent rounds of treatment. For individuals who do not respond to TMS, ECT may still be effective and is often worth considering.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#2A5DCC] mb-4">Efficacy and relapse rates of TMS relative to Antidepressants and ECT</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#2A5DCC] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Efficacy</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Relapse Rate at 6 months</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Potential side effects</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">TMS</td>
                <td className="border border-gray-300 px-4 py-3">70%</td>
                <td className="border border-gray-300 px-4 py-3">30%</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Initial headache and tiredness, very rare risk of hypomania or seizure</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">Antidepressant Therapy</td>
                <td className="border border-gray-300 px-4 py-3">50%</td>
                <td className="border border-gray-300 px-4 py-3">35%</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Weight Gain, Sexual side effects, headache, gastrointestinal side effects, affective blunting (numbness), sleep disruption (over or undersleeping), agitation</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">ECT</td>
                <td className="border border-gray-300 px-4 py-3">80%</td>
                <td className="border border-gray-300 px-4 py-3">40%</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Memory Disruption, Headache, Muscle Ache, nausea, Confusion, very rare adverse events with anaesthetic and even death</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
          <p className="text-gray-700 text-sm">
            <strong>Note:</strong> Of note, in TMS responders in which TMS wore off by 6 months, 85% improved again with further adjunctive TMS!
          </p>
        </div>

        
   

        

       
      </div>

        {/* Approvals */}
         {/* Bottom Card */}
         <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#2A5DCC] mb-2">Approval by Regulatory bodies given extensive safety profile</h3>
                <div className="text-sm text-[#2A5DCC] mb-3">
                  <p>2008 - Depression</p>
                  <p>2018 - OCD</p>
                  <p>2020 - Smoking Cessation</p>
                </div>
              </div>
              <div className="ml-4">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#2A5DCC]">
                  <circle cx="30" cy="30" r="25" fill="currentColor" opacity="0.1"/>
                  <path d="M20 30 L27 37 L40 23" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
            
          <ul className="list-disc pl-5 space-y-2 text-[#54586a]">
            <li>Royal Australian and New Zealand College of Psychiatrists (RANZCP)</li>
            <li>Therapeutic Goods Administration (TGA) - medicine and therapeutic regulatory agency of Australia</li>
            <li>U.S. Food and Drug Administration (FDA) [America]</li>
            <li>Conformité Européenne (CE Mark) [Europe]</li>
          </ul>
          <p className="text-xs text-gray-500">2025 TGA and FDA approved for treatment-resistant depression and other conditions</p>

          </div>



        {/* TRD criteria */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-3">TMS for Treatment Resistant Depression (TRD)</h3>
          <p className="text-[#54586a] mb-4">
            TMS appears to show its greatest efficacy for depression, and as such in 2021 was approved by the Australian Therapeutic Goods and Administration (TGA) Department for a Medicare rebate in Australia for the treatment of TRD if the patient met 4 criteria:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#54586a]">
            <li>&gt;18yrs of age</li>
            <li>Ongoing diagnosis of Depression</li>
            <li>Has been resistant to 2 or more antidepressants</li>
            <li>Has not trialled TMS for this purpose previously</li>
          </ul>
        </div>







      </section>


      {/* Guide, FAQ */}
      
  

      {/* Google Calendar Appointment Button - Mobile Sticky */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden pointer-events-none">
        <div className="pointer-events-auto" id="google-calendar-mobile"></div>
      </div>

      {/* Load Google Calendar Scripts */}
      <script>
        {`
          (function() {
            // Load Google Calendar for Hero Section
            if (window.calendar && window.calendar.schedulingButton) {
              window.calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ulQMw6keILYqfRde-1PQBq-iAoET6u59ScFAOlA07Q__ueS40lHZdpJsj9tK3gd_ZTFEILVc-?gv=true',
                color: '#ff8b7b',
                label: 'Book TMS Consultation',
                target: document.getElementById('google-calendar-hero'),
              });
              // Load Google Calendar for Mobile
              window.calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ulQMw6keILYqfRde-1PQBq-iAoET6u59ScFAOlA07Q__ueS40lHZdpJsj9tK3gd_ZTFEILVc-?gv=true',
                color: '#ff8b7b',
                label: 'Book Consultation',
                target: document.getElementById('google-calendar-mobile'),
              });
            }
          })();
        `}
      </script>
    </>
  );
}


