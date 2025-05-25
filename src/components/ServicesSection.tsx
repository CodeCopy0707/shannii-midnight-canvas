
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks like React, Node.js, and cloud technologies.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Strategic guidance on technology choices, architecture decisions, and development best practices.',
      features: ['Architecture Planning', 'Code Review', 'Performance Optimization', 'Team Mentoring']
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
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative bg-dark-surface border border-gray-800 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center text-dark-bg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
              
              {/* Border Gradient Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-dark-surface border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
