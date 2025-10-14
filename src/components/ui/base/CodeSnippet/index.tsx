import { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import fontStyle from '../../../../../styles/font-style.module.css';

export default function CodeBlock({
  children,
  language,
}: PropsWithChildren<{ language: string }>) {
  return (
    <pre className={`language-${language}`}>
      <code className={clsx(`language-${language}`, fontStyle.postCode)}>
        {children}
      </code>
    </pre>
  );
}
