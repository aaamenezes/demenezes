import { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import styles from './styles.module.css';
import Icon from '../Icon';

function Button({
  variant = 'default',
  size = 'default',
  handleClick = () => {},
  type = 'button',
  disabled = false,
  children,
  className = '',
}: PropsWithChildren<{
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'glow';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
  className?: string;
}>) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className
      )}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
