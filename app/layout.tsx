import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Taeeun Blog',
    default: 'Taeeun Blog',
  },
  description:
    "Taeeun Kim's personal blog sharing insights on web development, AI, and technology.",
  keywords: [
    'Next.js',
    'frontend',
    'web development',
    'programming',
    'react',
    'typescript',
    'blog',
  ],
  authors: [{ name: 'Taeeun Kim', url: 'https://taeeunkim.vercel.app/' }],
  creator: 'Taeeun Kim',
  publisher: 'Taeeun Kim',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_SITE_URL}/`),
  alternates: {
    canonical: '/',
  },
  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
