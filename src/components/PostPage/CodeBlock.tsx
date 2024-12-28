import React, { PropsWithChildren } from 'react';

export default function CodeBlock({
  children,
  language,
}: PropsWithChildren<{ language: string }>) {
  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
