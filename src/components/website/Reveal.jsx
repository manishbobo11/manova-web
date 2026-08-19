import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * Fades/slides content into view once as it enters the viewport.
 * No-ops (renders instantly, no motion) when the user prefers reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 16, className = '', as = 'div' }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const Component = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
