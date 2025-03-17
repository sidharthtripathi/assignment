import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
}

export default function LazyImage({ src, alt }: LazyImageProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref}>
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            width: "100%",
          }}
        />
      )}
    </div>
  );
}
