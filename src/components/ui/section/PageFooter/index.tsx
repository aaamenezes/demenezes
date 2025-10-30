import Logo from '@/components/ui/block/Logo';
import SocialMedia from '@/components/ui/container/SocialMedia';
import Wrapper from '@/components/ui/container/Wrapper';
import style from './styles.module.css';

export default function PageFooter() {
  return (
    <Wrapper className={style.footerWrapper} width="full" isFluid>
      <Wrapper className={style.footerInner} width="xxxl" spacing={0}>
        <SocialMedia />
        <Logo />
      </Wrapper>
    </Wrapper>
  );
}
