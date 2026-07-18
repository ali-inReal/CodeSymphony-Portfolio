import React from 'react';

const values = [
  {
    title: "Mission-Driven",
    description: "Every line of code we write is focused on achieving your business objectives and creating tangible value."
  },
  {
    title: "Collaborative",
    description: "We work as an extension of your team, ensuring transparency and alignment at every stage of the project."
  },
  {
    title: "Innovation-Focused",
    description: "Continuously exploring cutting-edge technologies to keep your business ahead of the curve."
  },
  {
    title: "Quality Excellence",
    description: "Rigorous standards and meticulous attention to detail ensure a superior end product every time."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 px-6 bg-shade-a overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] -left-64 top-1/3" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -right-52 bottom-0" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-accent/70" />
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase m-0">
                About Us
              </p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-gradient tracking-tight mb-6 pb-1">
              A team built around your success
            </h2>
            <p className="text-ink/70 dark:text-ink/60 text-lg leading-relaxed mb-8">
              CodeSymphony is a modern IT solutions company dedicated to turning complex code into beautiful solutions. Founded in 2025, we empower businesses to achieve their digital potential through innovation and excellence.
            </p>
            <div className="card p-8 rounded-2xl border-l-2 border-l-accent/60">
              <h3 className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Our Vision</h3>
              <p className="text-ink text-xl font-medium leading-relaxed">
                "To be the trusted technology partner that empowers businesses to achieve their digital potential."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="card card-hover p-7 rounded-2xl h-full"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 ring-1 ring-accent/25 flex items-center justify-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
                </div>
                <h4 className="text-ink font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-ink/65 dark:text-ink/50 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
