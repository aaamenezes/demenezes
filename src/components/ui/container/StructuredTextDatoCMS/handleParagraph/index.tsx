import { PropsWithChildren } from 'react';
import fontStyle from '../../../../../../styles/font-style.module.css';

export function handleParagraph({ children }: PropsWithChildren) {
  return <p className={fontStyle.postBody}>{children}</p>;
}
