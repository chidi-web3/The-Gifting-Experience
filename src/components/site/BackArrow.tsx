import { ArrowLeft } from "lucide-react";
import { useRouter, useRouterState } from "@tanstack/react-router";

interface BackArrowProps {
  to?: string;
  className?: string;
}

/** Routes where going "back" makes sense in isolation (i.e. not the landing page). */
const HIDDEN_ON = ["/"];

export function BackArrow({ to = "/", className = "" }: BackArrowProps) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <button
      type="button"
      aria-label="Go back to the previous page"
      onClick={() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          router.history.push(to);
        }
      }}
      // top-24 sits below the h-20 sticky header so it never overlaps it or the open
      // mobile nav; left-3/min touch target keeps it thumb-friendly on phones.
      className={`fixed left-3 top-24 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary sm:left-4 ${className}`}
    >
      <ArrowLeft className="size-5" aria-hidden />
    </button>
  );
}
