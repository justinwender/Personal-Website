"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number; // Target velocity to return to
  baseVy: number; // Target velocity to return to
  radius: number;
  color: string;
}

export default function CustomParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Colors from your palette
    const colors = ["#4ADE80", "#6EE7B7", "#818CF8", "#A78BFA", "#3B82F6"];

    // Helper function to create a new particle
    const createParticle = (): Particle => {
      const baseVx = (Math.random() - 0.5) * 0.8;
      const baseVy = (Math.random() - 0.5) * 0.8;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: baseVx,
        vy: baseVy,
        baseVx, // Store original velocity
        baseVy, // Store original velocity
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Create particles - increased by 20%
    const particleCount = window.innerWidth < 768 ? 48 : 96;
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls with extra energy
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1.2; // Bouncy!
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -1.2; // Bouncy!
        }

        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1.2; // Bouncy!
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -1.2; // Bouncy!
        }

        // Mouse interaction - repel particles away from cursor
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          // Push particles away from cursor
          particle.vx -= (dx / distance) * force * 0.08;
          particle.vy -= (dy / distance) * force * 0.08;
        }

        // Anti-clumping: repel particles that get too close
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90 && dist > 0) {
            const repelForce = (90 - dist) / 90 * 0.2;
            particle.vx += (dx / dist) * repelForce;
            particle.vy += (dy / dist) * repelForce;
          }
        });

        // Wall repulsion - push particles away from edges
        const wallMargin = 100; // Distance from wall to start repelling

        // Left wall
        if (particle.x < wallMargin) {
          const repelForce = (wallMargin - particle.x) / wallMargin * 0.05;
          particle.vx += repelForce;
        }
        // Right wall
        if (particle.x > canvas.width - wallMargin) {
          const repelForce = (particle.x - (canvas.width - wallMargin)) / wallMargin * 0.05;
          particle.vx -= repelForce;
        }
        // Top wall
        if (particle.y < wallMargin) {
          const repelForce = (wallMargin - particle.y) / wallMargin * 0.05;
          particle.vy += repelForce;
        }
        // Bottom wall
        if (particle.y > canvas.height - wallMargin) {
          const repelForce = (particle.y - (canvas.height - wallMargin)) / wallMargin * 0.05;
          particle.vy -= repelForce;
        }

        // Quick reset force - particles calm down quickly
        const returnForce = 0.12; // Fast reset after interaction
        particle.vx += (particle.baseVx - particle.vx) * returnForce;
        particle.vy += (particle.baseVy - particle.vy) * returnForce;

        // Higher max speed for slingshot effect
        const maxSpeed = 2.5;
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(110, 231, 183, ${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
