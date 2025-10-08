import { clsx } from '../../../../utils/clsx';
import Link from '../../base/Link';
import style from './styles.module.css';

export default function LogoWrapper({ isHeader }: { isHeader?: boolean }) {
  // quando reativer o preview, resolver isso
  const preview = false;

  const LogoTag = isHeader ? 'h1' : 'strong';
  const logoText = preview ? 'Preview' : 'deMenezes';

  return (
    <Link className={style.logoLink} href="/">
      <LogoTag className={clsx(style.logoText, 'logoText')}>{logoText}</LogoTag>
    </Link>
  );
}
