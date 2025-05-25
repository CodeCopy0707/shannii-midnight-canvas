
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
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
    <section id="services" ref={sectionRef} className="py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-8xl font-bold text-foreground mb-8 tracking-tight uppercase">
            SERVICES
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative bg-card border border-border p-12 hover:border-primary/50 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-muted group-hover:text-muted-foreground transition-colors duration-300">
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 border-2 border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300 tracking-wide uppercase">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-primary mr-4"></div>
                    <span className="tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Values Section */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-foreground mb-8 tracking-tight uppercase">
            Brand Values
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-light">
              WE LOVE WORKING ALONGSIDE{' '}
              <span className="text-primary font-semibold">AMBITIOUS BRANDS</span>{' '}
              AND PEOPLE.{' '}
              <span className="text-muted-foreground">
                IF YOU'D LIKE US TO BUILD SOMETHING GREAT TOGETHER
              </span>
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 px-12 py-4 bg-transparent border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground uppercase tracking-wider text-sm group"
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
