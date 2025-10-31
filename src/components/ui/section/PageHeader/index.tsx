import Button from '@/components/ui/base/Button';
import Logo from '@/components/ui/block/Logo';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import { Menu } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
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
        <h1>
          <Logo />
        </h1>
        <Button onClick={toggleMenu}>
          <Menu />
        </Button>
        {/* <SearchWrapper /> */}
      </Wrapper>
    </Wrapper>
  );
}
