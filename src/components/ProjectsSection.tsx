
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with WebSocket integration, message encryption, and file sharing capabilities.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Modern analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.',
      image: '/placeholder.svg',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Collaborative project management tool with drag-and-drop interface, time tracking, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  useEffect(() => {
    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    
    projectCards?.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card group relative bg-dark-surface border border-gray-800 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-dark-bg/80 backdrop-blur-sm rounded-lg text-neon-cyan hover:text-white hover:bg-neon-cyan/20 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-dark-bg/80 backdrop-blur-sm rounded-lg text-neon-cyan hover:text-white hover:bg-neon-cyan/20 transition-colors duration-200"
                  >
                    <Code size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="text-neon-cyan hover:text-white transition-colors duration-200 font-medium text-sm flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-200 font-medium text-sm flex items-center gap-1"
                  >
                    <Code size={16} />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
