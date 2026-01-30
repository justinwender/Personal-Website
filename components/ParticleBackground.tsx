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
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#4ADE80",
          },
          links: {
            color: "#4ADE80",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 100,
          },
          size: {
            value: 3,
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
