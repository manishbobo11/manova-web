import { useEffect } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Eyebrow, Statement } from '../components/website/Section';
import { PrincipleRow, PrincipleGrid } from '../components/website/PrincipleRow';
import LivingUnderstanding from '../components/website/LivingUnderstanding';
import { PrimaryButton, SecondaryButton } from '../components/website/Buttons';

/** Six facets, one line each. Enough to understand; not documentation. */
const FACETS = [
  ['Experiences', 'What you choose to bring'],
  ['Emotions', 'Your rhythms, never a score'],
  ['Relationships', 'Who keeps appearing'],
  ['Patterns', 'What repetition makes visible'],
  ['Values', 'What seems to matter'],
  ['Growth', 'How all of it shifts'],
];

const HumanModelPage = () => {
  useEffect(() => {
    document.title = 'The Human Model | Manova';
  }, []);

  return (
    <div>
      <Section size="lg">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Eyebrow>The Human Model</Eyebrow>
            <Statement as="h1" lead="Formed gradually, from what you choose to share. Never finished.">
              Not a profile
              <br />A living understanding
            </Statement>
          </div>
          <LivingUnderstanding />
        </div>
      </Section>

      <Section tone="dim">
        <Statement>
          A profile is static
          <br />
          <span className="text-accent">This isn’t</span>
        </Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            Closer to how someone who knows you well holds you in mind: always updating, always open to
            being wrong.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-ink mb-14">
            What it pays attention to
          </h2>
        </Reveal>
        <PrincipleGrid columns={3}>
          {FACETS.map(([term, meaning], i) => (
            <PrincipleRow key={term} term={term} meaning={meaning} delay={(i % 3) * 0.07} />
          ))}
        </PrincipleGrid>
      </Section>

      <Section tone="dim">
        <Statement>Held carefully, never exposed</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            Understanding stays provisional, and exists to serve your reflection, not to reduce you to
            labels.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9">
            <SecondaryButton to="/privacy">How your data is treated</SecondaryButton>
          </div>
        </Reveal>
      </Section>

      <Section tone="veil" size="lg">
        <div className="text-center">
          <Statement align="center">Start building context</Statement>
          <Reveal delay={0.12}>
            <div className="mt-10">
              <PrimaryButton to="/download" className="!bg-accent !text-white hover:!bg-accent-deep">
                Join the private beta
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default HumanModelPage;
