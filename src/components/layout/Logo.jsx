import { site } from '../../data/site';

export default function Logo({ onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className="group flex items-center gap-2.5"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(37,99,235,0.8)] transition-transform duration-300 ease-premium group-hover:scale-105">
        {site.monogram}
      </span>
      <span className="hidden font-display text-[0.95rem] font-semibold tracking-tight text-primary sm:block">
        {site.name}
      </span>
    </a>
  );
}
