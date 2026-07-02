import { HiArrowRight, HiArrowDownTray, HiArrowUp } from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { site, navLinks } from '../../data/site';
import StatusBadge from '../ui/StatusBadge';

const socials = [
  { icon: FiLinkedin, href: site.linkedin, label: 'LinkedIn' },
  { icon: FiGithub, href: site.github, label: 'GitHub' },
  { icon: FiMail, href: `mailto:${site.email}`, label: 'Email' },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative border-t border-border-subtle bg-base">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-white">
                {site.monogram}
              </span>
              <span className="font-display text-base font-semibold text-primary">{site.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-secondary">
              Full Stack Developer building fast, modern web apps for growing businesses.
            </p>
            <StatusBadge className="w-fit" />
          </div>

          {/* Navigate */}
          <FooterCol title="Navigate">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterCol>

          {/* Connect */}
          <FooterCol title="Connect">
            <FooterLink href={`mailto:${site.email}`}>Email</FooterLink>
            <FooterLink href={site.linkedin} external>
              LinkedIn
            </FooterLink>
            <FooterLink href={site.github} external>
              GitHub
            </FooterLink>
          </FooterCol>

          {/* Get started */}
          <FooterCol title="Get started">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
              Start a Project
              <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              download
              className="group inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
              <HiArrowDownTray />
              Download Résumé
            </a>
            <div className="mt-2 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border-subtle bg-white/[0.02] text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent-bright"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name} · {site.location}
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Designed &amp; built by {site.name}</span>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              Back to top
              <HiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href, external, children }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className="text-sm text-secondary transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}
