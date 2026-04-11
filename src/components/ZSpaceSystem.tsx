import React, { useEffect, useRef } from 'react';

const ZSpaceSystem: React.FC = () => {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateZSpace = () => {
      const elements = document.querySelectorAll('.z-space-card');
      const viewportHeight = window.innerHeight;
      const centerY = viewportHeight / 2;

      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        
        // Distance from center of viewport, normalized (0 at center, 1 at edges and beyond)
        const rawDist = Math.abs(elementCenter - centerY);
        const normalizedDist = Math.min(rawDist / (viewportHeight / 1.5), 1);
        
        (el as HTMLElement).style.setProperty('--z-dist', normalizedDist.toFixed(3));
      });

      rafRef.current = requestAnimationFrame(updateZSpace);
    };

    rafRef.current = requestAnimationFrame(updateZSpace);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return null; // This is a logic-only component
};

export default ZSpaceSystem;
