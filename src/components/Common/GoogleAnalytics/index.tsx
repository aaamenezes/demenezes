import React from 'react'
import Script from 'next/script'
import { GA_TRACKING_ID } from './gtag'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${ GA_TRACKING_ID }`}
      />
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ GA_TRACKING_ID }', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

/**
 * # .env.production
 * <!-- DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults. -->
 * <!-- If you want to add secrets use `.env.production.local` instead. -->
 *
 * ## Variável de produção apenas no servidor
 * PRODUCTION_ENV_VARIABLE="server_only_production_variable"
 *
 * ## Variável de produção pública (AQUI)
 * NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE="public_production_variable"
 *
 * # .env.local.example
 *
 * ## Somente variável do ambiente local apenas no servidor
 * ENV_LOCAL_VARIABLE="server_only_variable_from_env_local"
 * ## Somente variável do ambiente local pública
 * NEXT_PUBLIC_ENV_LOCAL_VARIABLE="public_variable_from_env_local"
 *
 * # .env.development
 *
 * <!-- DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults. -->
 * <!-- If you want to add secrets use `.env.development.local` instead. -->
 *
 * ## Variável de desenvolvimento apenas no servidor
 * DEVELOPMENT_ENV_VARIABLE="server_only_development_variable"
 * ## Variável de desenvolvimento pública
 * NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE="public_development_variable"
 *
 * # .env
 *
 * <!-- DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults. -->
 * <!-- If you want to add secrets use `.env.local` instead. -->
 *
 * ## Variável apenas no servidor
 * ENV_VARIABLE="server_only_variable"
 *
 * ## Variável pública
 * NEXT_PUBLIC_ENV_VARIABLE="public_variable"
 */
