import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import { SecondaryButton } from '../components/website/Buttons';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/** Six beliefs, stated once. No elaboration — the statement is the argument. */
const TENETS = [
  'Humans are not scores',
  'Context changes meaning',
  'Nobody is understood in one sitting',
  'Clarity belongs to you, not the system',
  'Never a substitute for people',
  'Understanding, not dependency',
];

const EASE = [0.22, 1, 0.36, 1];

const PhilosophyPage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.title = 'Our Philosophy | Manova';
  }, []);

  return (
    <div>
      <PageHero eyebrow="Our Philosophy"
      >
        Technology should help us understand ourselves, not replace ourselves
      </PageHero>

      <Section tone="dim" size="lg">
        <ul className="divide-y divide-line">
          {TENETS.map((tenet, i) => (
            <motion.li
              key={tenet}
              className="py-8 sm:py-10"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <p className="font-heading text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-[1.15] lg:leading-[1.12] tracking-tight max-w-none">
                <span className="text-accent/50 text-base sm:text-lg align-super mr-4 font-medium tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {tenet}
              </p>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section>
        <Statement>Built from these, not decorated with them</Statement>
        <Reveal delay={0.15}>
          <div className="mt-9">
            <SecondaryButton to="/human-model">See it in the Human Model</SecondaryButton>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default PhilosophyPage;
