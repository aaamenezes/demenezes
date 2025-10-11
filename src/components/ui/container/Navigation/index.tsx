import { useRouter } from 'next/router';
import settings from '../../../../../settings.json';
import { clsx } from '../../../../utils/clsx';
import { getPageInfos } from '../../../../utils/getPageInfos';
import Link from '../../base/Link';
import ToggleModalButton from '../../block/ToggleModalButton';
import style from './styles.module.css';
import fontStyle from '../../../../../styles/font-style.module.css';

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
        className={clsx(style.navItem, isCurrentPage && style.isCurrentPage)}
        key={menu.title}
      >
        <Link
          className={clsx(
            style.navLink,
            fontStyle.menuLink,
            isCurrentPage && style.isCurrentPage
          )}
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
        className={clsx(style.overlay, isOpenMenu && style.isOpenMenu)}
        onClick={toggleMenu}
      />
      <nav className={clsx(style.navWrapper, isOpenMenu && style.isOpenMenu)}>
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
