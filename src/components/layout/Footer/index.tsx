import CopyrightIcon from '@/assets/svg/CopyrightIcon';
import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="w-full h-auto px-20 py-6 bg-gray-900 flex justify-center items-center gap-2 inline-flex">
      <CopyrightIcon width={26} height={26} className='relative'/>
      <p className="text-gray-300 text-sm font-normal leading-tight">2023 | <span className='text-gray-300 text-sm font-normal underline leading-tight cursor-pointer'>Coded</span> by Abdullah Saad and <span className='text-gray-300 text-sm font-normal underline leading-tight cursor-pointer'>designed</span> by Sagar Shah</p>
    </div>
  )
}

export default Footer;