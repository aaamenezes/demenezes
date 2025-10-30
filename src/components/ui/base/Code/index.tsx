import fontStyle from '@/../styles/font-style.module.css';
import { clsx } from '@/utils/clsx';
import type { PropsWithChildren } from 'react';

export default function Code({
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
