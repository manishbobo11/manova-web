import { useEffect } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';
import HowItWorksSteps from '../components/website/HowItWorksSteps';
import { PrimaryButton } from '../components/website/Buttons';

/**
 * The dedicated route renders the same HowItWorksSteps component as the
 * landing section — only `spacious` differs, since a dedicated page can afford
 * more breathing room. One implementation, so the two cannot drift apart.
 */
const HowItWorksPage = () => {
  useEffect(() => {
    document.title = 'How Manova Works | Manova';
  }, []);

  return (
    <div>
      <PageHero eyebrow="How it works" lead="No assessment to complete. You just start talking">
        Simple on the surface
        <br />
        <span className="text-accent">Attentive underneath</span>
      </PageHero>

      <Section tone="dim" size="lg">
        <HowItWorksSteps spacious />
      </Section>

      <Section>
        <Statement>Reflection, not diagnosis</Statement>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ink-soft leading-[1.6] max-w-lg">
            Manova notices what a single conversation never could, and offers it back as something worth
            thinking about. It is not a clinical assessment.
          </p>
        </Reveal>
      </Section>

      <Section tone="veil" size="lg">
        <div className="text-center">
          <Statement align="center">Start where you are</Statement>
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

export default HowItWorksPage;
