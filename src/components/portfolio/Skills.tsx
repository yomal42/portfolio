import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const skills = [
  "Firewalls",
  "SIEM",
  "IDS / IPS",
  "VPN",
  "Network Segmentation",
  "Penetration Testing",
  "Vulnerability Assessment",
  "Incident Response",
  "SOC Operations",
  "Cryptography",
  "Zero Trust",
  "Cloud Security",
  "Linux",
  "Python",
  "Bash Scripting",
  "Wireshark",
  "Nmap",
  "Splunk",
];

const PREVIEW_COUNT = 8;

export const Skills = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? skills : skills.slice(0, PREVIEW_COUNT);
  const hiddenCount = skills.length - PREVIEW_COUNT;

  return (
    <section id="skills" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title="Tools & technologies."
        />

        <ul className="flex flex-wrap gap-2">
          {visible.map((s) => (
            <li
              key={s}
              className="border border-border-strong bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {s}
            </li>
          ))}
        </ul>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 border border-border-strong bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-expanded={expanded}
            aria-controls="skills"
          >
            {expanded ? "Show less" : `Show all (${skills.length})`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </section>
  );
};
