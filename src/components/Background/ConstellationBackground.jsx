import { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useContext(ThemeContext);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const density = Math.min(Math.floor((width * height) / 10000), 120);
      starsRef.current = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.018 + 0.004,
      }));
    };

    const draw = () => {
      const dark = isDarkRef.current;
      const bg = dark ? '#050414' : '#FAFAF8';
      const starRGB = dark ? '200,210,255' : '70,70,160';
      const lineRGB = dark ? '120,120,220' : '100,100,200';

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const stars = starsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * (dark ? 0.25 : 0.12);
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(${lineRGB},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Stars with twinkle + mouse proximity
      for (const star of stars) {
        star.phase += star.speed;
        const twinkle = 0.55 + 0.45 * Math.sin(star.phase);
        const mdx = star.x - mx;
        const mdy = star.y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const boost = mdist < 120 ? (1 - mdist / 120) * 0.6 : 0;
        const alpha = Math.min(twinkle + boost, 1) * (dark ? 0.9 : 0.65);
        const r = star.r * (1 + boost * 0.6);

        ctx.beginPath();
        ctx.arc(star.x, star.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRGB},${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
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
