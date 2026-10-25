import React, { useEffect, useRef } from 'react';
import { THEME_PALETTES } from '../../utils/themePalettes';

/**
 * WeatherCanvas
 * Full-screen high-performance 60fps atmospheric particle engine.
 * Features:
 * - Particle system per mood (rain + ripples, snow + wobble, stars + shooting stars,
 *   lightning bolts + flashes, drifting parallax clouds, sun rays + bokeh motes, misty fog bands)
 * - Screen size aware scaling
 * - devicePixelRatio crisp rendering
 * - Automatic pause on tab hidden (document.hidden)
 * - Accessibility: prefers-reduced-motion fallback
 * - Memory leak free cleanup on unmount
 */
export default function WeatherCanvas({ mood = 'clear-day' }) {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const particlesRef = useRef([]);
  const lightningRef = useRef({ flash: 0, bolts: [], nextStrike: 120 });
  const shootingStarRef = useRef({ active: false, x: 0, y: 0, vx: 0, vy: 0, length: 0, opacity: 0 });
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e) => {
      reducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    }

    // Initialize particles scaled to viewport size
    function initParticles() {
      const screenFactor = Math.max(0.6, (width * height) / (1920 * 1080));
      const currentMood = mood;
      const list = [];

      if (currentMood === 'clear-day') {
        // Sun dust motes & golden light particles
        const count = Math.floor(40 * screenFactor);
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            vx: (Math.random() - 0.5) * 0.4,
            vy: -Math.random() * 0.5 - 0.2,
            opacity: Math.random() * 0.6 + 0.2,
            pulseSpeed: Math.random() * 0.02 + 0.01,
          });
        }
      } else if (currentMood === 'clear-night') {
        // Twinkling stars
        const count = Math.floor(130 * screenFactor);
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.85,
            radius: Math.random() * 2 + 0.6,
            opacity: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.03 + 0.008,
            phase: Math.random() * Math.PI * 2,
          });
        }
      } else if (currentMood === 'partly-cloudy') {
        // Soft drifting cloud puffs
        const count = 7;
        for (let i = 0; i < count; i++) {
          list.push({
            x: (i / count) * width + Math.random() * 100,
            y: Math.random() * (height * 0.45) + 30,
            radius: Math.random() * 140 + 100,
            vx: Math.random() * 0.35 + 0.15,
            opacity: Math.random() * 0.25 + 0.15,
          });
        }
      } else if (currentMood === 'cloudy') {
        // Overcast dense parallax cloud layers
        const count = 12;
        for (let i = 0; i < count; i++) {
          list.push({
            x: (i / count) * width * 1.2 - 100,
            y: Math.random() * (height * 0.6),
            radius: Math.random() * 220 + 160,
            vx: Math.random() * 0.25 + 0.08,
            opacity: Math.random() * 0.3 + 0.18,
          });
        }
      } else if (currentMood === 'rain') {
        // Raindrops and splash ripple pool
        const count = Math.floor(140 * screenFactor);
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 22 + 15,
            vy: Math.random() * 12 + 16,
            vx: -2.2 - Math.random() * 1.5,
            opacity: Math.random() * 0.4 + 0.3,
          });
        }
      } else if (currentMood === 'thunderstorm') {
        // Heavy rain + rapid streaks
        const count = Math.floor(180 * screenFactor);
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 28 + 20,
            vy: Math.random() * 16 + 22,
            vx: -4 - Math.random() * 2.5,
            opacity: Math.random() * 0.5 + 0.4,
          });
        }
      } else if (currentMood === 'snow') {
        // Flakes with horizontal wobble
        const count = Math.floor(90 * screenFactor);
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3.5 + 1.2,
            vy: Math.random() * 1.2 + 0.8,
            wobbleSpeed: Math.random() * 0.03 + 0.01,
            wobbleAmplitude: Math.random() * 2 + 1,
            wobbleOffset: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.7 + 0.3,
          });
        }
      } else if (currentMood === 'fog') {
        // Misty horizontal drifting fog bands
        const count = 8;
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random() * width,
            y: (i / count) * height,
            width: width * 1.6,
            height: Math.random() * 180 + 120,
            vx: Math.random() * 0.3 + 0.1,
            opacity: Math.random() * 0.18 + 0.1,
          });
        }
      }

      particlesRef.current = list;
    }

    resize();
    window.addEventListener('resize', resize);

    // Animation loop variables
    let lastTime = performance.now();
    let isTabVisible = !document.hidden;

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Helper: generate lightning bolt path
    function createBolt(startX, startY, targetY) {
      const segments = [];
      let curX = startX;
      let curY = startY;
      segments.push({ x: curX, y: curY });

      while (curY < targetY) {
        curY += Math.random() * 30 + 15;
        curX += (Math.random() - 0.5) * 55;
        segments.push({ x: curX, y: curY });
      }
      return segments;
    }

    // Render loop
    function render(time) {
      animFrameIdRef.current = requestAnimationFrame(render);

      if (!isTabVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      // If user prefers reduced motion, draw graceful static ambient background only
      if (reducedMotionRef.current) {
        return;
      }

      const activeMood = mood;
      const particles = particlesRef.current;

      // 1. CLEAR DAY: Golden Sun rays + radiant glow + drifting motes
      if (activeMood === 'clear-day') {
        const sunX = width * 0.8;
        const sunY = height * 0.18;

        // Radial sunburst glow
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, width * 0.5);
        sunGlow.addColorStop(0, 'rgba(255, 230, 140, 0.35)');
        sunGlow.addColorStop(0.3, 'rgba(255, 175, 50, 0.15)');
        sunGlow.addColorStop(1, 'rgba(255, 150, 0, 0)');
        ctx.fillStyle = sunGlow;
        ctx.fillRect(0, 0, width, height);

        // Sun light rays
        ctx.save();
        ctx.translate(sunX, sunY);
        const rayAngle = (time * 0.0001) % (Math.PI * 2);
        for (let i = 0; i < 8; i++) {
          const angle = rayAngle + (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, width * 0.7, angle - 0.06, angle + 0.06);
          ctx.closePath();
          ctx.fillStyle = 'rgba(255, 235, 180, 0.035)';
          ctx.fill();
        }
        ctx.restore();

        // Particles
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.opacity += Math.sin(time * p.pulseSpeed) * 0.005;

          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 225, 140, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
          ctx.fill();
        });
      }

      // 2. CLEAR NIGHT: Twinkling stars, Moon glow & occasional shooting star
      else if (activeMood === 'clear-night') {
        // Moon glow in top left
        const moonX = width * 0.18;
        const moonY = height * 0.18;
        const moonGlow = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 180);
        moonGlow.addColorStop(0, 'rgba(224, 231, 255, 0.28)');
        moonGlow.addColorStop(0.5, 'rgba(129, 140, 248, 0.1)');
        moonGlow.addColorStop(1, 'rgba(11, 16, 48, 0)');
        ctx.fillStyle = moonGlow;
        ctx.fillRect(0, 0, width, height);

        // Crescent moon
        ctx.save();
        ctx.beginPath();
        ctx.arc(moonX, moonY, 26, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(248, 250, 252, 0.9)';
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(moonX + 12, moonY - 6, 23, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Twinkling stars
        particles.forEach((p) => {
          const currentOpacity =
            p.opacity * (0.6 + 0.4 * Math.sin(time * p.twinkleSpeed + p.phase));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 231, 255, ${Math.max(0.05, currentOpacity)})`;
          ctx.fill();
        });

        // Shooting star
        const ss = shootingStarRef.current;
        if (!ss.active && Math.random() < 0.003) {
          ss.active = true;
          ss.x = Math.random() * (width * 0.8);
          ss.y = Math.random() * (height * 0.3);
          ss.vx = Math.random() * 6 + 10;
          ss.vy = Math.random() * 3 + 4;
          ss.length = Math.random() * 80 + 60;
          ss.opacity = 1;
        }

        if (ss.active) {
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(ss.x - (ss.vx / 10) * ss.length, ss.y - (ss.vy / 10) * ss.length);
          ctx.strokeStyle = `rgba(255, 255, 255, ${ss.opacity})`;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          ss.x += ss.vx;
          ss.y += ss.vy;
          ss.opacity -= 0.025;

          if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
            ss.active = false;
          }
        }
      }

      // 3. PARTLY CLOUDY: Drifting cloud puffs
      else if (activeMood === 'partly-cloudy') {
        particles.forEach((c) => {
          c.x += c.vx;
          if (c.x - c.radius > width) {
            c.x = -c.radius;
            c.y = Math.random() * (height * 0.45) + 30;
          }

          const grad = ctx.createRadialGradient(c.x, c.y, c.radius * 0.2, c.x, c.y, c.radius);
          grad.addColorStop(0, `rgba(255, 255, 255, ${c.opacity})`);
          grad.addColorStop(0.7, `rgba(220, 235, 252, ${c.opacity * 0.5})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 4. CLOUDY: Heavy overcast parallax layers
      else if (activeMood === 'cloudy') {
        particles.forEach((c) => {
          c.x += c.vx;
          if (c.x - c.radius > width) {
            c.x = -c.radius;
          }

          const grad = ctx.createRadialGradient(c.x, c.y, c.radius * 0.2, c.x, c.y, c.radius);
          grad.addColorStop(0, `rgba(200, 215, 230, ${c.opacity})`);
          grad.addColorStop(0.8, `rgba(148, 163, 184, ${c.opacity * 0.4})`);
          grad.addColorStop(1, 'rgba(71, 85, 105, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 5. RAIN: Falling streaks + bottom ripples
      else if (activeMood === 'rain') {
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();

        particles.forEach((d) => {
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x + d.vx * 1.5, d.y + d.length);

          d.x += d.vx;
          d.y += d.vy;

          if (d.y > height) {
            d.y = -20;
            d.x = Math.random() * (width + 100);
          }
        });
        ctx.stroke();

        // Subtle puddle ripples near bottom
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.15)';
        for (let i = 0; i < 5; i++) {
          const rx = ((time * 0.05 + i * 280) % width);
          const ry = height - 40 + (i * 7);
          const rSize = ((time * 0.02 + i * 15) % 25);
          ctx.beginPath();
          ctx.ellipse(rx, ry, rSize * 2, rSize * 0.6, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // 6. THUNDERSTORM: Heavy turbulent rain + randomized lightning flashes
      else if (activeMood === 'thunderstorm') {
        const lightning = lightningRef.current;

        // Check for new lightning strike
        lightning.nextStrike -= 1;
        if (lightning.nextStrike <= 0) {
          lightning.flash = 0.85;
          lightning.nextStrike = Math.floor(Math.random() * 220 + 80);
          const startX = Math.random() * width;
          lightning.bolts = [createBolt(startX, 0, height * (0.6 + Math.random() * 0.4))];
          if (Math.random() < 0.5) {
            lightning.bolts.push(createBolt(startX + (Math.random() - 0.5) * 80, height * 0.2, height * 0.8));
          }
        }

        // Draw lightning flash background overlay
        if (lightning.flash > 0.01) {
          ctx.fillStyle = `rgba(240, 230, 255, ${lightning.flash})`;
          ctx.fillRect(0, 0, width, height);

          // Draw bolt paths
          ctx.strokeStyle = `rgba(255, 255, 255, ${lightning.flash * 1.2})`;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#C084FC';
          ctx.shadowBlur = 15;

          lightning.bolts.forEach((bolt) => {
            ctx.beginPath();
            bolt.forEach((pt, idx) => {
              if (idx === 0) ctx.moveTo(pt.x, pt.y);
              else ctx.lineTo(pt.x, pt.y);
            });
            ctx.stroke();
          });

          ctx.shadowBlur = 0;
          lightning.flash *= 0.88; // rapid decay
        }

        // Heavy angled rain
        ctx.strokeStyle = 'rgba(216, 180, 254, 0.5)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        particles.forEach((d) => {
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x + d.vx * 1.6, d.y + d.length);

          d.x += d.vx;
          d.y += d.vy;

          if (d.y > height) {
            d.y = -30;
            d.x = Math.random() * (width + 200);
          }
        });
        ctx.stroke();
      }

      // 7. SNOW: Flakes with sinusoidal wobble
      else if (activeMood === 'snow') {
        particles.forEach((f) => {
          f.y += f.vy;
          const wobble = Math.sin(time * f.wobbleSpeed + f.wobbleOffset) * f.wobbleAmplitude;
          const posX = f.x + wobble;

          if (f.y > height) {
            f.y = -10;
            f.x = Math.random() * width;
          }

          ctx.beginPath();
          ctx.arc(posX, f.y, f.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 249, 255, ${f.opacity})`;
          ctx.fill();
        });
      }

      // 8. FOG: Drifting horizontal misty wave bands
      else if (activeMood === 'fog') {
        particles.forEach((b) => {
          b.x += b.vx;
          if (b.x > width) b.x = -b.width * 0.4;

          const grad = ctx.createLinearGradient(0, b.y, 0, b.y + b.height);
          grad.addColorStop(0, 'rgba(226, 232, 240, 0)');
          grad.addColorStop(0.5, `rgba(226, 232, 240, ${b.opacity})`);
          grad.addColorStop(1, 'rgba(226, 232, 240, 0)');

          ctx.fillStyle = grad;
          ctx.fillRect(b.x - b.width * 0.5, b.y, b.width, b.height);
        });
      }
    }

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [mood]);

  const palette = THEME_PALETTES[mood] || THEME_PALETTES['clear-day'];

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${palette.bgFrom} 0%, ${palette.bgVia} 50%, ${palette.bgTo} 100%)`,
        transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
      {/* Noise/vignette overlay for cinema atmosphere */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}
