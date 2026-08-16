import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) {
        setShown(true);
        window.removeEventListener("scroll", onScroll);
        return true;
      }
      return false;
    };
    const onScroll = () => check();

    if (!check()) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
