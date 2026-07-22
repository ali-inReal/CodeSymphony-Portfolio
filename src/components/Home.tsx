import React, { useEffect, useState } from 'react';
import heroImage from '../assets/hero-bg.webp';
import heroImageLight from '../assets/hero-bg-light.webp';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#portfolio' },
  { label: 'PROCESS', href: '#process' },
   { label: 'TEAM', href: '#team' },
  { label: 'CAREERS', href: '#careers' },
];

const stats = [
  // { value: '8+', label: 'Specialists on the team' },
  { value: '3', label: 'Products in production' },
  { value: '24/7', label: 'Support & monitoring' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0a0b' : '#f5f7fa');
  }, [dark]);

  const themeToggle = (
    <button
      className="p-2 rounded-lg text-ink/70 hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200 cursor-pointer"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setDark(d => !d)}
    >
      {dark ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );

  return (
    <div className="relative w-full bg-charcoal text-ink">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
        <nav className="max-w-6xl w-full backdrop-blur-md bg-charcoal/85 border border-ink/10 rounded-2xl shadow-[0_8px_32px_-12px_rgba(15,23,42,0.25),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="flex justify-between items-center px-6 py-3">
            <a
              href="#"
              className="group flex items-center no-underline"
              aria-label="CodeSymphony"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <svg
                className="w-10 h-10 shrink-0"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M70 15 L44 15 L15 44 L36 65"
                  stroke="#2563eb"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 85 L56 85 L85 56 L64 35"
                  className="stroke-[#0f172a] dark:stroke-white"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="grid grid-cols-[0fr] opacity-0 -translate-x-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:grid-cols-[1fr] group-focus-within:opacity-100 group-focus-within:translate-x-0">
                <span className="overflow-hidden whitespace-nowrap">
                  <span className="pl-2.5 flex flex-col leading-tight">
                    <span className="text-[25px] font-semibold text-base tracking-tight text-ink">
                      <span className="text-[#2563eb]">Code-</span>Symphony
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.18em] text-ink/50 uppercase align-middle justify-center flex">
                        Code·Create·Elevate.
                    </span>
                  </span>
                </span>
              </span>
            </a>

            <div className="hidden md:flex gap-8 text-sm font-medium text-ink/70 dark:text-ink/60">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="hover:text-ink transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {themeToggle}

              <button
                className="hidden md:block bg-ink text-charcoal px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
                onClick={() => scrollTo('contact')}
              >
                Contact
              </button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 text-ink/80 hover:text-ink transition-colors cursor-pointer"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(open => !open)}
              >
                {menuOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-ink/10 px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2.5 text-sm font-medium text-ink/70 hover:text-ink transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                className="mt-3 bg-ink text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
                onClick={() => { setMenuOpen(false); scrollTo('contact'); }}
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <div className="relative min-h-svh w-full flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_right] dark:hidden"
          style={{ backgroundImage: `url(${heroImageLight})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-[center_right] opacity-60 hidden dark:block"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/50 to-transparent dark:via-charcoal/70 dark:to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal dark:from-charcoal/80" />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="absolute inset-0 bg-grid" />
        <div className="glow-blob w-[500px] h-[500px] -bottom-40 -left-40" />

        <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start text-left">
            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
              <span className="text-gradient">Turning complex code into</span>{' '}
              <span className="text-gradient-accent">beautiful solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-ink/70 dark:text-ink/60 leading-relaxed mb-10 max-w-xl">
              We design, build, and scale software that turns your business challenges
              into competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-12 w-full sm:w-auto">
              <button
                className="px-8 py-3.5 bg-ink text-charcoal font-semibold text-sm rounded-xl shadow-[0_0_30px_-8px_rgba(14,17,22,0.45)] hover:bg-accent hover:shadow-[0_0_36px_-6px_rgba(8,145,178,0.5)] dark:shadow-[0_0_30px_-8px_rgba(255,255,255,0.4)] dark:hover:shadow-[0_0_36px_-6px_rgba(0,229,255,0.55)] transition-all duration-300 cursor-pointer"
                onClick={() => scrollTo('contact')}
              >
                Start a project
              </button>
              <button
                className="group px-8 py-3.5 border border-ink/15 bg-ink/[0.03] backdrop-blur-sm rounded-xl font-semibold text-sm text-ink/80 hover:border-ink/40 hover:text-ink transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => scrollTo('portfolio')}
              >
                View our work
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex divide-x divide-ink/10">
              {stats.map((stat) => (
                <div key={stat.label} className="pr-8 pl-8 first:pl-0 last:pr-0">
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-gradient m-0">{stat.value}</p>
                  <p className="text-ink/55 dark:text-ink/40 text-xs md:text-sm mt-1 m-0">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="hidden lg:block">
            <div className="card rounded-2xl backdrop-blur-md overflow-hidden shadow-[0_24px_80px_-24px_rgba(8,145,178,0.35)] dark:shadow-[0_24px_80px_-24px_rgba(0,229,255,0.25)]">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-ink/10">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-ink/40 font-mono">codesymphony — deploy</span>
              </div>
              <div className="px-6 py-6 font-mono text-[13px] leading-7 text-ink/70 dark:text-ink/60">
                <p className="m-0"><span className="text-accent">$</span> npx codesymphony init your-idea</p>
                <p className="m-0 text-ink/45">✓ Discovery &amp; scoping complete</p>
                <p className="m-0 text-ink/45">✓ Design system generated</p>
                <p className="m-0 text-ink/45">✓ Build pipeline configured</p>
                <p className="m-0"><span className="text-accent">$</span> npm run ship</p>
                <p className="m-0 text-ink/45">→ Deploying to production...</p>
                <p className="m-0 text-emerald-500 dark:text-emerald-400">✓ Live in record time</p>
                <p className="m-0"><span className="text-accent">$</span> <span className="inline-block w-2 h-4 bg-accent/80 align-middle animate-pulse" /></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
