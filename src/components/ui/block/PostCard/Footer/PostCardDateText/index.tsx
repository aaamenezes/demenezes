import Text from '@/components/ui/base/Text';
import styles from './styles.module.css';
import type { PostCardDateTextProps } from './types';

export default function PostCardDateText({ children }: PostCardDateTextProps) {
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
