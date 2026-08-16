import Link from '@/components/ui/base/Link';
import type { Link as LinkNode } from 'datocms-structured-text-utils';
import style from '../styles.module.css';

export default function HandleLink({
  node,
  children,
}: {
  node: LinkNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={style.a}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      isExternal={node.meta?.[0].value === '_blank'}
    >
      {children}
    </Link>
  );
}
