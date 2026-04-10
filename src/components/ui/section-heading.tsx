interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
