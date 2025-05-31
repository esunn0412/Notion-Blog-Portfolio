import { User, Code2, Briefcase, Newspaper, Coffee, Github } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { icon: User, label: '프로필', href: '/about' },
  { icon: Code2, label: '기술 스택', href: '/about/skills' },
  { icon: Briefcase, label: '프로젝트', href: '/about/projects' },
  { icon: Newspaper, label: '블로그', href: '/about/blog' },
  { icon: Coffee, label: '컨택', href: '/about/contact' },
  { icon: Github, label: 'Github', href: 'https://github.com/esunn0412', external: true },
];
export default function About() {
  return (
    // min-h-screen assures minimum screen height,
    <div className="container py-8">about</div>
  );
}
