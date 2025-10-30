import ToggleModalButton from '@/components/ui/block/ToggleModalButton';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { useCallback, useState } from 'react';
import style from './styles.module.css';

export default function SearchWrapper() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleSearch = useCallback(() => {
    setIsOpenSearch(currentState => !currentState);
  }, []);

  return (
    <div className={style.search}>
      <ToggleModalButton
        onClick={toggleSearch}
        icon="search"
        color="gray"
        className={style.toggleSearchModal}
        aria-labelledby="Abrir busca do blog"
      />
      <Wrapper
        className={clsx(style.searchContent, {
          [style.isOpenSearch]: isOpenSearch,
        })}
        width="xl"
      >
        <ToggleModalButton
          className={style.closeSearchButton}
          onClick={toggleSearch}
          icon="close"
          color="gray"
          aria-labelledby="Fechar busca do blog"
        />
      </Wrapper>
    </div>
  );
}
