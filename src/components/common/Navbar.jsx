import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ManovaLogo from '../brand/ManovaLogo';

const MotionNav = motion.nav;

const NAV_LINKS = [
  { name: 'Why Manova', href: '/why-manova' },
  { name: 'How it works', href: '/how-it-works' },
  { name: 'Human Model', href: '/human-model' },
  { name: 'Safety', href: '/safety' },
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-ink" aria-label="Manova home">
            <ManovaLogo markClassName="h-8 w-8" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  location.pathname === link.href ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/download"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-[15px] font-medium px-5 py-2.5 transition-colors hover:bg-accent-deep"
            >
              Download
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MotionNav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-paper border-b border-line"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-3 text-base font-medium border-b border-line/70 last:border-b-0 ${
                    location.pathname === link.href ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/download"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-ink text-paper text-base font-medium px-5 py-3"
              >
                Download
              </Link>
            </div>
          </MotionNav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
