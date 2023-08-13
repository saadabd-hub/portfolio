import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useCustomHooks = () => {
  const router = useRouter();
  const onClickIcon = useCallback(() => {
    return router.push('https://github.com/saadabd-hub' , undefined, { shallow: true })
  }, [router])

  return {
    methods: {
      onClickIcon
    }
  }
}

export default useCustomHooks;