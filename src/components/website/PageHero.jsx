import Section, { Eyebrow, Statement } from './Section';

/**
 * The standard top-of-page block: label, statement, optional lead.
 *
 * Every inner page opened with its own copy of this markup, which is how the
 * eyebrow tracking and heading scale drifted apart between pages. One component
 * now owns the rhythm.
 */
const PageHero = ({ eyebrow, children, lead, size = 'lg' }) => (
  <Section size={size}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Statement as="h1" lead={lead}>
      {children}
    </Statement>
  </Section>
);

export default PageHero;
