import { useRouter } from 'next/router'
import settings from '../settings.json'

export function getPageInfos() {
  const { PAGES } = settings
  const router = useRouter()
  const CURRENT_PAGE = PAGES.find(page => page.url === router.pathname).name
  const HEADER_TEMPLATE = PAGES.find(
    page => page.name === CURRENT_PAGE
  ).headerTemplate

  return { CURRENT_PAGE, HEADER_TEMPLATE }
}
