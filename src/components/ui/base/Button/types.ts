import type { MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'link';

type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
  id?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
}
