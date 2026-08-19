import { useEffect, useState } from 'react';
import Reveal from '../components/website/Reveal';
import Section, { Statement } from '../components/website/Section';
import PageHero from '../components/website/PageHero';

const CONTAINER = 'max-w-6xl mx-auto px-6 lg:px-10';

const BETA_EMAIL = 'manish@manova.health';

const DownloadPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Download Manova | Private Beta';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    const subject = encodeURIComponent('Private beta request');
    const body = encodeURIComponent(
      `Hi Manova team,\n\nI'd like to join the private beta.\n\nMy email: ${email}\n`
    );
    window.location.href = `mailto:${BETA_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero eyebrow="Download"
        lead="iOS and Android, currently in private beta. There’s no web version: this belongs on the device you carry."
      >
        Manova lives on your phone
      </PageHero>

      <section className="bg-paper-dim">
        <div className={`${CONTAINER} py-20 sm:py-28`}>
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <div className="max-w-md">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                  Join the private beta
                </h2>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  Leave your email and we’ll reach out as access opens. We’re admitting people gradually.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-line bg-paper-raised px-6 py-6">
                    <p className="text-ink font-medium">Your mail app should be opening now.</p>
                    <p className="mt-2 text-sm text-ink-soft">
                      If it didn't, email us directly at{' '}
                      <a href={`mailto:${BETA_EMAIL}`} className="text-ink font-medium underline decoration-accent underline-offset-4">
                        {BETA_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8" noValidate>
                    <label htmlFor="beta-email" className="block text-sm font-medium text-ink mb-2">
                      Email address
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="beta-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="flex-1 rounded-full border border-ink/20 bg-paper-raised px-5 py-3.5 text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent"
                        aria-describedby={error ? 'beta-email-error' : undefined}
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-[15px] font-medium px-7 py-3.5 transition-colors hover:bg-accent-deep"
                      >
                        Request access
                      </button>
                    </div>
                    {error && (
                      <p id="beta-email-error" className="mt-2 text-sm text-red-700">
                        {error}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-paper-raised px-8 py-10 max-w-md">
                <h3 className="font-heading text-lg font-semibold text-ink">Where Manova lives</h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-ink-soft leading-relaxed">
                      <span className="text-ink font-medium">iOS</span>, private beta, invite required
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-ink-soft leading-relaxed">
                      <span className="text-ink font-medium">Android</span>, private beta, invite required
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-ink-faint leading-relaxed">
                  Store listings will appear here as soon as they're live. We won't link anywhere until they
                  are.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
