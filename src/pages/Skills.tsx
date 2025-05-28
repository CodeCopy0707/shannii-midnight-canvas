
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces",
      skills: [
        { name: "React", level: 95, description: "Advanced hooks, context, performance optimization" },
        { name: "TypeScript", level: 90, description: "Type-safe development and advanced patterns" },
        { name: "Vue.js", level: 85, description: "Composition API, Vuex, and Vue ecosystem" },
        { name: "Angular", level: 80, description: "Components, services, and RxJS" },
        { name: "HTML5/CSS3", level: 95, description: "Semantic markup and modern CSS" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first responsive design" },
        { name: "Sass/SCSS", level: 85, description: "Advanced styling and mixins" },
        { name: "JavaScript ES6+", level: 95, description: "Modern JavaScript features and patterns" }
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable server-side applications",
      skills: [
        { name: "Node.js", level: 90, description: "Express, NestJS, and microservices" },
        { name: "Python", level: 85, description: "Django, FastAPI, and data processing" },
        { name: "PHP", level: 80, description: "Laravel and modern PHP practices" },
        { name: "Java", level: 75, description: "Spring Boot and enterprise applications" },
        { name: "RESTful APIs", level: 95, description: "API design and documentation" },
        { name: "GraphQL", level: 80, description: "Schema design and query optimization" },
        { name: "Microservices", level: 85, description: "Distributed system architecture" },
        { name: "WebSocket", level: 80, description: "Real-time communication" }
      ]
    },
    {
      title: "Database & Cloud",
      description: "Data management and cloud infrastructure",
      skills: [
        { name: "MongoDB", level: 90, description: "Document database design and optimization" },
        { name: "PostgreSQL", level: 85, description: "Relational database and complex queries" },
        { name: "MySQL", level: 85, description: "Database optimization and administration" },
        { name: "Redis", level: 80, description: "Caching and session management" },
        { name: "AWS", level: 85, description: "EC2, S3, Lambda, and CloudFormation" },
        { name: "Docker", level: 90, description: "Containerization and orchestration" },
        { name: "Firebase", level: 80, description: "Real-time database and authentication" },
        { name: "Supabase", level: 85, description: "Backend as a service platform" }
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Development workflow and deployment automation",
      skills: [
        { name: "Git", level: 95, description: "Version control and collaboration" },
        { name: "GitHub Actions", level: 85, description: "CI/CD pipeline automation" },
        { name: "Webpack", level: 80, description: "Module bundling and optimization" },
        { name: "Vite", level: 90, description: "Fast build tool and development server" },
        { name: "Jest", level: 85, description: "Unit and integration testing" },
        { name: "Cypress", level: 80, description: "End-to-end testing" },
        { name: "Linux", level: 85, description: "Server administration and scripting" },
        { name: "Nginx", level: 80, description: "Web server and reverse proxy" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and certifications 
              gained through years of hands-on development experience.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div 
                            className="bg-gray-900 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technologies Timeline */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Technology Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
              <div className="space-y-12">
                {[
                  { year: "2024", tech: "AI/ML Integration", description: "Started incorporating AI tools and machine learning into web applications" },
                  { year: "2023", tech: "Cloud Architecture", description: "Specialized in AWS and microservices architecture" },
                  { year: "2022", tech: "Full-Stack Mastery", description: "Achieved proficiency in end-to-end development" },
                  { year: "2021", tech: "Modern Frameworks", description: "Mastered React, Vue.js, and modern development tools" },
                  { year: "2020", tech: "Backend Development", description: "Expanded into Node.js and database management" },
                  { year: "2019", tech: "Frontend Foundation", description: "Started with HTML, CSS, and JavaScript" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className="inline-block">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{item.tech}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
