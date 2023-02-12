import type { IntersectionObserverHookProps } from "../types";
import { useState, useEffect } from "react";

export default function useIntersectionObserver({
  options,
}: IntersectionObserverHookProps) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!ref) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        ...options,
      },
    );

    observer.observe(ref);

    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(ref);
  }, [options, ref]);

  return { ref: setRef, isIntersecting };
}
