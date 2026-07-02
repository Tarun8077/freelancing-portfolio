import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowRight, HiArrowDownTray } from 'react-icons/hi2';
import { navLinks, site } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import Logo from './Logo';
import Button from '../ui/Button';
import { EASE } from '../../lib/motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
          scrolled
            ? 'border-b border-border-subtle bg-base/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-px flex h-[72px] items-center justify-between">
          <Logo onClick={close} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-3.5 py-2 text-sm transition-colors duration-200 hover:text-primary ${
                      isActive ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-bright"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button
              as="a"
              href={site.resume}
              download
              variant="ghost"
              size="md"
              className="!px-3"
            >
              <HiArrowDownTray className="text-base" />
              Résumé
            </Button>
            <Button as="a" href="#contact" variant="primary" size="md">
              Start a Project
              <HiArrowRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border-subtle bg-white/[0.02] text-primary lg:hidden"
          >
            {open ? <HiXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 flex flex-col bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.4, ease: EASE }}
                  className="border-b border-border-subtle py-4 font-display text-3xl font-semibold text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
              className="flex flex-col gap-3 px-8 pb-10"
            >
              <Button as="a" href="#contact" onClick={close} variant="primary" size="lg" className="w-full">
                Start a Project
                <HiArrowRight />
              </Button>
              <Button as="a" href={site.resume} download variant="secondary" size="lg" className="w-full">
                <HiArrowDownTray />
                Download Résumé
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
