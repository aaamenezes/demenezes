import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';
import type { LogoProps } from './types';

export default function Logo({ isColorInverse = false }: LogoProps) {
  // quando reativar o preview, resolver isso
  const preview = false;

  return (
    <Link
      className={clsx(style.logoLink, isColorInverse && style.colorInverse)}
      href="/"
    >
      {preview ? 'Preview' : 'deMenezes'}
    </Link>
  );
}
