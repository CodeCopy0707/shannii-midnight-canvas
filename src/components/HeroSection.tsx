
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
    // Subtitle animation
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    // CTA animation
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        gsap.to(parallax, {
          y: scrolled * 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Hi, I'm</span>
          <span className="block text-gradient animate-text-glow">Shannii</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-300 mb-8 font-mono max-w-2xl mx-auto"
        >
          Fullstack Developer & Web Designer crafting exceptional digital experiences with cutting-edge technologies
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </button>
          
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg transition-all duration-300 hover:bg-neon-cyan hover:text-dark-bg hover:shadow-lg hover:shadow-neon-cyan/25"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
