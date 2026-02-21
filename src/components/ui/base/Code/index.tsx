import styles from './styles.module.css';
import { clsx } from '@/utils/clsx';
import type { ReactNode } from 'react';

export default function Code({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) {
  return (
    <pre className={`language-${language}`}>
      <code className={clsx(`language-${language}`, styles.postCode)}>
        {children}
      </code>
    </pre>
  );
}
