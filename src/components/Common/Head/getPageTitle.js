import settings from '../../../settings.json'

export function getPageTitle(
  page,
  pagination,
  postTitle = '',
  postDescription = ''
) {
  const { TITLE_BASE } = settings.BLOG_INFOS

  switch (page) {
  case 'listing':
    return `Página ${ pagination } | ${ TITLE_BASE }`
  case 'post':
    return `${ postTitle } | ${ postDescription } | ${ TITLE_BASE }`
  case 'about':
    return `Sobre | ${ TITLE_BASE }`
  case 'contact':
    return `Contato | ${ TITLE_BASE }`
  default: // home
    return TITLE_BASE
  }
}
