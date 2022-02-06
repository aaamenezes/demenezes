import settings from '../../../settings.json'

export function getPageKeywords(page, pagination, postKeywords = []) {
  const { KEYWORDS_BASE } = settings.BLOG_INFOS

  switch (page) {
  case 'listing':
    return KEYWORDS_BASE
      .join(', ')
      .concat(`, página ${ pagination }`)
  case 'post':
    return KEYWORDS_BASE
      .join(', ')
      .concat(`, ${ postKeywords.join(', ') }`)
  case 'about':
    return KEYWORDS_BASE
      .join(', ')
      .concat(', Sobre, Sobre o blog deMenezes, Sobre o blog, Página Sobre')
  case 'contact':
    return KEYWORDS_BASE
      .join(', ')
      .concat(', Contato, Contato André de Menezes, Página Contato')
  default: // home
    return KEYWORDS_BASE.join(', ')
  }
}
