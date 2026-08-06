import settings from '@/data/settings.json';
import Head from 'next/head';

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { src } = settings;

  return (
    <>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
      </Head>
      {children}
    </>
  );
}
