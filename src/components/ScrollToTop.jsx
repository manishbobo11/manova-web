import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Starts every route at the top.
 *
 * A client-side route change doesn't reset scroll on its own, so navigating
 * from a long page to a short one could land part-way down. Mounted once
 * inside the Router, this covers navbar, footer and every in-page link — no
 * per-page resets.
 *
 * Details that matter:
 *  - useLayoutEffect, so the reset lands before paint and there's no visible jump.
 *  - behavior 'instant', because `html { scroll-behavior: smooth }` would
 *    otherwise animate the scroll back up on every navigation.
 *  - a hash is left alone, so genuine anchor links still work.
 *  - scrollRestoration is set to manual once, so the browser doesn't re-apply a
 *    stale offset on reload or back and fight this.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return; // let the browser resolve the anchor
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
