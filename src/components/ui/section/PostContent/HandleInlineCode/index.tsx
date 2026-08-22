import styles from '../styles.module.css';
import type { HandleInlineCodeProps } from './types';

export default function HandleInlineCode({
  children,
  key,
}: HandleInlineCodeProps) {
  return (
    <code className={styles.inlineCode} key={key}>
      {children}
    </code>
  );
}
