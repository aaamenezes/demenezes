import Link from '@/components/ui/base/Link';
import style from '../styles.module.css';
import type { HandleLinkProps } from './types';

export default function HandleLink({ node, children }: HandleLinkProps) {
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
