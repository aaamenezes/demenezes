import { useRouter } from 'next/router';
import settings from '../../../../../settings.json';
import { clsx } from '../../../../utils/clsx';
import { getPageInfos } from '../../../../utils/getPageInfos';
import Link from '../../base/Link';
import ToggleModalButton from '../../block/ToggleModalButton';
import S from './styles.module.css';

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
        className={clsx(S.navItem, isCurrentPage && S.isCurrentPage)}
        key={menu.title}
      >
        <Link
          className={clsx(
            S.navLink,
            'menuLink',
            isCurrentPage && S.isCurrentPage
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
        className={clsx(S.overlay, isOpenMenu && S.isOpenMenu)}
        onClick={toggleMenu}
      />
      <nav className={clsx(S.navWrapper, isOpenMenu && S.isOpenMenu)}>
        <ul className={S.navList}>{navigationElements}</ul>
        <ToggleModalButton
          className={S.closeMenuMobileButton}
          onClick={toggleMenu}
          icon="close"
          color="neutral_800"
        />
      </nav>
    </>
  );
}
