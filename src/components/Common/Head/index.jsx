import React from 'react'
import NextHead from 'next/head'
import { getPageInfos } from '../../../utils/getPageInfos'
import settings from '../../../../settings.json'

export default function Head({ componentProps }) {
  const { CURRENT_PAGE } = getPageInfos()

  const isPostPage = !!componentProps.post

  const { METADATA, PAGES, SRC } = settings
  const { TITLE_BASE, DESCRIPTION_BASE, KEYWORDS_BASE } = METADATA

  const pageTitleFirstPart = isPostPage
    ? componentProps.post.title
    : PAGES[CURRENT_PAGE].pageTitle

  const pageTitle = `${ pageTitleFirstPart } | ${ TITLE_BASE }`

  const pageDescriptionFirstPart = isPostPage
    ? componentProps.post.description
    : PAGES[CURRENT_PAGE].description

  const pageDescription = PAGES[CURRENT_PAGE].pageTitle !== 'Home'
    ? `${ pageDescriptionFirstPart } | ${ DESCRIPTION_BASE }`
    : `${ DESCRIPTION_BASE }`

  const pageKeywords = PAGES[CURRENT_PAGE].keywords
    .join(', ')
    .concat(', ')
    .concat(isPostPage ? componentProps.post.keywords.join(', ') : '')
    .concat(', ')
    .concat(KEYWORDS_BASE.join(', '))
    .replace(', , ', ', ')

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name='author' content='André Menezes' />
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='UTF-8' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href={SRC.FONT} />
      <link rel='stylesheet' href={SRC.ICONS} />
    </NextHead>
  )
}
