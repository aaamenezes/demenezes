import ButtonStory from '@/components/ui/base/Button/story';
import CodeStory from '@/components/ui/base/Code/story';
import ComponentsScreen from '@/components/ui/template/Components';
import type { ComponentsMapProps } from '@/components/ui/template/Components/types';
import { levels, type Level } from '@/components/ui/template/Components/types';
import settings from '@/data/settings.json';
import type { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import type { ParsedUrlQuery } from 'querystring';

interface ComponentPathParams extends ParsedUrlQuery {
  level: string;
  componentName: string;
}

interface ComponentsPageProps {
  level: Level;
  componentName: string;
}

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
  },
  block: {},
  container: {},
  section: {},
  template: {},
};

function isValidLevel(level: string): level is Level {
  return levels.some(currentLevel => currentLevel === level);
}

function getComponentsMapByLevel(level: Level) {
  return componentsByLevelMap[level];
}

function isValidPath(level: string, componentName: string): boolean {
  if (!level) return false;
  if (!componentName) return false;

  if (!isValidLevel(level)) return false;

  const componentsMapByLevel = getComponentsMapByLevel(level);
  if (!componentsMapByLevel[componentName]) return false;

  return true;
}

export default function Components({
  level,
  componentName,
}: ComponentsPageProps) {
  const { src } = settings;
  return (
    <>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
      </Head>
      <ComponentsScreen level={level} componentName={componentName} />
    </>
  );
}

export function getStaticProps(
  context: GetStaticPropsContext<ComponentPathParams>
) {
  const { params } = context;

  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { level: rawLevel, componentName } = params;

  if (!isValidLevel(rawLevel)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const level = rawLevel;

  if (!isValidPath(level, componentName)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      level,
      componentName,
    },
  };
}

export function getStaticPaths() {
  const entries = Object.entries(componentsByLevelMap);

  const levelWithComponents = entries.map(([level, componentsMap]) => {
    const componentNames = Object.keys(componentsMap);

    return componentNames.map(componentName => ({
      level,
      componentName,
    }));
  });

  const flattened = levelWithComponents.flat();
  const paths = flattened.map(({ level, componentName }) => ({
    params: { level, componentName },
  }));

  return {
    paths,
    fallback: false,
  };
}
