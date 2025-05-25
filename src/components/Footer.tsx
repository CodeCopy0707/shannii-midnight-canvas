
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">Shannii</h3>
            <p className="text-gray-400 text-sm mt-1">Fullstack Developer & Web Designer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors duration-200">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shannii. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
