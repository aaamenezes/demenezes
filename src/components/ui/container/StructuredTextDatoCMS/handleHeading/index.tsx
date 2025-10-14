/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx } from '../../../../../utils/clsx';
import { simplifyString } from '../../../../../utils/simplifyString';
import style from './styles.module.css';
import fontStyle from '../../../../../../styles/font-style.module.css';

export function handleHeading({ node }: any) {
  const id = simplifyString(node.children[0].value);

  if (node.level === 2) {
    return (
      <h2
        className={clsx(style.title, fontStyle.postH2)}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h2>
    );
  }

  if (node.level === 3) {
    return (
      <h3
        className={clsx(style.title, fontStyle.postH3)}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h3>
    );
  }

  if (node.level === 4) {
    return (
      <h4
        className={clsx(style.title, fontStyle.postH4)}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h4>
    );
  }

  if (node.level === 5) {
    return (
      <h5
        className={clsx(style.title, fontStyle.postH5)}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h5>
    );
  }

  if (node.level === 6) {
    return (
      <h6
        className={clsx(style.title, fontStyle.postH6)}
        key={node.children[0].value + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {node.children[0].value}
        </a>
      </h6>
    );
  }

  return <></>;
}
