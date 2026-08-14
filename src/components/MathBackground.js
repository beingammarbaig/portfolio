import React, { useEffect, useRef } from 'react';

const MATH_SYMBOLS = [
  '∫', '∑', 'π', '√', '∞', '∂', 'Δ', 'θ', 'λ', 'α', 'β', 'γ',
  '∇', '∈', '∀', '∃', '≈', 'φ', 'ψ', 'ω', 'χ', '∩', '∪', '⊆',
  'G=(V,E)', 'χ(G)', 'f(x)', 'sin θ', 'cos θ', 'log n', 'n!',
  'P(x)', 'det(A)', '∫₀¹', 'Σxᵢ', 'eˣ', 'a²+b²=c²', '∂f/∂x',
  'd/dx', 'lim→∞', 'O(n²)', 'C(n,r)', '∮', 'ℝⁿ', 'ker(T)',
  'rank A', '∥v∥', 'Ax=b', 'y=mx+b', 'ε-δ', 'p∨q', '∄x',
];

const NODE_COLORS = ['#10D9A0', '#22D3EE', '#818CF8', '#34D399'];
const SYMBOL_COLORS = ['#ff56f6bb', '#b936eebb', '#6366F1bb', '#0F172A55'];

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
      size: Math.random() * 14 + 9,
      opacity: Math.random() * 0.18 + 0.08,
      dx: (Math.random() - 0.5) * 0.45,
      dy: -(Math.random() * 0.3 + 0.08),
      color: SYMBOL_COLORS[Math.floor(Math.random() * SYMBOL_COLORS.length)],
      rotation: (Math.random() - 0.5) * 0.02,
      angle: Math.random() * Math.PI * 2,
    }));

    // Graph theory nodes — vertex coloring visualization (relevant to PhD research)
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3.5 + 2,
      color: NODE_COLORS[i % NODE_COLORS.length],
      opacity: Math.random() * 0.4 + 0.15,
      dx: (Math.random() - 0.5) * 0.55,
      dy: (Math.random() - 0.5) * 0.55,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Sine wave parameters
    const waves = Array.from({ length: 3 }, (_, i) => ({
      amplitude: 30 + i * 20,
      frequency: 0.008 + i * 0.003,
      phase: 0,
      speed: 0.015 + i * 0.008,
      y: window.innerHeight * (0.25 + i * 0.25),
      opacity: 0.04 + i * 0.015,
      color: NODE_COLORS[i],
    }));

    let animId;
    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Sine waves (mathematical curves) ---
      waves.forEach(wave => {
        wave.phase += wave.speed;
        ctx.beginPath();
        ctx.strokeStyle = wave.color + '55';
        ctx.lineWidth = 1.5;
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // --- Graph theory edges ---
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < edgeDist) {
            const alpha = 0.1 * (1 - dist / edgeDist);
            const grd = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grd.addColorStop(0, nodes[i].color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
            grd.addColorStop(1, nodes[j].color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grd;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // --- Graph nodes (vertex coloring) ---
      nodes.forEach(node => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        const pulse = (Math.sin(frame * 0.025 + node.pulsePhase) + 1) * 0.5;
        const r = node.radius + pulse * 2;

        // Glow halo
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 6);
        grad.addColorStop(0, node.color + '35');
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.opacity + pulse * 0.15;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
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
        ctx.fillStyle = p.color;
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
