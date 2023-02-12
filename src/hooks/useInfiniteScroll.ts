import { InfiniteScrollHooksProps } from "../types";
import { useEffect } from "react";

import useIntersectionObserver from "./useIntersectionObserver";

const useInfiniteScroll = ({
  hasMore,
  onLoadMore,
  delayMs = 300,
  options,
}: InfiniteScrollHooksProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ options });

  const shouldMoreLoad = hasMore && isIntersecting;

  useEffect(() => {
    if (shouldMoreLoad === false) {
      return;
    }

    const timer = setTimeout(() => {
      onLoadMore();
    }, delayMs);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [delayMs, onLoadMore, shouldMoreLoad]);

  return {
    observedTargetRef: ref,
  };
};

export default useInfiniteScroll;
