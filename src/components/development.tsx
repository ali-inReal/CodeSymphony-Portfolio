import React from 'react';
import technicalBg from '../assets/technical-bg.png';
import MagneticWrapper from './MagneticWrapper';
import HUDTelemetry from './HUDTelemetry';

const Development: React.FC = () => {
  const expertise = [
    {
      id: 'custom_software',
      title: 'Custom Software Development',
      description: 'Tailored solutions including Web Applications, Enterprise Software, and API Development designed for your specific needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'mobile_dev',
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android using React Native, delivering seamless mobile experiences.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'cloud_solutions',
      title: 'Cloud Solutions',
      description: 'Infrastructure, migration, DevOps, and Microservices on AWS, Azure, and GCP for global scalability.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 'digital_transformation',
      title: 'Digital Transformation',
      description: 'Strategic guidance for process automation, legacy modernization, and digital strategy consulting.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 px-8 bg-charcoal overflow-hidden font-sans">
      {/* Background with Grid Image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${technicalBg})` }}
      />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <HUDTelemetry label="KNOWLEDGE_BASE" value="CONNECTED" />
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter leading-tight">
            The Instruments of <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {expertise.map((item) => (
            <MagneticWrapper key={item.id} strength={20} proximity={150}>
              <div className="group relative h-full cursor-pointer">
                {/* Blueprint Snapping System - Visible on Hover */}
                <div className="absolute -inset-8 pointer-events-none overflow-visible">
                  {/* Vertical Snapping Lines */}
                  <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-accent/5 opacity-0 group-hover:opacity-100 group-hover:bg-accent/20 -translate-x-10 group-hover:translate-x-0 transition-all duration-700 ease-out" />
                  <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-accent/5 opacity-0 group-hover:opacity-100 group-hover:bg-accent/20 translate-x-10 group-hover:translate-x-0 transition-all duration-700 ease-out" />
                  
                  {/* Horizontal Snapping Lines */}
                  <div className="absolute top-8 left-0 right-0 h-[1px] bg-accent/5 opacity-0 group-hover:opacity-100 group-hover:bg-accent/20 -translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-out" />
                  <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-accent/5 opacity-0 group-hover:opacity-100 group-hover:bg-accent/20 translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-out" />

                  {/* Corner Telemetry Snaps */}
                  <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 delay-100" />
                  <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 delay-100" />
                  <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 delay-100" />
                  <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 delay-100" />

                  {/* Coordinate Markers */}
                  <div className="absolute top-4 left-8 text-[0.5rem] font-mono text-accent/0 group-hover:text-accent/40 transition-all duration-700 delay-200 uppercase">
                    TRK_{item.id.substring(0, 3)}_01
                  </div>
                  <div className="absolute bottom-4 right-8 text-[0.5rem] font-mono text-accent/0 group-hover:text-accent/40 transition-all duration-700 delay-200 uppercase text-right">
                    SYS_ENG_L2
                  </div>
                </div>

                {/* Main Card Body */}
                <div 
                  className="relative p-12 bg-white/[0.01] border border-white/[0.05] rounded-[2.5rem] backdrop-blur-3xl transition-all duration-700 group-hover:bg-white/[0.03] group-hover:border-accent/30 h-full overflow-hidden"
                >
                  {/* Corner Accent Icon */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div className="mb-8">
                    <div className="text-accent/40 mb-3 font-mono text-[0.6rem] tracking-[0.3em] uppercase transition-all duration-500 group-hover:text-accent">
                      {item.id.replace('_', ' ')}
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:tracking-wide transition-all duration-500">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/30 leading-relaxed text-sm md:text-lg max-w-sm transition-colors duration-500 group-hover:text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-12 flex items-center gap-4 opacity-0 -translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
                     <span className="text-[0.6rem] font-bold tracking-[0.2em] text-accent uppercase">Learn Architecture</span>
                     <div className="w-8 h-[1px] bg-accent"></div>
                  </div>

                  {/* Inner Glow Pulse */}
                  <div className="absolute -inset-px rounded-[2.5rem] bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-700 -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                </div>
              </div>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
