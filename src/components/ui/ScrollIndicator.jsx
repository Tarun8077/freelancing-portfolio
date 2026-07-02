import { motion } from 'framer-motion';

// Subtle animated "scroll" cue anchored to the next section.
export default function ScrollIndicator({ href = '#services' }) {
  return (
    <motion.a
      href={href}
      aria-label="Scroll to content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-secondary">
        Scroll
      </span>
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border-subtle p-1">
        <motion.span
          className="h-1.5 w-1 rounded-full bg-accent-bright"
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
    </motion.a>
  );
}
