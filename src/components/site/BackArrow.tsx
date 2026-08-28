import { ArrowLeft } from "lucide-react";
import { useRouter } from "@tanstack/react-router";

interface BackArrowProps {
  to?: string;
  className?: string;
}

export function BackArrow({ to = "/", className = "" }: BackArrowProps) {
  const router = useRouter();
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
      className={`fixed left-4 top-20 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      <ArrowLeft className="size-5" aria-hidden />
    </button>
  );
}