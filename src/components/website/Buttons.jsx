import { Link } from 'react-router-dom';

export const PrimaryButton = ({ to, children, className = '', ...props }) => (
  <Link
    to={to}
    className={`inline-flex items-center justify-center rounded-full bg-ink text-paper text-[15px] font-medium px-7 py-3.5 transition-colors hover:bg-accent-deep ${className}`}
    {...props}
  >
    {children}
  </Link>
);

export const SecondaryButton = ({ to, children, className = '', ...props }) => (
  <Link
    to={to}
    className={`inline-flex items-center justify-center rounded-full border border-ink/20 text-ink text-[15px] font-medium px-7 py-3.5 transition-colors hover:border-ink/40 hover:bg-ink/[0.03] ${className}`}
    {...props}
  >
    {children}
  </Link>
);
