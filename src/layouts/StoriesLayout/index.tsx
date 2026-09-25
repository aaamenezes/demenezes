import settings from '@/data/settings.json';
import Head from 'next/head';
import type { StoriesLayoutProps } from './types';

export default function StoriesLayout({ children }: StoriesLayoutProps) {
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
