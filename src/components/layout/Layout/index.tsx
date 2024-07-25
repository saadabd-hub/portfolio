import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const HeroViews = dynamic(() => import('@/views/Hero'))
const AboutViews = dynamic(() => import('@/views/About'))
const SkillsViews = dynamic(() => import('@/views/Skills'))
const ExperienceViews = dynamic(() => import('@/views/Experience'));
const ContactViews = dynamic(() => import('@/views/Contact'));

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
  }, [router]);

  return (
    <>
      <HeroViews />
      <AboutViews />
      <SkillsViews />
      <ExperienceViews />
      <ContactViews />
    </>
  )
}

export default Layout;