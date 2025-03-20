import '@nearai/ui/styles.css';

import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { Layout } from '@/components/Layout';
import { env } from '@/env';

export const metadata: Metadata = {
  title: {
    template: `%s | NEAR AI`,
    default: 'NEAR AI - Building the world&apos;s best truly open AI',
  },
  description:
    'Join the community building the user-owned future of AI. NEAR AI is focused on creating privacy-preserving, open-source AI that benefits users, not corporations.',
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
        <meta
          property="og:image"
          content={`${env.NEXT_PUBLIC_BASE_URL}/images/social.jpg`}
        />
        <meta
          name="twitter:image"
          content={`${env.NEXT_PUBLIC_BASE_URL}/images/social.jpg`}
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
