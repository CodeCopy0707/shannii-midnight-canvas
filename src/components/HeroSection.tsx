
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Year animation
    tl.fromTo(yearRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )
    // Title animation with stagger
    .fromTo(titleRef.current?.children || [], 
      { opacity: 0, y: 100, rotationX: -90 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out", stagger: 0.1 }
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

      {/* Year indicator */}
      <div ref={yearRef} className="absolute top-20 left-8 text-gray-500 font-mono text-sm tracking-wider">
        Selected Work 2023 - 2024
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight"
        >
          <span className="block text-white">FULLSTACK</span>
          <span className="block text-gradient animate-text-glow">DEVELOPER</span>
          <span className="block text-white/80">&</span>
          <span className="block text-gradient">WEB DESIGNER</span>
        </h1>
        
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-32"></div>
          <ArrowRight className="mx-4 text-neon-cyan" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-32"></div>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-400 mb-12 font-mono max-w-3xl mx-auto leading-relaxed"
        >
          Hi, I'm <span className="text-neon-cyan font-semibold">Shannii</span> — Creating exceptional digital experiences 
          with cutting-edge technologies and innovative design solutions
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="group relative px-12 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold rounded-none transition-all duration-300 hover:bg-neon-cyan hover:text-dark-bg uppercase tracking-wider text-sm"
          >
            <span className="relative z-10">Explore Work</span>
          </button>
          
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-semibold rounded-none transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/25 uppercase tracking-wider text-sm"
          >
            Let's Talk
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
