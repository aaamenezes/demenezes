import StructuredTextDatoCMS from '../../ui/container/StructuredTextDatoCMS';
import S from './styles.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextBox({ content }: { content: any }) {
  return (
    <div className={S.textBox}>
      <StructuredTextDatoCMS data={content} />
    </div>
  );
}
