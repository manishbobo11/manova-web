import Reveal from './Reveal';

/**
 * A term and its one-line meaning, on a hairline rule.
 *
 * Shared by Safety, Privacy and the Human Model, which each had a slightly
 * different copy of this pattern (pt-5 vs pt-6, text-lg vs text-lg sm:text-xl).
 * Hover is colour-only — nothing here may change layout.
 */
export const PrincipleRow = ({ term, meaning, delay = 0, icon: Icon }) => (
  <Reveal delay={delay}>
    <div className="group border-t border-line pt-6">
      <dt className="flex items-center gap-3 font-heading text-lg sm:text-xl font-semibold text-ink leading-snug transition-colors duration-300 group-hover:text-accent-deep">
        {Icon && <Icon className="w-5 h-5 shrink-0 text-accent" />}
        {term}
      </dt>
      <dd className="mt-2.5 text-ink-soft leading-relaxed">{meaning}</dd>
    </div>
  </Reveal>
);

/** Grid wrapper so the columns match wherever the rows are used. */
export const PrincipleGrid = ({ children, columns = 2 }) => (
  <dl
    className={`grid gap-x-14 gap-y-12 ${
      columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'
    }`}
  >
    {children}
  </dl>
);

export default PrincipleRow;
