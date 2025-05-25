
import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture, secure APIs, and efficient database management.',
      features: ['RESTful APIs', 'Database Optimization', 'Cloud Deployment', 'Security Implementation']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that deliver native performance and seamless user experiences.',
      features: ['React Native', 'Progressive Web Apps', 'Mobile Optimization', 'App Store Deployment']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life with expertise and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-900 mr-3"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch to discuss your ideas.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
