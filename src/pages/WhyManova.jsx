import { useEffect } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import MomentToUnderstanding from '../components/website/MomentToUnderstanding';
import { PrimaryButton, SecondaryButton } from '../components/website/Buttons';

const SHAPED_BY = ['recurring situations', 'relationships', 'routines', 'reactions', 'what keeps returning'];

const WhyManovaPage = () => {
  useEffect(() => {
    document.title = 'Why Manova | Manova';
  }, []);

  return (
    <div>
      <PageHero eyebrow="Why Manova"
      >
        A conversation is a moment.
          <br />
          <span className="text-accent">You are a pattern</span>
      </PageHero>

      {/* The whole argument, as one contrast. */}
      <Section tone="dim">
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-16">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-4">Most AI</p>
              <p className="font-heading text-2xl sm:text-3xl font-semibold text-ink-faint leading-snug">
                Remembers conversations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">Manova</p>
              <p className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-snug">
                Understands patterns over time.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-20">
          <MomentToUnderstanding />
        </div>
      </Section>

      <Section>
        <Statement>You shouldn’t have to start from zero every time</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-lg">
            What you feel rarely comes from nowhere. It’s shaped by{' '}
            {SHAPED_BY.map((item, i) => (
              <span key={item}>
                <span className="text-ink font-medium">{item}</span>
                {i < SHAPED_BY.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-lg">
            Manova reflects those patterns back. You decide what they mean.
          </p>
        </Reveal>
      </Section>

      <Section tone="veil" size="lg">
        <div className="text-center">
          <Statement align="center">See how it works</Statement>
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <PrimaryButton to="/how-it-works" className="!bg-accent !text-white hover:!bg-accent-deep">
                How it works
              </PrimaryButton>
              <SecondaryButton
                to="/human-model"
                
              >
                Explore the Human Model
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default WhyManovaPage;
