import Link from '@/components/ui/base/Link';
import style from './styles.module.css';

export default function Logo() {
  // quando reativar o preview, resolver isso
  const preview = false;

  return (
    <Link className={style.logoLink} href="/">
      {preview ? 'Preview' : 'deMenezes'}
    </Link>
  );
}
