import { useEffect } from 'react';
import Section, { Eyebrow, Statement } from '../components/website/Section';
import Reveal from '../components/website/Reveal';
import { PrimaryButton } from '../components/website/Buttons';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page not found | Manova';
  }, []);

  return (
    <Section size="lg">
      <div className="text-center">
        <Eyebrow>404</Eyebrow>
        <Statement as="h1" align="center" lead="Let’s get you back to somewhere real.">
          This page doesn’t exist
        </Statement>
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <PrimaryButton to="/">Back to home</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default NotFoundPage;
