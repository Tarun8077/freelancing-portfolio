import { motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { site } from '../data/site';
import { valueChips, stats } from '../data/content';
import ProfileImage from '../components/ui/ProfileImage';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { staggerContainer, fadeUp, scaleIn, viewportOnce } from '../lib/motion';

export default function About() {
  return (
    <section id="about" className="section container-px scroll-mt-24">
      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: portrait */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:sticky lg:top-28"
        >
          <ProfileImage />
        </motion.div>

        {/* Right: story */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-6"
        >
          <motion.span variants={fadeUp} className="label-mono">
            03 — About
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-display-md font-semibold text-balance text-primary"
          >
            I care about your business,{' '}
            <span className="text-accent-bright">not just your code</span>.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex max-w-prose flex-col gap-4 text-lg leading-relaxed text-secondary"
          >
            <p>
              I&apos;m {site.name}, a Full Stack Developer based in {site.location}. I build fast,
              modern websites and web apps for startups, restaurants, and growing businesses — the
              kind of work that doesn&apos;t just look good, but actually moves the needle.
            </p>
            <p>
              What sets me apart isn&apos;t only the tech. It&apos;s that I start with your goals.
              Before I write a line of code, I want to understand your customers, your market, and
              what success looks like for you. The code is a means to that end — never the point.
            </p>
            <p>
              Whether it&apos;s a polished landing page, a full-stack platform, or an AI-powered
              feature, I deliver clean, scalable work on time — and I keep you in the loop the whole
              way, in plain language, no jargon.
            </p>
          </motion.div>

          {/* value chips */}
          <motion.ul variants={fadeUp} className="flex flex-wrap gap-2.5">
            {valueChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/[0.02] px-3.5 py-1.5 text-sm text-secondary"
              >
                <HiOutlineCheckCircle className="text-base text-accent-bright" />
                {chip}
              </li>
            ))}
          </motion.ul>

          {/* stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-4 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-border-subtle pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
