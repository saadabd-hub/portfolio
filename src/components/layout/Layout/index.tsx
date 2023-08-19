import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const HeroLayout = dynamic(() => import('@/views/Hero'))
const AboutLayout = dynamic(() => import('@/views/About'))
const SkillsLayout = dynamic(() => import('@/views/Skills'))

const Layout = () => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      const sectionIdentifier = url.split('#')[1];
      if (sectionIdentifier) {
        const targetElement = document.getElementById(sectionIdentifier);
        if (targetElement) {
          targetElement.scrollTo({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <HeroLayout/>
      <AboutLayout/>
      <SkillsLayout/>
    </>
  )
}

export default Layout;