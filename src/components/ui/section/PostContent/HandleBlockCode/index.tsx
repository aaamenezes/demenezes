import BlockCode from '@/components/ui/base/BlockCode';
import styles from '../styles.module.css';
import type { HandleBlockCodeProps } from './types';

export default function HandleBlockCode({ node }: HandleBlockCodeProps) {
  const language = ['html', 'css', 'javascript', 'js', 'typescript'].includes(
    node.language ?? ''
  )
    ? (node.language as 'html' | 'css' | 'javascript' | 'js' | 'typescript')
    : 'typescript';

  /**
   * Isso foi necessário porque o texto do código enviado pelo DatoCMS
   * continha caracteres de espaço não separáveis (non-breaking space) que
   * estavam causando problemas na renderização do código. O replace garante
   * que os espaços sejam tratados corretamente.
   */
  const code = node.code.replace(/\u00A0/g, ' ');

  return (
    <BlockCode key={node.code} language={language} className={styles.blockCode}>
      {code}
    </BlockCode>
  );
}
