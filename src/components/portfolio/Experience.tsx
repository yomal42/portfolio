import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Role = {
  period: string;
  role: string;
  org: string;
  summary: string;
  tasks: string[];
};

const roles: Role[] = [
  {
    period: "Jan 2024 — Jan 2026",
    role: "Cybersecurity Engineer",
    org: "Oak Integrated Systems",
    summary:
      "Engineered enterprise-grade security architectures and managed complex security operations, specializing in SIEM optimization, firewall management, and hybrid-cloud threat detection workflows.",
    tasks: [
      "Designed and implemented enterprise security architectures aligned with defense-in-depth principles across multiple client environments",
      "Deployed and managed EDR/XDR, firewall (onprem/Cloud), DLP, and PAM solutions across enterprise infrastructures",
      "Performed infrastructure and endpoint hardening to reduce attack surface and improve security posture",
      "Engineered and supported SIEM-based monitoring using Microsoft Sentinel, SentinelOne, and Cortex XSIAM",
      "Implemented and optimized log ingestion, correlation rules, and detection logic to improve threat visibility and alert accuracy",
      "Conducted detection tuning and alert optimization to reduce false positives and improve SOC efficiency",
      "Security telemetry analysis and centralized monitoring across hybrid environments",
      "Supported monitoring and investigation of suspicious user activity, security alerts, and insider risk indicators.",
      "Handled SOC operations including alert triage, incident investigation, and response coordination",
      "Conducted vulnerability assessments and provided remediation recommendations and risk analysis",
      "Delivered PoC demonstrations and supported presales engineering activities and client discussions",
      "Provided security consulting and technical advisory services to improve client security architecture",
      "Collaborated with cross-functional teams to design secure and scalable enterprise infrastructure solutions"
    ],
  },
  {
    period: "Jan 2023 — Dec 2023",
    role: "Junior IT Executive - Security",
    org: "Metropolitan Technologies",
    summary:
      "Administered internal security operations and firewall infrastructure, conducting proactive vulnerability assessments to strengthen enterprise network defenses.",
    tasks: [
      "Administered enterprise endpoint security using Kaspersky Security Center, including policy configuration, deployment, and incident response handling",
      "Supported firewall security operations, including rule configuration, policy enforcement, and security optimization",
      "Conducted vulnerability assessments and contributed to remediation planning aligned with business and security requirements",
      "Supported incident response processes, including detection, alert triage, and escalation of security events",
      "Monitored network traffic and security telemetry to identify anomalies, threats, and vulnerabilities",
      "Implemented patch management and system hardening practices to reduce attack surface",
      "Performed network and system troubleshooting to ensure secure and stable enterprise operations"
    ],
  },
  {
    period: "Mar 2022 — Jan 2023",
    role: "IT Infrastructure & Security Trainee",
    org: "John Keells (Jaykay Marketing Services)",
    summary:
      "Acquired fundamental expertise in endpoint security and identity management within a large-scale enterprise environment, supporting day-to-day security operations.",
    tasks: [
      "Supported endpoint security operations using Kaspersky Security Center, including installation, updates, and basic incident handling",
      "Assisted in monitoring security alerts and performing initial triage and escalation",
      "Participated in VPN deployment to support secure remote access for enterprise users",
      "Supported Identity and Access Management (IAM) processes, including user provisioning and access control",
      "Provided IT infrastructure support and troubleshooting across systems and networks",
      "Collaborated with IT teams to maintain system availability and operational continuity"
    ],
  }
];

export const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="w-full py-24 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* SHARED 12-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
         <div className="md:col-span-3">
  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
    <span className="h-px w-10 bg-current opacity-30" />
    <span>Experience</span>
  </div>
</div>

          {/* RIGHT: Content (9 cols) */}
          <div className="md:col-span-9">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl mb-16">
              Career timeline<span className="text-accent">.</span>
            </h2>

            <ol className="relative border-l border-strong/30 pl-8 ml-1">
              {roles.map((r, i) => {
                const isOpen = open === i;
                return (
                  <li key={r.period} className="relative mb-16 last:mb-0">
                    
                    {/* Timeline Dot Alignment - Matches Education dot perfectly */}
                    <span className="absolute -left-[41px] top-1.5 size-4 bg-background grid place-items-center">
                      <span className="size-2 bg-accent" />
                    </span>
                    
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {r.period}
                    </p>
                    
                    <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                      {r.role}
                    </h3>
                    
                    <p className="mt-1 text-sm font-medium text-accent/80">{r.org}</p>
                    
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {isOpen ? "Hide details" : "Tasks & responsibilities"}
                      <ChevronDown
                        className={`size-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`grid max-w-3xl overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="min-h-0 space-y-3 text-base text-muted-foreground">
                        {r.tasks.map((t) => (
                          <li key={t} className="flex gap-3 leading-relaxed">
                            <span className="select-none text-accent font-bold">·</span>
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

        </div>
      </div>
    </section>
  );
};