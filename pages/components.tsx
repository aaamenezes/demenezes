import Head from 'next/head';
import DesignSystemScreen from '@/components/ui/template/DesignSystem';
import settings from '@/data/settings.json';

export default function DesignSystem() {
  const { src } = settings;

  return (
    <>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
      </Head>
      <DesignSystemScreen />
    </>
  );
}
