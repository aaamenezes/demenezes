import Link from '@/components/ui/base/Link';
import type { Link as LinkNode } from 'datocms-structured-text-utils';
import style from './styles.module.css';

export default function HandleLink({ node }: { node: LinkNode }) {
  return (
    <Link
      className={style.textLink}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      isExternal={node.meta && node.meta[0].value === '_blank'}
    >
      {node.children[0].value}
    </Link>
  );
}
