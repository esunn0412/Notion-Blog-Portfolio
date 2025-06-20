import Tagline from '@/components/animation/Tagline';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { FiFileText } from 'react-icons/fi';
import { SocialLink } from '@/types/index';

const links: SocialLink[] = [
  {
    platform: 'Email',
    url: 'mailto:taeeunk320@gmail.com',
    icon: 'mail',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/esunn0412',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/taeeunnkim/',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/taeeun.k__/',
    icon: 'instagram',
  },
  {
    platform: 'Resume',
    url: '/resume.pdf',
    icon: 'resume',
  },
];

const iconMap: Record<string, IconType> = {
  mail: LuMail,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  resume: FiFileText,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative flex scroll-mt-[var(--sticky-top)] flex-col items-center justify-center tracking-wide caret-transparent md:h-[var(--no-header-height)] md:flex-row"
    >
      <div className="mb-12 flex flex-1 flex-col items-center space-y-4 md:mb-40 md:items-start">
        <h1 className="m-0 mb-2 text-7xl">Taeeun Kim</h1>
        <p className="text-md pl-2 text-[var(--description)]">
          Atlanta, United States | Seoul, Korea
        </p>
        <Tagline />
      </div>

      <p className="mb-40 max-w-xl flex-1 text-[var(--description)]">
        I&apos;m a student developer and AI researcher who firmly believes that even the most
        advanced AI is meaningless without a platform or application that brings it to life for real
        users. I strive to bridge that gap, leveraging AI to build experiences that have tangible
        impact on the general public.
        <br />
        <br />
        I&apos;m currently a rising junior at Emory University, studying Mathematics and Computer
        Science. As Co-Hackathon Director and Project Lead at{' '}
        <a
          href="https://www.linkedin.com/company/project-emory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--highlight)] underline-offset-2 hover:underline"
        >
          Project Emory
        </a>
        , I organized{' '}
        <a
          href="https://www.linkedin.com/posts/project-emory_emoryhacks2025-hackathon-techinnovation-activity-7311186895395332096-R-uR/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--highlight)] underline-offset-2 hover:underline"
        >
          Emory&apos;s first-ever CS Hackathon
        </a>{' '}
        with an amazing team and led a student team to build a website for a local business. Now, as
        Vice President of Project Emory, I’m focused on building a community of curious, driven, and
        collaborative students, to support and encourage everyone on their journey.
        <br />
        <br />
        In my free time, I enjoy kickboxing, singing and playing guitar, cafe hopping for a good cup
        of latte, crying to great movies, or eating good food with good people.
      </p>

      <div className="absolute bottom-20 left-0 container mx-auto w-full">
        <div className="flex w-full justify-center gap-6 pt-4 md:justify-start md:gap-4">
          {links.map((link) => {
            const Icon = iconMap[link.icon.toLowerCase()];

            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                {Icon && (
                  <Icon className="size-8 transition-transform duration-200 hover:scale-110 hover:text-[var(--description)] md:size-6" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
