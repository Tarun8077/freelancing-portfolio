import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

// Bento service card. `featured` cards span two columns on larger screens
// and carry a slightly richer surface. Hover: lift + blue border ignite +
// icon brighten.
export default function ServiceCard({ icon: Icon, title, description, featured = false }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-card border border-border-subtle bg-elevated/60 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow sm:p-7 ${
        featured ? 'lg:col-span-2 lg:p-8' : ''
      }`}
    >
      {/* featured accent wash */}
      {featured && (
        <div
          className="pointer-events-none absolute inset-0 bg-accent-radial opacity-0 transition-opacity duration-500 group-hover:opacity-60"
          aria-hidden
        />
      )}

      <div className="relative flex flex-col gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-border-subtle bg-white/[0.03] text-secondary transition-all duration-300 ease-premium group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-bright">
          <Icon className={featured ? 'text-2xl' : 'text-xl'} />
        </span>

        <div className="flex flex-col gap-2">
          <h3
            className={`font-display font-semibold text-primary ${
              featured ? 'text-heading' : 'text-lg'
            }`}
          >
            {title}
          </h3>
          <p className="max-w-prose leading-relaxed text-secondary">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}
