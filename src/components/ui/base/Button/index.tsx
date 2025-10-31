import { clsx } from '@/utils/clsx';
import type { MouseEvent, ReactNode } from 'react';
import style from './styles.module.css';

export default function Button({
  children,
  onClick = () => {},
  type = 'button',
  disabled = false,
  name = '',
  className = '',
  id = '',
}: {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  name?: string;
  className?: string;
  id?: string;
}) {
  /**
   * tab-index
   */
  return (
    <button
      onClick={onClick}
      className={clsx(style.button, className)}
      type={type}
      disabled={disabled}
      name={name}
      id={id}
    >
      {children}
    </button>
  );
}
