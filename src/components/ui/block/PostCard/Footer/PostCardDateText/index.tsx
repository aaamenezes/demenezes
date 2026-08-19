import Text from '@/components/ui/base/Text';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function PostCardDateText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Text
      family="heading"
      size="xxs"
      weight={500}
      letterSpacing="md"
      className={styles.postCardDate}
    >
      {children}
    </Text>
  );
}
