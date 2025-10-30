/* eslint-disable @typescript-eslint/no-explicit-any */
import Code from '@/components/ui/base/Code';

export default function HandleCode({ node }: { node: any }) {
  return (
    <Code key={node.code + Math.random()} language={node.language}>
      {node.code}
    </Code>
  );
}
