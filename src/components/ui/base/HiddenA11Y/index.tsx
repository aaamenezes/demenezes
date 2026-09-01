import Text from '@/components/ui/base/Text';
import styles from './styles.module.css';
import type { HiddenA11YProps } from './types';

export default function HiddenA11Y({ children }: HiddenA11YProps) {
  return (
    <Text as="span" className={styles.hiddenA11Y}>
      {children}
    </Text>
  );
}
