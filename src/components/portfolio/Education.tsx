export const Education = () => (
  <section id="education" className="w-full py-24 border-b border-border/50">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        <div className="md:col-span-3">
  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
    <span className="h-px w-10 bg-current opacity-30" />
    <span>Education</span>
  </div>
</div>

        {/* RIGHT COLUMN: Timeline (9 cols) */}
        <div className="md:col-span-9">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl mb-16">
            Academic background<span className="text-accent">.</span>
          </h2>

          <ol className="relative border-l border-strong/30 pl-8 ml-1">
            <li className="relative mb-16">
              <span className="absolute -left-[41px] top-1.5 size-4 bg-background grid place-items-center">
                <span className="size-1.5 bg-accent" />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">2025 — 2027</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">Master of Science in Computer & Systems Science</h3>
              <p className="text-accent text-xs font-medium">Stockholm University (DSV), Sweden</p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
                Continuing studies to deepen systems thinking and gain advanced knowledge in cybersecurity, AI, and computer science.
              </p>
            </li>
            
            <li className="relative mb-16">
              <span className="absolute -left-[41px] top-1.5 size-4 bg-background grid place-items-center">
                <span className="size-1.5 bg-accent" />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">2020 — 2024</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">BSc (Hons) in Information Technology Specialising in Cyber Security</h3>
              <p className="text-accent text-xs font-medium">Sri Lanka Institute of Information Technology</p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
                Built a strong foundation in cybersecurity, covering network security, SOC operations, and security engineering principles.
              </p>
            </li>

            <li className="relative last:mb-0">
              <span className="absolute -left-[41px] top-1.5 size-4 bg-background grid place-items-center">
                <span className="size-1.5 bg-accent" />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">2006 — 2019</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">Isipathana College, Sri Lanka</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
                Completed Advanced Level studies with a focus on Mathematics, Accounting, and Computer Science.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);