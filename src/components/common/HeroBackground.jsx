import { useEffect, useRef } from 'react';

// Ambient hero backdrop: breathing electric-blue aura + faint grid,
// masked and faded into the base background, plus a cursor-following
// glow on pointer devices. Purely decorative.
export default function HeroBackground() {
  const wrapRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Desktop pointers only; skip entirely for touch and reduced motion.
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const wrap = wrapRef.current;
        const glow = glowRef.current;
        if (!wrap || !glow) return;
        const rect = wrap.getBoundingClientRect();
        // Only track while the hero is on screen.
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        glow.style.opacity = '1';
      });
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* faint grid */}
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-60"
        style={{
          maskImage: 'radial-gradient(70% 60% at 60% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(70% 60% at 60% 30%, black, transparent 80%)',
        }}
      />

      {/* primary breathing aura (top-right) */}
      <div className="absolute -right-[10%] -top-[15%] h-[55vw] max-h-[720px] w-[55vw] max-w-[720px] animate-aura-breathe rounded-full bg-accent-radial blur-[40px]" />

      {/* secondary soft glow (left) */}
      <div className="absolute -left-[15%] top-[30%] h-[40vw] max-h-[480px] w-[40vw] max-w-[480px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)] blur-[60px]" />

      {/* cursor-following glow (desktop only) */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[480px] w-[480px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(77,139,255,0.14) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)',
        }}
      />

      {/* fade to base at the bottom for a clean section seam */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
