
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      year: '2024',
      description: 'Complete e-commerce ecosystem with React, Node.js, and Stripe integration. Features real-time inventory management and comprehensive admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Chat Application',
      category: 'Mobile App',
      year: '2024',
      description: 'Real-time messaging platform with WebSocket integration, end-to-end encryption, and file sharing capabilities.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Data Science',
      year: '2023',
      description: 'Intelligent analytics platform with machine learning insights and interactive data visualization components.',
      image: '/placeholder.svg',
      technologies: ['React', 'Python', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Task Management',
      category: 'Productivity',
      year: '2023',
      description: 'Collaborative project management suite with drag-and-drop interface and advanced reporting.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in full-stack development and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 font-medium">
                    {project.category} • {project.year}
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
