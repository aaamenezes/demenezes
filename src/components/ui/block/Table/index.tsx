import style from './styles.module.css';

function addClassToTags(html: string, tagName: string, className: string) {
  const openingTag = new RegExp(`<${tagName}(\\s[^>]*)?>`, 'gi');
  const classAttribute = /\\bclass=(["'])(.*?)\\1/i;

  return html.replace(openingTag, (_match: string, attributes: string = '') => {
    if (classAttribute.test(attributes)) {
      return `<${tagName}${attributes.replace(
        classAttribute,
        (_classMatch: string, quote: string, currentClassName: string) =>
          `class=${quote}${currentClassName} ${className}${quote}`
      )}>`;
    }

    return `<${tagName}${attributes} class="${className}">`;
  });
}

export default function Table({
  tableTitle,
  tableSummary,
  tableContent,
}: {
  tableTitle: string;
  tableSummary: string;
  tableContent: string;
}) {
  const tableBody = tableContent
    .replace(/^\s*<table\b[^>]*>/i, '')
    .replace(/<\/table>\s*$/i, '');

  const tableWithClasses = [
    ['thead', style.tableHead],
    ['tbody', style.tableBody],
    ['tfoot', style.tableFoot],
    ['tr', style.tableRow],
    ['th', style.tableHeader],
    ['td', style.tableData],
  ].reduce(
    (html, [tagName, className]) => addClassToTags(html, tagName, className),
    tableBody
  );

  const formattedTable = `<caption class="${style.tableCaption}">${tableTitle}</caption>${tableWithClasses}`;

  /*
  const formatedTable = '<caption>'
    .concat(tableTitle)
    .concat('</caption>')
    .concat(tableContent)
    .split('>')
    .map(part => (part.includes('<table') ? '' : part.trim()))
    .join('>')
    .replace('>>', '>')
    .replace('</table>', '');
  */

  return (
    <div className={style.tableWrapper}>
      <table
        className={style.table}
        summary={tableSummary}
        dangerouslySetInnerHTML={{ __html: formattedTable }}
      />
    </div>
  );
}
