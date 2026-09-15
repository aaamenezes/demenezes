import Section from '@/components/styleGuide/Section';
import Grid from '@/components/ui/container/Grid';
import PostCard from '.';

export default function PostCardStory() {
  const gridContent = Array.from({ length: 24 }, (_, index) => (
    <PostCard
      category="Front-end"
      slug="exemplo-de-titulo-do-post"
      key={index}
      isCompact
    >
      <PostCard.Image
        width={800}
        height={600}
        alt="Imagem de capa do post"
        src="/images/image.jpg"
      ></PostCard.Image>
      <PostCard.Infos>
        <PostCard.Title>
          3 formas de centralizar qualquer elemento em CSS
        </PostCard.Title>
        <PostCard.Description>
          Para centralizar em CSS, existem três cenários clássicos que você
          enfrenta. Veja como chegar na interface desejada usando text-align,
          display flex, display grid, position relative e position absolute.
        </PostCard.Description>
        <PostCard.Date publicationDate="2023-01-01T00:00:00Z" />
      </PostCard.Infos>
    </PostCard>
  ));

  return (
    <>
      <Section heading="Default">
        <PostCard category="Front-end" slug="exemplo-de-titulo-do-post">
          <PostCard.Image
            width={800}
            height={600}
            alt="Imagem de capa do post"
            src="/images/image.jpg"
          ></PostCard.Image>
          <PostCard.Infos>
            <PostCard.Title>
              3 formas de centralizar qualquer elemento em CSS
            </PostCard.Title>
            <PostCard.Description>
              Para centralizar em CSS, existem três cenários clássicos que você
              enfrenta. Veja como chegar na interface desejada usando
              text-align, display flex, display grid, position relative e
              position absolute.
            </PostCard.Description>
            <PostCard.Date publicationDate="2023-01-01T00:00:00Z" />
          </PostCard.Infos>
        </PostCard>
      </Section>
      <Section heading="Default non published post">
        <PostCard category="Front-end" slug="exemplo-de-titulo-do-post">
          <PostCard.Image
            width={800}
            height={600}
            alt="Imagem de capa do post"
            src="/images/image.jpg"
          ></PostCard.Image>
          <PostCard.Infos>
            <PostCard.Title>
              3 formas de centralizar qualquer elemento em CSS
            </PostCard.Title>
            <PostCard.Description>
              Para centralizar em CSS, existem três cenários clássicos que você
              enfrenta. Veja como chegar na interface desejada usando
              text-align, display flex, display grid, position relative e
              position absolute.
            </PostCard.Description>
            <PostCard.Date publicationDate="" />
          </PostCard.Infos>
        </PostCard>
      </Section>
      <Section heading="Default with updated post">
        <PostCard category="Front-end" slug="exemplo-de-titulo-do-post">
          <PostCard.Image
            width={800}
            height={600}
            alt="Imagem de capa do post"
            src="/images/image.jpg"
          ></PostCard.Image>
          <PostCard.Infos>
            <PostCard.Title>
              3 formas de centralizar qualquer elemento em CSS
            </PostCard.Title>
            <PostCard.Description>
              Para centralizar em CSS, existem três cenários clássicos que você
              enfrenta. Veja como chegar na interface desejada usando
              text-align, display flex, display grid, position relative e
              position absolute.
            </PostCard.Description>
            <PostCard.Date
              publicationDate="2023-01-01T00:00:00Z"
              updateDate="2023-01-02T00:00:00Z"
            />
          </PostCard.Infos>
        </PostCard>
      </Section>
      <Section heading="Compacto">
        <Grid minColumnWidth={300} gap="md">
          {gridContent}
        </Grid>
      </Section>
    </>
  );
}
