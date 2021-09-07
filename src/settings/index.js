/**
 * SETTINGS
 */

export const POSTS_PER_PAGE = 5

export const PAGES = [ // Configurar currentPage na contextAPI
  {
    name: 'home',
    url: '/',
    headerTemplate: 'primary'
  },
  {
    name: 'listing',
    url: '/page/[page]',
    headerTemplate: 'primary'
  },
  {
    name: 'post',
    url: '/posts/[slug]',
    headerTemplate: 'primary'
  },
  {
    name: 'about',
    url: '/about',
    headerTemplate: 'secondary'
  },
  {
    name: 'contact',
    url: '/contact',
    headerTemplate: 'secondary'
  }
]

/**
 * CADASTROS
 */

export const NAVIGATION_MENU = [ // Header e menu lateral mobile
  { title: 'Home', url: '/' },
  { title: 'Sobre', url: '/about' },
  { title: 'Contato', url: '/contact' }
]

export const SOCIAL_MEDIA = [ // Rodapé
  { title: 'github', url: 'https://github.com/aaamenezes' },
  { title: 'linkedin', url: 'https://www.linkedin.com/in/aaamenezes' },
  { title: 'twitter', url: 'https://twitter.com/aaamenezes' },
  { title: 'instagram', url: 'https://instagram.com/aaamenezes' }
]

/**
 * LAYOUT
 */

export const gutterMultiplier = 4
