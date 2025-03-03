import LogoWrapper from '../../block/LogoWrapper';
import SocialMedia from '../../container/SocialMedia';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function PageFooter() {
  return (
    <Wrapper className={S.footerWrapper} width="full" isFluid>
      <Wrapper className={S.footerInner} width="xxxl" spacing={0}>
        <SocialMedia />
        <LogoWrapper />
      </Wrapper>
    </Wrapper>
  );
}
