import Section from '@/components/designSysyem/Section';
import HeroPostCard from '.';

export default function HeroPostCardStory() {
  return (
    <Section heading="Default">
      <HeroPostCard
        post={{
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
        }}
      />
    </Section>
  );
}
