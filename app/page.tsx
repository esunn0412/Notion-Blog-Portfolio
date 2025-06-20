import { Metadata } from 'next';
import MouseAnimation from '@/components/animation/MouseAnimation';
import Divider from '@/components/layouts/Divider';
import Link from 'next/link';
import About from '@/components/features/home/About';
import Experience from '@/components/features/home/Experience';
import Projects from '@/components/features/home/Projects';
import Contact from '@/components/features/home/Contact';
import { User, Briefcase, Building, Coffee } from 'lucide-react';

const menuItems = [
  { icon: User, label: 'Profile', href: '#about' },
  // { icon: Code2, label: '기술 스택', href: '#skills' },
  { icon: Building, label: 'Experience', href: '#experience' },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Coffee, label: 'Contact', href: '#contact' },
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
      <div className="flex gap-8 py-6">
        {/* 사이드바 */}
        <aside className="hidden shrink-0 lg:block">
          <nav className="sticky top-[120px] space-y-1 border-l-1 border-l-[var(--highlight)]/50 p-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:text-[var(--highlight)]"
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

          <Contact />
        </main>
        <MouseAnimation />
      </div>
    </div>
  );
}
