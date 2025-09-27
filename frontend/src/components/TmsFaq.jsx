import React from 'react';

const faqs = [
  {
    question: 'TMS Therapy Side Effects?',
    answer: (
      <>
        TMS does have a few <span className="text-[#ff8b7b] underline">side-effects</span>. The most common side-effects are mild skin sensitivity in the areas that were targeted and headaches.
      </>
    ),
  },
  {
    question: 'Is TMS The Same As ECT?',
    answer: (
      <>
        No. ECT therapy is an invasive procedure performed with anesthesia. <span className="text-[#ff8b7b]">TMS is non-invasive</span> and requires NO anesthesia.
      </>
    ),
  },
  {
    question: 'Is TMS FDA-Approved?',
    answer: (
      <>
        Yes. TMS is an FDA-approved treatment for those suffering from <span className="text-[#ff8b7b] underline">major depression</span>.
      </>
    ),
  },
  {
    question: 'Covered By Insurance?',
    answer: (
      <>
        Yes. Insurance will cover TMS treatments for depression. <span className="text-[#ff8b7b] underline">Explore insurance options here.</span>
      </>
    ),
  },
];

export default function TmsFaq() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="uppercase text-[#ff8b7b] font-semibold tracking-widest mb-2 text-sm">More Questions?</p>
        <h2 className="text-4xl font-bold text-[#54586a]">We've Got Answers</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <svg className="w-7 h-7 text-[#ff8b7b] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#54586a] mb-1">{faq.question}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 