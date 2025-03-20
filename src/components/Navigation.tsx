'use client';

import { BreakpointDisplay, SvgIcon } from '@nearai/ui';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NearAiLogo from '@/svgs/near-ai-logo.svg';

import s from './Navigation.module.scss';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className={s.navigation}>
      <Link className={s.logo} href="/">
        <NearAiLogo />
      </Link>

      <div className={s.menu}>
        <BreakpointDisplay show="larger-than-phone">
          <Link
            className={s.menuItem}
            href="https://app.near.ai"
            target="_blank"
          >
            Developer Hub
            <SvgIcon icon={<ArrowUpRight />} size="xs" />
          </Link>
          <Link
            className={s.menuItem}
            href="https://chat.near.ai"
            target="_blank"
          >
            Assistant
            <SvgIcon icon={<ArrowUpRight />} size="xs" />
          </Link>
        </BreakpointDisplay>

        <Link
          className={s.menuItem}
          href="/rfps"
          data-active={pathname.startsWith('/rfps')}
        >
          Proposals
        </Link>
        <Link
          className={s.menuItem}
          href="/blog"
          data-active={pathname.startsWith('/blog')}
        >
          Blog
        </Link>
      </div>
    </header>
  );
};
