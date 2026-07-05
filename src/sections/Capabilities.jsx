import { motion } from 'framer-motion';
import { skillGroups } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import SpotlightCard from '../components/ui/SpotlightCard';
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion';

export default function Capabilities() {
  return (
    <section id="capabilities" className="section container-px scroll-mt-24">
      <SectionHeading
        label="05 — Capabilities"
        title="The tools I build with"
        subtitle="A focused, modern stack — chosen for speed, scalability, and long-term maintainability."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillGroups.map((group) => (
          <SpotlightCard
            key={group.label}
            variants={fadeUp}
            className="group flex flex-col gap-4 rounded-card border border-border-subtle bg-elevated/60 p-6 transition-colors duration-300 ease-premium hover:border-accent/40"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-shadow duration-300 group-hover:shadow-glow" />
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {group.label}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full border border-border-subtle bg-white/[0.02] px-3 py-1.5 text-sm text-muted transition-all duration-300 ease-premium hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </motion.div>
    </section>
  );
}
