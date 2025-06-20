import Link from 'next/link';
// import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center px-4">
        <div className="grid w-full grid-cols-3 items-center caret-transparent">
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="group flex cursor-pointer font-bold transition-transform duration-200 ease-out hover:scale-105"
            >
              {'Taeeun Kim'.split('').map((char, i) => (
                <span
                  key={i}
                  className="ease out inline-block transition-colors duration-200 group-hover:text-[var(--highlight)]"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </Link>
          </div>
          <nav className="flex items-center justify-center gap-4">
            <Link href="/" className="hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/blog" className="hover:text-primary font-medium">
              Blog
            </Link>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            {/* <Button asChild size="sm" className="gap-2">
              <Link href="/blog/write">Write</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
