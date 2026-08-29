import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const DARK_PALETTE = {
  base: "#07070c",
  blobs: [
    "rgba(0, 191, 255, 0.35)",
    "rgba(128, 77, 238, 0.30)",
    "rgba(145, 94, 255, 0.22)",
  ],
  grid: "rgba(255, 255, 255, 0.035)",
};

const LIGHT_PALETTE = {
  base: "#eef1f7",
  blobs: [
    "rgba(0, 191, 255, 0.28)",
    "rgba(128, 77, 238, 0.20)",
    "rgba(81, 175, 218, 0.24)",
  ],
  grid: "rgba(30, 30, 50, 0.04)",
};

// A lightweight, original canvas backdrop — three soft drifting light fields
// plus a faint dot grid, in place of the stock mountain-illustration template.
function HeroBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const palette = resolvedTheme === "light" ? LIGHT_PALETTE : DARK_PALETTE;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId;

    const blobs = palette.blobs.map((color, i) => ({
      color,
      radiusRatio: 0.42 - i * 0.06,
      speed: 0.00012 + i * 0.00006,
      angle: (i / palette.blobs.length) * Math.PI * 2,
      orbitRatio: 0.22 + i * 0.08,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = () => {
      const step = 42;
      ctx.strokeStyle = palette.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const draw = (t) => {
      ctx.fillStyle = palette.base;
      ctx.fillRect(0, 0, width, height);
      drawGrid();

      const cx = width / 2;
      const cy = height * 0.42;

      blobs.forEach((blob) => {
        const angle = blob.angle + t * blob.speed;
        const orbit = Math.min(width, height) * blob.orbitRatio;
        const x = cx + Math.cos(angle) * orbit;
        const y = cy + Math.sin(angle) * orbit * 0.6;
        const radius = Math.min(width, height) * blob.radiusRatio;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [resolvedTheme]);

  return (
    <div className="absolute top-0 w-full h-[100svh] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-[#07070c] to-[#eef1f7]" />
    </div>
  );
}

export default HeroBackground;
