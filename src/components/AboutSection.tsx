
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      number: '01',
      title: 'OUTSTANDING FRONTEND',
      description: 'Multiple backgrounds, personalities and expertise from all over the world come together to form leading-edge digital stellar capabilities.'
    },
    {
      number: '02',
      title: 'DRIVEN BY PASSION',
      description: 'We love what we do. Our team is always on the lookout for the latest cutting-edge technologies to streamline our clients\' projects.'
    },
    {
      number: '03',
      title: 'PART OF YOUR TEAM',
      description: 'Our team works together with your team to deliver the best possible experience for your users. Teamwork all the way.'
    }
  ];

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'AWS/Cloud', level: 80 }
  ];

  const tools = [
    'React', 'Next.js', 'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 
    'MongoDB', 'Redis', 'Docker', 'AWS', 'Vercel', 'Git', 'Figma'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skillBars = skillsRef.current?.querySelectorAll('.skill-bar');

    if (section) {
      gsap.fromTo(section.querySelector('.about-text'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );

      skillBars?.forEach((bar, index) => {
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-6xl sm:text-8xl font-bold text-white mb-8 tracking-tight uppercase">
            BRANDING<br />
            <span className="text-gray-600">AND WEBSITE</span><br />
            <span className="text-gradient">REDESIGN</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue mb-8"></div>
          <div className="max-w-2xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              We are mobile app and web development company with offices in Los Angeles, San Francisco, New York 
              and Prague creating apps for the top US startups and well established brands.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <div className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-600 font-mono text-sm group-hover:border-neon-cyan group-hover:text-neon-cyan transition-colors duration-300">
                  No.<br />{service.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wider uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="about-text">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-wide uppercase">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate fullstack developer and web designer with over 5 years of experience 
                creating exceptional digital experiences. My journey began with a fascination for how 
                technology can solve real-world problems and create meaningful connections.
              </p>
              <p>
                I specialize in building scalable web applications using modern technologies like React, 
                Node.js, and cloud platforms. My design background allows me to bridge the gap between 
                beautiful user interfaces and robust functionality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">
                Technologies I Use
              </h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-transparent border border-gray-600 text-gray-400 text-sm hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-200 uppercase tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-12 tracking-wide uppercase">
              Skills & Expertise
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium tracking-wider uppercase text-sm">
                    {skill.name}
                  </span>
                  <span className="text-neon-cyan font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-px bg-gray-800 overflow-hidden">
                  <div 
                    className="skill-bar h-full bg-gradient-to-r from-neon-cyan to-neon-blue relative"
                    style={{ width: '0%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-50 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
