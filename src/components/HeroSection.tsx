
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Simple fade in animations
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background">
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight text-foreground"
        >
          <span className="block">FULLSTACK</span>
          <span className="block">DEVELOPER</span>
          <span className="block text-muted-foreground">&</span>
          <span className="block">WEB DESIGNER</span>
        </h1>
        
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-border w-32"></div>
          <ArrowRight className="mx-4 text-muted-foreground" size={24} />
          <div className="h-px bg-border w-32"></div>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl text-muted-foreground mb-12 font-mono max-w-3xl mx-auto leading-relaxed"
        >
          Hi, I'm <span className="text-foreground font-semibold">Shannii</span> — Creating exceptional digital experiences 
          with cutting-edge technologies and innovative design solutions
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="group relative px-12 py-4 bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 uppercase tracking-wider text-sm"
          >
            <span className="relative z-10">Explore Work</span>
          </button>
          
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-transparent border-2 border-border text-foreground font-semibold transition-all duration-300 hover:bg-muted uppercase tracking-wider text-sm"
          >
            Let's Talk
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
