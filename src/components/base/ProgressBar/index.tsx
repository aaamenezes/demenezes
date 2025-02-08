import { useEffect, useState } from 'react';
import type { CSSProperties } from 'styled-components';
import S from './styles.module.css';

export default function ProgressBar() {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    /**
     * colocar o queryselector fora da função setNewBarWidth
     * o if tbm
     * postheight tbm
     * tentar transformar setNewBarWidth em useCallback
     */
    function setNewBarWidth() {
      const postElement = document.querySelector(
        '[class*="PostPage"]'
      ) as HTMLElement | null;

      if (!postElement) return 0;

      const postHeight = postElement.offsetHeight;
      const heightPercent = (window.scrollY * 100) / postHeight;
      setBarWidth(heightPercent);
    }

    document.addEventListener('scroll', setNewBarWidth);

    return () => {
      document.removeEventListener('scroll', setNewBarWidth);
    };
  }, []);

  return (
    <div
      className={S.bar}
      style={{ '--bar-width': `${barWidth}%` } as CSSProperties}
    />
  );
}
