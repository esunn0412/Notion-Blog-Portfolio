import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-14 items-center px-4">
        <Link href="/" className="front-semibold text-xl">
          <span className="font-bold">Taeeun&apos;s Blog</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/" className="hover:text-primary font-medium">
            Home
          </Link>
          <Link href="/blog" className="hover:text-primary font-medium">
            Blog
          </Link>
          <Link href="/about" className="hover:text-primary font-medium">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
