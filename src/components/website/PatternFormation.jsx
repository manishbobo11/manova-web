import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * Single moments becoming a pattern.
 *
 * Scattered points are separate conversations. As the section enters view the
 * threads between them *draw* — they are not faded in — because the idea being
 * shown is connection forming over time, not elements arriving. The points that
 * recur brighten and hold; the one-off stays faint.
 */

const MOMENTS = [
  { x: 60, y: 140, r: 3.5, recurring: true },
  { x: 148, y: 62, r: 3, recurring: true },
  { x: 232, y: 152, r: 2.4, recurring: false },
  { x: 318, y: 74, r: 3.5, recurring: true },
  { x: 404, y: 148, r: 3, recurring: true },
  { x: 492, y: 66, r: 2.4, recurring: false },
  { x: 570, y: 132, r: 4.5, recurring: true },
];

// Threads only between the recurring points — a pattern is what repeats.
const THREADS = [
  'M60 140 C 100 100, 118 78, 148 62',
  'M148 62 C 210 100, 262 104, 318 74',
  'M318 74 C 356 104, 372 120, 404 148',
  'M404 148 C 460 152, 520 148, 570 132',
];

const EASE = [0.22, 1, 0.36, 1];

const PatternFormation = ({ className = '' }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const viewport = { once: true, margin: '-15% 0px' };

  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 640 210" className="w-full h-auto">
        <defs>
          <linearGradient id="pf-thread" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C7A5F2" />
            <stop offset="1" stopColor="#6C59D3" />
          </linearGradient>
        </defs>

        {THREADS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#pf-thread)"
            strokeWidth="1.25"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 1.1, delay: 0.35 + i * 0.28, ease: EASE }}
          />
        ))}

        {MOMENTS.map((m, i) => (
          <motion.circle
            key={`${m.x}-${m.y}`}
            cx={m.x}
            cy={m.y}
            r={m.r}
            fill={m.recurring ? '#6C59D3' : '#FFFFFF'}
            stroke={m.recurring ? 'none' : '#8B78E2'}
            strokeWidth={m.recurring ? 0 : 1.1}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.3 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: m.recurring ? 1 : 0.45, scale: 1 }
            }
            viewport={viewport}
            transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
            style={{ transformOrigin: `${m.x}px ${m.y}px` }}
          />
        ))}

        {/* the understanding the thread arrives at */}
        <motion.circle
          cx="570"
          cy="132"
          r="15"
          fill="none"
          stroke="#6C59D3"
          strokeWidth="1"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.5 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 0.5, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 1, delay: 1.7, ease: EASE }}
          style={{ transformOrigin: '570px 132px' }}
        />
      </svg>

      <div className="mt-6 grid grid-cols-4 gap-2 text-[11px] sm:text-xs uppercase tracking-wider text-ink-faint">
        {['A moment', 'Another', 'A pattern', 'Understanding'].map((label, i) => (
          <motion.span
            key={label}
            className={i === 3 ? 'text-accent font-medium' : ''}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.3 }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default PatternFormation;
