import React, { useState } from 'react';

export default function Input({
  type = 'text',
  name,
  className,
  id,
  placeholder,
  required = false,
}: {
  type?: string;
  name?: string;
  className?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={event => setValue(event.target.value)}
      type={type}
      name={name}
      className={className}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}
