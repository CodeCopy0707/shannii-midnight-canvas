
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-COMMERCE PLATFORM',
      subtitle: 'Full-stack Solution',
      year: '2024',
      description: 'Complete e-commerce ecosystem with React, Node.js, and Stripe integration. Features real-time inventory management, advanced user authentication, and comprehensive admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'LUCID MODE',
      subtitle: 'Real-time Chat App',
      year: '2024',
      description: 'Scalable messaging platform with WebSocket integration, end-to-end encryption, file sharing capabilities, and real-time presence indicators.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'FILE NOT FOUND',
      subtitle: 'AI Analytics Dashboard',
      year: '2023',
      description: 'Intelligent analytics platform with machine learning insights, predictive modeling, and interactive data visualization components.',
      image: '/placeholder.svg',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Data Science'
    },
    {
      id: 4,
      title: 'COMES BACK',
      subtitle: 'Task Management',
      year: '2023',
      description: 'Collaborative project management suite with drag-and-drop interface, time tracking, team collaboration, and advanced reporting.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Productivity'
    },
    {
      id: 5,
      title: 'CALLAWAY',
      subtitle: 'Brand Identity',
      year: '2023',
      description: 'Complete brand redesign and digital presence overhaul including logo design, website development, and marketing materials.',
      image: '/placeholder.svg',
      technologies: ['Figma', 'React', 'GSAP', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Design'
    },
    {
      id: 6,
      title: 'TRIMMING JUNGLE',
      subtitle: 'Creative Portfolio',
      year: '2023',
      description: 'Interactive portfolio website with advanced animations, 3D elements, and immersive user experience design.',
      image: '/placeholder.svg',
      technologies: ['Three.js', 'React', 'Framer Motion', 'WebGL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Creative'
    }
  ];

  useEffect(() => {
    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    
    projectCards?.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <section id="projects" ref={sectionRef} className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-6xl sm:text-8xl font-bold text-foreground mb-4 tracking-tight uppercase">
                PROJECTS
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-lg font-mono">
                SELECTED WORK
              </p>
              <p className="text-primary font-bold text-xl">
                2023 - 2024
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card group relative ${
                index % 2 === 0 ? '' : 'ml-auto'
              } ${project.featured ? 'lg:w-full' : 'lg:w-4/5'}`}
            >
              <div className="relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Project Number */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-6xl font-bold text-muted group-hover:text-muted-foreground transition-colors duration-300">
                    {project.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-96 lg:h-80 overflow-hidden ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    
                    {/* Overlay Links */}
                    <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.liveUrl}
                        className="p-3 bg-background/80 backdrop-blur-sm text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="p-3 bg-background/80 backdrop-blur-sm text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-200"
                      >
                        <Code size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div className="mb-4">
                      <span className="text-primary text-sm font-mono tracking-wider uppercase">
                        {project.category} • {project.year}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight uppercase">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg mb-6 font-mono">
                      {project.subtitle}
                    </p>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-6">
                      <a 
                        href={project.liveUrl}
                        className="text-primary hover:text-foreground transition-colors duration-200 font-medium text-sm flex items-center gap-2 uppercase tracking-wider group/link"
                      >
                        <span>View Live</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm flex items-center gap-2 uppercase tracking-wider group/link"
                      >
                        <span>Source Code</span>
                        <Code size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Let's Talk Section */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-foreground mb-8 tracking-tight uppercase">
            LET'S TALK
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              WE LOVE WORKING ALONGSIDE AMBITIOUS BRANDS AND PEOPLE. 
              IF YOU'D LIKE US TO BUILD SOMETHING GREAT TOGETHER
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-transparent border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground uppercase tracking-wider text-sm"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
