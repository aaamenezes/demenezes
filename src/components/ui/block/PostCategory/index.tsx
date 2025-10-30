import type { PropsWithChildren } from 'react';
import style from './styles.module.css';
import { clsx } from '@/utils/clsx';
import fontStyle from '@/../styles/fontStyles.module.css';

export default function PostCategory({ children }: PropsWithChildren) {
  return (
    <div className={clsx(style.label, fontStyle.postCategoryText)}>
      {children}
    </div>
  );
}
