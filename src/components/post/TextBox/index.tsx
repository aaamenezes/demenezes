import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import type { DatoBlock } from '@/types';
import type { StructuredTextGraphQlResponse } from 'react-datocms';
import style from './styles.module.css';

export default function TextBox({
  content,
}: {
  content: StructuredTextGraphQlResponse<DatoBlock>;
}) {
  return (
    <div className={style.textBox}>
      <StructuredTextDatoCMS data={content} />
    </div>
  );
}
