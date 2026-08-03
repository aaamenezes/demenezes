import Button from '@/components/ui/base/Button';
import Logo from '@/components/ui/block/Logo';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import { Menu } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import Navigation from '../../container/Navigation';
import style from './styles.module.css';

export default function PageHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(true);
  const { currentPage } = getPageInfos();

  const openMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsMenuMobileOpen(window.scrollY < window.innerHeight);
    });
  }, []);

  return (
    <Wrapper
      width="full"
      className={clsx(
        style.headerWrapper,
        { [style.isMenuMobileOpen]: isMenuMobileOpen },
        { [style.isHome]: currentPage === 'home' }
      )}
    >
      <Wrapper className={style.headerInner} width="xxxl">
        <h1>
          <Logo />
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
    </Wrapper>
  );
}
