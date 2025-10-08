import StructuredTextDatoCMS from '../../ui/container/StructuredTextDatoCMS';
import style from './styles.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextBox({ content }: { content: any }) {
  return (
    <div className={style.textBox}>
      <StructuredTextDatoCMS data={content} />
    </div>
  );
}
