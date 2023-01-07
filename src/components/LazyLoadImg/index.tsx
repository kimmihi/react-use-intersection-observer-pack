import React, { useState, useEffect, useRef } from "react";

export interface LazyLoadImgProps {
  src: string;
  alt: string;
}

export default function LazyLoadImg({ src, alt }: LazyLoadImgProps) {
  const imgRef = useRef(null);
  const [isView, setIsView] = useState<boolean>(false);

  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsView(true);
        observer.unobserve(entry.target);
      }
    });

    if (imgRef === null) {
      return;
    }

    imgRef.current && imgObserver.observe(imgRef.current);
  }, [imgRef]);

  return <img src={isView ? src : ""} alt={alt} ref={imgRef} />;
}
