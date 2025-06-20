import { Metadata } from 'next';
import MouseAnimation from '@/components/animation/MouseAnimation';

export const metadata: Metadata = {
  title: 'Home',
  description: "Taeeun Kim's personal website",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <main className="max-w-screen-lg mx-auto px-4 mb-24 tracking-wide scroll-smooth">
        <About />

        <Divider />

        <Experience />

        <Divider />

        <Projects />

        <Divider />
        <div className="text-center text-[var(--description)] mt-4">
          made with tomatoes by Taeeun Kim © 2025
        </div>
      </main> */}
      <MouseAnimation />
    </div>
  );
}
