import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function PostCardDescription({
  description,
  isCompact = false,
  isHero = false,
}: {
  description: string;
  isCompact?: boolean;
  isHero?: boolean;
}) {
  return (
    <Text
      className={clsx(style.postCardDescription, {
        [style.isCompact]: isCompact,
        [style.isHero]: isHero,
      })}
    >
      {description}
    </Text>
  );
}
