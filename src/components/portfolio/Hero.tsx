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
    <section id="top" className="relative min-h-dvh overflow-hidden border-b border-border pt-16">
      <div className="absolute inset-0 grid-lines grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-96 bg-gradient-to-b from-accent/10 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-center px-6 py-20 md:px-10">
        <div
          className="grid grid-cols-12 items-center gap-10"
          style={{ animation: "fade-up 0.6s ease both" }}
        >
          <div className={`space-y-8 col-span-12 ${hasPhoto ? "md:col-span-8" : "md:col-span-12"}`}>
            <div className="inline-flex items-center gap-3 border border-border bg-surface px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-on opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-status-on" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            <div className="space-y-3">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
                <span className="inline-block origin-[70%_70%] animate-wave text-base md:text-lg" aria-hidden="true">
                  👋
                </span>
                Hi, I'm
              </p>
              <h1 className="text-balance text-6xl font-bold leading-[0.88] tracking-tighter md:text-8xl lg:text-[9rem]">
                YOMAL<span className="text-accent">.</span>
              </h1>
            </div>

            <p className="max-w-[42ch] text-pretty text-lg text-muted-foreground md:text-xl">
              Network Security Engineer focused on protecting infrastructure,
              hardening networks, and responding to threats.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5" />
                Your City, Country
              </span>
              <span className="hidden h-3 w-px bg-border-strong sm:block" />
              <span>your.email@domain.com</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-strong px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-surface"
              >
                Get in touch
              </a>
            </div>
          </div>

          {hasPhoto && (
            <div className="col-span-12 md:col-span-4">
              <div className="relative mx-auto aspect-square w-full max-w-sm border border-strong bg-surface">
                <img
                  src={PHOTO_SRC}
                  alt="Yomal — portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute -bottom-px -right-px h-4 w-4 bg-accent" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
