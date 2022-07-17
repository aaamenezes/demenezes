import React from 'react'
import Head from 'next/head'
import settings from '../../../../settings.json'
import GlobalHead from './GlobalHead'

export default function HomeHead({ firstPostImage }) {
  const { METADATA, PAGES, SRC } = settings
  const { BASE_DESCRIPTION, BASE_KEYWORDS } = METADATA

  const pageKeywords = PAGES.home.keywords
    .join(', ')
    .concat(', ')
    .concat(BASE_KEYWORDS.join(', '))
    .replace(', , ', ', ')

  return (
    <Head>
      {/* TITLE */}
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
      <meta name='twitter:title' content={pageTitle} />

      {/* DESCRIPTION */}
      <meta name='description' content={pageDescription} />
      <meta property='og:description' content={pageDescription} />
      <meta name='twitter:description' content={pageDescription} />

      {/* IMAGE */}
      <meta property='og:image' content={firstPostImage} />
      <meta name='twitter:image' content={firstPostImage} />

      {/* KEYWORDS */}
      <meta name='keywords' content={pageKeywords} />

      {/* SOURCES */}
      {/* Apenas na post page */}
      <link rel='stylesheet' href={SRC.CODE_THEME_VS_CODE} />
      <GlobalHead />
    </Head>
  )
}
