import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { MARK_PATHS } from '../brand/markPaths';
import MarkGradients from '../brand/MarkGradients';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * Understanding gathering around a person.
 *
 * Layout rules that keep this from overlapping (the previous version floated
 * descriptions, which collided with the curves, the labels and the mark):
 *
 *  - Each concept owns a fixed-height block. The description is always in that
 *    block's normal flow, just at opacity 0 when inactive — so the space is
 *    reserved up front and nothing reflows or floats over anything.
 *  - Blocks sit in the four corners. None of them enters the centre column or
 *    row, so no block can ever touch the mark.
 *  - Every curve starts at x=168 (left side) or x=272 (right side) — beyond any
 *    block's edge whatever its height — and terminates ~54 units from centre,
 *    outside the mark's ~40 unit radius. So a curve can never run under its own
 *    text nor cross the mark.
 *
 * Below `sm` the corner arrangement has no room, so the mark sits on top and
 * the concepts become a two-column grid beneath it — same interaction, same
 * reserved space, no overlap.
 */

const EASE = [0.4, 0, 0.2, 1];

// viewBox 440 x 460, centre (220, 230), mark radius ~40.
const CONCEPTS = [
  {
    label: 'Experiences',
    body: 'Moments that shape your context',
    left: '1.4%',
    top: '2.2%',
    align: 'left',
    curve: 'M168 112 C 178 132, 190 160, 197 181',
  },
  {
    label: 'Relationships',
    body: 'People and connections that influence how life feels',
    left: '64.5%',
    top: '15.2%',
    align: 'right',
    curve: 'M272 158 C 265 168, 259 178, 254 188',
  },
  {
    label: 'Emotions',
    body: 'Feelings that shift across moments and situations',
    left: '64.5%',
    top: '65.2%',
    align: 'right',
    curve: 'M272 296 C 266 286, 261 277, 258 268',
  },
  {
    label: 'Patterns',
    body: 'Things that begin to repeat over time',
    left: '1.4%',
    top: '78.3%',
    align: 'left',
    curve: 'M168 328 C 176 312, 189 292, 195 278',
  },
];

const Concept = ({ c, i, active, setActive, prm, className = '', style }) => {
  const isActive = active === i;
  const open = () => setActive(i);
  const close = () => setActive((cur) => (cur === i ? null : cur));

  return (
    <div
      className={className}
      style={{ ...style, textAlign: c.align === 'right' ? 'right' : 'left' }}
    >
      <button
        type="button"
        onMouseEnter={open}
        onMouseLeave={close}
        onFocus={open}
        onBlur={close}
        onClick={open}
        aria-expanded={isActive}
        className="w-full"
        style={{ textAlign: 'inherit' }}
      >
        <motion.span
          className="inline-block font-heading text-sm sm:text-base font-semibold leading-[1.3]"
          animate={{ color: isActive ? '#4B3D68' : '#111111' }}
          transition={{ duration: 0.25 }}
          style={{
            textShadow: isActive ? '0 0 14px rgba(108,89,211,0.5)' : 'none',
            transition: 'text-shadow 0.3s ease',
          }}
        >
          {c.label}
        </motion.span>
      </button>

      {/* Always present, so its space is reserved and the block never resizes. */}
      <motion.p
        className="mt-1.5 text-[11px] sm:text-xs text-ink-soft leading-[1.5]"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: prm ? 0 : 0.28, ease: EASE }}
        aria-hidden={!isActive}
      >
        {c.body}
      </motion.p>
    </div>
  );
};

/**
 * Module-level so its identity is stable. Declaring this inside the component
 * gave it a new type on every render, which made React tear down and rebuild
 * the whole svg — including the centre mark — on every hover. That teardown
 * was the flicker.
 */
const Diagram = ({ compact = false, active, prm, uid, viewport }) => (
    <svg
      viewBox={compact ? '156 166 128 128' : '0 0 440 460'}
      className="w-full h-auto"
      aria-hidden="true"
    >
      <MarkGradients id={uid} />

      {!compact && CONCEPTS.map((c, i) => {
        const isActive = active === i;
        return (
          <motion.path
            key={c.label}
            d={c.curve}
            fill="none"
            strokeLinecap="round"
            stroke={isActive ? '#6C59D3' : '#D9CDF3'}
            strokeWidth={isActive ? 2 : 1.3}
            initial={prm ? false : { pathLength: 0, opacity: 0 }}
            whileInView={prm ? undefined : { pathLength: 0.75, opacity: 1 }}
            viewport={viewport}
            animate={prm ? undefined : { pathLength: isActive ? 1 : 0.75, opacity: isActive ? 1 : 0.7 }}
            transition={{ duration: isActive ? 0.6 : 0.9, delay: prm ? 0 : 0.35 + i * 0.2, ease: EASE }}
            style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
          />
        );
      })}

      <motion.g
        initial={prm ? false : { opacity: 0, scale: 0.72 }}
        whileInView={prm ? undefined : { opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.1, ease: EASE }}
        style={{ transformOrigin: '220px 230px' }}
      >
        <g transform="translate(180, 190) scale(0.92)">
          <path d={MARK_PATHS.self} fill={`url(#${uid}-self)`} />
          <path d={MARK_PATHS.reflection} fill={`url(#${uid}-reflection)`} />
          <path d={MARK_PATHS.clarity} fill="#6C59D3" />
        </g>
      </motion.g>
    </svg>
);

const LivingUnderstanding = ({ className = '' }) => {
  const uid = useId().replace(/:/g, '');
  const prm = usePrefersReducedMotion();
  const [active, setActive] = useState(null);
  const viewport = { once: true, amount: 0.25 };

  return (
    <div className={`w-full ${className}`}>
      {/* sm and up: corner blocks around the diagram */}
      <div className="hidden sm:block relative">
        <Diagram active={active} prm={prm} uid={uid} viewport={viewport} />
        {CONCEPTS.map((c, i) => (
          <Concept
            key={c.label}
            c={c}
            i={i}
            active={active}
            setActive={setActive}
            prm={prm}
            className="absolute w-[34%] min-h-[5.5rem]"
            style={{ left: c.left, top: c.top }}
          />
        ))}
      </div>

      {/* below sm: mark first, concepts in a grid beneath — no room for corners */}
      <div className="sm:hidden">
        <div className="max-w-[11rem] mx-auto">
          <Diagram compact active={active} prm={prm} uid={uid} viewport={viewport} />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6">
          {CONCEPTS.map((c, i) => (
            <Concept
              key={c.label}
              c={{ ...c, align: 'left' }}
              i={i}
              active={active}
              setActive={setActive}
              prm={prm}
              className="min-h-[5.5rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingUnderstanding;
