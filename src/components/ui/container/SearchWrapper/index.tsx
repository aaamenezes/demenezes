import { useState } from 'react';
import { clsx } from '../../../../utils/clsx';
import ToggleModalButton from '../../block/ToggleModalButton';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function SearchWrapper() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  function toggleSearch() {
    setIsOpenSearch(!isOpenSearch);
  }

  return (
    <div className={S.search}>
      <ToggleModalButton
        onClick={toggleSearch}
        icon="search"
        color="gray"
        className={S.toggleSearchModal}
        aria-labelledby="Abrir busca do blog"
      />
      <Wrapper
        className={clsx(S.searchContent, isOpenSearch && S.isOpenSearch)}
        width="xl"
      >
        <ToggleModalButton
          className={S.closeSearchButton}
          onClick={toggleSearch}
          icon="close"
          color="gray"
          aria-labelledby="Fechar busca do blog"
        />
      </Wrapper>
    </div>
  );
}
