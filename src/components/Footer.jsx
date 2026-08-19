import { Link } from 'react-router-dom';
import ManovaLogo from './brand/ManovaLogo';

const NAV = [
  { name: 'Why Manova', href: '/why-manova' },
  { name: 'How it works', href: '/how-it-works' },
  { name: 'Human Model', href: '/human-model' },
  { name: 'Safety', href: '/safety' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'About', href: '/about' },
];

/**
 * Light, compact footer that continues the white page rather than closing it
 * with a heavy dark block. Brand left, navigation right, one quiet legal line.
 */
const Footer = () => (
  <footer className="w-full bg-paper-dim border-t border-line">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-9 lg:py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-12">
        <div>
          <ManovaLogo markClassName="h-7 w-7" wordmarkClassName="text-[15px]" />
          <p className="mt-3 text-sm text-ink-soft">The AI that understands you over time</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
          {NAV.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-7 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-ink-faint">© {new Date().getFullYear()} MANOVA</p>
        <p className="text-xs text-ink-faint">Not a substitute for professional care.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
