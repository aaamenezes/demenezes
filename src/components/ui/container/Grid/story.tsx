import Button from '@/components/ui/base/Button';
import Section from '@/components/designSysyem/Section';
import Grid from '.';

export default function GridStory() {
  return (
    <>
      <Section heading="Colunas responsivas">
        <Grid columns={{ xs: 1, md: 2, lg: 3 }}>
          <Button>Item 1</Button>
          <Button>Item 2</Button>
          <Button>Item 3</Button>
        </Grid>
      </Section>
      <Section heading="Largura mínima dos itens">
        <Grid minColumnWidth={300} gap="md">
          <Button>Item 1</Button>
          <Button>Item 2</Button>
          <Button>Item 3</Button>
        </Grid>
      </Section>
    </>
  );
}
