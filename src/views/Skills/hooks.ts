import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const skillsRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(skillsRef, {
    threshold: 0.8
  });

  useEffect(() => {
    if (isSectionVisible) {
      router.push('/#skills');
    }
  }, [isSectionVisible]);

  return {
    data: {
      skillsRef
    }
  }
}

export default useCustomHooks;