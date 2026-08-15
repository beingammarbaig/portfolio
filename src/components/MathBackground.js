import React, { useEffect, useRef } from 'react';

const MATH_SYMBOLS = [
  '∫', '∑', 'π', '√', '∞', '∂', 'Δ', 'θ', 'λ', 'α', 'β', 'γ',
  '∇', '∈', '∀', '∃', '≈', 'φ', 'ψ', 'ω', 'χ', '∩', '∪', '⊆',
  'G=(V,E)', 'χ(G)', 'f(x)', 'sin θ', 'cos θ', 'log n', 'n!',
  'P(x)', 'det(A)', '∫₀¹', 'Σxᵢ', 'eˣ', 'a²+b²=c²', '∂f/∂x',
  'd/dx', 'lim→∞', 'O(n²)', 'C(n,r)', '∮', 'ℝⁿ', 'ker(T)',
  'rank A', '∥v∥', 'Ax=b', 'y=mx+b', 'ε-δ', 'p∨q', '∄x',
];

const getThemeColors = () => {
  const isDark = document.documentElement.classList.contains('dark');
  return {
    nodes: isDark ? ['#ff56f6', '#b936ee', '#818CF8', '#22D3EE'] : ['#059669', '#0891B2', '#6366F1', '#34D399'],
    symbols: isDark ? ['#ff56f6bb', '#b936eebb', '#6366F1bb', '#ffffff55'] : ['#059669bb', '#0891B2bb', '#6366F1bb', '#0F172A55'],
  };
};

const MathBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const isMobile = () => window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const mobile = isMobile();
    const particleCount = mobile ? 20 : 55;
    const nodeCount = mobile ? 10 : 24;
    const edgeDist = mobile ? 150 : 210;

    // Floating math symbol particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      symbol: MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)],
      size: Math.random() * 18 + 14,
      opacity: Math.random() * 0.25 + 0.15,
      dx: (Math.random() - 0.5) * 0.45,
      dy: -(Math.random() * 0.3 + 0.08),
      colorIdx: Math.floor(Math.random() * 4),
      rotation: (Math.random() - 0.5) * 0.02,
      angle: Math.random() * Math.PI * 2,
    }));



    // Sine wave parameters
    const waves = Array.from({ length: 3 }, (_, i) => ({
      amplitude: 30 + i * 20,
      frequency: 0.008 + i * 0.003,
      phase: 0,
      speed: 0.015 + i * 0.008,
      y: window.innerHeight * (0.25 + i * 0.25),
      opacity: 0.06 + i * 0.02,
      colorIdx: i % 4,
    }));

    let animId;
    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const theme = getThemeColors();

      // --- Sine waves (mathematical curves) ---
      waves.forEach(wave => {
        wave.phase += wave.speed;
        ctx.beginPath();
        ctx.strokeStyle = theme.nodes[wave.colorIdx] + '55';
        ctx.lineWidth = 2.0;
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });



      // --- Floating math symbols ---
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.angle += p.rotation;

        if (p.y < -50) { p.y = canvas.height + 30; p.x = Math.random() * canvas.width; }
        if (p.x < -140) p.x = canvas.width + 120;
        if (p.x > canvas.width + 140) p.x = -120;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle * 0.3);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = theme.symbols[p.colorIdx];
        ctx.font = `${p.size}px 'Rajdhani', monospace`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MathBackground;
