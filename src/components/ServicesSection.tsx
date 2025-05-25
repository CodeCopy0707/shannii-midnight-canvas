
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, Settings, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks like React, Node.js, and cloud technologies.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment'],
      number: '01'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Design Systems'],
      number: '02'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Strategic guidance on technology choices, architecture decisions, and development best practices.',
      features: ['Architecture Planning', 'Code Review', 'Performance Optimization', 'Team Mentoring'],
      number: '03'
    }
  ];

  useEffect(() => {
    const serviceCards = sectionRef.current?.querySelectorAll('.service-card');
    
    serviceCards?.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-8xl font-bold text-white mb-8 tracking-tight uppercase">
            SERVICES
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative bg-dark-bg border border-gray-800 p-12 hover:border-neon-cyan/50 transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-gray-800 group-hover:text-neon-cyan/20 transition-colors duration-300">
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 border-2 border-gray-600 flex items-center justify-center text-gray-600 group-hover:border-neon-cyan group-hover:text-neon-cyan transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-neon-cyan transition-colors duration-300 tracking-wide uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1 h-1 bg-neon-cyan mr-4"></div>
                    <span className="tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Brand Values Section */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
            Brand Values
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
              WE LOVE WORKING ALONGSIDE{' '}
              <span className="text-neon-cyan font-semibold">AMBITIOUS BRANDS</span>{' '}
              AND PEOPLE.{' '}
              <span className="text-gray-500">
                IF YOU'D LIKE US TO BUILD SOMETHING GREAT TOGETHER
              </span>
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 px-12 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold transition-all duration-300 hover:bg-neon-cyan hover:text-dark-bg uppercase tracking-wider text-sm group"
            >
              <span className="flex items-center gap-2">
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
