import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Scroll-triggered animation for the video frame
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // Optimized handler for iframe load event
  const handleVideoLoad = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Handle iframe error
  const handleVideoError = useCallback(() => {
    console.warn('Video failed to load');
    setLoading(false);
  }, []);

  // Fallback timeout to hide loading state
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 5 second fallback

    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Loading overlay */}
      {loading && (
        <div className="flex flex-col items-center justify-center absolute z-[100] h-dvh w-screen bg-violet-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-blue-600 text-lg">Loading…</p>
        </div>
      )}

      {/* Hero main frame */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-950"
      >
        {/* Background video container */}
        <div className="absolute inset-0 bg-[#012448] opacity-50">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto scale-150">
            <iframe 
              src="https://www.youtube.com/embed/LHOs49jHJ4c?autoplay=1&mute=1&loop=1&playlist=nEHlcAANoC4&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1&vq=hd1080"
              title="Hero Video - Psyencia Mental Health"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute left-0 top-0 w-full h-full object-cover"
              onLoad={handleVideoLoad}
              onError={handleVideoError}
              loading="lazy"
            />
          </div>
        </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-40">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative h-full flex flex-col justify-center px-8 sm:px-20">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-100 leading-tight mb-6">
                Empowering Minds,{" "}
                <span className="text-white font-black">Transforming</span> Lives
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
                At Psyencia, we reimagine mental health care by combining cutting-edge neuroscience, 
                innovative treatments, and compassionate care to deliver personalized healing for every patient.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-slate-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-label="Scroll down"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;