import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '../src/components/Common/GoogleAnalytics/gtag.ts'
import GoogleAnalytics from '../src/components/Common/GoogleAnalytics/index.tsx'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  )
}
