/* eslint-disable @typescript-eslint/no-explicit-any */
import CodeBlock from '../../../base/CodeSnippet';

export function handleCode({ node }: { node: any }) {
  return (
    <CodeBlock key={node.code + Math.random()} language={node.language}>
      {node.code}
    </CodeBlock>
  );
}
