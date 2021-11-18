import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../utils/getGutter'

/**
 * INFORMAÇÕES DO BLOG
 */

export const BLOG_TITLE_BASE = 'deMenezes: Front-end, carreira e css-life-style'
export const BLOG_DESCRIPTION_BASE = 'Um blog sobre isso, isso e isso'
export const BLOG_KEYWORDS_BASE = [
  'front-end', 'programação', 'carreira', 'blog pessoal'
]

/**
 * CADASTROS
 */

export const NAVIGATION_MENU = [
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
 * CONFIGURAÇÕES
 */

export const POSTS_PER_PAGE = 5

export const PAGES = [
  {
    name: 'home',
    pageTitle: 'Home',
    url: '/',
    headerTemplate: 'primary'
  },
  {
    name: 'listing',
    pageTitle: 'Home',
    url: '/page/[page]',
    headerTemplate: 'primary'
  },
  {
    name: 'post',
    pageTitle: 'Artigo',
    url: '/posts/[slug]',
    headerTemplate: 'primary'
  },
  {
    name: 'about',
    pageTitle: 'Sobre',
    url: '/about',
    headerTemplate: 'secondary'
  },
  {
    name: 'contact',
    pageTitle: 'Contato',
    url: '/contact',
    headerTemplate: 'secondary'
  }
]

/**
 * LAYOUT
 */

export const gutterMultiplier = 4
