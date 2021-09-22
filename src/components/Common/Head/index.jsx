import React from 'react'
import NextHead from 'next/head'
import { getPageInfos } from '../../../utils/getPageInfos'

export default function Head({
  pageTitle,
  pageDescription,
  keyWords,
  currentPagination
}) {
  const { CURRENT_PAGE, PAGE_TITLE } = getPageInfos()

  const currentTitle = CURRENT_PAGE === 'listing'
    ? `Page ${ currentPagination } | ${ pageTitle }`
    : pageTitle

  const currentKeyWorkds = CURRENT_PAGE === 'listing'
    ? `${ keyWords },página ${ currentPagination }`
    : keyWords

  function getCurrentPageDescription(page, description) {
    switch (page) {
    case 'about':
      return `Página ${ PAGE_TITLE } | ${ description }`
    case 'contact':
      return `Página ${ PAGE_TITLE } | ${ description }`
    default:
      return description
    }
  }

  const currentPageDescription = getCurrentPageDescription(
    CURRENT_PAGE, pageDescription
  )

  return (
    <NextHead>
      <title>{currentTitle}</title>
      <meta name='author' content='André Menezes' />
      <meta name='description' content={currentPageDescription} />
      <meta name='keywords' content={currentKeyWorkds} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='UTF-8' />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
      />
    </NextHead>
  )
}
