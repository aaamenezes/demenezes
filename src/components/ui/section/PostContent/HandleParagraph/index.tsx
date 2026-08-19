import Text from '@/components/ui/base/Text';
import type { ReactNode } from 'react';
import style from '../styles.module.css';

export default function HandleParagraph({ children }: { children: ReactNode }) {
  return (
    <Text size="sm" lineHeight="lg" className={style.p}>
      {children}
    </Text>
  );
}
