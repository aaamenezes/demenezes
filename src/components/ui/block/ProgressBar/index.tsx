import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import style from './styles.module.css';

export default function ProgressBar() {
  const [barWidth, setBarWidth] = useState(0);

  const setNewBarWidth = useCallback(() => {
    const postElement = window.document.querySelector(
      '[class*="postContent"]'
    ) as HTMLElement | null;

    if (!postElement) return;

    const heightPercent = (window.scrollY * 100) / postElement.offsetHeight;
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
