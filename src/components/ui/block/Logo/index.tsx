import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Logo({
  isColorInverse = false,
}: {
  isColorInverse?: boolean;
}) {
  // quando reativar o preview, resolver isso
  const preview = false;

  return (
    <Link
      className={clsx(style.logoLink, { [style.colorInverse]: isColorInverse })}
      href="/"
    >
      {preview ? 'Preview' : 'deMenezes'}
    </Link>
  );
}
