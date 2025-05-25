
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-6">
              Available for work
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-none text-gray-900">
            FULLSTACK<br />
            DEVELOPER<br />
            <span className="text-gray-400">&</span><br />
            DESIGNER
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm Shannii, a passionate developer who creates exceptional digital experiences 
            through innovative design and cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/projects"
              className="group px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
