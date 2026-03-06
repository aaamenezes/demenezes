import Head from 'next/head';
import ComponentsScreen from '@/components/ui/template/components';
import settings from '@/data/settings.json';
import { useRouter } from 'next/router';

export default function Components() {
  const { src } = settings;
  const router = useRouter();
  const [level, component] = router.asPath
    ?.replace('/components/', '')
    ?.split('/') || [null, null];

  return (
    <>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
      </Head>
      <ComponentsScreen level={level} component={component} />
    </>
  );
}
