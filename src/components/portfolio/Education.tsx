import { SectionHeader } from "./SectionHeader";

const education = [
  {
    period: "2013 — 2017",
    degree: "B.Sc. in Computer Science / Networking",
    school: "University Name",
    detail: "Specialization in network engineering and information security.",
  },
  {
    period: "2017 — 2018",
    degree: "Postgraduate Certificate in Cybersecurity",
    school: "Institution Name",
    detail: "Focus on offensive security, cryptography, and network defense.",
  },
];

export const Education = () => (
  <section id="education" className="relative border-b border-border py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader index="03" eyebrow="Education" title="Academic background." />

      <ol className="relative border-l border-strong pl-8">
        {education.map((e) => (
          <li key={e.period} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[37px] top-2 grid size-4 place-items-center bg-background">
              <span className="size-2 bg-accent" />
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {e.period}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              {e.degree}
            </h3>
            <p className="mt-1 text-sm text-accent">{e.school}</p>
            <p className="mt-3 max-w-2xl text-muted-foreground">{e.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
