import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Section({
  heading,
  children,
  direction = 'column',
  width = 100,
}: {
  heading: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
  width?: number;
}) {
  return (
    <section className={style.section} style={{ width: `${width}%` }}>
      <h2 className={style.sectionTitle}>{heading}</h2>
      <div className={clsx(style.sectionContent, style[direction])}>
        {children}
      </div>
    </section>
  );
}
