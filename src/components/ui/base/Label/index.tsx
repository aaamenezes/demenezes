import type { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import style from './styles.module.css';
import fontStyle from '../../../../../styles/font-style.module.css';

export default function Label({ children }: PropsWithChildren) {
  return (
    <div className={clsx(style.label, fontStyle.postCategoryText)}>
      {children}
    </div>
  );
}
