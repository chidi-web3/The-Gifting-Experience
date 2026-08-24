import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-border/60 pb-14 pt-20">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </Container>
    </header>
  );
}
