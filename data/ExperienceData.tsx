import type { ExperienceType } from '@/types';

const ExperienceData: ExperienceType[] = [
  {
    title: 'Undergraduate Researcher',
    company: 'MAIX Lab',
    period: 'Jan, 2025 - May, 2025',
    description: [
      'Advanced multimodal ECG representation learning by integrating concept-based dictionaries into clinical report text embeddings, improving signal–report cross modal alignment accuracy by 9% over MERL approach.',
      'Applied FAISS for scalable disease concept retrieval, reducing retrieval latency by 65% over lexical methods.',
    ],
    technologies: [
      'PyTorch',
      'NumPy',
      'Deep learning',
      'Pretraining',
      'Contrastive learning',
      'Multimodality',
    ],
    url: 'https://www.maixlab.com/',
  },
  {
    title: 'Research Intern',
    company: 'Lablup',
    period: 'Jan, 2025 - May, 2025',
    description: [
      'Conducted GPU benchmark analysis within the Backend.AI’s VM ecosystem on vLLM, eliminating network latency variables, verifying performance consistency, and documenting the analysis in the internal Knowledge Base. Implemented per-request token throughput variance metrics in the internal benchmarking script.',
      'Created an auto-benchmarking pipeline for the research team via FastTrack, a batch job workflow management service.',
    ],
    technologies: ['Backend.AI', 'vLLM', 'FastTrack', 'Python'],
    url: 'https://www.lablup.com/',
  },
  {
    title: 'Software Development Intern',
    company: 'Lablup',
    period: 'Jan, 2025 - May, 2025',
    description: [
      'Contributed to Backend.AI FastTrack, a batch job workflow management service, by implementing multi-selection and bulk deletion for pipeline jobs.Improved UI/UX of FastTrack with features such as a ReactFlow quick delete for node edges, along with dockerized local workflows and collaborative code reviews.',
      'Developed and deployed PyCon 2025 booth event page, supporting 228 participants across 1,193 submissions.',
    ],
    technologies: [
      'Next.js',
      'React',
      'FastTrack',
      'GraphQL',
      'TailwindCSS',
      'Shadcn.ui',
      'Google Apps Script',
      'AWS Amplify',
    ],
    url: 'https://www.lablup.com/',
    links: [{ name: 'paper', url: 'http://www.hclt.kr/symp/?lnb=conference' }],
  },
  {
    title: 'Django Backend Engineer Intern',
    company: 'Park My Ride',
    period: 'Jan, 2025 - May, 2025',
    description: [
      'Designed relational models and built role-based JWT email auth and API endpoints for a Django valet-driving platform.',
      'Implemented a CI/CD pipeline with GitHub Actions and Git Hooks, automating backend deployments to Dokku with environment-specific configs and database migration across dev and production, reducing deployment errors by 80%.',
    ],
    technologies: ['Django', 'Python', 'AWS Lightsail', 'PostgresSQL', 'Git'],
    url: 'https://parkmyride.io/',
  },
  {
    title: 'Student Research Assistant',
    company: 'NLP Suite',
    period: 'Aug, 2024 - Jan, 2025',
    description: [
      'Enhanced the NLP-Suite tool by integrating Stanford CoreNLP, Stanza, WordNet, and MALLET within Docker. Optimized file handling and operations, cutting database analyzer processing time by 150% with efficient algorithms.',
    ],
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Docker', 'Git'],
    url: 'https://github.com/NLP-Suite',
  },
  {
    title: 'ML Research Intern',
    company: 'Sionic AI',
    period: 'Aug, 2024 - Jan, 2025',
    description: [
      "Researched hard negative mining (HNM) strategies to improve contrastive learning for the company's RAG pipeline. Boosted BGE-M3 fine-tuning by 4.87 points on Korean MTEB retrieval task with a positive-aware HNM strategy.",
    ],
    technologies: ['Python', 'PyTorch', 'FlagEmbedding', 'FAISS', 'Pandas', 'Git'],
    url: 'https://www.sionic.ai/',
    links: [{ name: 'Report', url: '/hnm.pdf' }],
  },
  {
    title: 'ML Research Summer Intern',
    company: 'Sionic AI',
    period: 'May, 2024 - Aug, 2024',
    description: [
      "Fine-tuned Meta's pretrained NLLB models, achieving an 85.73 BLEU score in Korean grammar error correction tasks, outperforming SOTA models GPT-4 (75.03) and HCX-3 (71.24); presented findings at PACLIC 38.",
    ],
    technologies: ['PyTorch', 'Python', 'Pandas', 'Docker', 'Git'],
    url: 'https://www.sionic.ai/',
    links: [
      { name: 'Paper', url: 'https://aclanthology.org/2024.paclic-1.16/' },
      {
        name: 'Open-Sourced KoGEC Model',
        url: 'https://huggingface.co/sionic-ai/nllb-200-ko-gec-3.3B',
      },
    ],
  },
];

export default ExperienceData;
