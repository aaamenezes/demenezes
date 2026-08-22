import { clsx } from '@/utils/clsx';
import { Children, cloneElement, isValidElement } from 'react';
import styles from '../styles.module.css';
import type { HandleListProps } from './types';

export default function HandleList({ children }: HandleListProps) {
  return (
    <ul className={styles.ul}>
      {Children.map(children, child => {
        if (!isValidElement<{ className?: string }>(child)) {
          return child;
        }

        return cloneElement(child, {
          className: clsx(child?.props?.className, styles.li),
        });
      })}
    </ul>
  );
}
