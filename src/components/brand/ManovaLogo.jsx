import { useId } from 'react';
import { MARK_VIEWBOX, MARK_PATHS } from './markPaths';
import MarkGradients from './MarkGradients';

/**
 * The Manova logo. Single source of truth for the mark across the site —
 * navbar, footer, hero, metadata. Paths come from the official brand library;
 * nothing here invents or alters the identity.
 *
 * variant:  'default' (mark in brand gradients + dark wordmark)
 *           'dark'    (for dark surfaces — mark keeps its colour, wordmark goes light)
 * iconOnly: mark without the wordmark
 */

export const ManovaMark = ({ className = '', title, ...rest }) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      <MarkGradients id={uid} />
      <path d={MARK_PATHS.self} fill={`url(#${uid}-self)`} />
      <path d={MARK_PATHS.reflection} fill={`url(#${uid}-reflection)`} />
      <path d={MARK_PATHS.clarity} fill="#6C59D3" />
    </svg>
  );
};

const ManovaLogo = ({
  variant = 'default',
  iconOnly = false,
  className = '',
  markClassName = 'h-8 w-8',
  wordmarkClassName = 'text-[15px] sm:text-base',
}) => {
  if (iconOnly) {
    return <ManovaMark className={`${markClassName} ${className}`} title="Manova" />;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ManovaMark className={`${markClassName} shrink-0`} />
      <span
        className={`font-heading font-extrabold tracking-[0.2em] leading-none ${
          variant === 'dark' ? 'text-paper' : 'text-ink'
        } ${wordmarkClassName}`}
      >
        MANOVA
      </span>
    </span>
  );
};

export default ManovaLogo;
