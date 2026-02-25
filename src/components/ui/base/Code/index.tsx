import styles from './styles.module.css';
import { clsx } from '@/utils/clsx';
import type { CodeProps } from './types';

export default function Code({ children, language }: CodeProps) {
  return (
    <pre className={`language-${language}`}>
      <code className={clsx(`language-${language}`, styles.postCode)}>
        {children}
      </code>
    </pre>
  );
}
