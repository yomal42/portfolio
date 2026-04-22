import { SectionHeader } from "./SectionHeader";

const achievements = [
  "Reduced mean time to contain critical incidents by 40% through SOC playbook redesign.",
  "Led zero-trust segmentation rollout across 12+ sites with no production downtime.",
  "Speaker at internal security meetups on threat hunting and detection engineering.",
  "Recognized with company-wide award for incident response excellence.",
];

export const Achievements = () => (
  <section id="achievements" className="relative border-b border-border py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader index="04" eyebrow="Achievements" title="Highlights & wins." />

      <ul className="space-y-4 max-w-3xl">
        {achievements.map((a) => (
          <li key={a} className="flex items-start gap-3 text-muted-foreground">
            <span className="select-none text-accent">-</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
