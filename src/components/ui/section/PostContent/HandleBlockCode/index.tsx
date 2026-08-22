import BlockCode from '@/components/ui/base/BlockCode';
import styles from '../styles.module.css';
import type { HandleBlockCodeProps } from './types';

export default function HandleBlockCode({ node }: HandleBlockCodeProps) {
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
