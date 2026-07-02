import { useState } from 'react';
import { site } from '../../data/site';

// Hero centerpiece: portrait cropped into a premium rounded image with a
// glassmorphism frame, blue glow, and an animated floating gradient behind it.
// Falls back to a branded monogram panel if `public/profile.webp` fails to load —
// the fallback wears the exact same treatment so the layout never looks bare.
export default function ProfileImage({ priority = false }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="group relative mx-auto w-full max-w-sm animate-float-y lg:mx-0">
      {/* animated floating gradient (orbiting conic bloom) */}
      <div className="pointer-events-none absolute -inset-10 -z-10" aria-hidden>
        <div className="absolute inset-0 animate-gradient-orbit rounded-full bg-[conic-gradient(from_0deg,rgba(37,99,235,0.55),rgba(77,139,255,0.15),rgba(59,130,246,0.5),rgba(37,99,235,0.55))] opacity-70 blur-[46px]" />
      </div>

      {/* soft blue glow halo */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-accent-radial opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      {/* glassmorphism frame */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-glow-lg backdrop-blur-xl">
        {/* top sheen */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          aria-hidden
        />
        {/* inner ring for glass depth */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
          aria-hidden
        />

        <div className="aspect-[4/5] w-full p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
            {!errored ? (
              <img
                src="/profile.webp"
                alt={`${site.name}, ${site.title}`}
                onError={() => setErrored(true)}
                className="h-full w-full scale-[1.01] object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                decoding="async"
                width="800"
                height="1000"
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-elevated-2 to-base">
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-2xl bg-accent font-display text-2xl font-bold text-white shadow-glow">
                    {site.monogram}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                    {site.name}
                  </span>
                </div>
              </div>
            )}

            {/* subtle bottom vignette to seat the portrait in the frame */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        {/* floating availability chip */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-base/70 px-3 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="font-mono text-[0.7rem] text-secondary">Open to work</span>
        </div>
      </div>

      {/* floating accent card */}
      <div className="absolute -right-4 -top-4 z-20 hidden rounded-xl border border-white/10 bg-elevated/80 px-4 py-3 shadow-card backdrop-blur-md sm:block">
        <p className="font-display text-lg font-semibold text-primary">Full-Stack</p>
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">React · Python · AI</p>
      </div>
    </div>
  );
}
