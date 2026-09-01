import Heading from '@/components/ui/base/Heading';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';
import type { SectionProps } from './types';

export default function Section({
  heading,
  children,
  direction,
  backgroundColor,
  width = 100,
}: SectionProps) {
  return (
    <section
      className={style.section}
      style={{ width: `${width}%`, backgroundColor }}
    >
      <Heading className={style.sectionHeading}>{heading}</Heading>
      <div
        className={clsx(
          style.sectionContent,
          Boolean(direction) && style.flex,
          direction === 'row' && style.row,
          direction === 'column' && style.column
        )}
      >
        {children}
      </div>
    </section>
  );
}
