const STACK = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Python',
  'FastAPI',
  'Flask',
  'REST APIs',
  'PostgreSQL',
  'TensorFlow',
  'Git & GitHub',
  'Framer Motion',
  'Vite',
];

function Row({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {STACK.map((tech) => (
        <li key={tech} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-mono text-sm uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent-bright sm:px-8">
            {tech}
          </span>
          <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

// Infinite scrolling stack ticker between hero and services. The track holds
// two identical rows and slides -50%, so the loop is seamless. Pauses on
// hover; the duplicate row is hidden from assistive tech.
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="pause-on-hover mask-fade-x relative -mt-6 overflow-hidden border-y border-border-subtle/60 bg-white/[0.015] py-5"
    >
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
