import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { EASE } from '../../lib/motion';

// Single accordion row with animated open/close + rotating chevron.
export default function Accordion({ id, question, answer, isOpen, onToggle }) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-border-subtle">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-primary"
        >
          <span className="text-lg font-medium text-primary">{question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              isOpen
                ? 'border-accent/50 bg-accent/10 text-accent-bright'
                : 'border-border-subtle text-secondary'
            }`}
          >
            <HiChevronDown className="text-lg" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-5 pr-12 leading-relaxed text-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
