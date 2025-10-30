import fontStyle from '@/../styles/font-style.module.css';
import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

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
