import { clsx } from '@/utils/clsx';
import { useState } from 'react';
import styles from './styles.module.css';
import type { InputProps } from './types';

export default function Input({
  name,
  placeholder,
  className,
  id,
  required,
  disabled,
  type = 'text',
}: InputProps) {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={event => setValue(event.target.value)}
      type={type}
      name={name}
      className={clsx(styles.input, className)}
      id={id}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
}
