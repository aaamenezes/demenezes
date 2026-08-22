import Text from '@/components/ui/base/Text';
import style from '../styles.module.css';
import type { HandleParagraphProps } from './types';

export default function HandleParagraph({ children }: HandleParagraphProps) {
  return (
    <Text size="sm" lineHeight="lg" className={style.p}>
      {children}
    </Text>
  );
}
