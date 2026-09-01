import Logo from '@/components/ui/block/Logo';
import SocialMedia from '@/components/ui/container/SocialMedia';
import Wrapper from '@/components/ui/container/Wrapper';
import styles from './styles.module.css';

export default function PageFooter() {
  return (
    <Wrapper className={styles.footerWrapper} width="full">
      <Wrapper className={styles.footerInner} width="xxxl">
        <SocialMedia inverseColor />
        <Logo isColorInverse />
      </Wrapper>
    </Wrapper>
  );
}
