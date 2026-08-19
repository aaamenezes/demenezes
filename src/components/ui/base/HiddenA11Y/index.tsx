import Text from '@/components/ui/base/Text';
import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function HiddenA11Y({ children }: { children: ReactNode }) {
  return (
    <Text as="span" className={style.hiddenA11Y}>
      {children}
    </Text>
  );
}
