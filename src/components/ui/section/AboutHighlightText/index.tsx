import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import styles from './styles.module.css';
import type { AboutHighlightTextProps } from './types';

export default function HighlightText({ children }: AboutHighlightTextProps) {
  return (
    <Wrapper className={styles.highlightText} width="full">
      <Wrapper className={styles.textWrapper} width="md">
        <Text>{children}</Text>
      </Wrapper>
    </Wrapper>
  );
}
