import PostCard from '.';
import Section from '@/components/designSysyem/Section';

export default function PostCardStory() {
  return (
    <>
      <Section heading="Default">
        <PostCard
          post={{
            title: 'Exemplo de título do post',
            slug: 'exemplo-de-titulo-do-post',
            metaDescription:
              'Exemplo de descrição do post. Este é um resumo do conteúdo do post.',
            _firstPublishedAt: '2023-01-01T00:00:00Z',
            _updatedAt: '2023-01-02T00:00:00Z',
            category: 'Front-end',
            keywords: 'exemplo post card',
            thumbnail: {
              width: 800,
              height: 600,
              alt: 'Imagem de capa do post',
              responsiveImage: {
                src: '/favicon/ms-icon-310x310.png',
              },
            },
          }}
        />
      </Section>
      <Section heading="Compacto">
        <PostCard
          isCompact
          post={{
            title: 'Exemplo de título do post',
            slug: 'exemplo-de-titulo-do-post',
            metaDescription:
              'Exemplo de descrição do post. Este é um resumo do conteúdo do post.',
            _firstPublishedAt: '2023-01-01T00:00:00Z',
            _updatedAt: '2023-01-02T00:00:00Z',
            category: 'Front-end',
            keywords: 'exemplo post card',
            thumbnail: {
              width: 800,
              height: 600,
              alt: 'Imagem de capa do post',
              responsiveImage: {
                src: '/favicon/ms-icon-310x310.png',
              },
            },
          }}
        />
      </Section>
    </>
  );
}
