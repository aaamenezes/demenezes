import { BLOG_KEYWORDS_BASE } from '../../../settings'

export function getPageKeywords(page, pagination, postKeywords = []) {
  switch (page) {
  case 'listing':
    return BLOG_KEYWORDS_BASE
      .join(', ')
      .concat(`, página ${ pagination }`)
  case 'post':
    return BLOG_KEYWORDS_BASE
      .join(', ')
      .concat(`, ${ postKeywords.join(', ') }`)
  case 'about':
    return BLOG_KEYWORDS_BASE
      .join(', ')
      .concat(', Sobre, Sobre o blog deMenezes, Sobre o blog, Página Sobre')
  case 'contact':
    return BLOG_KEYWORDS_BASE
      .join(', ')
      .concat(', Contato, Contato André de Menezes, Página Contato')
  default: // home
    return BLOG_KEYWORDS_BASE.join(', ')
  }
}
