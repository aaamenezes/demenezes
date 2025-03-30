import { useRouter } from 'next/router';
import settings from '../../settings.json';
import { PageName, PageProps } from '../types';

export function getPageInfos(): { currentPage: PageName } {
  const { pages } = settings;
  const { pathname } = useRouter();

  /**
   * o type assertion abaixo foi a solução menor pior
   * as [PageName, PageProps][]
   * acontece erro de typo pq é chato typar dados do json importado
   * e o object.entries transforma a key do objeto em string
   * e deixa de ser PageName
   * talvez se isso vir do cms e typar o retorno do request melhore
   * e assim possa remover esse type assertion
   */
  const currentPage =
    (Object.entries(pages) as [PageName, PageProps][]).find(page => {
      return (page as [PageName, PageProps])[1].url === pathname;
    })?.[0] || 'home';

  return { currentPage };
}
