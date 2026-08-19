import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/website/Reveal';
import { Eyebrow } from '../components/website/Section';
import HeroMarkReveal from '../components/website/HeroMarkReveal';
import MomentToUnderstanding from '../components/website/MomentToUnderstanding';
import LivingUnderstanding from '../components/website/LivingUnderstanding';
import { PrimaryButton, SecondaryButton } from '../components/website/Buttons';
import HowItWorksSteps from '../components/website/HowItWorksSteps';
import { ReflectionIcon, SupportIcon, PrivacyIcon } from '../components/website/PrincipleIcons';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const CONTAINER = 'max-w-6xl mx-auto px-6 lg:px-10';
const EASE = [0.22, 1, 0.36, 1];

const BOUNDARIES = [
  {
    title: 'Reflection',
    contrast: 'not diagnosis',
    Icon: ReflectionIcon,
    lines: [
      'Manova helps you explore patterns and experiences.',
      'It does not diagnose mental-health conditions.',
    ],
  },
  {
    title: 'Support',
    contrast: 'not replacement',
    Icon: SupportIcon,
    lines: [
      'Technology can help create perspective.',
      'It should never pretend to replace genuine human care.',
    ],
  },
  {
    title: 'Privacy',
    contrast: 'not exploitation',
    Icon: PrivacyIcon,
    lines: [
      'Your personal reflections deserve thoughtful handling.',
      'Privacy should be a product principle, not an afterthought.',
    ],
  },
];

const HomePage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.title = 'Manova — The AI that understands you over time';
  }, []);

  const heroText = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: EASE },
        };

  return (
    <div>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className={`${CONTAINER} pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32`}>
          <div className="flex flex-col items-center text-center">
            <HeroMarkReveal className="w-28 sm:w-36 lg:w-44 mb-10 sm:mb-14" />

            <motion.h1
              className="font-heading text-ink text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-7xl font-semibold max-w-4xl tracking-tight"
              {...heroText(2.5)}
            >
              The AI that understands you over time
            </motion.h1>

            <motion.p
              className="mt-7 text-lg sm:text-xl text-ink-soft max-w-xl leading-relaxed"
              {...heroText(2.75)}
            >
              Talk naturally. Manova learns your patterns and grows with you.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap justify-center gap-4" {...heroText(2.95)}>
              <PrimaryButton to="/download">Join the private beta</PrimaryButton>
              <SecondaryButton to="/how-it-works">Discover how Manova works</SecondaryButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2 — MOMENT TO UNDERSTANDING */}
      <section className="bg-paper-dim">
        <div className={`${CONTAINER} py-20 sm:py-28`}>
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-[1.1] tracking-tight max-w-2xl">
              One conversation is a moment
              <br />
              Understanding takes time
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              Manova connects what you share over time, helping recurring patterns become easier to notice.
            </p>
          </Reveal>
          <div className="mt-16 sm:mt-20">
            <MomentToUnderstanding />
          </div>
        </div>
      </section>

      {/* 3 — HUMAN MODEL */}
      <section className="bg-paper">
        <div className={`${CONTAINER} py-20 sm:py-28`}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
            <Reveal>
              <div>
                <Eyebrow>The Human Model</Eyebrow>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-[1.1] tracking-tight">
                  Not a profile
                  <br />A living understanding
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-md">
                  Experiences, relationships, emotions and recurring patterns gradually form richer context
                  over time.
                </p>
                <div className="mt-9">
                  <SecondaryButton to="/human-model">Explore the Human Model</SecondaryButton>
                </div>
              </div>
            </Reveal>
            <LivingUnderstanding className="max-w-lg mx-auto lg:max-w-none" />
          </div>
        </div>
      </section>

      {/* 4 — HOW IT WORKS */}
      <section className="bg-paper-dim">
        <div className={`${CONTAINER} py-20 sm:py-28`}>
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink leading-tight mb-16">
              How it works
            </h2>
          </Reveal>
          <HowItWorksSteps />
        </div>
      </section>

      {/* 5 — BOUNDARIES */}
      <section className="bg-paper">
        <div className={`${CONTAINER} py-20 sm:py-28`}>
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-20">
            <Reveal>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink leading-tight">
                  Built with boundaries
                </h2>
                <div className="mt-8">
                  <SecondaryButton to="/safety">Read our safety principles</SecondaryButton>
                </div>
              </div>
            </Reveal>

            <div className="divide-y divide-line">
              {BOUNDARIES.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.12}>
                  {/* restrained hover/focus: title warms, a short rule draws, content lifts 3px */}
                  <motion.div
                    className="py-7 first:pt-0 group focus-within:outline-none"
                    initial={false}
                    whileHover={prefersReducedMotion ? undefined : 'active'}
                    whileFocus={prefersReducedMotion ? undefined : 'active'}
                    animate="rest"
                    tabIndex={0}
                    variants={{ rest: { y: 0 }, active: { y: -3 } }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <motion.span
                      className="block h-px w-10 bg-accent origin-left mb-4"
                      variants={{ rest: { scaleX: 0.35, opacity: 0.4 }, active: { scaleX: 1, opacity: 1 } }}
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                    <div className="flex items-start gap-4">
                      <b.Icon className="w-6 h-6 shrink-0 mt-0.5 text-accent transition-colors duration-300 group-hover:text-accent-deep group-focus-within:text-accent-deep" />
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep group-focus-within:text-accent-deep">
                            {b.title}
                          </h3>
                          <span className="text-sm text-accent">{b.contrast}</span>
                        </div>
                        <p className="mt-3 text-ink-soft leading-relaxed max-w-lg">
                          {b.lines[0]}
                          <br className="hidden sm:block" />{' '}
                          {b.lines[1]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — CLOSING CTA */}
      <section className="bg-accent-veil">
        <div className={`${CONTAINER} py-24 sm:py-32 text-center`}>
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-ink leading-tight max-w-2xl mx-auto tracking-tight">
              Understanding that deepens with time
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <PrimaryButton to="/download" className="!bg-accent !text-white hover:!bg-accent-deep">
                Join the private beta
              </PrimaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-sm text-ink-faint">Available on iOS and Android</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
