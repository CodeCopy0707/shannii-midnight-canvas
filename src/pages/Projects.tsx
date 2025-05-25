
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "Project Screenshot 1",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "Project Screenshot 2", 
      tech: ["Vue.js", "Socket.io", "Express", "PostgreSQL"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and animations",
      image: "Project Screenshot 3",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation system for restaurants with admin dashboard",
      image: "Project Screenshot 4",
      tech: ["Angular", "Firebase", "Material UI", "PWA"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "Project Screenshot 5",
      tech: ["React", "D3.js", "Python", "FastAPI"]
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management and video streaming",
      image: "Project Screenshot 6",
      tech: ["Next.js", "Prisma", "AWS", "Stripe"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in fullstack development, 
              from simple websites to complex web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-500">{project.image}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3">{project.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
