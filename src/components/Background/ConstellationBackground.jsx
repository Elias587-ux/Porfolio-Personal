import { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CONSTELLATIONS = [
  {
    name: 'Orion',
    stars: [
      { x: 0.50, y: 0.08, mag: 0 },
      { x: 0.72, y: 0.06, mag: 1 },
      { x: 0.28, y: 0.92, mag: 0 },
      { x: 0.68, y: 0.90, mag: 1 },
      { x: 0.40, y: 0.48, mag: 2 },
      { x: 0.52, y: 0.46, mag: 2 },
      { x: 0.64, y: 0.48, mag: 2 },
      { x: 0.48, y: 0.28, mag: 3 },
      { x: 0.38, y: 0.30, mag: 3 },
    ],
    edges: [[0,7],[7,8],[8,4],[4,5],[5,6],[6,1],[0,1],[4,2],[6,3]],
  },
  {
    name: 'UrsaMajor',
    stars: [
      { x: 0.08, y: 0.48, mag: 1 },
      { x: 0.22, y: 0.58, mag: 1 },
      { x: 0.30, y: 0.74, mag: 2 },
      { x: 0.18, y: 0.80, mag: 2 },
      { x: 0.32, y: 0.90, mag: 1 },
      { x: 0.56, y: 0.92, mag: 1 },
      { x: 0.72, y: 0.86, mag: 2 },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,3]],
  },
  {
    name: 'Cassiopeia',
    stars: [
      { x: 0.05, y: 0.55, mag: 2 },
      { x: 0.25, y: 0.25, mag: 1 },
      { x: 0.48, y: 0.42, mag: 2 },
      { x: 0.70, y: 0.22, mag: 2 },
      { x: 0.92, y: 0.40, mag: 2 },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4]],
  },
  {
    name: 'Cygnus',
    stars: [
      { x: 0.50, y: 0.04, mag: 0 },
      { x: 0.50, y: 0.42, mag: 2 },
      { x: 0.50, y: 0.92, mag: 1 },
      { x: 0.08, y: 0.42, mag: 2 },
      { x: 0.92, y: 0.42, mag: 2 },
    ],
    edges: [[0,1],[1,2],[3,1],[1,4]],
  },
  {
    name: 'Leo',
    stars: [
      { x: 0.18, y: 0.70, mag: 0 },
      { x: 0.28, y: 0.52, mag: 2 },
      { x: 0.40, y: 0.38, mag: 2 },
      { x: 0.55, y: 0.28, mag: 2 },
      { x: 0.70, y: 0.36, mag: 2 },
      { x: 0.82, y: 0.52, mag: 1 },
      { x: 0.72, y: 0.68, mag: 2 },
      { x: 0.52, y: 0.76, mag: 2 },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]],
  },
  {
    name: 'Scorpius',
    stars: [
      { x: 0.48, y: 0.06, mag: 0 },
      { x: 0.35, y: 0.12, mag: 2 },
      { x: 0.25, y: 0.22, mag: 2 },
      { x: 0.18, y: 0.34, mag: 2 },
      { x: 0.20, y: 0.48, mag: 2 },
      { x: 0.28, y: 0.60, mag: 2 },
      { x: 0.40, y: 0.72, mag: 2 },
      { x: 0.55, y: 0.82, mag: 2 },
      { x: 0.65, y: 0.92, mag: 2 },
      { x: 0.62, y: 0.12, mag: 2 },
      { x: 0.72, y: 0.24, mag: 2 },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[0,9],[9,10]],
  },
  {
    name: 'Gemini',
    stars: [
      { x: 0.22, y: 0.05, mag: 0 },
      { x: 0.40, y: 0.05, mag: 0 },
      { x: 0.10, y: 0.28, mag: 2 },
      { x: 0.08, y: 0.52, mag: 2 },
      { x: 0.15, y: 0.74, mag: 1 },
      { x: 0.28, y: 0.34, mag: 2 },
      { x: 0.30, y: 0.58, mag: 2 },
      { x: 0.38, y: 0.78, mag: 2 },
    ],
    edges: [[0,2],[2,3],[3,4],[1,5],[5,6],[6,7],[0,1]],
  },
  {
    name: 'Perseus',
    stars: [
      { x: 0.50, y: 0.08, mag: 1 },
      { x: 0.34, y: 0.22, mag: 2 },
      { x: 0.22, y: 0.36, mag: 2 },
      { x: 0.15, y: 0.52, mag: 2 },
      { x: 0.64, y: 0.24, mag: 2 },
      { x: 0.74, y: 0.40, mag: 2 },
      { x: 0.68, y: 0.58, mag: 2 },
    ],
    edges: [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6]],
  },
  {
    name: 'Aquila',
    stars: [
      { x: 0.50, y: 0.14, mag: 0 },
      { x: 0.34, y: 0.28, mag: 2 },
      { x: 0.66, y: 0.28, mag: 2 },
      { x: 0.22, y: 0.52, mag: 2 },
      { x: 0.78, y: 0.52, mag: 2 },
      { x: 0.50, y: 0.80, mag: 2 },
    ],
    edges: [[0,1],[0,2],[1,3],[2,4],[1,2],[3,5],[4,5]],
  },
  {
    name: 'Lyra',
    stars: [
      { x: 0.50, y: 0.08, mag: 0 },
      { x: 0.25, y: 0.48, mag: 2 },
      { x: 0.40, y: 0.65, mag: 3 },
      { x: 0.60, y: 0.65, mag: 3 },
      { x: 0.75, y: 0.48, mag: 2 },
    ],
    edges: [[0,1],[0,4],[1,2],[4,3],[2,3],[1,4]],
  },
];

