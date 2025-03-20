'use client';

import { NearAiUiProvider, Toaster } from '@nearai/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

import { Footer } from './Footer';
import s from './Layout.module.scss';
import { Navigation } from './Navigation';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <NearAiUiProvider
      value={{
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
