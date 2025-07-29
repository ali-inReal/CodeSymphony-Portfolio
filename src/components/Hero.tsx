import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turning Complex Code into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              {' '}Beautiful Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            We deliver innovative software solutions that transform your business challenges into 
            competitive advantages through cutting-edge technology and exceptional user experiences.
          </p>
          
        </div>

        
      </div>

     
    </section>
  );
};

export default Hero;