import { useRouter } from 'next/router'
import settings from '../../settings.json'

export function getPageInfos() {
  const { pages } = settings
  const { pathname } = useRouter()

  Object

  const currentPage = Object.entries(pages).find(
    entry => entry[1].url === pathname
  )[0]

  return { currentPage }
}
