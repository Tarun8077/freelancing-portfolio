import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion';

export default function Process() {
  return (
    <section id="process" className="section container-px scroll-mt-24">
      <SectionHeading
        label="04 — How We Work"
        title="A simple, proven process"
        subtitle="No mystery, no chaos. Four clear steps from first conversation to a live product you're proud of."
      />

      <motion.ol
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6"
      >
        {/* connecting accent line (desktop horizontal) */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent lg:block"
          aria-hidden
        />

        {processSteps.map(({ icon: Icon, step, title, description }) => (
          <motion.li
            key={step}
            variants={fadeUp}
            className="group relative flex flex-col gap-4"
          >
            {/* connecting accent line (mobile vertical) */}
            <div
              className="pointer-events-none absolute left-6 top-12 h-full w-px bg-gradient-to-b from-border-subtle to-transparent lg:hidden"
              aria-hidden
            />

            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border-subtle bg-elevated text-secondary transition-all duration-300 ease-premium group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent-bright">
                <Icon className="text-xl" />
              </span>
              <span className="font-mono text-sm text-muted">{step}</span>
            </div>

            <div className="flex flex-col gap-2 lg:pr-4">
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="leading-relaxed text-secondary">{description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
