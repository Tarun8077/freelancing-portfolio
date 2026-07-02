// Ambient hero backdrop: breathing electric-blue aura + faint grid,
// masked and faded into the base background. Purely decorative.
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
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

      {/* fade to base at the bottom for a clean section seam */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
