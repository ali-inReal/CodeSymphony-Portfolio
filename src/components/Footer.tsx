import React, { useEffect, useRef, useState } from 'react';

const LightningCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Bolt {
      x: number;
      segments: { x: number; y: number }[];
      alpha: number;
      life: number;
      maxLife: number;
      branches: { segments: { x: number; y: number }[]; alpha: number }[];
    }

    const bolts: Bolt[] = [];

    const createBolt = (): Bolt => {
      const startX = Math.random() * canvas.width;
      const segments: { x: number; y: number }[] = [];
      let x = startX;
      let y = 0;
      const maxLife = 20 + Math.random() * 30;

      while (y < canvas.height * 0.85) {
        segments.push({ x, y });
        x += (Math.random() - 0.5) * 40;
        y += 8 + Math.random() * 12;
      }
      segments.push({ x, y: canvas.height * 0.92 });

      // Generate branches
      const branches: { segments: { x: number; y: number }[]; alpha: number }[] = [];
      const branchCount = Math.floor(Math.random() * 3) + 1;
      for (let b = 0; b < branchCount; b++) {
        const branchStart = Math.floor(Math.random() * (segments.length - 4)) + 2;
        const bSegs: { x: number; y: number }[] = [];
        let bx = segments[branchStart].x;
        let by = segments[branchStart].y;
        const dir = Math.random() > 0.5 ? 1 : -1;
        for (let i = 0; i < 6 + Math.floor(Math.random() * 6); i++) {
          bSegs.push({ x: bx, y: by });
          bx += dir * (10 + Math.random() * 20);
          by += 6 + Math.random() * 10;
          if (by > canvas.height * 0.85) break;
        }
        branches.push({ segments: bSegs, alpha: 0.4 + Math.random() * 0.4 });
      }

      return { x: startX, segments, alpha: 1, life: 0, maxLife, branches };
    };

    // Seed initial bolts
    for (let i = 0; i < 6; i++) {
      const b = createBolt();
      b.life = Math.random() * b.maxLife;
      bolts.push(b);
    }

    let raf: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new bolts periodically
      if (frame % 18 === 0 && bolts.length < 12) {
        bolts.push(createBolt());
      }

      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.life++;
        const progress = bolt.life / bolt.maxLife;
        bolt.alpha = progress < 0.2
          ? progress / 0.2
          : progress > 0.7
            ? 1 - (progress - 0.7) / 0.3
            : 1;

        const drawSegments = (segs: { x: number; y: number }[], alpha: number, width: number) => {
          if (segs.length < 2) return;
          // Outer glow
          ctx.save();
          ctx.globalAlpha = alpha * bolt.alpha * 0.3;
          ctx.strokeStyle = '#00aaff';
          ctx.lineWidth = width + 4;
          ctx.shadowColor = '#00e5ff';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(segs[0].x, segs[0].y);
          for (let j = 1; j < segs.length; j++) ctx.lineTo(segs[j].x, segs[j].y);
          ctx.stroke();
          ctx.restore();

          // Core bolt
          ctx.save();
          ctx.globalAlpha = alpha * bolt.alpha;
          ctx.strokeStyle = '#c0f0ff';
          ctx.lineWidth = width;
          ctx.shadowColor = '#00e5ff';
          ctx.shadowBlur = 28;
          ctx.beginPath();
          ctx.moveTo(segs[0].x, segs[0].y);
          for (let j = 1; j < segs.length; j++) ctx.lineTo(segs[j].x, segs[j].y);
          ctx.stroke();
          ctx.restore();
        };

        drawSegments(bolt.segments, 1, 1.5);
        bolt.branches.forEach(br => drawSegments(br.segments, br.alpha * 0.6, 0.8));

        // Ground glow at bottom
        const last = bolt.segments[bolt.segments.length - 1];
        const grd = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 60);
        grd.addColorStop(0, `rgba(0, 200, 255, ${bolt.alpha * 0.4})`);
        grd.addColorStop(1, 'rgba(0, 200, 255, 0)');
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(last.x, last.y, 60, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (bolt.life >= bolt.maxLife) {
          bolts.splice(i, 1);
        }
      }

      frame++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

/* ─── Ground fog strip ─────────────────────────────────────────────── */
const GroundFog: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40px',
      background: 'linear-gradient(to top, rgba(0,180,255,0.12), transparent)',
      pointerEvents: 'none',
    }}
  />
);



/* ─── Main Footer ──────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '110px',
        background: 'linear-gradient(to bottom, #121212 0%, #0d0f11 40%, #090c0f 100%)',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* ── Lightning canvas ── */}
      <LightningCanvas />
      <GroundFog />

      {/* ── Top bar: logo + copyright ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 28px 0 28px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Lightning bolt icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              filter: hovered
                ? 'drop-shadow(0 0 8px #00e5ff)'
                : 'drop-shadow(0 0 4px #0099cc)',
              transition: 'filter 0.3s',
            }}
          >
            <circle cx="12" cy="12" r="11" fill="#1a1a2e" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
            <path
              d="M13.5 3L7 13h5l-1.5 8L19 11h-5.5L13.5 3z"
              fill="#00e5ff"
              stroke="#00e5ff"
              strokeWidth="0.5"
            />
          </svg>
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '2px',
              color: '#fff',
              textTransform: 'uppercase',
              textShadow: hovered ? '0 0 12px rgba(0,229,255,0.8)' : 'none',
              transition: 'text-shadow 0.3s',
            }}
          >
            Code Symphony
          </span>
        </div>

        {/* Copyright */}
        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '13px',
            margin: 0,
            letterSpacing: '0.5px',
          }}
        >
          Copyright {new Date().getFullYear()} Code Symphony, All Rights Reserved
        </p>
      </div>


    </footer>
  );
};

export default Footer;
