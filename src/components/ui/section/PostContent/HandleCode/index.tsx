import BlockCode from '@/components/ui/base/BlockCode';
import type { Code as CodeNode } from 'datocms-structured-text-utils';
import styles from '../styles.module.css';

export default function HandleCode({ node }: { node: CodeNode }) {
  const language = ['html', 'css', 'javascript', 'js', 'typescript'].includes(
    node.language ?? ''
  )
    ? (node.language as 'html' | 'css' | 'javascript' | 'js' | 'typescript')
    : 'typescript';

  return (
    <BlockCode key={node.code} language={language} className={styles.blockCode}>
      {node.code}
    </BlockCode>
  );
}
