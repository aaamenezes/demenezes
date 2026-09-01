import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { PostCardDescriptionProps } from './types';

export default function PostCardDescription({
  description,
  isCompact,
  isHero,
}: PostCardDescriptionProps) {
  return (
    <Text
      className={clsx(
        styles.postCardDescription,
        isCompact && styles.isCompact,
        isHero && styles.isHero
      )}
    >
      {description}
    </Text>
  );
}
