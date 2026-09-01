import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { ButtonProps } from './types';

export default function Button({
  children,
  onClick,
  disabled,
  name,
  className,
  id,
  variant = 'filled',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[`variant-${variant}`], className)}
      type={type}
      disabled={disabled}
      name={name}
      id={id}
    >
      {children}
    </button>
  );
}
