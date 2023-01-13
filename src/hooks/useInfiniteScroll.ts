import { InfiniteScrollHooksProps } from "../types";
import { useState, useEffect } from "react";

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
