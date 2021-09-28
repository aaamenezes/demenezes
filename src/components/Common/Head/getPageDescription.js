import { BLOG_DESCRIPTION_BASE } from '../../../settings'

export function getPageDescription(page, pagination, postDescription = '') {
  switch (page) {
  case 'listing':
    return `Página ${ pagination } de posts do blog deMenezes | `
      .concat(BLOG_DESCRIPTION_BASE)
  case 'post':
    return `${ postDescription } | `
      .concat(BLOG_DESCRIPTION_BASE)
  case 'about':
    return 'Página Sobre do blog deMenezes | '
      .concat(BLOG_DESCRIPTION_BASE)
  case 'contact':
    return 'Página Contato do blog deMenezes | '
      .concat(BLOG_DESCRIPTION_BASE)
  default: // home
    return BLOG_DESCRIPTION_BASE
  }
}
