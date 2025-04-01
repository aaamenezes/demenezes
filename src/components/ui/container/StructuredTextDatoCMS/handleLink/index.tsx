/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from '../../../base/Link';
import S from './styles.module.css';

export function handleLink({ node }: any) {
  return (
    <Link
      className={S.textLink}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      isExternal={node.meta && node.meta[0].value === '_blank'}
      inline
    >
      {node.children[0].value}
    </Link>
  );
}
