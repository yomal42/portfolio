import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const PHOTO_SRC = "/me.jpg";

export const Hero = () => {
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
    img.src = PHOTO_SRC;
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-dvh overflow-hidden border-b border-border/50 pt-16"
    >
      <div className="absolute inset-0 grid-lines grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-96 bg-gradient-to-b from-accent/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* MATCHING THE 12-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: 3-Column Spacer (Matches your section labels) */}
          <div className="hidden md:block md:col-span-3" />

          {/* RIGHT COLUMN: 9-Column Content Block */}
          <div className="md:col-span-9 space-y-10">
            
            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-3 border border-border/50 bg-surface/50 backdrop-blur-sm px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-on opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-status-on" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            {/* MAIN HEADER AREA */}
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-mono text-[16px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className="inline-block origin-[70%_70%] animate-wave text-base" aria-hidden="true">
                  👋
                </span>
                Hi, I'm
              </p>

              <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <h1 className="text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
                  YOMAL<span className="text-accent">.</span>
                </h1>
                
                {/* PHOTO INSET (Aligned with header) */}
                {hasPhoto && (
                  <div className="mb-2 h-20 w-20 shrink-0 border border-strong bg-surface md:h-24 md:w-24">
                    <img
                      src={PHOTO_SRC}
                      alt="Portrait"
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* DESCRIPTION: Fixed weight and size */}
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl font-normal">
              Cyber Security Engineer experienced in designing, deploying, and
              managing security controls across enterprise environments. Skilled
              in security platform integration, Network Security, Endpoint
              protection, SIEM operations, and Incident response.
            </p>

            {/* FOOTER AREA: Location + Action */}
            <div className="flex flex-col gap-8 pt-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin className="size-3.5 text-accent" />
                Stockholm, Sweden
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-strong px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                Get in touch
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};