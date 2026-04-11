import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  proximity?: number;
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ 
  children, 
  strength = 30, 
  proximity = 100 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < proximity) {
        setIsHovered(true);
        const pullX = (distanceX / proximity) * strength;
        const pullY = (distanceY / proximity) * strength;
        
        x.set(pullX);
        y.set(pullY);
        
        // Add subtle tilt
        rotateX.set((distanceY / proximity) * -10);
        rotateY.set((distanceX / proximity) * 10);
      } else {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, rotateX, rotateY, strength, proximity]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
