function formatSpaces(line) {
  const lineArray = line.split('')
  const firstNonSpace = lineArray.find(item => item !== ' ')
  const spaceQuantity = lineArray.indexOf(firstNonSpace)

  if (spaceQuantity === 0) {
    let spaces = ''

    for (let i = 0; i < spaceQuantity; i++) {
      spaces += '{" "}'
    }

    return `${ spaces }${ line.trim() }`
  }

  return line
}

function formatLine(line) {
  let newLine = line
    .split(/ {/g) // troca ' {'
    .join('{" {"}') // por '{" {"}'
    .split(/ }/g) // troca ' }'
    .join('{" }"}') // por '{" }"}'

  newLine = formatSpaces(newLine)
  return newLine

  // .split(/^\s{2}/g) // troca '  '
  // .join('{" "}{" "}') // por '{" "}{" "}' em começo linha
  // .split(/"}\s{2}/g) // o mesmo que de cima
  // .join('"}{" "}') // mas após chaves
  // .split(/\n/g) // corrige as
  // .join("{'\n'}") // quebras de linha
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
      ) {
        return formatPart(part)
      }
      return part
    })
    .join('```')

  return formatedMarkdown
}
