import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { getPageInfos } from '../../../utils/getPageInfos'
import settings from '../../../../settings.json'

export default function Head({ componentProps }) {
  const { CURRENT_PAGE } = getPageInfos()
  const router = useRouter()
  const baseURL = 'https://demenezes.dev'

  const isPostPage = CURRENT_PAGE === 'post'

  const { METADATA, PAGES, SRC } = settings
  const { TITLE_BASE, DESCRIPTION_BASE, KEYWORDS_BASE } = METADATA

  const pageTitleFirstPart = isPostPage
    ? componentProps.post.data.post.title
    : PAGES[CURRENT_PAGE].pageTitle

  const pageTitle = `${ pageTitleFirstPart } | ${ TITLE_BASE }`

  const pageDescriptionFirstPart = isPostPage
    ? componentProps.post.data.post.metaDescription
    : PAGES[CURRENT_PAGE].description

  const pageDescription = PAGES[CURRENT_PAGE].pageTitle !== 'Home'
    ? `${ pageDescriptionFirstPart } | ${ DESCRIPTION_BASE }`
    : `${ DESCRIPTION_BASE }`

  function getImageMetaTag() {
    switch (CURRENT_PAGE) {
    case 'home':
    case 'listing':
      return componentProps.CURRENT_POSTS[0].thumbnail.url
    case 'post':
      return componentProps.post.data.post.thumbnail.url
    case 'about':
      return componentProps.aboutPageContent.data.aboutPage.profileImage
        .responsiveImage
        .srcSet
        .split(',')[3]
        .split(' ')[0]
    case 'contact':
      return componentProps.contactContent.data.aboutPage.profileImage
        .responsiveImage
        .srcSet
        .split(',')[3]
        .split(' ')[0]
    default:
      return ''
    }
  }

  const imageMetaTag = getImageMetaTag()

  const pageKeywords = PAGES[CURRENT_PAGE].keywords
    .join(', ')
    .concat(', ')
    .concat(isPostPage ? componentProps.post.data.post.keywords.join(', ') : '')
    .concat(', ')
    .concat(KEYWORDS_BASE.join(', '))
    .replace(', , ', ', ')

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='description' content={pageDescription} />
      <meta property='og:description' content={pageDescription} />
      <meta name='twitter:description' content={pageDescription} />
      <meta property='og:image' content={imageMetaTag} />
      <meta name='twitter:image' content={imageMetaTag} />
      <meta name='author' content='André Menezes' />
      <meta name='keywords' content={pageKeywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='UTF-8' />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={`${ baseURL }${ router.asPath }`} />
      <meta property='og:site_name' content={TITLE_BASE} />
      <meta property='og:locale' content='pt_BR' />
      <meta name='apple-mobile-web-app-title' content='deMenezes' />
      <meta name='theme-color' content='#ffffff' />

      {
        componentProps.post
        // eslint-disable-next-line no-underscore-dangle
        && componentProps.post.data.post._firstPublishedAt
        && (
          <meta
            property='article:published_time'
            // eslint-disable-next-line no-underscore-dangle
            content={componentProps.post.data.post._firstPublishedAt}
          />
        )
      }

      {
        componentProps.post
        // eslint-disable-next-line no-underscore-dangle
        && componentProps.post.data.post._updatedAt
        && (
          <meta
            property='article:modified_time'
            // eslint-disable-next-line no-underscore-dangle
            content={componentProps.post.data.post._updatedAt}
          />
        )
      }

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@aaamenezes' />
      <meta name='twitter:site' content='@aaamenezes' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href={SRC.FONT} />
      <link rel='stylesheet' href={SRC.ICONS} />
      <link rel='stylesheet' href={SRC.CODE_THEME_VS_CODE} />
    </NextHead>
  )
}
