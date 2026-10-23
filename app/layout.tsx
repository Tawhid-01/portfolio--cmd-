import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    icons: {
    icon: '/favicon.svg',
  },
  title: 'MD Tawhid — Portfolio',
  description: 'The portfolio of MD Tawhid, an aspiring full-stack developer exploring the craft of building useful software.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'MD Tawhid — Portfolio', description: 'Confusion, then clarity. A developer in progress.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
