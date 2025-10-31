import fontStyle from '@/../styles/font-style.module.css';
import Button from '@/components/ui/base/Button';
import Link from '@/components/ui/base/Link';
import settings from '@/data/settings.json';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import style from './styles.module.css';

export default function Navigation({
  isOpenMenu,
  toggleMenu,
}: {
  isOpenMenu: boolean;
  toggleMenu: () => void;
}) {
  const router = useRouter();
  const { currentPage } = getPageInfos();

  const navigationElements = settings.navigationMenu.map(menu => {
    const isCurrentPage =
      router.pathname === menu.url ||
      (currentPage === 'listing' && menu.title === 'Home');

    return (
      <li
        className={clsx(style.navItem, {
          [style.isCurrentPage]: isCurrentPage,
        })}
        key={menu.title}
      >
        <Link
          className={clsx(style.navLink, fontStyle.menuLink, {
            [style.isCurrentPage]: isCurrentPage,
          })}
          href={menu.url}
        >
          {menu.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div
        className={clsx(style.overlay, { [style.isOpenMenu]: isOpenMenu })}
        onClick={toggleMenu}
      />
      <nav
        className={clsx(style.navWrapper, { [style.isOpenMenu]: isOpenMenu })}
      >
        <ul className={style.navList}>{navigationElements}</ul>
        <Button onClick={toggleMenu} aria-label="Fechar menu de navegação">
          <X />
        </Button>
      </nav>
    </>
  );
}
