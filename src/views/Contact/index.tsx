import CopyIcon from '@/assets/svg/CopyIcon';
import EmailIcon from '@/assets/svg/EmailIcon';
import GithubIcon from '@/assets/svg/GithubIcon';
import PhoneIcon from '@/assets/svg/PhoneIcon';
import useIntersectionObserver from '@/utils/useIntersectionObserver';
import { useRouter } from 'next/router';
import React from 'react';

const ContactSection = () => {
  const router = useRouter();
  const contactRef = React.useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(contactRef, {
    threshold: 0.9
  });

  React.useEffect(() => {
    if (isSectionVisible) {
      router.push('/#contact');
    }
  }, [isSectionVisible]);

  const onClickCopy = React.useCallback((type: string) => {
    if (type === 'email') {
      navigator.clipboard.writeText('abdullah.sd48@gmail.com');
    } else if (type === 'phone') {
      navigator.clipboard.writeText('6281382128352');
    }
    alert('Copied to clipboard');
  }, [])

  const onClickLink = React.useCallback((type: string) => {
    if (type === 'github') {
      window.open('https://github.com/saadabd-hub', '_blank', 'noopener noreferrer');
    }
  }, [])

  return (
    <section ref={contactRef} id='contact' className="w-full h-auto px-20 py-24 bg-gray-950 flex-col justify-center items-center inline-flex">
      <div className="self-stretch h-96 px-8 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-24 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex">
              <div className="text-gray-300 text-sm font-medium leading-tight">Get in touch</div>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-center items-center flex">
            <div className="self-stretch text-center text-gray-300 text-xl font-normal leading-7">{'What’s next? Feel free to reach out to me if you\'re looking for a developer, have a query, or simply want to connect.'}</div>
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-4 flex">
          <div className="justify-center items-center gap-5 inline-flex">
            <EmailIcon width={32} height={32} className="relative" />
            <div className="text-center text-gray-50 text-4xl font-semibold leading-10">abdullah.sd48@gmail.com</div>
            <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => onClickCopy('email')}>
              <CopyIcon width={32} height={32} className="relative" />
            </button>
          </div>
          <div className="justify-center items-center gap-5 inline-flex">
            <PhoneIcon height={32} width={32} className="relative" />
            <div className="text-center text-gray-50 text-4xl font-semibold leading-10">+62 81382128352</div>
            <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => onClickCopy('phone')}>
              <CopyIcon height={32} width={32} className="relative" />
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-xl justify-center items-center gap-16 inline-flex">
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-gray-300 text-base font-normal leading-normal">You may also find me on these platforms!</div>
            <div className="self-stretch h-9 flex-col justify-center items-center gap-4 flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => onClickLink('github')}>
                  <GithubIcon width={32} height={32} className="relative" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;