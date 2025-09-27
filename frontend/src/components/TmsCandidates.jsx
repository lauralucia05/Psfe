import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const doctorImg = 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80'; // Example image, replace if needed

export default function TmsCandidates() {
  const navigate = useNavigate();
  const gridRef = useRef(null);

  const handleLearnMore = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="bg-[#fdf7f2] min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#54586a] mb-4 leading-tight">TMS Treatment<br/>Candidates</h1>
          <div className="w-16 h-1 bg-[#ff8b7b] mb-6" />
          <p className="text-lg text-[#54586a] mb-8">
            Explore the suitability of Transcranial Magnetic Stimulation (TMS) for various candidates. From those with medication-resistant depression to individuals suffering from anxiety, OCD, PTSD, chronic pain and more! TMS offers an alternative solution for diverse needs.
          </p>
          <div className="flex gap-4">
            <button
              className="px-8 py-4 bg-[#ff8b7b] text-white font-semibold rounded-full text-lg shadow hover:bg-[#ff6b5b] transition"
              onClick={() => navigate('/contact')}
            >
              CONTACT US
            </button>
            <button
              className="px-8 py-4 border-2 border-[#54586a] text-[#54586a] font-semibold rounded-full text-lg shadow hover:bg-[#f3f3f3] transition flex items-center gap-2"
              onClick={handleLearnMore}
            >
              LEARN MORE
              <span className="inline-block rotate-90">➔</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              src={doctorImg}
              alt="Doctor with patient"
              className="w-[350px] md:w-[400px] rounded-2xl shadow-lg border-4 border-white object-cover"
              style={{objectPosition: 'center'}}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-8 bg-[#ff8b7b] rounded-bl-2xl rounded-tr-2xl opacity-30 z-[-1]" />
          </div>
        </div>
      </section>
      {/* Candidates Grid */}
      <section ref={gridRef} className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Elderly */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Elderly (65+ Years)</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">Transcranial Magnetic Stimulation (TMS) has shown promise for adults 65+ who are dealing with depression, anxiety, cognitive decline, Alzheimer's, and more!</p>
          </div>
          {/* Corporate Professionals */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Corporate Professionals</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">Transcranial Magnetic Stimulation (TMS) is a proven non-invasive treatment therapy for corporate professionals grappling with depression, anxiety, OCD, and more!</p>
          </div>
          {/* Adults (18-65 Years) */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Adults (18-65 Years)</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">TMS Therapy Treatment is FDA approved for adults aged 18-65 suffering depression and OCD. This innovative treatment offers promising benefits for mental health and other conditions.</p>
          </div>
          {/* Pregnant Or Postpartum Women */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Pregnant Or Postpartum Women</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">TMS therapy offers an alternative to anti-depressants for pregnant or postpartum women facing anxiety and depression. This FDA approved therapy offers relief during and after pregnancy.</p>
          </div>
          {/* Patients With Cognitive Decline */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Patients With Cognitive Decline</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">TMS therapy can enhance cognitive function and slow down the progression of cognitive decline by helping the brain form new neural connections.</p>
          </div>
          {/* Patients With Medication Sensitivities */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Patients With Medication Sensitivities</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">TMS is a breakthrough solution for those with antidepressant intolerance by improving mood regulation through stimulation rather than medication.</p>
          </div>
          {/* Military Personnel And Veterans */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Military Personnel And Veterans</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">TMS Brain Stimulation Therapy (TMS) can aid military personnel and veterans in overcoming PTSD, depression, and anxiety. This non-invasive treatment is FDA approved, offering hope and healing!</p>
          </div>
          {/* Healthcare Workers */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">Healthcare Workers</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">Transcranial Magnetic Stimulation (TMS) can support healthcare workers tackling depression, anxiety, and PTSD from demanding working conditions. Empowering those who care for others.</p>
          </div>
          {/* First Responders */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-[#54586a] mb-2">First Responders</h3>
            <p className="text-[15px] text-[#ff8b7b] mb-2">This non-invasive therapy can help first responders facing depression, anxiety, PTSD, and chronic pain by targeting specific areas of the brain involved in mood regulation or pain perception.</p>
          </div>
        </div>
      </section>
    </>
  );
}
