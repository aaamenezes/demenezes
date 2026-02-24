import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Section({
  heading,
  direction = 'row',
  children,
}: {
  heading: string;
  direction: 'row' | 'column';
  children: React.ReactNode;
  styleFromProps?: React.CSSProperties;
}) {
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>{heading}</h2>
      <div className={clsx(style.sectionContent, style[direction])}>
        {children}
      </div>
    </section>
  );
}
