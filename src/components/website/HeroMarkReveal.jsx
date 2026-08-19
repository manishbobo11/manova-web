import { useId } from 'react';
import { motion } from 'framer-motion';
import { MARK_VIEWBOX, MARK_PATHS } from '../brand/markPaths';
import MarkGradients from '../brand/MarkGradients';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * The hero's opening statement, told with the brand mark itself.
 *
 *   1. the self appears
 *   2. the reflection forms beside it — mirrored in, as a reflection would
 *   3. the space between them resolves into clarity
 *   4. a thread settles around the whole, closing the mark
 *
 * The motion is the argument: understanding is not one shape, it is what
 * forms between a person and their reflection over time. Reduced motion gets
 * the finished mark immediately, with no sequence and no drift.
 */

const EASE = [0.22, 1, 0.36, 1];

const HeroMarkReveal = ({ className = '' }) => {
  const uid = useId().replace(/:/g, '');
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        <svg viewBox={MARK_VIEWBOX} className="w-full h-auto">
          <MarkGradients id={uid} />
          <path d={MARK_PATHS.self} fill={`url(#${uid}-self)`} />
          <path d={MARK_PATHS.reflection} fill={`url(#${uid}-reflection)`} />
          <path d={MARK_PATHS.clarity} fill="#6C59D3" />
        </svg>
      </div>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox={MARK_VIEWBOX} className="w-full h-auto">
        <MarkGradients id={uid} />

        {/* the quiet field the mark settles into */}
        {/* r is sized so the 1.14 entrance scale still lands inside the
            viewBox — otherwise the ring clips at the edge mid-animation. */}
        <motion.circle
          cx="43.5"
          cy="43.5"
          r="36"
          fill="none"
          stroke="#6C59D3"
          strokeWidth="0.4"
          initial={{ opacity: 0, scale: 1.14 }}
          animate={{ opacity: [0, 0.35, 0.18], scale: 1 }}
          transition={{ duration: 2.6, delay: 1.5, ease: EASE, times: [0, 0.5, 1] }}
          style={{ transformOrigin: '43.5px 43.5px' }}
        />

        {/* 1 — the self */}
        <motion.path
          d={MARK_PATHS.self}
          fill={`url(#${uid}-self)`}
          initial={{ opacity: 0, x: -7, scale: 0.965 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.15, ease: EASE }}
          style={{ transformOrigin: '43.5px 43.5px' }}
        />

        {/* 2 — the reflection, arriving mirrored from the far side */}
        <motion.path
          d={MARK_PATHS.reflection}
          fill={`url(#${uid}-reflection)`}
          initial={{ opacity: 0, x: 13, scaleX: -1 }}
          animate={{ opacity: 1, x: 0, scaleX: 1 }}
          transition={{ duration: 1.7, delay: 0.85, ease: EASE }}
          style={{ transformOrigin: '43.5px 43.5px' }}
        />

        {/* 3 — clarity, which only exists in the space between the two */}
        <motion.path
          d={MARK_PATHS.clarity}
          fill="#6C59D3"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 1.9, ease: EASE }}
          style={{ transformOrigin: '46px 45px' }}
        />
      </svg>
    </div>
  );
};

export default HeroMarkReveal;
