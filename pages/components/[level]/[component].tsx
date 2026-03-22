import Head from 'next/head';
import ComponentsScreen from '@/components/ui/template/Components';
import settings from '@/data/settings.json';
import { useRouter } from 'next/router';
import type { Level } from '@/components/ui/template/Components/types';

function validLevel(level: string | null): level is Level {
  return ['base', 'block', 'container', 'section', 'template'].includes(
    level || ''
  );
}

export default function Components() {
  const { src } = settings;
  const router = useRouter();
  const [level, component] = router.asPath
    ?.replace('/components/', '')
    ?.split('/') || [null, null];

  /**
   * fazer type guard para garantir que level é do tipo Level
   * e component é do tipo Component é do tipo component
   * (esse tipo nem tem ainda, mas vai ser preciso fazer)
   * senão, fazer redirect para home
   */

  if (!validLevel(level) || !component) {
    /**
     * se level ou component for null,
     * como fazer redirect para home via server side?
     * middleware?
     */
    return null;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
      </Head>
      <ComponentsScreen level={level} componentName={component} />
    </>
  );
}
