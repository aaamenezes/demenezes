/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from '../../../base/Link';
import style from './styles.module.css';

export default function HandleLink({ node }: any) {
  return (
    <Link
      className={style.textLink}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      isExternal={node.meta && node.meta[0].value === '_blank'}
      inline
    >
      {node.children[0].value}
    </Link>
  );
}
