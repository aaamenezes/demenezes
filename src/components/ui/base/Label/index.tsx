import type { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import S from './styles.module.css';

export default function Label({ children }: PropsWithChildren) {
  return <div className={clsx(S.label, 'postCategoryText')}>{children}</div>;
}
