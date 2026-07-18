import React from 'react';
import SectionHeader from './SectionHeader';

const perks = [
  {
    title: 'Competitive Pay',
    description: 'Fair, competitive salaries with clear growth paths as you level up your skills.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Real Impact',
    description: 'Ship software used by real businesses and users around the world, not throwaway demos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Growth & Mentorship',
    description: 'Work alongside senior engineers in an open atmosphere where questions are welcome.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Modern Stack',
    description: 'React, Flutter, Node.js, and cloud-native tooling. We invest in doing things well.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

const coreValues = [
  {
    title: 'Trust',
    over: 'process',
    description: 'We trust people to do great work without micromanagement.'
  },
  {
    title: 'Effort',
    over: 'outcome',
    description: 'We recognize and reward honest effort, not just lucky results.'
  },
  {
    title: 'Value',
    over: 'profit',
    description: 'The first question is always "is this genuinely useful?"'
  },
  {
    title: 'Collaboration',
    over: 'competition',
    description: 'No individual glory. We enrich each other\'s work every day.'
  },
  {
    title: 'Excellence',
    over: 'success',
    description: 'Be the best at what you do and success follows on its own.'
  }
];

const openPositions = [
  { role: 'React.js Developer', type: 'Full-time', location: 'Remote' },
  { role: 'Flutter Developer', type: 'Full-time', location: 'Remote' },
  { role: 'Node.js Backend Engineer', type: 'Full-time', location: 'Remote' },
  { role: 'UI/UX Designer', type: 'Full-time', location: 'Remote' },
  { role: 'SQA Engineer', type: 'Full-time', location: 'Remote' }
];

const applyFor = (role: string) => {
  window.dispatchEvent(new CustomEvent('apply-role', { detail: role }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Careers: React.FC = () => {
  return (
    <section id="careers" className="relative py-16 md:py-20 px-6 bg-shade-a overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] -right-64 top-1/4" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -left-52 bottom-1/4" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Careers"
          title="Your place in tech"
          subtitle="Junior or veteran — whatever your level, you'll grow your career at CodeSymphony in a respectful, open atmosphere."
        />

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="group card card-hover p-7 rounded-2xl"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/20 text-accent flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.5)]">
                {perk.icon}
              </div>
              <h4 className="text-ink font-semibold text-base mb-2">{perk.title}</h4>
              <p className="text-ink/65 dark:text-ink/50 text-sm leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>

        {/* Core values */}
        <div className="mb-16">
          <h3 className="text-ink font-heading font-semibold text-2xl tracking-tight text-center mb-8">
            Our core values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="card p-5 rounded-2xl text-center"
              >
                <p className="font-heading font-semibold text-ink text-sm uppercase tracking-wide mb-2">
                  {value.title} <span className="text-ink/55 dark:text-ink/40 lowercase font-normal">over</span>{' '}
                  <span className="text-accent">{value.over}</span>
                </p>
                <p className="text-ink/55 dark:text-ink/40 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open positions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-ink font-heading font-semibold text-2xl tracking-tight text-center mb-8">
            Open positions
          </h3>
          <div className="card rounded-2xl divide-y divide-ink/[0.06] overflow-hidden">
            {openPositions.map((position) => (
              <div
                key={position.role}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-5 hover:bg-ink/[0.03] transition-colors duration-200"
              >
                <div>
                  <h4 className="text-ink font-semibold text-base mb-1.5">{position.role}</h4>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-ink/[0.07] text-xs text-ink/65 dark:text-ink/50">
                      {position.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-ink/[0.07] text-xs text-ink/65 dark:text-ink/50">
                      {position.location}
                    </span>
                  </div>
                </div>
                <button
                  className="self-start sm:self-center px-5 py-2 rounded-lg border border-accent/40 text-accent text-sm font-semibold hover:bg-accent hover:text-white dark:hover:text-black transition-colors duration-200 cursor-pointer"
                  onClick={() => applyFor(position.role)}
                >
                  Apply now
                </button>
              </div>
            ))}
          </div>
          <p className="text-ink/55 dark:text-ink/40 text-sm text-center mt-6">
            Don't see your role?{' '}
            <button
              className="text-accent hover:underline cursor-pointer bg-transparent border-0 p-0 text-sm font-medium"
              onClick={() => applyFor('an open application')}
            >
              Send an open application
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
