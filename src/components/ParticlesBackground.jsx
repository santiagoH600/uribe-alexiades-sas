import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadAll } from "tsparticles-all";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", minHeight: "100vh", zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false }, // ❌ Desactivado para permitir scroll
          detectRetina: true,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 1000,
              },
            },
            shape: {
              type: "image",
              image: [
                { src: "/hojas/leaf1.png", width: 32, height: 32 },
                { src: "/hojas/leaf2.png", width: 32, height: 32 },
                { src: "/hojas/leaf3.png", width: 32, height: 32 },
                { src: "/hojas/leaf4.png", width: 32, height: 32 },
              ],
            },
            size: {
              value: { min: 40, max: 80 },
              random: true,
            },
            opacity: {
              value: 1,
              random: false,
            },
            move: {
              enable: false, // ❌ No se mueven
            },
            collisions: {
              enable: true,
            },
          },
        }}
      />
    </div>
  );
}
