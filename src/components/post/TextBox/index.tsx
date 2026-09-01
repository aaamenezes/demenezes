import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import styles from './styles.module.css';
import type { TextBoxProps } from './types';

export default function TextBox({ content }: TextBoxProps) {
  return (
    <div className={styles.textBox}>
      <StructuredTextDatoCMS data={content} />
    </div>
  );
}
