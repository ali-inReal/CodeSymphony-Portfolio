import React from 'react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and project requirements in depth."
  },
  {
    number: "02",
    title: "Design",
    description: "We map the user journey and compose a clear, elegant visual language for your product."
  },
  {
    number: "03",
    title: "Development",
    description: "We translate designs into high-performance, maintainable, production-ready code."
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing across devices and environments to catch issues before your users do."
  },
  {
    number: "05",
    title: "Launch",
    description: "Smooth deployment to live environments with monitoring in place from day one."
  },
  {
    number: "06",
    title: "Support",
    description: "Continuous optimization, maintenance, and improvements long after launch."
  }
];

const Steps: React.FC = () => {
  return (
    <section id="process" className="relative py-16 md:py-20 px-6 bg-shade-b overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] -left-64 bottom-0" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -right-52 top-0" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our Process"
          title="How we work"
          subtitle="A proven six-step process that takes your idea from first conversation to launch and beyond."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card card-hover relative p-7 rounded-2xl overflow-hidden"
            >
              <span className="absolute -top-3 -right-1 font-heading text-7xl font-bold text-ink/[0.04] select-none pointer-events-none">
                {step.number}
              </span>
              <span className="text-accent font-heading text-sm font-semibold tracking-widest">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-ink mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-ink/65 dark:text-ink/50 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
