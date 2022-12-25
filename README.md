# react-use-intersection-observer-pack

This is a library that provides `infinite-scroll` and `lazy-loading` Hook using IntersectionObserver API.

## Installation

Install using NPM

```shell
npm install react-use-intersection-observer-pack
```

## Usage

### `useInfiniteScroll` Hook

When `rootElRef` and `observedTargetRef` intersect and `hasMore` is true, `onLoadMore` function is called.

```javascript
import { useState, useRef } from "react";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

export default function InfiniteScrollComponent() {
  const rootElRef = (useRef < HTMLDivElement) | (null > null);

  const { data, setData } = useState([]);
  const { observedTargetRef } = useInfiniteScroll({
    hasMore: true, // or false
    onLoadMore: loadMore, // fetch data and setData
    option: {
      root: rootElRef.current,
      // threshold: 0.5,
      // rootMargin : "0px 10px 0px 0px"
    },
  });

  return (
    <div class="infinite-scroll-component" ref={rootElRef}>
      {data.map((item) => (
        <li>{item.content}</li>
      ))}
      <div ref={observedTargetRef} />
    </div>
  );
}
```
