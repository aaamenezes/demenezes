import Code from '@/components/ui/base/Code';
import type { Code as CodeNode } from 'datocms-structured-text-utils';

export default function HandleCode({ node }: { node: CodeNode }) {
  const language = ['html', 'css', 'javascript', 'js', 'typescript'].includes(
    node.language ?? ''
  )
    ? (node.language as 'html' | 'css' | 'javascript' | 'js' | 'typescript')
    : 'typescript';

  return (
    <Code key={node.code + Math.random()} language={language}>
      {node.code}
    </Code>
  );
}
