import { PropsWithChildren } from 'react';
import Wrapper from '../../container/Wrapper';
import style from './styles.module.css';

export default function HighlightText({ children }: PropsWithChildren) {
  return (
    <Wrapper className={style.highlightText} width="full" isFluid>
      <Wrapper className={style.textWrapper} width="md" isFluid>
        <p>{children}</p>
      </Wrapper>
    </Wrapper>
  );
}
