import React, { useEffect, useState, useRef } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const binaryString = useRef("");

  useEffect(() => {
    // Generate a long random binary string once
    const chars = "01{}/<>!;_[]#$";
    let str = "";
    // We want enough characters to fill the height. 
    // Approximately 10px per char, 60vh height. 
    // Let's generate 300 characters.
    for (let i = 0; i < 300; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    binaryString.current = str;

    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = currentScrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[60vh] w-6 z-50 pointer-events-none flex flex-col items-center select-none group">
      {/* Scroll Label */}
      <div className="text-[8px] font-mono text-accent/20 uppercase tracking-[0.4em] rotate-90 mb-16 group-hover:text-accent transition-colors duration-500">
        CORE_STREAM
      </div>

      <div className="relative flex-1 flex flex-col items-center font-mono text-[9px] leading-[1.2] tracking-tighter w-full overflow-visible">
        {/* The Track (dimmed) */}
        <div className="absolute inset-0 text-white/[0.03] break-all flex flex-col items-center h-full">
            {binaryString.current.split('').map((char, i) => (
                <span key={`t-${i}`}>{char}</span>
            ))}
        </div>

        {/* The Progress (bright) */}
        <div 
          className="absolute inset-0 text-accent break-all flex flex-col items-center h-full transition-all duration-300 ease-out"
          style={{ 
            clipPath: `inset(0 0 ${100 - (scrollProgress * 100)}% 0)`,
            filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))'
          }}
        >
            {binaryString.current.split('').map((char, i) => (
                <span key={`p-${i}`} className="opacity-100">{char}</span>
            ))}
        </div>

        {/* Position Indicator (Caret) */}
        <div 
          className="absolute -left-2 w-10 h-[1px] bg-accent transition-all duration-300 ease-out"
          style={{ top: `${scrollProgress * 100}%` }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_#00E5FF]"></div>
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 font-mono text-[8px] text-accent/60">
                {Math.floor(scrollProgress * 100)}%
            </div>
        </div>
      </div>

      {/* Connection Point */}
      <div className="mt-8 w-[1px] h-8 bg-gradient-to-b from-accent to-transparent opacity-20"></div>
    </div>
  );
};

export default ScrollProgress;
