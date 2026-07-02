import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { services } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import { staggerContainer, viewportOnce } from '../lib/motion';

export default function Services() {
  return (
    <section id="services" className="section container-px scroll-mt-24">
      <SectionHeading
        label="01 — Services"
        title="What I can build for you"
        subtitle="From a single landing page to a full AI-powered platform — everything you need to launch and grow, built by one developer who owns the whole stack."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>

      {/* soft closing CTA */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <p className="text-secondary">Not sure which one fits your idea?</p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-medium text-accent-bright transition-colors duration-300 hover:text-primary"
        >
          Let&apos;s talk
          <HiArrowRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
