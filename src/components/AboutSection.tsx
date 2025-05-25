
import React from 'react';

const AboutSection = () => {
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

  return (
    <section id="about" className="py-24 bg-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technologies I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 overflow-hidden">
                    <div 
                      className="h-full bg-gray-900"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h4>
                <p className="text-gray-600 mb-6">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
