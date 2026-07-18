import React, { useEffect, useRef } from 'react';

// Drives the bar directly via rAF + style transform, so scrolling
// never triggers React re-renders.
const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-accent/80 origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;
