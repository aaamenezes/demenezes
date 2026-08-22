import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';
import type { PostCardDescriptionProps } from './types';

export default function PostCardDescription({
  description,
  isCompact = false,
  isHero = false,
}: PostCardDescriptionProps) {
  return (
    <Text
      className={clsx(
        style.postCardDescription,
        isCompact && style.isCompact,
        isHero && style.isHero
      )}
    >
      {description}
    </Text>
  );
}
