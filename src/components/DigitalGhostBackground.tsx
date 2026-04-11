import React, { useEffect, useRef } from 'react';

const DigitalGhostBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const snippets = [
      'const system = "OPTIMIZED";',
      'import { Sovereign } from "engineers";',
      'await connection.sync();',
      '0x4F 0x6E 0x20',
      'while(true) { innovate(); }',
      'const flux = Math.random();',
      '// Handshaking protocol...',
      '01101110 01100111',
      'system.status === "ACTIVE"',
    ];

    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      text: snippets[Math.floor(Math.random() * snippets.length)],
      speed: 0.2 + Math.random() * 0.5,
      size: 10 + Math.random() * 4,
    }));

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const drawGrid = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const step = 60;
      
      // Base Grid
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Illuminated Grid (Spotlight)
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.4)');
      gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;

      // Only draw lines near the mouse for performance and effect
      const startX = Math.floor((mouseX - 200) / step) * step;
      const endX = Math.ceil((mouseX + 200) / step) * step;
      const startY = Math.floor((mouseY - 200) / step) * step;
      const endY = Math.ceil((mouseY + 200) / step) * step;

      for (let x = startX; x <= endX; x += step) {
        if (x < 0 || x > canvas.width) continue;
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
      }
      for (let y = startY; y <= endY; y += step) {
        if (y < 0 || y > canvas.height) continue;
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
      }
      ctx.stroke();
    };

    const drawSnippets = () => {
      ctx.font = '10px monospace';
      ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
      
      particles.forEach((p) => {
        const dx = mouseRef.current.x - (p.x);
        const dy = mouseRef.current.y - (p.y);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Spotlight effect on text
        if (dist < 200) {
            ctx.fillStyle = `rgba(0, 229, 255, ${0.15 + (1 - dist/200) * 0.5})`;
        } else {
            ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
        }

        const offsetX = (mouseRef.current.x - window.innerWidth / 2) * (p.speed * 0.05);
        const offsetY = (mouseRef.current.y - window.innerHeight / 2) * (p.speed * 0.05);
        
        ctx.fillText(p.text, p.x + offsetX, p.y + offsetY);
        
        p.y -= p.speed * 0.2;
        if (p.y < -20) p.y = canvas.height + 20;
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      drawSnippets();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#121212]"
      style={{ filter: 'contrast(1.1) brightness(0.9)' }}
    />
  );
};

export default DigitalGhostBackground;
