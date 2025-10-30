import Logo from '../../block/Logo';
import SocialMedia from '../../container/SocialMedia';
import Wrapper from '../../container/Wrapper';
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
