import { clsx } from '@/utils/clsx';
import style from './styles.module.css';
import type { ButtonProps } from './types';

export default function Button({
  children,
  onClick = () => {},
  type = 'button',
  disabled = false,
  name = '',
  className = '',
  id = '',
}: ButtonProps) {
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
