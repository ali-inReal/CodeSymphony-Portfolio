import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} mb-16`}>
      <div className="inline-flex items-center gap-2.5 mb-4">
        <span className="w-6 h-px bg-gradient-to-r from-transparent to-accent/70" />
        <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase m-0">
          {eyebrow}
        </p>
        <span className="w-6 h-px bg-gradient-to-l from-transparent to-accent/70" />
      </div>
      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-gradient tracking-tight mb-4 pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink/65 dark:text-ink/50 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
