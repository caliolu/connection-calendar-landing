"use client";

import { cn } from "@/lib/utils/cn";
import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-up" | "scale-in";

interface AnimateOnViewProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

export function AnimateOnView({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass =
    variant === "fade-up"
      ? "animate-[fade-up_0.6s_ease-out_forwards]"
      : "animate-[scale-in_0.5s_ease-out_forwards]";

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass,
        className
      )}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
