
import React from 'react';
import { ArrowRight, Download, Sparkles, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" data-scroll-section>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-medium rounded-full shadow-lg">
                  <Sparkles size={16} className="animate-pulse" />
                  Available for work
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none text-gray-900">
                <span className="block animate-fade-in-up">FULLSTACK</span>
                <span className="block animate-fade-in-up animation-delay-200">DEVELOPER</span>
                <span className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
                  <span className="text-gray-400">&</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DESIGNER</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
              I'm <span className="font-semibold text-gray-900">Shannii</span>, a passionate developer who creates 
              <span className="text-blue-600 font-medium"> exceptional digital experiences</span> through 
              innovative design and cutting-edge technology.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-800">
              {[
                { icon: Code, text: 'React & TypeScript' },
                { icon: Palette, text: 'UI/UX Design' },
                { icon: Sparkles, text: 'Modern Tech' }
              ].map((skill, index) => (
                <div key={skill.text} className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                  <skill.icon size={16} className="text-blue-600" />
                  {skill.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <Link 
                to="/portfolio"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 flex items-center justify-center gap-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/resume"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download size={20} />
                <span>View Resume</span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in-up animation-delay-1200">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                  alt="Shannii - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl -z-10 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-pink-400 to-red-500 rounded-3xl -z-10 animate-float animation-delay-1000"></div>
              
              {/* Floating Stats */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 animate-bounce-slow">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 animate-bounce-slow animation-delay-500">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
