import React from 'react'

export default function Table({ tableTitle, tableSummary, tableContent }) {
  const formatedTable = '<caption>'
    .concat(tableTitle)
    .concat('</caption>')
    .concat(tableContent)
    .split('>')
    .map(part => part.includes('<table') ? '' : part.trim())
    .join('>')
    .replace('>>', '>')
    .replace('</table>', '')

  return (
    <table
      summary={tableSummary}
      dangerouslySetInnerHTML={{ __html: formatedTable }}
    />
  )
}
