// "Available for freelance work" pill with pulsing dot
export default function StatusBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs tracking-wide text-secondary ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      Available for freelance work
    </span>
  );
}
