import type { ProjectType } from '@/types';

const ProjectData: ProjectType[] = [
  {
    title: 'Personal Portfolio with Notion Blog',
    description:
      'A modern developer blog powered by Notion and Next.js App Router, featuring MDX rendering, tag filtering, dynamic SEO, personalized publishing workflow, and optimized performance.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Notion API',
      'MDX',
      'Giscus',
    ],
    image: '/images/notion.png',
    url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/`,
    github: 'https://github.com/esunn0412/notion-blog',
  },
  {
    title: 'WOW Centreville',
    description:
      'Full-stack ordering platform for local business, streamlining order management and online payment.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'Stripe', 'Figma'],
    image: '/images/wow.png',
    url: 'https://wowcentreville.com/',
    github: 'https://github.com/project-emory/wow-centreville/tree/main',
  },
  {
    title: 'Rendezvous',
    description:
      'Pinterest and Reddit-inspired full-stack featuring CRUD operations, user authentication, and deployed on AWS via Docker. Currently down due to costs.',
    technologies: ['Django', 'Docker', 'AWS EC2', 'Bootstrap', 'HTML/CSS'],
    image: '/images/ren.png',
    github: 'https://github.com/esunn0412/rendezvous',
  },
  {
    title: 'Good Hangul',
    description:
      'Korean grammar error correction platform powered by the finetuned sLLM research model: nllb-200-ko-gec-3.3B. Built a Chrome Extension that automatically detects inputs and displays correction retrieved from koGEC API. Repo under company assets.',
    technologies: ['Flask', 'Python', 'Docker', 'Typescript', 'PyTorch', 'Pocketbase DB'],
    image: '/images/goodhangul.png',
    url: 'https://goodhangul.sionic.ai/',
    github: '',
  },
];

export default ProjectData;
