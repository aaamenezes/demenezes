import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow: auto;
`;

export default function Table({
  tableTitle,
  tableSummary,
  tableContent,
}: {
  tableTitle: string;
  tableSummary: string;
  tableContent: string;
}) {
  const formatedTable = '<caption>'
    .concat(tableTitle)
    .concat('</caption>')
    .concat(tableContent)
    .split('>')
    .map((part) => (part.includes('<table') ? '' : part.trim()))
    .join('>')
    .replace('>>', '>')
    .replace('</table>', '');

  return (
    <TableWrapper>
      <table
        summary={tableSummary}
        dangerouslySetInnerHTML={{ __html: formatedTable }}
      />
    </TableWrapper>
  );
}
