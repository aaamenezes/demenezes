import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import style from './styles.module.css';
import type { AboutHighlightTextProps } from './types';

export default function HighlightText({ children }: AboutHighlightTextProps) {
  return (
    <Wrapper className={style.highlightText} width="full">
      <Wrapper className={style.textWrapper} width="md">
        <Text>{children}</Text>
      </Wrapper>
    </Wrapper>
  );
}
