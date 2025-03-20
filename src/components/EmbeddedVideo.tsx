import type { ReactNode } from 'react';

import s from './EmbeddedVideo.module.scss';

type Props = {
  children: ReactNode;
};

export const EmbeddedVideo = ({ children }: Props) => {
  return <div className={s.video}>{children}</div>;
};
