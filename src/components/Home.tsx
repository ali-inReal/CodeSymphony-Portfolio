import React from 'react';
import coreImage from '../assets/orchestrated-core.png';
import HUDTelemetry from './HUDTelemetry';
import MagneticWrapper from './MagneticWrapper';

const Home: React.FC = () => {
  return (
    <div className="relative w-full bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Wrapper */}
      <div className="relative h-screen min-h-[800px] w-full flex flex-col items-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100 transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url(${coreImage})` }}
      ></div>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

      {/* Live Telemetry HUD */}
      <div className="absolute top-32 left-8 z-30 hidden lg:flex flex-col gap-2">
        <HUDTelemetry label="SYSTEM_STATUS" value="OPTIMIZED" />
        <HUDTelemetry label="LATENCY" value="12ms" />
        <HUDTelemetry label="UPLINK" value="SECURE" />
      </div>
      <div className="absolute top-32 right-8 z-30 hidden lg:flex flex-col gap-2">
        <HUDTelemetry label="ENVIRONMENT" value="STABLE" />
        <HUDTelemetry label="CORE_LOAD" value="1.04%" />
        <HUDTelemetry label="BUFFER" value="MINIMAL" />
      </div>

      <div className="absolute bottom-32 right-12 z-30 hidden lg:block">
        <HUDTelemetry label="SYNTHESIS" value="MODE_ELITE" />
      </div>

      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
        <nav className="flex justify-between items-center px-8 py-3 max-w-6xl w-full backdrop-blur-3xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_15px_#70a1ff]"></div>
            <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              CODE SYMPHONY
            </span>
          </div>
          
          <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase text-white/50">
            <a href="#about" className="hover:text-accent transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              About
            </a>
            <a href="#services" className="hover:text-accent transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l-1.75-4M12 3v4m0 0l-2.5 2.5M12 7l2.5 2.5M21 12h-4m0 0l-2.5-2.5M17 12l-2.5 2.5M3 12h4m0 0l2.5-2.5M7 12l2.5 2.5"/></svg>
              Services
            </a>
            <a href="#portfolio" className="hover:text-accent transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="7" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4"/></svg>
              Portfolio
            </a>
            <a href="#process" className="hover:text-accent transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Process
            </a>
            <a href="#testimonials" className="hover:text-accent transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75"/></svg>
              Team
            </a>
          </div>

          <div>
            <MagneticWrapper strength={15}>
              <button
                className="bg-white text-black px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5M16 3v4M8 3v4"/></svg>
                  Contact
                </span>
              </button>
            </MagneticWrapper>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <main className="relative z-30 flex-1 flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div className="mb-8 overflow-hidden">
          <div className="inline-block py-1.5 px-4 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-3xl">
            <p className="text-[0.6rem] tracking-[0.3em] font-bold text-accent uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00E5FF]"></span>
              Orchestrating The Future
            </p>
          </div>
        </div>
        
        <div className="perspective-1000 group">
            <h1 className="text-6xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter mb-10 font-heading relative transition-all duration-500 ease-out group-hover:scale-105"
                style={{
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="absolute -inset-4 bg-accent/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <span className="relative inline-block text-white mb-2 italic-not group-hover:[transform:rotateY(10deg)_translateZ(50px)] transition-transform duration-500">
                    CODE 
                    <span className="absolute inset-0 text-accent/20 [transform:translateZ(-20px)] group-hover:opacity-100 opacity-0 blur-sm pointer-events-none">CODE</span>
                </span> <br />
                <span className="relative bg-gradient-to-r from-[#70a1ff] via-[#00f2ff] to-[#70a1ff] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(112,161,255,0.5)] animate-gradient-x inline-block group-hover:[transform:rotateY(-10deg)_translateZ(80px)] transition-transform duration-500">
                    SYMPHONY
                    <span className="absolute inset-0 bg-gradient-to-r from-[#70a1ff] via-[#00f2ff] to-[#70a1ff] bg-clip-text text-transparent [transform:translateZ(-40px)] group-hover:opacity-50 opacity-0 blur-md pointer-events-none">SYMPHONY</span>
                </span>
            </h1>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-accent uppercase tracking-[0.2em] mb-4">
            Turning Complex Code into Beautiful Solutions
          </h2>
        </div>
        
        <p className="text-lg md:text-2xl text-white/40 leading-relaxed mb-12 max-w-4xl mx-auto font-light tracking-tight">
          We deliver innovative software solutions that transform your business challenges into <br className="hidden md:block" />
          <span className="text-white/80 font-medium">competitive advantages</span> through cutting-edge technology and exceptional user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <MagneticWrapper strength={40}>
            <button
              className="group relative px-12 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Journey
            </button>
          </MagneticWrapper>
          <MagneticWrapper strength={30}>
            <button
              className="group px-12 py-5 border border-white/10 rounded-xl font-black text-sm uppercase tracking-widest backdrop-blur-3xl transition-all duration-300 hover:border-white/40 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                const projectSection = document.getElementById('portfolio');
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </MagneticWrapper>
        </div>
      </main>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[140%] h-[300px] bg-accent/10 blur-[150px] rounded-[100%] z-10 pointer-events-none"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
        <span className="text-[0.5rem] tracking-[0.5em] font-bold text-white/30 uppercase">Scroll</span>
      </div>
        </div>
      </div>

      
    
  );
};

export default Home;
