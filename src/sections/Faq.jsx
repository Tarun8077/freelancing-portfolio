import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section container-px scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          label="07 — FAQ"
          title="Questions, answered"
          subtitle="Everything you might be wondering before we start. Still curious? Just reach out."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} variants={fadeUp}>
              <Accordion
                id={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
