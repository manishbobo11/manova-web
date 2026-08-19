import { useEffect } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import { PrincipleRow, PrincipleGrid } from '../components/website/PrincipleRow';
import { SecondaryButton } from '../components/website/Buttons';

/** Each boundary as a pair: what Manova is, and where it stops. */
const BOUNDARIES = [
  ['Reflection, not diagnosis', 'Manova reflects patterns. It does not label them clinically.'],
  ['Support, not replacement', 'Not a substitute for professional mental-health care'],
  ['Human support when it matters', 'High-risk situations point toward people, not away from them'],
  ['Separated by design', 'Safety handling is kept apart from everyday conversation, so boundaries hold.'],
];

const SafetyPage = () => {
  useEffect(() => {
    document.title = 'Safety | Manova';
  }, []);

  return (
    <div>
      <PageHero eyebrow="Safety"
        lead="Not buried in legal text. It shapes how Manova is built, and where it deliberately stops."
      >
        Built with boundaries
      </PageHero>

      <Section tone="dim">
        <PrincipleGrid>
          {BOUNDARIES.map(([term, meaning], i) => (
            <PrincipleRow key={term} term={term} meaning={meaning} delay={(i % 2) * 0.08} />
          ))}
        </PrincipleGrid>
      </Section>

      {/* Deliberately the most findable block on the page — never abbreviated. */}
      <Section>
        <Reveal>
          <div className="max-w-2xl rounded-2xl border border-accent/30 bg-accent-wash px-7 py-8 sm:px-10 sm:py-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight">
              If you are in crisis right now
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              If you or someone you know is in immediate danger, please contact your local emergency services.
              In India, the KIRAN Mental Health Helpline is available at{' '}
              <a
                href="tel:18005990019"
                className="text-ink font-semibold underline decoration-accent decoration-2 underline-offset-4"
              >
                1800-599-0019
              </a>
              , free and around the clock.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="dim">
        <Statement>What we won’t claim</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            No clinical validation, regulatory approval, or certifications Manova doesn’t hold. If that
            changes, we’ll say so here.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9">
            <SecondaryButton to="/privacy">How your data is treated</SecondaryButton>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default SafetyPage;
