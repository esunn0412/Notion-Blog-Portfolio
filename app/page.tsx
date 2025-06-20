import { Metadata } from 'next';
import MouseAnimation from '@/components/animation/MouseAnimation';
import Divider from '@/components/layouts/Divider';
import Link from 'next/link';
import About from '@/components/features/home/About';
import Experience from '@/components/features/home/Experience';
import Projects from '@/components/features/home/Projects';
import { User, Briefcase, Building, Coffee } from 'lucide-react';

const menuItems = [
  { icon: User, label: '프로필', href: '#about' },
  // { icon: Code2, label: '기술 스택', href: '#skills' },
  { icon: Building, label: '경험', href: '#experience' },
  { icon: Briefcase, label: '프로젝트', href: '#projects' },
  { icon: Coffee, label: '컨택', href: '#contact' },
];

export const metadata: Metadata = {
  title: 'Home',
  description: "Taeeun Kim's personal website",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="container">
      <div className="flex gap-8 py-8">
        {/* 사이드바 */}
        <aside className="shrink-0">
          <nav className="sticky top-[var(--sticky-top)] space-y-1 rounded-lg p-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
              >
                <item.icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="container flex-1 scroll-smooth tracking-wide">
          <About />

          <Divider />

          <Experience />

          <Divider />

          <Projects />

          <Divider />
        </main>
        <MouseAnimation />
      </div>
    </div>
  );
}
