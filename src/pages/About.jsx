import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import { PrimaryButton } from '../components/website/Buttons';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Manova';
  }, []);

  return (
    <div>
      {/* Why Manova exists */}
      <PageHero eyebrow="About"
        lead="Every wellness app we tried treated each visit like the first one."
      >
        Understanding a person takes longer than a chat
      </PageHero>

      {/* Mission */}
      <Section tone="dim">
        <Statement>
          We’re building something that remembers the shape of a person, not their last mood entry
        </Statement>
      </Section>

      {/* Vision */}
      <Section>
        <Statement>Optimizing for understanding, not engagement</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            Not daily streaks. Not time in app. If our{' '}
            <Link
              to="/philosophy"
              className="text-ink font-medium underline decoration-accent underline-offset-4"
            >
              philosophy
            </Link>{' '}
            resonates more than a feature list, that’s by design.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-ink-faint">In private beta on iOS and Android. Deliberately building slowly.</p>
        </Reveal>
      </Section>

      <Section tone="veil" size="lg">
        <div className="text-center">
          <Statement align="center">Come experience Manova</Statement>
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

export default AboutPage;
