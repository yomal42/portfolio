const certs = [
  "Cisco CCNA — Cisco Certified Network Associate",
  "Certified Network Security Practitioner (CNSP)",
  "Fortinet NSE 1,2 and 3 Network Security Associate",
  "Fortinet Certified Associate Cybersecurity (FCA)",
  "SentinelOne Partner Cloud Professional",
  "F5 Distributed Cloud Technical Pre-Sales",
  "CISSP — Training"
];

export const About = () => (
  <section id="about" className="w-full py-24 border-b border-border/50">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
       <div className="md:col-span-3">
  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
    <span className="h-px w-10 bg-current opacity-30" />
    <span>About</span>
  </div>
</div>

        {/* RIGHT: Indented Content */}
        <div className="md:col-span-9">
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl mb-12">
            A short introduction<span className="text-accent">.</span>
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
            <p>
              I’m a Cybersecurity Engineer with hands-on experience in Network Security, SIEM engineering, detection development, and enterprise security architecture.
              I’ve worked across firewall, EDR/XDR, and cloud-integrated environments, focusing on improving threat visibility and strengthening overall security posture.
            </p>
            <p className="text-foreground">
              My approach is practical and operations-driven — building systems that are not only secure, but also observable and responsive in real-world attack scenarios.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
              Certifications
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm group">
                  <span className="size-1.5 shrink-0 bg-accent" />
                  <span className="group-hover:text-foreground transition-colors">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
);