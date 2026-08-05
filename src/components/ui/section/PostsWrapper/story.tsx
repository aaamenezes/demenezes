import Section from '@/components/designSysyem/Section';
import type { PostSummaryProps } from '@/types';
import PostsWrapper from '.';

const post: PostSummaryProps = {
  title: 'Como organizar componentes em um design system',
  slug: 'como-organizar-componentes-em-um-design-system',
  metaDescription:
    'Princípios práticos para criar componentes consistentes, reutilizáveis e fáceis de manter.',
  _firstPublishedAt: '2023-01-01T00:00:00Z',
  _updatedAt: '2023-01-02T00:00:00Z',
  category: 'Front-end',
  keywords: 'design system, componentes',
  thumbnail: {
    alt: 'Componentes organizados em uma interface',
    width: 800,
    height: 600,
    responsiveImage: {
      src: '/images/image.jpg',
    },
  },
};

const postsList: PostSummaryProps[] = Array.from({ length: 7 }, (_, index) => ({
  ...post,
  title: `${post.title} ${index + 1}`,
  slug: `${post.slug}-${index + 1}`,
}));

export default function PostsWrapperStory() {
  return (
    <>
      <Section heading="Página inicial">
        <PostsWrapper postsList={postsList} isHome />
      </Section>
      <Section heading="Demais páginas">
        <PostsWrapper postsList={postsList} />
      </Section>
    </>
  );
}
