import { clsx } from '../../../../utils/clsx';
import Link from '../../base/Link';
import S from './styles.module.css';

export default function LogoWrapper({ isHeader }: { isHeader?: boolean }) {
  // quando reativer o preview, resolver isso
  const preview = false;

  const LogoTag = isHeader ? 'h1' : 'strong';
  const logoText = preview ? 'Preview' : 'deMenezes';

  return (
    <Link className={S.logoLink} href="/">
      <LogoTag className={clsx(S.logoText, 'logoText')}>{logoText}</LogoTag>
    </Link>
  );
}
