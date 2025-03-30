import S from './styles.module.css';

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
    .map(part => (part.includes('<table') ? '' : part.trim()))
    .join('>')
    .replace('>>', '>')
    .replace('</table>', '');

  return (
    <div className={S.tableWrapper}>
      <table
        summary={tableSummary}
        dangerouslySetInnerHTML={{ __html: formatedTable }}
      />
    </div>
  );
}
