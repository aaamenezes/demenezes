import PostCard from '.';
import Section from '@/components/designSysyem/Section';

export default function PostCardStory() {
  return (
    <>
      <Section heading="Default">
        <PostCard
          post={{
            title: '3 formas de centralizar qualquer elemento em CSS',
            slug: 'exemplo-de-titulo-do-post',
            metaDescription:
              'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
            _firstPublishedAt: '2023-01-01T00:00:00Z',
            _updatedAt: '2023-01-01T00:00:00Z',
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
      <Section heading="Default com post atualizado">
        <PostCard
          post={{
            title: '3 formas de centralizar qualquer elemento em CSS',
            slug: 'exemplo-de-titulo-do-post',
            metaDescription:
              'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
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
      <Section heading="Default com descrição longa">
        <PostCard
          post={{
            title: '3 formas de centralizar qualquer elemento em CSS',
            slug: 'exemplo-de-titulo-do-post',
            metaDescription:
              'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.o do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. Exemplo de descrição do post. Este é um resumo do conteúdo do post. ',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
              _firstPublishedAt: '2023-01-01T00:00:00Z',
              _updatedAt: '2023-01-01T00:00:00Z',
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
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
              _firstPublishedAt: '2023-01-01T00:00:00Z',
              _updatedAt: '2023-01-01T00:00:00Z',
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
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
              _firstPublishedAt: '2023-01-01T00:00:00Z',
              _updatedAt: '2023-01-01T00:00:00Z',
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
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
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
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
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
          <PostCard
            isCompact
            post={{
              title: '3 formas de centralizar qualquer elemento em CSS',
              slug: 'exemplo-de-titulo-do-post',
              metaDescription:
                'Para centralizar em CSS, existem três cenários clássicos que você enfrenta. Veja como chegar na interface desejada usando text-align, display flex, display grid, position relative e position absolute.',
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
        </div>
      </Section>
    </>
  );
}
