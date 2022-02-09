import { useRouter } from 'next/router'
import settings from '../../settings.json'

export function getPageInfos() {
  const { PAGES } = settings
  const router = useRouter()
  const CURRENT_PAGE = Object.entries(PAGES).find(
    entry => entry[1].url === router.pathname
  )[0]
  const HEADER_TEMPLATE = Object.entries(PAGES).find(
    entry => entry[0] === CURRENT_PAGE
  )[1].headerTemplate

  return { CURRENT_PAGE, HEADER_TEMPLATE }
}
