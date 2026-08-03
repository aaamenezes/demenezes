import Section from '@/components/designSysyem/Section';
import type { PostProps } from '@/types';
import PostContent from '.';

const post: PostProps = {
  data: {
    post: {
      title: 'Como criar componentes reutilizáveis',
      slug: 'como-criar-componentes-reutilizaveis',
      metaDescription: 'Um exemplo de conteúdo estruturado para um post.',
      _firstPublishedAt: '2023-01-01T00:00:00Z',
      _updatedAt: '2023-01-01T00:00:00Z',
      category: 'Front-end',
      keywords: 'componentes, react',
      thumbnail: {
        alt: 'Componentes em uma interface',
        width: 800,
        height: 600,
        responsiveImage: {
          src: '/favicon/ms-icon-310x310.png',
        },
      },
      content: {
        blocks: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      'Conteúdo de exemplo para demonstrar a renderização de um post.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
};

export default function PostContentStory() {
  return (
    <Section heading="Default">
      <PostContent post={post} />
    </Section>
  );
}
