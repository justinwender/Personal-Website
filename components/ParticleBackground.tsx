"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

/**
 * ParticleBackground component
 *
 * Creates an interactive particle network with cursor-responsive effects.
 * Features:
 * - Particles connect when near each other
 * - Particles are attracted to cursor movement
 * - Uses green/blue-purple color scheme from design
 * - Optimized for performance with reduced particles on mobile
 */
export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load only essential features for better performance
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Add particles on click
            },
            onHover: {
              enable: true,
              mode: "grab", // Connect to cursor on hover
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#4ADE80", "#818CF8", "#3B82F6"], // Green and blue/purple from palette
          },
          links: {
            color: "#6EE7B7", // Light green for connections
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 80, // Default for desktop
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        // Responsive configuration - reduce particles on mobile
        responsive: [
          {
            maxWidth: 640, // Mobile
            options: {
              particles: {
                number: {
                  value: 40, // Fewer particles for performance
                },
                links: {
                  distance: 100,
                },
              },
            },
          },
          {
            maxWidth: 1024, // Tablet
            options: {
              particles: {
                number: {
                  value: 60,
                },
              },
            },
          },
        ],
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
