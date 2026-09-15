import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { DescriptionProps } from './types';

function Description({ children }: DescriptionProps) {
  const { isCompact, isHero } = usePostCardContext();

  return (
    <Text
      className={clsx(
        styles.postCardDescription,
        isCompact && styles.isCompact,
        isHero && styles.isHero
      )}
    >
      {children}
    </Text>
  );
}

Description.displayName = 'PostCard.Description';

export default Description;
