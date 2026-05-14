export const Achievements = () => (
  <section id="achievements" className="w-full py-24 border-b border-border/50">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
       <div className="md:col-span-3">
  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
    <span className="h-px w-10 bg-current opacity-30" />
    <span>Achievements</span>
  </div>
</div>

        {/* RIGHT: Content (9 cols) */}
        <div className="md:col-span-9">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl mb-16">
            Highlights & wins<span className="text-accent">.</span>
          </h2>
          
          <ul className="space-y-8 max-w-3xl">
            {/* Simple Point 1 */}
            <li className="flex gap-4 group">
              <span className="text-accent mt-2 select-none opacity-50 group-hover:opacity-100 transition-opacity">—</span>
              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                Led and supported security awareness consulting initiatives at Oak, strengthening user security awareness and organizational security posture.
              </p>
            </li>

            {/* Simple Point 2 */}
            <li className="flex gap-4 group">
              <span className="text-accent mt-2 select-none opacity-50 group-hover:opacity-100 transition-opacity">—</span>
              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                Contributed to the team awarded <span className="text-foreground">"Most Outstanding Cybersecurity Solutions Provider — 2024"</span> by the ISACA Sri Lanka Chapter.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);