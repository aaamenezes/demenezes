import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import settings from '../../../../settings.json'
import { getPageInfos } from '../../../utils/getPageInfos'

export default function GlobalHead() {
  const router = useRouter()
  const { CURRENT_PAGE } = getPageInfos()

  const { METADATA, PAGES, SRC } = settings
  const { BASE_TITLE, BASE_URL } = METADATA

  const pageTitle = `${ PAGES[CURRENT_PAGE].pageTitle } | ${ BASE_TITLE }`

  return (
    <Head>
      {/* RESPONSIVITY */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* BROWSERS */}
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='apple-mobile-web-app-title' content='deMenezes' />

      {/* SOURCES */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href={SRC.FONT} />
      <link rel='stylesheet' href={SRC.ICONS} />

      {/* FAVICON */}
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/favicon/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/favicon/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/favicon/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/favicon/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/favicon/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/favicon/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/favicon/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/favicon/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/favicon/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <link rel='manifest' href='/favicon/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />

      {/* OTHERS */}
      <meta charSet='UTF-8' />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={`${ BASE_URL }${ router.asPath }`} />
      <meta name='author' content='André Menezes' />
      <meta name='twitter:creator' content='@aaamenezes' />
      <meta name='twitter:site' content='@aaamenezes' />
      <meta property='og:site_name' content={BASE_TITLE} />
      <meta property='og:locale' content='pt_BR' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='twitter:card' content='summary' />
    </Head>
  )
}
