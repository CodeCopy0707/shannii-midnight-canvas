
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate fullstack developer with 5+ years of experience creating 
                digital solutions that combine beautiful design with powerful functionality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">Frontend: React, Vue, Angular</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">Backend: Node.js, Python, PHP</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">Database: MongoDB, PostgreSQL, MySQL</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Your Photo Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-gray-900 pl-8">
              <h3 className="text-2xl font-bold mb-2">Senior Fullstack Developer</h3>
              <p className="text-gray-600 mb-2">Tech Company • 2022 - Present</p>
              <p className="text-gray-700">Leading development of scalable web applications and mentoring junior developers.</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-8">
              <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
              <p className="text-gray-600 mb-2">Digital Agency • 2020 - 2022</p>
              <p className="text-gray-700">Developed responsive websites and web applications for various clients.</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-8">
              <h3 className="text-2xl font-bold mb-2">Junior Developer</h3>
              <p className="text-gray-600 mb-2">Startup • 2019 - 2020</p>
              <p className="text-gray-700">Built and maintained company's core product features.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
