import Text from '@/components/ui/base/Text';
import styles from '../styles.module.css';
import type { HandleParagraphProps } from './types';

export default function HandleParagraph({ children }: HandleParagraphProps) {
  return (
    <Text size="sm" lineHeight="lg" className={styles.p}>
      {children}
    </Text>
  );
}
