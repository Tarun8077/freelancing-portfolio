import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { projects, projectCategories } from '../data/projects';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import { viewportOnce } from '../lib/motion';

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.filter === active);

  return (
    <section id="work" className="section container-px scroll-mt-24">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="02 — Selected Work"
          title="Real projects, real results"
          subtitle="A selection of recent builds — live, shipped, and working for their owners."
        />

        {/* filter tabs */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-premium ${
                  isActive ? 'text-white' : 'text-secondary hover:text-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-accent shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* project rows */}
      <motion.div layout className="mt-16 flex flex-col gap-20 lg:gap-28">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={viewportOnce}
            >
              <ProjectCard project={project} reversed={i % 2 === 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* closing CTA */}
      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <p className="text-lg text-secondary">Have something similar in mind?</p>
        <Button as="a" href="#contact" variant="primary" size="lg">
          Start a Project
          <HiArrowRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
        </Button>
      </div>
    </section>
  );
}
