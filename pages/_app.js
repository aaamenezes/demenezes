import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '../src/external/GoogleAnalytics/gtag.ts'
import GoogleAnalytics from '../src/external/GoogleAnalytics/index.tsx'
import '../styles/variables.css'
import '../styles/reset.css'
import '../styles/globals.css'

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
