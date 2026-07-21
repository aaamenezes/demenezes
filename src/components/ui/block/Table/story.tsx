import Table from '.';
import Section from '@/components/designSysyem/Section';

export default function TableStory() {
  return (
    <>
      <Section heading="Default">
        <Table
          tableTitle="Título da Tabela"
          tableSummary="Está é uma tabela de exemplo para demonstração do componente Table"
          tableContent={`<table>
            <thead>
              <tr>
                <th>Coluna 1</th>
                <th>Coluna 2</th>
                <th>Coluna 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Linha 1, Coluna 1</td>
                <td>Linha 1, Coluna 2</td>
                <td>Linha 1, Coluna 3</td>
              </tr>
              <tr>
                <td>Linha 2, Coluna 1</td>
                <td>Linha 2, Coluna 2</td>
                <td>Linha 2, Coluna 3</td>
              </tr>
              <tr>
                <td>Linha 3, Coluna 1</td>
                <td>Linha 3, Coluna 2</td>
                <td>Linha 3, Coluna 3</td>
              </tr>
              <tr>
                <td>Linha 4, Coluna 1</td>
                <td>Linha 4, Coluna 2</td>
                <td>Linha 4, Coluna 3</td>
              </tr>
              <tr>
                <td>Linha 5, Coluna 1</td>
                <td>Linha 5, Coluna 2</td>
                <td>Linha 5, Coluna 3</td>
              </tr>
            </tbody>
          </table>`}
        />
      </Section>
    </>
  );
}
