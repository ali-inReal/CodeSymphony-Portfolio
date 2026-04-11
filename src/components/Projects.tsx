import React from 'react';
import MagneticWrapper from './MagneticWrapper';
import HUDTelemetry from './HUDTelemetry';
import lightningOsLogo from '../assets/lightning-os-logo.png';
import orderswala from '../assets/orderswala.jpeg';
import leadaspect from '../assets/leadaspect.png';
const projects = [
  {
    title: "LightningOS ",
    description: "LightningOS Fiber is a high-speed internet service provided by LightningOS  that utilizes fiber-optic technology to deliver symmetrical gigabit speeds for seamless streaming, gaming, and professional remote work.",
    tags: ["REACT", "NODE.JS"],
    image: lightningOsLogo,
    link: "https://lightningos.world/"
  },
  {
    title: "OrdersWala",
    description: "Orders Wala is a comprehensive business management platform designed to help retail, food, and e-commerce brands streamline their operations by providing integrated tools for order tracking, product management, and automated mobile app generation.",
    tags: ["FLUTTER"],
    image: orderswala,
    link: "https://orderswala.com/"
  },
  {
    title: "LeadAspect",
    description: "LeadAspect is a cutting-edge lead generation platform that leverages advanced analytics and AI to identify and nurture high-value prospects, ultimately driving revenue growth for businesses.",
    tags: ["REACT", "NODE.JS"],
    image: leadaspect,
    link: "https://leadaspect.com/"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="flex justify-center mb-6">
            <HUDTelemetry label="MOVEMENTS" value="SYNCHRONIZED" />
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 tracking-tighter">
            Featured Movements
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A selection of our most complex digital symphonies brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MagneticWrapper key={index} strength={20} proximity={120}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block z-space-card group relative bg-[#1a1a1a]/50 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 backdrop-blur-3xl cursor-pointer no-underline"
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex justify-end gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.6rem] font-black tracking-widest text-white/40 uppercase transition-all duration-500 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </a>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
