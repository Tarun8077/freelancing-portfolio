import { motion } from 'framer-motion';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-all duration-300 ease-premium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
};

const variants = {
  primary:
    'btn-sheen bg-accent text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)] hover:bg-accent-soft hover:shadow-glow hover:-translate-y-0.5',
  secondary:
    'border border-border-subtle bg-white/[0.02] text-primary hover:border-white/25 hover:bg-white/[0.05]',
  ghost: 'text-secondary hover:text-primary',
};

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const Comp = motion[as] || motion.button;

  const motionProps = {
    whileTap: { scale: 0.97 },
    className: classes,
  };

  if (as === 'a' || href) {
    return (
      <motion.a href={href} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <Comp {...motionProps} {...props}>
      {children}
    </Comp>
  );
}
