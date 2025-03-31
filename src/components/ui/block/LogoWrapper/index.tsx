import LinkButton from '../../base/LinkButton';
import S from './styles.module.css';

export default function LogoWrapper({ isHeader }: { isHeader?: boolean }) {
  // quando reativer o preview, resolver isso
  const preview = false;

  return (
    <LinkButton className={S.logoLink} href="/">
      {isHeader ? (
        <h1 className={S.logo}>{preview ? 'Preview' : 'deMenezes'}</h1>
      ) : (
        <strong className={S.logo}>{preview ? 'Preview' : 'deMenezes'}</strong>
      )}
    </LinkButton>
  );
}
