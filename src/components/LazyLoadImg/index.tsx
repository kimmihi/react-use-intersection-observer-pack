import { LazyLoadImgProps } from "../../types";
import React, { useState, useEffect, useRef } from "react";

export default function LazyLoadImg({ src, alt }: LazyLoadImgProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isView, setIsView] = useState<boolean>(false);

  useEffect(() => {
    if (imgRef === null || imgRef.current === null) {
      return;
    }
    const imgObserver = new IntersectionObserver((entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsView(true);
        observer.unobserve(entry.target);
      }
    });

    imgObserver.observe(imgRef.current);
  }, [imgRef]);

  return <img src={isView ? src : ""} alt={alt} ref={imgRef} />;
}
