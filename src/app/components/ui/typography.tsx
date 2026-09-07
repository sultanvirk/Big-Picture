import type { ComponentPropsWithoutRef } from "react";

const joinClasses = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(" ");

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type SubheadingProps = ComponentPropsWithoutRef<"h2">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;

export function H1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={joinClasses(
        "font-kanit text-4xl font-light leading-tight text-[#304b6d] sm:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: SubheadingProps) {
  return (
    <h2
      className={joinClasses(
        "font-kanit text-3xl font-light leading-tight text-[#304b6d] sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

export function Paragraph({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={joinClasses(
        "text-sm leading-6 text-[#59616b]",
        className,
      )}
      {...props}
    />
  );
}
