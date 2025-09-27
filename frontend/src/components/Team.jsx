import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// Icon Components
const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const VideoFrame = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const Book = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Badge = ({ variant = 'secondary', children }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
      {children}
    </span>
  );
};

const members = [
  {
    id: 1,
    name: 'Dr. Samuel Bryson',
    displayName: 'Dr. Samuel Bryson',
    image: 'https://i.postimg.cc/vH95qQ2B/dsam.png',
    quote: 'Never underestimate the human capacity to overcome adversity.',
    title: 'General Adult Psychiatrist & Founder',
    description: 'Dr. Bryson specializes in Treatment Resistant Depression, Bipolar Disorder, and innovative treatments including TMS and ketamine-assisted therapy.',
    badges: ['RANZCP Fellow', 'TMS Specialist'],
    stats: [
      { icon: Award, text: '12+ Hospitals' },
      { icon: Clock, text: '10+ Years Experience' },
      { icon: VideoFrame, text: 'Telehealth Available' },
      { icon: Book, text: 'English, Spanish and German' }
    ],
    specializations: ['Treatment-Resistant Depression', 'Bipolar Disorder', 'Military & Veteran Psychiatry', 'PTSD', 'Anxiety Disorders'],
    treatments: ['TMS Therapy', 'Esketamine (Spravato)', 'Psychedelic Therapy', 'Ketamine Therapy'],
    anchor: 'dr-bryson'
  },
  {
    id: 2,
    name: 'Lucia Arias Anaya',
    displayName: 'Lucia Arias',
    image: 'https://i.postimg.cc/FK2r499z/lucia.png',
    quote: 'Comprehensive, compassionate, and innovative treatments is our mission.',
    title: 'Software Developer & TMS Clinician',
    description: 'Lucia combines technical expertise with clinical care, specializing in TMS therapy and healthcare technology integration.',
    badges: ['Software Engineer', 'TMS Certified'],
    stats: [
      { icon: Zap, text: 'Tech Innovation' },
      { icon: Heart, text: 'Patient-Centered' }
    ],
    anchor: 'lucia-arias'
  },
  {
    id: 3,
    name: 'The Psyencia Team',
    displayName: 'The Psyencia Team',
    image: 'https://i.postimg.cc/T1xTKC5X/specialists.png',
    quote: 'Elevating wellbeing through excellence in treatment and care.',
    title: 'Multidisciplinary Healthcare Specialists',
    description: 'combining knowledge, compassion, and commitment to every healing journey',
    badges: ['Multidisciplinary', 'Evidence-Based'],
    stats: [
      { icon: Award, text: 'Expert Team' },
      { icon: Heart, text: 'Compassionate Care' }
    ],
    anchor: 'specialists'
  }
];

const Team = () => {
  const navigate = useNavigate();
  
  const handleClick = useCallback((anchor) => {
    navigate(`/aboutus#${anchor}`);
  }, [navigate]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-800 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 animate-fade-slide">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-medium animate-glow">team</span>
          </h2>
          <p className="text-purple-200 text-xl max-w-3xl mx-auto">
            Combining knowledge, compassion, and commitment to every healing journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Profile Image */}
              <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-purple-300/30 shadow-2xl mb-6 group-hover:ring-purple-300/50 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Name and Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                  {member.displayName}
                </h3>
                <p className="text-purple-200 font-medium text-sm mb-4">
                  {member.title}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.badges.map((badge, index) => (
                    <Badge key={index}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-purple-100 italic leading-relaxed mb-6 text-center text-sm">
                "{member.quote}"
              </p>

              {/* Description */}
              <p className="text-purple-200 text-sm leading-relaxed mb-6 text-center">
                {member.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {member.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 text-purple-200 text-xs">
                    <stat.icon className="h-4 w-4 text-purple-300" />
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-fade-slide {
          animation: fadeSlide 1s ease-out;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Team;