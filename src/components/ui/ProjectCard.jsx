import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import { fadeUp } from '../../lib/motion';

// Browser-chrome frame with lazy screenshot + branded fallback until the
// real image lands in public/projects/. Tilts gently toward the cursor.
function BrowserFrame({ project }) {
  const [errored, setErrored] = useState(false);
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 6);
    rotateX.set(py * -6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.live}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group/frame relative block overflow-hidden rounded-card border border-border-subtle bg-elevated shadow-card will-change-transform"
    >
      {/* ambient accent glow (uses per-project accent) */}
      <div
        className="pointer-events-none absolute -inset-8 opacity-0 blur-3xl transition-opacity duration-500 group-hover/frame:opacity-40"
        style={{ background: `radial-gradient(50% 50% at 50% 50%, ${project.accent} 0%, transparent 70%)` }}
        aria-hidden
      />

      <div className="relative">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border-subtle bg-elevated-2/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 hidden truncate rounded-md bg-white/[0.04] px-2.5 py-0.5 font-mono text-[0.7rem] text-muted sm:block">
            {project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>

        {/* screenshot / fallback */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-elevated-2 to-base">
          {!errored ? (
            <img
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              onError={() => setErrored(true)}
              loading="lazy"
              decoding="async"
              width="1600"
              height="1000"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-premium group-hover/frame:scale-[1.04]"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <span
                  className="grid h-16 w-16 place-items-center rounded-2xl font-display text-xl font-bold text-white shadow-glow"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.index}
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                  {project.title}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}

// Alternating full-width feature row: screenshot ⇄ text.
export default function ProjectCard({ project, reversed = false }) {
  return (
    <motion.article
      variants={fadeUp}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* screenshot */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <BrowserFrame project={project} />
      </div>

      {/* text */}
      <div className={`flex flex-col items-start gap-5 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-muted">{project.index}</span>
          <span
            className="rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]"
            style={{
              color: project.accent,
              borderColor: `${project.accent}55`,
              backgroundColor: `${project.accent}12`,
            }}
          >
            {project.category}
          </span>
        </div>

        <h3 className="text-heading font-semibold text-primary">{project.title}</h3>

        <p className="max-w-prose leading-relaxed text-secondary">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border-subtle bg-white/[0.02] px-3 py-1 text-sm text-secondary"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 ease-premium hover:bg-accent-soft hover:shadow-glow hover:-translate-y-0.5"
          >
            View Live
            <HiArrowUpRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-btn border border-border-subtle bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 ease-premium hover:border-white/25 hover:bg-white/[0.05]"
          >
            <FiGithub />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
