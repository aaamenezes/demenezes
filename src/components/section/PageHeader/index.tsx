import { useEffect, useState } from 'react';
import { clsx } from '../../../utils/clsx';
import { getPageInfos } from '../../../utils/getPageInfos';
import LogoWrapper from '../../block/LogoWrapper';
import ToggleModalButton from '../../block/ToggleModalButton';
import Navigation from '../../container/Navigation';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function PageHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(true);
  const { currentPage } = getPageInfos();

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpenHeader(window.scrollY < window.innerHeight);
    });
  }, []);

  return (
    <Wrapper
      width="full"
      className={clsx(
        S.headerWrapper,
        isOpenHeader && S.isOpenHeader,
        currentPage === 'home' && S.isHome
      )}
    >
      <Wrapper className={S.headerInner} width="xxxl" spacing={0} isFluid>
        <LogoWrapper />
        <ToggleModalButton
          className={S.toggleMenuButton}
          onClick={toggleMenu}
          icon="bars"
        />
        <Navigation isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
        {/* <SearchWrapper /> */}
      </Wrapper>
    </Wrapper>
  );
}
