import { clsx } from '@/utils/clsx';
import { simplifyString } from '@/utils/simplifyString';
import { isSpan } from 'datocms-structured-text-utils';
import type { Heading } from 'datocms-structured-text-utils';
import style from '../styles.module.css';

export default function HandleHeading({ node }: { node: Heading }) {
  const headingText = node.children
    .filter(isSpan)
    .map(child => child.value)
    .join('');
  const id = simplifyString(headingText);

  if (node.level === 2) {
    return (
      <h2 className={clsx(style.heading, style.h2)} key={headingText} id={id}>
        <a className={style.headingLink} href={`#${id}`}>
          <span className={style.headingLinkText}>{headingText}</span>
        </a>
      </h2>
    );
  }

  if (node.level === 3) {
    return (
      <h3 className={clsx(style.heading, style.h3)} key={headingText} id={id}>
        <a className={style.headingLink} href={`#${id}`}>
          <span className={style.headingLinkText}>{headingText}</span>
        </a>
      </h3>
    );
  }

  if (node.level === 4) {
    return (
      <h4 className={clsx(style.heading, style.h4)} key={headingText} id={id}>
        <a className={style.headingLink} href={`#${id}`}>
          <span className={style.headingLinkText}>{headingText}</span>
        </a>
      </h4>
    );
  }

  if (node.level === 5) {
    return (
      <h5 className={clsx(style.heading, style.h5)} key={headingText} id={id}>
        <a className={style.headingLink} href={`#${id}`}>
          <span className={style.headingLinkText}>{headingText}</span>
        </a>
      </h5>
    );
  }

  if (node.level === 6) {
    return (
      <h6 className={clsx(style.heading, style.h6)} key={headingText} id={id}>
        <a className={style.headingLink} href={`#${id}`}>
          <span className={style.headingLinkText}>{headingText}</span>
        </a>
      </h6>
    );
  }

  return <></>;
}
