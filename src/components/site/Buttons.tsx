import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const luxeButton = cva(
  "group inline-flex items-center justify-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        solid:
          "rounded-full bg-primary text-primary-foreground px-7 py-4 shadow-[0_12px_28px_rgba(0,0,0,.18)] hover:-translate-y-0.5 hover:bg-sky",
        outline:
          "rounded-full border border-foreground/30 text-foreground px-7 py-4 hover:-translate-y-0.5 hover:border-sky hover:bg-sky hover:text-ink",
        light:
          "rounded-full bg-ink-foreground text-ink px-8 py-5 hover:-translate-y-0.5 hover:bg-sky",
        ghost: "text-foreground link-underline pb-1",
      },
      size: { default: "", sm: "px-5 py-3" },
    },
    defaultVariants: { variant: "solid", size: "default" },
  },
);

export type LuxeButtonProps = VariantProps<typeof luxeButton> & { className?: string };
export const lb = ({ variant, size, className }: LuxeButtonProps) =>
  cn(luxeButton({ variant, size }), className);
