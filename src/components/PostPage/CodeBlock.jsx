import React from 'react'

export default function CodeBlock({ children, language }) {
  const code = children
    // .split(/ {/g) // troca ' {'
    // .join('{" {"}') // por '{" {"}'
    // .split(/ }/g) // troca ' }'
    // .join('{" }"}') // por '{" }"}'
    // .split(/^\s{2}/g) // troca '  '
    // .join('{" "}{" "}') // por '{" "}{" "}' em começo linha
    // .split(/"}\s{2}/g) // o mesmo que de cima
    // .join('"}{" "}') // mas após chaves
    // .split(/\n/g) // corrige as
    // .join("{'\n'}") // quebras de linha

  return (
    <pre className={`language-${ language }`}>
      <code className={`language-${ language }`}>
        {code}
      </code>
    </pre>
  )
}
