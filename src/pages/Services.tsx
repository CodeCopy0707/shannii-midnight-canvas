
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
    },
    {
      title: "Frontend Development", 
      description: "Beautiful and interactive user interfaces that provide excellent user experience.",
      features: ["React/Vue/Angular", "Modern CSS", "Component Libraries", "State Management"]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and database management.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Integration"]
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment and maintenance.",
      features: ["Complete Web Apps", "DevOps Setup", "Deployment", "Ongoing Support"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approach to create intuitive and engaging interfaces.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      title: "Consulting",
      description: "Technical consultation and code review to improve your existing projects.",
      features: ["Code Audit", "Performance Review", "Architecture Planning", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive web development services to help bring your ideas to life 
              with modern technology and exceptional quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <section className="mt-20 bg-gray-50 rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-3xl font-bold mb-6">$2,500<span className="text-lg font-normal text-gray-600">/project</span></p>
                <ul className="space-y-3 mb-8">
                  <li>Single Page Application</li>
                  <li>Responsive Design</li>
                  <li>Basic SEO</li>
                  <li>1 Month Support</li>
                </ul>
                <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg border-2 border-gray-900">
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <p className="text-3xl font-bold mb-6">$5,000<span className="text-lg font-normal text-gray-600">/project</span></p>
                <ul className="space-y-3 mb-8">
                  <li>Multi-page Application</li>
                  <li>Backend Integration</li>
                  <li>Database Setup</li>
                  <li>3 Months Support</li>
                </ul>
                <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-6">$10,000+<span className="text-lg font-normal text-gray-600">/project</span></p>
                <ul className="space-y-3 mb-8">
                  <li>Complex Web Application</li>
                  <li>Advanced Features</li>
                  <li>DevOps & Deployment</li>
                  <li>6 Months Support</li>
                </ul>
                <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
