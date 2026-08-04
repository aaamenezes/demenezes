import { clsx } from '@/utils/clsx';
import { simplifyString } from '@/utils/simplifyString';
import { isSpan } from 'datocms-structured-text-utils';
import type { Heading } from 'datocms-structured-text-utils';
import style from './styles.module.css';

export default function HandleHeading({ node }: { node: Heading }) {
  const headingText = node.children
    .filter(isSpan)
    .map(child => child.value)
    .join('');
  const id = simplifyString(headingText);

  if (node.level === 2) {
    return (
      <h2
        className={clsx(style.title, style.postH2)}
        key={headingText + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {headingText}
        </a>
      </h2>
    );
  }

  if (node.level === 3) {
    return (
      <h3
        className={clsx(style.title, style.postH3)}
        key={headingText + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {headingText}
        </a>
      </h3>
    );
  }

  if (node.level === 4) {
    return (
      <h4
        className={clsx(style.title, style.postH4)}
        key={headingText + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {headingText}
        </a>
      </h4>
    );
  }

  if (node.level === 5) {
    return (
      <h5
        className={clsx(style.title, style.postH5)}
        key={headingText + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {headingText}
        </a>
      </h5>
    );
  }

  if (node.level === 6) {
    return (
      <h6
        className={clsx(style.title, style.postH6)}
        key={headingText + Math.random()}
        id={id}
      >
        <a className={style.titleLink} href={`#${id}`}>
          {headingText}
        </a>
      </h6>
    );
  }

  return <></>;
}
