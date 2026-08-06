import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import { pageview } from '../src/external/GoogleAnalytics/gtag';
import GoogleAnalytics from '../src/external/GoogleAnalytics/index';

/**
 * reset.css: corrigir inconsistências entre navegadores e fornecer uma base neutra para estilos personalizados. Pode ser copiado diretamente para outro projeto
 */
import '../styles/reset.css';

/**
 * variables.css: definir variáveis nativas do CSS para cores, tipografia, espaçamento e outros estilos reutilizáveis
 */
import '../styles/variables.css';

/**
 * globals.css: estilos globais específicos para esse projeto
 */
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <GoogleAnalytics />
    </>
  );
}
