import { PropsWithChildren } from 'react';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function HighlightText({ children }: PropsWithChildren) {
  return (
    <Wrapper className={S.highlightText} width="full" isFluid>
      <Wrapper className={S.textWrapper} width="md" isFluid>
        <p>{children}</p>
      </Wrapper>
    </Wrapper>
  );
}
