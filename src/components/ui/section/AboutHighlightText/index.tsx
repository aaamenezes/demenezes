import Wrapper from '@/components/ui/container/Wrapper';
import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function HighlightText({ children }: { children: ReactNode }) {
  return (
    <Wrapper className={style.highlightText} width="full" isFluid>
      <Wrapper className={style.textWrapper} width="md" isFluid>
        <p>{children}</p>
      </Wrapper>
    </Wrapper>
  );
}
