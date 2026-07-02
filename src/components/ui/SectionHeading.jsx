import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '../../lib/motion';

// Consistent section header: mono label + H2 + optional subheading
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {label && (
        <motion.span variants={fadeUp} className="label-mono">
          {label}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} className="text-display-md font-semibold text-balance">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-lg leading-relaxed text-secondary">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
