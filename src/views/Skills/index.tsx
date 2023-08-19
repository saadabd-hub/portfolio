import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useIntersectionObserver from '@/utils/useIntersectionObserver';

const SkillSection = () => {
  const router = useRouter();
  const skillRef = React.useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(skillRef, {
    threshold: 1,
    rootMargin: '0px 0px 0px 0px'
  });

  React.useEffect(() => {
    if (isSectionVisible) {
      router.push('/#skills');
    }
  }, [isSectionVisible]);

  return (
    <section ref={skillRef} id='skills' className='w-96 h-96 px-20 py-24 bg-gray-950 flex-col justify-center items-center inline-flex'>
      <div className='self-stretch h-96 px-8 flex-col justify-start items-start gap-12 flex'>
        <div className='self-stretch h-16 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch h-7 flex-col justify-center items-center flex'>
            <div className='px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex'>
              <p className='text-gray-300 text-sm font-medium leading-tight'>Skills</p>
            </div>
          </div>
          <div className='self-stretch h-7 flex-col justify-center items-center flex'>
            <div className='px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex'>
              <p className='self-stretch text-center text-gray-300 text-xl font-normal leading-7'>The skills, tools and technologies I am really good at:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection;