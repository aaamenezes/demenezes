import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import getBreakpoints from '../../utils/getBreakpoints';
import { getPageInfos } from '../../utils/getPageInfos';
import Container from './Container';
import LogoWrapper from '../block/LogoWrapper';
import Navigation from './Navigation';
import ToggleModalButton from './ToggleModalButton';
import { PageName } from '../../types';

const HeaderWrapper = styled.header<{
  openHeader: boolean;
  currentPage: PageName;
}>`
  position: fixed;
  transform: ${({ openHeader }) =>
    openHeader ? 'translate(-50%, 0)' : 'translate(-50%, -110%)'};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  top: 0;
  left: 50%;
  padding-top: 0.66rem;
  padding-bottom: 0.66rem;
  color: ${({ theme }) => theme.color.neutral_100};
  background-color: ${({ theme, currentPage }) =>
    currentPage === 'home' ? 'transparent' : theme.color.neutral_900};
  transition: ${({ theme }) => theme.transition.medium};
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleMenuButton = styled(ToggleModalButton)`
  ${getBreakpoints({
    md: css`
      display: none;
    `,
  })}
`;

export default function PageHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openHeader, setOpenHeader] = useState(true);
  const { currentPage } = getPageInfos();

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOpenHeader(window.scrollY < window.innerHeight);
    });
  }, []);

  return (
    <Container
      width="full"
      as={HeaderWrapper}
      openHeader={openHeader}
      currentPage={currentPage}
    >
      <Container as={HeaderInner} width="xxxl" spacing={0} fluid>
        <LogoWrapper />
        <ToggleMenuButton onClick={toggleMenu} icon="bars" />
        <Navigation openMenu={openMenu} toggleMenu={toggleMenu} />
        {/* <SearchWrapper /> */}
      </Container>
    </Container>
  );
}
