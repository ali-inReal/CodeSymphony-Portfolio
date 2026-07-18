import React from 'react';
import SectionHeader from './SectionHeader';

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored solutions including web applications, enterprise software, and API development designed for your specific needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android using React Native, delivering seamless mobile experiences.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Infrastructure, migration, DevOps, and microservices on AWS, Azure, and GCP for global scalability.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Strategic guidance for process automation, legacy modernization, and digital strategy consulting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Development: React.FC = () => {
  return (
    <section id="services" className="relative py-16 md:py-20 px-6 bg-shade-b overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] -right-64 top-0" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -left-52 bottom-0" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="What we do"
          subtitle="End-to-end software capabilities, from first prototype to global scale."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="group card card-hover p-8 rounded-2xl h-full"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/20 text-accent flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.5)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {item.title}
              </h3>
              <p className="text-ink/65 dark:text-ink/50 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
