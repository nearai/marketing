'use client';

import { NearAiUiProvider, Toaster } from '@nearai/ui';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { type ComponentProps, type ReactNode } from 'react';

import { Footer } from './Footer';
import s from './Layout.module.scss';
import { Navigation } from './Navigation';

export const Layout = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();

  return (
    <NearAiUiProvider
      value={{
        forcedTheme: params.get('theme') as NonNullable<
          ComponentProps<typeof NearAiUiProvider>['value']
        >['forcedTheme'],
        Link,
        useRouter,
      }}
    >
      <Toaster />

      <div className={s.wrapper}>
        <Navigation />
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </NearAiUiProvider>
  );
};
