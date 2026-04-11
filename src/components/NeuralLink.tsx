import React, { useRef, useState } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame } from 'framer-motion';

interface NeuralLinkProps {
  children: React.ReactNode;
  className?: string;
}

const NeuralLink: React.FC<NeuralLinkProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Transform velocity to pulse speed factor
  const pulseSpeed = useTransform(scrollVelocity, [-2, 0, 2], [5, 1, 5]);
  const smoothPulseSpeed = useSpring(pulseSpeed, { stiffness: 100, damping: 30 });

  const [offset, setOffset] = useState(0);

  useAnimationFrame((_time, delta) => {
    // Base speed + velocity-based boost
    const speedFactor = smoothPulseSpeed.get();
    setOffset(prev => (prev + (delta * 0.1 * speedFactor)) % 1000);
  });

  return (
    <div ref={containerRef} className={`relative group ${className}`}>
      {/* Refractive Glass Layer */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 backdrop-blur-2xl backdrop-saturate-200 backdrop-brightness-110 border border-white/10 group-hover:backdrop-brightness-125 transition-all duration-500" />
          
          {/* Multi-layered optics distortion */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent via-transparent to-white/10 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      {/* SVG Border Trace */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-3xl" preserveAspectRatio="none">
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="24"
          fill="none"
          stroke="rgba(0, 229, 255, 0.05)"
          strokeWidth="1"
        />
        
        {/* The Pulse */}
        <motion.rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="24"
          fill="none"
          stroke="url(#pulse-gradient)"
          strokeWidth="2.5"
          strokeDasharray="120 480"
          style={{
            strokeDashoffset: -offset
          }}
        />

        <defs>
          <linearGradient id="pulse-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeuralLink;
