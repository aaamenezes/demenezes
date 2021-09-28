import { BLOG_TITLE_BASE } from '../../../settings'

export function getPageTitle(
  page,
  pagination,
  postTitle = '',
  postDescription = ''
) {
  switch (page) {
  case 'listing':
    return `Página ${ pagination } | ${ BLOG_TITLE_BASE }`
  case 'post':
    return `${ postTitle } | ${ postDescription } | ${ BLOG_TITLE_BASE }`
  case 'about':
    return `Sobre | ${ BLOG_TITLE_BASE }`
  case 'contact':
    return `Contato | ${ BLOG_TITLE_BASE }`
  default: // home
    return BLOG_TITLE_BASE
  }
}
