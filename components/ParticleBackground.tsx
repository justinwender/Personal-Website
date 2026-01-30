"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#f0f0f0",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#FF0000",
          },
          links: {
            color: "#FF0000",
            distance: 200,
            enable: true,
            opacity: 1,
            width: 5,
          },
          move: {
            enable: true,
            speed: 3,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 1,
          },
          size: {
            value: 10,
          },
        },
      }}
      className="absolute inset-0"
      style={{
        zIndex: 0,
      }}
    />
  );
}
