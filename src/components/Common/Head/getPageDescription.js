import settings from '../../../settings.json'

export function getPageDescription(page, pagination, postDescription = '') {
  const { DESCRIPTION_BASE } = settings.BLOG_INFOS

  switch (page) {
  case 'listing':
    return `Pág. ${ pagination } | deMenezes | `
      .concat(DESCRIPTION_BASE)
  case 'post':
    return `${ postDescription } | `
      .concat(DESCRIPTION_BASE)
  case 'about':
    return 'Página Sobre do blog deMenezes | '
      .concat(DESCRIPTION_BASE)
  case 'contact':
    return 'Página Contato do blog deMenezes | '
      .concat(DESCRIPTION_BASE)
  default: // home
    return DESCRIPTION_BASE
  }
}
