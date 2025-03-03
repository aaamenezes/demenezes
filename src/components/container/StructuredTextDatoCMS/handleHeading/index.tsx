/* eslint-disable @typescript-eslint/no-explicit-any */
import { simplifyString } from '../../../../utils/simplifyString';
import S from './styles.module.css';

export function handleHeading({ node }: any) {
  const id = simplifyString(node.children[0].value);

  if (node.level === 2) {
    return (
      <h2
        className={S.title}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={S.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h2>
    );
  }

  if (node.level === 3) {
    return (
      <h3
        className={S.title}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={S.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h3>
    );
  }

  if (node.level === 4) {
    return (
      <h4
        className={S.title}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={S.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h4>
    );
  }

  if (node.level === 5) {
    return (
      <h5
        className={S.title}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={S.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h5>
    );
  }

  if (node.level === 6) {
    return (
      <h6
        className={S.title}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={S.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h6>
    );
  }

  return <></>;
}
