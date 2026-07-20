import React from 'react';
import SectionHeader from './SectionHeader';
import lightningOsLogo from '../assets/lightning-os-logo.webp';
import orderswala from '../assets/orderswala.webp';
import leadaspect from '../assets/leadaspect.webp';
import linky from '../assets/linky.webp';

const projects = [
  {
    title: "LightningOS",
    category: "Fiber Internet Platform",
    description: "A high-speed fiber internet service delivering symmetrical gigabit speeds for seamless streaming, gaming, and professional remote work.",
    tags: ["React", "DotNet"],
    image: lightningOsLogo,
    link: "https://lightningos.world/"
  },
  {
    title: "OrdersWala",
    category: "Business Management Suite",
    description: "A comprehensive business management platform helping retail, food, and e-commerce brands streamline order tracking, product management, and automated mobile app generation.",
    tags: ["React Native", "React.js", "DotNet"],
    image: orderswala,
    link: "https://orderswala.com/"
  },
  {
    title: "LeadAspect",
    category: "AI Lead Generation",
    description: "A lead generation platform that leverages advanced analytics and AI to identify and nurture high-value prospects, driving revenue growth for businesses.",
    tags: ["React", "DotNet"],
    image: leadaspect,
    link: "https://leadaspect.com/"
  },
  {
    title: "Linky",
    category: "Smart Link Management",
    description: "A smart link platform with rule-based routing by country, device, and schedule, plus A/B split testing, custom domains, and detailed click analytics — all from one short link.",
    tags: ["Next.Js", ],
    image: linky,
    link: "https://customizedlink.com/"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-16 md:py-20 px-6 bg-shade-a overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] -left-64 top-1/4" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -right-52 bottom-16" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects we're proud of"
          subtitle="Real products shipped for real clients, from fiber internet platforms to AI-driven lead generation."
        />

        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card card-hover block rounded-3xl overflow-hidden no-underline"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className={`relative h-64 sm:h-72 lg:h-auto lg:min-h-[380px] overflow-hidden bg-ink/5 dark:bg-black/30 ${reversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal/50 via-transparent to-transparent lg:bg-gradient-to-t ${reversed ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l'} lg:from-transparent lg:via-transparent lg:to-charcoal/20`} />
                    {/* Hairline seam between image and content on desktop */}
                    <div className={`hidden lg:block absolute top-0 bottom-0 w-px bg-ink/10 ${reversed ? 'left-0' : 'right-0'}`} />
                  </div>

                  {/* Content */}
                  <div className={`relative flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${reversed ? 'lg:order-1' : ''}`}>
                    {/* Oversized index watermark */}
                    <span
                      aria-hidden="true"
                      className="absolute top-6 right-8 font-heading font-semibold text-7xl lg:text-8xl leading-none text-ink/[0.05] dark:text-ink/[0.06] select-none transition-colors duration-500 group-hover:text-accent/10"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase mb-4 flex items-center gap-2.5">
                      <span className="w-6 h-px bg-accent/60" />
                      {project.category}
                    </p>

                    <h3 className="font-heading text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-4 transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>

                    <p className="text-ink/65 dark:text-ink/50 leading-relaxed text-[15px] mb-8 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-ink/[0.06] border border-ink/10 text-xs font-medium text-ink/70 dark:text-ink/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 dark:text-ink/60 transition-colors duration-300 group-hover:text-accent">
                      Visit live site
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink/15 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
