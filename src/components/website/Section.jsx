import Reveal from './Reveal';

/**
 * The site's vertical rhythm in one place, so pages stop hand-tuning padding
 * and drifting apart. `tone` picks the surface; `size` picks the breathing room.
 */

// Light-only surfaces. Manova reads as white / warm-white / faint lavender;
// deep navy is reserved for small accents, never a full-section background.
const TONES = {
  paper: 'bg-paper text-ink',
  dim: 'bg-paper-dim text-ink',
  veil: 'bg-accent-veil text-ink',
};

// Desktop majors land 96-140px; mobile majors land 64-88px.
const SIZES = {
  sm: 'py-14 sm:py-20',
  md: 'py-16 sm:py-28',
  lg: 'py-20 sm:py-32',
};

export const Section = ({ tone = 'paper', size = 'md', className = '', children }) => (
  <section className={`${TONES[tone]} ${className}`}>
    <div className={`max-w-6xl mx-auto px-6 lg:px-10 ${SIZES[size]}`}>{children}</div>
  </section>
);

/** Small uppercase label that sits above a heading. */
export const Eyebrow = ({ children, tone = 'accent' }) => (
  <Reveal>
    <p
      className={`text-sm font-medium uppercase tracking-[0.18em] mb-5 ${
        tone === 'light' ? 'text-paper/60' : 'text-accent'
      }`}
    >
      {children}
    </p>
  </Reveal>
);

/**
 * A page's main statement. Large, quiet, and given room — the headline does
 * the work, and `children` is at most a line or two beneath it.
 */
export const Statement = ({ as: Tag = 'h2', children, lead, align = 'left', className = '' }) => (
  <div className={`${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
    <Reveal>
      {/* leading tightens only as the type grows — a flat 1.1 collided at 3xl */}
      <Tag className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-[1.16] sm:leading-[1.12] lg:leading-[1.08] tracking-tight">
        {children}
      </Tag>
    </Reveal>
    {lead && (
      <Reveal delay={0.1}>
        <p
          className={`mt-6 text-lg sm:text-xl leading-[1.6] max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          } opacity-70`}
        >
          {lead}
        </p>
      </Reveal>
    )}
  </div>
);

export default Section;
