import type { ReactNode } from 'react';

import s from './PostContent.module.scss';

type Props = {
  children: ReactNode;
};

export const PostContent = ({ children }: Props) => {
  return <div className={s.content}>{children}</div>;
};
