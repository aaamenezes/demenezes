import type { PropsWithChildren } from 'react';
import fontStyle from '../../../../../styles/font-style.module.css';
import { clsx } from '../../../../utils/clsx';
import style from './styles.module.css';

export default function PostCategory({ children }: PropsWithChildren) {
  return (
    <div className={clsx(style.label, fontStyle.postCategoryText)}>
      {children}
    </div>
  );
}
