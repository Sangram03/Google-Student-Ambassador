import React, { useState } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-900">AI Ambassador Referral</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">AI Projects</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">About Me</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
            <button 
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Get Referral</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">AI Projects</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Team</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-left px-3 py-2 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
              >
                Get Referral
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;