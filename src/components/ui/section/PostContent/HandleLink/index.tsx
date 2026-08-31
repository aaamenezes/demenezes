import Link from '@/components/ui/base/Link';
import style from '../styles.module.css';
import type { HandleLinkProps } from './types';

export default function HandleLink({ node, children }: HandleLinkProps) {
  const isExternal = node.meta?.some(
    ({ id, value }) => id === 'target' && value === '_blank'
  );

  return (
    <Link
      className={style.a}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      isExternal={isExternal}
    >
      {children}
    </Link>
  );
}
