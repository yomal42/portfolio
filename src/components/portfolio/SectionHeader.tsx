interface Props {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ index, eyebrow, title, description }: Props) => (
  <div className="mb-16 grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-4">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-border-strong" />
        <span>{eyebrow}</span>
      </div>
    </div>
    <div className="col-span-12 md:col-span-8">
      <h2 className="text-balance text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  </div>
);
