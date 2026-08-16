import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import styles from '../styles.module.css';
import { clsx } from '@/utils/clsx';

export default function HandleList({ children }: { children: ReactNode }) {
  return (
    <ul className={styles.ul}>
      {Children.map(children, child => {
        if (!isValidElement<{ className?: string }>(child)) {
          return child;
        }

        return cloneElement(child, {
          className: clsx(child?.props?.className || '', styles.li),
        });
      })}
    </ul>
  );
}
