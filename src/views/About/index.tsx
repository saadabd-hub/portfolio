import React, { FC } from 'react';
import Image from 'next/image';
import Pic from '@/assets/img/about-me.jpeg'
import { useRouter } from 'next/router';
import useIntersectionObserver from '@/utils/useIntersectionObserver';

const About = () => {
  const router = useRouter();
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(aboutRef, {
    threshold: 0.9
  });

  React.useEffect(() => {
    if (isSectionVisible) {
      router.push('/#about');
    }
  }, [isSectionVisible]);

  return (
    <section ref={aboutRef} id='about' className="w-full h-au px-20 py-24 bg-gray-900 justify-between items-start inline-flex">
      <div className="grow shrink basis-0 px-8 flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-7 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex">
              <div className="text-gray-300 text-sm font-medium leading-tight">About me</div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="w-96 h-96 relative">
              <div className="w-96 h-96 left-0 top-[40px] absolute bg-gray-700 border-4 border-gray-900" />
              <Image alt="hero-img" src={Pic} height={320} width={280} className="w-96 h-96 left-[40px] top-0 absolute border-4 border-gray-900 object-cover"/>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-gray-50 text-3xl font-semibold leading-9">Curious about me? Here you have it:</div>
            <div className="self-stretch h-96 flex-col justify-start items-start gap-4 flex">
              <p className="self-stretch text-gray-300 text-base font-normal leading-normal">
                {`My insatiable curiosity and desire to acquire new knowledge drive me to constantly explore emerging trends and advancements in the world of technology. I find great joy in learning and actively seek opportunities to enhance my skills and expertise.
                `}</p>
              <p className="self-stretch text-gray-300 text-base font-normal leading-normal">
                {`My insatiable curiosity drives me to stay up-to-date with the latest advancements in technology, and I relish the opportunity to work on technology-related projects that challenge my creativity and problem-solving skills. I am eager to leverage my passion for technology to make a positive impact and contribute meaningfully to the ever-evolving digital landscape. With a focus on continuous improvement, I am excited to explore opportunities that align with my passions and allow me to grow professionally while driving innovation forward.
                `}</p>
              <p className="self-stretch text-gray-300 text-base font-normal leading-normal">{'One last thing, I\'m available for freelance work, so feel free to reach out and say hello! I promise I don\'t bite 😉'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;