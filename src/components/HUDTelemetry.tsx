import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HUDTelemetryProps {
  label: string;
  value: string;
  className?: string;
}

const HUDTelemetry: React.FC<HUDTelemetryProps> = ({ label, value, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = `[${label}: ${value}]`;
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [label, value]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1],
        x: [0, 1, -1, 0] 
      }}
      transition={{ 
        duration: 0.2, 
        repeat: isTyping ? Infinity : 0,
        repeatType: "mirror" 
      }}
      className={`font-mono text-[10px] tracking-tight text-accent/60 uppercase ${className}`}
    >
      {displayText}
      {isTyping && <span className="animate-pulse">_</span>}
    </motion.div>
  );
};

export default HUDTelemetry;
