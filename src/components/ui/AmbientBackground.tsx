'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE?: any;
    VANTA?: {
      WAVES?: (options: any) => any;
      FOG?: (options: any) => any;
    };
  }
}

export function AmbientBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    let vantaEffect: any = null;
    let isMounted = true;

    // Helper to dynamically load external CDN scripts in order
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Step 1: Load Three.js r134 dependency
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }

        // Step 2: Load Vanta Waves from cdn.jsdelivr.net
        if (!window.VANTA?.WAVES) {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js');
        }

        if (isMounted && vantaRef.current && window.VANTA?.WAVES) {
          vantaEffect = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x2e1065, // deep royal purple tint
            shininess: 30.0,
            waveHeight: 12.0,
            waveSpeed: 0.55,
            zoom: 0.95,
          });
          setVantaLoaded(true);
        }
      } catch {
        // Graceful fallback to CSS aurora mesh if network or CDN is unreachable
      }
    };

    // Small delay to allow main thread to settle first
    const timer = setTimeout(initVanta, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* ─── Layer 1: Ambient Base Gradient Wash ──────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-slate-50 to-slate-100/70" />

      {/* ─── Layer 2: Interactive Dynamic Vanta Mesh (from CDN) ───────────── */}
      <div
        ref={vantaRef}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          vantaLoaded ? 'opacity-25' : 'opacity-0'
        }`}
      />

      {/* ─── Layer 3: Moving Aurora Floating Orbs (Active Baseline & Depth) ─ */}
      {/* Orb 1: Electric Violet - Top Left / Center */}
      <div
        className="absolute -top-32 -left-20 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] rounded-full bg-purple-400/20 blur-[110px] sm:blur-[140px] animate-float-orb-1 transform-gpu"
      />

      {/* Orb 2: Warm Fuchsia / Magenta - Center Right */}
      <div
        className="absolute top-1/3 -right-28 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-fuchsia-400/15 blur-[100px] sm:blur-[130px] animate-float-orb-2 transform-gpu"
      />

      {/* Orb 3: Soft Cyan / Sky Accent - Bottom Left */}
      <div
        className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full bg-sky-400/15 blur-[100px] sm:blur-[130px] animate-float-orb-3 transform-gpu"
      />

      {/* ─── Layer 4: Moving Tactile Micro-Dot Matrix & Circuit Mesh ─────── */}
      <div
        className="absolute inset-0 opacity-[0.045] animate-drift-grid pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4C1D95 1.25px, transparent 1.25px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle Top Linear Vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
    </div>
  );
}

