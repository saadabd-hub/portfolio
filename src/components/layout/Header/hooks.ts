import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useCustomHooks = () => {
  const router = useRouter()
  const onClickDownloadPdf = useCallback(() => {
    const pdfUrl = 'https://drive.google.com/file/d/1zCl7Ia04nRDimWYs3ooIJcejGSSgoMTc/view?usp=sharing';
    const link = document.createElement('a');

    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Abdullah_Saad.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const isActiveRoute = useCallback((route: string) => {
    return router.asPath === route;
  }, [router])

  return {
    methods: {
      onClickDownloadPdf,
      scrollToSection,
      isActiveRoute
    }
  }
}

export default useCustomHooks;