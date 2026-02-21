import type { MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'link';

type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  disabled?: boolean;
  name?: string;
  className?: string;
  id?: string;
}
