import { useCallback, useEffect, useState } from 'react';
import { clsx } from '../../../../utils/clsx';
import { getPageInfos } from '../../../../utils/getPageInfos';
import LogoWrapper from '../../block/LogoWrapper';
import ToggleModalButton from '../../block/ToggleModalButton';
import Navigation from '../../container/Navigation';
import Wrapper from '../../container/Wrapper';
import style from './styles.module.css';

export default function PageHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(true);
  const { currentPage } = getPageInfos();

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(currentState => !currentState);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpenHeader(window.scrollY < window.innerHeight);
    });
  }, []);

  return (
    <Wrapper
      width="full"
      className={clsx(
        style.headerWrapper,
        { [style.isOpenHeader]: isOpenHeader },
        { [style.isHome]: currentPage === 'home' }
      )}
    >
      <Wrapper className={style.headerInner} width="xxxl" spacing={0} isFluid>
        <LogoWrapper isHeader />
        <ToggleModalButton
          className={style.toggleMenuButton}
          onClick={toggleMenu}
          icon="bars"
        />
        <Navigation isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
        {/* <SearchWrapper /> */}
      </Wrapper>
    </Wrapper>
  );
}
