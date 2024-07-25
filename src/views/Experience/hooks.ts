import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useCallback, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const expRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(expRef, {
    threshold: 0.8
  });

  const handleRouterPush = useCallback(() => {
    router.push('/#experience');
  }, [router]);

  useEffect(() => {
    if (isSectionVisible) {
      handleRouterPush()
    }
  }, [isSectionVisible, expRef]);

  return {
    data: {
      expRef
    }
  }
}

export default useCustomHooks;