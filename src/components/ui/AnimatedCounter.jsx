import { useCountUp } from '../../hooks/useCountUp';

// Count-up stat: number animates 0 → value when scrolled into view.
export default function AnimatedCounter({ value, suffix = '', label }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="font-display text-display-md font-bold tabular-nums text-primary">
        {current}
        <span className="text-accent-bright">{suffix}</span>
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
