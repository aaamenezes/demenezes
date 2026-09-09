import Heading from '@/components/ui/base/Heading';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
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
      className={styles.section}
      style={{ width: `${width}%`, backgroundColor }}
    >
      <Heading className={styles.sectionHeading}>{heading}</Heading>
      <div
        className={clsx(
          styles.sectionContent,
          Boolean(direction) && styles.flex,
          direction === 'row' && styles.row,
          direction === 'column' && styles.column
        )}
      >
        {children}
      </div>
    </section>
  );
}
