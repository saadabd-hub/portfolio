import GithubIcon from '@/assets/svg/GithubIcon';
import MarkLocationIcon from '@/assets/svg/MarkLocationIcon';
import React from 'react';
import Image from 'next/image';

import HeroPic from '@/assets/img/hero.jpeg'
import { useRouter } from 'next/router';
import useIntersectionObserver from '@/utils/useIntersectionObserver';

const Hero = () => {

  const router = useRouter();
  const heroRef = React.useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(heroRef, {
    threshold: 1
  });

  React.useEffect(() => {
    if (isSectionVisible) {
      router.push('/#');
    }
  }, [isSectionVisible]);

  const onClickIcon = React.useCallback(() => {
    return router.push('https://github.com/saadabd-hub' , undefined, { shallow: true })
  }, [router])

  return (
    <section ref={heroRef} id='hero' className="w-full h-auto px-20 py-24 bg-gray-950 justify-between items-start gap-2.5 inline-flex">
      <div id="hero-container" className="grow shrink basis-0 h-auto px-8 justify-start items-start gap-12 flex">
        <div id="column" className="self-stretch flex-col justify-center items-start gap-10 inline-flex">
          <div id="content" className="self-stretch h-auto flex-col justify-center items-start gap-4 flex">
            <h3 className="text-gray-50 text-6xl font-bold leading-10">{'Hi, I\'m Saad 👋'}</h3>
            <p className="text-gray-300 text-base font-normal leading-normal">{'Junior Software Engineer.'}</p>
          </div>
          <div id="group" className="self-stretch h-14 flex-col justify-center items-start gap-4 flex">
            <div id="location" className="self-stretch justify-start items-center gap-2 inline-flex">
              <MarkLocationIcon height={24} width={24} className="w-6 h-6 relative"/>
              <p className="text-gray-300 text-base font-normal leading-normal">Yogyakarta, Indonesia</p>
            </div>
          </div>
          <div id="action" className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
            <div id="link" className="justify-start items-center gap-1 inline-flex">
              <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={onClickIcon}>
                <GithubIcon height={24} width={24} className="w-6 h-6 relative"/>
              </button>
            </div>
          </div>
        </div>
        <div id="column" className="grow shrink basis-0 self-stretch flex-col justify-center items-end inline-flex">
          <div id="pic-container" className="w-80 h-96 relative">
            <div className="w-72 h-80 left-[40px] top-[40px] absolute bg-gray-700 border-4 border-gray-950"/>
            <Image alt="hero-img" src={HeroPic} height={320} width={280} className="w-72 h-80 left-0 top-0 absolute border-4 border-gray-950 object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;