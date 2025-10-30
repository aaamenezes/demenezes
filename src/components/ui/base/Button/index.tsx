import { clsx } from '@/utils/clsx';
import { PropsWithChildren } from 'react';
import style from './styles.module.css';

export default function Button({
  children,
  handleClick = () => {},
  type = 'button',
  disabled = false,
  name = '',
  className = '',
  id = '',
}: PropsWithChildren<{
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  name?: string;
  className?: string;
  id?: string;
}>) {
  /**
   * tab-index
   */
  return (
    <button
      onClick={handleClick}
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
