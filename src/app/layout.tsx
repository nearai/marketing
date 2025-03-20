import '@nearai/ui/styles.css';

import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { Layout } from '@/components/Layout';
import { env } from '@/env';

export const metadata: Metadata = {
  title: {
    template: `%s | NEAR AI`,
    default: `NEAR AI - Building the world's best truly open AI`,
  },
  description:
    'Join the community building the user-owned future of AI. NEAR AI is focused on creating privacy-preserving, open-source AI that benefits users, not corporations.',
  openGraph: {
    images: [{ url: `${env.NEXT_PUBLIC_BASE_URL}/images/social.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: `${env.NEXT_PUBLIC_BASE_URL}/images/social.jpg` }],
  },
};

/*
  The suppressHydrationWarning on <html> is required by <ThemeProvider>:
  https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
*/

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
