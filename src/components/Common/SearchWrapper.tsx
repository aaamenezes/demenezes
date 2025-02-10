import { useState } from 'react';
import styled, { css } from 'styled-components';
import getBreakpoints from '../../utils/getBreakpoints';
import ToggleModalButton from '../block/ToggleModalButton';
import Wrapper from '../container/Wrapper';

const ToggleSearchModal = styled(ToggleModalButton)`
  ${getBreakpoints({
    xs: css`
      display: none;
    `,
    md: css`
      display: flex;
    `,
  })}
`;

const Search = styled.div`
  ${getBreakpoints({
    xs: css`
      display: none;
    `,
    md: css`
      display: block;
    `,
  })}
`;

const SearchContent = styled.div<{
  openSearch: boolean;
}>`
  ${({ theme, openSearch }) =>
    getBreakpoints({
      xs: css`
        position: fixed;
        z-index: ${theme.zIndex.fixed};
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${theme.color.neutral_900 + theme.opacity.hard.hex};
        opacity: ${openSearch ? '1' : '0'};
        transition: ${theme.transition.medium};
        pointer-events: ${openSearch ? 'all' : 'none'};
      `,
    })}
`;

const CloseSearchButton = styled(ToggleModalButton)`
  position: absolute;
  top: 0.66rem;
  right: 5%;
`;

export default function SearchWrapper() {
  const [openSearch, setOpenSearch] = useState(false);

  function toggleSearch() {
    setOpenSearch(!openSearch);
  }

  return (
    <Search>
      <ToggleSearchModal
        onClick={toggleSearch}
        icon="search"
        color="gray"
        as={ToggleSearchModal}
        aria-labelledby="Abrir busca do blog"
      />
      <Wrapper as={SearchContent} width="xl" openSearch={openSearch}>
        <CloseSearchButton
          onClick={toggleSearch}
          icon="close"
          color="gray"
          aria-labelledby="Fechar busca do blog"
        />
      </Wrapper>
    </Search>
  );
}
