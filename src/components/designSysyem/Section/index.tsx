import { clsx } from '@/utils/clsx';
import Heading from '@/components/ui/base/Heading';
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
      <Heading className={style.sectionTitle}>{heading}</Heading>
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
