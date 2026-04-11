import React from 'react';
import MagneticWrapper from './MagneticWrapper';
import HUDTelemetry from './HUDTelemetry';
import maliImg from '../assets/mali.jpg';
import touseefImg from '../assets/touseef.jpg';
import hassanImg from '../assets/hassan.jpg';
import mohibImg from '../assets/mohib.jpg';
import finalImg from '../assets/final.jpg';
import jerryImg from '../assets/jerry.jpg';
import profile from '../assets/profile.jpg';
import toheedImg from '../assets/toheed.png';
const teamMembers = [
  {
    name: "Muhammad Ali",
    role: "Core Orchestrator",
    image: maliImg
  },
  {
    name: "Muhammad Touseef",
    role: "Lead Architect",
    image: touseefImg
  },
  {
    name: "Muhammad Talha Khan",
    role: "Technical Strategist",
    image: finalImg
  },
  {
    name: "Syed Jarar Haider",
    role: "System Engineer",
    image: jerryImg
  },
  {
    name: "Hassan Bilal Butt",
    role: "Platform Specialist",
    image: hassanImg
  },
  {
    name: "Hammad Ashfaq",
    role: "Interface Designer",
    image: profile
  },
  {
    name: "Mohib Ali",
    role: "Cloud Specialist",
    image: mohibImg
  },
  {
    name: "Toheed Ahmad",
    role: "Junior Developer",
    image: toheedImg
  }
];

const Team: React.FC = () => {
  return (
    <footer id="testimonials" className="bg-charcoal pt-24 pb-12 px-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20 relative">
          <div className="flex justify-center mb-6">
            <HUDTelemetry label="THE_ORCHESTRATORS" value="SYNCED" />
          </div>
          <h2 className="text-5xl lg:text-8xl font-heading font-black text-white mb-6 tracking-tighter">
            Our Expert <br /> Team
          </h2>
          <p className="text-white/40 text-xl mb-4 max-w-2xl font-light">
            Founded in 2025, CodeSymphony is home to elite engineers focused on mission-driven, collaborative innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, i) => (
            <MagneticWrapper key={i} strength={10} proximity={80}>
              <div 
                className="group relative p-8 bg-[#1a1a1a]/50 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:border-accent/30 hover:bg-[#1a1a1a] backdrop-blur-3xl cursor-pointer text-center"
              >
                {/* Background Glow */}
                <div className="absolute -inset-px bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700 -z-10" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 mx-auto"
                    />
                    <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/50 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl tracking-wide group-hover:text-accent transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-accent text-xs font-black tracking-[0.2em] uppercase mt-2">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </MagneticWrapper>
          ))}
        </div>


      </div>
    </footer>
  );
};

export default Team;
