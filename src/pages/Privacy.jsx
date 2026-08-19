import { useEffect } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import { PrincipleRow, PrincipleGrid } from '../components/website/PrincipleRow';

const PRINCIPLES = [
  ['You decide what you share', 'No hidden collection running underneath a conversation'],
  ['Your data is not sold', 'Not to third parties. Not planned.'],
  ['Context serves you', 'Never an advertising profile'],
  ['We say what we don’t know yet', 'Rather than claim what we can’t stand behind'],
];

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy | Manova';
  }, []);

  return (
    <div>
      <PageHero eyebrow="Privacy"
        lead="A product principle, not a page you skip past."
      >
        Your inner world deserves privacy
      </PageHero>

      <Section tone="dim">
        <PrincipleGrid>
          {PRINCIPLES.map(([term, meaning], i) => (
            <PrincipleRow key={term} term={term} meaning={meaning} delay={(i % 2) * 0.08} />
          ))}
        </PrincipleGrid>
      </Section>

      <Section>
        <Statement>A full policy, in plain language</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            Covering what’s collected, how long it’s kept, and how to request deletion, published here before
            Manova leaves private beta.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-ink-soft">
            Questions meanwhile:{' '}
            <a
              href="mailto:manish@manova.health"
              className="text-ink font-medium underline decoration-accent underline-offset-4"
            >
              manish@manova.health
            </a>
          </p>
        </Reveal>
      </Section>
    </div>
  );
};

export default PrivacyPage;
