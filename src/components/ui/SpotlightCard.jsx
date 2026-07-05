import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// Card wrapper that tracks the cursor and feeds --spot-x / --spot-y to the
// .spotlight-card highlight (see index.css). Renders a motion element so it
// can participate in parent stagger variants. Purely additive on touch
// devices — without mousemove the glow simply never ignites.
export default function SpotlightCard({
  as = 'div',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }, []);

  const Comp = motion[as] || motion.div;

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
