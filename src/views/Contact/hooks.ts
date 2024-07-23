import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import { createRef, useCallback, useEffect, useMemo } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const contactRef = useMemo(() => createRef<HTMLDivElement>(), [])

  const isSectionVisible = useIntersectionObserver(contactRef, {
    threshold: 0.8
  });

  const onClickCopy = useCallback((type: string) => {
    if (type === 'email') {
      navigator.clipboard.writeText('abdullah.sd48@gmail.com');
    } else if (type === 'phone') {
      navigator.clipboard.writeText('6281382128352');
    }
    alert('Copied to clipboard');
  }, [])

  const onClickLink = useCallback((type: string) => {
    if (type === 'github') {
      window.open('https://github.com/saadabd-hub', '_blank', 'noopener noreferrer');
    }
  }, [])

  useEffect(() => {
    if (isSectionVisible) {
      router.push('/#contact');
    }
  }, [isSectionVisible]);

  return {
    methods: {
      onClickCopy,
      onClickLink
    },
    data: {
      contactRef
    }
  }
}

export default useCustomHooks;