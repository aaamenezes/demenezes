import { PropsWithChildren } from 'react';
import fontStyle from '@/../styles/fontStyle.module.css';

export default function HandleParagraph({ children }: PropsWithChildren) {
  return <p className={fontStyle.postBody}>{children}</p>;
}
