import { useState } from "react";
import { ChevronDown } from "lucide-react";

const skills = [
  "SIEM", "SOC Operations", "Incident Response", "Security Monitoring", 
  "Vulnerability Assessment", "Threat Detection", "MITRE ATT&CK Framework", 
  "Firewall", "Network Security", "Cloud Security", "EDR/XDR", 
  "Active Directory", "Nmap", "Wireshark", "Zero Trust", "IDS / IPS", 
  "VPN", "Linux Administration", "Windows Administration", 
  "Endpoint Security", "PowerShell Scripting"
];

const PREVIEW_COUNT = 8;

export const Skills = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? skills : skills.slice(0, PREVIEW_COUNT);
  const hiddenCount = skills.length - PREVIEW_COUNT;

  return (
    <section id="skills" className="w-full py-24 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* LEFT: Section Label (3 cols) - Index number removed */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
              <span className="h-px w-10 bg-current opacity-30" />
              <span>Skills</span>
            </div>
          </div>

          {/* RIGHT: Content (9 cols) */}
          <div className="md:col-span-9">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl mb-12">
              Tools & technologies<span className="text-accent">.</span>
            </h2>

            <ul className="flex flex-wrap gap-2">
              {visible.map((s) => (
                <li
                  key={s}
                  className="border border-border/50 bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-all hover:border-accent hover:text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>

            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                aria-expanded={expanded}
              >
                {expanded ? "Show less" : `Show all (${hiddenCount} more)`}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};