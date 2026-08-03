import Section from '@/components/designSysyem/Section';
import type { PostSummaryProps } from '@/types';
import RelatedPosts from '.';

export default function RelatedPostsStory() {
  const relatedPost: PostSummaryProps = {
    title: 'Como criar componentes reutilizáveis',
    slug: 'como-criar-componentes-reutilizaveis',
    metaDescription: 'Princípios para criar componentes flexíveis.',
    _firstPublishedAt: '2023-01-01T00:00:00Z',
    _updatedAt: '2023-01-01T00:00:00Z',
    category: 'Front-end',
    keywords: 'react, componentes',
    thumbnail: {
      alt: 'Componentes em uma interface',
      width: 800,
      height: 600,
      responsiveImage: {
        src: '/images/image.jpg',
      },
    },
  };

  const relatedPosts: PostSummaryProps[] = Array.from(
    { length: 24 },
    (_, index) => ({
      ...relatedPost,
      title: `${relatedPost.title} - ${index + 1}`,
    })
  );

  return (
    <>
      <Section heading="Default">
        <RelatedPosts postCategory="Front-end" relatedPosts={relatedPosts} />
      </Section>
    </>
  );
}
