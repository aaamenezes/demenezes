import fontStyle from '@/../styles/font-style.module.css';
import type { ReactNode } from 'react';

export default function HandleParagraph({ children }: { children: ReactNode }) {
  return <p className={fontStyle.postBody}>{children}</p>;
}
