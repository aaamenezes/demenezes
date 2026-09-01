import HiddenA11Y from '@/components/ui/base/HiddenA11Y';
import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { InputProps } from './types';

export default function Input({
  label,
  name,
  placeholder,
  id,
  value,
  onChange,
  hideLabel,
  required,
  disabled,
  className,
  type = 'text',
}: InputProps) {
  const labelElement = (
    <label className={styles.label} htmlFor={id}>
      <Text>{label}</Text>
    </label>
  );

  return (
    <div>
      {hideLabel ? <HiddenA11Y>{labelElement}</HiddenA11Y> : labelElement}
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        className={clsx(styles.input, className)}
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
