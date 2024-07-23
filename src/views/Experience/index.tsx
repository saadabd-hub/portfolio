import RfLogo from '@/assets/img/refactory-logo.png';
import Image from 'next/image';
import useCustomHooks from './hooks';

const Experience = () => {
  const { data } = useCustomHooks();

  return (
    <section ref={data.expRef} id='experience' className='w-full h-auto px-20 py-24 bg-gray-900 flex-col justify-center items-center inline-flex'>
      <div className="self-stretch h-auto px-8 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-16 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <div className="px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex">
              <h3 className="text-gray-300 text-sm font-medium leading-tight">Experience</h3>
            </div>
          </div>
          <div className="self-stretch h-7 flex-col justify-center items-center flex">
            <p className="self-stretch text-center text-gray-300 text-xl font-normal leading-7">Here is a quick summary of my most recent experiences:</p>
          </div>
        </div>
        <div className="h-auto w-full p-8 bg-gray-800 rounded-xl shadow flex-col justify-start items-start flex">
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-full h-full relative">
                <Image
                  alt='refactory logo'
                  src={RfLogo}
                  height={300}
                  width={400}
                />
              </div>
            </div>
            <div className="w-auto flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-50 text-xl font-semibold leading-7">Software Engineer</div>
              <ul className="self-stretch h-auto flex-col justify-start items-start gap-1 flex">
                <li className="self-stretch text-gray-300 text-base font-normal leading-normal list-disc">Create IaC (Infrastructure as Code) using Terraform for safely and efficienty configuration or construct infrastructure </li>
                <li className="self-stretch text-gray-300 text-base font-normal leading-normal list-disc">Create workflow or script for automate integration and deployment using Github Action or Gitlab CI</li>
                <li className="self-stretch text-gray-300 text-base font-normal leading-normal list-disc">Dockerize frontend and backend service and store it on ecs or gcp artifact registry</li>
                <li className="self-stretch text-gray-300 text-base font-normal leading-normal list-disc">Integrate Supabase and React Nextjs</li>
              </ul>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <p className="text-gray-200 text-base font-normal leading-normal">Dec 2022 - July 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;