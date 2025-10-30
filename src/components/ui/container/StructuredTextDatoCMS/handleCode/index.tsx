/* eslint-disable @typescript-eslint/no-explicit-any */
import CodeBlock from '../../../base/CodeSnippet';

export default function HandleCode({ node }: { node: any }) {
  return (
    <CodeBlock key={node.code + Math.random()} language={node.language}>
      {node.code}
    </CodeBlock>
  );
}
