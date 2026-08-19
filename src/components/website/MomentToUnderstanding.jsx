import { useId } from 'react';
import { motion } from 'framer-motion';
import { MARK_PATHS } from '../brand/markPaths';
import MarkGradients from '../brand/MarkGradients';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * One continuous journey: moment → context → pattern → understanding.
 *
 * The four stages and the line that joins them live in a SINGLE svg, so the
 * path is genuinely continuous rather than four objects with dividers between
 * them. Segments share exact endpoints, and they draw one after another in a
 * consistent direction — left to right on desktop, top to bottom on mobile —
 * so the line reads as physically travelling through the story:
 *
 *   stage appears → line advances → next stage appears → …
 *
 * Reduced motion renders the finished journey with no drawing.
 */

const EASE = [0.4, 0, 0.2, 1];

// Beat timings, shared by both orientations so the story paces identically.
const T = {
  stage: [0.1, 1.5, 2.9, 4.3], // when each stage resolves
  seg: [0.5, 1.9, 3.3], // when each connecting segment starts drawing
  segDur: 0.95,
  stageDur: 0.7,
};

const Dot = ({ cx, cy, r, delay, prm, filled = true }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r={r}
    fill={filled ? '#6C59D3' : '#FFFFFF'}
    stroke={filled ? 'none' : '#8B78E2'}
    strokeWidth={filled ? 0 : 1.4}
    initial={prm ? false : { opacity: 0, scale: 0.3 }}
    whileInView={prm ? undefined : { opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5, delay, ease: EASE }}
    style={{ transformOrigin: `${cx}px ${cy}px` }}
  />
);

/** The four stage graphics, drawn around an arbitrary centre. */
const StageArt = ({ i, cx, cy, prm, uid }) => {
  const d = T.stage[i];
  // satellite offsets reused by stages 2 and 3 so the dots don't jump
  const sats = [
    { x: cx - 26, y: cy - 18, r: 3.4 },
    { x: cx + 27, y: cy - 13, r: 3.4 },
    { x: cx - 9, y: cy + 27, r: 3.4 },
  ];

  if (i === 0) return <Dot cx={cx} cy={cy} r={6} delay={d} prm={prm} />;

  if (i === 1)
    return (
      <>
        <Dot cx={cx} cy={cy} r={6} delay={d} prm={prm} />
        {sats.map((s, k) => (
          <Dot key={k} cx={s.x} cy={s.y} r={s.r} delay={d + 0.12 + k * 0.1} prm={prm} filled={false} />
        ))}
      </>
    );

  if (i === 2)
    return (
      <>
        {sats.map((s, k) => (
          <motion.path
            key={`l${k}`}
            d={`M${s.x} ${s.y} Q ${(s.x + cx) / 2} ${(s.y + cy) / 2 - 6}, ${cx} ${cy}`}
            fill="none"
            stroke="#8B78E2"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={prm ? false : { pathLength: 0 }}
            whileInView={prm ? undefined : { pathLength: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: d + 0.18 + k * 0.1, ease: EASE }}
          />
        ))}
        <Dot cx={cx} cy={cy} r={6} delay={d} prm={prm} />
        {sats.map((s, k) => (
          <Dot key={k} cx={s.x} cy={s.y} r={s.r} delay={d + 0.06 + k * 0.06} prm={prm} />
        ))}
      </>
    );

  // 3 — the mark resolves last
  const size = 62;
  return (
    <motion.g
      initial={prm ? false : { opacity: 0, scale: 0.7 }}
      whileInView={prm ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: d, ease: EASE }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <g transform={`translate(${cx - size / 2}, ${cy - size / 2}) scale(${size / 87})`}>
        <path d={MARK_PATHS.self} fill={`url(#${uid}-self)`} />
        <path d={MARK_PATHS.reflection} fill={`url(#${uid}-reflection)`} />
        <path d={MARK_PATHS.clarity} fill="#6C59D3" />
      </g>
    </motion.g>
  );
};

