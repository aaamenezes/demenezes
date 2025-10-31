import fontStyle from '@/../styles/font-style.module.css';
import { clsx } from '@/utils/clsx';
import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function PostCategory({ children }: { children: ReactNode }) {
  return (
    <div className={clsx(style.label, fontStyle.postCategoryText)}>
      {children}
    </div>
  );
}
