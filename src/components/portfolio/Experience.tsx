import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Role = {
  period: string;
  role: string;
  org: string;
  summary: string;
  tasks: string[];
};

const roles: Role[] = [
  {
    period: "2024 — Present",
    role: "Cyber Security Engineer",
    org: "Company Name",
    summary:
      "Promoted to Cyber Security Engineer. Lead network defense and incident response across the organization, owning architecture decisions and security tooling.",
    tasks: [
      "Architected zero-trust segmentation across 12+ sites, reducing lateral-movement risk.",
      "Led incident response for high-severity events, cutting mean time to contain by 40%.",
      "Tuned SIEM detections and built runbooks adopted by the wider SOC team.",
      "Mentored junior engineers and ran internal threat-hunting workshops.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Associate Cyber Security Engineer",
    org: "Company Name",
    summary:
      "Supported day-to-day security operations, monitoring, and triage while ramping up on architecture and incident response.",
    tasks: [
      "Monitored SIEM alerts and triaged incidents as part of the SOC rotation.",
      "Assisted with firewall, VPN and endpoint security configuration changes.",
      "Contributed to detection tuning and documentation of response playbooks.",
    ],
  },
  {
    period: "2019 — 2022",
    role: "Security Engineer",
    org: "Company Name",
    summary:
      "Operated SIEM and EDR tooling and hardened firewall, VPN and remote-access infrastructure.",
    tasks: [
      "Onboarded 200+ log sources into Splunk and authored correlation rules.",
      "Migrated legacy site-to-site VPNs to modern IKEv2 with certificate-based auth.",
      "Ran quarterly vulnerability assessments and tracked remediation to closure.",
      "Owned the patch and configuration baseline for perimeter firewalls.",
    ],
  },
  {
    period: "2017 — 2019",
    role: "Network Engineer",
    org: "Company Name",
    summary:
      "Designed and maintained enterprise routing, switching and firewall policies for a multi-site network.",
    tasks: [
      "Refactored core routing with OSPF/BGP, improving failover convergence.",
      "Standardized switch configurations and rolled out 802.1X across the campus.",
      "Documented network topology and policies, replacing tribal knowledge.",
    ],
  },
];

export const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative border-b border-border bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="03" eyebrow="Experience" title="Career timeline." />

        <ol className="relative border-l border-strong pl-8">
          {roles.map((r, i) => {
            const isOpen = open === i;
            return (
              <li key={r.period} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[37px] top-2 grid size-4 place-items-center bg-background">
                  <span className="size-2 bg-accent" />
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {r.period}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  {r.role}
                </h3>
                <p className="mt-1 text-sm text-accent">{r.org}</p>
                <p className="mt-3 max-w-2xl text-muted-foreground">- {r.summary}</p>

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
                >
                  {isOpen ? "Hide details" : "Tasks & responsibilities"}
                  <ChevronDown
                    className={`size-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid max-w-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="min-h-0 space-y-2 text-muted-foreground">
                    {r.tasks.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="select-none text-accent">-</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
