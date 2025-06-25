import { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import S from './styles.module.css';

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
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
  className?: string;
}>) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        S.button,
        S[`variant-${variant}`],
        S[`size-${size}`],
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
