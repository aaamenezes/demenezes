import LinkButton from '../../atoms/LinkButton';
import S from './styles.module.css';

export default function LogoWrapper() {
  const preview = false;
  // mudar strong para h1
  return (
    <LinkButton className={S.logoLink} href="/">
      <strong className={S.logo}>{preview ? 'Preview' : 'deMenezes'}</strong>
    </LinkButton>
  );
}
