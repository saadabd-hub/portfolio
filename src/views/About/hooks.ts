import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const aboutRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(aboutRef, {
    threshold: 0.8
  });

  useEffect(() => {
    if (isSectionVisible) {
      router.push('/#about');
    }
  }, [isSectionVisible]);

  return {
    data: {
      aboutRef
    }
  }
}

export default useCustomHooks;