import { motion } from 'framer-motion';
import Reveal from './Reveal';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * The three How It Works steps — one implementation, shared by the landing
 * section and the dedicated /how-it-works route, so the two can never drift.
 * The dedicated page passes `spacious` for a little more breathing room.
 */

const EASE = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    n: '01',
    title: 'Talk naturally',
    body: 'Share what’s on your mind, in your own words',
    img: '/images/how-it-works/talk-naturally.png',
  },
  {
    n: '02',
    title: 'Manova learns your patterns',
    body: 'Over time, recurring themes and context begin to connect',
    img: '/images/how-it-works/manova-learns-patterns.png',
  },
  {
    n: '03',
    title: 'Understand yourself better',
    body: 'See what may be difficult to notice in a single moment',
    img: '/images/how-it-works/understand-yourself-better.png',
  },
];

const HowItWorksSteps = ({ spacious = false }) => {
  const prm = usePrefersReducedMotion();

  return (
    <div className={`grid sm:grid-cols-3 ${spacious ? 'gap-14 sm:gap-12' : 'gap-12 sm:gap-10'}`}>
      {STEPS.map((step, i) => (
        <Reveal key={step.n} delay={i * 0.12}>
          <div>
            {/* Large editorial image area — no card chrome around it. */}
            <div className={`aspect-[4/3] rounded-2xl overflow-hidden bg-accent-wash ${spacious ? 'mb-8' : 'mb-7'}`}>
              <motion.img
                src={step.img}
                alt=""
                loading="lazy"
                decoding="async"
                width="1448"
                height="1086"
                className="w-full h-full object-cover"
                initial={prm ? false : { scale: 1.06, opacity: 0 }}
                whileInView={prm ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, delay: i * 0.12, ease: EASE }}
              />
            </div>
            <span className="block font-heading text-xs text-accent tracking-[0.2em]">{step.n}</span>
            <h3
              className={`mt-2 font-heading font-semibold text-ink leading-[1.25] ${
                spacious ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              }`}
            >
              {step.title}
            </h3>
            <p className="mt-2.5 text-ink-soft leading-[1.6]">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default HowItWorksSteps;