const Segment = ({ d, i, prm }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="#C7A5F2"
    strokeWidth="1.6"
    strokeLinecap="round"
    initial={prm ? false : { pathLength: 0 }}
    whileInView={prm ? undefined : { pathLength: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: T.segDur, delay: T.seg[i], ease: EASE }}
  />
);

const Label = ({ x, y, i, text, prm, anchor = 'middle' }) => (
  <motion.text
    x={x}
    y={y}
    textAnchor={anchor}
    className="fill-ink text-[13px] font-medium"
    initial={prm ? false : { opacity: 0 }}
    whileInView={prm ? undefined : { opacity: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5, delay: T.stage[i] + 0.2 }}
  >
    {text}
  </motion.text>
);

const STAGES = ['A moment', 'Context grows', 'Patterns emerge', 'Understanding deepens'];

const MomentToUnderstanding = ({ className = '' }) => {
  const uid = useId().replace(/:/g, '');
  const prm = usePrefersReducedMotion();

  // ---- horizontal (sm and up) ----
  const hx = [110, 380, 650, 900];
  const hy = 84;
  // Centre to centre, drawn BEFORE the stage art so the line threads behind
  // each stage — one unbroken path, not segments with gaps between them.
  const hSegs = [
    `M${hx[0]} ${hy} C ${hx[0] + 110} ${hy - 34}, ${hx[1] - 110} ${hy - 34}, ${hx[1]} ${hy}`,
    `M${hx[1]} ${hy} C ${hx[1] + 110} ${hy + 34}, ${hx[2] - 110} ${hy + 34}, ${hx[2]} ${hy}`,
    `M${hx[2]} ${hy} C ${hx[2] + 105} ${hy - 32}, ${hx[3] - 100} ${hy - 32}, ${hx[3]} ${hy}`,
  ];

  // ---- vertical (below sm) ----
  const vy = [70, 240, 410, 580];
  const vx = 150;
  const vSegs = [
    `M${vx} ${vy[0]} C ${vx + 46} ${vy[0] + 80}, ${vx - 46} ${vy[1] - 80}, ${vx} ${vy[1]}`,
    `M${vx} ${vy[1]} C ${vx + 46} ${vy[1] + 84}, ${vx - 46} ${vy[2] - 84}, ${vx} ${vy[2]}`,
    `M${vx} ${vy[2]} C ${vx + 46} ${vy[2] + 84}, ${vx - 46} ${vy[3] - 84}, ${vx} ${vy[3]}`,
  ];

  return (
    <div className={className}>
      {/* one continuous horizontal journey */}
      <svg viewBox="0 0 1010 150" className="hidden sm:block w-full h-auto" role="img" aria-label="A moment, context grows, patterns emerge, understanding deepens">
        <MarkGradients id={uid} />
        {hSegs.map((d, i) => (
          <Segment key={d} d={d} i={i} prm={prm} />
        ))}
        {hx.map((x, i) => (
          <StageArt key={i} i={i} cx={x} cy={hy} prm={prm} uid={uid} />
        ))}
        {hx.map((x, i) => (
          <Label key={i} x={x} y={140} i={i} text={STAGES[i]} prm={prm} />
        ))}
      </svg>

      {/* the same journey, top to bottom */}
      <svg viewBox="0 0 300 640" className="sm:hidden w-full h-auto max-w-[19rem] mx-auto" role="img" aria-label="A moment, context grows, patterns emerge, understanding deepens">
        <MarkGradients id={`${uid}v`} />
        {vSegs.map((d, i) => (
          <Segment key={d} d={d} i={i} prm={prm} />
        ))}
        {vy.map((y, i) => (
          <StageArt key={i} i={i} cx={vx} cy={y} prm={prm} uid={`${uid}v`} />
        ))}
        {vy.map((y, i) => (
          <Label key={i} x={vx + 56} y={y + 5} i={i} text={STAGES[i]} prm={prm} anchor="start" />
        ))}
      </svg>
    </div>
  );
};

export default MomentToUnderstanding;
