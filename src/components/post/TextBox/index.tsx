import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import style from './styles.module.css';
import type { TextBoxProps } from './types';

export default function TextBox({ content }: TextBoxProps) {
  return (
    <div className={style.textBox}>
      <StructuredTextDatoCMS data={content} />
    </div>
  );
}
