import Button from '@/components/ui/base/Button';
import Logo from '@/components/ui/block/Logo';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import { Menu } from 'lucide-react';
import { useCallback, useState } from 'react';
import Navigation from '../../container/Navigation';
import style from './styles.module.css';

export default function PageHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { currentPage } = getPageInfos();

  const openMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const isHomePage = currentPage === 'home';
  const isPostPage = currentPage === 'post';

  return (
    <Wrapper
      width="xxxl"
      as="header"
      className={clsx(style.headerWrapper, {
        [style.withBackgroundColor]: !isHomePage && !isPostPage,
      })}
    >
      <h1>
        <Logo isColorInverse={!isPostPage} />
      </h1>
      <Button
        onClick={openMenu}
        className={style.openMenuButton}
        aria-label="Abrir menu de navegação"
      >
        <Menu />
      </Button>
      <Navigation isOpenMenu={isOpenMenu} toggleMenu={closeMenu} />
      {/* <SearchWrapper /> */}
    </Wrapper>
  );
}
