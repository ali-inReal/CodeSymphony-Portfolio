import React from 'react';
import SectionHeader from './SectionHeader';
import maliImg from '../assets/mali.webp';
import touseefImg from '../assets/touseef.webp';
import hassanImg from '../assets/hassan.webp';
import mohibImg from '../assets/mohib.webp';
import finalImg from '../assets/final.webp';
import jerryImg from '../assets/jerry.webp';
import profile from '../assets/profile.webp';
import toheedImg from '../assets/toheed.webp';

const teamMembers = [
  { name: "Muhammad Ali", role: "Founder & CEO", image: maliImg },
  { name: "Muhammad Touseef", role: "Lead Architect", image: touseefImg },
  { name: "Muhammad Talha Khan", role: "Technical Strategist", image: finalImg },
  { name: "Syed Jarar Haider", role: "System Engineer", image: jerryImg },
  { name: "Hassan Bilal Butt", role: "Platform Specialist", image: hassanImg },
  { name: "Hammad Ashfaq", role: "Interface Designer", image: profile },
  { name: "Mohib Ali", role: "Cloud Specialist", image: mohibImg },
  { name: "Toheed Ahmad", role: "Software Developer", image: toheedImg }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-20 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our Team"
          title="The people behind the work"
          subtitle="A team of engineers and designers focused on mission-driven, collaborative innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group p-7 border border-ink/10 rounded-2xl bg-surface hover:border-accent/40 transition-colors duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                width={320}
                height={320}
                loading="lazy"
                decoding="async"
                className="w-28 h-28 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-ink/10 mx-auto mb-5"
              />
              <h4 className="text-ink font-semibold text-base">
                {member.name}
              </h4>
              <p className="text-ink/55 dark:text-ink/40 text-sm mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
