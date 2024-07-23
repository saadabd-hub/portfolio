import CopyIcon from '@/assets/svg/CopyIcon';
import EmailIcon from '@/assets/svg/EmailIcon';
import GithubIcon from '@/assets/svg/GithubIcon';
import PhoneIcon from '@/assets/svg/PhoneIcon';
import useCustomHooks from './hooks';

const ContactSection = () => {
  const { data, methods } = useCustomHooks()

  return (
    <section ref={data.contactRef} id='contact' className="w-full h-auto px-20 py-24 bg-gray-950 flex-col justify-center items-center inline-flex">
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
            <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => methods.onClickCopy('email')}>
              <CopyIcon width={32} height={32} className="relative" />
            </button>
          </div>
          <div className="justify-center items-center gap-5 inline-flex">
            <PhoneIcon height={32} width={32} className="relative" />
            <div className="text-center text-gray-50 text-4xl font-semibold leading-10">+62 81382128352</div>
            <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => methods.onClickCopy('phone')}>
              <CopyIcon height={32} width={32} className="relative" />
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-xl justify-center items-center gap-16 inline-flex">
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-gray-300 text-base font-normal leading-normal">You may also find me on these platforms!</div>
            <div className="self-stretch h-9 flex-col justify-center items-center gap-4 flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <button className="p-1.5 rounded-lg justify-center items-center flex" onClick={() => methods.onClickLink('github')}>
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