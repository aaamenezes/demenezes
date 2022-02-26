import { useRouter } from 'next/router'
import settings from '../../settings.json'

export function getPageInfos() {
  const { PAGES } = settings
  const router = useRouter()
  const CURRENT_PAGE = Object.entries(PAGES).find(
    entry => entry[1].url === router.pathname
  )[0]

  return { CURRENT_PAGE }
}
