import { useState } from 'react';
import S from './styles.module.css';
import { clsx } from '../../../../utils/clsx';

export default function Input({
  name,
  id,
  placeholder,
  type = 'text',
  className = '',
  required = true,
}: {
  name: string;
  id: string;
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={event => setValue(event.target.value)}
      type={type}
      name={name}
      className={clsx(S.input, className)}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}
