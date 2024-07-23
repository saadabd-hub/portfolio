import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from "next/router";
import { createRef, useCallback, useEffect, useMemo } from "react";

const useCustomHooks = () => {
    const router = useRouter();
    const heroRef = useMemo(() => createRef<HTMLDivElement>(), [])

    const isSectionVisible = useIntersectionObserver(heroRef, {
        threshold: 0.8
    });

    const onClickIcon = useCallback((type: string) => {
        if (type == 'github') {
            return window.open('https://github.com/saadabd-hub', '_blank', 'noreferrer');
        }
        if (type == 'linkedin') {
            return window.open('https://www.linkedin.com/in/abdullah-saad-93a0181b3', '_blank', 'noreferrer');
        }
    }, [])

    useEffect(() => {
        if (isSectionVisible) {
            router.push('/');
        }
    }, [isSectionVisible]);

    return {
        methods: {
            onClickIcon
        },
        data: {
            heroRef,
        }
    }
}

export default useCustomHooks;