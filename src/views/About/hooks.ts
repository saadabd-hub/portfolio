import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useCallback, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const aboutRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(aboutRef, {
    threshold: 0.8
  });

  const handleRouterPush = useCallback(() => {
    router.push('/#about');
  }, [router]);

  useEffect(() => {
    if (isSectionVisible) {
      handleRouterPush()
    }
  }, [isSectionVisible, aboutRef]);

  return {
    data: {
      aboutRef
    }
  }
}

export default useCustomHooks;