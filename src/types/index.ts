export interface LazyLoadImgProps {
  src: string;
  alt: string;
}

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
