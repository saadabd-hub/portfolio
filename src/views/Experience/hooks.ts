import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from "next/router";
import { createRef, useEffect, useMemo } from "react";

const useCustomHooks = () => {
    const router = useRouter();
    const expRef = useMemo(() => createRef<HTMLDivElement>(), [])

    const isSectionVisible = useIntersectionObserver(expRef, {
        threshold: 0.8
    });

    useEffect(() => {
        if (isSectionVisible) {
            router.push('/#experience');
        }
    }, [isSectionVisible]);

    return {
        data: {
            expRef,
        }
    }
}

export default useCustomHooks;