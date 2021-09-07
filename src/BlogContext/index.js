import { createContext } from 'react'
import { useRouter } from 'next/dist/client/router'
import { PAGES } from '../settings'

export function blogContextValues() {
  const router = useRouter()
  const currentPage = PAGES.find(page => page.url === router.pathname).name
  const { headerTemplate } = PAGES.find(page => page.name === currentPage)

  return { currentPage, headerTemplate }
}

export const BlogContext = createContext()
