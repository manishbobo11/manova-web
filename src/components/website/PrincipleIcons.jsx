/**
 * Boundary icons — Reflection, Support, Privacy.
 *
 * Hand-authored inline SVG rather than an icon dependency. All three share one
 * spec so they read as a set: 24x24 viewBox, 1.5 stroke, round caps/joins, no
 * fills, and `currentColor` throughout so they inherit the surrounding text
 * colour (and the purple hover state) without extra props.
 *
 * Decorative — the adjacent heading carries the meaning, so they are hidden
 * from assistive tech.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

/** A form and its reflection across a horizon, with the spark of noticing. */
export const ReflectionIcon = ({ className = '' }) => (
  <svg {...base} className={className}>
    <path d="M4 12h16" strokeDasharray="2.5 2.5" opacity="0.55" />
    <path d="M8 9.2c1.6-3.4 4.2-5 6.6-5.7" />
    <path d="M8 14.8c1.6 3.4 4.2 5 6.6 5.7" opacity="0.5" />
    <path d="m17.6 6.6.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7z" />
  </svg>
);

/** Two figures, one steadying the other — support beside, not in place of. */
export const SupportIcon = ({ className = '' }) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="7.5" r="2.8" />
    <path d="M3.6 19.5c0-2.9 2.4-5.2 5.4-5.2s5.4 2.3 5.4 5.2" />
    <path d="M16.4 5.6c1.9 0 3.4 1.5 3.4 3.3 0 2.4-3.4 4.6-3.4 4.6" opacity="0.55" />
    <path d="M16.4 5.6c-1.1 0-2.1.5-2.7 1.3" opacity="0.55" />
  </svg>
);

/** A shield holding a closed centre — kept, not shared. */
export const PrivacyIcon = ({ className = '' }) => (
  <svg {...base} className={className}>
    <path d="M12 3.2 5.4 6v5.6c0 4 2.8 7.6 6.6 8.9 3.8-1.3 6.6-4.9 6.6-8.9V6z" />
    <circle cx="12" cy="11.4" r="1.7" />
    <path d="M12 13.1v2.4" />
  </svg>
);
