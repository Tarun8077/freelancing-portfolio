import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineMapPin } from 'react-icons/hi2';
import { site } from '../data/site';
import Button from '../components/ui/Button';
import ProfileImage from '../components/ui/ProfileImage';
import ScrollIndicator from '../components/ui/ScrollIndicator';
import HeroBackground from '../components/common/HeroBackground';
import { staggerContainer, fadeUp, scaleIn, EASE } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-24"
    >
      <HeroBackground />

      <div className="container-px relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left: value proposition */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          {/* status badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs tracking-wide text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Available for freelance work
          </motion.span>

          {/* headline */}
          <motion.h1
            variants={fadeUp}
            className="text-display-xl font-bold text-balance text-primary"
          >
            I build fast, scalable web apps that{' '}
            <span className="relative whitespace-normal text-accent-bright md:whitespace-nowrap">
              grow your business
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-accent to-accent-bright/40"
              />
            </span>
            .
          </motion.h1>

          {/* sub-headline */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-secondary"
          >
            Full Stack Developer helping startups, restaurants, and growing businesses ship
            modern, high-performing websites and apps — from first idea to launch day.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button as="a" href="#contact" variant="primary" size="lg">
              Start a Project
              <HiArrowRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
            </Button>
            <Button as="a" href="#work" variant="secondary" size="lg">
              View My Work
            </Button>
          </motion.div>

          {/* trust micro-line */}
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-2 font-mono text-xs text-muted"
          >
            <HiOutlineMapPin className="text-sm" />
            Based in {site.location} · Working with clients worldwide
          </motion.p>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          <ProfileImage priority />
        </motion.div>
      </div>

      <ScrollIndicator href="#services" />
    </section>
  );
}
