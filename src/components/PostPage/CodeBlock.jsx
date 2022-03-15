import React from 'react'

export default function CodeBlock({ children, language }) {
  return (
    <pre className={`language-${ language }`}>
      <code className={`language-${ language }`}>
        {children}
      </code>
    </pre>
  )
}
