import React, { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "opacity-0 translate-y-4",
    "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:animate-none",
    isVisible ? "motion-safe:animate-fade-slide" : "",
    className,
  ].join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
