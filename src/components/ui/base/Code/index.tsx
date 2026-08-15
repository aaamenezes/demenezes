import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { CodeProps } from './types';

export default function Code({
  children,
  language,
  className = '',
}: CodeProps) {
  return (
    <pre className={clsx(`language-${language}`, styles.pre, className)}>
      <code className={clsx(`language-${language}`, styles.code)}>
        {children}
      </code>
    </pre>
  );
}
