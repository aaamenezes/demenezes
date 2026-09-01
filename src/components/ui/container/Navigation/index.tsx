import Button from '@/components/ui/base/Button';
import Link from '@/components/ui/base/Link';
import settings from '@/data/settings.json';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import type { NavigationProps } from './types';

export default function Navigation({
  isOpenMenu,
  toggleMenu,
}: NavigationProps) {
  const router = useRouter();
  const { currentPage } = getPageInfos();

  const navigationElements = settings.navigationMenu.map(menu => {
    const isCurrentPage =
      router.pathname === menu.url ||
      (currentPage === 'listing' && menu.label === 'Home');

    return (
      <li
        className={clsx(
          styles.navItem,
          isCurrentPage && styles.isCurrentPage,
          currentPage !== 'post' && styles.isDesktopColorInverse
        )}
        key={menu.label}
      >
        <Link
          className={clsx(styles.navLink, isCurrentPage && styles.isCurrentPage)}
          href={menu.url}
        >
          {menu.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <button
        className={clsx(styles.overlay, isOpenMenu && styles.isOpenMenu)}
        onClick={toggleMenu}
        aria-label="Fechar menu de navegação"
        type="button"
      />
      <nav className={clsx(styles.navWrapper, isOpenMenu && styles.isOpenMenu)}>
        <ul className={styles.navList}>{navigationElements}</ul>
        <Button
          className={styles.closeMenuMobileButton}
          onClick={toggleMenu}
          aria-label="Fechar menu de navegação"
        >
          <X />
        </Button>
      </nav>
    </>
  );
}
