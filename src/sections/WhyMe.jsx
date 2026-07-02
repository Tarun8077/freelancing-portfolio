import { motion } from 'framer-motion';
import { HiOutlineHeart, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineBolt } from 'react-icons/hi2';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { whyReasons, testimonials } from '../data/content';
import { site } from '../data/site';
import SectionHeading from '../components/ui/SectionHeading';
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion';

const icons = [HiOutlineHeart, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineBolt];

export default function WhyMe() {
  const testimonial = testimonials[0];

  return (
    <section id="why" className="section container-px scroll-mt-24">
      <SectionHeading
        label="06 — Why Work With Me"
        title="More than a developer — a partner"
        subtitle="You're not just hiring code. You're hiring someone who treats your project like their own."
      />

      {/* value cards */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 md:grid-cols-3"
      >
        {whyReasons.map((reason, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="group flex flex-col gap-4 rounded-card border border-border-subtle bg-elevated/60 p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-border-subtle bg-white/[0.03] text-secondary transition-all duration-300 ease-premium group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-bright">
                <Icon className="text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-primary">{reason.title}</h3>
              <p className="leading-relaxed text-secondary">{reason.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* testimonial slot (ready to swap real quotes) */}
      <motion.figure
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mt-6 overflow-hidden rounded-card border border-border-subtle bg-elevated/60 p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-accent-radial opacity-30" aria-hidden />
        <RiDoubleQuotesL className="relative text-4xl text-accent/50" aria-hidden />
        {testimonial.eyebrow && (
          <p className="relative mt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-bright">
            {testimonial.eyebrow}
          </p>
        )}
        <blockquote className="relative mt-3 max-w-3xl text-xl leading-relaxed text-primary sm:text-2xl">
          {testimonial.quote}
        </blockquote>
        <figcaption className="relative mt-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display text-sm font-bold text-white shadow-glow">
            {site.monogram}
          </span>
          <span className="flex flex-col">
            <span className="font-medium text-primary">{testimonial.name}</span>
            <span className="font-mono text-xs text-muted">{testimonial.role}</span>
          </span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
