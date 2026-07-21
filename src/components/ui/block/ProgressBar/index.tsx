import type { CSSProperties } from 'react';
import { useCallback, useEffect, useState } from 'react';
import style from './styles.module.css';

export default function ProgressBar({
  containerReference,
}: {
  containerReference: React.RefObject<HTMLElement | null>;
}) {
  const [barWidth, setBarWidth] = useState(0);

  const setNewBarWidth = useCallback(() => {
    // const postElement =
    //   window.document.querySelector('[class*="postContent"]') ||
    //   window.document.body;

    // if (postElement instanceof HTMLElement === false) return;
    if (!containerReference.current) return;

    const heightPercent =
      (window.scrollY * 100) / containerReference.current.offsetHeight;
    setBarWidth(heightPercent);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', setNewBarWidth);

    return () => {
      document.removeEventListener('scroll', setNewBarWidth);
    };
  }, []);

  return (
    <div
      className={style.bar}
      style={{ '--bar-width': `${barWidth}%` } as CSSProperties}
    />
  );
}
