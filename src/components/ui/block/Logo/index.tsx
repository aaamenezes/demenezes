import { clsx } from '../../../../utils/clsx';
import Link from '../../base/Link';
import style from './styles.module.css';
import fontStyle from '../../../../../styles/font-style.module.css';

export default function Logo() {
  // quando reativar o preview, resolver isso
  const preview = false;

  return (
    <strong className={clsx(style.logoText, fontStyle.logoText)}>
      <Link className={style.logoLink} href="/">
        {preview ? 'Preview' : 'deMenezes'}
      </Link>
    </strong>
  );
}
