import type { Metadata } from 'next';
import { Inria_Sans } from 'next/font/google';

import './globals.css';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Providers from './providers';

const inriaSans = Inria_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-inria-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Taeeun Website',
    default: 'Taeeun Website',
  },
  description: "Taeeun Kim's personal portfolio website. Click to learn about me!",
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
  openGraph: {
    title: "Taeeun Kim's Website",
    description: "Taeeun Kim's personal portfolio website. Click to learn about me!",
    url: '/',
    type: 'website',
    siteName: 'Taeeun Kim',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: "Taeeun Kim's Website",
      },
    ],
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
      <body className={`${inriaSans.variable} antialiased`}>
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
