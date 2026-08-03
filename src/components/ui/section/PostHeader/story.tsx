import Section from '@/components/designSysyem/Section';
import PostHeader from '.';

export default function PostHeaderStory() {
  return (
    <>
      <Section heading="Publicado">
        <PostHeader
          title="Como criar componentes reutilizáveis"
          description="Princípios para construir interfaces consistentes e fáceis de manter."
          date="2023-01-01T00:00:00Z"
          update=""
          category="Front-end"
          keywords="React, TypeScript, Componentes"
          coverImage="/images/image.jpg"
        />
      </Section>
      <Section heading="Atualizado">
        <PostHeader
          title="Como criar componentes reutilizáveis"
          description="Princípios para construir interfaces consistentes e fáceis de manter."
          date="2023-01-01T00:00:00Z"
          update="2023-01-02T00:00:00Z"
          category="Front-end"
          keywords="React, TypeScript, Componentes"
          coverImage="/images/image.jpg"
        />
      </Section>
    </>
  );
}