// [centerX, centerY, scale] — normalized viewport coords
const PLACEMENT = [
  [0.50, 0.15, 0.22],
  [0.50, 0.52, 0.26],
  [0.13, 0.19, 0.17],
  [0.84, 0.20, 0.19],
  [0.10, 0.58, 0.21],
  [0.88, 0.60, 0.20],
  [0.18, 0.83, 0.18],
  [0.80, 0.82, 0.17],
  [0.50, 0.88, 0.22],
  [0.72, 0.40, 0.15],
];

const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useContext(ThemeContext);
  const isDarkRef = useRef(isDark);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const targetParallaxRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const buildScene = () => {
      const fieldCount = Math.min(Math.floor((width * height) / 5500), 300);
      const fieldStars = Array.from({ length: fieldCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 0.65 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.010 + 0.003,
      }));

      const constStars = [];
      const constEdges = [];

      CONSTELLATIONS.forEach((c, ci) => {
        const [cx, cy, scale] = PLACEMENT[ci];
        const base = constStars.length;
        c.stars.forEach((s) => {
          constStars.push({
            x: cx * width + (s.x - 0.5) * scale * width,
            y: cy * height + (s.y - 0.5) * scale * height,
            r: s.mag === 0 ? 2.2 : s.mag === 1 ? 1.6 : s.mag === 2 ? 1.1 : 0.75,
            mag: s.mag,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.008 + 0.002,
          });
        });
        c.edges.forEach(([a, b]) => constEdges.push([base + a, base + b]));
      });

      sceneRef.current = { fieldStars, constStars, constEdges };
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildScene();
    };

    const drawSpike = (x, y, r, alpha, rgb) => {
      const len = r * 5;
      ctx.save();
      ctx.strokeStyle = `rgba(${rgb},${alpha * 0.35})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x - len, y); ctx.lineTo(x + len, y);
      ctx.moveTo(x, y - len); ctx.lineTo(x, y + len);
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      if (!sceneRef.current) { animRef.current = requestAnimationFrame(draw); return; }

      const dark = isDarkRef.current;
      const bg = dark ? '#050414' : '#FAFAF8';
      const fieldRgb = dark ? '200,210,255' : '60,60,150';
      const constRgb = dark ? '220,230,255' : '45,45,160';
      const lineRgb = dark ? '160,170,255' : '70,70,180';
      const fAlpha = dark ? 0.28 : 0.10;
      const cAlpha = dark ? 0.58 : 0.20;
      const lAlpha = dark ? 0.32 : 0.13;
      const maxAlpha = dark ? 0.75 : 0.40;

      const par = parallaxRef.current;
      const tgt = targetParallaxRef.current;
      par.x += (tgt.x - par.x) * 0.06;
      par.y += (tgt.y - par.y) * 0.06;

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const { fieldStars, constStars, constEdges } = sceneRef.current;

      ctx.save();
      ctx.translate(par.x, par.y);

      // Constellation lines
      ctx.lineWidth = dark ? 0.85 : 0.7;
      for (const [a, b] of constEdges) {
        const sa = constStars[a];
        const sb = constStars[b];
        ctx.beginPath();
        ctx.moveTo(sa.x, sa.y);
        ctx.lineTo(sb.x, sb.y);
        ctx.strokeStyle = `rgba(${lineRgb},${lAlpha})`;
        ctx.stroke();
      }

      // Field stars
      for (const s of fieldStars) {
        s.phase += s.speed;
        const alpha = (0.45 + 0.55 * Math.sin(s.phase)) * fAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${fieldRgb},${alpha})`;
        ctx.fill();
      }

      const mx = mouseRef.current.x - par.x;
      const my = mouseRef.current.y - par.y;
      const mouseActive = mouseRef.current.x > -100;

      // Constellation stars
      for (const s of constStars) {
        s.phase += s.speed;
        const t = 0.62 + 0.38 * Math.sin(s.phase);
        const mdx = s.x - mx;
        const mdy = s.y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const boost = mouseActive && mdist < 160 ? (1 - mdist / 160) * 0.4 : 0;
        const magMult = s.mag === 0 ? 1.8 : s.mag === 1 ? 1.3 : 1.0;
        const alpha = Math.min((t + boost) * cAlpha * magMult, maxAlpha);
        const r = s.r * (1 + boost * 0.5);

        if (s.mag <= 1) {
          const glowR = r * 6;
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          grad.addColorStop(0, `rgba(${constRgb},${alpha * 0.30})`);
          grad.addColorStop(1, `rgba(${constRgb},0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${constRgb},${alpha})`;
        ctx.fill();

        if (s.mag === 0) {
          drawSpike(s.x, s.y, r, alpha, constRgb);
        }
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      targetParallaxRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      targetParallaxRef.current = { x: 0, y: 0 };
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ConstellationBackground;
