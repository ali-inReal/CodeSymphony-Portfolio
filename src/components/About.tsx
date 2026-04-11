import React from 'react';
import HUDTelemetry from './HUDTelemetry';
import MagneticWrapper from './MagneticWrapper';

const values = [
  {
    title: "Mission-Driven",
    description: "Every line of code we write is focused on achieving your business objectives and creating tangible value."
  },
  {
    title: "Collaborative",
    description: "We work as an extension of your team, ensuring transparency and alignment at every stage of the project."
  },
  {
    title: "Innovation-Focused",
    description: "Continuously exploring cutting-edge technologies to keep your business ahead of the curve."
  },
  {
    title: "Quality Excellence",
    description: "Rigorous standards and meticulous attention to detail ensure a superior end product every time."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex gap-4 mb-8">
              <HUDTelemetry label="MISSION_CONTROL" value="ESTABLISHED" />
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-8">
              About <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent italic-not">
                CodeSymphony
              </span>
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-8 font-light">
              CodeSymphony is a modern IT solutions company dedicated to turning complex code into beautiful solutions. Founded in 2025, we empower businesses to achieve their digital potential through innovation and excellence.
            </p>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-3xl">
                <h3 className="text-accent text-xs font-black tracking-widest uppercase mb-4">Our Vision</h3>
                <p className="text-white text-2xl font-medium tracking-tight">
                    "To be the trusted technology partner that empowers businesses to achieve their digital potential."
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <MagneticWrapper key={i} strength={15}>
                <div className="p-8 border border-white/5 rounded-[2rem] bg-[#111] hover:bg-accent/5 hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3 uppercase tracking-wider">{v.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>
                </div>
              </MagneticWrapper>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative pulse */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default About;
