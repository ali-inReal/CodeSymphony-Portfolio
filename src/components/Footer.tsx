import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/codesymphony-inc/about/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:admin@codesymphony.tech', label: 'Email' }
  ];

  const footerLinks = {
    Services: [
      { name: 'Custom Software Development', action: () => scrollToSection('services') },
      { name: 'Mobile App Development', action: () => scrollToSection('services') }, 
      { name: 'Cloud Solutions', action: () => scrollToSection('services') },
      { name: 'Digital Transformation', action: () => scrollToSection('services') }
    ],
    Company: [
      
      { name: 'Home', action: () => {scrollToSection('home')} },
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Team', action: () => scrollToSection('team') },
      { name: 'Contact', action: () => scrollToSection('contact') },
      { name: 'Services', action: () => scrollToSection('services') }
      
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/companylogo.jpg" 
                alt="CodeSymphony Inc Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">CodeSymphony Inc</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering digital excellence through innovative software solutions. 
              We create technology that drives real business value and sustainable growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CodeSymphony Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;