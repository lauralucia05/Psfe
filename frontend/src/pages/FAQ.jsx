import React, { useState } from 'react'
import { assets } from '../assets/assets'

const faqData = [
  {
    question: "What is TMS Therapy?",
    answer: "Transcranial Magnetic Stimulation (TMS) is a non-invasive brain stimulation treatment that uses magnetic fields to stimulate nerve cells in the brain. It's primarily used to treat depression and other mental health conditions when traditional treatments like medication haven't been effective. TMS targets specific areas of the brain involved in mood regulation without requiring surgery or anesthesia."
  },
  {
    question: "How does TMS Therapy Work?",
    answer: "TMS works by delivering focused magnetic pulses to specific brain regions, particularly the prefrontal cortex. These pulses create small electrical currents that stimulate nerve cells, helping to restore normal brain function and improve mood. The treatment is based on the principle that depression is associated with decreased activity in certain brain areas, and TMS helps normalize this activity."
  },
  {
    question: "When is TMS Used?",
    answer: "TMS is typically used when: • Traditional antidepressant medications haven't provided sufficient relief • Patients experience intolerable side effects from medications • As an alternative to electroconvulsive therapy (ECT) • For treatment-resistant depression • In combination with other treatments for better outcomes • For patients who prefer non-medication treatment options"
  },
  {
    question: "What are the Benefits of TMS?",
    answer: "TMS offers several key benefits: • Non-invasive and non-surgical • No anesthesia required • Minimal side effects compared to medications • No cognitive side effects like memory loss • Can be used alongside other treatments • Outpatient procedure - no hospital stay needed • Long-lasting effects for many patients • FDA-approved for depression treatment"
  },
  {
    question: "What are TMS Side Effects?",
    answer: "TMS side effects are generally mild and temporary: • Scalp discomfort or pain at the treatment site • Headaches (usually mild and temporary) • Tingling or twitching of facial muscles during treatment • Lightheadedness • Sleepiness • Most side effects resolve within the first week of treatment • Serious side effects are extremely rare"
  },
  {
    question: "What are TMS Contraindications?",
    answer: "TMS may not be suitable for patients with: • Metal implants in the head or neck • Cochlear implants • Deep brain stimulators • Aneurysm clips or coils • Stents in the neck or brain • Bullet fragments or shrapnel in the head • History of seizures or epilepsy • Pregnancy (consult with healthcare provider) • Certain medical devices near the head"
  },
  {
    question: "Can TMS be Used with Other Treatments?",
    answer: "Yes, TMS can be effectively combined with: • Antidepressant medications • Psychotherapy and counseling • Lifestyle modifications • Other mental health treatments • TMS is often used as an adjunct to existing treatments • Your healthcare provider will coordinate all treatments • Combination therapy may improve overall outcomes • TMS doesn't interfere with most medications"
  },
  {
    question: "How is TMS Prescribed?",
    answer: "TMS prescription involves: • Comprehensive psychiatric evaluation • Review of treatment history • Assessment of medication trials • Discussion of treatment goals • Medical clearance if needed • Insurance authorization process • Treatment plan development • Regular monitoring and adjustment of treatment parameters"
  },
  {
    question: "How is TMS Treatment Administered?",
    answer: "TMS treatment administration includes: • Initial mapping session to determine optimal placement • Treatment sessions lasting 20-40 minutes • 5 sessions per week for 4-6 weeks • Patient sits in a comfortable chair • Magnetic coil positioned over the scalp • No anesthesia or sedation required • Patient remains awake and alert • Can return to normal activities immediately after"
  },
  {
    question: "How Long Does TMS Treatment Last?",
    answer: "TMS treatment duration varies: • Acute phase: 4-6 weeks of daily sessions • Maintenance phase: may include periodic sessions • Individual response determines total duration • Some patients need additional sessions • Treatment can be repeated if needed • Long-term effects typically last 6-12 months • Follow-up sessions may be recommended • Treatment plan is personalized for each patient"
  },
  {
    question: "Is TMS Treatment Painful?",
    answer: "TMS treatment is generally well-tolerated: • Most patients experience only mild discomfort • Sensation similar to tapping on the scalp • No pain medication required • Discomfort typically decreases over time • Treatment can be adjusted for comfort • Patients can communicate any discomfort • Most patients complete full treatment course • Side effects are temporary and manageable"
  },
  {
    question: "What is the Success Rate of TMS?",
    answer: "TMS success rates are encouraging: • Approximately 50-60% of patients respond to treatment • 30-40% achieve full remission • Success rates higher than medication alone • Results typically seen within 2-4 weeks • Response rates vary by individual • Treatment-resistant patients may have lower rates • Combination with other treatments improves outcomes • Long-term success depends on maintenance strategies"
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about TMS therapy, treatment process, and what to expect.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg 
                    className="w-6 h-6 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 py-6 bg-white">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

 
      </div>

      {/* Responsive Design Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          .prose {
            font-size: 0.95rem;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          h1 {
            font-size: 1.75rem;
          }
          
          .prose {
            font-size: 0.9rem;
          }
        }
      `}</style>

      
      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-6">More Questions? We've Got Answers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">What Happens if I Get TMS Treatment?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>First, you'll provide medical information and meet with a TMS provider to determine whether TMS is appropriate for you.</li>
              <li>They'll consider safety factors such as metal in your head or neck or seizure history, as well as evidence of TMS effectiveness for your diagnosis.</li>
              <li>Next, there would be six to eight weeks of daily treatments. Alternatively, TMS may be given up to 10 times per day for up to five days.</li>
              <li>Studies have shown that over 60% of people who get better during the initial treatment are still doing well after one year.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">TMS Therapy Side Effects?</h3>
            <p className="text-gray-700">
              TMS does have a few side-effects. The most common side-effects are mild skin sensitivity in the areas that were targeted and headaches.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">Is TMS The Same As ECT?</h3>
            <p className="text-gray-700">
              No. ECT therapy is an invasive procedure performed with anesthesia. TMS is non-invasive and requires NO anesthesia.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">Is TMS FDA-Approved?</h3>
            <p className="text-gray-700">
              Yes. TMS is an FDA-approved treatment for those suffering from major depression.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">Covered By Insurance?</h3>
            <p className="text-gray-700">
              Yes. Insurance will cover TMS treatments for depression. Explore insurance options here.
            </p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default FAQ
