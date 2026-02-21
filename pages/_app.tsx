import { useRouter } from 'next/router';
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

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}
