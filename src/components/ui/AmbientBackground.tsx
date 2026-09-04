'use client';

import React from 'react';

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* ─── Layer 1: Ambient Base Gradient Wash ──────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-slate-50 to-slate-100/60" />

      {/* ─── Layer 2: Moving Aurora Floating Orbs ─────────────────────────── */}
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

      {/* ─── Layer 3: Moving Tactile Micro-Dot Matrix & Circuit Mesh ─────── */}
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
