import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { Search, X } from 'lucide-react';
import { useCallback, useState } from 'react';
import Button from '../../base/Button';
import style from './styles.module.css';

export default function SearchWrapper() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleSearch = useCallback(() => {
    setIsOpenSearch(currentState => !currentState);
  }, []);

  return (
    <div className={style.search}>
      <Button aria-label="Abrir busca do blog" onClick={toggleSearch}>
        <Search />
      </Button>
      <Wrapper
        className={clsx(style.searchContent, {
          [style.isOpenSearch]: isOpenSearch,
        })}
        width="xl"
      >
        <Button onClick={toggleSearch}>
          <X />
        </Button>
      </Wrapper>
    </div>
  );
}
