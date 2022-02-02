/* eslint-disable max-len */
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
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
      />
    </NextHead>
  )
}
