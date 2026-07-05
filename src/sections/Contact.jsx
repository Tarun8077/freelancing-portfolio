import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  HiArrowRight,
  HiOutlineClock,
  HiOutlineDocumentArrowDown,
  HiOutlineClipboard,
  HiCheck,
  HiExclamationCircle,
} from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { site, emailjs as emailjsConfig } from '../data/site';
import { serviceOptions, budgetOptions } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { staggerContainer, fadeUp, viewportOnce, EASE } from '../lib/motion';

const initialForm = { name: '', email: '', service: '', budget: '', message: '' };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactChannels = [
  { icon: FiMail, href: `mailto:${site.email}`, label: 'Email' },
  { icon: FiLinkedin, href: site.linkedin, label: 'LinkedIn', external: true },
  { icon: FiGithub, href: site.github, label: 'GitHub', external: true },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const configured =
    emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey;

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!emailRe.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Tell me a little about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!configured) {
      // Graceful fallback until EmailJS keys are set (see .env.example).
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          service: form.service || 'Not specified',
          budget: form.budget || 'Not specified',
          message: form.message,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <section id="contact" className="relative section container-px scroll-mt-24 overflow-hidden">
      {/* returning blue aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[45vw] max-h-[600px] w-[45vw] max-w-[600px] -translate-x-1/2 animate-aura-breathe rounded-full bg-accent-radial blur-[50px]" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch + direct channels */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            label="08 — Let's Talk"
            title="Let's build something that works"
            subtitle="Tell me about your project and I'll get back to you — usually within a day. No pressure, no jargon, just a real conversation."
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {/* reply-time promise */}
            <motion.p
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-secondary"
            >
              <HiOutlineClock className="text-sm text-accent-bright" />
              Replies {site.replyTime}
            </motion.p>

            {/* copyable email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Email me directly
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex w-fit items-center gap-3 rounded-btn border border-border-subtle bg-white/[0.02] px-4 py-3 text-left transition-all duration-300 ease-premium hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <span className="text-primary">{site.email}</span>
                <span className="text-muted transition-colors group-hover:text-accent-bright">
                  {copied ? <HiCheck className="text-success" /> : <HiOutlineClipboard />}
                </span>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="font-mono text-xs text-success"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* icon buttons + resume */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
              {contactChannels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  aria-label={c.label}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border-subtle bg-white/[0.02] text-secondary transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-bright"
                >
                  <c.icon size={18} />
                </a>
              ))}
              <a
                href={site.resume}
                download
                className="group inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm font-medium text-primary transition-all duration-300 ease-premium hover:border-white/25 hover:bg-white/[0.05]"
              >
                <HiOutlineDocumentArrowDown className="text-base" />
                Résumé
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="card-surface flex flex-col gap-5 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@company.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              label="Service"
              name="service"
              value={form.service}
              onChange={handleChange}
              options={serviceOptions}
              placeholder="What do you need?"
            />
            <SelectField
              label="Budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              options={budgetOptions}
              placeholder="Rough budget"
            />
          </div>

          <Field
            as="textarea"
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell me about your project, goals, and timeline…"
          />

          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === 'sending'}
              className="w-full sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <Spinner />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <HiArrowRight className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
                </>
              )}
            </Button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <StatusMessage key="ok" tone="success" icon={HiCheck}>
                  Thank you — your message is on its way. I&apos;ll reply {site.replyTime}.
                </StatusMessage>
              )}
              {status === 'error' && (
                <StatusMessage key="err" tone="error" icon={HiExclamationCircle}>
                  {configured
                    ? 'Something went wrong. Please email me directly at '
                    : 'The form isn’t live yet — please email me directly at '}
                  <a href={`mailto:${site.email}`} className="underline hover:text-primary">
                    {site.email}
                  </a>
                  .
                </StatusMessage>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* ---- field primitives ---- */

function Field({ as = 'input', label, name, error, ...props }) {
  const Comp = as;
  const inputId = `contact-${name}`;
  const base =
    'w-full rounded-btn border bg-base/60 px-4 py-3 text-sm text-primary placeholder:text-muted transition-all duration-300 focus-visible:outline-none';
  const state = error
    ? 'border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]'
    : 'border-border-subtle focus:border-accent/60 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]';

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <Comp
        id={inputId}
        name={name}
        rows={as === 'textarea' ? 5 : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`${base} ${state} ${as === 'textarea' ? 'resize-none' : ''}`}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder }) {
  const inputId = `contact-${name}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <select
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-btn border border-border-subtle bg-base/60 px-4 py-3 text-sm transition-all duration-300 focus-visible:outline-none focus:border-accent/60 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] ${
          value ? 'text-primary' : 'text-muted'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-elevated text-primary">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function StatusMessage({ tone, icon: Icon, children }) {
  const tones = {
    success: 'border-success/30 bg-success/10 text-success',
    error: 'border-red-500/30 bg-red-500/10 text-red-300',
  };
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: EASE }}
      role="status"
      className={`flex items-start gap-2 rounded-btn border px-4 py-3 text-sm ${tones[tone]}`}
    >
      <Icon className="mt-0.5 shrink-0 text-base" />
      <span className="text-secondary">{children}</span>
    </motion.p>
  );
}

function Spinner() {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
      aria-hidden
    />
  );
}
