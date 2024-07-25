import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (!observerRef.current && ref.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, options);
      observerRef.current.observe(ref.current);
    }

    const debounceRAF = requestAnimationFrame(() => {
      if (ref.current) {
        observerRef.current?.observe(ref.current);
      }
    });

    return () => {
      if (observerRef.current) {
        cancelAnimationFrame(debounceRAF);
        observerRef.current.disconnect();
        observerRef.current = null; // Proper cleanup of IntersectionObserver
      }
    };
  }, [ref, options, handleIntersection]);

  return isIntersecting;
}

export default useIntersectionObserver;