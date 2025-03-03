/* eslint-disable @typescript-eslint/no-explicit-any */
import LinkButton from '../../../base/LinkButton';
import S from './styles.module.css';

export function handleLink({ node }: any) {
  return (
    <LinkButton
      className={S.textLink}
      key={`${node.children[0].value} - ${node.url}`}
      href={node.url}
      external={node.meta && node.meta[0].value === '_blank'}
      inline
    >
      {node.children[0].value}
    </LinkButton>
  );
}
