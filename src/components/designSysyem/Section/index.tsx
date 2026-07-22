import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Section({
  heading,
  children,
  direction,
  width = 100,
  backgroundColor,
}: {
  heading: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
  width?: number;
  backgroundColor?: string;
}) {
  return (
    <section
      className={style.section}
      style={{ width: `${width}%`, backgroundColor }}
    >
      <h2 className={style.sectionTitle}>{heading}</h2>
      <div
        className={clsx(style.sectionContent, {
          [style.flex]: Boolean(direction),
          [style.row]: direction === 'row',
          [style.column]: direction === 'column',
        })}
      >
        {children}
      </div>
    </section>
  );
}
