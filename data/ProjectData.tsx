import type { ProjectType } from '@/types';

const ProjectData: ProjectType[] = [
  {
    title: 'Curaitor: AI-Powered Coursework Management Tool',
    description:
      'A highly concurrent automated local file organizer and processor as Go backend, using the Actor Model with goroutines and channels, Gemini Go SDK, and mutex-protected caching with JSON-backed models for persistence. Expanded with Next.js, React, TypeScript frontend to display organized course materials, up-to-date quizzes and study guides, and interactive knowledge graphs across courses.',
    technologies: ['Go', 'Gemini Go SDK', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/curaitor.jpeg',
    url: `https://devpost.com/software/curaitor-7epmv2`,
    github: 'https://github.com/esunn0412/curaitor/tree/main',
  },
  {
    title: 'Personal Portfolio with Notion Blog',
    description:
      'A modern developer blog powered by Notion CMS and Next.js App Router, featuring MDX rendering, tag filtering, dynamic SEO, personalized publishing workflow, and optimized performance.',
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
      'Pinterest- and Reddit-inspired social platform built on a modular Django architecture with rich text editor, grid UI, authentication-aware navigation, and social features. Deployed on AWS EC2 using Docker, integrating Nginx, Gunicorn, and MariaDB with Docker secrets for secure configuration and production scalability. Currently down due to costs.',
    technologies: [
      'Django',
      'Docker',
      'AWS EC2',
      'Nginx',
      'Gunicorn',
      'MariaDB',
      'Bootstrap',
      'HTML/CSS',
    ],
    image: '/images/ren.png',
    github: 'https://github.com/esunn0412/rendezvous',
  },
  {
    title: 'Good Hangul',
    description:
      'On-premise Korean grammar correction platform powered by self-finetuned and open-sourced nllb-200-ko-gec-3.3B model hosted on Amazon S3, Flask API backend, PocketBase DB for collecting training data, and Next.js/React/TypeScript web interface. Repo under company assets. Corresponding Chrome Extension that automatically detects inputs and displays correction retrieved from koGEC API.',
    technologies: [
      'Flask',
      'Python',
      'Docker',
      'Typescript',
      'Next.js',
      'React',
      'PyTorch',
      'Pocketbase DB',
    ],
    image: '/images/goodhangul.png',
    url: 'https://goodhangul.sionic.ai/',
    github: '',
  },
];

export default ProjectData;
