const words = [
  "ICHIBANCHA",
  "NISHIO · AICHI",
  "SHINCHA",
  "GELATO",
  "VINAMILK EST.1976",
  "MATCHA GOTCHA",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center gap-8 px-8 font-mono text-xs tracking-[0.35em] whitespace-nowrap text-background/70 uppercase"
              >
                {word}
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
