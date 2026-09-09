import settings from '@/data/settings.json';
import type { PageName } from '@/types';
import { useRouter } from 'next/router';
import { entriesOf } from './object';

export function getPageInfos(): { currentPage: PageName } {
  const { pathname } = useRouter();

  const pages = entriesOf(settings.pages);

  const currentPageObject = pages.find(page => {
    const [_, pageInfos] = page;
    return pageInfos.url === pathname;
  });

  const currentPageName = currentPageObject ? currentPageObject[0] : 'home';

  return { currentPage: currentPageName };
}
