
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-6">
                Available for work
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-none text-gray-900">
              FULLSTACK<br />
              DEVELOPER<br />
              <span className="text-gray-400">&</span><br />
              DESIGNER
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              I'm Shannii, a passionate developer who creates exceptional digital experiences 
              through innovative design and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/portfolio"
                className="group px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 rounded-lg"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/resume"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 rounded-lg"
              >
                <Download size={20} />
                View Resume
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                alt="Shannii - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-900 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
