import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame } from 'framer-motion';
import HUDTelemetry from './HUDTelemetry';
import MagneticWrapper from './MagneticWrapper';
import NeuralLink from './NeuralLink';

const steps = [
  {
    number: "01",
    badge: "AUDIT LEVEL 1",
    title: "Discovery",
    description: "Deep diving into your core logic and project requirements.",
    footerBadge: "100% Logic Sync"
  },
  {
    number: "02",
    badge: "UX FLOW: A+",
    title: "Design",
    description: "Composing the visual language and user journey mapping.",
    footerBadge: "High-Fidelity"
  },
  {
    number: "03",
    badge: "CLEAN CODE: A+",
    title: "Development",
    description: "Translating designs into high-performance, executable code.",
    footerBadge: "CI/CD Active"
  },
  {
    number: "04",
    badge: "99.9% UPTIME",
    title: "QA",
    description: "Rigorous testing to ensure every note is perfectly tuned.",
    footerBadge: "Zero Defect"
  },
  {
    number: "05",
    badge: "SCALE: 10X",
    title: "Launch",
    description: "Global orchestration and deployment to live environments.",
    footerBadge: "Global CDN"
  },
  {
    number: "06",
    badge: "LEGACY SUPPORT",
    title: "Support",
    description: "Continuous optimization and performance maintenance.",
    footerBadge: "24/7 Monitoring"
  }
];

const MethodologyPulse = ({ index, total }: { index: number, total: number }) => {
  if (index >= total - 1) return null;
  
  const { scrollYProgress } = useScroll();
  const velocity = useVelocity(scrollYProgress);
  const pulseSpeed = useTransform(velocity, [-2, 0, 2], [10, 2, 10]);
  const smoothPulseSpeed = useSpring(pulseSpeed, { stiffness: 100, damping: 30 });
  const [offset, setOffset] = React.useState(0);

  useAnimationFrame((time, delta) => {
    const speedFactor = smoothPulseSpeed.get();
    setOffset(prev => (prev + (delta * 0.05 * speedFactor)) % 200);
  });

  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none">
        <svg className="w-full h-full overflow-visible">
            <line 
                x1="0.5" y1="0" x2="0.5" y2="100%" 
                stroke="rgba(0, 229, 255, 0.1)" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
            />
            <motion.line
                x1="0.5" y1="0" x2="0.5" y2="100%"
                stroke="#00E5FF"
                strokeWidth="2"
                strokeDasharray="20 180"
                style={{
                    strokeDashoffset: -offset
                }}
            />
        </svg>
    </div>
  );
};

const StepItem = ({ step, index, total }: { step: any, index: number, total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const distance = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const smoothDistance = useSpring(distance, { stiffness: 100, damping: 30 });

  const scale = useTransform(smoothDistance, [0, 1], [1.05, 0.9]);
  const opacity = useTransform(smoothDistance, [0, 1], [1, 0.4]);

  return (
    <div ref={containerRef} className="h-full relative">
      <div className="absolute left-10 top-0 bottom-0 z-0">
          <MethodologyPulse index={index} total={total} />
      </div>

      <MagneticWrapper proximity={120} strength={25}>
        <NeuralLink>
            <motion.div 
                style={{ 
                    scale, 
                    opacity,
                }}
                className="relative flex gap-8 group p-8 rounded-3xl overflow-hidden"
            >
                {/* Connector Dot */}
                <div className="flex flex-col items-center relative z-30 pt-1">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center relative shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    </div>
                </div>

                <div className="flex-1 pb-2 relative z-30">
                    <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent text-[0.75rem] font-bold font-mono">{step.number}</span>
                    <span className="px-2 py-0.5 rounded-sm bg-accent/10 text-accent text-[0.6rem] font-black tracking-widest uppercase border border-accent/20">
                        {step.badge}
                    </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-500">
                    {step.title}
                    </h3>

                    <p className="text-zinc-500 leading-relaxed text-sm md:text-base mb-8">
                    {step.description}
                    </p>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-zinc-800/50 w-fit backdrop-blur-3xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                        <span className="text-[0.65rem] font-bold tracking-widest text-zinc-500 uppercase">
                            {step.footerBadge}
                        </span>
                    </div>
                </div>
            </motion.div>
        </NeuralLink>
      </MagneticWrapper>
    </div>
  );
};

const Steps: React.FC = () => {
  return (
    <section id="process" className="py-32 px-8 bg-charcoal relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 relative text-center">
          <div className="flex justify-center gap-4 mb-4">
            <HUDTelemetry label="PIPELINE" value="INITIATED" />
            <HUDTelemetry label="NODES" value="512_ACTIVE" />
          </div>
          <h2 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter">
            The 6-Step Score
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
