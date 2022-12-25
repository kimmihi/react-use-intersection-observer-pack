import { useState, useEffect } from "react";

export type IntersectionObserverOption = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export interface InfiniteScrollHooksProps {
  hasMore: boolean;
  onLoadMore: () => void;
  delayMs?: number;
  option?: IntersectionObserverOption;
}

const useInfiniteScroll = ({
  hasMore,
  onLoadMore,
  delayMs = 300,
  option,
}: InfiniteScrollHooksProps) => {
  const [observedTargetRef, setObservedTargetRef] = useState<Element | null>(
    null,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          onLoadMore();
        }
      },
      {
        ...option,
      },
    );

    if (observedTargetRef) {
      observer.observe(observedTargetRef);
    }
  }, [delayMs, hasMore, observedTargetRef, onLoadMore, option]);

  return {
    observedTargetRef: setObservedTargetRef,
  };
};

export default useInfiniteScroll;
