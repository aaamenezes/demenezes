import { useRouter } from 'next/router'
import { PAGES } from '../settings'

export function getPageInfos() {
  const router = useRouter()
  const CURRENT_PAGE = PAGES.find(page => page.url === router.pathname).name
  const PAGE_TITLE = PAGES.find(page => page.url === router.pathname).pageTitle
  const HEADER_TEMPLATE = PAGES.find(
    page => page.name === CURRENT_PAGE
  ).headerTemplate

  return { CURRENT_PAGE, PAGE_TITLE, HEADER_TEMPLATE }
}
