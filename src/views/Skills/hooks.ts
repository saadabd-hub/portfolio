import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useCallback, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const skillsRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(skillsRef, {
    threshold: 0.8
  });

  const handleRouterPush = useCallback(() => {
    router.push('/#skills');
  }, [router]);

  useEffect(() => {
    if (isSectionVisible) {
      handleRouterPush()
    }
  }, [isSectionVisible, skillsRef]);

  return {
    data: {
      skillsRef
    }
  }
}

export default useCustomHooks;