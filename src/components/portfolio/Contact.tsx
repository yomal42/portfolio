import { Mail, Linkedin, Github, FileText } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="relative bg-foreground py-24 text-background md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-background/60">
            <span className="text-accent">04</span>
            <span className="h-px w-10 bg-background/30" />
            <span>Contact</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-balance text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            Let's talk<span className="text-accent">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Column title="Contact Me">
          <IconLink href="mailto:your.email@domain.com" label="Email" icon={<Mail className="size-5" />} />
        </Column>

        <Column title="Socials">
          <div className="flex items-center gap-4">
            <IconLink href="https://linkedin.com/in/yourname" label="LinkedIn" icon={<Linkedin className="size-5" />} external />
            <IconLink href="https://github.com/yourname" label="GitHub" icon={<Github className="size-5" />} external />
          </div>
        </Column>

        <Column title="CV">
          <IconLink href="/cv.pdf" label="Download CV" icon={<FileText className="size-5" />} download />
        </Column>
      </div>
    </div>

    <footer className="mt-24 border-t border-background/15">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.3em] text-background/50 md:flex-row md:items-center md:px-10">
        <span>© {new Date().getFullYear()} Yomal</span>
        <span>Cyber Security Engineer</span>
      </div>
    </footer>
  </section>
);

const Column = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col items-start gap-4">
    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-background">
      {title}
    </p>
    {children}
  </div>
);

const IconLink = ({
  href,
  label,
  icon,
  external,
  download,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  download?: boolean;
}) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    {...(download ? { download: true } : {})}
    className="inline-flex size-11 items-center justify-center border border-background/20 text-background/80 transition-colors hover:border-accent hover:text-accent"
  >
    {icon}
  </a>
);
