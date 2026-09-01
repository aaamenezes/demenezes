import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { LogoProps } from './types';

export default function Logo({ isColorInverse }: LogoProps) {
  // quando reativar o preview, resolver isso
  const preview = false;

  return (
    <Link
      className={clsx(styles.logoLink, isColorInverse && styles.colorInverse)}
      href="/"
    >
      {preview ? 'Preview' : 'deMenezes'}
    </Link>
  );
}
