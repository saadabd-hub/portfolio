import Link from 'next/link';
import React from 'react';
// Component
import Navbar from '@/components/common/Navbar';
import Button from '@/components/common/Button';
import useCustomHooks from './hooks';

const Header = () => {
  const { methods } = useCustomHooks();

  return (
    <Navbar id="header" className="w-full sticky top-0 z-20 w-96 h-16 px-20 py-4 bg-gray-950 border-b border-black border-opacity-0 justify-between items-center gap-4 inline-flex">
      <div id="container" className="grow shrink basis-0 h-9 px-8 justify-between items-center gap-96 flex">
        <a className="text-center text-gray-50 text-3xl font-bold leading-9 cursor-pointer" onClick={() => methods.scrollToSection('hero')}>{'<Saad />'}</a>
        <div className="justify-center items-center gap-6 flex">
          <Link passHref legacyBehavior href={'/#about'} className="justify-center items-center flex">
            <a className="text-gray-300 text-base font-medium leading-normal" onClick={() => methods.scrollToSection('about')}>About</a>
          </Link>
          <Link passHref legacyBehavior href={'/#skills'} className="justify-center items-center flex">
            <a className="text-gray-300 text-base font-medium leading-normal" onClick={() => methods.scrollToSection('skills')}>Skills</a>
          </Link>
          <Link passHref legacyBehavior href={'/#experience'} className="justify-center items-center flex">
            <a className="text-gray-300 text-base font-medium leading-normal">Experience</a>
          </Link>
          <Link passHref legacyBehavior href={'/#contact'} className="justify-center items-center flex">
            <a className="text-gray-300 text-base font-medium leading-normal">Contact</a>
          </Link>
          <span className="w-6 h-px -rotate-90 border border-gray-800"></span>
          <div className="justify-center items-center gap-4 flex">
            <Button
              id="download-cv"
              className="px-4 py-1.5 bg-gray-50 rounded-xl justify-center items-center gap-2 flex text-gray-900 text-base font-medium leading-normal"
              label="Download CV"
              onClick={methods.onClickDownloadPdf}
            />
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default Header;
