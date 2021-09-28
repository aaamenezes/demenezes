import React from 'react'
import NextHead from 'next/head'
import { getPaginationInfos } from '../../../utils/getPaginationInfos'
import { getPageInfos } from '../../../utils/getPageInfos'
import { getPageTitle } from './getPageTitle'
import { getPageDescription } from './getPageDescription'
import { getPageKeywords } from './getPageKeyWords'

export default function Head({ componentProps }) {
  const { CURRENT_POSTS } = componentProps
  const { CURRENT_PAGINATION } = getPaginationInfos(CURRENT_POSTS)
  const { CURRENT_PAGE } = getPageInfos()

  const { title } = componentProps.post || ''
  const { description } = componentProps.post || ''
  const { keywords } = componentProps.post || ''

  const pageTitle = getPageTitle(
    CURRENT_PAGE,
    CURRENT_PAGINATION,
    title,
    description
  )

  const pageDescription = getPageDescription(
    CURRENT_PAGE,
    CURRENT_PAGINATION,
    description
  )

  const pageKeywords = getPageKeywords(
    CURRENT_PAGE,
    CURRENT_PAGINATION,
    keywords
  )

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name='author' content='André Menezes' />
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords} />
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
