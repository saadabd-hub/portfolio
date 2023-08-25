import React from 'react';
import { useRouter } from 'next/router';
import useIntersectionObserver from '@/utils/useIntersectionObserver';

// Images
import JsIcon from '@/assets/svg/JsIcon';
import TsIcon from '@/assets/svg/TsIcon';
import ReactIcon from '@/assets/svg/ReactIcon';
import GitIcon from '@/assets/svg/GitIcon';
import GithubActionIcon from '@/assets/svg/GithubActionIcon';
import GitlabCiIcon from '@/assets/svg/GitlabCiIcon';
import BashIcon from '@/assets/svg/BashIcon';
import TfIcon from '@/assets/svg/TfIcon';
import DockerIcon from '@/assets/svg/DockerIcon';
import KubernetesIcon from '@/assets/svg/KubernetesIcon';
import GCPIcon from '@/assets/svg/GCPIcon';
import AWSIcon from '@/assets/svg/AWSIcon';

const SkillSection = () => {
  const router = useRouter();
  const skillRef = React.useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(skillRef, {
    threshold: 0.9
  });

  React.useEffect(() => {
    if (isSectionVisible) {
      router.push('/#skills');
    }
  }, [isSectionVisible]);

  return (
    <section ref={skillRef} id='skills' className='w-full h-auto px-20 py-24 bg-gray-950 flex-col justify-center items-center inline-flex gap-12'>
      <div className="self-stretch h-16 flex-col justify-start items-start flex">
        <div className="self-stretch h-7 flex-col justify-center items-center flex">
          <div className="px-5 py-1 bg-gray-700 rounded-xl justify-center items-center inline-flex">
            <div className="text-gray-300 text-sm font-medium leading-tight">Skills</div>
          </div>
        </div>
        <div className="self-stretch h-7 flex-col justify-center items-center flex">
          <div className="self-stretch text-center text-gray-300 text-xl font-normal leading-7">The skills, tools and technologies I am really good at:</div>
        </div>
      </div>
      <div className="self-stretch h-auto flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch justify-evenly items-center inline-flex">
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <JsIcon className="w-16 h-16 relative" width={64} height={64} />
            <div className="text-gray-300 text-lg font-normal leading-7">Javascript</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <TsIcon className="w-16 h-16 relative" width={65} height={64}/>
            <div className="text-gray-300 text-lg font-normal leading-7">Typescript</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <ReactIcon className="w-16 h-16 relative" width={71} height={64}/>
            <div className="text-gray-300 text-lg font-normal leading-7">React</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <GitIcon className="w-16 h-16 relative" width={64} height={64}/>
            <div className="text-gray-300 text-lg font-normal leading-7">Git</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <GithubActionIcon className="w-16 h-16 relative" width={64} height={64}/>
            <div className="text-gray-300 text-lg font-normal leading-7">Github Action</div>
          </div>
        </div>
        <div className="self-stretch justify-evenly items-center inline-flex">
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <GitlabCiIcon className="w-16 h-16 relative" width={64} height={64} />
            <div className="text-gray-300 text-lg font-normal leading-7">Gitlab CI</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <BashIcon className="w-16 h-16 relative" width={48} height={48} />
            <div className="text-gray-300 text-lg font-normal leading-7">Bash</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <TfIcon className="w-16 h-16 relative" width={16} height={16} />
            <div className="text-gray-300 text-lg font-normal leading-7">Terraform</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <DockerIcon className="w-16 h-16 relative" width={16} height={16} />
            <div className="text-gray-300 text-lg font-normal leading-7">Docker</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <KubernetesIcon className="w-16 h-16 relative" width={16} height={16} />
            <div className="text-gray-300 text-lg font-normal leading-7">Kubernetes</div>
          </div>
        </div>
        <div className="self-stretch justify-evenly items-center inline-flex">
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <GCPIcon className="w-16 h-16 relative" width={16} height={16} />
            <div className="text-gray-300 text-lg font-normal leading-7">GCP</div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
            <AWSIcon className="w-16 h-16 relative" width={48} height={48} />
            <div className="text-gray-300 text-lg font-normal leading-7">AWS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection;