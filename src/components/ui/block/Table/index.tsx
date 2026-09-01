import styles from './styles.module.css';
import type { TableProps } from './types';
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
  caption,
  tableSummary,
  tableContent,
}: TableProps) {
  const tableBody = tableContent
    .replace(/^\s*<table\b[^>]*>/i, '')
    .replace(/<\/table>\s*$/i, '');

  const tableWithClasses = [
    ['thead', styles.tableHead],
    ['tbody', styles.tableBody],
    ['tfoot', styles.tableFoot],
    ['tr', styles.tableRow],
    ['th', styles.tableHeader],
    ['td', styles.tableData],
  ].reduce(
    (html, [tagName, className]) => addClassToTags(html, tagName, className),
    tableBody
  );

  const formattedTable = `<caption class="${styles.tableCaption}">${caption}</caption>${tableWithClasses}`;

  /*
  const formatedTable = '<caption>'
    .concat(caption)
    .concat('</caption>')
    .concat(tableContent)
    .split('>')
    .map(part => (part.includes('<table') ? '' : part.trim()))
    .join('>')
    .replace('>>', '>')
    .replace('</table>', '');
  */

  return (
    <div className={styles.tableWrapper}>
      <table
        className={styles.table}
        summary={tableSummary}
        dangerouslySetInnerHTML={{ __html: formattedTable }}
      />
    </div>
  );
}
