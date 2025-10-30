import fontStyle from '@/../styles/fontStyle.module.css';
import Link from '@/components/ui/base/Link';
import ToggleModalButton from '@/components/ui/block/ToggleModalButton';
import settings from '@/data/settings.json';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
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
        <ToggleModalButton
          className={style.closeMenuMobileButton}
          onClick={toggleMenu}
          icon="close"
          color="neutral_800"
        />
      </nav>
    </>
  );
}
