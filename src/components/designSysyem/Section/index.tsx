import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Section({
  heading,
  direction = 'row',
  children,
  isFull = false,
}: {
  heading: string;
  direction: 'row' | 'column';
  children: React.ReactNode;
  isFull?: boolean;
}) {
  return (
    <section
      className={clsx(style.section, {
        [style.isFull]: isFull,
      })}
    >
      <h2 className={style.sectionTitle}>{heading}</h2>
      <div className={clsx(style.sectionContent, style[direction])}>
        {children}
      </div>
    </section>
  );
}
