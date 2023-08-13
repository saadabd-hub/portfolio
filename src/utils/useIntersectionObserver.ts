import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    }, options);
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return isIntersecting;
}
  
export default useIntersectionObserver;