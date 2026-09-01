import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  hideLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
}
