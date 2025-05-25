
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'AWS/Cloud', level: 80 },
    { name: 'Docker', level: 78 },
    { name: 'GraphQL', level: 75 },
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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge design and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="about-text">
            <h3 className="text-2xl font-bold text-white mb-6">Crafting Digital Experiences</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
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
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Technologies I Use</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 bg-dark-surface border border-neon-cyan/30 text-neon-cyan text-sm rounded-full hover:bg-neon-cyan/10 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-neon-cyan font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                  <div 
                    className="skill-bar h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full relative"
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
