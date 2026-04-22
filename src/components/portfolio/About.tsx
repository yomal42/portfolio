import { SectionHeader } from "./SectionHeader";

const certs = [
  "OSCP — Offensive Security Certified Professional",
  "CISSP — Certified Information Systems Security Professional",
  "CCNP Security",
  "AWS Security Specialty",
];

export const About = () => (
  <section id="about" className="relative border-b border-border py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="A short introduction."
      />

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-8">
          <p>
            I'm a Network Security Engineer with several years of hands-on
            experience designing, defending, and monitoring enterprise
            networks.
          </p>
          <p className="text-foreground">
            My focus is on practical security — building systems that stay
            resilient under real-world pressure, and responding quickly when
            things go wrong.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Certifications
        </h3>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {certs.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm">
              <span className="mt-2 size-1.5 shrink-0 bg-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
