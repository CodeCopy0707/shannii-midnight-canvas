
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB featuring payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Web Development",
      year: "2024",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Socket.io", "Express", "PostgreSQL", "Docker"],
      category: "SaaS Application",
      year: "2024",
      featured: true
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation platform for restaurants with table management, customer notifications, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tech: ["Angular", "Firebase", "Material UI", "PWA"],
      category: "Business Solution",
      year: "2023",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive analytics platform for social media management with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      category: "Analytics Platform",
      year: "2023",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, progress tracking, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tech: ["Next.js", "Prisma", "AWS", "Stripe", "WebRTC"],
      category: "EdTech Solution",
      year: "2023",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool with natural language processing and automated workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "OpenAI"],
      category: "AI/ML Application",
      year: "2024",
      featured: true
    }
  ];

  const categories = ["All", "Web Development", "SaaS Application", "Business Solution", "Analytics Platform", "EdTech Solution", "AI/ML Application"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects showcasing expertise in fullstack development, 
              modern technologies, and innovative solutions for complex business challenges.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {projects.filter(p => p.featured).slice(0, 2).map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full">{project.category}</span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <CardTitle className="mb-4 text-2xl">{project.title}</CardTitle>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full transition-all duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{project.category}</span>
                  </div>
                  <CardTitle className="mb-3 text-lg">{project.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
