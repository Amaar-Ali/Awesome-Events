import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.01) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  mask = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  mask?: boolean;
  as?: "div" | "section" | "figure" | "li" | "span";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${mask ? "reveal-mask" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}
