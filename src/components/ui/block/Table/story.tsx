import Section from '@/components/styleGuide/Section';
import Table from '.';

export default function TableStory() {
  return (
    <>
      <Section heading="Default">
        <Table
          caption="Tabela de exemplo"
          summary="Essa é uma tabela de exemplo para demonstração do componente Table"
        >
          <Table.Header
            cells={[
              { label: 'Column 1' },
              { label: 'Column 2' },
              { label: 'Column 3' },
            ]}
          />
          <Table.Body
            rows={[
              [
                { label: 'Row 1, Column 1' },
                { label: 'Row 1, Column 2' },
                { label: 'Row 1, Column 3' },
              ],
              [
                { label: 'Row 2, Column 1' },
                { label: 'Row 2, Column 2' },
                { label: 'Row 2, Column 3' },
              ],
              [
                { label: 'Row 3, Column 1' },
                { label: 'Row 3, Column 2' },
                { label: 'Row 3, Column 3' },
              ],
            ]}
          />
          <Table.Footer
            cells={[
              { label: 'Footer 1' },
              { label: 'Footer 2' },
              { label: 'Footer 3' },
            ]}
          />
        </Table>
      </Section>
      <Section heading="Without footer">
        <Table
          caption="Tabela de exemplo"
          summary="Essa é uma tabela de exemplo para demonstração do componente Table"
        >
          <Table.Header
            cells={[
              { label: 'Column 1' },
              { label: 'Column 2' },
              { label: 'Column 3' },
            ]}
          />
          <Table.Body
            rows={[
              [
                { label: 'Row 1, Column 1' },
                { label: 'Row 1, Column 2' },
                { label: 'Row 1, Column 3' },
              ],
              [
                { label: 'Row 2, Column 1' },
                { label: 'Row 2, Column 2' },
                { label: 'Row 2, Column 3' },
              ],
              [
                { label: 'Row 3, Column 1' },
                { label: 'Row 3, Column 2' },
                { label: 'Row 3, Column 3' },
              ],
            ]}
          />
        </Table>
      </Section>
      <Section heading="Without footer and header">
        <Table
          caption="Tabela de exemplo"
          summary="Essa é uma tabela de exemplo para demonstração do componente Table"
        >
          <Table.Body
            rows={[
              [
                { label: 'Row 1, Column 1' },
                { label: 'Row 1, Column 2' },
                { label: 'Row 1, Column 3' },
              ],
              [
                { label: 'Row 2, Column 1' },
                { label: 'Row 2, Column 2' },
                { label: 'Row 2, Column 3' },
              ],
              [
                { label: 'Row 3, Column 1' },
                { label: 'Row 3, Column 2' },
                { label: 'Row 3, Column 3' },
              ],
            ]}
          />
        </Table>
      </Section>
    </>
  );
}
