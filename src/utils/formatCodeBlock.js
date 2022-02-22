function formatSpaces(line) {
  const lineArray = line.split('')
  const firstNonSpace = lineArray.find(item => item !== ' ')
  const spaceQuantity = lineArray.indexOf(firstNonSpace)

  if (spaceQuantity > 0) {
    let spaces = ''

    for (let i = 0; i < spaceQuantity; i++) {
      spaces += '.'
    }

    return `${ spaces }${ line.trim() }`
  }

  return line
}

function formatLine(line) {
  let newLine = line
    .replace(/ {/g, '{" {"}')
    .replace(/ }/g, '{" }"}')

  newLine = formatSpaces(newLine)
  return newLine
}

function formatPart(part) {
  return part
    .split(/\n/g)
    .map(formatLine)
    .join('\n')
}

export function formatCodeBlock(markdown) {
  const markdownParts = markdown.split('```')
  const formatedMarkdown = markdownParts
    .map(part => {
      if (part.startsWith('js')
        || part.startsWith('javascript')
        || part.startsWith('jsx')
        || part.startsWith('css')
        || part.startsWith('html')
      ) {
        return formatPart(part)
      }
      return part
    })
    .join('```')

  return formatedMarkdown
}
