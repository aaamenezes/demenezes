import Link from '../../base/Link';
import S from './styles.module.css';

export default function LogoWrapper({ isHeader }: { isHeader?: boolean }) {
  // quando reativer o preview, resolver isso
  const preview = false;

  return (
    <Link className={S.logoLink} href="/">
      {isHeader ? (
        <h1 className={S.logo}>{preview ? 'Preview' : 'deMenezes'}</h1>
      ) : (
        <strong className={S.logo}>{preview ? 'Preview' : 'deMenezes'}</strong>
      )}
    </Link>
  );
}
