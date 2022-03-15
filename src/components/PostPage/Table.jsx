import React from 'react'
import styled from 'styled-components'

const Cell = styled.td`
  font-weight: ${ ({ theme, highlight }) => (
    highlight && theme.fontWeight.button
  ) };
`

export default function Table({ data, firstColumnHighlight }) {
  const { header, body, footer } = data

  function handleCell(cells, isHeader) {
    const cellsElements = cells.map(
      (cell, index) => {
        const highlight = firstColumnHighlight && index === 0
        return isHeader
          ? <Cell key={cell} as='th' highlight={highlight}>{cell}</Cell>
          : <Cell key={cell} as='td' highlight={highlight}>{cell}</Cell>
      }
    )

    return <tr key={cells.join('-')}>{cellsElements}</tr>
  }

  const renderHeader = handleCell(header, true) || null
  const renderBody = body.map(cell => handleCell(cell, false)) || null
  const renderFooter = handleCell(footer, false) || null

  return (
    <table>
      {header && <thead>{renderHeader}</thead>}
      {body && <tbody>{renderBody}</tbody>}
      {footer && <tfoot>{renderFooter}</tfoot>}
    </table>
  )
}
